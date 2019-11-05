export default class Field {
  constructor() {
    Field.addHandleFocus();
    Field.addHandleBlur();
    Field.addHandleHover();
  }

  static addHandleFocus() {
    $('.js-field-button_focused .js-text-field').on('focus', (event) => {
      const $target = $(event.currentTarget);
      $target.parent().addClass('field-button_isFocused');
      $target.next().addClass('field-button__icon_isFocused');
    });
  }

  static addHandleBlur() {
    $('.js-field-button_focused .js-text-field').on('blur', (event) => {
      const $target = $(event.currentTarget);
      $target.parent().removeClass('field-button_isFocused');
      $target.next().removeClass('field-button__icon_isFocused');
    });
  }

  static addHandleHover() {
    $('.js-field-button .js-field-button__icon').hover(
      (event) => {
        $(event.currentTarget).addClass('field-button__icon_hovered');
      },
      (event) => {
        $(event.currentTarget).removeClass('field-button__icon_hovered');
      },
    );
  }
}
