'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var width = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var height = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};

  var interval = zAnimator.interval({type: 'ms', ms: 1000});
  var squares = [];
  for(var i = 0; i < 1000; i++){
    var square =  zAnimator.factory.image({ source: 'resources/black_blur_dots.png'});
    var fader = zAnimator.filters.opacity.fader({child: square, interval: interval});
    squares.push(fader);
  }
  var rectangleGroup = zAnimator.filters.group.randomRectangleGroup({children: squares, columns: 25});

  var example = {
    name: 'Random rectangle group Example 2',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'Width',
       'type': 'range',
       'ref': width
     },
     {
       'name': 'Height',
       'type': 'range',
       'ref': height
     }
    ],
    run: function(){
      rectangleGroup.width = width.value;
      rectangleGroup.height = height.value;

      rectangleGroup.refresh();
      for(var f of squares){
        f.start();
      }
      rectangleGroup.view.x = startPoint.x;
      rectangleGroup.view.y = startPoint.y;

      zAnimator.mainContainer.addChild(rectangleGroup.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(rectangleGroup.view);
    }
  };

  return example;
}
