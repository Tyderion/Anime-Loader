'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * MINIFY APP TEMPLATE-FILES
 */
gulp.task('deploy-minify-app-html', ['deploy-clean'], function () {

  var source = path.join($p.base, $p.app.templates);
  var destination = path.join($p.dist, $p.appDir);

  return gulp.src(source)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination))

});
