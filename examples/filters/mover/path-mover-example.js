'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var squareShape = zAnimator.geometry.shapes.square({sidelength: 100});
  var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 5}), color: '#F00'});
  var pathMover = zAnimator.filters.mover.path.pathMover({child: square, path: squareShape.path, interval: {type: 'bpm', bpm: 120}});
  console.log(pathMover.view);
  // var circleShape = zAnimator.geometry.shapes.circle({radius: 100});
  // var circle = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 30}), color: '#F00'});
  // var circlePathMover = zAnimator.filters.mover.path.pathMover({child: circle, speed: 1.3, path: circleShape.path, interval: {type: 'bpm', bpm: 120} });
  //
  // var circle2 = zAnimator.factory.circle({circleShape: zAnimator.geometry.shapes.circle({radius: 3}), color: '#F00'});
  // var bezierPath = zAnimator.geometry.paths.bezierCurve({start: {x: 0, y: 0}, end: {x: 100, y: 0}, cpoint1:  {x: 0, y: -50}, cpoint2: {x: 500, y: 50}});
  // var bezierPathMover = zAnimator.filters.mover.path.pathMover({child: circle2, speed: 1.3, path: bezierPath, interval: {type: 'bpm', bpm: 120}});

  //var staticCircle = zAnimator.factory.circle({circleShape: circleShape, color: '#00F'});

  var example = {
    name: 'Path mover example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){

      //square.view.x = 100;
      //square.view.y = 100;

      //circle.view.x = 200;
      //circle.view.y = 200;

      //staticCircle.view.x = 300;
      //staticCircle.view.y = 300;

      //circle2.view.x = 400;
      //circle2.view.y = 400;

      //zAnimator.mainContainer.add(staticCircle);
      //zAnimator.mainContainer.add(circlePathMover);
      zAnimator.mainContainer.add(pathMover);
      //zAnimator.mainContainer.add(bezierPathMover);

      //circlePathMover.start();
      pathMover.start();
      //bezierPathMover.start();
    },
    stop: function (){
      //circlePathMover.stop();
      pathMover.stop();
      //bezierPathMover.stop();
      //zAnimator.mainContainer.remove(staticCircle);
      //zAnimator.mainContainer.remove(circlePathMover);
      zAnimator.mainContainer.remove(pathMover);
      //zAnimator.mainContainer.remove(bezierPathMover);

    }
  };

  return example;
}
