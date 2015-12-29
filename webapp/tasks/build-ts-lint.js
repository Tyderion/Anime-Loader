'use strict';

var gulp      = require('gulp'),
  gulpConfig  = require(process.cwd() + '/gulp.config.js'),
  $p          = gulpConfig.paths,
  gulpUtil    = require(process.cwd() + '/gulp.util.js'),
  $           = require('gulp-load-plugins')({ lazy: true });

gulp.task('build-ts-lint', ['build-ts-clean'], function () {
  gulpUtil.errors.lint = [];
  return gulp.src([
    $p.base + '/' + $p.appDir + '/' + $p.app.scripts
  ])
    .pipe($.plumber())
    .pipe($.tslint())
    .pipe($.tslint.report(tslintReporter));
});

function tslintReporter(output, file, options) {
  output.forEach(function (item) {
    gulpUtil.onError('[ LINT ] (' + item.ruleName + ') ' + item.name + '[' + item.startPosition.line + ', ' + item.startPosition.character + ']: ' + item.failure);
    gulpUtil.errors.lint.push('(' + item.ruleName + ') <i>' + item.name + '[' + item.startPosition.line + ', ' + item.startPosition.character + ']:</i> ' + item.failure);
  });
  if (output.length !== 0) {
    gulpUtil.notify('TSLINT failed!');
  }
  gulpUtil.buildErrorReporting(gulpUtil.errors);
}


