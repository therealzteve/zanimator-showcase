'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circle = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 10}), color: '#000'});
  var intervalPulse = zAnimator.modificators.pulse.intervalPulse({property: 'radius', subject: circle.circleShape, begin: 10, end: 100, relative: true, interval: zAnimator.interval({type: 'ms', ms: 1000})});
  var example = {
    name: 'interval pulse example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      circle.view.x = startPoint.x;
      circle.view.y = startPoint.y;
      intervalPulse.pulse(Math.random() * 2);
      zAnimator.mainContainer.add(circle);
      zAnimator.loop.addComponent(circle);
    },
    stop: function (){
      zAnimator.mainContainer.remove(circle);
      zAnimator.loop.removeComponent(circle);
    }
  };

  return example;
};
