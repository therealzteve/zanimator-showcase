'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var fader = zAnimator.filters.opacity.fader({child: square});
  var mover = zAnimator.filters.mover.point2point.linear({child: fader, speed: 300});

  var example = {
    name: 'Linear Mover Example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      fader.view.x = startPoint.x;
      fader.view.y = startPoint.y;
      fader.start();
      mover.start();
      zAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 100, 'y': 0 }, () => { fader.stop(); });
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.removeChild(fader.view);
    }
  }

  return example;
}
