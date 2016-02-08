'use strict';

angular.module('bookmarksApp')
  .controller('bookmarksListController', function (BookmarksService) {
    this.bookmarks = [];
    this.isLoading = true;
    BookmarksService.loadBookmarks().then(function(bookmarks) {
      this.bookmarks = bookmarks;
      this.isLoading = false;
    }.bind(this));

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
