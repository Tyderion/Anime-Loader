'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * MINIFY BOWER JS-FILES
 */
gulp.task('deploy-minify-bower-js', ['deploy-clean'], function () {
  var source = gulpUtil.getBowerFiles().files.js;
  var destination = path.join($p.dist, $p.libDir);
  var fileName = gulpUtil.getBowerDistFilename('js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.uglify())
    .pipe($.header(gulpConfig.banner, {pkg: gulpUtil.getPkg()}))
    .pipe(gulp.dest(destination));
});
