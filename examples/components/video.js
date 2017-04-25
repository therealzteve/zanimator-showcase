'use strict';
exports.create = function(zAnimator){

    var startPoint = { 'x': 0, 'y': 0 };
    var scale = { 'value': 1, 'min': 0, 'max': 1, 'step': 0.1};
    var video = zAnimator.factory.video({ source: 'resources/video.mp4'});


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
        video.view.x = startPoint.x;
        video.view.y = startPoint.y;
        video.scale = scale.value;
        video.draw();
        video.stop();
        video.play();
        zAnimator.mainContainer.add(video);
      },
      stop: function (){
        zAnimator.mainContainer.remove(video);
      }
    }

    return example;
};
