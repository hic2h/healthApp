(function() {
  'use strict';

  angular
    .module('healtApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Auth, $state, recipesService, $window) {
    var vm = this;

    if (!Auth.isLoggedIn()) {
      return $state.go('login');
    }

    recipesService.recipes().success(function(response){
      vm.recipes = response;
    });

    vm.delete = function(id){
      if (!$window.confirm('Are you sure you want to delete this Recipe??')) {
        return;
      }
      recipesService.deleteRecipe(id).success(function(response){
        recipesService.recipes().success(function(response){
          vm.recipes = response;
        });
      });
    };

  }
})();
