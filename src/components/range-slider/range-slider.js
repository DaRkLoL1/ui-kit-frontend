import './jquery-ui-slider.js';
import './jquery-ui-slider-touch-punch.js';


;(function ($, undefined) {
  let getResult = function (values) {

    return values.map( item => {
      item = item + '';

      if(item.length > 3) {
        let lengthSlice = item.length - 3;
        item = item.slice(0, lengthSlice) + ' ' + item.slice(lengthSlice);
      }

      return item;
    });

  }

  $('.js-range-slider__item').slider({
    animate: 'slow',
    range: true,
    max: 15500,   
    values: [ 5000, 10000 ],
    slide : function(event, ui) { 

        let result = getResult(ui.values);
        $('.js-range-slider__result').text( result[ 0 ] + '\u20bd - ' + result[ 1 ] + '\u20bd' );        
    }
  });

  let result = getResult( $('.js-range-slider__item').slider('values') );
  $( '.js-range-slider__result' ).text(  result[ 0 ] + '\u20bd - ' + result[ 1 ] + '\u20bd'  );

})(jQuery);