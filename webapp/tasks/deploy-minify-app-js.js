'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * MINIFY APP JS-FILES
 */
gulp.task('deploy-minify-app-js', ['deploy-clean'], function () {
  var source = path.join($p.base, 'app.debug.js');
  var destination = path.join($p.dist, $p.appDir);
  var fileName = gulpUtil.getAppDistFilename('js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe($.header(gulpConfig.banner, {pkg: gulpUtil.getPkg()}))
    .pipe(gulp.dest(destination));
});
