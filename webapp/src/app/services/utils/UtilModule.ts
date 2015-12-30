/// <reference path="../../../../typings/tsd.d.ts" />

module app.services.utils {
  'use strict';

  export const Namespace = 'app.services.utils';

  export const IID = {
    HttpUtilService: `${Namespace}.HttpUtilService`
  };

  angular
    .module(Namespace, []);

}
