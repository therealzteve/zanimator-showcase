'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var circleShape = zAnimator.geometry.shapes.circle(50);
  var circleShape2 = zAnimator.geometry.shapes.circle(50);
  var squareShape = zAnimator.geometry.shapes.square(100);
  circleShape.path.subPaths[0].start.x = 0;
  circleShape.path.subPaths[0].start.y = 0;
  circleShape2.path.subPaths[0].start.x = 100;
  circleShape2.path.subPaths[0].start.y = -100;
  circleShape.path.subPaths = circleShape.path.subPaths.concat(squareShape.path.subPaths);
  circleShape.path.subPaths = circleShape.path.subPaths.concat(circleShape2.path.subPaths);
  var customObject = zAnimator.factory.path(circleShape.path, '#F00');

  var example = {
    name: 'path draw example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      customObject.view.x = startPoint.x;
      customObject.view.y = startPoint.y;
      zAnimator.mainContainer.addChild(customObject.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(customObject.view);
    }
  }

  return example;
}
