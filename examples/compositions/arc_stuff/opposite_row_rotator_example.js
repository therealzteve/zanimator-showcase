'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var rows = { 'value': 4, 'min': 0, 'max': 500, 'step': 1};

  var incompleteCircles;
  var oppositeRowsRotator;
  var radiusFader;
  var centralizer;

  var example = {
    name: 'opposite row rotator',
    controls: [
      {
       'name': 'Start point',
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

      oppositeRowsRotator = zAnimator.compositions.arcStuff.circleRowOppositeRotator({speed: 240, circleRows: incompleteCircles.circleRows});

      var radiusInterval = zAnimator.interval({type: 'ms', ms: 1000});
      radiusFader = zAnimator.compositions.arcStuff.circleRowRadiusFader({interval:radiusInterval, maxRadius: 200, circleRows: incompleteCircles});

      centralizer = zAnimator.filters.mover.center.centralizer({child: incompleteCircles, width: 0, height: 0});


      incompleteCircles.start();
      oppositeRowsRotator.start();
      radiusFader.start();
      centralizer.start();

      zAnimator.mainContainer.add(centralizer);


    },
    stop: function (){
      if(oppositeRowsRotator){
        oppositeRowsRotator.stop();
      }
      if(incompleteCircles){
        incompleteCircles.stop();
      }
      if(radiusFader){
        radiusFader.stop();
      }
      if(centralizer){
        centralizer.stop();
        zAnimator.mainContainer.remove(centralizer);
      }
    }
  };

  return example;
}
