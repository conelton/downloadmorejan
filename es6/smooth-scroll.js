'use strict';

const easeIn = p => Math.pow(p, 3);
const easeOut = p => Math.pow(p - 1, 3) + 1;
const easeInOut = p => p < 1/2 ? 4 * easeIn(p) : 0.5 * (easeOut(2*p - 1) + 1);
const ease = (currentTime, deltaTime) => 
  easeInOut(currentTime / deltaTime);

function scroll(y) {
  window.scroll(window.scrollX, y);
}

module.exports = function smoothScroll(endScroll, deltaTime) {
  
  const timeStep = 10;
  const startScroll = window.scrollY;
  const deltaScroll = endScroll - startScroll;
  let currentTime = 0;
  
  function animate() {
    currentTime += timeStep;
    if (currentTime >= deltaTime) {
      scroll(endScroll);
      clearInterval(interval);
    }
    else
      scroll(startScroll + ease(currentTime, deltaTime) * deltaScroll);
  }
  
  const interval = setInterval(animate, timeStep);
  
}
