/**
 * Launch Crome App
 **/

var gulp = require('gulp');
var config = require('../config');
var utils = require('../utils');
var plugins = require('gulp-load-plugins')();

gulp.task('launch', ['build:dev-app'] , plugins.shell.task([
  '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome'
  + ' --load-and-launch-app=' + utils.escapeShellArg(config.paths.app)
]));