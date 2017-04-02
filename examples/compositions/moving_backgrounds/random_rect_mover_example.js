'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var width = { 'value': 100, 'min': 0, 'max': 1024, 'step': 1};
  var height = { 'value': 100, 'min': 0, 'max': 768, 'step': 1};
  var speed = { 'value': 100, 'min': 0, 'max': 1000, 'step': 1};
  var amount = { 'value': 30, 'min': 0, 'max': 1000, 'step': 1};

  var background;

  var example = {
    name: 'Random rect mover background example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'width',
       'type': 'range',
       'ref': width
     },
     {
       'name': 'height',
       'type': 'range',
       'ref': height
     },
     {
       'name': 'speed',
       'type': 'range',
       'ref': speed
     },
     {
       'name': 'amount',
       'type': 'range',
       'ref': amount
     }
    ],
    run: function(){
      var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 1}), color: '#F00'});
      background = zAnimator.compositions.movingBackgrounds.randomRectMoverBackground({
        amount: amount.value,
        width: width.value,
        height: height.value,
        component: square
      });
      background.view.x = startPoint.x;
      background.view.y = startPoint.y;
      zAnimator.mainContainer.add(background);
      background.start();
    },
    stop: function (){
      if(background){
        zAnimator.mainContainer.remove(background);
        background.stop();
      }
    }
  };

  return example;
}
