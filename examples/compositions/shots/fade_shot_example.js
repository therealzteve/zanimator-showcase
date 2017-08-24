'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var newCircleShot;

  var example = {
    name: 'fade shot example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      newCircleShot = zAnimator.compositions.shots.fadeShot({'child': zAnimator.factory.circle({'circleShape': zAnimator.geometry.shapes.circle({'radius': 100})}), 'interval': zAnimator.interval({'type': 'ms', "ms": 1000})});

      newCircleShot.view.x = startPoint.x;
      newCircleShot.view.y = startPoint.y;
      zAnimator.mainContainer.add(newCircleShot);

      newCircleShot.pulse(1);
    },
    stop: function (){
      if(newCircleShot){
        zAnimator.mainContainer.remove(newCircleShot);
      }
    }
  };

  return example;
}
