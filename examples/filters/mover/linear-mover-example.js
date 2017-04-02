'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var intervalBpm = zAnimator.interval({type: 'bpm', bpm: 120});
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  //var fader = zAnimator.filters.opacity.fader({child: square});
  var mover = zAnimator.filters.mover.linear.linear({child: square, goalPoint: {x: 100, y:0}, interval: intervalBpm});

  var example = {
    name: 'Linear Mover Example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
      //fader.start();
      mover.start();
      zAnimator.mainContainer.add(mover);
    },
    stop: function (){
      //fader.stop();
      mover.stop();
      zAnimator.mainContainer.remove(mover);
    }
  }

  return example;
}
