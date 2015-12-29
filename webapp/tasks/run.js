'use strict';

var gulp        = require('gulp'),
    gulpConfig  = require(process.cwd() + '/gulp.config.js'),
    $p          = gulpConfig.paths,
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    stream      = browserSync.stream,
    path        = require('path');

var server = require('gulp-server-livereload');

gulp.task('run', ['build'], function () {
  startServer(false);

  // Bower
  gulp.watch('./bower.json', ['build-index', 'build-fonts']);

  // SASS
  gulp.watch(path.join($p.base, $p.assetsDir, $p.sass), ['build-sass-serve', stream]);

  // TypeScript
  gulp.watch(path.join($p.base, $p.app.scripts), ['build-ts-serve', stream]);

  // Templates
  gulp.watch(path.join($p.base, $p.mainTpl), ['build-index-serve']);

});

gulp.task('run-static', ['build'], function () {
  startServer(true);
});

gulp.task('run-dist', function () {
  startServer(true, $p.dist);
});

function startServer(open, baseDir) {
  baseDir = baseDir || $p.base;
  browserSync({
    server: {
      baseDir: baseDir,
      index: $p.main
    },
    open: open,
    reloadDebounce: 300,
    logLevel: "info",
    logConnections: true
  });
}
