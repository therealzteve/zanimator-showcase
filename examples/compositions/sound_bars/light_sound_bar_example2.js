'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };

  var sb = zAnimator.compositions.soundBars.lightSoundBar({width: 50, height: 50, color: '#000'});
  var pulseSoundBar = zAnimator.compositions.soundBars.pulseSoundBar({"soundBar": sb, "interval": zAnimator.interval({"type": "ms", "ms": 250})});


  var example = {
    name: 'light sound bars example 2',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     }
    ],
    run: function(){
      zAnimator.mainContainer.add(pulseSoundBar);

      zAnimator.loop.addComponent(pulseSoundBar.soundBar);
      pulseSoundBar.pulse(1);
    },
    stop: function(){
      zAnimator.mainContainer.remove(pulseSoundBar);

      zAnimator.loop.removeComponent(pulseSoundBar.soundBar);

    }
  };

  return example;
}
