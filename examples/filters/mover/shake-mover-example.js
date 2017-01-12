'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var mover = zAnimator.filters.mover.point2point.linearShake({child: square, speed: 300, shakeAmount: 30});
  var example = {
    name: 'Shake Mover Example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
      mover.start();
      zAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 300, 'y': 300 });
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(mover.view);
    }
  };

  return example;
}
