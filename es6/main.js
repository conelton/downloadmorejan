'use strict';

import scroll from 'scroll';

const qsa = s => Array.from(document.querySelectorAll(s));

function scrollTo(y) {
  scroll.top(document, y, { duration: 500 });
}

function scrollToId(id) {
  let element = document.getElementById(id);
  scrollTo(element.offsetTop);
}

document.addEventListener('DOMContentLoaded', event => {
  qsa('[data-scroll]').addEventListener('click', event => {
    let href = event.currentTarget.getAttribute('href').trim();
    if (href.charAt(0) === '#') {
      if (href === '#')
        scrollTo(0);
      else
        scrollToId(href.slice(1));
    }
  });
});
