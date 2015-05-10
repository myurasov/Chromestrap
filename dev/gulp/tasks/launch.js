/**
 * Launch Crome App
 **/

var gulp = require('gulp');
var os = require('os');
var config = require('../config');
var utils = require('../utils');
var plugins = require('gulp-load-plugins')();

gulp.task('launch', ['build:dev-app'], launchChromeApp());

function launchChromeApp() {
  var chrome;

  if (os.platform() === "linux") {
    chrome = "/usr/bin/google-chrome"
  } else if (os.platform() === "darwin") {
    chrome = "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome"
  }

  return plugins.shell.task([
    chrome + ' --load-and-launch-app=' + utils.escapeShellArg(config.paths.app)
  ])
}