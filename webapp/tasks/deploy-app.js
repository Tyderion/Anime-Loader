'use strict';

var gulp = require('gulp');

gulp.task('deploy-app', ['deploy-minify-app-css', 'deploy-minify-app-js', 'deploy-minify-app-html']);