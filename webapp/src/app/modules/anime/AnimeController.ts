/// <reference path="../../../../typings/tsd.d.ts" />

module app.anime {
  'use strict';

  interface IAnimeStateParams extends angular.ui.IStateParamsService {
    id: string;
  }

  export class AnimeController {
    static $inject = [
      models.IID.AnimeModelFactory,
      '$stateParams'
    ];

    public title: string = 'Bubu';
    public Anime: app.models.IAnimeModel;
    public Links: string[];

    private AnimeModel: app.models.IAnimeModelStatic;

    constructor(animeModelFactory: app.models.IAnimeModelFactory,
                private $stateParams: IAnimeStateParams) {
      this.AnimeModel = animeModelFactory.getModel();
      this.AnimeModel.get($stateParams.id).then(anime => this.Anime = anime);
    }

    public loadAnime() {
      this.AnimeModel.getLinks(this.$stateParams.id).then(links => this.Links = links);
    }

  }

  angular.module(Namespace)
    .controller(IID.AnimeController, AnimeController);

}
