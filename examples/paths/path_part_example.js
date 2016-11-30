'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var linePath = zAnimator.geometry.paths.line({x: 0 , y: 0}, {x:100, y: 0});
  var line = zAnimator.factory.line(linePath, 1, '#000');

  var halfLinePath = linePath.getPartPath(0.5);
  var halfLine = zAnimator.factory.line(halfLinePath, 1, '#000');

  var example = {
    name: 'Path part example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      line.view.x = startPoint.x;
      line.view.y = startPoint.y;
      halfLine.view.x = startPoint.x;
      halfLine.view.y = startPoint.y + 100;
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
