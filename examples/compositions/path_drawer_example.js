'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var circleShape = zAnimator.geometry.shapes.circle({radius: 100});
  var pathDrawer = zAnimator.compositions.pathMagic.transitionPathDrawer({path: circleShape.path, pathOptions: {color: '#F00', width: 25}});
  var randomPartPathDrawer = zAnimator.compositions.pathMagic.randomPartPathDrawer({path: circleShape.path});

  var example = {
    name: 'path drawer example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      pathDrawer.view.x = startPoint.x;
      pathDrawer.view.y = startPoint.y;
      randomPartPathDrawer.view.x = 200;
      randomPartPathDrawer.view.y = 200;
      pathDrawer.start();
      randomPartPathDrawer.start();
      zAnimator.mainContainer.addChild(pathDrawer.view);
      zAnimator.mainContainer.addChild(randomPartPathDrawer.view);
    },
    stop: function (){
      pathDrawer.stop();
      randomPartPathDrawer.stop();
      zAnimator.mainContainer.removeChild(pathDrawer.view);
      zAnimator.mainContainer.removeChild(randomPartPathDrawer.view);
    }
  };

  return example;
};
