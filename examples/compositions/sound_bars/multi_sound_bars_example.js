'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var soundBars = [];

  for(var i = 0; i < 10; i++){
    var sb = zAnimator.compositions.soundBars.multiRectsSoundBar({width: 10, rectHeight: 10, spacing: 10, amountRects: 15});
    soundBars.push(sb);
  }

  var example = {
    name: 'multi rects sound bars example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      for(var i = 0; i < 10; i++){
        soundBars[i].view.x = startPoint.x + i * 15;
        soundBars[i].view.y = startPoint.y;
        soundBars[i].current = i / 10;
        soundBars[i].draw();
        zAnimator.mainContainer.add(soundBars[i]);
      }

    },
    stop: function(){
      for(var i = 0; i < 10; i++){
        zAnimator.mainContainer.remove(soundBars[i]);
      }
    }
  };

  return example;
}
