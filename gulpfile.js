var gulp = require('gulp');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gulpMinify = require('gulp-minify');
var sh = require('shelljs');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var filesExist = require('files-exist')
var clean = require('gulp-clean');
var gulpFilter = require('gulp-filter');

var sourcePath = './www/';
var buildPath = './dist/';

var paths = {
  sass: ['./scss/**/*.scss'],
  audio: ['./**/*.{mp3,wav}'],
  js: ['./www/**/*.js', '!./www/js/*.js'],
  ts: ['./www/**/*.ts'],
  assets: [sourcePath + '**/*.{html,png,jpg}']
};

gulp.task('clean', function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean({ force: true }));
});


gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src(sourcePath + './scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath + './assets/style'));
});

gulp.task('scripts', function () {
  return gulp.src([sourcePath + 'app.js', sourcePath + '**/*/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(buildPath))
    .pipe(connect.reload());
});

gulp.task('ts', function () {
  return gulp.src(sourcePath + '/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'bundle.js'
    }))
    .pipe(gulp.dest(buildPath));
});

gulp.task('vendor-scripts', function () {
  var jsFilter = gulpFilter('**/*/*.js', { restore: true });
  var cssFilter = gulpFilter('**/*/*.css')
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
  .pipe(jsFilter.restore)
  .pipe(cssFilter)
  .pipe(gulp.dest(buildPath + 'assets/style/'))
});

gulp.task('audio', function () {
  gulp.src(sourcePath + paths.audio)
    .pipe(gulp.dest(buildPath))
    .pipe(connect.reload());
})

gulp.task('assets', function () {
  gulp.src(paths.assets)
    .pipe(gulp.dest(buildPath))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.ts, ['ts']);
  gulp.watch(paths.assets, ['assets']);
});

gulp.task('default', function (cb) {
  runSequence('clean', ['connect', 'sass', 'ts', 'assets', 'audio', 'vendor-scripts'], 'watch');
})

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
