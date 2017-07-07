'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var sb = zAnimator.compositions.soundBars.simpleSoundBar({width: 10, height: 50});
  var pulseSoundBar = zAnimator.compositions.soundBars.pulseSoundBar({"soundBar":sb, "interval": zAnimator.interval({"type": "ms", "ms": 1000})});

  var sb2 = zAnimator.compositions.soundBars.circleSoundBar({radius: 50, color: '#000', thickness: 1});
  var pulseSoundBar2 = zAnimator.compositions.soundBars.pulseSoundBar({"soundBar": sb2, "interval": zAnimator.interval({"type": "ms", "ms": 1000})});

  var example = {
    name: 'pulse sound bars example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      zAnimator.mainContainer.add(pulseSoundBar);
      zAnimator.mainContainer.add(pulseSoundBar2);

      zAnimator.loop.addComponent(pulseSoundBar.soundBar);
      zAnimator.loop.addComponent(pulseSoundBar2.soundBar);
      pulseSoundBar.pulse(1);
      pulseSoundBar2.pulse(1);
    },
    stop: function(){
      zAnimator.mainContainer.remove(pulseSoundBar);
      zAnimator.mainContainer.remove(pulseSoundBar2);

      zAnimator.loop.removeComponent(pulseSoundBar.soundBar);
      zAnimator.loop.removeComponent(pulseSoundBar2.soundBar);

    }
  };

  return example;
}
