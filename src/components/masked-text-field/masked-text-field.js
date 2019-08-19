import "jquery-mask-plugin";
{

let createMaskOption = function (val) {
  
  if(Number.parseInt(val[6]) === 1) {
    return {
      O: {pattern: /[5-9]/},
      X: {pattern: /[9]/},
      A: {pattern: /[0-3]/},
      B: {pattern: /[0-9]/},
      S: {pattern: /[0-1]/},
      R: {pattern: /[1-9]/},
      Y: {pattern: /[1-2]/},
      K: {pattern: /[0-9]/}
    }
  }
  else if(Number.parseInt(val[3]) === 1) {
    return {
      R: {pattern: /[0-2]/},
      A: {pattern: /[0-3]/},
      B: {pattern: /[0-1]/},
      S: {pattern: /[0-1]/},
      Y: {pattern: /[1-2]/},
      X: {pattern: /[0]/},
      O: {pattern: /[0-1]/},
      K: {pattern: /[0-9]/}
    }
  }

  else if(Number.parseInt(val[0]) === 0) {
    return {
      A: {pattern: /[0-3]/},
      B: {pattern: /[1-9]/},
      S: {pattern: /[0-1]/},
      R: {pattern: /[1-9]/},
      Y: {pattern: /[1-2]/},
      X: {pattern: /[0]/},
      O: {pattern: /[0-1]/},
      K: {pattern: /[0-9]/}
    }
  }
  else if(Number.parseInt(val[0]) === 3) {
    return {
      A: {pattern: /[0-3]/},
      B: {pattern: /[0-1]/},
      S: {pattern: /[0-1]/},
      R: {pattern: /[1-9]/},
      Y: {pattern: /[1-2]/},
      X: {pattern: /[0]/},
      O: {pattern: /[0-1]/},
      K: {pattern: /[0-9]/}
    }
  }

  return {
    B: {pattern: /[0-9]/},
    A: {pattern: /[0-3]/},
    S: {pattern: /[0-1]/},
    R: {pattern: /[1-9]/},
    Y: {pattern: /[1-2]/},
    X: {pattern: /[0]/},
    O: {pattern: /[0-1]/},
    K: {pattern: /[0-9]/}
  }

}

$('.js-mask').mask('AB.SR.YXOQ',{'translation': {
    A: {pattern: /[0-3]/},
    B: {pattern: /[0-9]/},
    S: {pattern: /[0-1]/},
    R: {pattern: /[1-9]/},
    Y: {pattern: /[1-2]/},
    X: {pattern: /[0]/},
    O: {pattern: /[0-1]/},
    K: {pattern: /[0-9]/}
  },
  onKeyPress: function(val, e, field, options) {
    let obj = createMaskOption(val);
    field.mask('AB.SR.YXOK', {
      'translation': obj,
      'onKeyPress': options.onKeyPress
    });
  }
});
  

}