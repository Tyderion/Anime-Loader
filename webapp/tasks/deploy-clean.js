'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    del        = require('del'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

gulp.task('deploy-clean', function (done) {
  del([
    $p.dist
  ], done);
});
