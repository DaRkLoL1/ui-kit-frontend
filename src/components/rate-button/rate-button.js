function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../', true, /\.js$/));

;(function ($) {
  const rateButtons = document.querySelectorAll('.js-rate-button');

  rateButtons.forEach((item) => {
    $(item).addRating(
      {
        max: 5,
        icon: 'star',
        selectedRatings: $(item).attr('data-value'),
      },
    );
    $(item).find('i').addClass('rate-button__icon');
  });
}(jQuery));
