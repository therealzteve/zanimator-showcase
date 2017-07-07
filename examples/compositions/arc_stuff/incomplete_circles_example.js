'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var rows = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var incompleteCircles;

  var example = {
    name: 'incomplete circles example',
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
      incompleteCircles = zAnimator.compositions.arcStuff.incompleteCircles({rows: rows.value, radius: 100, minDegrees: 0, maxDegrees: 20});
      incompleteCircles.view.x = startPoint.x;
      incompleteCircles.view.y = startPoint.y;
      zAnimator.mainContainer.add(incompleteCircles);
      incompleteCircles.start();
    },
    stop: function (){
      if(incompleteCircles){
        zAnimator.mainContainer.remove(incompleteCircles);
        incompleteCircles.stop();
      }
    }
  };

  return example;
}
