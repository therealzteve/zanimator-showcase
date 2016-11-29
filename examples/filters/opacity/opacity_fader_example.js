'use strict';
exports.create = function(zAnimator){

  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
  var fader = zAnimator.filters.opacity.fader(square);

  var example = {
    name: 'Fader Example',
    run: function(){
      fader.view.x = 300;
      fader.view.y = 300;
      fader.start();
      zAnimator.mainContainer.addChild(fader.view);
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.removeChild(fader.view);
    }
  };

  return example;
}
