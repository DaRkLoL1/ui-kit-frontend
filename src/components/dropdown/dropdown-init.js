import Dropdown from './dropdown';

const arrDropdown = document.querySelectorAll('.js-dropdown');
arrDropdown.forEach((item) => {
  const dropdown = new Dropdown(item);
  dropdown.addButtons();
  dropdown.createDropdown();
});
