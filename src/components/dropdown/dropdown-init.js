import { Dropdown } from './Dropdown';

const arrDropdown = document.querySelectorAll('.js-dropdown');
arrDropdown.forEach((item, index) => {
  new Dropdown(item, index);
});
