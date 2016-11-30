'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var squareShape = zAnimator.geometry.shapes.square(100);
  var square = zAnimator.factory.square(squareShape, '#F00');


  var example = {
    name: 'Edge point example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
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
