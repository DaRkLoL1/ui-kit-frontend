import 'jquery-ui-slider/jquery-ui.min';

class RangeSlider {
  constructor(slider) {
    this.$slider = $(slider);
    this.createSlider();
  }

  createSlider() {
    const $item = this.$slider.find('.js-range-slider__item');
    const $result = this.$slider.find('.js-range-slider__result');
    $item.slider({
      animate: 'slow',
      range: true,
      max: 15500,
      values: [5000, 10000],
      slide(event, ui) {
        const result = RangeSlider.getResult(ui.values);
        $result.text(`${result[0]}\u20bd - ${result[1]}\u20bd`);
      },
    });

    const result = RangeSlider.getResult($item.slider('values'));
    $result.text(`${result[0]}\u20bd - ${result[1]}\u20bd`);
  }

  static getResult(values) {
    return values.map((item) => {
      let sliderItem = String(item);
      sliderItem = `${sliderItem.slice(0, -3)} ${sliderItem.slice(-3)}`;

      return sliderItem;
    });
  }
}

export { RangeSlider };
