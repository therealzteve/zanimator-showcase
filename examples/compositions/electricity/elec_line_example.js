'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var elecLine = zAnimator.compositions.electricity.elecLine({start: { 'x': 0, 'y': 0 }, end: {'x': 600, 'y': 0}, amountPoints: 100, radius: 300});


  var example = {
    name: 'electric line example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      elecLine.view.x = startPoint.x;
      elecLine.view.y = startPoint.y;
      zAnimator.mainContainer.add(elecLine);
      zAnimator.loop.addComponent(elecLine);
    },
    stop: function(){
      zAnimator.mainContainer.remove(elecLine);
      zAnimator.loop.removeComponent(elecLine);

    }
  };

  return example;
}
