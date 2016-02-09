'use strict';

angular.module('bookmarksApp', ['ui.router', 'ngMessages', 'firebase', 'ui.bootstrap'])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/list'); // for easy debug
    //$urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('list', {
          url: '/list',
          template: '<bookmarks-list></bookmarks-list>'
        }
      )
      .state('login', {
          url: '/login',
          template: '<login></login>'
        }
      )
      .state('signup', {
          url: '/signup',
          template: '<signup></signup>'
        }
      );

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
  });
