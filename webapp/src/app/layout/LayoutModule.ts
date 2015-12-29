/// <reference path="../../../typings/tsd.d.ts" />

module app.layout {
  'use strict';

  export const Namespace: string = 'app.layout';

  export const IID = {
    LayoutNavController: `${Namespace}.LayoutNavController`
  };

  angular
    .module(Namespace, []);

}
