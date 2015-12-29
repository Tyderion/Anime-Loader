'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});
/**
 * MINIFY APP CSS-FILES
 */
gulp.task('deploy-minify-app-css', ['deploy-clean'], function () {

  var cssFiles = path.join($p.base, $p.assetsDir, $p.css);

  var newCssFileName = path.join(
    $p.assetsDir,
    $p.cssDir,
    gulpUtil.getAppDistFilename('css')
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe($.minifyCss({keepBreaks: true}))
    .pipe($.rename(newCssFileName))
    .pipe($.header(gulpConfig.banner, {pkg: gulpUtil.getPkg()}))
    .pipe(gulp.dest($p.dist));
});
