'use strict';
/* globals Firebase */

angular.module('bookmarksApp')
  .service('BookmarksService', function ($firebaseArray) {
    var ref = new Firebase('https://kick-bookmarks.firebaseio.com/bookmarks');
    var loadingPromise;
    var bookmarks;

    this.loadBookmarks = function () {
      if (!loadingPromise) {
        loadingPromise = $firebaseArray(ref).$loaded().then(function(result) {
          bookmarks = result;
          return bookmarks;
        });
      }
      return loadingPromise;
    };

    this.addBookmark = function () {
      bookmarks.$add({
        title: 'new bookmark',
        creationDate: (new Date()).getTime()
      });
    };

    this.removeBookmark = function (bookmark) {
      bookmarks.$remove(bookmark);
    };
  });
