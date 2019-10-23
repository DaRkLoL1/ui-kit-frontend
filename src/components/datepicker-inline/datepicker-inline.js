import 'air-datepicker';

;(function ($) {
  if ($('.datepicker-inline').length > 0) {
    const datepickerInline = $('.datepicker-inline').datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
    }).data('datepicker');

    datepickerInline.selectDate([new Date('2019-09-13'), new Date('2019-09-16')]);
    $('.js-datepicker-inline .datepicker').append($('.js-datepicker-inline__buttons'));

    $('.js-datepicker-inline__first-button').on('click', () => {
      datepickerInline.clear();
    });

    $('.js-datepicker-inline__second-button').on('click', () => {
      datepickerInline.hide();
    });
  }
}(jQuery));
