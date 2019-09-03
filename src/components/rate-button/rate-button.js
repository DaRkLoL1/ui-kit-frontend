import './jquery.star.rating.min.js';

;(function ($, undefined) {
  let rateButtons = document.querySelectorAll('.js-rate-button');

  rateButtons.forEach( item => {
    $(item).addRating(
      {
        max : 5,
        icon : 'star',
        selectedRatings: $(item).attr('data-value')
      }
    )
  }) 

})(jQuery);
