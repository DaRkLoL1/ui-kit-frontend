class ExpandableCheckboxList {
  constructor(checkboxList, index) {
    this.$checkboxList = $(checkboxList);
    this.index = index;
    this.initExpandableCheckboxList();
  }

  initExpandableCheckboxList() {
    this.$icon = this.$checkboxList.find('.js-expandable-checkbox-list__icon');
    this.$items = this.$checkboxList.parent().find('.js-expandable-checkbox-list__items');
    this.addHandleClick();
  }

  addHandleClick() {
    this.$checkboxList.on(`click.dropdown${this.index}`, this.handleDropdownClick.bind(this));
  }

  handleDropdownClick() {
    this.$icon.toggleClass('expandable-checkbox-list__icon_turn');
    this.$items.toggleClass('expandable-checkbox-list__items_display_on');
  }
}

export { ExpandableCheckboxList };
