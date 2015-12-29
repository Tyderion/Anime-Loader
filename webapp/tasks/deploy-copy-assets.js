'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});


gulp.task('deploy-copy-assets', ['deploy-clean'], function () {
  var assestsFiles = [
    path.join($p.base, $p.assetsDir, $p.fontDir + '/**/*'),
    path.join($p.base, $p.assetsDir, $p.imagesDir + '/**/*'),
    path.join($p.base, $p.assetsDir, $p.configDir + '/config.json'),
    path.join($p.base, $p.assetsDir, $p.i18n)
  ];
  return gulp
    .src(assestsFiles, {base: $p.base})
    .pipe(gulp.dest($p.dist));
});
