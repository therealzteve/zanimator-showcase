'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var sb = zAnimator.compositions.soundBars.invertedCircleSoundBar({radius: 50, color: '#000', thickness: 1});
  var pulseSoundBar = zAnimator.compositions.soundBars.pulseSoundBar({"soundBar": sb, "interval": zAnimator.interval({"type": "ms", "ms": 250})});

  var msb =  zAnimator.compositions.soundBars.multiRectsSoundBar({width: 100, rectHeight: 2, spacing: 2, amountRects: 40});
  var psb2 = zAnimator.compositions.soundBars.pulseSoundBar({"soundBar": msb, "interval": zAnimator.interval({"type": "ms", "ms": 2000})});

  var example = {
    name: 'pulse sound bars example 2',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      zAnimator.mainContainer.add(pulseSoundBar);
      zAnimator.mainContainer.add(psb2);

      zAnimator.loop.addComponent(pulseSoundBar.soundBar);
      zAnimator.loop.addComponent(psb2.soundBar);
      pulseSoundBar.pulse(1);
      psb2.pulse(1);
    },
    stop: function(){
      zAnimator.mainContainer.remove(pulseSoundBar);
      zAnimator.mainContainer.remove(psb2);

      zAnimator.loop.removeComponent(pulseSoundBar.soundBar);
      zAnimator.loop.removeComponent(psb2.soundBar);

    }
  };

  return example;
}
