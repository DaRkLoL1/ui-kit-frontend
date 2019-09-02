$('.js-like-button').on('click', function (event) {
  let $target = $(event.currentTarget);
  let $icon = $( $target.find('.like-button__icon') );
  let $number = $( $target.find('.like-button__number') );
  let text = Number.parseInt( $number.text() );
  
  if( !($target.hasClass('like-button_click')) ) {
    $target.addClass('like-button_click');

    text += 1;
    $number.text(text);
    if(text > 9) {
      $number.addClass('like-button__number_margin_null');
    }

    $icon.text('favorite');
  } else {
    $target.removeClass('like-button_click');

    text -= 1;
    $number.text(text);
    if(text < 10) {
      $number.removeClass('like-button__number_margin_null');
    }

    $icon.text('favorite_border');
  }

})