'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var intervalBpm = zAnimator.interval({type: 'bpm', bpm: 10});
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var mover = zAnimator.filters.mover.linear.linearShake({child: square, goalPoint: {x: 100, y: 100}, shakeFactor: 30, interval: intervalBpm});
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
      zAnimator.mainContainer.add(mover);
      mover.start();
    },
    stop: function (){
      zAnimator.mainContainer.remove(mover);
      mover.stop();
    }
  };

  return example;
}
