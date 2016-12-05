var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');

var browserSync = require('browser-sync').create();

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
//for production, change outputStyle to 'compressed' for minified css.

gulp.task('sass', function(){
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css'))
    .pipe(sassdoc())
    .pipe(browserSync.reload({
      stream: true
    }));
});

// gulp.task('compileBootstrap', function() {
//   return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
//     .pipe(customizeBootstrap('app/scss/*.scss'))
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'));
// });


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss',['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: ['./', './app']
    },
  });
});
