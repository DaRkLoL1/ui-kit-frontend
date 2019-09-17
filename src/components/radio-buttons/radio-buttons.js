import '../switch/switch.js';

;(function ($, undefined){

  let arrRadioButtons = document.querySelectorAll('.js-radio-buttons');
  
  arrRadioButtons.forEach( item => {

    let $item = $(item);
    
    let $arrRadio = $item.find('.js-switch');
    
    $($arrRadio[0]).addClass('switch_radio_checked');

    

    $item.on('click', function (event) {

      let $target = $(event.target);
  
      if($target.hasClass('js-radio-buttons')) return;
  
      $target.find('.js-switch__input').prop('checked', true);
  
      $target.addClass('switch_radio_checked');

      $arrRadio.each(function (i, item){
        let $item = $(item);
        if( ! ($item.find('.js-switch__input').prop('checked') ) ) {
          $(item).removeClass('switch_radio_checked');
        }
      })
  
    });
  });

})(jQuery);