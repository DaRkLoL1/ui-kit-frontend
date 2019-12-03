import Switch from './switch';

const switchs = document.querySelectorAll('.js-switch');
switchs.forEach((item) => {
  new Switch(item);
});
