/// <reference path="../../../../typings/index.d.ts"/>

module app.auth {
  'use strict';

  class LoginController {
    static $inject = [
      '$scope',
      '$state'
    ];

    form: any;
    promise: Promise<any>;
    email: string;
    password: string;

    constructor(private authenticationService: AuthService,
                private $state: ng.ui.IStateService) {
      this.init();
    }

    //region Public API
    //======================================================================
    public submit() {
      this.$state.go('admin.home');
    }

    public reset() {
      this.email = '';
      this.password = '';
    }

    //endregion
    //region Private API
    //======================================================================
    private init() {
      this.reset();
    }

    //endregion

  }

  angular
    .module(Namespace)
    .controller(IID.LoginController, LoginController);
}
