'use strict';

var gulp       = require('gulp');

gulp.task('deploy', [
  'build',
  'deploy-copy-assets',
  'deploy-index'
]);


