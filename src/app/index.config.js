(function() {
  'use strict';

  angular
    .module('healtApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('authInterceptor');
  }

})();
