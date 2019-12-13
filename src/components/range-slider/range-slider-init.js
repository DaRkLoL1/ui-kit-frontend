import { RangeSlider } from './range-slider';

const arrSliders = document.querySelectorAll('.js-range-slider');
arrSliders.forEach((slider) => {
  new RangeSlider(slider);
});
