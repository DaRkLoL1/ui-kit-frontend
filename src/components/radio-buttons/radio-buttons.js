$($('.js-radio-buttons .js-switch')[0]).addClass('switch_radio_checked');
$('.js-radio-buttons').on('click', function (event) {

  let target = event.target;
  
  if(target === document.querySelector('.js-radio-buttons')) return;
  
  $(target).find('.js-switch__input').prop('checked', true);
  
  $(target).addClass('switch_radio_checked');

  let arrRadio = $('.js-radio-buttons .js-switch');
  
  arrRadio.each(function (){

    if( !$(this).find('.js-switch__input').prop('checked') ) {
      $(this).removeClass('switch_radio_checked');
    }
  })
  
});