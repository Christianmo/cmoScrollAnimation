(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.cmoScrollAnimation = factory();
  }
}(this, function() {
  'use strict';

  var cmoScrollAnimation = function animation() {
    var withAnimation = document.querySelectorAll('.animation');

    if (!withAnimation) return false;
  
    window.addEventListener('scroll', function () {
      [].forEach.call(withAnimation, function (el) {
        var currentTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
        var animationPos = currentTop + window.innerHeight / 2;
        var elTopPos = el.offsetTop;
        var elBottomPos = elTopPos + el.offsetHeight;
  
        if (animationPos > elTopPos) {
          el.classList.add('animated');
        }
  
        if (el.classList.contains('animation--focused')) {
          if (animationPos > elBottomPos || animationPos < elTopPos) {
            el.classList.remove('animated');
          }
        }
      });
    });
  };

  return cmoScrollAnimation;
}))