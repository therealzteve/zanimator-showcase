'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var rotateShakeShot;

  var example = {
    name: 'shake rotate example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){

      var line = zAnimator.factory.line({linePath: zAnimator.geometry.paths.line({start: {x: 0, y: 0}, end:  {x:100, y: 0}}), thickness: 1, color: '#F00'});


      rotateShakeShot = zAnimator.compositions.shots.rotateShake({range: 30, shakeTime: zAnimator.interval({'type': 'ms', "ms": 80}), pulseTime: zAnimator.interval({'type': 'ms', "ms": 500}), child: line});
      rotateShakeShot.view.x = startPoint.x;
      rotateShakeShot.view.y = startPoint.y;
      zAnimator.mainContainer.add(rotateShakeShot);
      //echoCircles.start();
      rotateShakeShot.pulse();
    },
    stop: function (){
      if(rotateShakeShot){
        zAnimator.mainContainer.remove(rotateShakeShot);
      }
    }
  };

  return example;
}
