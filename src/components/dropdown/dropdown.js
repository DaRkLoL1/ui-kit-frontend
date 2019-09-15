import '../item-quantity-dropdown/item-quantity-dropdown.min.js';


;(function ($, undefined) {

  let arrDropdown = document.querySelectorAll('.js-dropdown');

  arrDropdown.forEach( item => {

    let setValueDropdown = function ($dropdown) {
      let arrItems = $dropdown.find('.counter');

      let arrCount  = [];
      arrItems.each(function (i, item) {
        arrCount.push( Number.parseInt($(item).text()) );
      });

      let buttons = $dropdown.find('.button-decrement');
      
      arrCount.forEach( (item, i) => {
        let $button = $(buttons[i]);

        if(item === 0) {
          $button.addClass('button-zero');
        } else {
          $button.removeClass('button-zero');
        }

      });
      
      let text = '';

      if( $dropdown.hasClass('js-dropdown_with_buttons') ) {

        let arrValues = [
          ['гость', 'гостя', 'гостей'],
          ['младенец', 'младенца','младенцев']
        ];
        
        let lastCount = arrCount.pop();
        let firstCount = arrCount.reduce((a,b) => {
          return a + b;
        });
        
        let arrNewCount = [firstCount, lastCount];

        arrNewCount.forEach( (item, i) => {
          if(item === 1) {
            text += item + ' ' + arrValues[i][0] + ', ';
          } 
          else if(item > 1 && item < 5) {
            text += item + ' ' + arrValues[i][1] + ', ';
          }
          else if(item > 4) {
            text += item + ' ' + arrValues[i][2] + ', ';
          }
        });
        
        let $clear = $dropdown.find('.js-dropdown__first-button');

        if(text.length > 0) {
          text = text.slice(0, text.length - 2);
          $clear.removeClass('dropdown__first-button_hide_clean');
        } else {
          text = 'Сколько гостей';
          $clear.addClass('dropdown__first-button_hide_clean');
        }

      } else {

        let arrValues = [
          ['спальня', 'спальни', 'спален'],
          ['кровать', 'кровати', 'кроватей'], 
          ['ванная комната', 'ванные комнаты','ванных комнат']
        ];

        arrCount.forEach( (item, i) => {
          if(item === 1) {
            text += item + ' ' + arrValues[i][0] + ', ';
          } 
          else if(item > 1 && item < 5) {
            text += item + ' ' + arrValues[i][1] + ', ';
          }
          else if(item > 4 || item === 0) {
            text += item + ' ' + arrValues[i][2] + ', ';
          }
        });

        text = text.slice(0, text.length - 2);
      }

      $dropdown.find('.iqdropdown-selection').text(text);
    }

    let $item = $(item);

    $item.find('.iqdropdown').iqDropdown({
      selectionText: '',
      textPlural: '',
      onChange: (id, count, totalItems) => {
        setValueDropdown($item);
      },
    });

    if( $item.hasClass('js-dropdown_with_buttons') ) {
      let $buttons = $item.find('.js-dropdown__buttons');

      $buttons.on('click', function (event) {
        event.stopPropagation();
      });

      let $clear = $buttons.find('.js-dropdown__first-button');

      $clear.on('click', function (event) {

        while( Number.parseInt( $item.find('.counter').text() )  !== 0 ) {
          $item.find('.button-decrement').trigger('click');
        }

      });

      let $get = $buttons.find('.js-dropdown__second-button');
      
      $get.on('click', function (event) {
        $item.find('.iqdropdown').trigger('click');
      });
      
      $item.find('.iqdropdown-menu').append( $buttons );

    }


    setValueDropdown($item);

  })

})(jQuery);