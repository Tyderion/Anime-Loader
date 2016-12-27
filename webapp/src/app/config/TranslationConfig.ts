/// <reference path="../../../typings/index.d.ts" />

module app.config {
  'use strict';

  /**
   * Translate Config
   *
   * @desc angular-translate is an AngularJS module that makes your life much easier when it comes to i18n and l10n
   * including lazy loading and pluralization.
   *
   * @constructor
   */
  var TranslateConfig = ($translateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  };
  TranslateConfig.$inject = ['$translateProvider'];


  angular
    .module(Namespace)
    .config(TranslateConfig);

}
