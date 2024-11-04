'use strict';

const currentImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
    currentImg.src = event.target.closest('a').href;
  }
});
