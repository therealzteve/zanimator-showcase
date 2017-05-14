'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var amount = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var pointWeb;

  var example = {
    name: 'moving web points example',
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

      pointWeb = zAnimator.compositions.web.movingPointWeb({amount: amount.value, width: 500, height: 500, speed: 200});
      pointWeb.view.x = startPoint.x;
      pointWeb.view.y = startPoint.y;
      pointWeb.start();
      zAnimator.mainContainer.add(pointWeb);
    },
    stop: function (){
      if(pointWeb){
        pointWeb.stop();
        zAnimator.mainContainer.remove(pointWeb);
      }
    }
  };

  return example;
}
