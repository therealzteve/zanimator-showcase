'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circle = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#000'});
  circle.view.x = 300;
  circle.view.y = 300;
  var scalePulsar = zAnimator.modificators.scale.linearPulsar({subject: circle, speed: 2000, limit: 10});

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
      zAnimator.mainContainer.add(circle.view);
    },
    stop: function (){
      scalePulsar.stop();
      zAnimator.mainContainer.remove(circle.view);
    }
  };

  return example;
};
