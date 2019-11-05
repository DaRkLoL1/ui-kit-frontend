import Dropdown from './dropdown';

const arrDropdown = document.querySelectorAll('.js-dropdown');
arrDropdown.forEach((item) => {
  new Dropdown(item);
});
