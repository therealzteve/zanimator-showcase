'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
  var fader = zAnimator.filters.opacity.fader(square);

  var example = {
    name: 'Fader Example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      fader.view.x = startPoint.x;
      fader.view.y = startPoint.y;
      fader.start();
      zAnimator.mainContainer.addChild(fader.view);
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.removeChild(fader.view);
    }
  };

  return example;
}
