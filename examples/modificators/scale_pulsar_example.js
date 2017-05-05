'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circle = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 10}), color: '#000'});
  var scalePulsar = zAnimator.modificators.scale.linearPulsar({subject: circle, interval: zAnimator.interval({type: 'ms', ms: 1000}), limit: 10});

  var example = {
    name: 'scale pulsar example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      circle.view.x = startPoint.x;
      circle.view.y = startPoint.y;
      scalePulsar.start();
      zAnimator.mainContainer.add(circle);
    },
    stop: function (){
      scalePulsar.stop();
      zAnimator.mainContainer.remove(circle);
    }
  };

  return example;
};
