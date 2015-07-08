var GiantDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('giant');
  this.$node.css({
    'border':'none',
    'background': 'no-repeat center/100% url(img/pacman-ghost-red.png)'
  });
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

GiantDancer.prototype = Object.create(Dancer.prototype);
GiantDancer.prototype.constructor = GiantDancer;
GiantDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('giant');
};
//prototype method check pacman position
GiantDancer.prototype.chase = function(){
  // iterate of $('.blinky').each(cb)
  var closestPacman;
  var shortestDistance;
  var self = this;
  $('.pacman').each(function(){
    var pacmanPosition = $(this).position();
    var distance = Math.sqrt(
      Math.pow((pacmanPosition.top-self.$node.position().top),2)+
      Math.pow((pacmanPosition.left-self.$node.position().left),2)
    );
    if (shortestDistance === undefined){
      shortestDistance = distance;
      closestPacman = pacmanPosition;
    } else if (shortestDistance > distance){
      shortestDistance = distance;
      closestPacman = pacmanPosition;
    }
    console.log(distance);
  });
  if (shortestDistance){
    self.$node.css({
      'top': closestPacman.top,
      'left': closestPacman.left
    });
  }
    //get position of each
    //calculate distance to ghost
    //if distance < something,
      //move ghost to position
      //break
};
//if < something, go to that position