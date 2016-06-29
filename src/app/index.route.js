(function() {
  'use strict';

  angular
    .module('healtApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/recipe/:id',
        templateUrl: 'app/recipeDetail/details.html',
        controller: 'detailsController',
        controllerAs: 'vm'
      })
      .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
