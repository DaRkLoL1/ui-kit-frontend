export default class Switch {
  constructor() {
    this.addHandleClick();
  }

  addHandleClick() {
    $('.js-switch').on('click', this.handleSwitchClick);
  }

  handleSwitchClick(event) {
    const $target = $(event.currentTarget);
    const $input = $target.find('.js-switch__input');
    if (!($input.attr('type') === 'checkbox')) return;

    const className = $target.hasClass('switch_checkbox') ? 'switch_checkbox' : 'switch_toggle';
    if ($input.prop('checked')) {
      $target.addClass(`${className}_checked`);
    } else {
      $target.removeClass(`${className}_checked`);
    }
  }
}
