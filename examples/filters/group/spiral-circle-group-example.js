'use strict';
exports.create = function(zAnimator){
  var squares = [];

  for(var j = 0; j < 200; j++){
    var square2 = zAnimator.factory.square(zAnimator.geometry.shapes.square(5), '#F00');
    var flasher = zAnimator.filters.opacity.flasher(square2);
    flasher.start();
    var fader = zAnimator.filters.opacity.fader(flasher, 1);
    squares.push(fader);
  }

  var circleGroup = zAnimator.filters.group.spiralCircleGroup(squares, 2, 100, 4);
  circleGroup.view.x = 300;
  circleGroup.view.y = 300;

  var example = {
    name: 'Spiral circle group Example',
    run: function(){
      for(var f of squares){
        f.start();
      }
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
