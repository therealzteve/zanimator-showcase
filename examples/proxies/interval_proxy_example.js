'use strict';
exports.create = function(zAnimator){
  var startPoint = { 'x': 0, 'y': 0 };
  var length = { 'value': 10, 'min': 0, 'max': 1000, 'step': 1};
  var time = { 'value': 1000, 'min': 0, 'max': 5000, 'step': 1};

  var rectangleGroup;

  var example = {
    name: 'Interval Proxy Example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'Side length of squares',
       'type': 'range',
       'ref': length
     },
     {
       'name': 'Interval time',
       'type': 'range',
       'ref': time
     }
    ],
    run: function(){
      var squares = [];
      for(var i = 0; i < 9; i++){
        var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: length.value}), color: '#F00'});
        squares.push(square);
      }

      rectangleGroup = zAnimator.filters.group.rectangleGroup({children: squares, columns: 3, spacing: length.value});

      var intervalProxy = zAnimator.proxies.intervalProxy({interval: time.value});
      intervalProxy.group = squares;

      rectangleGroup.view.x = startPoint.x;
      rectangleGroup.view.y = startPoint.y;

      zAnimator.mainContainer.add(rectangleGroup.view);
      intervalProxy.setProp('color', "#00F");
    },
    stop: function (){
      if(rectangleGroup){
        zAnimator.mainContainer.remove(rectangleGroup.view);
      }
    }
  };

  return example;
}
