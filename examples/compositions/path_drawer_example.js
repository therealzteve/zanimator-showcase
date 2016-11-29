'use strict';
exports.create = function(zAnimator){
  var circleShape = zAnimator.geometry.shapes.circle(100);
  var pathDrawer = zAnimator.compositions.pathMagic.transitionPathDrawer(circleShape.path, {color: '#F00', width: 25});
  var randomPartPathDrawer = zAnimator.compositions.pathMagic.randomPartPathDrawer(circleShape.path);

  var example = {
    name: 'path drawer example',
    run: function(){
      pathDrawer.view.x = 300;
      pathDrawer.view.y = 300;
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
