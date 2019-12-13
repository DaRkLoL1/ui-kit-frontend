import { Switch } from './switch';

const switchs = document.querySelectorAll('.js-switch');
switchs.forEach((item, index) => {
  new Switch(item, index);
});
