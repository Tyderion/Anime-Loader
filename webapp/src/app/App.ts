/// <reference path="../../typings/tsd.d.ts"/>

module app {
  'use strict';

  angular
    .module('app', [
      // AngularJS Libs
      'ngSanitize',
      'ngMessages',
      'ngAnimate',
      'ngMaterial',

      // Third-Party Libs
      'ui.router',
      'pascalprecht.translate',
      'ui.router',
      'ui.bootstrap',
      'angular-loading-bar',
      'toaster',
      'ngFileUpload',

      // Configs, middleware, run...
      'app.AppConfig',
      'app.config',
      'app.layout',

      // Common directives, services, filters, models...
      'app.models',
      'app.filters',
      'app.directives',
      // App modules
      'app.home',
      'app.auth'

    ]);

  export const IID = {
    AppConfig: 'app.AppConfig'
  };

}
