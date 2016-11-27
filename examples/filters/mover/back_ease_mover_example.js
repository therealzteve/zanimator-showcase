exports.create = function(zAnimator){
  var position = { x: 0, y: 0};
  var mover;

  var example = {
    name: "Back ease mover example",
    controls: [
      { name: "position",
        type: "coordinates",
        ref: position
      }
    ],
    run: function(){
      var square = zAnimator.factory.square(zAnimator.geometry.shapes.square(10), '#F00');
      var fader = zAnimator.filters.opacity.fader(square);
      mover = zAnimator.filters.mover.point2point.inOutQuad(fader, 300);
      fader.view.x = position.x;
      fader.view.y = position.y;
      fader.start();
      mover.start();
      zAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 100, 'y': 0 }, () => { fader.stop(); });
    },
    stop: function(){
      if(mover){
        mover.stop();
        zAnimator.mainContainer.removeChild(mover.view);
      }
    }
  }

  return example;
};
