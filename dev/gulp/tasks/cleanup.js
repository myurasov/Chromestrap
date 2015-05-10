/**
 * Cleanup build files
 **/

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('cleanup', function () {
  return del.sync(config.paths.app_build);
});