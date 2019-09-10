import '../datepicker/datepicker.min.js';

$('.datepicker-inline').datepicker({
  range: true,
  offset: 16,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
  },
});