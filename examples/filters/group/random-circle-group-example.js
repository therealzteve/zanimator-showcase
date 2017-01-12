'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];

  for(var j = 0; j < 200; j++){
    var square2 = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 5}), color: '#F00'});
    var flasher = zAnimator.filters.opacity.flasher({child: square2});
    flasher.start();
    var fader = zAnimator.filters.opacity.fader({child: flasher, speed: 1 });
    squares.push(fader);
  }

  var circleGroup = zAnimator.filters.group.randomCircleGroup({children: squares, radius: 80, randomRange:0 });
  circleGroup.view.x = 300;
  circleGroup.view.y = 300;

  var example = {
    name: 'Random Circle group Example',
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
}
