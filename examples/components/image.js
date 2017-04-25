'use strict';
exports.create = function(zAnimator){

    var startPoint = { 'x': 0, 'y': 0 };
    var image = zAnimator.factory.image({ source: 'resources/test.png'});


    var example = {
      name: 'Image example',
      controls: [
        { name: "Start point",
          type: "coordinates",
          ref: startPoint
        }
      ],
      run: function(){
        image.view.x = startPoint.x;
        image.view.y = startPoint.y;
        zAnimator.mainContainer.add(image);
      },
      stop: function (){
        zAnimator.mainContainer.remove(image);
      }
    }

    return example;
};
