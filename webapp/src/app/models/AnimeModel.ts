/// <reference path="../../../typings/index.d.ts"/>

module app.models {
  'use strict';

  // Global Services
  let httpUtilService: services.utils.IHttpUtilService;

  /**
   * @name AnimeModel
   */
  export class AnimeModel implements IAnimeModel {

    //region Public Static Variables
    //====================================================================================================
    public static IID: string = 'app.models.AnimeModel';

    public static EVENTS: IAnimeModelEvents = <IAnimeModelEvents>{
      CREATED: AnimeModel.IID + '.events.created',
      UPDATED: AnimeModel.IID + '.events.updated',
      DESTROYED: AnimeModel.IID + '.events.destroyed'
    };

    public static ROUTES: IAnimeModelRoutes = <IAnimeModelRoutes>{
      MAIN: '/anime',
      SEARCH: '/anime/search',
      LINKS: '/anime/load',
      DOWNLOAD: '/anime/download'
    }

    public static DEFAULTS: IAnimeModelBackend = <IAnimeModelBackend> {
      title: undefined,
      additionalTitles: undefined,
      link: undefined
    }
    //endregion
    //region Public Variables
    //====================================================================================================
    title: string;
    qualities: string;
    id: string;
    link: string;
    //endregion
    //region Public Static Api
    //====================================================================================================

    public static getAll() {
      return httpUtilService.get(AnimeModel.ROUTES.MAIN).then(animes => animes.map(anime => new AnimeModel(anime)));
    }

    public static search(query: string, fuzzy: boolean) {
      return httpUtilService.post(AnimeModel.ROUTES.SEARCH, {
        query: query,
        fuzzy: fuzzy
      }).then(animes => animes.map(anime => new AnimeModel(anime)));
    }

    public static download(episodes: Set<IAnimeLink>) {
      let items = [];
      episodes.forEach(item => items.push(item));
      return httpUtilService.post(AnimeModel.ROUTES.DOWNLOAD, items);
    }

    public static get(id: string) {
      return httpUtilService.get(AnimeModel.ROUTES.MAIN + '/' + id).then(anime => new AnimeModel(anime));
    }

    public static getLinks(id: string) {
      return httpUtilService.get(AnimeModel.ROUTES.LINKS + '/' + id);
    }

    // public static get(id: string) {
    //   //TODO
    //   ;
    // }
    //endregion

    constructor(response) {
      this.convertResponse(response);
    }

    //region Public Api
    //====================================================================================================
    public save() {
      //var requestBody = this.convertForRequest();
      //TODO
      return undefined;
    }

    public destroy() {
      //TODO
      return undefined;
    }

    //endregion
    //region Private Api
    //====================================================================================================
    //private convertForRequest(): <IAnimeModelBackend> {
    //  var requestBody: IAnimeModelBackend  = <IAnimeModelBackend>{};
    //  requestBody.title = this.title;
    //  requestBody.additionalTitles = this.additionalTitles;
    //  requestBody.link = this.link;
    //  return requestBody;
    //}

    private convertResponse(response: IAnimeModelBackend) {
      this.title = response.title;
      this.qualities = response.qualities;
      this.link = response.link;
      this.id = response.id;
    }

    //endregion

  }

  //region Model Factory
  //===========================================================================================
  var AnimeModelFactory = (_httpUtilService: app.services.utils.IHttpUtilService) => {
    // Sets global var with the needed services
    httpUtilService = _httpUtilService;
    // Defines the factorys output
    let factory: IAnimeModelFactory = {
      getModel: () => <IAnimeModelStatic>AnimeModel
    };
    return factory;
  };
  AnimeModelFactory.$inject = <any>[
    services.utils.IID.HttpUtilService
  ];
  //endregion

  angular
    .module(Namespace)
    .factory(IID.AnimeModelFactory, AnimeModelFactory);

}
