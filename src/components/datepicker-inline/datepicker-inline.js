import 'air-datepicker';

export default class DatepickerInline {
  constructor(item) {
    this.item = item;
  }

  createDatepicker() {
    const $item = $(this.item);

    this.datepickerInline = $item.datepicker({
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
    const $item = $(this.item);
    const $buttons = $item.find('.js-datepicker-inline__buttons');
    const $clear = $item.find('.js-datepicker-inline__clear-button');
    const $apply = $item.find('.js-datepicker-inline__apply-button');

    $clear.on('click', () => {
      this.datepickerInline.clear();
    });

    $apply.on('click', () => {
      this.datepickerInline.hide();
    });

    $item.find('.datepicker').append($buttons);
  }
}
