import RadioButtons from './radio-buttons';

const arrRadioItem = document.querySelectorAll('.js-radio-buttons');
arrRadioItem.forEach((radio, index) => {
  new RadioButtons(radio, index);
});
