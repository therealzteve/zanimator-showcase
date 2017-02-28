/*global exampleRunner: true*/
'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = zAnimator.factory.square( { squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color:  '#F00'});
    squares.push(square);
  }
  var centerGroup = zAnimator.filters.group.centerGroup({children: squares,width: 50});

  var proxy = zAnimator.proxies.defaultProxy();
  proxy.group = squares;

  var example = {
    name: 'Default proxy example 2',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      centerGroup.view.x = startPoint.x;
      centerGroup.view.y = startPoint.y;

      zAnimator.mainContainer.add(centerGroup.view);

      proxy.setProp('color', '#000');
      for(var square of squares){
        square.draw();
      }

    },
    stop: function (){
      zAnimator.mainContainer.remove(centerGroup.view);
    }
  }

  return example;
}
