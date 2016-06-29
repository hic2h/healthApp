(function () {
  'use strict';

  angular
    .module('healtApp')
    .factory('authInterceptor', function ($rootScope, $q, $cookies, $injector, Util, $log) {
      var state;
      return {
        // Add authorization token to headers
        request: function(config) {
          config.headers = config.headers || {};
          if ($cookies.get('token')) {
            config.headers['x-access-token'] = $cookies.get('token');
          }
          return config;
        },

        // Intercept 401s and redirect you to login
        responseError: function(response) {
          if (response.status === 401) {
            (state || (state = $injector.get('$state')))
              .go('signin');
            // remove any stale tokens
            $cookies.remove('token');
          }
          return $q.reject(response);
        }
      };
    });
})();
