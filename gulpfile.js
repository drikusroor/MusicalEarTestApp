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

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/**/*.js', '!./www/js/*.js'],
  html: ['./www/**/*.html']
};

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});

gulp.task('sass', function(done) {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done)
	.pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src([
		'./www/lib/angular/angular.min.js',
    './www/lib/angular-route/angular-route.min.js',
		'./www/lib/angular-animate/angular-animate.min.js',
		'./www/lib/angular-sanitize/angular-sanitize.min.js',
		'./www/lib/angular-ui-router/release/angular-ui-router.min.js',

		'./www/lib/angular-dynamic-locale/src/tmhDynamicLocale.js',
		'./www/lib/angular-translate/angular-translate.min.js',
		'./www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',

		'./www/lib/angular-resource/angular-resource.js',
		'./www/lib/angular-base64/angular-base64.min.js',
		'./www/lib/angular-filter/dist/angular-filters.min.js',
    './www/lib/jquery/dist/jquery.js',
    './www/lib/angular-ui-event/dist/event.js',
    './www/app.js',
		'./www/services/*.js',
		'./www/filters/*.js',
		'./www/directives/*.js',
		'./www/controllers/*.js'

	])
    .pipe(concat('all.js'))
	//.pipe(gulpMinify())
    .pipe(gulp.dest('./www/js'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./www/**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['connect', 'sass', 'scripts', 'html', 'watch']);

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
