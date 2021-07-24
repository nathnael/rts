//= require FontAwesome.js
//= require Chart.min.js
//= require highmaps.js
//= require data.js
//= require exporting.js
//= require drilldown.js
//= require offline-exporting.js
//= require Ethiopia-Regions.js

//= require jquery
//= require jquery_ujs
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap

//= require jquery.calendars/jquery.plugin.js
//= require jquery.calendars/jquery.calendars.js
//= require jquery.calendars/jquery.calendars.plus.js
//= require jquery.calendars/jquery.calendars.picker.js
//= require jquery.calendars/jquery.calendars.ethiopian.js
//= require jquery.calendars/jquery.calendars.ethiopian-am.js

//= require jkanban.js

//= require moment.min.js

//= require pace.min.js

$(document).ready(function() {
    
    
    var activeLi = $('a.nav-link');
    activeLi.parentsUntil('nav-link', 'a').addClass('active');
    activeLi.parentsUntil('nav-link', 'ul').removeClass('collapse');

    $('.gregorian_datepicker').calendarsPicker({
        format: 'DD, MM d, yyyy',
        onSelect: function(dateText, inst) {
            var dateAsObject = $(this).calendarsPicker('getDate');
            // var jd = dateAsObject[0].toJD();
            // var date_gc = $.calendars.fromJD(jd);
            $(this).val(dateAsObject[0].formatDate('DD, MM d, yyyy'));
        }
    });

    $('.ethiopian_datepicker').calendarsPicker({
        calendar: $.calendars.instance('ethiopian', 'am'),
        format: 'DD, MM d, yyyy',
        onSelect: function(dateText, inst) {
            var dateAsObject = $(this).calendarsPicker('getDate');
            var jd = dateAsObject[0].toJD();
            var date_gc = $.calendars.instance('ethiopian').fromJD(jd);
            $(this).val(date_gc.formatDate('DD, MM d, yyyy'));
        }
    });

    
    
});