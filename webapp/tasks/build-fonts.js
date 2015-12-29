'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

gulp.task('build-fonts', function () {

  var fontExt = [
    'svg', 'eot', 'ttf', 'woff', 'woff2', 'otf'
  ];

  var bowerFiles = gulpUtil.getBowerFiles().files.main().filter(function (filePath) {
    return filePath.indexOf(gulpConfig.ignoredBowerFiles) < 0;
  });

  bowerFiles = bowerFiles.filter(function (item) {
    var a = item.split('.');
    return fontExt.indexOf(a[a.length - 1]) >= 0;
  });

  bowerFiles = bowerFiles.concat(gulpConfig.fonts);

  return gulp
    .src(bowerFiles)
    .pipe(gulp.dest(path.join($p.base, $p.assetsDir, $p.fontDir)));

});
