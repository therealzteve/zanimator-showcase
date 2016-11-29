'use strict';
exports.create = function(zAnimator){
  var swingingLine = zAnimator.compositions.pathMagic.bezier.swingingLine({length: 100, time: 1000, amplitude: 300});

  var example = {
    name: 'swinging line example',
    run: function(){
      swingingLine.view.x = 300;
      swingingLine.view.y = 300;
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
