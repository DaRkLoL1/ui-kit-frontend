class RadioButtons {
  constructor(radio, index) {
    this.$radio = $(radio);
    this.index = index;
    this.createRadio();
  }

  createRadio() {
    this.$arrRadio = this.$radio.find('.js-switch');
    $(this.$arrRadio).eq(0).addClass('switch_type_radio-checked');
    this.addHandleClick();
  }

  addHandleClick() {
    this.$radio.on(`click.radioButtons${this.index}`, this.handleRadioButtonsClick.bind(this));
  }

  handleRadioButtonsClick(event) {
    const $target = $(event.target);
    if ($target.hasClass('js-radio-buttons')) return;
    $target.children().prop('checked', true);
    $target.addClass('switch_type_radio-checked');

    this.$arrRadio.each((i, radioItem) => {
      const $radioItem = $(radioItem);
      if (!($radioItem.children().prop('checked'))) {
        $radioItem.removeClass('switch_type_radio-checked');
      }
    });
  }
}

export { RadioButtons };
