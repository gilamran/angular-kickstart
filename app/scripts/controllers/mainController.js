'use strict';

angular.module('bookmarksApp')
  .controller('mainController', function (BookmarksService) {
    this.bookmarks = BookmarksService.bookmarks;
    this.orderBy = 'title';

    this.addBookmark = function() {
      BookmarksService.addBookmark();
    };

    this.removeBookmark = function(id) {
      BookmarksService.removeBookmark(id);
    };

    this.bookmarksSearchFilter = function(value) {
      var trimmedTxt = this.filterByTxt.trim();

      if (trimmedTxt !== '') {
        return value.title === this.filterByTxt;
      }
      else {
        return true;
      }
    };
  });
