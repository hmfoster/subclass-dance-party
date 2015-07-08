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