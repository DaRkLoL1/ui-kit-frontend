function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../', true, /\.js$/));

;(function ($) {
  const arrRadioButtons = document.querySelectorAll('.js-radio-buttons');
  arrRadioButtons.forEach((item) => {
    const $item = $(item);
    const $arrRadio = $item.find('.js-switch');
    $($arrRadio[0]).addClass('switch_radio_checked');

    $item.on('click', (event) => {
      const $target = $(event.target);
      if ($target.hasClass('js-radio-buttons')) return;
      $target.find('.js-switch__input').prop('checked', true);
      $target.addClass('switch_radio_checked');

      $arrRadio.each((i, RadioItem) => {
        const $RadioItem = $(RadioItem);
        if (!($RadioItem.find('.js-switch__input').prop('checked'))) {
          $RadioItem.removeClass('switch_radio_checked');
        }
      });
    });
  });
}(jQuery));
