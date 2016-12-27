/// <reference path="../../../../typings/index.d.ts" />

module app.home {
  'use strict';

  export const Namespace: string = 'app.home';

  export const IID = {
    HomeController: `${Namespace}.HomeController`
  };

  angular
    .module(Namespace, []);

}
