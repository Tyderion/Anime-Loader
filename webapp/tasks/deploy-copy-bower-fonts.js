'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * COLLECTS THE BOWER FONT FILES AND COPYS THEM TO THE DIST DIR
 */
gulp.task('deploy-copy-bower-fonts', function () {
  return gulp
    .src(gulpUtil.getBowerFiles().files.fonts)
    .pipe($.header(gulpConfig.banner, {pkg: gulpConfig.pkg}))
    .pipe(gulp.dest(path.join($p.dist, $p.assetsDir, $p.fontDir)));
});
