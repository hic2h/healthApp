(function() {
  'use strict';

  angular
    .module('healtApp')
    .run(checkAuth);

  /** @ngInject */
  function checkAuth($rootScope, $location, $state, Auth) {

  }

})();
