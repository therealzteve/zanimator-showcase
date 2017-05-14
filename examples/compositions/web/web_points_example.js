'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var pointWeb;

  var example = {
    name: 'web points example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      var points = [];
      for(var i = 0 ; i < 5; i++){
        points.push({x: Math.random() * 400, y: Math.random() * 400});
      }
      pointWeb = zAnimator.compositions.web.pointWeb({points: points});
      pointWeb.view.x = startPoint.x;
      pointWeb.view.y = startPoint.y;
      zAnimator.mainContainer.add(pointWeb);
    },
    stop: function (){
      if(pointWeb){
        zAnimator.mainContainer.remove(pointWeb);
      }
    }
  };

  return example;
}
