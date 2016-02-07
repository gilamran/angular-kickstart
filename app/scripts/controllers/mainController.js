'use strict';

angular.module('bookmarksApp')
  .controller('mainController', function () {
    this.bookmarks = [
      {
        id: '1',
        title: 'bookmark 1',
        creationDate: (new Date(2016, 1, 20)).getTime()
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

    this.addBookmark = function() {
      this.bookmarks.push({
        id: Math.random().toString(),
        title: 'new bookmark',
        creationDate: (new Date()).getTime()
      });
    };

    this.removeBookmark = function(id) {
      this.bookmarks = this.bookmarks.filter(function(bookmark) {
        return (bookmark.id !== id)
      })
    }
  });
