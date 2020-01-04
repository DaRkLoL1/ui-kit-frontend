import { ExpandableCheckboxList } from './Expandable-checkbox-list';

const checkboxLists = document.querySelectorAll('.js-expandable-checkbox-list__dropdown');
checkboxLists.forEach((checkboxList, index) => {
  new ExpandableCheckboxList(checkboxList, index);
});
