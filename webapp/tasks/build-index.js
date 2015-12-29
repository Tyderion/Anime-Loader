'use strict';

var gulp       = require('gulp'),
    gulpUtil   = require(process.cwd() + '/gulp.util.js');

gulp.task('build-index', ['build-ts-compile', 'build-sass'], function (done) {
  gulpUtil.buildIndex(done);
});

gulp.task('build-index-serve', function (done) {
  gulpUtil.buildIndex(done);
});

gulp.task('build-ts-serve', ['build-ts-compile'], function (done) {
  gulpUtil.buildIndex(done);
});

gulp.task('build-sass-serve', ['build-sass'], function (done) {
  gulpUtil.buildIndex(done);
});


