'use strict';

angular.module('bookmarksApp')
  .controller('bookmarksListController', function (BookmarksService) {
    this.bookmarks = BookmarksService.bookmarks;
    this.orderBy = 'title';

    this.addBookmark = function () {
      BookmarksService.addBookmark();
    };

    this.removeBookmark = function (id) {
      BookmarksService.removeBookmark(id);
    };
  });

angular.module('bookmarksApp')
  .component('bookmarksList', {
    controller: 'bookmarksListController',
    templateUrl: 'scripts/components/bookmarks-list/bookmarks-list.html'
  });
