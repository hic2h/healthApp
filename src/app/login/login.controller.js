(function() {
  'use strict';

  angular
    .module('healtApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(Auth, $state) {
    var vm = this;

    vm.login = function(id, password){
      vm.errorMsg = "";
      Auth.login({id: id, password: password}, function(err, response){
        if(err) vm.errorMsg = err;
        else if(response.success === false ) vm.errorMsg = response.message;
        else $state.go('home');
        console.log(response);
      });
    };

  }
})();
