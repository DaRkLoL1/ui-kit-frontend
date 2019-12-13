import '../../vendors/jquery.star.rating.min';

class RateButton {
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

export { RateButton };
