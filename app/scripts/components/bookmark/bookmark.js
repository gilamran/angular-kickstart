'use strict';

angular.module('bookmarksApp')
  .component('bookmark', {
    bindings: {
      bookmark: '=',
      onDeleteBookmark: '&'
    },
    templateUrl: 'scripts/components/bookmark/bookmark.html'
  });
