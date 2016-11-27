/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(100), '#000');
  var colorChanger = zAnimator.modificators.color.colorFader(square, 500, '#000', '#00F');

  var example = {
    name: 'color fader',
    run: function(){
      square.view.x = 0;
      square.view.y = 0;
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
