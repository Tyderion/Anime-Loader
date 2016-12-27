/// <reference path="../../../../typings/index.d.ts" />

module app.auth {
  'use strict';

  var Routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('public.login', {
        url: '/auth/login',
        views: {
          'content': {
            templateUrl: 'app/modules/auth/LoginView.html',
            controller: app.auth.IID.LoginController,
            controllerAs: 'vm'
          }
        }
      });
  };
  Routes.$inject = ['$stateProvider'];

  angular
    .module(Namespace)
    .config(Routes);

}
