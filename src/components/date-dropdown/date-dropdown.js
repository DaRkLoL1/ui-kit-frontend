import 'air-datepicker';

export default class DateDropdown {
  constructor(item) {
    this.item = item;
  }

  createDatepicker() {
    const $item = $(this.item);
    const $left = $item.find('.js-date-dropdown__left-input .js-text-field');
    const $right = $item.find('.js-date-dropdown__right-input .js-text-field');

    this.dateDropdown = $left.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
      altField: $right,
      altFieldDateFormat: '',
      onSelect(formattedDate) {
        const arrDates = formattedDate.split(',');

        if (arrDates.length === 1) {
          $left.val('');
          $right.val(arrDates[0]);
        } else {
          $left.val(arrDates[0]);
          $right.val(arrDates[1]);
        }
      },
    }).data('datepicker');
    const dates = $item.data('dates');

    if (Array.isArray(dates)) {
      if (dates.length === 1) {
        this.dateDropdown.selectDate(new Date(dates[0]));
      } else {
        this.dateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
      }
    }

    $item.find('.js-date-dropdown__left-input, .js-date-dropdown__right-input').on('click', () => {
      this.dateDropdown.show();
    });
  }

  addButtons() {
    const $item = $(this.item);
    const $buttons = $item.find('.js-date-dropdown__buttons');
    const $clear = $item.find('.js-date-dropdown__clear-button');
    const $apply = $item.find('.js-date-dropdown__apply-button');

    $clear.on('click', () => {
      this.dateDropdown.clear();
    });

    $apply.on('click', () => {
      this.dateDropdown.hide();
    });

    this.dateDropdown.$datepicker.append($buttons);
  }
}
