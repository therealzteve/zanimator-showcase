'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];

  for(var j = 0; j < 4; j++){
    var line = zAnimator.factory.line(zAnimator.geometry.paths.line({x: 0, y: 0}, {x:0, y: 100}), 100, '#F00');
    var rotator = zAnimator.filters.rotator.linearRotator(line, 180);
    squares.push(rotator);
    rotator.start();
  }

  var circleGroup = zAnimator.filters.group.randomCircleGroup(squares, 0, 0);

  var linearRotator = zAnimator.filters.rotator.linearRotator(circleGroup, 0);

  var example = {
    name: 'Circle group with line example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      linearRotator.view.x = startPoint.x;
      linearRotator.view.y = startPoint.y;
      linearRotator.start();
      zAnimator.mainContainer.addChild(linearRotator.view);
    },
    stop: function (){
      linearRotator.stop();
      zAnimator.mainContainer.removeChild(linearRotator.view);
    }
  };

  return example;
}
