/// <reference path="../../../typings/index.d.ts" />

module app.layout {
  'use strict';

  var Routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin', {
        abstract: true,
        views: {
          'root': {
            templateUrl: 'app/layout/AdminView.html',
            controller: IID.LayoutNavController,
            controllerAs: 'navigation'
          }
        }
      })
      .state('public', {
        abstract: true,
        views: {
          'root': {
            templateUrl: 'app/layout/PublicView.html'
          }
        }
      });
  };
  Routes.$inject = ['$stateProvider'];

  angular
    .module(Namespace)
    .config(Routes);

}
