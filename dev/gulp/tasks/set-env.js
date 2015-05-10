/**
 * Set environment (and write it to relevant files)
 **/

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

function setEnvironment(env) {
  fs.writeFileSync(config.paths.root + '/env', env);
  fs.writeFileSync(config.paths.app + '/sass/_env.scss', '$env: "' + env + '";'); // scss
  fs.writeFileSync(config.paths.app + '/js/env.js', "ENVIRONMENT = '" + env + "';"); // js
}

// set environment to 'dev-browser'
gulp.task('set-env:dev-browser', function () {
  setEnvironment('dev-browser');
});

// set environment to 'dev-app'
gulp.task('set-env:dev-app', function () {
  setEnvironment('dev-app');
});
