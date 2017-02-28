'use strict';
exports.create = function(zAnimator){

  var startPoint = { 'x': 0, 'y': 0 };
  var scale = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var length = { 'value': 100, 'min': 0, 'max': 500, 'step': 1};
  var time = { 'value': 1000, 'min': 0, 'max': 5000, 'step': 1};
  var bpm = { 'value': 120, 'min': 0, 'max': 1000, 'step': 1};
  var swingingLineTime;
  var swingingLineBpm;

  var example = {
    name: 'cpoint spinner example',
    controls: [
      {'name': 'Start point',
       'type': 'coordinates',
       'ref': startPoint
     },
     {
       'name': 'length',
       'type': 'range',
       'ref': length
     },
     {
       'name': 'radius',
       'type': 'range',
       'ref': scale
     },
     {
       'name': 'time',
       'type': 'range',
       'ref': time
     },
     {
       'name': 'bpm',
       'type': 'range',
       'ref': bpm
     }
    ],
    run: function(){
      var interval = zAnimator.interval({type: 'ms', ms: time.value});
      var intervalBpm = zAnimator.interval({type: 'bpm', bpm: bpm.value});
      swingingLineTime = zAnimator.compositions.pathMagic.bezier.cpointSpinner({length: length.value, time: interval, radius: scale.value});
      swingingLineTime.view.x = startPoint.x;
      swingingLineTime.view.y = startPoint.y;
      swingingLineTime.start();

      swingingLineBpm = zAnimator.compositions.pathMagic.bezier.cpointSpinner({length: length.value, time: intervalBpm, radius: scale.value});
      swingingLineBpm.view.x = startPoint.x;
      swingingLineBpm.view.y = startPoint.y;
      swingingLineBpm.start();

      zAnimator.mainContainer.add(swingingLineTime);
      zAnimator.mainContainer.add(swingingLineBpm);
    },
    stop: function (){
      if(swingingLineTime && swingingLineBpm){
        swingingLineTime.stop();
        swingingLineBpm.stop();
        zAnimator.mainContainer.remove(swingingLineTime);
        zAnimator.mainContainer.remove(swingingLineBpm);
      }
    }
  };

  return example;
}
