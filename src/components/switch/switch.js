$('.js-switch').on('click', function (event) {
  
  let target = event.currentTarget;
  let $input = $(target).find('.js-switch__input');
  
  if( !($input.attr('type') === 'checkbox') ) return;

  let className = $(target).hasClass('switch_checkbox') ? 'switch_checkbox' : 'switch_toggle';
  if($input.prop('checked')) {
    $(target).addClass(className + '_checked');
  } else {
    $(target).removeClass(className + '_checked');
  }

})
