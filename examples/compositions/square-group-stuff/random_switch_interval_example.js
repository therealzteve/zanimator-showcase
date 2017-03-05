'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];
  for(var i = 0; i < 100; i++){
    var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 5}), color: '#000'});
    squares.push(square);
  }
  var rectangleGroupInterval = zAnimator.compositions.squareGroupStuff.randomSquareSwitchInterval({interval: 100, spacing: 5, children: squares, columns: 10, visible: 95});

  var example = {
    name: 'Random square switch interval example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){

      rectangleGroupInterval.view.x = startPoint.x;
      rectangleGroupInterval.view.y = startPoint.y;
      zAnimator.mainContainer.add(rectangleGroupInterval);
      rectangleGroupInterval.start();
    },
    stop: function (){
      zAnimator.mainContainer.remove(rectangleGroupInterval);
      rectangleGroupInterval.stop();
    }
  };

  return example;
}
