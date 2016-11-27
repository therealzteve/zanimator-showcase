'use strict';
exports.create = function(zAnimator){

  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');

  var rotator = zAnimator.filters.rotator.linearRotator(square, 120);

  var example = {
    name: 'Rotator example',
    run: function(){
      rotator.start();
      rotator.view.x = 10;
      rotator.view.y = 10;
      zAnimator.mainContainer.addChild(rotator.view);
    },
    stop: function (){
      rotator.stop();
      zAnimator.mainContainer.removeChild(rotator.view);
    }
  };

  return example;
};
