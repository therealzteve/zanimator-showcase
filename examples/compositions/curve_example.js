'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var scale = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var length = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var time = { 'value': 5000, 'min': 0, 'max': 5000, 'step': 1};
  var swingingLine;

  var example = {
    name: 'curve line example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'length',
       'type': 'range',
       'ref': length
     },
     {
       'name': 'amplitude',
       'type': 'range',
       'ref': scale
     },
     {
       'name': 'time',
       'type': 'range',
       'ref': time
     }
    ],
    run: function(){
      swingingLine = zAnimator.compositions.pathMagic.bezier.curve({length: length.value, time: time.value, amplitude: scale.value});
      swingingLine.view.x = startPoint.x;
      swingingLine.view.y = startPoint.y;
      swingingLine.start();
      zAnimator.mainContainer.add(swingingLine.view);
    },
    stop: function (){
      if(swingingLine){
        swingingLine.stop();
        zAnimator.mainContainer.remove(swingingLine.view);
      }
    }
  };

  return example;
}
