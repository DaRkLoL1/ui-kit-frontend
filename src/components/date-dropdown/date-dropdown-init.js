import DateDropdown from './date-dropdown';

const arrDateDropdown = document.querySelectorAll('.js-date-dropdown');
arrDateDropdown.forEach((item) => {
  const datepicker = new DateDropdown(item);
  datepicker.createDatepicker();
  datepicker.addButtons();
});
