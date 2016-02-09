'use strict';

angular.module('bookmarksApp')
  .controller('bookmarksListController', function (BookmarksService, $uibModal) {
    this.bookmarks;
    this.isLoading = true;
    this.orderBy = 'title';


    BookmarksService.loadBookmarks().then(function (bookmarks) {
      this.bookmarks = bookmarks;
      this.isLoading = false;
    }.bind(this));

    this.editBookmark = function(bookmark) {
      var modalInstance = $uibModal.open({
        templateUrl: 'scripts/components/bookmark-edit/BookmarkEditModalView.html',
        controller: 'BookmarkEditModalCtrl',
        controllerAs: 'bookmarkEditCtrl',
        resolve: {
          bookmark: bookmark
        }
      });

      return modalInstance.result;
    };

    this.addBookmark = function () {
      var newBookmark = BookmarksService.createBookmark();
      this.editBookmark(newBookmark).then(function (bookmark) {
        console.log('Modal close', bookmark);
        BookmarksService.addBookmark(newBookmark);
      });
    };

    this.removeBookmark = function (bookmark) {
      BookmarksService.removeBookmark(bookmark);
    };

    this.test = function () {
      console.log('asdf');
    }
  });

angular.module('bookmarksApp')
  .component('bookmarksList', {
    controller: 'bookmarksListController',
    templateUrl: 'scripts/components/bookmarks-list/bookmarks-list.html'
  });
