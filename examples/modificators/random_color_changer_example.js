'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(1000), '#000');
  var colorChanger = zAnimator.modificators.color.randomColorChanger(square);

  var example = {
    name: 'random color changer example',
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
