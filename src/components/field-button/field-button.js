export default class Field {
  constructor(field, index) {
    this.$field = $(field);
    this.index = index;
    this.createField();
  }

  createField() {
    this.$fieldButton = this.$field.find('.js-field-button__icon');
    this.addHandleMouseEnter();
    this.addHandleMoueseLeave();

    if (this.$field.hasClass('js-field-button_focused')) {
      this.$textField = this.$field.find('.js-text-field');
      this.addHandleFocus();
      this.addHandleBlur();
    }
  }

  addHandleFocus() {
    this.$textField.on('focus', this.handleFieldFocus.bind(this));
  }

  handleFieldFocus() {
    this.$field.addClass('field-button_isFocused');
    this.$fieldButton.addClass('field-button__icon_isFocused');
  }

  addHandleBlur() {
    this.$textField.on('blur', this.handleFieldBlur.bind(this));
  }

  handleFieldBlur() {
    this.$field.removeClass('field-button_isFocused');
    this.$fieldButton.removeClass('field-button__icon_isFocused');
  }

  addHandleMouseEnter() {
    this.$fieldButton.on('mouseenter', this.handleFieldMouseEnter);
  }

  addHandleMoueseLeave() {
    this.$fieldButton.on('mouseleave', this.handleFieldMoueseLeave);
  }

  handleFieldMouseEnter(event) {
    $(event.currentTarget).addClass('field-button__icon_hovered');
  }

  handleFieldMoueseLeave(event) {
    $(event.currentTarget).removeClass('field-button__icon_hovered');
  }
}
