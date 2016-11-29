'use strict';
exports.create = function(zAnimator){
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
  var fader = zAnimator.filters.opacity.fader(square);
  var mover = zAnimator.filters.mover.point2point.linearShake(fader, 300, 30);
  var example = {
    name: 'Shake Mover Example',
    run: function(){
      fader.view.x = 300;
      fader.view.y = 300;
      fader.start();
      mover.start();
      zAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 300, 'y': 300 }, () => { fader.stop(); });
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.removeChild(fader.view);
    }
  };

  return example;
}
