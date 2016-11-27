'use strict';
exports.create = function(zAnimator){

  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
  var fader = zAnimator.filters.opacity.fader(square);
  var mover = zAnimator.filters.mover.point2point.linear(fader, 300);

  var example = {
    name: 'Linear Mover Example',
    run: function(){
      fader.view.x = 300;
      fader.view.y = 300;
      fader.start();
      mover.start();
      zAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 100, 'y': 0 }, () => { fader.stop(); });
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.removeChild(fader.view);
    }
  }

  return example;
}
