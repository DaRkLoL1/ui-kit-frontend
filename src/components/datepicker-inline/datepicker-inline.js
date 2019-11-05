import 'air-datepicker';

export default class DatepickerInline {
  constructor(datepicker) {
    this.$datepicker = $(datepicker);
    this.createDatepicker();
    this.addButtons();
  }

  createDatepicker() {
    this.datepickerInline = this.$datepicker.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
    }).data('datepicker');

    this.datepickerInline.selectDate([new Date('2019-09-13'), new Date('2019-09-16')]);
  }

  addButtons() {
    const $buttons = this.$datepicker.find('.js-datepicker-inline__buttons');
    const $clear = this.$datepicker.find('.js-datepicker-inline__clear-button');
    const $apply = this.$datepicker.find('.js-datepicker-inline__apply-button');

    $clear.on('click', () => {
      this.datepickerInline.clear();
    });

    $apply.on('click', () => {
      this.datepickerInline.hide();
    });

    this.$datepicker.find('.datepicker').append($buttons);
  }
}
