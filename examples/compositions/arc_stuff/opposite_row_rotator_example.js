'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var rows = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var incompleteCircles;
  var oppositeRowsRotator;

  var example = {
    name: 'opposite row rotator',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'rows',
       'type': 'range',
       'ref': rows
     }
    ],
    run: function(){

      incompleteCircles = zAnimator.compositions.arcStuff.incompleteCircles({rows: rows.value, radius: 100, minDegrees: 25, maxDegrees: 180});
      incompleteCircles.view.x = startPoint.x;
      incompleteCircles.view.y = startPoint.y;
      zAnimator.mainContainer.add(incompleteCircles);

      oppositeRowsRotator = zAnimator.compositions.arcStuff.circleRowOppositeRotator({speed: 240, circleRows: incompleteCircles.circleRows});
      oppositeRowsRotator.start();
    },
    stop: function (){
      if(oppositeRowsRotator){
        oppositeRowsRotator.stop();
      }
      if(incompleteCircles){
        zAnimator.mainContainer.remove(incompleteCircles);
      }
    }
  };

  return example;
}
