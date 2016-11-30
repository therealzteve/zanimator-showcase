'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];

  for(var j = 0; j < 200; j++){
    var square2 = zAnimator.factory.square(zAnimator.geometry.shapes.square(5), '#F00');
    var flasher = zAnimator.filters.opacity.flasher(square2);
    flasher.start();
    var fader = zAnimator.filters.opacity.fader(flasher, 1);
    squares.push(fader);
  }

  var circleGroup = zAnimator.filters.group.spiralCircleGroup(squares, 2, 100, 4);

  var example = {
    name: 'Spiral circle group Example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      for(var f of squares){
        f.start();
      }
      circleGroup.view.x = startPoint.x;
      circleGroup.view.y = startPoint.y;
      zAnimator.mainContainer.addChild(circleGroup.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(circleGroup.view);
      for(var f of squares){
        f.stop();
      }
    }
  };

  return example;
};
