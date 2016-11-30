'use strict';
exports.create = function(zAnimator){

    var startPoint = { 'x': 0, 'y': 0 };
    var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');
    var flasher = zAnimator.filters.opacity.flasher(square);

    var example = {
      name: 'Flasher example',
      controls: [
        { name: "Start point",
          type: "coordinates",
          ref: startPoint
        }
      ],
      run: function(){
        flasher.start();
        flasher.view.x = startPoint.x;
        flasher.view.y = startPoint.y;
        zAnimator.mainContainer.addChild(flasher.view);
      },
      stop: function (){
        flasher.stop();
        zAnimator.mainContainer.removeChild(flasher.view);
      }
    }

    return example;
};
