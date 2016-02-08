'use strict';

angular.module('bookmarksApp')
  .controller('bookmarksListController', function (BookmarksService) {
    this.bookmarks;
    this.isLoading = true;
    this.orderBy = 'title';


    BookmarksService.loadBookmarks().then(function (bookmarks) {
      this.bookmarks = bookmarks;
      this.isLoading = false;
    }.bind(this));


    this.addBookmark = function () {
      BookmarksService.addBookmark();
    };

    this.removeBookmark = function (bookmark) {
      BookmarksService.removeBookmark(bookmark);
    };
  });

angular.module('bookmarksApp')
  .component('bookmarksList', {
    controller: 'bookmarksListController',
    templateUrl: 'scripts/components/bookmarks-list/bookmarks-list.html'
  });
