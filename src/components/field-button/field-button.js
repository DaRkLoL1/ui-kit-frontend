
  $('.js-field-button_focused .js-text-field').on('focus', function (event){
    let target = event.currentTarget;
    $(target).parent().addClass('field-button_isFocused');
    $(target).next().addClass('field-button__icon_isFocused');
  });

  $('.js-field-button_focused .js-text-field').on('blur', function (event){
    let target = event.currentTarget;
    $(target).parent().removeClass('field-button_isFocused');
    $(target).next().removeClass('field-button__icon_isFocused');
  });

  
    $('.js-field-button .js-field-button__icon').hover(function (event) {
      $(event.currentTarget).addClass('field-button__icon_hovered');
    }, function (event) {
       $(event.currentTarget).removeClass('field-button__icon_hovered');
    })

  
  