/**
 * Build
 **/

var gulp = require('gulp');
var runSequence = require('run-sequence');

// build for the dev environment (browser)
gulp.task('build:dev-browser', function (callback) {
  runSequence(
    'set-env:dev-browser',
    'cleanup',
    'update-build',
    'compile-styles',
    callback
  );
});

// build for the dev environment (chrome app)
gulp.task('build:dev-app', function (callback) {
  runSequence(
    'set-env:dev-app',
    'cleanup',
    'update-build',
    'compile-styles',
    callback
  );
});
