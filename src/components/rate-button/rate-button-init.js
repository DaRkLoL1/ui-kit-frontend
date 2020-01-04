import { RateButton } from './Rate-button';

const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((item) => {
  new RateButton(item);
});
