'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var squareShape = zAnimator.geometry.shapes.square({sidelength: 100});
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 5}), color: '#F00'});
  var pathMover = zAnimator.filters.mover.path.pathMover({child: square, speed: 1.3, path: squareShape.path});

  var circleShape = zAnimator.geometry.shapes.circle({radius: 100});
  var circle = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 30}), color: '#F00'});
  var circlePathMover = zAnimator.filters.mover.path.pathMover({child: circle, speed: 1.3, path: circleShape.path });

  var circle2 = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 3}), color: '#F00'});
  var bezierPath = zAnimator.geometry.paths.bezierCurve({start: {x: 0, y: 0}, end: {x: 100, y: 0}, cpoint1:  {x: 0, y: -50}, cpoint2: {x: 500, y: 50}});
  var bezierPathMover = zAnimator.filters.mover.path.pathMover({child: circle2, speed: 1.3, path: bezierPath});

  var staticCircle = zAnimator.factory.circle({circleShape: circleShape, color: '#00F'});

  var example = {
    name: 'Path mover example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){

      square.view.x = 600;
      square.view.y = 600;

      circle.view.x = 300;
      circle.view.y = 300;

      staticCircle.view.x = 300;
      staticCircle.view.y = 300;

      circle2.view.x = 200;
      circle2.view.y = 200;

      zAnimator.mainContainer.add(staticCircle.view);
      zAnimator.mainContainer.add(circlePathMover.view);
      zAnimator.mainContainer.add(pathMover.view);
      zAnimator.mainContainer.add(bezierPathMover.view);

      circlePathMover.start();
      pathMover.start();
      bezierPathMover.start();
    },
    stop: function (){
      circlePathMover.stop();
      pathMover.stop();
      bezierPathMover.stop();
      zAnimator.mainContainer.remove(staticCircle.view);
      zAnimator.mainContainer.remove(circlePathMover.view);
      zAnimator.mainContainer.remove(pathMover.view);
      zAnimator.mainContainer.remove(bezierPathMover.view);

    }
  };

  return example;
}
