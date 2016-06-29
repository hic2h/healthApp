(function () {
  'use strict';

  angular
    .module('healtApp')
    .factory('recipesService', function ($http, $q, $timeout, apiBaseUrl) {
      return {
        recipes: function (option) {
          option = option || {};
          return $http.get(apiBaseUrl + '/api/v1/recipes ', option);
        },

        recipe: function (id) {
          return $http.get(apiBaseUrl + '/api/v1/recipe/' + id);
        },

        saveRecipe: function (id, option) {
          option = option || {};
          return $http.put(apiBaseUrl + '/api/v1/recipe/' + id, option);
        },

        deleteRecipe: function (id) {
          return $http.delete(apiBaseUrl + '/api/v1/recipe/' + id);
        }
      };
    });
})();
