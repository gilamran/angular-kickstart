'use strict';

angular.module('bookmarksApp')
  .controller('signupController', function ($state) {

    this.doSignup = function (email, password) {
      console.log('doing to signup', email, password);
      $state.go('list');
    };
  });


angular.module('bookmarksApp')
  .component('signup', {
    controller: 'signupController',
    templateUrl: 'scripts/components/signup/signup.html'
  });
