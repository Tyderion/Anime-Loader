/// <reference path="../../../typings/index.d.ts"/>
/**
 * @name AnimeModel
 * @author Gabriel Nadler (nadler.gabriel@gmail.com)
 * @date 30-12-2015
 *
 * @description
 * Anime from Backend
 */

module app.models {
  'use strict';

  /**
   * @name IAnimeModelStatic
   * @description
   * This will be used to create or load models from the backend. Moreover
   * static variables are used to store global configs of the models
   */
  export interface IAnimeModelStatic {
    /**
     * Gives the model a Independent and Identically Distributed name
     */
    IID: string;
    /**
     * Defines the events for this model
     */
    EVENTS: IAnimeModelEvents;
    /**
     * This static variable stores the defaults
     */
    DEFAULTS: IAnimeModelBackend;
    /**
     * Creates and returns a new Model instance
     */
    getAll(): Promise<IAnimeModel[]>;
    search(query, fuzzy): Promise<IAnimeModel[]>;
    get(id): Promise<IAnimeModel>;
    getLinks(id): Promise<IAnimeLink[]>;
    download(id: string|number, episodes: Set<IAnimeLink>): Promise<void>;
  }

  /**
   * @name IAnimeModel
   * @description
   * Defines the data structure of the model and
   * some behaviour methods
   */
  export interface IAnimeModel {
    title?: string;
    qualitites?: string;
    link?: string;
    id?: string;

    save(): Promise <IAnimeModel>;
    destroy(): Promise<any>;
  }

  export interface IAnimeLink {
    link: string,
    id: number,
    title: string
  }

  /**
   * @name IAnimeModelBackend
   * @description
   * Defines the backend structure
   */
  export interface IAnimeModelBackend {
    title?: string;
    qualities?: string;
    link?: string;
    id?: string;
  }

  /**
   * @name IAnimeModelEvents
   * @description
   * This interface defines the model events which can
   * be listend at
   */
  export interface IAnimeModelEvents {
    CREATED: string;
    UPDATED: string;
    DESTROYED: string;
  }

  /**
   * @name IAnimeModelRoutes
   * @description
   * This interface defines the model routes to speak
   * with the backend api
   */
  export interface IAnimeModelRoutes {
    MAIN: string;
    SEARCH: string;
    LINKS: string;
    DOWNLOAD: string;
  }

  /**
   * @name IAnimeModelFactory
   * @description
   * Defines the model factory. This is used to access the model
   * throw the angular system
   */
  export interface IAnimeModelFactory {
    getModel(): IAnimeModelStatic;
  }

}
