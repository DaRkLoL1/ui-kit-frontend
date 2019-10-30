import 'air-datepicker';

(function ($) {
  const arrDateDropdown = document.querySelectorAll('.js-date-dropdown');

  arrDateDropdown.forEach((item) => {
    const $item = $(item);
    const $first = $item.find('.date-dropdown__first-input .js-text-field');
    const $second = $item.find('.date-dropdown__second-input .js-text-field');

    const dateDropdown = $first.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
      altField: $second,
      altFieldDateFormat: '',
      onSelect(formattedDate) {
        const arrDates = formattedDate.split(',');

        if (arrDates.length === 1) {
          $first.val('');
          $second.val(arrDates[0]);
        } else {
          $first.val(arrDates[0]);
          $second.val(arrDates[1]);
        }
      },
    }).data('datepicker');
    const dates = $item.data('dates');

    if (Array.isArray(dates)) {
      if (dates.length === 1) {
        dateDropdown.selectDate(new Date(dates[0]));
      } else {
        dateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
      }
    }

    $item.find('.js-date-dropdown__clear-button').on('click', () => {
      dateDropdown.clear();
    });

    $item.find('.js-date-dropdown__apply-button').on('click', () => {
      dateDropdown.hide();
    });

    $item.find('.date-dropdown__first-input, .date-dropdown__second-input').on('click', () => {
      dateDropdown.show();
    });
    dateDropdown.$datepicker.append($item.find('.js-date-dropdown__buttons'));
  });
}(jQuery));
