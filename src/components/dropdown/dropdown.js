import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(dropdown) {
    this.$dropdown = $(dropdown);
    this.createDropdown();
    this.addButtons();
  }

  createDropdown() {
    this.$dropdown.find('.iqdropdown').iqDropdown({
      selectionText: '',
      textPlural: '',
      onChange: () => {
        this.setValueDropdown();
      },
    });

    this.setValueDropdown();
  }

  addButtons() {
    if (this.$dropdown.hasClass('js-dropdown_with-buttons')) {
      const $fieldForbuttons = this.$dropdown.find('.js-dropdown__buttons');
      const $clear = $fieldForbuttons.find('.js-dropdown__clear-button');
      const $apply = $fieldForbuttons.find('.js-dropdown__apply-button');
      this.$counterVisitors = this.$dropdown.find('.counter');
      this.addHandlesForButtons($fieldForbuttons, $clear, $apply);
    }
  }

  addHandlesForButtons($fieldForbuttons, $clear, $apply) {
    $fieldForbuttons.on('click', this.handlefieldForbuttonsClick);

    $clear.on('click', this.handleButonClearClick.bind(this));

    $apply.on('click', this.handleButtonApplyClick.bind(this));

    this.$dropdown.find('.iqdropdown-menu').append($fieldForbuttons);
  }

  handlefieldForbuttonsClick(event) {
    event.stopPropagation();
  }

  handleButonClearClick() {
    let isTrue = true;
    do {
      let count = 0;
      this.$dropdown.find('.button-decrement').trigger('click');
      this.$counterVisitors.each((i, counter) => {
        count += Number.parseInt(counter.innerHTML, 10);
      });

      if (count === 0) {
        isTrue = false;
      }
    } while (isTrue);
  }

  handleButtonApplyClick() {
    this.$dropdown.find('.iqdropdown').trigger('click');
  }

  checkOnNull(arrCount) {
    const buttons = this.$dropdown.find('.button-decrement');

    arrCount.forEach((item, i) => {
      const $button = $(buttons[i]);

      if (item === 0) {
        $button.addClass('button-zero');
      } else {
        $button.removeClass('button-zero');
      }
    });
  }

  setValueVisitorAndSetText(arrCount) {
    const arrValues = [
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];

    const lastCount = arrCount.pop();
    const firstCount = arrCount.reduce((a, b) => (a + b));
    const arrNewCount = [firstCount, lastCount];

    arrNewCount.forEach((item, i) => {
      if (item === 1) {
        this.text += `${item} ${arrValues[i][0]}, `;
      }
      if (this.matchesWordFromMiddleArray(item)) {
        this.text += `${item} ${arrValues[i][1]}, `;
      }
      if (item > 4) {
        this.text += `${item} ${arrValues[i][2]}, `;
      }
    });

    const $clear = this.$dropdown.find('.js-dropdown__clear-button');

    if (this.text.length > 0) {
      this.text = this.text.slice(0, this.text.length - 2);
      $clear.removeClass('dropdown__clear-button_hide_clean');
    } else {
      this.text = 'Сколько гостей';
      $clear.addClass('dropdown__clear-button_hide_clean');
    }
  }

  setValueFurnitureAndSetText(arrCount) {
    const arrValues = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    ];

    arrCount.forEach((item, i) => {
      if (item === 1) {
        this.text += `${item} ${arrValues[i][0]}, `;
      }
      if (this.matchesWordFromMiddleArray(item)) {
        this.text += `${item} ${arrValues[i][1]}, `;
      }
      if (this.matchesWordFromEndArray(item)) {
        this.text += `${item} ${arrValues[i][2]}, `;
      }
    });

    this.text = this.text.slice(0, this.text.length - 2);
  }

  matchesWordFromMiddleArray(item) {
    return item > 1 && item < 5;
  }

  matchesWordFromEndArray(item) {
    return item > 4 || item === 0;
  }

  setValueDropdown() {
    const arrItems = this.$dropdown.find('.counter');

    const arrCount = [];
    arrItems.each((i, item) => {
      arrCount.push(Number.parseInt($(item).text(), 10));
    });

    this.checkOnNull(arrCount);

    this.text = '';

    if (this.$dropdown.hasClass('js-dropdown_with-buttons')) {
      this.setValueVisitorAndSetText(arrCount);
    } else {
      this.setValueFurnitureAndSetText(arrCount);
    }

    this.$dropdown.find('.iqdropdown-selection').text(this.text);
  }
}
