/// <reference path="../../../typings/tsd.d.ts" />

module app.services {
  'use strict';

  export const Namespace = 'app.services';

  export const IID = {
    utils: `${Namespace}.utils`
  };

  angular
    .module(Namespace, [
      IID.utils
    ]);

}
