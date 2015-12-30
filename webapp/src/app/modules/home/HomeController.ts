/// <reference path="../../../../typings/tsd.d.ts" />

module app.home {
  'use strict';

  export class HomeController {
    static $inject = [
      models.IID.AnimeModelFactory,
      services.utils.IID.HttpUtilService
    ];

    public title: string = 'Bubu';
    public Anime: app.models.IAnimeModel[];

    private AnimeModel: app.models.IAnimeModelStatic;

    constructor(animeModelFactory: app.models.IAnimeModelFactory) {
      this.AnimeModel = animeModelFactory.getModel();
      this.AnimeModel.getAll().then(animes => {
        this.Anime = animes;
        console.log('anime loaded');
      });
    }

    public alert() {
      alert('adsf');
    }

  }

  angular.module(Namespace)
    .controller(IID.HomeController, HomeController);

}
