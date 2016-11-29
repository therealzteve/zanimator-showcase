'use strict';
exports.create = function(zAnimator){

  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(1000), '#000');
  var colorChanger = zAnimator.modificators.color.randomColorChanger(square);

  var example = {
    name: 'random color changer example',
    run: function(){
      square.view.x = 300;
      square.view.y = 300;
      colorChanger.start();
      zAnimator.mainContainer.addChild(square.view);
    },
    stop: function (){
      colorChanger.stop();
      zAnimator.mainContainer.removeChild(square.view);
    }
  };

  return example;
}
