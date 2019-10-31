import './jquery.star.rating.min';

export default class RateButton {
  constructor(item) {
    this.item = item;
  }

  createStars() {
    const $item = $(this.item);
    $item.addRating(
      {
        max: 5,
        icon: 'star',
        selectedRatings: $item.attr('data-value'),
      },
    );
    $item.find('i').addClass('rate-button__icon');
  }
}
