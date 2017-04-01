'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var p1 =  {x: 0 , y: 0};
  var p2 = {x: 100 , y: 0};
  var p3 = {x: 0, y: 0};

  var linePath = zAnimator.geometry.paths.line({start: p1, end: p2});
  var linePath2 = zAnimator.geometry.paths.line({start: p2, end: p3});
  var linePath3 = zAnimator.geometry.paths.line({start: p3, end: p1});

  var line = zAnimator.factory.line({linePath: linePath, thickness: 40, color: '#000'});
  var line2 = zAnimator.factory.line({linePath: linePath2, thickness: 40, color: '#000'});
  var line3 = zAnimator.factory.line({linePath: linePath3, thickness: 40, color: '#000'});

  var circleShape = zAnimator.geometry.shapes.circle({radius: 20});
  var linePoint = zAnimator.factory.circle({circleShape: circleShape, color: "#000"});
  var linePoint2 = zAnimator.factory.circle({circleShape: circleShape, color: "#000"});
  var linePoint3 = zAnimator.factory.circle({circleShape: circleShape, color: "#000"});

  var randomArcMover = zAnimator.modificators.position.randomArcMover({subject: p1, speed: 1000});
  var randomArcMover2 = zAnimator.modificators.position.randomArcMover({subject: p2, speed: 1000});
  var randomArcMover3 = zAnimator.modificators.position.randomArcMover({subject: p3, speed: 1000});

  var draw = function(){
    line.draw();
    line2.draw();
    line3.draw();

    linePoint.view.x = startPoint.x + p1.x;
    linePoint.view.y = startPoint.y + p1.y;

    linePoint2.view.x = startPoint.x + p2.x;
    linePoint2.view.y = startPoint.y + p2.y;

    linePoint3.view.x = startPoint.x + p3.x;
    linePoint3.view.y = startPoint.y + p3.y;
  }

  var example = {
    name: 'random arc mover example 2',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      line.view.x = startPoint.x;
      line.view.y = startPoint.y;
      line2.view.x = startPoint.x;
      line2.view.y = startPoint.y;
      line3.view.x = startPoint.x;
      line3.view.y = startPoint.y;

      randomArcMover.start();
      randomArcMover2.start();
      randomArcMover3.start();

      zAnimator.mainContainer.add(line);
      zAnimator.mainContainer.add(line2);
      zAnimator.mainContainer.add(line3);

      zAnimator.mainContainer.add(linePoint);
      zAnimator.mainContainer.add(linePoint2);
      zAnimator.mainContainer.add(linePoint3);

      zAnimator.loop.addAnimation(draw);
    },
    stop: function (){
      randomArcMover.stop();
      randomArcMover2.stop();
      randomArcMover3.stop();

      zAnimator.mainContainer.remove(line);
      zAnimator.mainContainer.remove(line2);
      zAnimator.mainContainer.remove(line3);

      zAnimator.mainContainer.remove(linePoint);
      zAnimator.mainContainer.remove(linePoint2);
      zAnimator.mainContainer.remove(linePoint3);

      zAnimator.loop.removeAnimation(draw);
    }
  };

  return example;
}
