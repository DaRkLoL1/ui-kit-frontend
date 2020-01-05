class FieldButton {
  constructor(field, index) {
    this.$field = $(field);
    this.index = index;
    this.initFieldButton();
  }

  initFieldButton() {
    this.$fieldButton = this.$field.find('.js-field-button__icon');
    this.$textField = this.$field.find('.js-text-field');
    this.addHandlesEvents();
  }

  addHandlesEvents() {
    this.$fieldButton.on(`mouseenter.icon${this.index}`, this.handleIconMouseEnter);
    this.$fieldButton.on(`mouseleave.icon${this.index}`, this.handleIconMoueseLeave);

    if (this.$field.hasClass('js-field-button_focused')) {
      this.$textField.on(`focus.textField${this.index}`, this.handleTextFieldFocus.bind(this));
      this.$textField.on(`blur.textField${this.index}`, this.handleTextFieldBlur.bind(this));
    }
  }

  handleIconMouseEnter(event) {
    $(event.currentTarget).addClass('field-button__icon_hovered');
  }

  handleIconMoueseLeave(event) {
    $(event.currentTarget).removeClass('field-button__icon_hovered');
  }

  handleTextFieldFocus() {
    this.$field.addClass('field-button_focused');
    this.$fieldButton.addClass('field-button__icon_focused');
  }

  handleTextFieldBlur() {
    this.$field.removeClass('field-button_focused');
    this.$fieldButton.removeClass('field-button__icon_focused');
  }
}

export { FieldButton };
