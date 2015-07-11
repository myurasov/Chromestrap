/**
 * Compile sass files w/sourcemaps
 **/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('compile-styles', function () {
  return gulp.src(config.paths.app + '/sass/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', function (e) {
      console.log("Failed to compile SASS: ", e.message);
      this.emit('end');
    })
    .pipe(plugins.sourcemaps.write('.' /* write as a separate file */))
    .pipe(gulp.dest(config.paths.app_build))
    .pipe(browserSync.reload({stream: true}));
});