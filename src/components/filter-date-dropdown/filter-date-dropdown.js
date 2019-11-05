import 'air-datepicker';

export default class FilterDateDropdown {
  constructor(datepicker) {
    this.$datepicker = $(datepicker);
    this.createDatepicker();
    this.addButtons();
  }

  createDatepicker() {
    const $textField = this.$datepicker.find('.js-text-field');

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
    const dates = this.$datepicker.data('dates');

    if (Array.isArray(dates)) {
      this.filterDateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
    }

    this.$datepicker.on('click', () => {
      this.filterDateDropdown.show();
    });

    this.filterDateDropdown.$datepicker.css('width', '266px');
  }

  addButtons() {
    const $buttons = this.$datepicker.find('.js-filter-date-dropdown__buttons');
    const $clear = this.$datepicker.find('.js-filter-date-dropdown__clear-button');
    const $apply = this.$datepicker.find('.js-filter-date-dropdown__apply-button');

    $clear.on('click', () => {
      this.filterDateDropdown.clear();
    });

    $apply.on('click', () => {
      this.filterDateDropdown.hide();
    });

    this.filterDateDropdown.$datepicker.append($buttons);
  }
}
