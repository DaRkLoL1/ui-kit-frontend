import './jquery.star.rating.min';

export default class RateButton {
  constructor(rate) {
    this.$rate = $(rate);
    this.createStars();
  }

  createStars() {
    this.$rate.addRating(
      {
        max: 5,
        icon: 'star',
        selectedRatings: this.$rate.attr('data-value'),
      },
    );
    this.$rate.find('i').addClass('rate-button__icon');
  }
}
