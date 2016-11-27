'use strict';
exports.create = function(zAnimator){

  var circleShape = zAnimator.geometry.shapes.circle(100);
  var circle = zAnimator.factory.circle(circleShape, '#F00');

  var example = {
    name: 'Edge circle point example',
    run: function(){
      zAnimator.mainContainer.addChild(circle.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(circle.view);
    }
  };

  return example;
};
