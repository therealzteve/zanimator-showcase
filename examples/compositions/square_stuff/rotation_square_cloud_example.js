'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var amount = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var rotatingSquareCloud;

  var example = {
    name: 'rotating square cloud example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'amount',
       'type': 'range',
       'ref': amount
     }
    ],
    run: function(){

      rotatingSquareCloud = zAnimator.compositions.squareStuff.rotatingSquareCloud({amount: amount.value, minSize: 0, maxSize: 250});
      rotatingSquareCloud.view.x = startPoint.x;
      rotatingSquareCloud.view.y = startPoint.y;
      rotatingSquareCloud.start();
      zAnimator.mainContainer.add(rotatingSquareCloud);
    },
    stop: function (){
      if(rotatingSquareCloud){
        rotatingSquareCloud.stop();
        zAnimator.mainContainer.remove(rotatingSquareCloud);
      }
    }
  };

  return example;
}
