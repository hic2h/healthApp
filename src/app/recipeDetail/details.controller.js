(function() {
  'use strict';

  angular
    .module('healtApp')
    .controller('detailsController', detailsController);

  /** @ngInject */
  function detailsController($scope, Auth, $state, recipesService, $window, $stateParams) {
    var vm = this;

    vm.editForm = {};

    if (!Auth.isLoggedIn()) {
      return $state.go('login');
    }

    recipesService.recipe($stateParams.id).success(function(response){
      vm.recipe = response;
    });

    vm.deleteIngredientLines = function(obj, $index){
      if (!$window.confirm('Are you sure you want to delete this Recipe??')) {
        return;
      }
      vm.recipe.ingredientLines.splice($index, 1);
    };

    vm.editIngredientLines = function(obj, $index){
      vm.editForm[obj._id] = true;
      vm.ingredientLines = obj;
      console.log(vm.editForm);
      //vm.recipe.ingredientLines.splice($index, 1);
    };

    vm.saveIngredientLines = function(obj, $index){
      vm.editForm[obj._id] = false;
      console.log(vm.recipe.ingredientLines);
      //vm.recipe.ingredientLines.splice($index, 1);
    };

    vm.saveRecipe = function(){
      recipesService.saveRecipe($stateParams.id, vm.recipe).success(function(response){
        $state.go('home');
      });
    };

  }
})();
