$('.js-expandable-checkbox-list__dropdown').on('click', (event) => {
  const $target = $(event.currentTarget);
  const $icon = $target.find('.expandable-checkbox-list__icon');
  const $items = $target.parent().find('.expandable-checkbox-list__items');

  if (!($icon.hasClass('expandable-checkbox-list__icon_turn'))) {
    $icon.addClass('expandable-checkbox-list__icon_turn');
    $items.addClass('expandable-checkbox-list__items_display_on');
  } else {
    $icon.removeClass('expandable-checkbox-list__icon_turn');
    $items.removeClass('expandable-checkbox-list__items_display_on');
  }
});
