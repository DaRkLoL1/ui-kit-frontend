import FilterDateDropdown from './filter-date-dropdown';

const arrFilterDateDropdown = document.querySelectorAll('.js-filter-date-dropdown');

arrFilterDateDropdown.forEach((item) => {
  const datepicker = new FilterDateDropdown(item);
  datepicker.createDatepicker();
  datepicker.addButtons();
});
