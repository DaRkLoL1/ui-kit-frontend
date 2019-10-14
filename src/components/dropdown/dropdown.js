import '../item-quantity-dropdown/item-quantity-dropdown.min';


;(function ($) {
  const arrDropdown = document.querySelectorAll('.js-dropdown');

  arrDropdown.forEach((item) => {
    const setValueDropdown = function ($dropdown) {
      const arrItems = $dropdown.find('.counter');

      const arrCount = [];
      arrItems.each((i, item) => {
        arrCount.push(Number.parseInt($(item).text(), 10));
      });

      const buttons = $dropdown.find('.button-decrement');
      arrCount.forEach((item, i) => {
        const $button = $(buttons[i]);

        if (item === 0) {
          $button.addClass('button-zero');
        } else {
          $button.removeClass('button-zero');
        }
      });
      let text = '';

      if ($dropdown.hasClass('js-dropdown_with_buttons')) {
        const arrValues = [
          ['гость', 'гостя', 'гостей'],
          ['младенец', 'младенца', 'младенцев'],
        ];
        const lastCount = arrCount.pop();
        const firstCount = arrCount.reduce((a, b) => (a + b));
        const arrNewCount = [firstCount, lastCount];

        arrNewCount.forEach((item, i) => {
          if (item === 1) {
            text += `${item} ${arrValues[i][0]}, `;
          } 
          if (item > 1 && item < 5) {
            text += `${item} ${arrValues[i][1]}, `;
          }
          if (item > 4) {
            text += `${item} ${arrValues[i][2]}, `;
          }
        });
        const $clear = $dropdown.find('.js-dropdown__first-button');

        if (text.length > 0) {
          text = text.slice(0, text.length - 2);
          $clear.removeClass('dropdown__first-button_hide_clean');
        } else {
          text = 'Сколько гостей';
          $clear.addClass('dropdown__first-button_hide_clean');
        }
      } else {
        const arrValues = [
          ['спальня', 'спальни', 'спален'],
          ['кровать', 'кровати', 'кроватей'],
          ['ванная комната', 'ванные комнаты', 'ванных комнат'],
        ];

        arrCount.forEach((item, i) => {
          if (item === 1) {
            text += `${item} ${arrValues[i][0]}, `;
          }
          if (item > 1 && item < 5) {
            text += `${item} ${arrValues[i][1]}, `;
          }
          if (item > 4 || item === 0) {
            text += `${item} ${arrValues[i][2]}, `;
          }
        });

        text = text.slice(0, text.length - 2);
      }

      $dropdown.find('.iqdropdown-selection').text(text);
    };
    const $item = $(item);

    $item.find('.iqdropdown').iqDropdown({
      selectionText: '',
      textPlural: '',
      onChange: () => {
        setValueDropdown($item);
      },
    });

    if ($item.hasClass('js-dropdown_with_buttons')) {
      const $buttons = $item.find('.js-dropdown__buttons');

      $buttons.on('click', (event) => {
        event.stopPropagation();
      });

      const $clear = $buttons.find('.js-dropdown__first-button');

      $clear.on('click', () => {
        while (Number.parseInt($item.find('.counter').text(), 10) !== 0) {
          $item.find('.button-decrement').trigger('click');
        }
      });

      const $get = $buttons.find('.js-dropdown__second-button');
      $get.on('click', () => {
        $item.find('.iqdropdown').trigger('click');
      });
      $item.find('.iqdropdown-menu').append($buttons);
    }

    setValueDropdown($item);
  });
}(jQuery));
