import 'air-datepicker';

export default class FilterDateDropdown {
  constructor(item) {
    this.item = item;
  }

  createDatepicker() {
    const $item = $(this.item);
    const $textField = $item.find('.js-text-field');

    this.filterDateDropdown = $textField.datepicker({
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
      this.filterDateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
    }

    $item.on('click', () => {
      this.filterDateDropdown.show();
    });

    this.filterDateDropdown.$datepicker.css('width', '266px');
  }

  addButtons() {
    const $item = $(this.item);
    const $buttons = $item.find('.js-filter-date-dropdown__buttons');
    const $clear = $item.find('.js-filter-date-dropdown__clear-button');
    const $apply = $item.find('.js-filter-date-dropdown__apply-button');

    $clear.on('click', () => {
      this.filterDateDropdown.clear();
    });

    $apply.on('click', () => {
      this.filterDateDropdown.hide();
    });

    this.filterDateDropdown.$datepicker.append($buttons);
  }
}
