'use strict';

var gulp       = require('gulp'),
    gulpConfig = require(process.cwd() + '/gulp.config.js'),
    $p         = gulpConfig.paths,
    gulpUtil   = require(process.cwd() + '/gulp.util.js'),
    path       = require('path'),
    _          = require('lodash'),
    $          = require('gulp-load-plugins')({lazy: true});

/**
 * DIST INDEX INJECT
 */
gulp.task('deploy-index', [
  'deploy-minify-app-html',
  'deploy-minify-app-css',
  'deploy-minify-app-js',
  'deploy-minify-bower-css',
  'deploy-minify-bower-js'
], function (done) {

  var source = [];
  source.push(path.join($p.dist, $p.assetsDir, $p.css));
  source.push(path.join($p.dist, $p.appDir, $p.js));

  var bower = [];
  bower.push(path.join($p.dist, $p.libDir, $p.js));
  bower.push(path.join($p.dist, $p.libDir, $p.css));

  gulp
    .src(path.join($p.base, $p.mainTpl))
    .pipe($.rename($p.main))
    .pipe(gulp.dest($p.dist))
    .pipe($.inject(gulp.src(bower, {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe($.template(gulpUtil.getPkg()))
    .pipe(gulp.dest($p.dist))
    .on('end', function () {
      gulp.src(path.join($p.dist, $p.mainTpl))
        .pipe($.clean({force: true}))
        .pipe(gulp.dest('dist'))
        .on('end', function () {
          done();
        });
    });

});
