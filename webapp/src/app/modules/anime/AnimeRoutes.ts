/// <reference path="../../../../typings/tsd.d.ts" />

module app.anime {
  'use strict';

  var Routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.anime', {
        url: '/anime/:id',
        views: {
          'content': {
            templateUrl: 'app/modules/anime/AnimeView.html',
            controller: IID.AnimeController,
            controllerAs: 'anime'
          }
        }
      });
  };
  Routes.$inject = ['$stateProvider'];

  angular
    .module(Namespace)
    .config(Routes);

}
