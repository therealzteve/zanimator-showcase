'use strict';
exports.create = function(zAnimator){

  var shape;
  var shape2;

  var example = {
    name: 'copy example',
    controls: [
    ],
    run: function(){
      shape = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#000'});
      shape.view.x = 10;
      shape.view.y = 10;
      zAnimator.mainContainer.add(shape);

      shape2 = shape.getCopy();
      shape2.view.x = 30;
      shape2.view.y = 15;
      shape2.color = "#0F0";
      shape2.draw();
      zAnimator.mainContainer.add(shape2);

    },
    stop: function (){
      if(shape){
        zAnimator.mainContainer.remove(shape);
        zAnimator.mainContainer.remove(shape2);
      }
    }
  };

  return example;
};
