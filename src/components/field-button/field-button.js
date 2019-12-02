export default class Field {
  constructor() {
    this.addHandleFocus();
    this.addHandleBlur();
    this.addHandleHover();
  }

  addHandleFocus() {
    $('.js-field-button_focused .js-text-field').on('focus', this.handleFieldFocus);
  }

  handleFieldFocus(event) {
    const $target = $(event.currentTarget);
    $target.parent().addClass('field-button_isFocused');
    $target.next().addClass('field-button__icon_isFocused');
  }

  addHandleBlur() {
    $('.js-field-button_focused .js-text-field').on('blur', this.handleFieldBlur);
  }

  handleFieldBlur(event) {
    const $target = $(event.currentTarget);
    $target.parent().removeClass('field-button_isFocused');
    $target.next().removeClass('field-button__icon_isFocused');
  }

  addHandleHover() {
    $('.js-field-button .js-field-button__icon').hover(
      this.handleFieldTurnOnHover,
      this.handleFieldTurnOffHover,
    );
  }

  handleFieldTurnOnHover(event) {
    $(event.currentTarget).addClass('field-button__icon_hovered');
  }

  handleFieldTurnOffHover(event) {
    $(event.currentTarget).removeClass('field-button__icon_hovered');
  }
}
