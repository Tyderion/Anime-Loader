/// <reference path="../../../../typings/index.d.ts" />

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
    public Links: app.models.IAnimeLink[];
    public query: string = '';

    public selectedEpisodes: Set<app.models.IAnimeLink> = new Set<app.models.IAnimeLink>();

    private AnimeModel: app.models.IAnimeModelStatic;

    constructor(animeModelFactory: app.models.IAnimeModelFactory,
                private $stateParams: IAnimeStateParams) {
      this.AnimeModel = animeModelFactory.getModel();
      this.AnimeModel.get($stateParams.id).then(anime => this.Anime = anime);
    }

    public filter() {
      let self = this;
      return (item: app.models.IAnimeLink) => {
        try {
          let match = new RegExp(self.query).exec(item.title);
          return match !== null;
        } catch (err) {
          return item.title.indexOf(self.query) > -1;
        }
      };
    }

    public downloadSelected() {
      console.log('download', this.selectedEpisodes);
      this.AnimeModel.download(this.$stateParams.id, this.selectedEpisodes);
    }

    public loadAnime() {
      this.AnimeModel.getLinks(this.$stateParams.id).then(links => this.Links = links).then(() => {
        console.log(this.Links);
      });
    }

    public isSelected(item) {
      return this.selectedEpisodes.has(item);
    }

    public toggleEpisode(item: app.models.IAnimeLink) {
      if (this.selectedEpisodes.has(item)) {
        this.selectedEpisodes.delete(item);
      } else {
        this.selectedEpisodes.add(item);
      }
    }

  }

  angular.module(Namespace)
    .controller(IID.AnimeController, AnimeController);

}
