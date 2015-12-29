'use strict';

var gulp        = require('gulp'),
    gulpConfig  = require(process.cwd() + '/gulp.config.js'),
    $p          = gulpConfig.paths,
    gulpUtil    = require(process.cwd() + '/gulp.util.js'),
    $           = require('gulp-load-plugins')({lazy: true}),
    path        = require('path');

gulp.task('build-sass', function (done) {

  var mainSassFile = path.join($p.base, $p.assetsDir, $p.sassDir ,$p.sassMain);
  var mainCssDir = path.join($p.base, $p.assetsDir, $p.cssDir);
  var cssFile = gulpUtil.getPkg().name + '.css';
  gulpUtil.errors.sass = [];

  gulp
    .src(mainSassFile)
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.sass.sync().on('error', function (error) {
      var m = error.message.split('\n');
      gulpUtil.onError('[ SASS ] ' + m[0] + ':' + m[1]);
      gulpUtil.errors.sass.push('<i>' + m[0] + ':</i>' + m[1]);
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.sourcemaps.write())
    .pipe($.rename(cssFile))
    .pipe(gulp.dest(mainCssDir))
    .on('end', function () {
      if (gulpUtil.errors.sass.length === 0) {
        done();
      } else {
        gulpUtil.notify('SASS compiler failed!','Please check your log or open your browser');
        gulpUtil.buildErrorReporting(gulpUtil.errors, done);
      }
    });

});
