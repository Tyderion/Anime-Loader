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
    private AnimeModel: app.models.IAnimeModelStatic;

    constructor(animeModelFactory: app.models.IAnimeModelFactory,
                $stateParams: IAnimeStateParams) {
      this.AnimeModel = animeModelFactory.getModel();
      this.AnimeModel.get($stateParams.id).then(anime => this.Anime = anime);
    }

    public alert() {
      alert('adsf');
    }

  }

  angular.module(Namespace)
    .controller(IID.AnimeController, AnimeController);

}
