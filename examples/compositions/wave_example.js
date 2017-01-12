'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var scale = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var length = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var stretch = { 'value': 0, 'min': 0, 'max': 250, 'step': 1};
  var width = { 'value': 3, 'min': 0, 'max': 500, 'step': 1};
  var time = { 'value': 5000, 'min': 0, 'max': 5000, 'step': 1};
  var colorOfLine = { 'color': '#000'};
  var swingingLine;

  var example = {
    name: 'wave example',
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
       'name': 'stretch',
       'type': 'range',
       'ref': stretch
     },
     {
       'name': 'time',
       'type': 'range',
       'ref': time
     },
     {
       'name': 'width',
       'type': 'range',
       'ref': width
     },
     {
       'name': 'Color of line',
       'type': 'color',
       'ref': colorOfLine
     }
    ],
    run: function(){
      swingingLine = zAnimator.compositions.pathMagic.bezier.wave({length: length.value, time: time.value, amplitude: scale.value, stretch: stretch.value});
      swingingLine.pathView.width = width.value;
      swingingLine.pathView.color = colorOfLine.color;
      swingingLine.view.x = startPoint.x;
      swingingLine.view.y = startPoint.y;
      swingingLine.start();
      zAnimator.mainContainer.addChild(swingingLine.view);
    },
    stop: function (){
      if(swingingLine){
        swingingLine.stop();
        zAnimator.mainContainer.removeChild(swingingLine.view);
      }
    }
  };

  return example;
}
