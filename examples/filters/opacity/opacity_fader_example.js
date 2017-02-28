'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var fader = zAnimator.filters.opacity.fader({child: square});

  var example = {
    name: 'Fader Example',
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
      zAnimator.mainContainer.add(fader.view);
    },
    stop: function (){
      fader.stop();
      zAnimator.mainContainer.remove(fader.view);
    }
  };

  return example;
}
