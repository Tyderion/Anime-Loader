/// <reference path="../../../../typings/tsd.d.ts"/>

module app.auth {
  'use strict';

  interface IAuthService {
    signin(email: string, password: string): Promise<any>;
    signout();
    refresh(): Promise<any>;
    hasValidSession(): boolean;
    getAccessToken(): string;
  }

  export class AuthService implements IAuthService {
    static $inject = [
      '$http',
      app.IID.AppConfig,
      '$state'
    ];
    static API_PATH = '/oauth/token';

    private session: AuthenticatioSession = new AuthenticatioSession();

    constructor(private $http: angular.IHttpService,
                private appConfig: IAppConfig,
                private $state: angular.ui.IStateService) {

    }

    //region Public API
    //======================================================================
    public signin(email: string, password: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.$http.post(this.appConfig.backendUrl + AuthService.API_PATH, {
            'username': email || '',
            'password': password || '',
            'grant_type': 'password',
            'client_id': this.appConfig.client_id,
            'client_secret': this.appConfig.client_secret
          })
          .success((res) => {
            this.session = new AuthenticatioSession(res);
            resolve(undefined);
          })
          .error(reject);
      });
    }

    public signout() {
      this.session = new AuthenticatioSession();
      this.$state.go('public.authLogout');
    }

    public refresh(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.$http.post(this.appConfig.backendUrl + AuthService.API_PATH, {
            'refresh_token': this.session.refreshToken,
            'grant_type': 'refresh_token',
            'client_id': this.appConfig.client_id,
            'client_secret': this.appConfig.client_secret
          })
          .success((res) => {
            this.session = new AuthenticatioSession(res);
            resolve(undefined);
          })
          .error(reject);
      });
    }

    public getAccessToken(): string {
      return this.session.accessToken;
    }

    public hasValidSession(): boolean {
      return this.getAccessToken() !== '';
    }

    //endregion
    //region Private API
    //======================================================================

    //endregion

  }

  angular
    .module(Namespace)
    .service(IID.AuthService, AuthService);
}
