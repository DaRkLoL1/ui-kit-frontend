import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(dropdown, index) {
    this.$dropdown = $(dropdown);
    this.index = index;
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
      const $clearButton = $fieldForbuttons.find('.js-dropdown__clear-button');
      const $applyButton = $fieldForbuttons.find('.js-dropdown__apply-button');
      this.$counterVisitors = this.$dropdown.find('.counter');
      this.addHandlesForButtons($fieldForbuttons, $clearButton, $applyButton);
    }
  }

  addHandlesForButtons($fieldForbuttons, $clearButton, $applyButton) {
    $fieldForbuttons.on(`click.buttons${this.index}`, this.handleButtonsClick);

    $clearButton.on(`click.clearButton${this.index}`, this.handleClearButtonClick.bind(this));

    $applyButton.on(`click.applyButton${this.index}`, this.handleApplyButtonClick.bind(this));

    this.$dropdown.find('.iqdropdown-menu').append($fieldForbuttons);
  }

  handleButtonsClick(event) {
    event.stopPropagation();
  }

  handleClearButtonClick() {
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

  handleApplyButtonClick() {
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

    const $clearButton = this.$dropdown.find('.js-dropdown__clear-button');

    if (this.text.length > 0) {
      this.text = this.text.slice(0, this.text.length - 2);
      $clearButton.removeClass('dropdown__clear-button_hide_clean');
    } else {
      this.text = 'Сколько гостей';
      $clearButton.addClass('dropdown__clear-button_hide_clean');
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
