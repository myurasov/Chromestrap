/**
 * Update build number, write to relevant files
 */

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

gulp.task('update-build', function () {
  var build = (new Date).toISOString().replace(/\..+$/, '').replace(/\D/g, '');
  fs.writeFileSync(config.paths.root + '/build', build); // global
  fs.writeFileSync(config.paths.app + '/sass/_build.scss', '$build: "' + build + '";'); // scss
  fs.writeFileSync(config.paths.app + '/js/build.js', "BUILD = '" + build + "';"); // js
});