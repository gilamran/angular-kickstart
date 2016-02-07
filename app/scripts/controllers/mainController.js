'use strict';

angular.module('bookmarksApp')
  .controller('mainController', function (BookmarksService) {
    this.bookmarks = BookmarksService.bookmarks;

    this.addBookmark = function() {
      BookmarksService.addBookmark();
    };

    this.removeBookmark = function(id) {
      BookmarksService.removeBookmark(id);
    }
  });
