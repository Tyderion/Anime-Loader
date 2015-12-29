'use strict';

var gulp = require('gulp');

gulp.task('build', [
  'build-config',
  'build-fonts',
  'build-index',
  'build-sass',
  'build-ts-compile'
]);

