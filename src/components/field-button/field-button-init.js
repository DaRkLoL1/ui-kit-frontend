import { FieldButton } from './field-button';

const fields = document.querySelectorAll('.js-field-button');

fields.forEach((field, index) => {
  new FieldButton(field, index);
});
