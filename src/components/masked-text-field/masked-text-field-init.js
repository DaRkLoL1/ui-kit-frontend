import Mask from './masked-text-field';

const mask = document.querySelector('.js-mask');
if (mask) {
  new Mask(mask);
}
