import '../datepicker/datepicker.min.js';

;(function ($, undefined) {

  let arrDateDropdown = document.querySelectorAll('.js-date-dropdown');

  arrDateDropdown.forEach( (item) => {

    let $item = $(item);
    let $first = $item.find('.date-dropdown__first-input .js-text-field');
    let $second = $item.find('.date-dropdown__second-input .js-text-field');

    let dateDropdown = $first.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
      altField: $second,
      altFieldDateFormat: '',
      onSelect(formattedDate, date, inst) {
        
        let arrDates = formattedDate.split(',');

        if(arrDates.length === 1) {
          $first.val(arrDates[0]);
        } else {
          $first.val(arrDates[0]);
          $second.val(arrDates[1]);
        }
        
      }
    }).data('datepicker');
    
    let dates = $item.data('dates');

    if(Array.isArray(dates)) {
      dateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
    }

    $item.find('.btn:first-child').on('click', function () {
      dateDropdown.clear();
    });

    $item.find('.btn:last-child').on('click', function () {
      dateDropdown.hide();
    });

    $item.find('.date-dropdown__first-input, .date-dropdown__second-input').on('click', function () {
      dateDropdown.show();
    });
    
    dateDropdown['$datepicker'].append( $item.find('.js-date-dropdown__buttons') );

  })
})(jQuery)