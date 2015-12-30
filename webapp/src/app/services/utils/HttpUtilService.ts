// <reference path="../../../../typings/tsd.d.ts"/>
module app.services.utils {
  'use strict';
  /**
   * @name IHttpUtilService
   * @description
   * This wrapper service build http request with the
   * needed information like headers.
   */
  export interface IHttpUtilService {
    /**
     * Create request to create a new object at the database
     */
    post(url: string, data: any, params?: any): Promise<any>;
    /**
     * Reads items from the backend
     */
    get(url: string, params?: any): Promise<any>;
    /**
     * Updated the given item at the backends database
     */
    update(url: string, data: any, params?: any): Promise<any>;
    /**
     * Deletes the given item at the backends database
     */
    destroy(url: string, params?: any): Promise<any>;
    /**
     * This is a helper method for custom requests
     */
    custom(method: string, url: string, params?: any, data?: any): Promise<any>;
    /**
     * Returns the backend url from the app config
     */
    getBackendUrl(): string;
  }
  /**
   * @name IHttpUtilService
   * @requires $http
   */
  export class HttpUtilService {
    static $inject = [
      '$http',
      app.IID.AppConfig
    ];
    public static NO_CONNECTION: string = IID.HttpUtilService + '.NoConnection';

    constructor(private $http: angular.IHttpService,
                private appConfig: app.IAppConfig) {
    }

    //region Public API
    //===========================================================================================
    public post(url: string, data: any, params?: any): Promise<any> {
      return this.request('POST', this.appConfig.backendUrl + url, params, data);
    }

    public get(url: string, params?: any): Promise<any> {
      return this.request('GET', this.appConfig.backendUrl + url, params);
    }

    public update(url: string, data: any, params?: any): Promise<any> {
      return this.request('PUT', this.appConfig.backendUrl + url, params, data);
    }

    public destroy(url: string, params?: any): Promise<any> {
      return this.request('DELETE', this.appConfig.backendUrl + url, params);
    }

    public custom(method: string, url: string, params?: any, data?: any): Promise<any> {
      return this.request(method, this.appConfig.backendUrl + url, params, data);
    }

    public getBackendUrl() {
      return this.appConfig.backendUrl;
    }

    //endregion
    //region Private API
    //===========================================================================================


    private request(method: string, url: string, params?: any, data?: any) {
      var body = {
        method: method || 'GET',
        url: url
      };
      //body['headers'] = {
      //  // Authorization: 'Bearer aksf8asdf8a8sf8a',
      //  //'Content-Type': `application/json`
      //};
      if (data) {
        body['data'] = data;
      }
      if (params) {
        body['params'] = params;
      }
      return new Promise((resolve, reject) => {
        this.$http(body)
          .success((data, status, headers, config) => {
            resolve(data);
          })
          .error((data, status, headers, config) => {
            reject({
              data: data,
              status: status,
              headers: headers,
              config: config
            });
          });
      });
    }

    //endregion
  }
  angular.module(Namespace)
    .service(IID.HttpUtilService, HttpUtilService)
    .service('myService', HttpUtilService);
}
