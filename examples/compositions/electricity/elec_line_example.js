'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var elecLine = zAnimator.compositions.electricity.elecLine({start: { 'x': 0, 'y': 0 }, end: {'x': 300, 'y': 0}, amountPoints: 5, radius: 25});


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
