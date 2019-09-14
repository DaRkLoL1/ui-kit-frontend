import '../datepicker/datepicker.min.js';

;(function ($, undefined) {

  let arrFilterDateDropdown = document.querySelectorAll('.js-filter-date-dropdown');

  arrFilterDateDropdown.forEach( (item) => {

    let $item = $(item);
    let $textField = $item.find('.js-text-field');
   

    let filterDateDropdown = $textField.datepicker({
      range: true,
      offset: 16,
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd M'
    }).data('datepicker');
    
    let dates = $item.data('dates');

    if(Array.isArray(dates)) {
      console.log(dates)
      filterDateDropdown.selectDate([new Date(dates[0]), new Date(dates[1])]);
    }

    $item.find('.btn:first-child').on('click', function () {
      filterDateDropdown.clear();
    });

    $item.find('.btn:last-child').on('click', function () {
      filterDateDropdown.hide();
    });

    $item.on('click', function () {
      filterDateDropdown.show();
    });
    
    filterDateDropdown['$datepicker'].append( $item.find('.js-filter-date-dropdown__buttons') );
    filterDateDropdown['$datepicker'].css('width', '266px')
  })
})(jQuery)