'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 80}), color: '#000'});
  var interval = zAnimator.interval({type: 'ms', ms: 1000});
  var zoomOut = zAnimator.compositions.zoomStuff.zoomOut({child: square, speed: interval});

  var example = {
    name: 'zoom out example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){

      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
      zAnimator.mainContainer.add(square);
      zoomOut.start();
    },
    stop: function (){
      zAnimator.mainContainer.remove(square);
    }
  };

  return example;
}
