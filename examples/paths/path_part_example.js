'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var linePath = zAnimator.geometry.paths.line({start: {x: 0 , y: 0}, end: {x:100, y: 0}});
  var line = zAnimator.factory.line({linePath: linePath, thickness: 1, color: '#000'});

  var halfLinePath = linePath.getPartPath(0.5);
  var halfLine = zAnimator.factory.line({linePath: halfLinePath, thickness: 1, color: '#000'});

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
      zAnimator.mainContainer.add(line.view);
      zAnimator.mainContainer.add(halfLine.view);
    },
    stop: function (){
      zAnimator.mainContainer.remove(line.view);
      zAnimator.mainContainer.remove(halfLine.view);
    }
  };

  return example;
};
