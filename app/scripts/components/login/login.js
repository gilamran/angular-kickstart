'use strict';

angular.module('bookmarksApp')
  .controller('loginController', function ($state) {

    this.doLogin = function (email, password) {
      console.log('doing to login', email, password);
      $state.go('list');
    };
  });


angular.module('bookmarksApp')
  .component('login', {
      controller: 'loginController',
      templateUrl: 'scripts/components/login/login.html'
    }
  );
