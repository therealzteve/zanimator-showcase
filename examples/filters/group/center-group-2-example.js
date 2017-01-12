/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = zAnimator.factory.square( { squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color:  '#F00'});
    squares.push(square);
  }
  var centerGroup = zAnimator.filters.group.centerGroup({children: [],width: 50});

  var objectCount = 0;
  var increase = true;
  var throttle = 0;

  var loopHandler = function(){
    throttle++;
    if(throttle > 2){
      throttle = 0;
      if(increase){
        centerGroup.add(squares[objectCount]);
        objectCount++;
        if(objectCount > 9){
          objectCount--;
          increase = !increase;
        }
      }else{
        centerGroup.remove(squares[objectCount]);
        objectCount--;
        if(objectCount < 0){
          objectCount++;
          increase = !increase;
        }
      }
    }
  };

  var example = {
    name: 'Center group Example 2',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      centerGroup.view.x = startPoint.x;
      centerGroup.view.y = startPoint.y;

      zAnimator.mainContainer.addChild(centerGroup.view);
      zAnimator.loop.addAnimation(loopHandler);
    },
    stop: function (){
      zAnimator.loop.removeAnimation(loopHandler);
      zAnimator.mainContainer.removeChild(centerGroup.view);
    }
  }

  return example;
}
