import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(dropdown, index) {
    this.$dropdown = $(dropdown);
    this.index = index;
    this.initDropdown();
    this.addButtons();
  }

  initDropdown() {
    this.$pluginDropdown = this.$dropdown.find('.iqdropdown');

    this.$pluginDropdown.iqDropdown({
      selectionText: '',
      textPlural: '',
      onChange: () => {
        this.setValueDropdown();
      },
    });

    if (this.$dropdown.hasClass('js-dropdown_with-buttons')) {
      this.$clearButton = this.$dropdown.find('.js-dropdown__clear-button');
    }

    this.$dropdownMenu = this.$dropdown.find('.iqdropdown-menu');
    this.addHandledropdownMenu();

    this.$arrCounters = this.$dropdown.find('.counter');
    this.$buttonsDecrement = this.$dropdown.find('.button-decrement');
    this.$textField = this.$dropdown.find('.iqdropdown-selection');

    this.setValueDropdown();
  }

  addHandledropdownMenu() {
    this.$dropdownMenu.on(`click.menu${this.index}`, this.handleMenuClick);
  }

  handleMenuClick(event) {
    event.stopPropagation();
  }

  addButtons() {
    if (this.$dropdown.hasClass('js-dropdown_with-buttons')) {
      this.$applyButton = this.$dropdown.find('.js-dropdown__apply-button');
      this.addHandlesForButtons();
    }
  }

  addHandlesForButtons() {
    this.$clearButton.on(`click.clearButton${this.index}`, this.handleClearButtonClick.bind(this));
    this.$applyButton.on(`click.applyButton${this.index}`, this.handleApplyButtonClick.bind(this));
  }

  handleClearButtonClick() {
    let isTrue = true;
    do {
      let count = 0;
      this.$buttonsDecrement.trigger('click');
      this.$arrCounters.each((i, counter) => {
        count += Number.parseInt(counter.innerHTML, 10);
      });

      if (count === 0) {
        isTrue = false;
      }
    } while (isTrue);
  }

  handleApplyButtonClick() {
    this.$pluginDropdown.trigger('click');
  }

  checkOnNull(arrCount) {
    arrCount.forEach((item, i) => {
      const $button = $(this.$buttonsDecrement[i]);

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

    if (this.text.length > 0) {
      this.text = this.text.slice(0, this.text.length - 2);
      this.$clearButton.removeClass('dropdown__clear-button_hide_clean');
    } else {
      this.text = 'Сколько гостей';
      this.$clearButton.addClass('dropdown__clear-button_hide_clean');
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
    const arrCount = [];
    this.$arrCounters.each((i, item) => {
      arrCount.push(Number.parseInt($(item).text(), 10));
    });

    this.checkOnNull(arrCount);

    this.text = '';

    if (this.$dropdown.hasClass('js-dropdown_with-buttons')) {
      this.setValueVisitorAndSetText(arrCount);
    } else {
      this.setValueFurnitureAndSetText(arrCount);
    }

    this.$textField.text(this.text);
  }
}

export { Dropdown };
