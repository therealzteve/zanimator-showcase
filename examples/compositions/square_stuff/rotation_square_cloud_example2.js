'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var amount = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var rotatingSquareCloud;
  var radiusModificator;

  var example = {
    name: 'rotating square cloud example 2',
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

      rotatingSquareCloud = zAnimator.compositions.squareStuff.rotatingSquareCloud({amount: amount.value, minSize: 0, maxSize: 25, radius: 250});
      radiusModificator = zAnimator.modificators.rangeModificator({subject: rotatingSquareCloud, begin: 0, end: 250, property: 'radius', interval: zAnimator.interval({type: 'ms', ms: 250})});
      rotatingSquareCloud.view.x = startPoint.x;
      rotatingSquareCloud.view.y = startPoint.y;
      rotatingSquareCloud.start();
      radiusModificator.start();
      zAnimator.mainContainer.add(rotatingSquareCloud);
    },
    stop: function (){
      if(rotatingSquareCloud && radiusModificator){
        rotatingSquareCloud.stop();
        radiusModificator.stop();
        zAnimator.mainContainer.remove(rotatingSquareCloud);
      }
    }
  };

  return example;
}
