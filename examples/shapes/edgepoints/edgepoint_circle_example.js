'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circleShape = zAnimator.geometry.shapes.circle({radius: 100});
  var circle = zAnimator.factory.circle({circleShape: circleShape, color: '#F00'});

  var example = {
    name: 'Edge circle point example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      circle.view.x = startPoint.x;
      circle.view.y = startPoint.y;
      zAnimator.mainContainer.addChild(circle.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(circle.view);
    }
  };

  return example;
};
