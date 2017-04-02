'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var container = {view: zAnimator.factory.container()};
  var square = zAnimator.factory.square({ squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#000'});
  var randomInRectMover = zAnimator.modificators.position.randomInRectMover({subject: square.view, speed: 1000, width: 100, height: 100});
  container.view.addChild(square.view);

  var example = {
    name: 'random in rect mover example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      container.view.x = startPoint.x;
      container.view.y = startPoint.y;

      randomInRectMover.start();
      zAnimator.mainContainer.add(container);
    },
    stop: function (){
      randomInRectMover.stop();
      zAnimator.mainContainer.remove(container);

    }
  };

  return example;
}
