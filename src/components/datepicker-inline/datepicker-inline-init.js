import DatepickerInline from './datepicker-inline';

const item = document.querySelector('.datepicker-inline');

if (item) {
  const datepicker = new DatepickerInline(item);
  datepicker.createDatepicker();
  datepicker.addButtons();
}
