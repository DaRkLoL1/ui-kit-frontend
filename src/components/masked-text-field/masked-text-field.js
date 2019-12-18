import 'jquery-mask-plugin';

class MaskedTextField {
  constructor(mask) {
    this.$mask = $(mask);
    this.initMaskedTextField();
  }

  initMaskedTextField() {
    this.$mask.mask('AB.SR.YXOK', {
      translation: {
        A: { pattern: /[0-3]/ },
        B: { pattern: /[0-9]/ },
        S: { pattern: /[0-1]/ },
        R: { pattern: /[1-9]/ },
        Y: { pattern: /[1-2]/ },
        X: { pattern: /[0]/ },
        O: { pattern: /[0-1]/ },
        K: { pattern: /[0-9]/ },
      },
      onKeyPress(value, e, field, options) {
        const patternObject = MaskedTextField.createMaskOption(value);
        field.mask('AB.SR.YXOK', {
          translation: patternObject,
          onKeyPress: options.onKeyPress,
        });
      },
    });
  }

  static createMaskOption(val) {
    if (Number.parseInt(val[6], 10) === 1) {
      return {
        O: { pattern: /[0-9]/ },
        X: { pattern: /[9]/ },
        A: { pattern: /[0-3]/ },
        B: { pattern: /[0-9]/ },
        S: { pattern: /[0-1]/ },
        R: { pattern: /[1-9]/ },
        Y: { pattern: /[1-2]/ },
        K: { pattern: /[0-9]/ },
      };
    }
    if (Number.parseInt(val[3], 10) === 1) {
      return {
        R: { pattern: /[0-2]/ },
        A: { pattern: /[0-3]/ },
        B: { pattern: /[0-9]/ },
        S: { pattern: /[0-1]/ },
        Y: { pattern: /[1-2]/ },
        X: { pattern: /[0]/ },
        O: { pattern: /[0-1]/ },
        K: { pattern: /[0-9]/ },
      };
    }
    if (Number.parseInt(val[0], 10) === 0) {
      return {
        B: { pattern: /[1-9]/ },
        A: { pattern: /[0-3]/ },
        S: { pattern: /[0-1]/ },
        R: { pattern: /[1-9]/ },
        Y: { pattern: /[1-2]/ },
        X: { pattern: /[0]/ },
        O: { pattern: /[0-1]/ },
        K: { pattern: /[0-9]/ },
      };
    }
    if (Number.parseInt(val[0], 10) === 3) {
      return {
        B: { pattern: /[0-1]/ },
        A: { pattern: /[0-3]/ },
        S: { pattern: /[0-1]/ },
        R: { pattern: /[1-9]/ },
        Y: { pattern: /[1-2]/ },
        X: { pattern: /[0]/ },
        O: { pattern: /[0-1]/ },
        K: { pattern: /[0-9]/ },
      };
    }
    return {
      A: { pattern: /[0-3]/ },
      B: { pattern: /[0-9]/ },
      S: { pattern: /[0-1]/ },
      R: { pattern: /[1-9]/ },
      Y: { pattern: /[1-2]/ },
      X: { pattern: /[0]/ },
      O: { pattern: /[0-1]/ },
      K: { pattern: /[0-9]/ },
    };
  }
}

export { MaskedTextField };
