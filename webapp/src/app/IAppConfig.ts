/// <reference path="../../typings/index.d.ts"/>

module app {
  'use strict';

  /**
   * Defines the content of the generated Application config from the
   * Bootstrap.ts file.
   */
  export interface IAppConfig {
    /**
     * Name of the current environment
     */
    environment: string;
    /**
     * Path to the backend api
     */
    backendUrl: string;
    /**
     * Default language of the application
     */
    language: string;
    /**
     * Client Id for the backend api
     */
    client_id: string;
    /**
     * Secret for the auth of the bakcend api
     */
    client_secret: string;
  }

}
