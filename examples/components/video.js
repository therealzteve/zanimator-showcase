'use strict';
exports.create = function(zAnimator){

    var startPoint = { 'x': 0, 'y': 0 };
    var scale = { 'value': 1, 'min': 0, 'max': 1, 'step': 0.1};
    var image = zAnimator.factory.video({ source: 'resources/video.mp4'});


    var example = {
      name: 'Video example',
      controls: [
        { name: "Start point",
          type: "coordinates",
          ref: startPoint
        },
        { name: "Video scale",
          type: "range",
          ref: scale
        }
      ],
      run: function(){
        image.view.x = startPoint.x;
        image.view.y = startPoint.y;
        image.scale = scale.value;
        image.draw();
        image.stop();
        image.play();
        zAnimator.mainContainer.add(image.view);
      },
      stop: function (){
        zAnimator.mainContainer.remove(image.view);
      }
    }

    return example;
};
