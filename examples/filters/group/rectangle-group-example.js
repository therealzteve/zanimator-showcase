'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var interval = zAnimator.interval({type: 'ms', ms: 1000});
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
    var fader = zAnimator.filters.opacity.fader({child: square, interval: interval});
    squares.push(fader);
  }
  var rectangleGroup = zAnimator.filters.group.rectangleGroup({children: squares, columns: 25});

  var example = {
    name: 'Rectangle group Example',
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
      rectangleGroup.view.x = startPoint.x;
      rectangleGroup.view.y = startPoint.y;

      zAnimator.mainContainer.add(rectangleGroup);
    },
    stop: function (){
      zAnimator.mainContainer.remove(rectangleGroup);
    }
  };

  return example;
}
