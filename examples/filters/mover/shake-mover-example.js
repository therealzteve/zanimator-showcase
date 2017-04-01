'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var intervalBpm = zAnimator.interval({type: 'bpm', bpm: 120});
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var mover = zAnimator.filters.mover.linear.linearShake({child: square, goalPoint: {x: 100, y: 100}, shakeAmount: 30, interval: intervalBpm});
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
      zAnimator.mainContainer.add(mover.view);
      mover.moveTo({'x': 300, 'y': 300 });
    },
    stop: function (){
      zAnimator.mainContainer.remove(mover.view);
    }
  };

  return example;
}
