import CheckboxList from './expandable-checkbox-list';

const checkboxList = document.querySelector('.js-expandable-checkbox-list__dropdown');
if (checkboxList) {
  new CheckboxList(checkboxList);
}
