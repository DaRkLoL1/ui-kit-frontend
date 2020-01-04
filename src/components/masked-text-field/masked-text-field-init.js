import { MaskedTextField } from './Masked-text-field';

const masks = document.querySelectorAll('.js-mask');
masks.forEach((mask) => {
  new MaskedTextField(mask);
});
