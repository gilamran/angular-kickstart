'use strict';

angular.module('bookmarksApp').controller('BookmarkEditModalCtrl', function ($uibModalInstance, bookmark) {
  this.bookmark = bookmark;

  this.ok = function () {
    $uibModalInstance.close(this.bookmark);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss();
  };
});

