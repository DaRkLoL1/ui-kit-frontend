import { Calendar } from './Calendar';

const arrCalendar = document.querySelectorAll('.js-calendar');
arrCalendar.forEach((item, index) => {
  new Calendar(item, index);
});
