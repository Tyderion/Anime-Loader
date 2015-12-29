/// <reference path="../../../../typings/tsd.d.ts" />

module app.auth {
  'use strict';

  export const Namespace = 'app.auth';

  export const IID = {
    LoginController: `${Namespace}.LoginController`,
    AuthService: `${Namespace}.AuthService`
  };

  angular
    .module(Namespace, []);

}
