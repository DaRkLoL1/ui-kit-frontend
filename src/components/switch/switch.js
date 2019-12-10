export default class Switch {
  constructor(switchItem, index) {
    this.$switch = $(switchItem);
    this.index = index;
    this.createSwitch();
  }

  createSwitch() {
    this.$input = this.$switch.find('.js-switch__input');
    this.addHandleClick();
  }

  addHandleClick() {
    this.$switch.on(`click.switch${this.index}`, this.handleSwitchClick.bind(this));
  }

  handleSwitchClick(event) {
    const $target = $(event.currentTarget);
    if (!(this.$input.attr('type') === 'checkbox')) return;

    const className = $target.hasClass('switch_type_checkbox') ? 'switch_type_checkbox' : 'switch_type_toggle';
    if (this.$input.prop('checked')) {
      $target.addClass(`${className}-checked`);
    } else {
      $target.removeClass(`${className}-checked`);
    }
  }
}
