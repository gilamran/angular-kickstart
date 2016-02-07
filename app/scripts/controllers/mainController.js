'use strict';

angular.module('bookmarksApp')
  .controller('mainController', function ($scope) {
    $scope.bookmarks = [
      {
        id: '1',
        title: 'bookmark 1',
        creationDate: (new Date(2016, 1, 20)).getTime()
      },
      {
        id: '2',
        title: 'bookmark 2',
        creationDate: (new Date(2016, 1, 21)).getTime()
      },
      {
        id: '3',
        title: 'bookmark 3',
        creationDate: (new Date(2016, 1, 22)).getTime()
      }
    ];
  });
