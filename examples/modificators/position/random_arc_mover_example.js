'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var container = {view: zAnimator.factory.container()};
  var square = zAnimator.factory.square({ squareShape: zAnimator.geometry.shapes.square({sidelength: 100}), color: '#000'});
  var randomArcMover = zAnimator.modificators.position.randomArcMover({subject: square.view, speed: 100});
  container.view.addChild(square.view);

  var example = {
    name: 'random arc mover example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      container.view.x = startPoint.x;
      container.view.y = startPoint.y;

      randomArcMover.start();
      zAnimator.mainContainer.add(container);
    },
    stop: function (){
      randomArcMover.stop();
      zAnimator.mainContainer.remove(container);

    }
  };

  return example;
}
