import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(item) {
    this.item = item;
  }

  createDropdown() {
    const $item = $(this.item);

    $item.find('.iqdropdown').iqDropdown({
      selectionText: '',
      textPlural: '',
      onChange: () => {
        this.setValueDropdown();
      },
    });

    this.setValueDropdown();
  }

  addButtons() {
    const $item = $(this.item);

    if ($item.hasClass('js-dropdown_with_buttons')) {
      const $buttons = $item.find('.js-dropdown__buttons');
      const $clear = $buttons.find('.js-dropdown__clear-button');
      const $apply = $buttons.find('.js-dropdown__apply-button');

      $buttons.on('click', (event) => {
        event.stopPropagation();
      });

      $clear.on('click', () => {
        while (Number.parseInt($item.find('.counter').text(), 10) !== 0) {
          $item.find('.button-decrement').trigger('click');
        }
      });

      $apply.on('click', () => {
        $item.find('.iqdropdown').trigger('click');
      });
      $item.find('.iqdropdown-menu').append($buttons);
    }
  }

  checkOnNull(arrCount) {
    const $item = $(this.item);
    const buttons = $item.find('.button-decrement');

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
    const $item = $(this.item);
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

    const $clear = $item.find('.js-dropdown__clear-button');

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
    const $item = $(this.item);
    const arrItems = $item.find('.counter');

    const arrCount = [];
    arrItems.each((i, item) => {
      arrCount.push(Number.parseInt($(item).text(), 10));
    });

    this.checkOnNull(arrCount);

    this.text = '';

    if ($item.hasClass('js-dropdown_with_buttons')) {
      this.setValueVisitorAndSetText(arrCount);
    } else {
      this.setValueFurnitureAndSetText(arrCount);
    }

    $item.find('.iqdropdown-selection').text(this.text);
  }
}
