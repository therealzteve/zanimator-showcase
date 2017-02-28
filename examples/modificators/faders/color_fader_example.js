/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 100}), color: '#000'});
  var colorChanger = zAnimator.modificators.color.colorFader({subject: square, speed: 500, color1: '#000', color2: '#00F'});

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
      zAnimator.mainContainer.add(square.view);
    },
    stop: function (){
      colorChanger.stop();
      zAnimator.mainContainer.remove(square.view);
    }
  };

  return example;
}
