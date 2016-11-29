'use strict';
exports.create = function(zAnimator){

  var linePath = zAnimator.geometry.paths.line({x: 0 , y: 0}, {x:100, y: 0});
  var line = zAnimator.factory.line(linePath, 1, '#000');

  var halfLinePath = linePath.getPartPath(0.5);
  var halfLine = zAnimator.factory.line(halfLinePath, 1, '#000');

  var example = {
    name: 'Path part example',
    run: function(){
      line.view.x = 300;
      line.view.y = 300;
      halfLine.view.x = 300;
      halfLine.view.y = 350;
      zAnimator.mainContainer.addChild(line.view);
      zAnimator.mainContainer.addChild(halfLine.view);
    },
    stop: function (){
      zAnimator.mainContainer.removeChild(line.view);
      zAnimator.mainContainer.removeChild(halfLine.view);
    }
  };

  return example;
};
