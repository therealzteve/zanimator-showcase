'use strict';
exports.create = function(zAnimator){

  var circleShape = zAnimator.geometry.shapes.circle(50);
  var circleShape2 = zAnimator.geometry.shapes.circle(50);
  var squareShape = zAnimator.geometry.shapes.square(100);
  circleShape.path.subPaths[0].start.x = 0;
  circleShape.path.subPaths[0].start.y = 0;
  circleShape2.path.subPaths[0].start.x = 100;
  circleShape2.path.subPaths[0].start.y = -100;
  circleShape.path.subPaths = circleShape.path.subPaths.concat(squareShape.path.subPaths);
  circleShape.path.subPaths = circleShape.path.subPaths.concat(circleShape2.path.subPaths);
  var customObject = zAnimator.factory.customObject(circleShape, "#F00");

  var example = {
    name: 'custom object example',
    run: function(){
      customObject.view.x = 0;
      customObject.view.y = 0;
      zAnimator.mainContainer.addChild(customObject.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(customObject.view);
    }
  }

  return example;
}