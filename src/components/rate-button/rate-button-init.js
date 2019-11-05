import RateButton from './rate-button';

const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((item) => {
  new RateButton(item);
});
