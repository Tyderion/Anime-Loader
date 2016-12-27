/// <reference path="../../../../typings/index.d.ts"/>

module app.auth {
  'use strict';

  export class AuthenticatioSession {

    public accessToken: string = '';
    public tokentype: string = '';
    public expiresIn: number = 0;
    public refreshToken: string = '';

    constructor(obj?: any) {
      if (_.isObject(obj)) {
        this.accessToken = obj['access_token'] || '';
        this.tokentype = obj['token_type'] || '';
        this.expiresIn = obj['expires_in'] || 0;
        this.refreshToken = obj['refresh_token'] || '';
      }
    }

  }

}
