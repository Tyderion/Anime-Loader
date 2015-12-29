'use strict';

var gulp      = require('gulp'),
  gulpConfig  = require(process.cwd() + '/gulp.config.js'),
  $p          = gulpConfig.paths,
  gulpUtil    = require(process.cwd() + '/gulp.util.js'),
  $           = require('gulp-load-plugins')({ lazy: true }),
  _           = require('lodash'),
  path        = require('path');
/**
 * TS
 * Lints and compiles all .ts source files in the app.
 */
gulp.task('test', function (done) {
  gulpUtil.errors.compile = [];
  var tsconfig = gulpConfig.typescript;
  // tsconfig.out = 'c3le-admin-panel';

  var scripts = gulpUtil.getNgFiles();
  scripts.push('typings/**/*.d.ts');

  var tsResult = gulp.src('test/unit/**.spec.ts', {
    base: '.'
  })
    .pipe($.sourcemaps.init()) // This means sourcemaps will be generated
    .pipe($.typescript({
      target: 'es5',
      sortOutput: true,
      removeComments: false,
      noEmitOnError: true
    }));

  tsResult.js
    .on('error', function (err) {
      if (_.isObject(err.diagnostic.code)) {
        console.log(err.diagnostic.code);
      }
      gulpUtil.onError('[ TS ] (TS' + err.diagnostic.code + ') ' + err.relativeFilename + '[' + err.startPosition.line + ', ' + err.startPosition.character + ']: ' + err.diagnostic.messageText);
      gulpUtil.errors.compile.push('(TS' + err.diagnostic.code + ') <i>' + err.relativeFilename + '[' + err.startPosition.line + ', ' + err.startPosition.character + ']: </i>' + err.diagnostic.messageText);
    })
    .pipe($.sourcemaps.write()) // Now the sourcemaps are added to the .js file
    .pipe(gulp.dest('.'))
    .on('end', function () {
      if (gulpUtil.errors.compile.length === 0) {
        runKarma(done);
      } else {
        gulpUtil.buildErrorReporting(gulpUtil.errors, done);
      }
    });

});


function runKarma(done) {
  gulp
    .src(gulpUtil.getKarmaOptions().files)
    .pipe($.karma({
      configFile: './karma.config.js',
      action: 'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      done();
      throw err;
    })
    .on('end', function () {
      done();
    });
}