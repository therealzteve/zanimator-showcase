/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){

  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
    squares.push(square);
  }
  var centerGroup = zAnimator.filters.group.centerGroup(squares, {'width': 800, 'height': 800});

  var example = {
    name: 'Center group Example',
    run: function(){
      zAnimator.mainContainer.addChild(centerGroup.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(centerGroup.view);
    }
  }

  return example;
}
