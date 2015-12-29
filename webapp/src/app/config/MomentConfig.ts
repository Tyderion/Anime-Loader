/// <reference path="../../../typings/tsd.d.ts" />

module app.config {
  'use strict';

  /**
   * Moment Config
   * @desc
   *
   */
  var MomentConfig = () => {
    moment.locale('de');
  };
  MomentConfig.$inject = [];

  angular
    .module(Namespace)
    .run(MomentConfig);

}

