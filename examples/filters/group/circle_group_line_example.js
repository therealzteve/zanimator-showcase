'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];

  for(var j = 0; j < 4; j++){
    var line = zAnimator.factory.line({linePath: zAnimator.geometry.paths.line({start: {x: 0, y: 0}, end:  {x:0, y: 100}}), thickness: 100, color: '#F00'});
    var rotator = zAnimator.filters.rotator.linearRotator({child: line, degrees: 180});
    squares.push(rotator);
    rotator.start();
  }

  var circleGroup = zAnimator.filters.group.randomCircleGroup({children: squares, radius: 0, randomRange: 0});

  var linearRotator = zAnimator.filters.rotator.linearRotator({child: circleGroup, speed: 10});

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
