import Field from './field-button';

const fields = document.querySelectorAll('.js-field-button');

fields.forEach((field, index) => {
  new Field(field, index);
});
