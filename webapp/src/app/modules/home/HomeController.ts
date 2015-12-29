/// <reference path="../../../../typings/tsd.d.ts" />

module app.home {
  'use strict';

  export class HomeController {
    static $inject = [];

    public title: string = 'Bubu';

    constructor() {
      ;
    }

    public alert() {
      alert('adsf');
    }

  }

  angular.module(Namespace)
    .controller(IID.HomeController, HomeController);

}
