'use strict';
exports.create = function(zAnimator){

  var squareShape = zAnimator.geometry.shapes.square(100);
  var square = zAnimator.factory.square(squareShape, '#F00');


  var example = {
    name: 'Edge point example',
    run: function(){
      square.view.x = 600;
      square.view.y = 600;
      zAnimator.mainContainer.addChild(square.view);
      for(var point of squareShape.path.getEdgePoints()){
        var edgeShape = zAnimator.geometry.shapes.square(10);
        var edgeObject = zAnimator.factory.square(edgeShape, '#000');
        edgeObject.view.x = point.x;
        edgeObject.view.y = point.y;
        zAnimator.mainContainer.addChild(edgeObject.view);
      }
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(square.view);
    }
  };

  return example;
}
