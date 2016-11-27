'use strict';
exports.create = function(zAnimator){
    var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#000');
    var flasher = zAnimator.filters.opacity.flasher(square);

    var example = {
      name: 'Flasher example',
      run: function(){
        flasher.start();
        zAnimator.mainContainer.addChild(flasher.view);
      },
      stop: function (){
        flasher.stop();
        zAnimator.mainContainer.removeChild(flasher.view);
      }
    }

    return example;
};
