import FilterDateDropdown from './filter-date-dropdown';

const arrFilterDateDropdown = document.querySelectorAll('.js-filter-date-dropdown');

arrFilterDateDropdown.forEach((item) => {
  new FilterDateDropdown(item);
});
