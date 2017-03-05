'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var bpm = { 'value': 120, 'min': 0, 'max': 1000, 'step': 1};
  var circle;
  var scalePulsar;

  var example = {
    name: 'scale pulsar bpm example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      },
      {
        'name': 'bpm',
        'type': 'range',
        'ref': bpm
      }
    ],
    run: function(){
      circle = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#000'});
      circle.view.x = startPoint.x;
      circle.view.y = startPoint.y;
      var bpmInterval = zAnimator.interval({type: 'bpm', bpm: bpm.value});
      scalePulsar = zAnimator.modificators.scale.linearPulsar({subject: circle, speed: bpmInterval, limit: 100});

      scalePulsar.start();
      zAnimator.mainContainer.add(circle);
    },
    stop: function (){
      if(scalePulsar && circle){
        scalePulsar.stop();
        zAnimator.mainContainer.remove(circle);
      }
    }
  };

  return example;
};
