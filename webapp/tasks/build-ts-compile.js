'use strict';

var gulp = require('gulp'),
  gulpConfig = require(process.cwd() + '/gulp.config.js'),
  $p = gulpConfig.paths,
  gulpUtil = require(process.cwd() + '/gulp.util.js'),
  $ = require('gulp-load-plugins')({lazy: true}),
  _ = require('lodash'),
  path = require('path');
/**
 * TS
 * Lints and compiles all .ts source files in the app.
 */
gulp.task('build-ts-compile', ['build-ts-lint'], function (done) {
  gulpUtil.errors.compile = [];
  var tsconfig = gulpConfig.typescript;
  tsconfig.out = 'c3le-admin-panel';

  var scripts = gulpUtil.getNgFiles();
  scripts.push('typings/**/*.d.ts');

  var tsResult = gulp.src(scripts, {
    base: '.'
  })
    .pipe($.sourcemaps.init()) // This means sourcemaps will be generated
    .pipe($.typescript({
      target: 'es5',
      sortOutput: true,
      removeComments: true,
      noEmitOnError: true,
      fast: true
    }));

  tsResult.js
    .on('error', function (err) {
      if (_.isObject(err.diagnostic.code)) {
        console.log('==========================');
        console.log(err.diagnostic.code);
        console.log('==========================');
      }
      gulpUtil.onError('[ TS ] (TS' + err.diagnostic.code + ') ' + err.relativeFilename + '[' + err.startPosition.line + ', ' + err.startPosition.character + ']: ' + err.diagnostic.messageText);
      gulpUtil.errors.compile.push('(TS' + err.diagnostic.code + ') <i>' + err.relativeFilename + '[' + err.startPosition.line + ', ' + err.startPosition.character + ']: </i>' + err.diagnostic.messageText);
    })
    .pipe($.concat('app.debug.js')) // You can use other plugins that also support gulp-sourcemaps
    .pipe($.sourcemaps.write()) // Now the sourcemaps are added to the .js file
    .pipe(gulp.dest(path.join($p.base)))
    .on('end', function () {
      if (gulpUtil.errors.compile.length === 0) {
        gulpUtil.notify('TS Compailer Done', '-');
        done();
      } else {
        gulpUtil.notify('TS Compailer failed!');
        gulpUtil.buildErrorReporting(gulpUtil.errors, done);
      }
    });

});
