import DateDropdown from './date-dropdown';

const arrDateDropdown = document.querySelectorAll('.js-date-dropdown');
arrDateDropdown.forEach((item) => {
  new DateDropdown(item);
});
