import Calendar from './calendar';

const arrCalendar = document.querySelectorAll('.js-calendar');
arrCalendar.forEach((item) => {
  new Calendar(item);
});
