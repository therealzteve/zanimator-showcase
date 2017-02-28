'use strict';
exports.create = function(zAnimator){

    var startPoint = { 'x': 0, 'y': 0 };
    var square = zAnimator.factory.square({squareShape: zAnimator.geometry.shapes.square({sidelength: 10}), color: '#000'});
    var flasher = zAnimator.filters.opacity.flasher({child: square});

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
        zAnimator.mainContainer.add(flasher.view);
      },
      stop: function (){
        flasher.stop();
        zAnimator.mainContainer.remove(flasher.view);
      }
    }

    return example;
};
