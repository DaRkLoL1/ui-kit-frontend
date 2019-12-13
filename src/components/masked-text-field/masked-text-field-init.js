import { Mask } from './masked-text-field';

const masks = document.querySelectorAll('.js-mask');
masks.forEach((mask) => {
  new Mask(mask);
});
