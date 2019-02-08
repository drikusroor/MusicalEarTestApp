var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    gulpMinify = require('gulp-minify'),
    ts = require('gulp-typescript'),
    filesExist = require('files-exist'),
    clean = require('gulp-clean');

var sourcePath = './www/';
var buildPath = './dist/';

var paths = {
  sass: ['./www/scss/**/*.scss'],
  audio: ['./**/*.{mp3,wav}'],
  js: ['./www/**/*.js', '!./www/js/*.js'],
  ts: ['./www/**/*.ts'],
  assets: [sourcePath + '**/*.{html,png,jpg}']
};

gulp.task('clean', function () {
  return gulp.src('./dist', { read: false, allowEmpty: true })
    .pipe(clean());
});


function gulpConnect() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
};

function taskSass() {
  return gulp.src(sourcePath + './scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath + './assets/style'));
}

function taskTs() {
  return gulp.src(sourcePath + '/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'bundle.js'
    }))
    .pipe(gulp.dest(buildPath));
}

function taskAssets() {
  return gulp.src(paths.assets)
    .pipe(gulp.dest(buildPath))
}

gulp.task('scripts', function () {
  return gulp.src([sourcePath + 'app.js', sourcePath + '**/*/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(buildPath))
});

function vendorScripts() {
  return gulp.src(filesExist([
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/foundation-sites/js/foundation.min.js",
      "./node_modules/angular/angular.min.js",
      "./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js",
      "./node_modules/angular-ui-event/dist/event.min.js",
      "./node_modules/angular-resource/angular-resource.min.js",
    ]))
    .pipe(concat('vendor.js'))
    .pipe(gulpMinify())
    .pipe(gulp.dest(buildPath + 'libs'))
}

function audio() {
  return gulp.src(sourcePath + paths.audio)
    .pipe(gulp.dest(buildPath))
}

function watch() {
  gulp.watch(paths.sass, taskSass),
  gulp.watch(paths.ts, taskTs),
  gulp.watch(paths.assets, taskAssets)
}

gulp.task('default', 
  gulp.series('clean', gulp.series(taskSass, taskTs, taskAssets, audio, vendorScripts), gulp.parallel(gulpConnect, watch))
)