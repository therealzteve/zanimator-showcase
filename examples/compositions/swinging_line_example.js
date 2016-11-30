'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var swingingLine = zAnimator.compositions.pathMagic.bezier.swingingLine({length: 100, time: 1000, amplitude: 300});

  var example = {
    name: 'swinging line example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      swingingLine.view.x = startPoint.x;
      swingingLine.view.y = startPoint.y;
      swingingLine.start();
      zAnimator.mainContainer.addChild(swingingLine.view);
    },
    stop: function (){
      swingingLine.stop();
      zAnimator.mainContainer.removeChild(swingingLine.view);
    }
  };

  return example;
}
