'use strict';
exports.create = function(zAnimator){

  var squares = [];
  /*for(var i = 0; i < 100; i++){
    var square = myAnimator.factory.square(10, '#F00');
    var fader = myAnimator.filters.opacity.fader(square);
    squares.push(fader);
  }*/

  for(var j = 0; j < 100; j++){
    var square2 = zAnimator.factory.square(zAnimator.geometry.shapes.square(30), '#F00');
    var flasher = zAnimator.filters.opacity.flasher(square2);
    flasher.start();
    var fader = zAnimator.filters.opacity.fader(flasher, 1);
    squares.push(fader);
  }

  var circleGroup = zAnimator.filters.group.circleGroup(squares, 100);
  circleGroup.view.x = 300;
  circleGroup.view.y = 300;

  var example = {
    name: 'Circle group Example',
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
}
