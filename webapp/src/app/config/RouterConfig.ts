/// <reference path="../../../typings/tsd.d.ts" />

module app.config {
  'use strict';

  var RouterConfig = ($urlRouterProvider) => {
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/auth/login');
  };
  RouterConfig.$inject = ['$urlRouterProvider'];

  angular
    .module(Namespace)
    .config(RouterConfig);

}

