export default class RadioButtons {
  constructor(radio) {
    this.$radio = $(radio);
    this.createRadio();
  }

  createRadio() {
    const $arrRadio = this.$radio.find('.js-switch');
    $($arrRadio[0]).addClass('switch_radio_checked');

    this.$radio.on('click', (event) => {
      const $target = $(event.target);
      if ($target.hasClass('js-radio-buttons')) return;
      $target.find('.js-switch__input').prop('checked', true);
      $target.addClass('switch_radio_checked');

      $arrRadio.each((i, radioItem) => {
        const $radioItem = $(radioItem);
        if (!($radioItem.find('.js-switch__input').prop('checked'))) {
          $radioItem.removeClass('switch_radio_checked');
        }
      });
    });
  }
}
