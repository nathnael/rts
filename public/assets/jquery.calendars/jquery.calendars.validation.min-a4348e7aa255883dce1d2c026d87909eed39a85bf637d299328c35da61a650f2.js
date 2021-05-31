!function(a){"use strict";function b(b,c){var d=a.calendarsPicker._getInst(c),e=d.options.multiSelect?b.split(d.options.multiSeparator):d.options.rangeSelect?b.split(d.options.rangeSeparator):[b],f=d.options.multiSelect&&e.length<=d.options.multiSelect||!d.options.multiSelect&&d.options.rangeSelect&&2===e.length||!d.options.multiSelect&&!d.options.rangeSelect&&1===e.length;if(f)try{var g=d.get("dateFormat"),h=d.get("minDate"),i=d.get("maxDate"),j=a(c);a.each(e,function(a,b){e[a]=d.options.calendar.parseDate(g,b),f=f&&(!e[a]||j.calendarsPicker("isSelectable",e[a])&&(!h||-1!==e[a].compareTo(h))&&(!i||1!==e[a].compareTo(i)))})}catch(a){f=!1}return f&&d.options.rangeSelect&&(f=1!==e[0].compareTo(e[1])),f}function c(b){if("string"==typeof b)b=b.split(" ");else if(!a.isArray(b)){var c=[];for(var d in b)b.hasOwnProperty(d)&&(c[0]=d,c[1]=b[d]);b=c}return b}function d(b,c,d){if(c.newDate&&c.extraInfo)return[c];var e=a.calendarsPicker._getInst(b),f=null;try{"string"==typeof c&&"today"!==c&&(f=e.options.calendar.parseDate(e.get("dateFormat"),c))}catch(a){}return f=f?[f]:"today"===c?[e.options.calendar.today()]:d?[]:a(c).calendarsPicker("getDate")}if(a.fn.validate){a.calendarsPicker.selectDateOrig=a.calendarsPicker.selectDate,a.extend(a.calendarsPicker.regionalOptions[""],{validateDate:"Please enter a valid date",validateDateMin:"Please enter a date on or after {0}",validateDateMax:"Please enter a date on or before {0}",validateDateMinMax:"Please enter a date between {0} and {1}",validateDateCompare:"Please enter a date {0} {1}",validateDateToday:"today",validateDateOther:"the other date",validateDateEQ:"equal to",validateDateNE:"not equal to",validateDateLT:"before",validateDateGT:"after",validateDateLE:"not after",validateDateGE:"not before"}),a.extend(a.calendarsPicker.defaultOptions,a.calendarsPicker.regionalOptions[""]),a.extend(a.calendarsPicker,{selectDate:function(b,c){if(this.selectDateOrig(b,c),!a.calendarsPicker._getInst(b).inline&&a.fn.validate){var d=a(b).parents("form").validate();d&&d.element("#"+b.id)}},errorPlacement:function(b,c){var d=a.calendarsPicker._getInst(c);d?b[d.options.isRTL?"insertBefore":"insertAfter"](d.trigger.length>0?d.trigger:c):b.insertAfter(c)},errorFormat:function(b,c){var d=a.calendarsPicker.curInst?a.calendarsPicker.curInst.get("dateFormat"):a.calendarsPicker.defaultOptions.dateFormat;return a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),c.formatDate(d)||"nothing")}),b}});var e=null;a.validator.addMethod("cpDate",function(a,c){return e=c,this.optional(c)||b(a,c)},function(){var b=a.calendarsPicker._getInst(e),c=b.get("minDate"),d=b.get("maxDate"),f=a.calendarsPicker.defaultOptions;return c&&d?a.calendarsPicker.errorFormat(f.validateDateMinMax,[c,d]):c?a.calendarsPicker.errorFormat(f.validateDateMin,[c]):d?a.calendarsPicker.errorFormat(f.validateDateMax,[d]):f.validateDate}),a.validator.addClassRules("cpDate",{cpDate:!0});var f={equal:"eq",same:"eq",notEqual:"ne",notSame:"ne",lessThan:"lt",before:"lt",greaterThan:"gt",after:"gt",notLessThan:"ge",notBefore:"ge",notGreaterThan:"le",notAfter:"le"};a.validator.addMethod("cpCompareDate",function(b,g,h){if(this.optional(g))return!0;h=c(h);var i=a(g).calendarsPicker("getDate"),j=d(g,h[1]);if(0===i.length||0===j.length)return!0;e=g;for(var k=!0,l=0;l<i.length;l++){var m=i[l].compareTo(j[0]);switch(f[h[0]]||h[0]){case"eq":k=0===m;break;case"ne":k=0!==m;break;case"lt":k=m<0;break;case"gt":k=m>0;break;case"le":k=m<=0;break;case"ge":k=m>=0;break;default:k=!0}if(!k)break}return k},function(b){var g=a.calendarsPicker.defaultOptions;b=c(b);var h=d(e,b[1],!0);return h="today"===b[1]?g.validateDateToday:h.length?h[0].formatDate():g.validateDateOther,g.validateDateCompare.replace(/\{0\}/,g["validateDate"+(f[b[0]]||b[0]).toUpperCase()]).replace(/\{1\}/,h)})}}(jQuery);
//# sourceMappingURL=jquery.calendars.validation.min.map;
