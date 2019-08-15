$('.subscription-text-field__input').on("focus", function (){
  $(this).parent().addClass('subscription-text-field_focused');
});

$('.subscription-text-field__input').on("blur", function (){
  $(this).parent().removeClass('subscription-text-field_focused');
});