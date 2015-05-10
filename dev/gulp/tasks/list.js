/**
 * List tasks
 **/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// help
gulp.task('list', plugins.taskListing);
