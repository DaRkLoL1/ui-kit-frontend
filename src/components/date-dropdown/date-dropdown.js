import '../datepicker/datepicker.min.js';

$('.js-date-dropdown .date-dropdown__first-input .js-text-field').datepicker({
  range: true,
  offset: 16,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
  },
});