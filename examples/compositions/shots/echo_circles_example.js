'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var echoCircles;

  var example = {
    name: 'echo circles example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      echoCircles = zAnimator.compositions.shots.echoCircle({echoRadius: 10, amountEchoCircles: 10, mainRadius: 10, echoCircleRadius: 5, interval: zAnimator.interval({'type': 'ms', "ms": 250})});
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
