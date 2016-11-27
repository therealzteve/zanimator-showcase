/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){

  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
    squares.push(square);
  }
  var centerGroup = zAnimator.filters.group.centerGroup(null, {'width': 50});

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
    run: function(){
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
