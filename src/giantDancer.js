var GiantDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('giant');
  this.$node.css({
    'border-color': '#32cd32'
  });
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    this.$node.toggleClass('giant');

    var position = this.$node.position();
    var newLeft = position.left;
    var newTop = position.top;
    if( this.$node.hasClass('giant') ) {
      newLeft -= 50;
      newTop -= 50;
    } else {
      newLeft += 50;
      newTop += 50;
    }
    this.$node.css({
      'left': newLeft,
      'top': newTop
    });
  };
};

GiantDancer.prototype = Object.create(Dancer.prototype);
GiantDancer.prototype.constructor = GiantDancer;