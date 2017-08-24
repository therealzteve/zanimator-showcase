'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var echoCircles;

  var example = {
    name: 'explosion example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      echoCircles = zAnimator.compositions.shots.explosion({speed: 300, amount: 100, fadeTime: zAnimator.interval({'type': 'ms', "ms": 1000})});
      echoCircles.view.x = startPoint.x;
      echoCircles.view.y = startPoint.y;
      zAnimator.mainContainer.add(echoCircles);
      //echoCircles.start();
      echoCircles.pulse();
    },
    stop: function (){
      if(echoCircles){
        zAnimator.mainContainer.remove(echoCircles);
      }
    }
  };

  return example;
}
