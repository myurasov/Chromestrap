/**
 * JSHint
 **/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');
var jshintStylish = require('jshint-stylish');
var utils = require('../utils');

gulp.task('jshint', function () {
  // read .jshintrc
  var jshintConfig = utils.readJson(config.paths.root + '/.jshintrc');

  return gulp.src(config.paths.app + '/js/**/*.js')
    .pipe(plugins.jshint(jshintConfig))
    .pipe(plugins.jshint.reporter(jshintStylish))
    .pipe(plugins.jshint.reporter('fail')); // fail if jshint found issues
});