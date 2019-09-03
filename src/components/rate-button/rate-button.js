import './jquery.star.rating.min.js';

$(document).ready(function () {
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

});
