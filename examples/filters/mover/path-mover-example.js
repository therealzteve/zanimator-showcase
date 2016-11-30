'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var squareShape = zAnimator.geometry.shapes.square(100);
  var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(5), '#F00');
  var pathMover = zAnimator.filters.mover.path.pathMover(square, 1.3, squareShape.path);

  var circleShape = zAnimator.geometry.shapes.circle(100);
  var circle = zAnimator.factory.circle(zAnimator.geometry.shapes.circle(30), '#F00');
  var circlePathMover = zAnimator.filters.mover.path.pathMover(circle, 1.3, circleShape.path);

  var circle2 = zAnimator.factory.circle(zAnimator.geometry.shapes.circle(3), '#F00');
  var bezierPath = zAnimator.geometry.paths.bezierCurve({x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: -50}, {x: 500, y: 50});
  var bezierPathMover = zAnimator.filters.mover.path.pathMover(circle2, 1.3, bezierPath);

  var staticCircle = zAnimator.factory.circle(circleShape, '#00F');

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

      zAnimator.mainContainer.addChild(staticCircle.view);
      zAnimator.mainContainer.addChild(circlePathMover.view);
      zAnimator.mainContainer.addChild(pathMover.view);
      zAnimator.mainContainer.addChild(bezierPathMover.view);

      circlePathMover.start();
      pathMover.start();
      bezierPathMover.start();
    },
    stop: function (){
      circlePathMover.stop();
      pathMover.stop();
      bezierPathMover.stop();
      zAnimator.mainContainer.removeChild(staticCircle.view);
      zAnimator.mainContainer.removeChild(circlePathMover.view);
      zAnimator.mainContainer.removeChild(pathMover.view);
      zAnimator.mainContainer.removeChild(bezierPathMover.view);

    }
  };

  return example;
}
