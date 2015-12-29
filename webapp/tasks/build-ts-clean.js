'use strict';

var gulp 				= require('gulp'),
  gulpConfig 		= require(process.cwd() + '/gulp.config.js'),
  $p         	 	= gulpConfig.paths,
  gulpUtil 			= require(process.cwd() + '/gulp.util.js'),
  $ 						= require('gulp-load-plugins')({ lazy: true }),
  del 					= require('del');

/**
 * CLEAN
 */
gulp.task('build-ts-clean', function (cb) {
  del([
    $p.base + '/' + $p.appDir + '/**/*.js',
    $p.base + '/' + $p.appDir + '/**/*.js.map'
  ], cb);
});
