var gulp = require('gulp');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gulpMinify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var runSequence = require('gulp-run-sequence');

var mainBowerFiles = require('gulp-main-bower-files');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var gulpFilter = require('gulp-filter');

var paths = {
  sass: ['./scss/**/*.scss'],
  audio: ['./**/*.{mp3,wav}'],
  js: ['./www/**/*.js', '!./www/js/*.js'],
  html: ['./www/**/*.html']
};

var sourcePath = './www/';
var buildPath = './dist/';

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean({force: true}));
});


gulp.task('connect', function() {
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

gulp.task('scripts', function() {
  return gulp.src([
    './www/app.js',
		'./www/services/*.js',
		'./www/filters/*.js',
		'./www/directives/*.js',
		'./www/controllers/*.js'

	])
    .pipe(concat('bundle.js'))
	//.pipe(gulpMinify())
    .pipe(gulp.dest(buildPath))
	.pipe(connect.reload());
});



gulp.task('main-bower-files', function() {
    var jsFilter = gulpFilter('**/*/*.js', { restore: true });
    var cssFilter = gulpFilter('**/*/*.css')
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulpMinify())
        .pipe(gulp.dest(buildPath + 'libs'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(gulp.dest(buildPath + 'assets/style/'))
});

gulp.task('audio', function() {
  gulp.src(sourcePath + paths.audio)
    .pipe(gulp.dest(buildPath))
    .pipe(connect.reload());
})

gulp.task('html', function () {
  gulp.src('./www/**/*.html')
    .pipe(gulp.dest(buildPath))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', function(cb){
  runSequence('clean', ['connect', 'sass', 'scripts', 'html', 'audio', 'main-bower-files'], 'watch');
})

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
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
