(function() {
  'use strict';

  angular
    .module('healtApp')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(Auth, $state) {
      var vm = this;

      vm.isLoggedIn = Auth.isLoggedIn;

      vm.logout = function(){
        Auth.logout();
      };

    }
  }

})();
