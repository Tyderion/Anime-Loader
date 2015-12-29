'use strict';

var gulp       = require('gulp'),
    path       = require('path'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * Config
 */
gulp.task('build-config', function (done) {
  var env = $.util.env.environment || $.util.env.env || 'dev';
  var configBase = path.join($p.base, $p.assetsDir, $p.configDir);
    return gulp
    .src(path.join(configBase, env + '.json'))
    .pipe($.rename('config.json'))
    .pipe(gulp.dest(configBase));
});
