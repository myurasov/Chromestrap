/**
 * Serve the site with live reload
 **/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['build:dev-browser'], function () {

  browserSync({
    server: {
      baseDir: "app",
      index: "views/index.html"
    }
  });

  // compile styles (reloads them automatically)
  gulp.watch(config.paths.app + '/sass/**', ['compile-styles']);

  // reload on change
  gulp.watch([
    config.paths.app + '/js/**',
    config.paths.app + '/views/**',
    config.paths.app + '/images/**',
  ], function (e) {
    return gulp.src(e.path).pipe(browserSync.reload({stream: true}));
  });

});