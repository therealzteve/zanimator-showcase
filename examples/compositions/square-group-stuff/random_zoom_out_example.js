'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];
  for(var i = 0; i < 100; i++){
    var square = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 50}), color: 'rgba(0,253,1,0.8)'});
    squares.push(square);
  }
  var rectangleGroup = zAnimator.compositions.squareGroupStuff.randomSquareZoomOut({
    children: squares,
    columns: 10,
    visible: 50,
    spacing: 100,
    zoomSpeed:  zAnimator.interval({type: 'ms', ms: 1000})});

  var example = {
    name: 'Random square zoom out example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){

      rectangleGroup.view.x = startPoint.x;
      rectangleGroup.view.y = startPoint.y;
      zAnimator.mainContainer.add(rectangleGroup);
      rectangleGroup.zoomOut();
    },
    stop: function (){
      zAnimator.mainContainer.remove(rectangleGroup);
    }
  };

  return example;
}
