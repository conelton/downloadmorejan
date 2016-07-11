'use strict';

import smoothScroll from './smooth-scroll';

const qsa = s => Array.from(document.querySelectorAll(s));

function scrollTo(y) {
  smoothScroll(y, 500);
}

function scrollToId(id) {
  let element = document.getElementById(id);
  scrollTo(element.offsetTop);
}

document.addEventListener('DOMContentLoaded', event => {
  qsa('[data-scroll]').forEach(element => {
    element.addEventListener('click', event => {
      let href = element.getAttribute('href').trim();
      if (href.charAt(0) === '#') {
        if (href === '#')
          scrollTo(0);
        else
          scrollToId(href.slice(1));
      }
      event.preventDefault();
    });
  });
});
