'use strict';

angular.module('bookmarksApp')
  .service('BookmarksService', function ($http) {
    var bookmarks = [];
    var loadingPromise;

    this.loadBookmarks = function () {
      if (!loadingPromise) {
        loadingPromise = $http.get('data/bookmarks.json').then(function(response) {
          return response.data;
        });
      }
      return loadingPromise;
    };

    this.addBookmark = function () {
      bookmarks.push({
        id: Math.random().toString(),
        title: 'new bookmark',
        creationDate: (new Date()).getTime()
      });
    };

    this.getBookmarkIndexById = function (id) {
      for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].id === id) {
          return i;
        }
      }
      return -1;
    };

    this.removeBookmark = function (id) {
      var bookmarkIdx = this.getBookmarkIndexById(id);
      if (bookmarkIdx > -1) {
        bookmarks.splice(bookmarkIdx, 1);
      }
    };
  });
