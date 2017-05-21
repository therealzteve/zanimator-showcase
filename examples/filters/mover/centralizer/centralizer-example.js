'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#F00'});
  var centralizer = zAnimator.filters.mover.center.centralizer({child: square, width: 50, height: 50});
  var scalePulsar = zAnimator.modificators.scale.linearPulsar({subject: square, interval: {type: 'bpm', bpm: 30}, limit: 50});
  var example = {
    name: 'Centralizer Mover Example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      square.view.x = startPoint.x;
      square.view.y = startPoint.y;
      zAnimator.mainContainer.add(centralizer);
      scalePulsar.start();
    },
    stop: function (){
      zAnimator.mainContainer.remove(centralizer);
      scalePulsar.stop();
    }
  }

  return example;
}
