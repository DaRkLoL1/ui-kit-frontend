import { RadioButtons } from './Radio-buttons';

const arrRadioItem = document.querySelectorAll('.js-radio-buttons');
arrRadioItem.forEach((radio, index) => {
  new RadioButtons(radio, index);
});
