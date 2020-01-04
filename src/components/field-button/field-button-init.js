import { FieldButton } from './Field-button';

const fields = document.querySelectorAll('.js-field-button');

fields.forEach((field, index) => {
  new FieldButton(field, index);
});
