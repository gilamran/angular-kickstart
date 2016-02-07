'use strict';

angular.module('bookmarksApp')
  .directive('bookmark', function () {
    return {
      restrict: 'E',
      scope: {
        bookmark: '=',
        onDeleteBookmark: '&'
      },
      templateUrl: 'views/bookmark.html'
    };
  });
