/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(100), '#000');
  var colorChanger = zAnimator.modificators.color.colorFader(square, 500, '#000', '#00F');

  var example = {
    name: 'color fader',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
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
