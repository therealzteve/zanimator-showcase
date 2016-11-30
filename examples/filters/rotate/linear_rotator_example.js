'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');

  var rotator = zAnimator.filters.rotator.linearRotator(square, 120);

  var example = {
    name: 'Rotator example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      rotator.start();
      rotator.view.x = startPoint.x;
      rotator.view.y = startPoint.y;
      zAnimator.mainContainer.addChild(rotator.view);
    },
    stop: function (){
      rotator.stop();
      zAnimator.mainContainer.removeChild(rotator.view);
    }
  };

  return example;
};
