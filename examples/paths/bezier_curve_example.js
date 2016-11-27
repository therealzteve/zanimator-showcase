'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var bezierCurve = zAnimator.geometry.paths.bezierCurve({x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: -50}, {x: 100, y: -50});
  var customObject = zAnimator.factory.path(bezierCurve, "#F00");

  var example = {
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    name: 'bezier curve example',
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