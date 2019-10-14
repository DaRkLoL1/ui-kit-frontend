import 'air-datepicker';

;(function ($) {
  const arrFilterDateDropdown = document.querySelectorAll('.js-filter-date-dropdown');

  arrFilterDateDropdown.forEach((item) => {
    const $item = $(item);
    const $textField = $item.find('.js-text-field');

    const filterDateDropdown = $textField.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd M',
    }).data('datepicker');
    const dates = $item.data('dates');

    if (Array.isArray(dates)) {
      filterDateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
    }

    $item.find('.js-filter-date-dropdown__first-button').on('click', () => {
      filterDateDropdown.clear();
    });

    $item.find('.js-filter-date-dropdown__second-button').on('click', () => {
      filterDateDropdown.hide();
    });

    $item.on('click', () => {
      filterDateDropdown.show();
    });
    filterDateDropdown.$datepicker.append($item.find('.js-filter-date-dropdown__buttons'));
    filterDateDropdown.$datepicker.css('width', '266px');
  });
}(jQuery));
