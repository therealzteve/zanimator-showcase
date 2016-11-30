'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circle = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');
  circle.view.x = 300;
  circle.view.y = 300;
  var scalePulsar = zAnimator.modificators.scale.linearPulsar(circle, 2000, 10);

  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');
  square.view.x = 400;
  square.view.y = 300;
  var scalePulsar2 = zAnimator.modificators.scale.exponentialPulsar(square, 10, 10);

  var example = {
    name: 'scale pulsar example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      scalePulsar.start();
      scalePulsar2.start();
      zAnimator.mainContainer.addChild(square.view);
      zAnimator.mainContainer.addChild(circle.view);
    },
    stop: function (){
      scalePulsar.stop();
      scalePulsar2.stop();
      zAnimator.mainContainer.removeChild(square.view);
      zAnimator.mainContainer.removeChild(circle.view);
    }
  };

  return example;
};
