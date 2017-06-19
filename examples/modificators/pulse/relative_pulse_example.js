'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var circle = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 10}), color: '#000'});
  var absolutePulse = zAnimator.modificators.pulse.relativePulse({property: 'radius', subject: circle.circleShape, begin: 10, end: 100, speed: 100});
  var example = {
    name: 'relative pulse example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      circle.view.x = startPoint.x;
      circle.view.y = startPoint.y;
      absolutePulse.pulse(1);
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
