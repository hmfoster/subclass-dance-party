var ChameleonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chameleon');
};

ChameleonDancer.prototype = Object.create(Dancer.prototype);
ChameleonDancer.prototype.constructor = ChameleonDancer;
ChameleonDancer.prototype.fly = function() {
  console.log(this.$node);
  this.$node.css({
    'transform':'rotate(3600deg)'
  });
  this.$node.animate({top: '5%'}, 200);
  // .animate( properties [, duration ] [, easing ] [, complete ] )
};