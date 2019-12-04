export default class CheckboxList {
  constructor(checkboxList) {
    this.$checkboxList = $(checkboxList);
    this.createCheckboxList();
  }

  createCheckboxList() {
    this.$icon = this.$checkboxList.find('.expandable-checkbox-list__icon');
    this.$items = this.$checkboxList.parent().find('.expandable-checkbox-list__items');
    this.addHandleClick();
  }

  addHandleClick() {
    this.$checkboxList.on('click.dropdown', this.handleDropdownClick.bind(this));
  }

  handleDropdownClick() {
    if (!(this.$icon.hasClass('expandable-checkbox-list__icon_turn'))) {
      this.$icon.addClass('expandable-checkbox-list__icon_turn');
      this.$items.addClass('expandable-checkbox-list__items_display_on');
    } else {
      this.$icon.removeClass('expandable-checkbox-list__icon_turn');
      this.$items.removeClass('expandable-checkbox-list__items_display_on');
    }
  }
}
