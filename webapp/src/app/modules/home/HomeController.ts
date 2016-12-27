/// <reference path="../../../../typings/index.d.ts" />

module app.home {
  'use strict';

  export class HomeController {
    static $inject = [
      models.IID.AnimeModelFactory,
      services.utils.IID.HttpUtilService
    ];

    public title: string = 'Bubu';
    public Anime: app.models.IAnimeModel[];
    public query: string = '';
    public fuzzy: boolean = false;

    private AnimeModel: app.models.IAnimeModelStatic;

    constructor(animeModelFactory: app.models.IAnimeModelFactory) {
      this.AnimeModel = animeModelFactory.getModel();
      this.loadAll();
    }

    public search() {
      if (this.query.length >= 3) {
        this.AnimeModel.search(this.query, this.fuzzy).then(anime => this.Anime = anime);
      } else {
        this.loadAll();
      }
    }

    private loadAll() {
      this.AnimeModel.getAll().then(animes => {
        this.Anime = animes;
        console.log('anime loaded');
      });
    }

  }

  angular.module(Namespace)
    .controller(IID.HomeController, HomeController);

}
