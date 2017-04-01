'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };

  var arcPath = zAnimator.geometry.paths.arc({degrees: 90, radius: 50});
  var arcNegative = zAnimator.geometry.paths.arc({degrees: -90, radius: 50});

  var customObject = zAnimator.factory.path({path: arcPath, color: '#F00'});
  var customObjectNeg = zAnimator.factory.path({path: arcNegative, color: '#F00'});

  var container = {view: zAnimator.factory.container()};
  for(var i = 0; i <= 10; i++){
    var debugPointShape = zAnimator.geometry.shapes.circle({radius: 3 });
    var debugPoint = zAnimator.factory.circle({circleShape: debugPointShape, color: "#000"});
    var p = arcNegative.getPoint(i / 10);
    debugPoint.view.x = p.x;
    debugPoint.view.y = p.y;
    container.view.addChild(debugPoint.view);
  }

  var example = {
    name: 'arc example',
    controls: [
      { name: "Start point",
        type: "coordinates",
        ref: startPoint
      }
    ],
    run: function(){
      customObject.view.x = startPoint.x;
      customObject.view.y = startPoint.y;
      customObjectNeg.view.x = startPoint.x;
      customObjectNeg.view.y = startPoint.y;
      container.view.x = startPoint.x;
      container.view.y = startPoint.y;
      zAnimator.mainContainer.add(customObject);
      zAnimator.mainContainer.add(customObjectNeg);
      zAnimator.mainContainer.add(container);
    },
    stop: function (){
      zAnimator.mainContainer.remove(customObject);
      zAnimator.mainContainer.remove(customObjectNeg);
      zAnimator.mainContainer.remove(container);
    }
  }

  return example;
}
