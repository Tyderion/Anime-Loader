/// <reference path="../../../../typings/tsd.d.ts" />

module app.anime {
  'use strict';

  export const Namespace: string = 'app.anime';

  export const IID = {
    AnimeController: `${Namespace}.AnimeController`
  };

  angular
    .module(Namespace, []);

}
