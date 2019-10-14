import './jquery-ui-slider';
import './jquery-ui-slider-touch-punch';


;(function ($) {
  const getResult = function (values) {
    return values.map((item) => {
      let sliderItem = String(item);

      if (sliderItem.length > 3) {
        const lengthSlice = sliderItem.length - 3;
        sliderItem = `${sliderItem.slice(0, lengthSlice)} ${sliderItem.slice(lengthSlice)}`;
      }
      return sliderItem;
    });
  };

  $('.js-range-slider__item').slider({
    animate: 'slow',
    range: true,
    max: 15500,
    values: [5000, 10000],
    slide(event, ui) {
      const result = getResult(ui.values);
      $('.js-range-slider__result').text(`${result[0]}\u20bd - ${result[1]}\u20bd`);
    },
  });

  const result = getResult($('.js-range-slider__item').slider('values'));
  $('.js-range-slider__result').text(`${result[0]}\u20bd - ${result[1]}\u20bd`);
}(jQuery));
