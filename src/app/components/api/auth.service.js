(function () {
  'use strict';

  angular
    .module('healtApp')
    .factory('Auth', function ($location, $http, $cookies, $q, apiBaseUrl) {
      var currentUser = false;
      if ($cookies.get('token')) {
        currentUser = true;
      }

      return {

        /**
         * Authenticate user and save token
         *
         * @param  {Object}   user     - login info
         * @param  {Function} callback - optional, function(error, user)
         * @return {Promise}
         */
        login: function (user, callback) {
          return $http.post(apiBaseUrl + '/api/v1/authenticate', {
              id: user.id,
              password: user.password
            })
            .then(function (res) {
              if(res.data && res.data.success === true) $cookies.put('token', res.data.token);
              currentUser = true;
              callback(null, res.data);
            })
            .catch(function (err) {
              callback(err.data);
            });
        },
        /**
         * Delete access token and user info
         */
        logout: function () {
          $cookies.remove('token');
          currentUser = false;
        },

        /**
         * Check if a user is logged in
         *   (synchronous|asynchronous)
         *
         * @param  {Function|*} callback - optional, function(is)
         * @return {Bool|Promise}
         */
        isLoggedIn: function () {
          return currentUser;
        },

        /**
         * Get auth token
         *
         * @return {String} - a token string used for authenticating
         */
        getToken: function () {
          return $cookies.get('token');
        }

      };
    });
})();
