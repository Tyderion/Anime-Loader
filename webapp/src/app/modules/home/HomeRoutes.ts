/// <reference path="../../../../typings/tsd.d.ts" />

module app.home {
  'use strict';

  var Routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.home', {
        url: '/home',
        views: {
          'content': {
            templateUrl: 'app/modules/home/HomeView.html',
            controller: IID.HomeController,
            controllerAs: 'home'
          }
        }
      });
  };
  Routes.$inject = ['$stateProvider'];

  angular
    .module(Namespace)
    .config(Routes);

}
