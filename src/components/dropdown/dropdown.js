import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(dropdown) {
    this.$dropdown = $(dropdown);
    this.addButtons();
    this.createDropdown();
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
      const $buttons = this.$dropdown.find('.js-dropdown__buttons');
      const $clear = $buttons.find('.js-dropdown__clear-button');
      const $apply = $buttons.find('.js-dropdown__apply-button');
      this.addHandlesForButtons($buttons, $clear, $apply);
    }
  }

  addHandlesForButtons($buttons, $clear, $apply) {
    $buttons.on('click', (event) => {
      event.stopPropagation();
    });

    $clear.on('click', () => {
      while (Number.parseInt(this.$dropdown.find('.counter').text(), 10) !== 0) {
        this.$dropdown.find('.button-decrement').trigger('click');
      }
    });

    $apply.on('click', () => {
      this.$dropdown.find('.iqdropdown').trigger('click');
    });
    this.$dropdown.find('.iqdropdown-menu').append($buttons);
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
      if (item > 1 && item < 5) {
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
      if (item > 1 && item < 5) {
        this.text += `${item} ${arrValues[i][1]}, `;
      }
      if (item > 4 || item === 0) {
        this.text += `${item} ${arrValues[i][2]}, `;
      }
    });

    this.text = this.text.slice(0, this.text.length - 2);
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
