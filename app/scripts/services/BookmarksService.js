'use strict';

angular.module('bookmarksApp')
  .service('BookmarksService', function ($q) {
    var bookmarks = [
      {
        id: '1',
        title: 'bookmark 1',
        creationDate: (new Date(2016, 1, 25)).getTime()
      },
      {
        id: '2',
        title: 'bookmark 2',
        creationDate: (new Date(2016, 1, 21)).getTime()
      },
      {
        id: '3',
        title: 'bookmark 3',
        creationDate: (new Date(2016, 1, 22)).getTime()
      }
    ];

    this.loadBookmarks = function () {
      var deferred = $q.defer();

      setTimeout(function () {
        deferred.resolve(bookmarks);
      }, 1000);

      return deferred.promise;
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
