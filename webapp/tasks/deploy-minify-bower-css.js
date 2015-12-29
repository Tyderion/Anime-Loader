'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * MINIFY BOWER CSS-FILES
 */
gulp.task('deploy-minify-bower-css', ['deploy-clean'], function () {
  var cssFiles = gulpUtil.getBowerFiles().files.css;
  var fileName = gulpUtil.getBowerDistFilename('css');
  var newCssFileName = path.join(
    $p.libDir,
    fileName
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe($.concat(newCssFileName))
    .pipe($.minifyCss({keepBreaks: true, relativeTo: '../' + $p.assetsDir}))
    .pipe($.header(gulpConfig.banner, {pkg: gulpUtil.getPkg()}))
    .pipe(gulp.dest($p.dist));
});
