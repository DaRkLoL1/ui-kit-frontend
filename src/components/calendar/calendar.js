import 'air-datepicker';

export default class Calendar {
  constructor(datepicker) {
    this.$datepicker = $(datepicker);
    this.createDatepicker();
    this.addButtons();
  }

  createDatepicker() {
    let param = {
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
    };

    if (this.$datepicker.hasClass('js-calendar_type_dropdown')) {
      const $left = this.$datepicker.find('.js-calendar__left-input .js-text-field');
      const $right = this.$datepicker.find('.js-calendar__right-input .js-text-field');

      param = Object.assign(param,
        {
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
        });
      this.calendar = $left.datepicker(param).data('datepicker');

      this.setMethodShow();
    } else if (this.$datepicker.hasClass('js-calendar_type_filter')) {
      const $textField = this.$datepicker.find('.js-text-field');

      param = Object.assign(param,
        {
          multipleDatesSeparator: ' - ',
          dateFormat: 'dd M',
        });

      this.calendar = $textField.datepicker(param).data('datepicker');
      this.calendar.$datepicker.css('width', '266px');

      this.setMethodShow();
    } else {
      this.calendar = this.$datepicker.datepicker(param).data('datepicker');
    }

    this.setDate();
  }

  setDate() {
    const dates = this.$datepicker.data('dates');

    if (dates.length) {
      if (dates.length === 1) {
        this.calendar.selectDate(new Date(dates[0]));
      } else {
        this.calendar.selectDate([new Date(dates[0]), new Date(dates[1])]);
      }
    }
  }

  setMethodShow() {
    if (this.$datepicker.hasClass('js-calendar_type_dropdown')) {
      this.$datepicker.find('.js-calendar__input').on('click', () => {
        this.calendar.show();
      });
    } else {
      this.$datepicker.on('click', () => {
        this.calendar.show();
      });
    }
  }

  addButtons() {
    const $buttons = this.$datepicker.find('.js-calendar__buttons');
    const $clear = this.$datepicker.find('.js-calendar__clear-button');
    const $apply = this.$datepicker.find('.js-calendar__apply-button');

    this.addHandleButtons($clear, $apply);

    this.calendar.$datepicker.append($buttons);
  }

  addHandleButtons($clear, $apply) {
    $clear.on('click', () => {
      this.calendar.clear();
    });

    $apply.on('click', () => {
      this.calendar.hide();
    });
  }
}
