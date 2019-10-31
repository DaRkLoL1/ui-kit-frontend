import RangeSlider from './range-slider';

const item = document.querySelector('.js-range-slider');
if (item) {
  const slider = new RangeSlider('.js-range-slider');
  slider.createSlider();
}
