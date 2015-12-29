/// <reference path="../../../typings/tsd.d.ts" />

module app.layout {
  'use strict';

  export class LayoutNavController {
    static $inject = [
      '$location'
    ];

    public searchActive: boolean = false;
    public displaySearchResultsAsList: boolean = false;
    private _searchString: string = '';

    public get searchString() {
      return this._searchString;
    }

    public set searchString(newValue: string) {
      if (this._searchString === '' && newValue !== '') {
        this.searchActive = true;
      }
      this._searchString = newValue;
    }

    constructor(private $location: angular.ILocationService) {
    }

    public startSearch() {
      this.searchActive = true;
    }

    public hideSearch() {
      this.searchActive = false;
    }

    public abortSearch() {
      this.searchString = '';
      this.hideSearch();
    }

    public useList() {
      this.displaySearchResultsAsList = true;
    }

    public useGrid() {
      this.displaySearchResultsAsList = false;
    }

    public isActive(path) {
      return path === this.$location.path().split('/')[1];
    }
  }

  angular.module(Namespace)
    .controller(IID.LayoutNavController, LayoutNavController);
}
