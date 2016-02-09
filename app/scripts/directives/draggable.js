'use strict';

angular.module('bookmarksApp')
  .directive('ngDraggable', ['$document', function($document) {
    return {
      link: function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;
        element.css({
          position: 'relative',
          cursor: 'pointer'
        });

        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px',
            "z-index": 100
          });
        }

        function mouseup() {
          element.css({
            top: '0px',
            left:  '0px',
            "z-index": 1
          });
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
          startX = 0;
          startY = 0;
          x = 0;
          y = 0;
        }
      }
    };
  }]);
