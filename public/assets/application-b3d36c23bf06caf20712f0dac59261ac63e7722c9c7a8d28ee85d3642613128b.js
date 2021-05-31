window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"license":"free","method":"css","minify":{"enabled":true},"token":"6d90f39943","v4FontFaceShim":{"enabled":false},"v4shim":{"enabled":false},"version":"5.15.1"};
!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t,e){var n=e&&e.addOn||"",o=e&&e.baseFilename||t.license+n,r=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,c=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+c+"/"+o+r+"."+i}function c(t,e){var n=e||["fa"],o="."+Array.prototype.join.call(n,",."),r=t.querySelectorAll(o);Array.prototype.forEach.call(r,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var o=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&o){var r=t.createElement("span");r.innerHTML=n,r.classList.add("sr-only"),e.parentNode.insertBefore(r,e.nextSibling)}}))}var a,u=function(){},f="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,s="undefined"==typeof setImmediate?setTimeout:setImmediate,d=[];function l(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);d=[],a=!1}function h(t,e){d.push([t,e]),a||(a=!0,s(l,0))}function m(t){var e=t.owner,n=e._state,o=e._data,r=t[n],i=t.then;if("function"==typeof r){n="fulfilled";try{o=r(o)}catch(t){b(i,t)}}p(i,o)||("fulfilled"===n&&v(i,o),"rejected"===n&&b(i,o))}function p(e,n){var o;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(t){o||(o=!0,n===t?y(e,t):v(e,t))}),(function(t){o||(o=!0,b(e,t))})),!0}}catch(t){return o||b(e,t),!0}return!1}function v(t,e){t!==e&&p(t,e)||y(t,e)}function y(t,e){"pending"===t._state&&(t._state="settled",t._data=e,h(w,t))}function b(t,e){"pending"===t._state&&(t._state="settled",t._data=e,h(A,t))}function g(t){t._then=t._then.forEach(m)}function w(t){t._state="fulfilled",g(t)}function A(t){t._state="rejected",g(t),!t._handled&&f&&global.process.emit("unhandledRejection",t._data,t)}function O(t){global.process.emit("rejectionHandled",t)}function j(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof j==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){b(e,t)}try{t((function(t){v(e,t)}),n)}catch(t){n(t)}}(t,this)}j.prototype={constructor:j,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(u),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&f&&h(O,this)),"fulfilled"===this._state||"rejected"===this._state?h(m,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},j.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new j((function(e,n){var o=[],r=0;function i(t){return r++,function(n){o[t]=n,--r||e(o)}}for(var c,a=0;a<t.length;a++)(c=t[a])&&"function"==typeof c.then?c.then(i(a),n):o[a]=c;r||e(o)}))},j.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new j((function(e,n){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(e,n):e(o)}))},j.resolve=function(e){return e&&"object"===t(e)&&e.constructor===j?e:new j((function(t){t(e)}))},j.reject=function(t){return new j((function(e,n){n(t)}))};var S="function"==typeof Promise?Promise:j;function E(t,n){var o=n.fetch,r=n.XMLHttpRequest,i=n.token;return new S((function(n,c){if("function"==typeof o)o(t,{mode:"cors",cache:"default",headers:new Headers(e({},"fa-kit-token",i))}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(t){n(t)})).catch(c);else if("function"==typeof r){var a=new r;a.addEventListener("loadend",(function(){this.responseText?n(this.responseText):c(new Error(""))}));["abort","error","timeout"].map((function(t){a.addEventListener(t,(function(){c(new Error(""))}))})),a.open("GET",t),a.setRequestHeader("fa-kit-token",i),a.send()}else{c(new Error(""))}}))}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=e.document||r,a=c.bind(c,r,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&n(a);var u=[{id:"fa-main",addOn:void 0}];t.v4shim.enabled&&u.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v4FontFaceShim.enabled&&u.push({id:"fa-v4-font-face",addOn:"-v4-font-face"});var f=u.map((function(n){return new S((function(r,c){E(i(t,{addOn:n.addOn,minify:t.minify.enabled}),e).then((function(i){r(P(i,o({},e,{baseUrl:t.baseUrl,version:t.version,id:n.id})))})).catch(c)}))}));return S.all(f)}function P(t,e){var n=document.createElement("style"),o=document.createTextNode(function(t,e,n){var o=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,o){return"".concat(o).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=r(t,2),n=e[0],i=e[1];o=o.replace(n,i)})),o}(t,e.baseUrl,e.version));return n.appendChild(o),n.media="all",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function F(t,e){e.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(e.autoFetchSvg=!0,e.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",e.fetchUploadedSvgFrom=t.uploadsUrl);var n=[];return t.v4shim.enabled&&n.push(new S((function(n,r){E(i(t,{addOn:"-v4-shims",minify:t.minify.enabled}),e).then((function(t){n(T(t,o({},e,{id:"fa-v4-shims"})))})).catch(r)}))),n.push(new S((function(n,r){E(i(t,{minify:t.minify.enabled}),e).then((function(t){var r=T(t,o({},e,{id:"fa-main"}));n(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,o=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==o&&t.setAttribute("data-auto-a11y",o?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(r,e))})).catch(r)}))),S.all(n)}function T(t,e){var n=document.createElement("SCRIPT"),o=document.createTextNode(t);return n.appendChild(o),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function C(t){var e,n=[],o=document,r=o.documentElement.doScroll,i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);i||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function L(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var k=window.FontAwesomeKitConfig,x={detectingConflicts:k.detectConflictsUntil&&new Date<=new Date(k.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:k.token,XMLHttpRequest:window.XMLHttpRequest,document:document},I=document.currentScript,U=I?I.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?F(t,e):"css"===t.method?_(t,e,(function(t){C(t),L(t)})):void 0})(k,x).then((function(t){t.map((function(t){U.insertBefore(t,I?I.nextSibling:null)})),x.detectingConflicts&&I&&C((function(){I.setAttributeNode(document.createAttribute(x.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=i(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(k,x);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));
/*!
 * Chart.js v2.9.1
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],function(t){return e(function(){try{return t("moment")}catch(t){}}())}):(t=t||self).Chart=e(t.moment)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={rgb2hsl:i,rgb2hsv:n,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:l,rgb2lab:u,rgb2lch:function(t){return x(u(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return o(d(t))},hsl2keyword:function(t){return s(d(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,r=t[2]/100;return e=a*r,[n,100*(e=(e/=(i=(2-a)*r)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return a(h(t))},hsv2cmyk:function(t){return o(h(t))},hsv2keyword:function(t){return s(h(t))},hwb2rgb:c,hwb2hsl:function(t){return i(c(t))},hwb2hsv:function(t){return n(c(t))},hwb2cmyk:function(t){return o(c(t))},hwb2keyword:function(t){return s(c(t))},cmyk2rgb:f,cmyk2hsl:function(t){return i(f(t))},cmyk2hsv:function(t){return n(f(t))},cmyk2hwb:function(t){return a(f(t))},cmyk2keyword:function(t){return s(f(t))},keyword2rgb:k,keyword2hsl:function(t){return i(k(t))},keyword2hsv:function(t){return n(k(t))},keyword2hwb:function(t){return a(k(t))},keyword2cmyk:function(t){return o(k(t))},keyword2lab:function(t){return u(k(t))},keyword2xyz:function(t){return l(k(t))},xyz2rgb:p,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:v,lab2rgb:y,lab2lch:x,lch2lab:_,lch2xyz:function(t){return v(_(t))},lch2rgb:function(t){return y(_(t))}};function i(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(o+s)/2,[e,100*(s==o?0:i<=.5?l/(s+o):l/(2-s-o)),100*i]}function n(t){var e,i,n=t[0],a=t[1],r=t[2],o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return i=0==s?0:l/s*1e3/10,s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function a(t){var e=t[0],n=t[1],a=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,a))),100*(a=1-1/255*Math.max(e,Math.max(n,a)))]}function o(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function s(t){return M[JSON.stringify(t)]}function l(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function u(t){var e=l(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function d(t){var e,i,n,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[r=255*l,r,r];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=o+1/3*-(u-1))<0&&n++,n>1&&n--,r=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*r;return a}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*n*(1-i),s=255*n*(1-i*r),l=255*n*(1-i*(1-r));n*=255;switch(a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}}function c(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function p(t){var e,i,n,a=t[0]/100,r=t[1]/100,o=t[2]/100;return i=-.9689*a+1.8758*r+.0415*o,n=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function m(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function v(t){var e,i,n,a,r=t[0],o=t[1],s=t[2];return r<=8?a=(i=100*r/903.3)/100*7.787+16/116:(i=100*Math.pow((r+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function y(t){return p(v(t))}function _(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function k(t){return w[t]}var w={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var S in w)M[JSON.stringify(w[S])]=S;var C=function(){return new I};for(var P in e){C[P+"Raw"]=function(t){return function(i){return"number"==typeof i&&(i=Array.prototype.slice.call(arguments)),e[t](i)}}(P);var A=/(\w+)2(\w+)/.exec(P),D=A[1],T=A[2];(C[D]=C[D]||{})[T]=C[P]=function(t){return function(i){"number"==typeof i&&(i=Array.prototype.slice.call(arguments));var n=e[t](i);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(P)}var I=function(){this.convs={}};I.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},I.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},I.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=C[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){I.prototype[t]=function(e){return this.routeSpace(t,arguments)}});var F=C,L={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},O={getRgba:R,getHsla:z,getRgb:function(t){var e=R(t);return e&&e.slice(0,3)},getHsl:function(t){var e=z(t);return e&&e.slice(0,3)},getHwb:N,getAlpha:function(t){var e=R(t);if(e)return e[3];if(e=z(t))return e[3];if(e=N(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+H(t[0])+H(t[1])+H(t[2])+(e>=0&&e<1?H(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return B(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:B,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return E(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:E,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return V(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:V,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return j[t.slice(0,3)]}};function R(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(n){a=(n=n[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(n[r]+n[r],16);a&&(i=Math.round(parseInt(a+a,16)/255*100)/100)}else if(n=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=n[2],n=n[1];for(r=0;r<e.length;r++)e[r]=parseInt(n.slice(2*r,2*r+2),16);a&&(i=Math.round(parseInt(a,16)/255*100)/100)}else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(n[r+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(n[r+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=L[n[1]]))return}for(r=0;r<e.length;r++)e[r]=W(e[r],0,255);return i=i||0==i?W(i,0,1):1,e[3]=i,e}}function z(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[W(parseInt(e[1]),0,360),W(parseFloat(e[2]),0,100),W(parseFloat(e[3]),0,100),W(isNaN(i)?1:i,0,1)]}}}function N(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[W(parseInt(e[1]),0,360),W(parseFloat(e[2]),0,100),W(parseFloat(e[3]),0,100),W(isNaN(i)?1:i,0,1)]}}}function B(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function E(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function V(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function W(t,e,i){return Math.min(Math.max(e,t),i)}function H(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var j={};for(var q in L)j[L[q]]=q;var U=function(t){return t instanceof U?t:this instanceof U?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=O.getRgba(t))?this.setValues("rgb",e):(e=O.getHsla(t))?this.setValues("hsl",e):(e=O.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new U(t);var e};U.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return O.hexString(this.values.rgb)},rgbString:function(){return O.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return O.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return O.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return O.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return O.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return O.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return O.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,a=2*n-1,r=this.alpha()-i.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*i.red(),o*this.green()+s*i.green(),o*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new U,n=this.values,a=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return i}},U.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},U.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},U.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},U.prototype.setValues=function(t,e){var i,n,a=this.values,r=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(i=0;i<t.length;i++)a[t][i]=e[l[i]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(o[t][i],a[t][i])),a[t][i]=Math.round(n);for(var u in r)u!==t&&(a[u]=F[t][u](a[t]));return!0},U.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},U.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=U);var Y,G=U,X={noop:function(){},uid:(Y=0,function(){return Y++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return X.valueOrDefault(X.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var a,r,o;if(X.isArray(t))if(r=t.length,n)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(X.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(i,t[o[a]],o[a])},arrayEquals:function(t,e){var i,n,a,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],r=e[i],a instanceof Array&&r instanceof Array){if(!X.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(X.isArray(t))return t.map(X.clone);if(X.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=X.clone(t[i[a]]);return e}return t},_merger:function(t,e,i,n){var a=e[t],r=i[t];X.isObject(a)&&X.isObject(r)?X.merge(a,r,n):e[t]=X.clone(r)},_mergerIf:function(t,e,i){var n=e[t],a=i[t];X.isObject(n)&&X.isObject(a)?X.mergeIf(n,a):e.hasOwnProperty(t)||(e[t]=X.clone(a))},merge:function(t,e,i){var n,a,r,o,s,l=X.isArray(e)?e:[e],u=l.length;if(!X.isObject(t))return t;for(n=(i=i||{}).merger||X._merger,a=0;a<u;++a)if(e=l[a],X.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)n(r[s],t,e,i);return t},mergeIf:function(t,e){return X.merge(t,e,{merger:X._mergerIf})},extend:Object.assign||function(t){return X.merge(t,[].slice.call(arguments,1),{merger:function(t,e,i){e[t]=i[t]}})},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=X.inherits,t&&X.extend(i.prototype,t),i.__super__=e.prototype,i},_deprecated:function(t,e,i,n){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+n+'" instead')}},K=X;X.callCallback=X.callback,X.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},X.getValueOrDefault=X.valueOrDefault,X.getValueAtIndexOrDefault=X.valueAtIndexOrDefault;var Z={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-Z.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*Z.easeInBounce(2*t):.5*Z.easeOutBounce(2*t-1)+.5}},$={effects:Z};K.easingEffects=Z;var J=Math.PI,Q=J/180,tt=2*J,et=J/2,it=J/4,nt=2*J/3,at={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,r){if(r){var o=Math.min(r,a/2,n/2),s=e+o,l=i+o,u=e+n-o,d=i+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-J,-et),t.arc(u,l,o,-et,0),t.arc(u,d,o,0,et),t.arc(s,d,o,et,J)):s<u?(t.moveTo(s,i),t.arc(u,l,o,-et,et),t.arc(s,l,o,et,J+et)):l<d?(t.arc(s,l,o,-J,0),t.arc(s,d,o,0,J)):t.arc(s,l,o,-J,J),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a,r){var o,s,l,u,d,h=(r||0)*Q;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(n,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(i)||i<=0)){switch(t.beginPath(),e){default:t.arc(n,a,i,0,tt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),t.closePath();break;case"rectRounded":u=i-(d=.516*i),s=Math.cos(h+it)*u,l=Math.sin(h+it)*u,t.arc(n-s,a-l,d,h-J,h-et),t.arc(n+l,a-s,d,h-et,h),t.arc(n+s,a+l,d,h,h+et),t.arc(n-l,a+s,d,h+et,h+J),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*i,t.rect(n-u,a-u,2*u,2*u);break}h+=it;case"rectRot":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+l,a-s),t.lineTo(n+s,a+l),t.lineTo(n-l,a+s),t.closePath();break;case"crossRot":h+=it;case"cross":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"star":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s),h+=it,s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"line":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l);break;case"dash":t.moveTo(n,a),t.lineTo(n+Math.cos(h)*i,a+Math.sin(h)*i)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){var a=i.steppedLine;if(a){if("middle"===a){var r=(e.x+i.x)/2;t.lineTo(r,n?i.y:e.y),t.lineTo(r,n?e.y:i.y)}else"after"===a&&!n||"after"!==a&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}else i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}},rt=at;K.clear=at.clear,K.drawRoundedRectangle=function(t){t.beginPath(),at.roundedRect.apply(at,arguments)};var ot={_set:function(t,e){return K.merge(this[t]||(this[t]={}),e)}};ot._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var st=ot,lt=K.valueOrDefault;var ut={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,a;return K.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,a=+t.left||0):e=i=n=a=+t||0,{top:e,right:i,bottom:n,left:a,height:e+n,width:a+i}},_parseFont:function(t){var e=st.global,i=lt(t.fontSize,e.defaultFontSize),n={family:lt(t.fontFamily,e.defaultFontFamily),lineHeight:K.options.toLineHeight(lt(t.lineHeight,e.defaultLineHeight),i),size:i,style:lt(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return n.string=function(t){return!t||K.isNullOrUndef(t.size)||K.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n},resolve:function(t,e,i,n){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==i&&K.isArray(o)&&(o=o[i],s=!1),void 0!==o))return n&&!s&&(n.cacheable=!1),o}},dt={_factorize:function(t){var e,i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort(function(t,e){return t-e}).pop(),i},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e}},ht=dt;K.log10=dt.log10;var ct=K,ft=$,gt=rt,pt=ut,mt=ht,vt={getRtlAdapter:function(t,e,i){return t?function(t,e){return{x:function(i){return t+t+e-i},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,i):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var i,n;"ltr"!==e&&"rtl"!==e||(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};ct.easing=ft,ct.canvas=gt,ct.options=pt,ct.math=mt,ct.rtl=vt;var bt=function(t){ct.extend(this,t),this.initialize.apply(this,arguments)};ct.extend(bt.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=ct.extend({},t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,n=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),n||(n=e._start={}),function(t,e,i,n){var a,r,o,s,l,u,d,h,c,f=Object.keys(i);for(a=0,r=f.length;a<r;++a)if(u=i[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=G(l)).valid&&(c=G(u)).valid){e[o]=c.mix(h,n).rgbString();continue}}else if(ct.isFinite(l)&&ct.isFinite(u)){e[o]=l+(u-l)*n;continue}e[o]=u}}(n,a,i,t),e):(e._view=ct.extend({},i),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return ct.isNumber(this._model.x)&&ct.isNumber(this._model.y)}}),bt.extend=ct.inherits;var xt=bt,yt=xt.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),_t=yt;Object.defineProperty(yt.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(yt.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),st._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:ct.noop,onComplete:ct.noop}});var kt={animations:[],request:null,addAnimation:function(t,e,i,n){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=i,n||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=ct.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=ct.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,i,n,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,i=t.numSteps,n=Math.floor((Date.now()-t.startTime)/t.duration*i)+1,t.currentStep=Math.min(n,i),ct.callback(t.render,[e,t],e),ct.callback(t.onAnimationProgress,[t],e),t.currentStep>=i?(ct.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},wt=ct.options.resolve,Mt=["push","pop","shift","splice","unshift"];function St(t,e){var i=t._chartjs;if(i){var n=i.listeners,a=n.indexOf(e);-1!==a&&n.splice(a,1),n.length>0||(Mt.forEach(function(e){delete t[e]}),delete t._chartjs)}}var Ct=function(t,e){this.initialize(t,e)};ct.extend(Ct.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var i=this;i.chart=t,i.index=e,i.linkScales(),i.addElements(),i._type=i.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,i=e.scales,n=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in i&&!n.xAxisID||(t.xAxisID=n.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in i&&!n.yAxisID||(t.yAxisID=n.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&St(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,i=this,n=i.getDataset(),a=n.data||(n.data=[]);i._data!==a&&(i._data&&St(i._data,i),a&&Object.isExtensible(a)&&(e=i,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Mt.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=n.apply(this,e);return ct.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),a}})}))),i._data=a),i.resyncElements()},_configure:function(){this._config=ct.merge({},[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,i){"_meta"!==t&&"data"!==t&&ct._merger(t,e,i)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:ct.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},getStyle:function(t){var e,i=this.getMeta(),n=i.dataset;return this._configure(),n&&void 0===t?e=this._resolveDatasetElementOptions(n||{}):(t=t||0,e=this._resolveDataElementOptions(i.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor="rgba(0,0,0,0)"),e},_resolveDatasetElementOptions:function(t,e){var i,n,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(i=0,n=h.length;i<n;++i)a=h[i],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=wt([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var i=this,n=t&&t.custom,a=i._cachedDataOpts;if(a&&!n)return a;var r,o,s,l,u=i.chart,d=i._config,h=u.options.elements[i.dataElementType.prototype._type]||{},c=i._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:i.getDataset(),datasetIndex:i.index},p={cacheable:!n};if(n=n||{},ct.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=wt([n[l],d[l],h[l]],g,e,p);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=wt([n[l],d[c[l]],d[l],h[l]],g,e,p);return p.cacheable&&(i._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){ct.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,r=ct.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=wt([n.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,i),a.borderColor=wt([n.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,i),a.borderWidth=wt([n.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,i)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,i,n,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(n=Object.keys(a)).length;t<e;++t)s[i=n[t]]=r[i],r[i]=a[i];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),Ct.extend=ct.inherits;var Pt=Ct,At=2*Math.PI;function Dt(t,e){var i=e.startAngle,n=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,i-r,n+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,n+r,i-r,!0)):t.arc(o,s,a,n+Math.PI/2,i-Math.PI/2),t.closePath(),t.clip()}function Tt(t,e,i){var n="inner"===e.borderAlign;n?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),i.fullCircles&&function(t,e,i,n){var a,r=i.endAngle;for(n&&(i.endAngle=i.startAngle+At,Dt(t,i),i.endAngle=r,i.endAngle===i.startAngle&&i.fullCircles&&(i.endAngle+=At,i.fullCircles--)),t.beginPath(),t.arc(i.x,i.y,i.innerRadius,i.startAngle+At,i.startAngle,!0),a=0;a<i.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.startAngle+At),a=0;a<i.fullCircles;++a)t.stroke()}(t,e,i,n),n&&Dt(t,i),t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.endAngle),t.arc(i.x,i.y,i.innerRadius,i.endAngle,i.startAngle,!0),t.closePath(),t.stroke()}st._set("global",{elements:{arc:{backgroundColor:st.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var It=xt.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=ct.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,r=n.distance,o=i.startAngle,s=i.endAngle;s<o;)s+=At;for(;a>s;)a-=At;for(;a<o;)a+=At;var l=a>=o&&a<=s,u=r>=i.innerRadius&&r<=i.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t,e=this._chart.ctx,i=this._view,n="inner"===i.borderAlign?.33:0,a={x:i.x,y:i.y,innerRadius:i.innerRadius,outerRadius:Math.max(i.outerRadius-n,0),pixelMargin:n,startAngle:i.startAngle,endAngle:i.endAngle,fullCircles:Math.floor(i.circumference/At)};if(e.save(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+At,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+i.circumference%At}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),i.borderWidth&&Tt(e,i,a),e.restore()}}),Ft=ct.valueOrDefault,Lt=st.global.defaultColor;st._set("global",{elements:{line:{tension:.4,backgroundColor:Lt,borderWidth:3,borderColor:Lt,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var Ot=xt.extend({_type:"line",draw:function(){var t,e,i,n=this,a=n._view,r=n._chart.ctx,o=a.spanGaps,s=n._children.slice(),l=st.global,u=l.elements.line,d=-1,h=n._loop;if(s.length){if(n._loop){for(t=0;t<s.length;++t)if(e=ct.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=Ft(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=Ft(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(i=s[0]._view).skip||(r.moveTo(i.x,i.y),d=0),t=1;t<s.length;++t)i=s[t]._view,e=-1===d?ct.previousItem(s,t):s[d],i.skip||(d!==t-1&&!o||-1===d?r.moveTo(i.x,i.y):ct.canvas.lineTo(r,e._view,i),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),Rt=ct.valueOrDefault,zt=st.global.defaultColor;function Nt(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}st._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:zt,borderColor:zt,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var Bt=xt.extend({_type:"point",inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:Nt,inXRange:Nt,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._chart.ctx,n=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=st.global,u=l.defaultColor;e.skip||(void 0===t||ct.canvas._isPointInArea(e,t))&&(i.strokeStyle=e.borderColor||u,i.lineWidth=Rt(e.borderWidth,l.elements.point.borderWidth),i.fillStyle=e.backgroundColor||u,ct.canvas.drawPoint(i,n,r,o,s,a))}}),Et=st.global.defaultColor;function Vt(t){return t&&void 0!==t.width}function Wt(t){var e,i,n,a,r;return Vt(t)?(r=t.width/2,e=t.x-r,i=t.x+r,n=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),i=Math.max(t.x,t.base),n=t.y-r,a=t.y+r),{left:e,top:n,right:i,bottom:a}}function Ht(t,e,i){return t===e?i:t===i?e:t}function jt(t,e,i){var n,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,i={};return e?(t.horizontal?t.base>t.x&&(e=Ht(e,"left","right")):t.base<t.y&&(e=Ht(e,"bottom","top")),i[e]=!0,i):i}(t);return ct.isObject(s)?(n=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):n=a=r=o=+s||0,{t:l.top||n<0?0:n>i?i:n,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>i?i:r,l:l.left||o<0?0:o>e?e:o}}function qt(t,e,i){var n=null===e,a=null===i,r=!(!t||n&&a)&&Wt(t);return r&&(n||e>=r.left&&e<=r.right)&&(a||i>=r.top&&i<=r.bottom)}st._set("global",{elements:{rectangle:{backgroundColor:Et,borderColor:Et,borderSkipped:"bottom",borderWidth:0}}});var Ut=xt.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,i=function(t){var e=Wt(t),i=e.right-e.left,n=e.bottom-e.top,a=jt(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n},inner:{x:e.left+a.l,y:e.top+a.t,w:i-a.l-a.r,h:n-a.t-a.b}}}(e),n=i.outer,a=i.inner;t.fillStyle=e.backgroundColor,t.fillRect(n.x,n.y,n.w,n.h),n.w===a.w&&n.h===a.h||(t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return qt(this._view,t,e)},inLabelRange:function(t,e){var i=this._view;return Vt(i)?qt(i,t,null):qt(i,null,e)},inXRange:function(t){return qt(this._view,t,null)},inYRange:function(t){return qt(this._view,null,t)},getCenterPoint:function(){var t,e,i=this._view;return Vt(i)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return Vt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),Yt={},Gt=It,Xt=Ot,Kt=Bt,Zt=Ut;Yt.Arc=Gt,Yt.Line=Xt,Yt.Point=Kt,Yt.Rectangle=Zt;var $t=ct._deprecated,Jt=ct.valueOrDefault;function Qt(t,e,i){var n,a,r=i.barThickness,o=e.stackCount,s=e.pixels[t],l=ct.isNullOrUndef(r)?function(t,e){var i,n,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)n=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(n-i)):o,i=n;return o}(e.scale,e.pixels):-1;return ct.isNullOrUndef(r)?(n=l*i.categoryPercentage,a=i.barPercentage):(n=r*o,a=1),{chunk:n/o,ratio:a,start:s-n/2}}st._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),st._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var te=Pt.extend({dataElementType:Yt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,i=this;Pt.prototype.initialize.apply(i,arguments),(t=i.getMeta()).stack=i.getDataset().stack,t.bar=!0,e=i._getIndexScale().options,$t("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),$t("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),$t("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),$t("bar chart",i._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),$t("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=n.getDataset(),o=n._resolveDataElementOptions(t,e);t._xScale=n.getScaleForId(a.xAxisID),t._yScale=n.getScaleForId(a.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:n.chart.data.labels[e]},ct.isArray(r.data[e])&&(t._model.borderSkipped=null),n._updateElementGeometry(t,e,i,o),t.pivot()},_updateElementGeometry:function(t,e,i,n){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,n),h=a.calculateBarIndexPixels(a.index,e,u,n);r.horizontal=l,r.base=i?s:d.base,r.x=l?i?s:d.head:h.center,r.y=l?h.center:i?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,i,n=this._getIndexScale(),a=n._getMatchingVisibleMetas(this._type),r=n.options.stacked,o=a.length,s=[];for(e=0;e<o&&(i=a[e],(!1===r||-1===s.indexOf(i.stack)||void 0===r&&void 0===i.stack)&&s.push(i.stack),i.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this._getIndexScale(),n=[];for(t=0,e=this.getMeta().data.length;t<e;++t)n.push(i.getPixelForValue(null,t,this.index));return{pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this.getStackCount(),scale:i}},calculateBarValuePixels:function(t,e,i){var n,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),p=h._parseValue(f[t].data[e]),m=i.minBarLength,v=h.options.stacked,b=this.getMeta().stack,x=void 0===p.start?0:p.max>=0&&p.min>=0?p.min:p.max,y=void 0===p.start?p.end:p.max>=0&&p.min>=0?p.max-p.min:p.min-p.max,_=g.length;if(v||void 0===v&&void 0!==b)for(n=0;n<_&&(a=g[n]).index!==t;++n)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(p.min<0&&r<0||p.max>=0&&r>0)&&(x+=r));return o=h.getPixelForValue(x),l=(s=h.getPixelForValue(x+y))-o,void 0!==m&&Math.abs(l)<m&&(l=m,s=y>=0&&!c||y<0&&c?o-m:o+m),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,i,n){var a="flex"===n.barThickness?function(t,e,i){var n,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=i.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),n=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):Qt(e,i,n),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(Jt(n.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,r=0;for(ct.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(n.data[r]);isNaN(o.min)||isNaN(o.max)||i[r].draw()}ct.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=ct.extend({},Pt.prototype._resolveDataElementOptions.apply(t,arguments)),i=t._getIndexScale().options,n=t._getValueScale().options;return e.barPercentage=Jt(i.barPercentage,e.barPercentage),e.barThickness=Jt(i.barThickness,e.barThickness),e.categoryPercentage=Jt(i.categoryPercentage,e.categoryPercentage),e.maxBarThickness=Jt(i.maxBarThickness,e.maxBarThickness),e.minBarLength=Jt(n.minBarLength,e.minBarLength),e}}),ee=ct.valueOrDefault,ie=ct.options.resolve;st._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}});var ne=Pt.extend({dataElementType:Yt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,i=e.getMeta().data;ct.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=t.custom||{},o=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveDataElementOptions(t,e),u=n.getDataset().data[e],d=n.index,h=i?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:i?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=ee(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ee(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ee(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveDataElementOptions:function(t,e){var i=this,n=i.chart,a=i.getDataset(),r=t.custom||{},o=a.data[e]||{},s=Pt.prototype._resolveDataElementOptions.apply(i,arguments),l={chart:n,dataIndex:e,dataset:a,datasetIndex:i.index};return i._cachedDataOpts===s&&(s=ct.extend({},s)),s.radius=ie([r.radius,o.r,i._config.radius,n.options.elements.point.radius],l,e),s}}),ae=ct.valueOrDefault,re=Math.PI,oe=2*re,se=re/2;st._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,i=o[0].data.length;e<i;++e)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&n.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=a.controller.getStyle(n);return{text:i,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-se,circumference:oe,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return ct.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}});var le=Pt.extend({dataElementType:Yt.Arc,linkScales:ct.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e,i,n,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,p=l.cutoutPercentage/100||0,m=l.circumference,v=r._getRingWeight(r.index);if(m<oe){var b=l.rotation%oe,x=(b+=b>=re?-oe:b<-re?oe:0)+m,y=Math.cos(b),_=Math.sin(b),k=Math.cos(x),w=Math.sin(x),M=b<=0&&x>=0||x>=oe,S=b<=se&&x>=se||x>=oe+se,C=b<=-se&&x>=-se||x>=re+se,P=b===-re||x>=re?-1:Math.min(y,y*p,k,k*p),A=C?-1:Math.min(_,_*p,w,w*p),D=M?1:Math.max(y,y*p,k,k*p),T=S?1:Math.max(_,_*p,w,w*p);u=(D-P)/2,d=(T-A)/2,h=-(D+P)/2,c=-(T+A)/2}for(n=0,a=g.length;n<a;++n)g[n]._options=r._resolveDataElementOptions(g[n],n);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,i=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,i)/2,0),o.innerRadius=Math.max(o.outerRadius*p,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),n=0,a=g.length;n<a;++n)r.updateElement(g[n],n,t)},updateElement:function(t,e,i){var n=this,a=n.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=n.getDataset(),f=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(c.data[e])*(o.circumference/oe),g=i&&s.animateScale?0:n.innerRadius,p=i&&s.animateScale?0:n.outerRadius,m=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:ct.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;i&&s.animateRotate||(v.startAngle=0===e?o.rotation:n.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return ct.each(i.data,function(i,a){t=e.data[a],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?oe*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,i,n,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,i=d.data.datasets.length;e<i;++e)if(d.isDatasetVisible(e)){t=(n=d.getDatasetMeta(e)).data,e!==this.index&&(r=n.controller);break}if(!t)return 0;for(e=0,i=t.length;e<i;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=ae(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ae(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ae(i.hoverBorderWidth,i.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e},_getRingWeight:function(t){return Math.max(ae(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});st._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),st._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var ue=te.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),de=ct.valueOrDefault,he=ct.options.resolve,ce=ct.canvas._isPointInArea;st._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var fe=Pt.extend({datasetElementType:Yt.Line,dataElementType:Yt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,i,n=this,a=n.getMeta(),r=a.dataset,o=a.data||[],s=n.chart.options,l=n._config,u=n._showLine=de(l.showLine,s.showLines);for(n._xScale=n.getScaleForId(a.xAxisID),n._yScale=n.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=n._yScale,r._datasetIndex=n.index,r._children=o,r._model=n._resolveDatasetElementOptions(r),r.pivot()),e=0,i=o.length;e<i;++e)n.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&n.updateBezierControlPoints(),e=0,i=o.length;e<i;++e)o[e].pivot()},updateElement:function(t,e,i){var n,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);n=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=i?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:n,y:a,skip:s.skip||isNaN(n)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:de(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,i=e._config,n=t.custom||{},a=e.chart.options,r=a.elements.line,o=Pt.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=de(i.spanGaps,a.spanGaps),o.tension=de(i.lineTension,r.tension),o.steppedLine=he([n.steppedLine,i.steppedLine,r.stepped]),o},calculatePointY:function(t,e,i){var n,a,r,o,s=this.chart,l=this._yScale,u=0,d=0,h=+l.getRightValue(t),c=s._getSortedVisibleDatasetMetas(),f=c.length;if(l.options.stacked){for(n=0;n<f&&(r=c[n]).index!==i;++n)a=s.data.datasets[r.index],"line"===r.type&&r.yAxisID===l.id&&((o=+l.getRightValue(a.data[e]))<0?d+=o||0:u+=o||0);return h<0?l.getPixelForValue(d+h):l.getPixelForValue(u+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,i){return Math.max(Math.min(t,i),e)}if(o.spanGaps&&(l=l.filter(function(t){return!t._model.skip})),"monotone"===o.cubicInterpolationMode)ct.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)i=l[t]._model,n=ct.splineCurve(ct.previousItem(l,t)._model,i,ct.nextItem(l,t)._model,o.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)i=l[t]._model,ce(i,s)&&(t>0&&ce(l[t-1]._model,s)&&(i.controlPointPreviousX=u(i.controlPointPreviousX,s.left,s.right),i.controlPointPreviousY=u(i.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&ce(l[t+1]._model,s)&&(i.controlPointNextX=u(i.controlPointNextX,s.left,s.right),i.controlPointNextY=u(i.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,i=this.getMeta(),n=i.data||[],a=e.chartArea,r=0,o=n.length;for(this._showLine&&(t=(i.dataset._model.borderWidth||0)/2,ct.canvas.clipArea(e.ctx,{left:a.left-t,right:a.right+t,top:a.top-t,bottom:a.bottom+t}),i.dataset.draw(),ct.canvas.unclipArea(e.ctx));r<o;++r)n[r].draw(a)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=de(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=de(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=de(i.hoverBorderWidth,i.borderWidth),e.radius=de(i.hoverRadius,i.radius)}}),ge=ct.options.resolve;st._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,i=o[0].data.length;e<i;++e)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&n.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=a.controller.getStyle(n);return{text:i,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var pe=Pt.extend({dataElementType:Yt.Arc,linkScales:ct.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,i,n,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,i=r.data.length;e<i;e++)l[e]=s,n=a._computeAngle(e),u[e]=n,s+=n;for(e=0,i=d.length;e<i;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,a=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(n.cutoutPercentage?e.outerRadius/100*n.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var n=this,a=n.chart,r=n.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=n._starts[e],p=g+(t.hidden?0:n._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:i?m:f,startAngle:i&&s.animateRotate?c:g,endAngle:i&&s.animateRotate?c:p,label:ct.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return ct.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor,a=ct.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=a(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=a(i.hoverBorderWidth,i.borderWidth)},_computeAngle:function(t){var e=this,i=this.getMeta().count,n=e.getDataset(),a=e.getMeta();if(isNaN(n.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return ge([e.chart.options.elements.arc.angle,2*Math.PI/i],r,t)}});st._set("pie",ct.clone(st.doughnut)),st._set("pie",{cutoutPercentage:0});var me=le,ve=ct.valueOrDefault;st._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{tension:0}}});var be=Pt.extend({datasetElementType:Yt.Line,dataElementType:Yt.Point,linkScales:ct.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,i,n=this,a=n.getMeta(),r=a.dataset,o=a.data||[],s=n.chart.scale,l=n._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=n.index,r._children=o,r._loop=!0,r._model=n._resolveDatasetElementOptions(r),r.pivot(),e=0,i=o.length;e<i;++e)n.updateElement(o[e],e,t);for(n.updateBezierControlPoints(),e=0,i=o.length;e<i;++e)o[e].pivot()},updateElement:function(t,e,i){var n=this,a=t.custom||{},r=n.getDataset(),o=n.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=n._resolveDataElementOptions(t,e),u=n.getMeta().dataset._model,d=i?o.xCenter:s.x,h=i?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=n.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:ve(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,i=t.chart.options,n=Pt.prototype._resolveDatasetElementOptions.apply(t,arguments);return n.spanGaps=ve(e.spanGaps,i.spanGaps),n.tension=ve(e.lineTension,i.elements.line.tension),n},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,i){return Math.max(Math.min(t,i),e)}for(a.dataset._model.spanGaps&&(o=o.filter(function(t){return!t._model.skip})),t=0,e=o.length;t<e;++t)i=o[t]._model,n=ct.splineCurve(ct.previousItem(o,t,!0)._model,i,ct.nextItem(o,t,!0)._model,i.tension),i.controlPointPreviousX=s(n.previous.x,r.left,r.right),i.controlPointPreviousY=s(n.previous.y,r.top,r.bottom),i.controlPointNextX=s(n.next.x,r.left,r.right),i.controlPointNextY=s(n.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=ve(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ve(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ve(i.hoverBorderWidth,i.borderWidth),e.radius=ve(i.hoverRadius,i.radius)}});st._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),st._set("global",{datasets:{scatter:{showLine:!1}}});var xe={bar:te,bubble:ne,doughnut:le,horizontalBar:ue,line:fe,polarArea:pe,pie:me,radar:be,scatter:fe};function ye(t,e){return t.native?{x:t.x,y:t.y}:ct.getRelativePosition(t,e)}function _e(t,e){var i,n,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(n=0,r=l.length;n<r;++n)for(a=0,o=(i=l[n].data).length;a<o;++a)(s=i[a])._view.skip||e(s)}function ke(t,e){var i=[];return _e(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function we(t,e,i,n){var a=Number.POSITIVE_INFINITY,r=[];return _e(t,function(t){if(!i||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=n(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}}),r}function Me(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Se(t,e,i){var n=ye(e,t);i.axis=i.axis||"x";var a=Me(i.axis),r=i.intersect?ke(t,n):we(t,n,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach(function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)}),o):[]}var Ce={modes:{single:function(t,e){var i=ye(e,t),n=[];return _e(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:Se,index:Se,dataset:function(t,e,i){var n=ye(e,t);i.axis=i.axis||"xy";var a=Me(i.axis),r=i.intersect?ke(t,n):we(t,n,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return Se(t,e,{intersect:!1})},point:function(t,e){return ke(t,ye(e,t))},nearest:function(t,e,i){var n=ye(e,t);i.axis=i.axis||"xy";var a=Me(i.axis);return we(t,n,i.intersect,a)},x:function(t,e,i){var n=ye(e,t),a=[],r=!1;return _e(t,function(t){t.inXRange(n.x)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a},y:function(t,e,i){var n=ye(e,t),a=[],r=!1;return _e(t,function(t){t.inYRange(n.y)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a}}},Pe=ct.extend;function Ae(t,e){return ct.where(t,function(t){return t.pos===e})}function De(t,e){return t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function Te(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function Ie(t,e,i){var n,a,r=i.box,o=t.maxPadding;if(i.size&&(t[i.pos]-=i.size),i.size=i.horizontal?r.height:r.width,t[i.pos]+=i.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(n=e.outerWidth-Te(o,t,"left","right"),a=e.outerHeight-Te(o,t,"top","bottom"),n!==t.w||a!==t.h)return t.w=n,t.h=a,i.horizontal?n!==t.w:a!==t.h}function Fe(t,e){var i=e.maxPadding;function n(t){var n={left:0,top:0,right:0,bottom:0};return t.forEach(function(t){n[t]=Math.max(e[t],i[t])}),n}return n(t?["left","right"]:["top","bottom"])}function Le(t,e,i){var n,a,r,o,s,l,u=[];for(n=0,a=t.length;n<a;++n)(o=(r=t[n]).box).update(r.width||e.w,r.height||e.h,Fe(r.horizontal,e)),Ie(e,i,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&Le(u,e,i)||l}function Oe(t,e,i){var n,a,r,o,s=i.padding,l=e.x,u=e.y;for(n=0,a=t.length;n<a;++n)o=(r=t[n]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?i.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}st._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var Re={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var n=t.options.layout||{},a=ct.options.toPadding(n.padding),r=e-a.width,o=i-a.height,s=function(t){var e=function(t){var e,i,n,a=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],a.push({index:e,box:n,pos:n.position,horizontal:n.isHorizontal(),weight:n.weight});return a}(t),i=De(Ae(e,"left"),!0),n=De(Ae(e,"right")),a=De(Ae(e,"top"),!0),r=De(Ae(e,"bottom"));return{leftAndTop:i.concat(a),rightAndBottom:n.concat(r),chartArea:Ae(e,"chartArea"),vertical:i.concat(n),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:i,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=Pe({maxPadding:Pe({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var i,n,a;for(i=0,n=t.length;i<n;++i)(a=t[i]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),Le(l,h,d),Le(u,h,d)&&Le(l,h,d),function(t){var e=t.maxPadding;function i(i){var n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(h),Oe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,Oe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},ct.each(s.chartArea,function(e){var i=e.box;Pe(i,t.chartArea),i.update(h.w,h.h)})}}};var ze,Ne=(ze=Object.freeze({default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&ze.default||ze,Be="$chartjs",Ee="chartjs-size-monitor",Ve="chartjs-render-monitor",We="chartjs-render-animation",He=["animationstart","webkitAnimationStart"],je={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function qe(t,e){var i=ct.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var Ue=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Ye(t,e,i){t.addEventListener(e,i,Ue)}function Ge(t,e,i){t.removeEventListener(e,i,Ue)}function Xe(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function Ke(t){var e=document.createElement("div");return e.className=t||"",e}function Ze(t,e,i){var n,a,r,o,s=t[Be]||(t[Be]={}),l=s.resizer=function(t){var e=Ke(Ee),i=Ke(Ee+"-expand"),n=Ke(Ee+"-shrink");i.appendChild(Ke()),n.appendChild(Ke()),e.appendChild(i),e.appendChild(n),e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,n.scrollLeft=1e6,n.scrollTop=1e6};var a=function(){e._reset(),t()};return Ye(i,"scroll",a.bind(i,"expand")),Ye(n,"scroll",a.bind(n,"shrink")),e}((n=function(){if(s.resizer){var n=i.options.maintainAspectRatio&&t.parentNode,a=n?n.clientWidth:0;e(Xe("resize",i)),n&&n.clientWidth<a&&i.canvas&&e(Xe("resize",i))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,ct.requestAnimFrame.call(window,function(){r=!1,n.apply(a,o)}))}));!function(t,e){var i=t[Be]||(t[Be]={}),n=i.renderProxy=function(t){t.animationName===We&&e()};ct.each(He,function(e){Ye(t,e,n)}),i.reflow=!!t.offsetParent,t.classList.add(Ve)}(t,function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}})}function $e(t){var e=t[Be]||{},i=e.resizer;delete e.resizer,function(t){var e=t[Be]||{},i=e.renderProxy;i&&(ct.each(He,function(e){Ge(t,e,i)}),delete e.renderProxy),t.classList.remove(Ve)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}var Je={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode();!function(t,e){var i=t[Be]||(t[Be]={});if(!i.containsStyles){i.containsStyles=!0,e="/* Chart.js */\n"+e;var n=document.createElement("style");n.setAttribute("type","text/css"),n.appendChild(document.createTextNode(e)),t.appendChild(n)}}(e.host?e:document.head,Ne)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(this._ensureLoaded(t),function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[Be]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var r=qe(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=qe(t,"height");void 0!==r&&(t.height=o)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[Be]){var i=e[Be].initial;["height","width"].forEach(function(t){var n=i[t];ct.isNullOrUndef(n)?e.removeAttribute(t):e.setAttribute(t,n)}),ct.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[Be]}},addEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=i[Be]||(i[Be]={});Ye(n,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=je[t.type]||t.type,n=ct.getRelativePosition(t,e);return Xe(i,e,n.x,n.y,t)}(e,t))})}else Ze(n,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=((i[Be]||{}).proxies||{})[t.id+"_"+e];a&&Ge(n,e,a)}else $e(n)}};ct.addEvent=Ye,ct.removeEvent=Ge;var Qe=Je._enabled?Je:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},ti=ct.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Qe);st._set("global",{plugins:{}});var ei={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,r,o,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],n=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=ct.clone(st.global.plugins[e])),i.push(t),n.push({plugin:t,options:a||{}}))}}),e.descriptors=n,e.id=this._cacheId,n},_invalidate:function(t){delete t.$plugins}},ii={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=ct.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?ct.merge({},[st.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=ct.extend(this.defaults[t],e))},addScalesToLayout:function(t){ct.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,Re.addBox(t,e)})}},ni=ct.valueOrDefault,ai=ct.rtl.getRtlAdapter;st._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:ct.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var r=t[0];r.label?i=r.label:r.xLabel?i=r.xLabel:a>0&&r.index<a&&(i=n[r.index])}return i},afterTitle:ct.noop,beforeBody:ct.noop,beforeLabel:ct.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),ct.isNullOrUndef(t.value)?i+=t.yLabel:i+=t.value,i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:ct.noop,afterBody:ct.noop,beforeFooter:ct.noop,footer:ct.noop,afterFooter:ct.noop}}});var ri={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:n/r,y:a/r}},nearest:function(t,e){var i,n,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=ct.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function oi(t,e){return e&&(ct.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function si(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function li(t){var e=st.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:ni(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:ni(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:ni(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:ni(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:ni(t.titleFontStyle,e.defaultFontStyle),titleFontSize:ni(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:ni(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:ni(t.footerFontStyle,e.defaultFontStyle),footerFontSize:ni(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function ui(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function di(t){return oi([],si(t))}var hi=xt.extend({initialize:function(){this._model=li(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,i=e.callbacks,n=i.beforeTitle.apply(t,arguments),a=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),o=[];return o=oi(o,si(n)),o=oi(o,si(a)),o=oi(o,si(r))},getBeforeBody:function(){return di(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var i=this,n=i._options.callbacks,a=[];return ct.each(t,function(t){var r={before:[],lines:[],after:[]};oi(r.before,si(n.beforeLabel.call(i,t,e))),oi(r.lines,n.label.call(i,t,e)),oi(r.after,si(n.afterLabel.call(i,t,e))),a.push(r)}),a},getAfterBody:function(){return di(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),n=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=oi(r,si(i)),r=oi(r,si(n)),r=oi(r,si(a))},update:function(t){var e,i,n,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=li(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var _=[],k=[];y=ri[c.position].call(h,p,h._eventPosition);var w=[];for(e=0,i=p.length;e<i;++e)w.push((n=p[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=n._xScale,r=n._yScale||n._scale,o=n._index,s=n._datasetIndex,l=n._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:n._model.x,y:n._model.y}));c.filter&&(w=w.filter(function(t){return c.filter(t,m)})),c.itemSort&&(w=w.sort(function(t,e){return c.itemSort(t,e,m)})),ct.each(w,function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),k.push(c.callbacks.labelTextColor.call(h,t,h._chart))}),g.title=h.getTitle(w,m),g.beforeBody=h.getBeforeBody(w,m),g.body=h.getBody(w,m),g.afterBody=h.getAfterBody(w,m),g.footer=h.getFooter(w,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=k,g.dataPoints=w,x=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;n+=s*u,n+=s?(s-1)*e.titleSpacing:0,n+=s?e.titleMarginBottom:0,n+=o*d,n+=o?(o-1)*e.bodySpacing:0,n+=l?e.footerMarginTop:0,n+=l*h,n+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,i.measureText(t).width+c)};return i.font=ct.fontString(u,e._titleFontStyle,e._titleFontFamily),ct.each(e.title,f),i.font=ct.fontString(d,e._bodyFontStyle,e._bodyFontFamily),ct.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,ct.each(r,function(t){ct.each(t.before,f),ct.each(t.lines,f),ct.each(t.after,f)}),c=0,i.font=ct.fontString(h,e._footerFontStyle,e._footerFontFamily),ct.each(e.footer,f),{width:a+=2*e.xPadding,height:n}}(this,g),b=function(t,e,i,n){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=i.xAlign,d=i.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>n.width&&(a=n.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,x,v=function(t,e){var i,n,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(i=function(t){return t<=c},n=function(t){return t>c}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):n(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,r,o,s,l,u=i.caretSize,d=i.cornerRadius,h=i.xAlign,c=i.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(n=f)-u,r=n,o=s+u,l=s-u):(a=(n=f+p)+u,r=n,o=s-u,l=s+u);else if("left"===h?(n=(a=f+d+u)-u,r=a+u):"right"===h?(n=(a=f+p-d-u)-u,r=a+u):(n=(a=i.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+m)+u,l=o;var v=r;r=n,n=v}return{x1:n,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,i){var n,a,r,o=e.title,s=o.length;if(s){var l=ai(e.rtl,e.x,e.width);for(t.x=ui(e,e._titleAlign),i.textAlign=l.textAlign(e._titleAlign),i.textBaseline="middle",n=e.titleFontSize,a=e.titleSpacing,i.fillStyle=e.titleFontColor,i.font=ct.fontString(n,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)i.fillText(o[r],l.x(t.x),t.y+n/2),t.y+=n+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,i){var n,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,p=e.displayColors,m=0,v=p?ui(e,"left"):0,b=ai(e.rtl,e.x,e.width),x=function(e){i.fillText(e,b.x(t.x+m),t.y+h/2),t.y+=h+c},y=b.textAlign(f);for(i.textAlign=f,i.textBaseline="middle",i.font=ct.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=ui(e,y),i.fillStyle=e.bodyFontColor,ct.each(e.beforeBody,x),m=p&&"right"!==y?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(n=g[s],a=e.labelTextColors[s],r=e.labelColors[s],i.fillStyle=a,ct.each(n.before,x),l=0,d=(o=n.lines).length;l<d;++l){if(p){var _=b.x(v);i.fillStyle=e.legendColorBackground,i.fillRect(b.leftForLtr(_,h),t.y,h,h),i.lineWidth=1,i.strokeStyle=r.borderColor,i.strokeRect(b.leftForLtr(_,h),t.y,h,h),i.fillStyle=r.backgroundColor,i.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),i.fillStyle=a}x(o[l])}ct.each(n.after,x)}m=0,ct.each(e.afterBody,x),t.y-=c},drawFooter:function(t,e,i){var n,a,r=e.footer,o=r.length;if(o){var s=ai(e.rtl,e.x,e.width);for(t.x=ui(e,e._footerAlign),t.y+=e.footerMarginTop,i.textAlign=s.textAlign(e._footerAlign),i.textBaseline="middle",n=e.footerFontSize,i.fillStyle=e.footerFontColor,i.font=ct.fontString(n,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)i.fillText(r[a],s.x(t.x),t.y+n/2),t.y+=n+e.footerSpacing}},drawBackground:function(t,e,i,n){i.fillStyle=e.backgroundColor,i.strokeStyle=e.borderColor,i.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=n.width,u=n.height,d=e.cornerRadius;i.beginPath(),i.moveTo(o+d,s),"top"===r&&this.drawCaret(t,n),i.lineTo(o+l-d,s),i.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,n),i.lineTo(o+l,s+u-d),i.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,n),i.lineTo(o+d,s+u),i.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,n),i.lineTo(o,s+d),i.quadraticCurveTo(o,s,o+d,s),i.closePath(),i.fill(),e.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(n,e,t,i),n.y+=e.yPadding,ct.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(n,e,t),this.drawBody(n,e,t),this.drawFooter(n,e,t),ct.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:(i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),n.reverse&&i._active.reverse()),(e=!ct.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),ci=ri,fi=hi;fi.positioners=ci;var gi=ct.valueOrDefault;function pi(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var a,r,o,s=i[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=i[t][a],r=gi(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?ct.merge(e[t][a],[ii.getScaleDefaults(r),o]):ct.merge(e[t][a],o)}else ct._merger(t,e,i,n)}})}function mi(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){var a=e[t]||{},r=i[t];"scales"===t?e[t]=pi(a,r):"scale"===t?e[t]=ct.merge(a,[ii.getScaleDefaults(r.type),r]):ct._merger(t,e,i,n)}})}function vi(t){var e=t.options;ct.each(t.scales,function(e){Re.removeBox(t,e)}),e=mi(st.global,st[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function bi(t,e,i){var n,a=function(t){return t.id===n};do{n=e+i++}while(ct.findIndex(t,a)>=0);return n}function xi(t){return"top"===t||"bottom"===t}function yi(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}st._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var _i=function(t,e){return this.construct(t,e),this};ct.extend(_i.prototype,{construct:function(t,e){var i=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=mi(st.global,st[t.type],t.options||{}),t}(e);var n=ti.acquireContext(t,e),a=n&&n.canvas,r=a&&a.height,o=a&&a.width;i.id=ct.uid(),i.ctx=n,i.canvas=a,i.config=e,i.width=o,i.height=r,i.aspectRatio=r?o/r:null,i.options=e.options,i._bufferedRender=!1,i._layers=[],i.chart=i,i.controller=i,_i.instances[i.id]=i,Object.defineProperty(i,"data",{get:function(){return i.config.data},set:function(t){i.config.data=t}}),n&&a?(i.initialize(),i.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return ei.notify(t,"beforeInit"),ct.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),ei.notify(t,"afterInit"),t},clear:function(){return ct.canvas.clear(this),this},stop:function(){return kt.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,a=i.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(ct.getMaximumWidth(n))),o=Math.max(0,Math.floor(a?r/a:ct.getMaximumHeight(n)));if((e.width!==r||e.height!==o)&&(n.width=e.width=r,n.height=e.height=o,n.style.width=r+"px",n.style.height=o+"px",ct.retinaScale(e,i.devicePixelRatio),!t)){var s={width:r,height:o};ei.notify(e,"resize",[s]),i.onResize&&i.onResize(e,s),e.stop(),e.update({duration:i.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;ct.each(e.xAxes,function(t,i){t.id||(t.id=bi(e.xAxes,"x-axis-",i))}),ct.each(e.yAxes,function(t,i){t.id||(t.id=bi(e.yAxes,"y-axis-",i))}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,i=t.scales||{},n=[],a=Object.keys(i).reduce(function(t,e){return t[e]=!1,t},{});e.scales&&(n=n.concat((e.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(e.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),e.scale&&n.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),ct.each(n,function(e){var n=e.options,r=n.id,o=gi(n.type,e.dtype);xi(n.position)!==xi(e.dposition)&&(n.position=e.dposition),a[r]=!0;var s=null;if(r in i&&i[r].type===o)(s=i[r]).options=n,s.ctx=t.ctx,s.chart=t;else{var l=ii.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:n,ctx:t.ctx,chart:t}),i[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)}),ct.each(a,function(t,e){t||delete i[e]}),t.scales=i,ii.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,i=this,n=[],a=i.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=i.getDatasetMeta(t),s=r.type||i.config.type;if(o.type&&o.type!==s&&(i.destroyDatasetMeta(t),o=i.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=xe[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(i,t),n.push(o.controller)}}return n},resetElements:function(){var t=this;ct.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,i,n=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),vi(n),ei._invalidate(n),!1!==ei.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var a=n.buildOrUpdateControllers();for(e=0,i=n.data.datasets.length;e<i;e++)n.getDatasetMeta(e).controller.buildOrUpdateElements();n.updateLayout(),n.options.animation&&n.options.animation.duration&&ct.each(a,function(t){t.reset()}),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],ei.notify(n,"afterUpdate"),n._layers.sort(yi("z","_idx")),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){var t=this;!1!==ei.notify(t,"beforeLayout")&&(Re.update(this,this.width,this.height),t._layers=[],ct.each(t.boxes,function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())},t),t._layers.forEach(function(t,e){t._idx=e}),ei.notify(t,"afterScaleUpdate"),ei.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==ei.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);ei.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==ei.notify(this,"beforeDatasetUpdate",[i])&&(e.controller._update(),ei.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=e.options.animation,n=gi(t.duration,i&&i.duration),a=t.lazy;if(!1!==ei.notify(e,"beforeRender")){var r=function(t){ei.notify(e,"afterRender"),ct.callback(i&&i.onComplete,[t],e)};if(i&&n){var o=new _t({numSteps:n/16.66,easing:t.easing||i.easing,render:function(t,e){var i=ct.easing.effects[e.easing],n=e.currentStep,a=n/e.numSteps;t.draw(i(a),a,n)},onAnimationProgress:i.onProgress,onAnimationComplete:r});kt.addAnimation(e,o,n,a)}else e.draw(),r(new _t({numSteps:0,chart:e}));return e}},draw:function(t){var e,i,n=this;if(n.clear(),ct.isNullOrUndef(t)&&(t=1),n.transition(t),!(n.width<=0||n.height<=0)&&!1!==ei.notify(n,"beforeDraw",[t])){for(i=n._layers,e=0;e<i.length&&i[e].z<=0;++e)i[e].draw(n.chartArea);for(n.drawDatasets(t);e<i.length;++e)i[e].draw(n.chartArea);n._drawTooltip(t),ei.notify(n,"afterDraw",[t])}},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,i,n=[];for(e=0,i=(this.data.datasets||[]).length;e<i;++e)t&&!this.isDatasetVisible(e)||n.push(this.getDatasetMeta(e));return n.sort(yi("order","index")),n},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,i;if(!1!==ei.notify(this,"beforeDatasetsDraw",[t])){for(i=(e=this._getSortedVisibleDatasetMetas()).length-1;i>=0;--i)this.drawDataset(e[i],t);ei.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i={meta:t,index:t.index,easingValue:e};!1!==ei.notify(this,"beforeDatasetDraw",[i])&&(t.controller.draw(e),ei.notify(this,"afterDatasetDraw",[i]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==ei.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),ei.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return Ce.modes.single(this,t)},getElementsAtEvent:function(t){return Ce.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return Ce.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=Ce.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return Ce.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var t,e,i=this,n=i.canvas;for(i.stop(),t=0,e=i.data.datasets.length;t<e;++t)i.destroyDatasetMeta(t);n&&(i.unbindEvents(),ct.canvas.clear(i),ti.releaseContext(i.ctx),i.canvas=null,i.ctx=null),ei.notify(i,"destroy"),delete _i.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new fi({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};ct.each(t.options.events,function(n){ti.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},ti.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,ct.each(e,function(e,i){ti.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,r,o=i?"set":"remove";for(a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[o+"HoverStyle"](n);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==ei.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),ei.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},a=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,a.mode,a),ct.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,a.mode,!1),i.active.length&&a.mode&&i.updateHoverStyle(i.active,a.mode,!0),e=!ct.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),_i.instances={};var ki=_i;_i.Controller=_i,_i.types={},ct.configMerge=mi,ct.scaleMerge=pi;function wi(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function Mi(t){this.options=t||{}}ct.extend(Mi.prototype,{formats:wi,parse:wi,format:wi,add:wi,diff:wi,startOf:wi,endOf:wi,_create:function(t){return t}}),Mi.override=function(t){ct.extend(Mi.prototype,t)};var Si={_date:Mi},Ci={formatters:{values:function(t){return ct.isArray(t)?t:""+t},linear:function(t,e,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var a=ct.log10(Math.abs(n)),r="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var o=ct.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(ct.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===e||e===i.length-1?t.toExponential():""}}},Pi=ct.isArray,Ai=ct.isNullOrUndef,Di=ct.valueOrDefault,Ti=ct.valueAtIndexOrDefault;function Ii(t,e,i){var n,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(i&&(n=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?n:-n)<s-1e-6||o>l+1e-6)))return o}function Fi(t,e,i,n){var a,r,o,s,l,u,d,h,c,f,g,p,m,v=i.length,b=[],x=[],y=[];for(a=0;a<v;++a){if(s=i[a].label,l=i[a].major?e.major:e.minor,t.font=u=l.string,d=n[u]=n[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,Ai(s)||Pi(s)){if(Pi(s))for(r=0,o=s.length;r<o;++r)g=s[r],Ai(g)||Pi(g)||(c=ct.measureText(t,d.data,d.gc,c,g),f+=h)}else c=ct.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),x.push(f),y.push(h/2)}function _(t){return{width:b[t]||0,height:x[t]||0,offset:y[t]||0}}return function(t,e){ct.each(t,function(t){var i,n=t.gc,a=n.length/2;if(a>e){for(i=0;i<a;++i)delete t.data[n[i]];n.splice(0,a)}})}(n,v),p=b.indexOf(Math.max.apply(null,b)),m=x.indexOf(Math.max.apply(null,x)),{first:_(0),last:_(v-1),widest:_(p),highest:_(m)}}function Li(t){return t.drawTicks?t.tickMarkLength:0}function Oi(t){var e,i;return t.display?(e=ct.options._parseFont(t),i=ct.options.toPadding(t.padding),e.lineHeight+i.height):0}function Ri(t,e){return ct.extend(ct.options._parseFont({fontFamily:Di(e.fontFamily,t.fontFamily),fontSize:Di(e.fontSize,t.fontSize),fontStyle:Di(e.fontStyle,t.fontStyle),lineHeight:Di(e.lineHeight,t.lineHeight)}),{color:ct.options.resolve([e.fontColor,t.fontColor,st.global.defaultFontColor])})}function zi(t){var e=Ri(t,t.minor);return{minor:e,major:t.major.enabled?Ri(t,t.major):e}}function Ni(t){var e,i,n,a=[];for(i=0,n=t.length;i<n;++i)void 0!==(e=t[i])._index&&a.push(e);return a}function Bi(t,e,i,n){var a,r,o,s,l=Di(i,0),u=Math.min(Di(n,t.length),t.length),d=0;for(e=Math.ceil(e),n&&(e=(a=n-i)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}st._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:Ci.formatters.values,minor:{},major:{}}});var Ei=xt.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},mergeTicksOptions:function(){},beforeUpdate:function(){ct.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=ct.extend({left:0,right:0,top:0,bottom:0},i),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],n=0,a=l.ticks.length;n<a;++n)o.push({value:l.ticks[n],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var i=[],n=t.length/e,a=0,r=t.length;a<r;a+=n)i.push(t[Math.floor(a)]);return i}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,i=this,n=i.options.ticks.reverse;i.isHorizontal()?(t=i.left,e=i.right):(t=i.top,e=i.bottom,n=!n),i._startPixel=t,i._endPixel=e,i._reversePixels=n,i._length=e-t},afterUpdate:function(){ct.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){ct.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){ct.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){ct.callback(this.options.beforeDataLimits,[this])},determineDataLimits:ct.noop,afterDataLimits:function(){ct.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){ct.callback(this.options.beforeBuildTicks,[this])},buildTicks:ct.noop,afterBuildTicks:function(t){var e=this;return Pi(t)&&t.length?ct.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=ct.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){ct.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){ct.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){ct.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,i,n,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,i=t.highest.height-t.highest.offset,n=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:n/(d-1))&&(a=n/(d-(l.offset?.5:1)),r=s.maxHeight-Li(l.gridLines)-u.padding-Oi(l.scaleLabel),o=Math.sqrt(e*e+i*i),f=ct.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(i/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){ct.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){ct.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=t.chart,n=t.options,a=n.ticks,r=n.scaleLabel,o=n.gridLines,s=t._isVisible(),l="bottom"===n.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=Li(o)+Oi(r)),u?s&&(e.height=Li(o)+Oi(r)):e.height=t.maxHeight,a.display&&s){var d=zi(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,p=h.highest,m=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,x=ct.toRadians(t.labelRotation),y=Math.cos(x),_=Math.sin(x),k=_*g.width+y*(p.height-(b?p.offset:0))+(b?0:m);e.height=Math.min(t.maxHeight,e.height+k+v);var w,M,S=t.getPixelForTick(0)-t.left,C=t.right-t.getPixelForTick(t.getTicks().length-1);b?(w=l?y*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):y*f.width+_*f.offset):(w=c.width/2,M=f.width/2),t.paddingLeft=Math.max((w-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-C)*t.width/(t.width-C),0)+3}else{var P=a.mirror?0:g.width+v+m;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=i.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=i.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){ct.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(Ai(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,i,n,a=this;for(a.ticks=t.map(function(t){return t.value}),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),i=0,n=t.length;i<n;++i)t[i].label=e[i];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=Fi(t.ctx,zi(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,i,n,a;return Pi(t)?(e=+this.getRightValue(t[0]),i=+this.getRightValue(t[1]),n=Math.min(e,i),a=Math.max(e,i)):(e=void 0,i=t=+this.getRightValue(t),n=t,a=t),{min:n,max:a,start:e,end:i}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:ct.noop,getPixelForValue:ct.noop,getValueForPixel:ct.noop,getPixelForTick:function(t){var e=this.options.offset,i=this._ticks.length,n=1/Math.max(i-(e?0:1),1);return t<0||t>i-1?null:this.getPixelForDecimal(t*n+(e?n/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,i,n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,i){var n,a,r=0,o=e[0];for(i=Math.ceil(i),n=0;n<t.length;n++)a=t[n],n===o?(a._index=n,o=e[++r*i]):delete a.label}(t,l,u/s),Ni(t);if(n=function(t,e,i,n){var a,r,o,s,l=function(t){var e,i,n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),u=(e.length-1)/n;if(!l)return Math.max(u,1);for(o=0,s=(a=ct.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,i=u-1;e<i;e++)Bi(t,n,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,Bi(t,n,ct.isNullOrUndef(a)?0:d-a,d),Bi(t,n,h,ct.isNullOrUndef(a)?t.length:h+a),Ni(t)}return Bi(t,n),Ni(t)},_tickSize:function(){var t=this.options.ticks,e=ct.toRadians(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*i>o*n?o/i:s/n:s*n<o*i?s/i:o/n},_isVisible:function(){var t,e,i,n=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=n.data.datasets.length;t<e;++t)if(n.isDatasetVisible(t)&&((i=n.getDatasetMeta(t)).xAxisID===this.id||i.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,i,n,a,r,o,s,l,u,d,h,c,f,g,p,m,v,b=this,x=b.chart,y=b.options,_=y.gridLines,k=y.position,w=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,C=S.length+(w?1:0),P=Li(_),A=[],D=_.drawBorder?Ti(_.lineWidth,0,0):0,T=D/2,I=ct._alignPixel,F=function(t){return I(x,t,D)};for("top"===k?(e=F(b.bottom),s=b.bottom-P,u=e-T,h=F(t.top)+T,f=t.bottom):"bottom"===k?(e=F(b.top),h=t.top,f=F(t.bottom)-T,s=e+T,u=b.top+P):"left"===k?(e=F(b.right),o=b.right-P,l=e-T,d=F(t.left)+T,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-T,o=e+T,l=b.left+P),i=0;i<C;++i)n=S[i]||{},Ai(n.label)&&i<S.length||(i===b.zeroLineIndex&&y.offset===w?(g=_.zeroLineWidth,p=_.zeroLineColor,m=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=Ti(_.lineWidth,i,1),p=Ti(_.color,i,"rgba(0,0,0,0.1)"),m=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=Ii(b,n._index||i,w))&&(r=I(x,a,g),M?o=l=d=c=r:s=u=h=f=r,A.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:p,borderDash:m,borderDashOffset:v})));return A.ticksLength=C,A.borderValue=e,A},_computeLabelItems:function(){var t,e,i,n,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,p=f.position,m=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,x=zi(g),y=g.padding,_=Li(f.gridLines),k=-ct.toRadians(c.labelRotation),w=[];for("top"===p?(r=c.bottom-_-y,o=k?"left":"center"):"bottom"===p?(r=c.top+_+y,o=k?"right":"center"):"left"===p?(a=c.right-(m?0:_)-y,o=m?"left":"right"):(a=c.left+(m?0:_)+y,o=m?"right":"left"),t=0,e=b.length;t<e;++t)n=(i=b[t]).label,Ai(n)||(s=c.getPixelForTick(i._index||t)+g.labelOffset,u=(l=i.major?x.major:x.minor).lineHeight,d=Pi(n)?n.length:1,v?(a=s,h="top"===p?((k?1:.5)-d)*u:(k?0:.5)*u):(r=s,h=(1-d)*u/2),w.push({x:a,y:r,rotation:k,label:n,font:l,textOffset:h,textAlign:o}));return w},_drawGrid:function(t){var e=this,i=e.options.gridLines;if(i.display){var n,a,r,o,s,l=e.ctx,u=e.chart,d=ct._alignPixel,h=i.drawBorder?Ti(i.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)n=(s=c[r]).width,a=s.color,n&&a&&(l.save(),l.lineWidth=n,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),i.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),i.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,p,m,v=h,b=Ti(i.lineWidth,c.ticksLength-1,1),x=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,p=m=x):(p=d(u,e.top,v)-v/2,m=d(u,e.bottom,b)+b/2,f=g=x),l.lineWidth=h,l.strokeStyle=Ti(i.color,0),l.beginPath(),l.moveTo(f,p),l.lineTo(g,m),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,i,n,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,n=d.length;e<n;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,Pi(s))for(i=0,a=s.length;i<a;++i)u.fillText(""+s[i],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,i=t.options,n=i.scaleLabel;if(n.display){var a,r,o=Di(n.fontColor,st.global.defaultFontColor),s=ct.options._parseFont(n),l=ct.options.toPadding(n.padding),u=s.lineHeight/2,d=i.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(n.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,i=e.ticks&&e.ticks.z||0,n=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&i!==n&&t.draw===t._draw?[{z:n,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:i,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:i,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,i=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter(function(n){return(!t||n.type===t)&&(i?n.xAxisID===e.id:n.yAxisID===e.id)})}});Ei.prototype._draw=Ei.prototype.draw;var Vi=Ei,Wi=ct.isNullOrUndef,Hi=Vi.extend({determineDataLimits:function(){var t,e=this,i=e._getLabels(),n=e.options.ticks,a=n.min,r=n.max,o=0,s=i.length-1;void 0!==a&&(t=i.indexOf(a))>=0&&(o=t),void 0!==r&&(t=i.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=i[o],e.max=i[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,i=this.maxIndex;this.ticks=0===e&&i===t.length-1?t:t.slice(e,i+1)},getLabelForIndex:function(t,e){var i=this.chart;return i.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(i.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,i=t.ticks;Vi.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),i&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(i.length-(e?0:1),1))},getPixelForValue:function(t,e,i){var n,a,r,o=this;return Wi(e)||Wi(i)||(t=o.chart.data.datasets[i].data[e]),Wi(t)||(n=o.isHorizontal()?t.x:t.y),(void 0!==n||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=ct.valueOrDefault(n,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),ji={position:"bottom"};Hi._defaults=ji;var qi=ct.noop,Ui=ct.isNullOrUndef;var Yi=Vi.extend({getRightValue:function(t){return"string"==typeof t?+t:Vi.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=ct.sign(t.min),n=ct.sign(t.max);i<0&&n<0?t.max=0:i>0&&n>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,i=e.stepSize,n=e.maxTicksLimit;return i?t=Math.ceil(this.max/i)-Math.floor(this.min/i)+1:(t=this._computeTickLimit(),n=n||11),n&&(t=Math.min(n,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:qi,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:ct.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var i,n,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=ct.niceNum((g-f)/u/l)*l;if(p<1e-14&&Ui(d)&&Ui(h))return[f,g];(r=Math.ceil(g/p)-Math.floor(f/p))>u&&(p=ct.niceNum(r*p/u/l)*l),s||Ui(c)?i=Math.pow(10,ct._decimalPlaces(p)):(i=Math.pow(10,c),p=Math.ceil(p*i)/i),n=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!Ui(d)&&ct.almostWhole(d/p,p/1e3)&&(n=d),!Ui(h)&&ct.almostWhole(h/p,p/1e3)&&(a=h)),r=(a-n)/p,r=ct.almostEquals(r,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),n=Math.round(n*i)/i,a=Math.round(a*i)/i,o.push(Ui(d)?n:d);for(var m=1;m<r;++m)o.push(Math.round((n+m*p)*i)/i);return o.push(Ui(h)?a:h),o}(n,t);t.handleDirectionalChanges(),t.max=ct.max(a),t.min=ct.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),Vi.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,i=e.getTicks(),n=e.min,a=e.max;Vi.prototype._configure.call(e),e.options.offset&&i.length&&(n-=t=(a-n)/Math.max(i.length-1,1)/2,a+=t),e._startValue=n,e._endValue=a,e._valueRange=a-n}}),Gi={position:"left",ticks:{callback:Ci.formatters.linear}};function Xi(t,e,i,n){var a,r,o=t.options,s=function(t,e,i){var n=[i.type,void 0===e&&void 0===i.stack?i.index:"",i.stack].join(".");return void 0===t[n]&&(t[n]={pos:[],neg:[]}),t[n]}(e,o.stacked,i),l=s.pos,u=s.neg,d=n.length;for(a=0;a<d;++a)r=t._parseValue(n[a]),isNaN(r.min)||isNaN(r.max)||i.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function Ki(t,e,i){var n,a,r=i.length;for(n=0;n<r;++n)a=t._parseValue(i[n]),isNaN(a.min)||isNaN(a.max)||e.data[n].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var Zi=Yi.extend({determineDataLimits:function(){var t,e,i,n,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)i=o[(e=s[t]).index].data,l?Xi(a,u,e,i):Ki(a,e,i);ct.each(u,function(t){n=t.pos.concat(t.neg),a.min=Math.min(a.min,ct.min(n)),a.max=Math.max(a.max,ct.max(n))}),a.min=ct.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=ct.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=ct.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),$i=Gi;Zi._defaults=$i;var Ji=ct.valueOrDefault,Qi=ct.math.log10;var tn={position:"left",ticks:{callback:Ci.formatters.logarithmic}};function en(t,e){return ct.isFinite(t)&&t>=0?t:e}var nn=Vi.extend({determineDataLimits:function(){var t,e,i,n,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(n=u[t].data).length;a<r;a++){var p=f[g];i=o._parseValue(n[a]),isNaN(i.min)||isNaN(i.max)||e.data[a].hidden||i.min<0||i.max<0||(p[a]=p[a]||0,p[a]+=i.max)}}ct.each(f,function(t){if(t.length>0){var e=ct.min(t),i=ct.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,i)}})}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(n=u[t].data).length;a<r;a++)i=o._parseValue(n[a]),isNaN(i.min)||isNaN(i.max)||e.data[a].hidden||i.min<0||i.max<0||(o.min=Math.min(i.min,o.min),o.max=Math.max(i.max,o.max),0!==i.min&&(o.minNotZero=Math.min(i.min,o.minNotZero)));o.min=ct.isFinite(o.min)?o.min:null,o.max=ct.isFinite(o.max)?o.max:null,o.minNotZero=ct.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=en(e.min,t.min),t.max=en(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(Qi(t.min))-1),t.max=Math.pow(10,Math.floor(Qi(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(Qi(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(Qi(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(Qi(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:en(e.min),max:en(e.max)},a=t.ticks=function(t,e){var i,n,a=[],r=Ji(t.min,Math.pow(10,Math.floor(Qi(e.min)))),o=Math.floor(Qi(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(i=Math.floor(Qi(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),a.push(r),r=n*Math.pow(10,i)):(i=Math.floor(Qi(r)),n=Math.floor(r/Math.pow(10,i)));var l=i<0?Math.pow(10,Math.abs(i)):1;do{a.push(r),10===++n&&(n=1,l=++i>=0?1:l),r=Math.round(n*Math.pow(10,i)*l)/l}while(i<o||i===o&&n<s);var u=Ji(t.max,r);return a.push(u),a}(n,t);t.max=ct.max(a),t.min=ct.min(a),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),Vi.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(Qi(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,i=0;Vi.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),i=Ji(t.options.ticks.fontSize,st.global.defaultFontSize)/t._length),t._startValue=Qi(e),t._valueOffset=i,t._valueRange=(Qi(t.max)-Qi(e))/(1-i)},getPixelForValue:function(t){var e=this,i=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(i=(Qi(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(i)},getValueForPixel:function(t){var e=this,i=e.getDecimalForPixel(t);return 0===i&&0===e.min?0:Math.pow(10,e._startValue+(i-e._valueOffset)*e._valueRange)}}),an=tn;nn._defaults=an;var rn=ct.valueOrDefault,on=ct.valueAtIndexOrDefault,sn=ct.options.resolve,ln={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:Ci.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function un(t){var e=t.ticks;return e.display&&t.display?rn(e.fontSize,st.global.defaultFontSize)+2*e.backdropPaddingY:0}function dn(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i,end:e}:{start:e,end:e+i}}function hn(t){return 0===t||180===t?"center":t<180?"left":"right"}function cn(t,e,i,n){var a,r,o=i.y+n/2;if(ct.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],i.x,o),o+=n;else t.fillText(e,i.x,o)}function fn(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function gn(t){return ct.isNumber(t)?t:0}var pn=Yi.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=un(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;ct.each(e.data.datasets,function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);ct.each(a.data,function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(i=Math.min(r,i),n=Math.max(r,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/un(this.options))},convertTicksToLabels:function(){var t=this;Yi.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map(function(){var e=ct.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""})},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,i,n,a=ct.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){n=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],i=ct.isArray(u)?{w:ct.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=i;var h=t.getIndexAngle(e),c=ct.toDegrees(h)%360,f=dn(c,n.x,i.w,0,180),g=dn(c,n.y,i.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,i){var n=this,a=e.l/Math.sin(i.l),r=Math.max(e.r-n.width,0)/Math.sin(i.r),o=-e.t/Math.cos(i.t),s=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);a=gn(a),r=gn(r),o=gn(o),s=gn(s),n.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),n.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,i,n){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=i+a.drawingArea,l=a.height-a.paddingTop-n-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,i=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(i<0?i+360:i)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(ct.isNullOrUndef(t))return NaN;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,i=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&i<0?i:e>0&&i>0?e:0)},_drawGrid:function(){var t,e,i,n=this,a=n.ctx,r=n.options,o=r.gridLines,s=r.angleLines,l=rn(s.lineWidth,o.lineWidth),u=rn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,i=t.options,n=i.pointLabels,a=un(i),r=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),o=ct.options._parseFont(n);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=on(n.fontColor,s,st.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=ct.toDegrees(h);e.textAlign=hn(c),fn(c,t._pointLabelSizes[s],u),cn(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(n),o.display&&ct.each(n.ticks,function(t,i){0!==i&&(e=n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]),function(t,e,i,n){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=on(e.color,n-1),u=on(e.lineWidth,n-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI);else{a=t.getPointPosition(0,i),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,i),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(n,o,e,i))}),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(sn([s.borderDash,o.borderDash,[]])),a.lineDashOffset=sn([s.borderDashOffset,o.borderDashOffset,0])),t=n.chart.data.labels.length-1;t>=0;t--)e=n.getDistanceFromCenterForValue(r.ticks.reverse?n.min:n.max),i=n.getPointPosition(t,e),a.beginPath(),a.moveTo(n.xCenter,n.yCenter),a.lineTo(i.x,i.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,i=t.options.ticks;if(i.display){var n,a,r=t.getIndexAngle(0),o=ct.options._parseFont(i),s=rn(i.fontColor,st.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",ct.each(t.ticks,function(r,l){(0!==l||i.reverse)&&(n=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),i.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=i.backdropColor,e.fillRect(-a/2-i.backdropPaddingX,-n-o.size/2-i.backdropPaddingY,a+2*i.backdropPaddingX,o.size+2*i.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-n))}),e.restore()}},_drawTitle:ct.noop}),mn=ln;pn._defaults=mn;var vn=ct._deprecated,bn=ct.options.resolve,xn=ct.valueOrDefault,yn=Number.MIN_SAFE_INTEGER||-9007199254740991,_n=Number.MAX_SAFE_INTEGER||9007199254740991,kn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},wn=Object.keys(kn);function Mn(t,e){return t-e}function Sn(t){return ct.valueOrDefault(t.time.min,t.ticks.min)}function Cn(t){return ct.valueOrDefault(t.time.max,t.ticks.max)}function Pn(t,e,i,n){var a=function(t,e,i){for(var n,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(n=o+s>>1)-1]||null,r=t[n],!a)return{lo:null,hi:r};if(r[e]<i)o=n+1;else{if(!(a[e]>i))return{lo:a,hi:r};s=n-1}}return{lo:r,hi:null}}(t,e,i),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(i-r[e])/s:0,u=(o[n]-r[n])*l;return r[n]+u}function An(t,e){var i=t._adapter,n=t.options.time,a=n.parser,r=a||n.format,o=e;return"function"==typeof a&&(o=a(o)),ct.isFinite(o)||(o="string"==typeof r?i.parse(o,r):i.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),ct.isFinite(o)||(o=i.parse(o))),o)}function Dn(t,e){if(ct.isNullOrUndef(e))return null;var i=t.options.time,n=An(t,t.getRightValue(e));return null===n?n:(i.round&&(n=+t._adapter.startOf(n,i.round)),n)}function Tn(t,e,i,n){var a,r,o,s=wn.length;for(a=wn.indexOf(t);a<s-1;++a)if(o=(r=kn[wn[a]]).steps?r.steps:_n,r.common&&Math.ceil((i-e)/(o*r.size))<=n)return wn[a];return wn[s-1]}function In(t,e,i){var n,a,r=[],o={},s=e.length;for(n=0;n<s;++n)o[a=e[n]]=n,r.push({value:a,major:!1});return 0!==s&&i?function(t,e,i,n){var a,r,o=t._adapter,s=+o.startOf(e[0].value,n),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,n))(r=i[a])>=0&&(e[r].major=!0);return e}(t,r,o,i):r}var Fn=Vi.extend({initialize:function(){this.mergeTicksOptions(),Vi.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,i=e.time||(e.time={}),n=t._adapter=new Si._date(e.adapters.date);return vn("time scale",i.format,"time.format","time.parser"),vn("time scale",i.min,"time.min","ticks.min"),vn("time scale",i.max,"time.max","ticks.max"),ct.mergeIf(i.displayFormats,n.formats()),Vi.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),Vi.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=_n,f=yn,g=[],p=[],m=[],v=s._getLabels();for(t=0,i=v.length;t<i;++t)m.push(Dn(s,v[t]));for(t=0,i=(l.data.datasets||[]).length;t<i;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,ct.isObject(a[0]))for(p[t]=[],e=0,n=a.length;e<n;++e)r=Dn(s,a[e]),g.push(r),p[t][e]=r;else p[t]=m.slice(0),o||(g=g.concat(m),o=!0);else p[t]=[];m.length&&(c=Math.min(c,m[0]),f=Math.max(f,m[m.length-1])),g.length&&(g=i>1?function(t){var e,i,n,a={},r=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,r.push(n));return r}(g).sort(Mn):g.sort(Mn),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=Dn(s,Sn(d))||c,f=Dn(s,Cn(d))||f,c=c===_n?+u.startOf(Date.now(),h):c,f=f===yn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:p,labels:m}},buildTicks:function(){var t,e,i,n=this,a=n.min,r=n.max,o=n.options,s=o.ticks,l=o.time,u=n._timestamps,d=[],h=n.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,i,n){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||Tn(s.minUnit,e,i,n),u=bn([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(i,e,l)>1e5*u)throw e+" and "+i+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<i;a=+r.add(a,u,l))c.push(a);return a!==i&&"ticks"!==o.bounds||c.push(a),c}(n,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=Dn(n,Sn(o))||a,r=Dn(n,Cn(o))||r,t=0,e=u.length;t<e;++t)(i=u[t])>=a&&i<=r&&d.push(i);return n.min=a,n.max=r,n._unit=l.unit||(s.autoSkip?Tn(l.minUnit,n.min,n.max,h):function(t,e,i,n,a){var r,o;for(r=wn.length-1;r>=wn.indexOf(i);r--)if(o=wn[r],kn[o].common&&t._adapter.diff(a,n,o)>=e-1)return o;return wn[i?wn.indexOf(i):0]}(n,d.length,l.minUnit,n.min,n.max)),n._majorUnit=s.major.enabled&&"year"!==n._unit?function(t){for(var e=wn.indexOf(t)+1,i=wn.length;e<i;++e)if(kn[wn[e]].common)return wn[e]}(n._unit):void 0,n._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<i&&d.push(s);for(d.push(i),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(n._timestamps.data,a,r,f),n._offsets=function(t,e,i,n,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=Pn(t,"time",e[0],"pos"),s=1===e.length?1-r:(Pn(t,"time",e[1],"pos")-r)/2,o=Pn(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-Pn(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(n._table,d,0,0,o),s.reverse&&d.reverse(),In(n,d,n._majorUnit)},getLabelForIndex:function(t,e){var i=this,n=i._adapter,a=i.chart.data,r=i.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return ct.isObject(s)&&(o=i.getRightValue(s)),r.tooltipFormat?n.format(An(i,o),r.tooltipFormat):"string"==typeof o?o:n.format(An(i,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,i,n){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=i[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,n||(c?u:s)),g=c?h.major:h.minor,p=bn([g.callback,g.userCallback,h.callback,h.userCallback]);return p?p(f,e,i):f},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(t[e].value,e,t));return n},getPixelForOffset:function(t){var e=this._offsets,i=Pn(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+i)*e.factor)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=Dn(this,t)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end,n=Pn(this._table,"pos",i,"time");return this._adapter._create(n)},_getLabelSize:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=ct.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),r=Math.sin(n),o=xn(e.fontSize,st.global.defaultFontSize);return{w:i*a+o*r,h:i*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,i=e.options.time,n=i.displayFormats,a=n[i.unit]||n.millisecond,r=e.tickFormatFunction(t,0,In(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),Ln={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};Fn._defaults=Ln;var On={category:Hi,linear:Zi,logarithmic:nn,radialLinear:pn,time:Fn},Rn={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};Si._date.override("function"==typeof t?{_id:"moment",formats:function(){return Rn},parse:function(e,i){return"string"==typeof e&&"string"==typeof i?e=t(e,i):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,i){return t(e).format(i)},add:function(e,i,n){return t(e).add(i,n).valueOf()},diff:function(e,i,n){return t(e).diff(t(i),n)},startOf:function(e,i,n){return e=t(e),"isoWeek"===i?e.isoWeekday(n).valueOf():e.startOf(i).valueOf()},endOf:function(e,i){return t(e).endOf(i).valueOf()},_create:function(e){return t(e)}}:{}),st._set("global",{plugins:{filler:{propagate:!0}}});var zn={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return ct.isArray(e)?function(t,i){return e[i]}:function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function Nn(t,e,i){var n,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(n=parseFloat(r,10),isFinite(n)&&Math.floor(n)===n)return"-"!==r[0]&&"+"!==r[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function Bn(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,i,n,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,i=s.ticks.reverse?o.min:o.max,n=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:i):o.getBasePosition(a),s.gridLines.circular&&(r.cx=n.x,r.cy=n.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?r=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?r=i.scaleZero:n.getBasePixel&&(r=n.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(ct.isFinite(r))return{x:(e=n.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function En(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function Vn(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),zn[i](t))}function Wn(t){return t&&!t.skip}function Hn(t,e,i,n,a){var r,o,s,l;if(n&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<n;++r)ct.canvas.lineTo(t,e[r-1],e[r]);if(void 0===i[0].angle)for(t.lineTo(i[a-1].x,i[a-1].y),r=a-1;r>0;--r)ct.canvas.lineTo(t,i[r],i[r-1],!0);else for(o=i[0].cx,s=i[0].cy,l=Math.sqrt(Math.pow(i[0].x-o,2)+Math.pow(i[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,i[r].angle,i[r-1].angle,!0)}}function jn(t,e,i,n,a,r){var o,s,l,u,d,h,c,f,g=e.length,p=n.spanGaps,m=[],v=[],b=0,x=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=i(u=e[l=o%g]._view,l,n),h=Wn(u),c=Wn(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=m.push(u),x=v.push(d)):b&&x&&(p?(h&&m.push(u),c&&v.push(d)):(Hn(t,m,v,b,x),b=x=0,m=[],v=[]));Hn(t,m,v,b,x),t.closePath(),t.fillStyle=a,t.fill()}var qn={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(n=0;n<o;++n)r=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a._model&&a instanceof Yt.Line&&(r={visible:t.isDatasetVisible(n),fill:Nn(a,n,o),chart:t,el:a}),i.$filler=r,l.push(r);for(n=0;n<o;++n)(r=l[n])&&(r.fill=En(l,n,s),r.boundary=Bn(r),r.mapper=Vn(r))},beforeDatasetsDraw:function(t){var e,i,n,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(i=l.length-1;i>=0;--i)(e=l[i].$filler)&&e.visible&&(a=(n=e.el)._view,r=n._children||[],o=e.mapper,s=a.backgroundColor||st.global.defaultColor,o&&s&&r.length&&(ct.canvas.clipArea(u,t.chartArea),jn(u,r,o,a,s,n._loop),ct.canvas.unclipArea(u)))}},Un=ct.rtl.getRtlAdapter,Yn=ct.noop,Gn=ct.valueOrDefault;function Xn(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}st._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,i=t.options.legend||{},n=i.labels&&i.labels.usePointStyle;return t._getSortedDatasetMetas().map(function(i,a){var r=i.controller.getStyle(n?0:void 0);return{text:e[i.index].label,fillStyle:r.backgroundColor,hidden:!t.isDatasetVisible(a),lineCap:r.borderCapStyle,lineDash:r.borderDash,lineDashOffset:r.borderDashOffset,lineJoin:r.borderJoinStyle,lineWidth:r.borderWidth,strokeStyle:r.borderColor,pointStyle:r.pointStyle,rotation:r.rotation,datasetIndex:a}},this)}}},legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,i=r.length;e<i;e++)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&n.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Kn=xt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Yn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:Yn,beforeSetDimensions:Yn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Yn,beforeBuildLabels:Yn,buildLabels:function(){var t=this,e=t.options.labels||{},i=ct.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:Yn,beforeFit:Yn,fit:function(){var t=this,e=t.options,i=e.labels,n=e.display,a=t.ctx,r=ct.options._parseFont(i),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=n?10:0):(l.width=n?10:0,l.height=t.maxHeight),n){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",ct.each(t.legendItems,function(t,e){var n=Xn(i,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+n+2*i.padding>l.width)&&(h+=o+i.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:n,height:o},d[d.length-1]+=n+i.padding}),l.height+=h}else{var c=i.padding,f=t.columnWidths=[],g=t.columnHeights=[],p=i.padding,m=0,v=0;ct.each(t.legendItems,function(t,e){var n=Xn(i,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(p+=m+i.padding,f.push(m),g.push(v),m=0,v=0),m=Math.max(m,n),v+=o+c,s[e]={left:0,top:0,width:n,height:o}}),p+=m,f.push(m),g.push(v),l.width+=p}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Yn,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,n=st.global,a=n.defaultColor,r=n.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=Un(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Gn(i.fontColor,n.defaultFontColor),g=ct.options._parseFont(i),p=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var m=Xn(i,p),v=t.legendHitBoxes,b=function(t,n){switch(e.align){case"start":return i.padding;case"end":return t-n;default:return(t-n+i.padding)/2}},x=t.isHorizontal();d=x?{x:t.left+b(l,u[0]),y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+b(o,s[0]),line:0},ct.rtl.overrideTextDirection(t.ctx,e.textDirection);var y=p+i.padding;ct.each(t.legendItems,function(e,n){var f=c.measureText(e.text).width,g=m+p/2+f,_=d.x,k=d.y;h.setWidth(t.minSize.width),x?n>0&&_+g+i.padding>t.left+t.minSize.width&&(k=d.y+=y,d.line++,_=d.x=t.left+b(l,u[d.line])):n>0&&k+y>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+i.padding,d.line++,k=d.y=t.top+b(o,s[d.line]));var w=h.x(_);!function(t,e,n){if(!(isNaN(m)||m<=0)){c.save();var o=Gn(n.lineWidth,r.borderWidth);if(c.fillStyle=Gn(n.fillStyle,a),c.lineCap=Gn(n.lineCap,r.borderCapStyle),c.lineDashOffset=Gn(n.lineDashOffset,r.borderDashOffset),c.lineJoin=Gn(n.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Gn(n.strokeStyle,a),c.setLineDash&&c.setLineDash(Gn(n.lineDash,r.borderDash)),i&&i.usePointStyle){var s=m*Math.SQRT2/2,l=h.xPlus(t,m/2),u=e+p/2;ct.canvas.drawPoint(c,n.pointStyle,s,l,u,n.rotation)}else c.fillRect(h.leftForLtr(t,m),e,m,p),0!==o&&c.strokeRect(h.leftForLtr(t,m),e,m,p);c.restore()}}(w,k,e),v[n].left=h.leftForLtr(w,v[n].width),v[n].top=k,function(t,e,i,n){var a=p/2,r=h.xPlus(t,m+a),o=e+a;c.fillText(i.text,r,o),i.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,n),o),c.stroke())}(w,k,e,f),x?d.x+=g+i.padding:d.y+=y}),ct.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var i,n,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,i=0;i<a.length;++i)if(t>=(n=a[i]).left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height)return r.legendItems[i];return null},handleEvent:function(t){var e,i=this,n=i.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!n.onHover&&!n.onLeave)return}else{if("click"!==a)return;if(!n.onClick)return}e=i._getLegendItemAt(t.x,t.y),"click"===a?e&&n.onClick&&n.onClick.call(i,t.native,e):(n.onLeave&&e!==i._hoveredItem&&(i._hoveredItem&&n.onLeave.call(i,t.native,i._hoveredItem),i._hoveredItem=e),n.onHover&&e&&n.onHover.call(i,t.native,e))}});function Zn(t,e){var i=new Kn({ctx:t.ctx,options:e,chart:t});Re.configure(t,i,e),Re.addBox(t,i),t.legend=i}var $n={id:"legend",_element:Kn,beforeInit:function(t){var e=t.options.legend;e&&Zn(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(ct.mergeIf(e,st.global.legend),i?(Re.configure(t,i,e),i.options=e):Zn(t,e)):i&&(Re.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}},Jn=ct.noop;st._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Qn=xt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Jn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:Jn,beforeSetDimensions:Jn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Jn,beforeBuildLabels:Jn,buildLabels:Jn,afterBuildLabels:Jn,beforeFit:Jn,fit:function(){var t,e=this,i=e.options,n=e.minSize={},a=e.isHorizontal();i.display?(t=(ct.isArray(i.text)?i.text.length:1)*ct.options._parseFont(i).lineHeight+2*i.padding,e.width=n.width=a?e.maxWidth:t,e.height=n.height=a?t:e.maxHeight):e.width=n.width=e.height=n.height=0},afterFit:Jn,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=t.options;if(i.display){var n,a,r,o=ct.options._parseFont(i),s=o.lineHeight,l=s/2+i.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=ct.valueOrDefault(i.fontColor,st.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,n=f-h):(a="left"===i.position?h+l:f-l,r=d+(c-d)/2,n=c-d,u=Math.PI*("left"===i.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=i.text;if(ct.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,n),p+=s;else e.fillText(g,0,0,n);e.restore()}}});function ta(t,e){var i=new Qn({ctx:t.ctx,options:e,chart:t});Re.configure(t,i,e),Re.addBox(t,i),t.titleBlock=i}var ea={},ia=qn,na=$n,aa={id:"title",_element:Qn,beforeInit:function(t){var e=t.options.title;e&&ta(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(ct.mergeIf(e,st.global.title),i?(Re.configure(t,i,e),i.options=e):ta(t,e)):i&&(Re.removeBox(t,i),delete t.titleBlock)}};for(var ra in ea.filler=ia,ea.legend=na,ea.title=aa,ki.helpers=ct,function(){function t(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function e(t){return null!=t&&"none"!==t}function i(i,n,a){var r=document.defaultView,o=ct._getParentNode(i),s=r.getComputedStyle(i)[n],l=r.getComputedStyle(o)[n],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,i,a):h,d?t(l,o,a):h):"none"}ct.where=function(t,e){if(ct.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return ct.each(t,function(t){e(t)&&i.push(t)}),i},ct.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},ct.findNextWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},ct.findPreviousWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},ct.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},ct.almostEquals=function(t,e,i){return Math.abs(t-e)<i},ct.almostWhole=function(t,e){var i=Math.round(t);return i-e<=t&&i+e>=t},ct.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},ct.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},ct.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},ct.toRadians=function(t){return t*(Math.PI/180)},ct.toDegrees=function(t){return t*(180/Math.PI)},ct._decimalPlaces=function(t){if(ct.isFinite(t)){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}},ct.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},ct.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},ct.aliasPixel=function(t){return t%2==0?0:.5},ct._alignPixel=function(t,e,i){var n=t.currentDevicePixelRatio,a=i/2;return Math.round((e-a)*n)/n+a},ct.splineCurve=function(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=n*(u=isNaN(u)?0:u),c=n*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},ct.EPSILON=Number.EPSILON||1e-14,ct.splineCurveMonotone=function(t){var e,i,n,a,r,o,s,l,u,d=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=d.length;for(e=0;e<h;++e)if(!(n=d[e]).model.skip){if(i=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-n.model.x;n.deltaK=0!==c?(a.model.y-n.model.y)/c:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=d[e],a=d[e+1],n.model.skip||a.model.skip||(ct.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(r=n.mK/n.deltaK,o=a.mK/n.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),n.mK=r*s*n.deltaK,a.mK=o*s*n.deltaK)));for(e=0;e<h;++e)(n=d[e]).model.skip||(i=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,i&&!i.model.skip&&(u=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-u,n.model.controlPointPreviousY=n.model.y-u*n.mK),a&&!a.model.skip&&(u=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+u,n.model.controlPointNextY=n.model.y+u*n.mK))},ct.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},ct.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},ct.niceNum=function(t,e){var i=Math.floor(ct.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},ct.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},ct.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(i=s[0].clientX,n=s[0].clientY):(i=a.clientX,n=a.clientY);var l=parseFloat(ct.getStyle(r,"padding-left")),u=parseFloat(ct.getStyle(r,"padding-top")),d=parseFloat(ct.getStyle(r,"padding-right")),h=parseFloat(ct.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:i=Math.round((i-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},ct.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},ct.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},ct._calculatePadding=function(t,e,i){return(e=ct.getStyle(t,e)).indexOf("%")>-1?i*parseInt(e,10)/100:parseInt(e,10)},ct._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},ct.getMaximumWidth=function(t){var e=ct._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,n=i-ct._calculatePadding(e,"padding-left",i)-ct._calculatePadding(e,"padding-right",i),a=ct.getConstraintWidth(t);return isNaN(a)?n:Math.min(n,a)},ct.getMaximumHeight=function(t){var e=ct._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,n=i-ct._calculatePadding(e,"padding-top",i)-ct._calculatePadding(e,"padding-bottom",i),a=ct.getConstraintHeight(t);return isNaN(a)?n:Math.min(n,a)},ct.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},ct.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,r=t.width;n.height=a*i,n.width=r*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=r+"px")}},ct.fontString=function(t,e,i){return e+" "+t+"px "+i},ct.longestText=function(t,e,i,n){var a=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},r=n.garbageCollect=[],n.font=e),t.font=e;var o,s,l,u,d,h=0,c=i.length;for(o=0;o<c;o++)if(null!=(u=i[o])&&!0!==ct.isArray(u))h=ct.measureText(t,a,r,h,u);else if(ct.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||ct.isArray(d)||(h=ct.measureText(t,a,r,h,d));var f=r.length/2;if(f>i.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},ct.measureText=function(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),r>n&&(n=r),n},ct.numberOfLabelLines=function(t){var e=1;return ct.each(t,function(t){ct.isArray(t)&&t.length>e&&(e=t.length)}),e},ct.color=G?function(t){return t instanceof CanvasGradient&&(t=st.global.defaultColor),G(t)}:function(t){return console.error("Color.js not found!"),t},ct.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:ct.color(t).saturate(.5).darken(.1).rgbString()}}(),ki._adapters=Si,ki.Animation=_t,ki.animationService=kt,ki.controllers=xe,ki.DatasetController=Pt,ki.defaults=st,ki.Element=xt,ki.elements=Yt,ki.Interaction=Ce,ki.layouts=Re,ki.platform=ti,ki.plugins=ei,ki.Scale=Vi,ki.scaleService=ii,ki.Ticks=Ci,ki.Tooltip=fi,ki.helpers.each(On,function(t,e){ki.scaleService.registerScaleType(e,t,t._defaults)}),ea)ea.hasOwnProperty(ra)&&ki.plugins.register(ea[ra]);ki.platform.initialize();var oa=ki;return"undefined"!=typeof window&&(window.Chart=ki),ki.Chart=ki,ki.Legend=ea.legend._element,ki.Title=ea.title._element,ki.pluginService=ki.plugins,ki.PluginBase=ki.Element.extend({}),ki.canvasHelpers=ki.helpers.canvas,ki.layoutService=ki.layouts,ki.LinearScaleBase=Yi,ki.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],function(t){ki[t]=function(e,i){return new ki(e,ki.helpers.merge(i||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}}),oa});
/*
 Highmaps JS v8.2.2 (2020-10-22)

 (c) 2011-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(V,O){"object"===typeof module&&module.exports?(O["default"]=O,module.exports=V.document?O(V):O):"function"===typeof define&&define.amd?define("highcharts/highmaps",function(){return O(V)}):(V.Highcharts&&V.Highcharts.error(16,!0),V.Highcharts=O(V))})("undefined"!==typeof window?window:this,function(V){function O(n,h,q,z){n.hasOwnProperty(h)||(n[h]=z.apply(null,q))}var q={};O(q,"Core/Globals.js",[],function(){var n="undefined"!==typeof V?V:"undefined"!==typeof window?window:{},h=n.document,
q=n.navigator&&n.navigator.userAgent||"",z=h&&h.createElementNS&&!!h.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,y=/(edge|msie|trident)/i.test(q)&&!n.opera,F=-1!==q.indexOf("Firefox"),M=-1!==q.indexOf("Chrome"),G=F&&4>parseInt(q.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.2.2",deg2rad:2*Math.PI/360,doc:h,hasBidiBug:G,hasTouch:!!n.TouchEvent,isMS:y,isWebKit:-1!==q.indexOf("AppleWebKit"),isFirefox:F,isChrome:M,isSafari:!M&&-1!==q.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(q),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:z,win:n,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});O(q,"Core/Utilities.js",[q["Core/Globals.js"]],function(n){function h(d,t,a,b){var c=t?"Highcharts error":"Highcharts warning";32===d&&(d=c+": Deprecated member");var f=u(d),J=f?c+" #"+d+": www.highcharts.com/errors/"+d+"/":d.toString();c=function(){if(t)throw Error(J);r.console&&-1===h.messages.indexOf(J)&&
console.log(J)};if("undefined"!==typeof b){var l="";f&&(J+="?");S(b,function(d,t){l+="\n - "+t+": "+d;f&&(J+=encodeURI(t)+"="+encodeURI(d))});J+=l}a?aa(a,"displayError",{code:d,message:J,params:b},c):c();h.messages.push(J)}function q(){var d,t=arguments,a={},b=function(d,t){"object"!==typeof d&&(d={});S(t,function(a,c){!z(a,!0)||v(a)||H(a)?d[c]=t[c]:d[c]=b(d[c]||{},a)});return d};!0===t[0]&&(a=t[1],t=Array.prototype.slice.call(t,2));var c=t.length;for(d=0;d<c;d++)a=b(a,t[d]);return a}function z(d,
t){return!!d&&"object"===typeof d&&(!t||!D(d))}function y(d,t,a){var b;g(t)?p(a)?d.setAttribute(t,a):d&&d.getAttribute&&((b=d.getAttribute(t))||"class"!==t||(b=d.getAttribute(t+"Name"))):S(t,function(t,a){d.setAttribute(a,t)});return b}function F(){for(var d=arguments,t=d.length,a=0;a<t;a++){var b=d[a];if("undefined"!==typeof b&&null!==b)return b}}function M(d,t){if(!d)return t;var a=d.split(".").reverse();if(1===a.length)return t[d];for(d=a.pop();"undefined"!==typeof d&&"undefined"!==typeof t&&null!==
t;)t=t[d],d=a.pop();return t}n.timers=[];var G=n.charts,B=n.doc,r=n.win;(h||(h={})).messages=[];n.error=h;n.merge=q;var m=n.pInt=function(d,t){return parseInt(d,t||10)},g=n.isString=function(d){return"string"===typeof d},D=n.isArray=function(d){d=Object.prototype.toString.call(d);return"[object Array]"===d||"[object Array Iterator]"===d};n.isObject=z;var H=n.isDOMElement=function(d){return z(d)&&"number"===typeof d.nodeType},v=n.isClass=function(d){var t=d&&d.constructor;return!(!z(d,!0)||H(d)||!t||
!t.name||"Object"===t.name)},u=n.isNumber=function(d){return"number"===typeof d&&!isNaN(d)&&Infinity>d&&-Infinity<d},A=n.erase=function(d,t){for(var a=d.length;a--;)if(d[a]===t){d.splice(a,1);break}},p=n.defined=function(d){return"undefined"!==typeof d&&null!==d};n.attr=y;var k=n.splat=function(d){return D(d)?d:[d]},c=n.syncTimeout=function(d,t,a){if(0<t)return setTimeout(d,t,a);d.call(0,a);return-1},e=n.clearTimeout=function(d){p(d)&&clearTimeout(d)},f=n.extend=function(d,t){var a;d||(d={});for(a in t)d[a]=
t[a];return d};n.pick=F;var b=n.css=function(d,t){n.isMS&&!n.svg&&t&&"undefined"!==typeof t.opacity&&(t.filter="alpha(opacity="+100*t.opacity+")");f(d.style,t)},l=n.createElement=function(d,t,a,c,J){d=B.createElement(d);t&&f(d,t);J&&b(d,{padding:"0",border:"none",margin:"0"});a&&b(d,a);c&&c.appendChild(d);return d},a=n.extendClass=function(d,t){var a=function(){};a.prototype=new d;f(a.prototype,t);return a},x=n.pad=function(d,t,a){return Array((t||2)+1-String(d).replace("-","").length).join(a||"0")+
d},E=n.relativeLength=function(d,t,a){return/%$/.test(d)?t*parseFloat(d)/100+(a||0):parseFloat(d)},C=n.wrap=function(d,t,a){var b=d[t];d[t]=function(){var d=Array.prototype.slice.call(arguments),t=arguments,c=this;c.proceed=function(){b.apply(c,arguments.length?arguments:t)};d.unshift(b);d=a.apply(this,d);c.proceed=null;return d}},K=n.format=function(d,t,a){var b="{",c=!1,J=[],f=/f$/,l=/\.([0-9])/,e=n.defaultOptions.lang,w=a&&a.time||n.time;for(a=a&&a.numberFormatter||Q;d;){var P=d.indexOf(b);if(-1===
P)break;var k=d.slice(0,P);if(c){k=k.split(":");b=M(k.shift()||"",t);if(k.length&&"number"===typeof b)if(k=k.join(":"),f.test(k)){var x=parseInt((k.match(l)||["","-1"])[1],10);null!==b&&(b=a(b,x,e.decimalPoint,-1<k.indexOf(",")?e.thousandsSep:""))}else b=w.dateFormat(k,b);J.push(b)}else J.push(k);d=d.slice(P+1);b=(c=!c)?"}":"{"}J.push(d);return J.join("")},T=n.getMagnitude=function(d){return Math.pow(10,Math.floor(Math.log(d)/Math.LN10))},R=n.normalizeTickInterval=function(d,t,a,b,c){var f=d;a=F(a,
1);var l=d/a;t||(t=c?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===b&&(1===a?t=t.filter(function(d){return 0===d%1}):.1>=a&&(t=[1/a])));for(b=0;b<t.length&&!(f=t[b],c&&f*a>=d||!c&&l<=(t[b]+(t[b+1]||t[b]))/2);b++);return f=J(f*a,-Math.round(Math.log(.001)/Math.LN10))},N=n.stableSort=function(d,t){var a=d.length,b,c;for(c=0;c<a;c++)d[c].safeI=c;d.sort(function(d,a){b=t(d,a);return 0===b?d.safeI-a.safeI:b});for(c=0;c<a;c++)delete d[c].safeI},I=n.arrayMin=function(d){for(var t=d.length,a=d[0];t--;)d[t]<
a&&(a=d[t]);return a},w=n.arrayMax=function(d){for(var t=d.length,a=d[0];t--;)d[t]>a&&(a=d[t]);return a},d=n.destroyObjectProperties=function(d,t){S(d,function(a,b){a&&a!==t&&a.destroy&&a.destroy();delete d[b]})},t=n.discardElement=function(d){var t=n.garbageBin;t||(t=l("div"));d&&t.appendChild(d);t.innerHTML=""},J=n.correctFloat=function(d,t){return parseFloat(d.toPrecision(t||14))},P=n.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},Q=
n.numberFormat=function(d,t,a,b){d=+d||0;t=+t;var c=n.defaultOptions.lang,J=(d.toString().split(".")[1]||"").split("e")[0].length,f=d.toString().split("e");if(-1===t)t=Math.min(J,20);else if(!u(t))t=2;else if(t&&f[1]&&0>f[1]){var l=t+ +f[1];0<=l?(f[0]=(+f[0]).toExponential(l).split("e")[0],t=l):(f[0]=f[0].split(".")[0]||0,d=20>t?(f[0]*Math.pow(10,f[1])).toFixed(t):0,f[1]=0)}var e=(Math.abs(f[1]?f[0]:d)+Math.pow(10,-Math.max(t,J)-1)).toFixed(t);J=String(m(e));l=3<J.length?J.length%3:0;a=F(a,c.decimalPoint);
b=F(b,c.thousandsSep);d=(0>d?"-":"")+(l?J.substr(0,l)+b:"");d+=J.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+b);t&&(d+=a+e.slice(-t));f[1]&&0!==+d&&(d+="e"+f[1]);return d};Math.easeInOutSine=function(d){return-.5*(Math.cos(Math.PI*d)-1)};var ba=n.getStyle=function(d,t,a){if("width"===t)return t=Math.min(d.offsetWidth,d.scrollWidth),a=d.getBoundingClientRect&&d.getBoundingClientRect().width,a<t&&a>=t-1&&(t=Math.floor(a)),Math.max(0,t-n.getStyle(d,"padding-left")-n.getStyle(d,"padding-right"));if("height"===
t)return Math.max(0,Math.min(d.offsetHeight,d.scrollHeight)-n.getStyle(d,"padding-top")-n.getStyle(d,"padding-bottom"));r.getComputedStyle||h(27,!0);if(d=r.getComputedStyle(d,void 0))d=d.getPropertyValue(t),F(a,"opacity"!==t)&&(d=m(d));return d},Y=n.inArray=function(d,t,a){h(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return t.indexOf(d,a)},Z=n.find=Array.prototype.find?function(d,t){return d.find(t)}:function(d,t){var a,b=d.length;for(a=0;a<b;a++)if(t(d[a],a))return d[a]};n.keys=function(d){h(32,
!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(d)};var X=n.offset=function(d){var t=B.documentElement;d=d.parentElement||d.parentNode?d.getBoundingClientRect():{top:0,left:0};return{top:d.top+(r.pageYOffset||t.scrollTop)-(t.clientTop||0),left:d.left+(r.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},S=n.objectEach=function(d,t,a){for(var b in d)Object.hasOwnProperty.call(d,b)&&t.call(a||d[b],d[b],b,d)};S({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(d,
t){n[t]=function(a){var b;h(32,!1,void 0,(b={},b["Highcharts."+t]="use Array."+d,b));return Array.prototype[d].apply(a,[].slice.call(arguments,1))}});var W=n.addEvent=function(d,t,a,b){void 0===b&&(b={});var c=d.addEventListener||n.addEventListenerPolyfill;var f="function"===typeof d&&d.prototype?d.prototype.protoEvents=d.prototype.protoEvents||{}:d.hcEvents=d.hcEvents||{};n.Point&&d instanceof n.Point&&d.series&&d.series.chart&&(d.series.chart.runTrackerClick=!0);c&&c.call(d,t,a,!1);f[t]||(f[t]=
[]);f[t].push({fn:a,order:"number"===typeof b.order?b.order:Infinity});f[t].sort(function(d,t){return d.order-t.order});return function(){U(d,t,a)}},U=n.removeEvent=function(d,t,a){function b(t,a){var b=d.removeEventListener||n.removeEventListenerPolyfill;b&&b.call(d,t,a,!1)}function c(a){var c;if(d.nodeName){if(t){var f={};f[t]=!0}else f=a;S(f,function(d,t){if(a[t])for(c=a[t].length;c--;)b(t,a[t][c].fn)})}}var f;["protoEvents","hcEvents"].forEach(function(J,l){var e=(l=l?d:d.prototype)&&l[J];e&&
(t?(f=e[t]||[],a?(e[t]=f.filter(function(d){return a!==d.fn}),b(t,a)):(c(e),e[t]=[])):(c(e),l[J]={}))})},aa=n.fireEvent=function(d,t,a,b){var c;a=a||{};if(B.createEvent&&(d.dispatchEvent||d.fireEvent)){var J=B.createEvent("Events");J.initEvent(t,!0,!0);f(J,a);d.dispatchEvent?d.dispatchEvent(J):d.fireEvent(t,J)}else a.target||f(a,{preventDefault:function(){a.defaultPrevented=!0},target:d,type:t}),function(t,b){void 0===t&&(t=[]);void 0===b&&(b=[]);var f=0,J=0,l=t.length+b.length;for(c=0;c<l;c++)!1===
(t[f]?b[J]?t[f].order<=b[J].order?t[f++]:b[J++]:t[f++]:b[J++]).fn.call(d,a)&&a.preventDefault()}(d.protoEvents&&d.protoEvents[t],d.hcEvents&&d.hcEvents[t]);b&&!a.defaultPrevented&&b.call(d,a)},ca,da=n.uniqueKey=function(){var d=Math.random().toString(36).substring(2,9)+"-",t=0;return function(){return"highcharts-"+(ca?"":d)+t++}}(),ea=n.useSerialIds=function(d){return ca=F(d,ca)},fa=n.isFunction=function(d){return"function"===typeof d},ha=n.getOptions=function(){return n.defaultOptions},ia=n.setOptions=
function(d){n.defaultOptions=q(!0,n.defaultOptions,d);(d.time||d.global)&&n.time.update(q(n.defaultOptions.global,n.defaultOptions.time,d.global,d.time));return n.defaultOptions};r.jQuery&&(r.jQuery.fn.highcharts=function(){var d=[].slice.call(arguments);if(this[0])return d[0]?(new (n[g(d[0])?d.shift():"Chart"])(this[0],d[0],d[1]),this):G[y(this[0],"data-highcharts-chart")]});return{addEvent:W,arrayMax:w,arrayMin:I,attr:y,clamp:function(d,t,a){return d>t?d<a?d:a:t},clearTimeout:e,correctFloat:J,createElement:l,
css:b,defined:p,destroyObjectProperties:d,discardElement:t,erase:A,error:h,extend:f,extendClass:a,find:Z,fireEvent:aa,format:K,getMagnitude:T,getNestedProperty:M,getOptions:ha,getStyle:ba,inArray:Y,isArray:D,isClass:v,isDOMElement:H,isFunction:fa,isNumber:u,isObject:z,isString:g,merge:q,normalizeTickInterval:R,numberFormat:Q,objectEach:S,offset:X,pad:x,pick:F,pInt:m,relativeLength:E,removeEvent:U,setOptions:ia,splat:k,stableSort:N,syncTimeout:c,timeUnits:P,uniqueKey:da,useSerialIds:ea,wrap:C}});O(q,
"Core/Color/Color.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=h.isNumber,z=h.merge,y=h.pInt;"";h=function(){function h(q){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(h){return[y(h[1]),y(h[2]),y(h[3]),parseFloat(h[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(h){return[y(h[1]),y(h[2]),y(h[3]),1]}}];this.rgba=[];if(n.Color!==h)return new n.Color(q);
if(!(this instanceof h))return new h(q);this.init(q)}h.parse=function(n){return new h(n)};h.prototype.init=function(n){var q,B;if((this.input=n=h.names[n&&n.toLowerCase?n.toLowerCase():""]||n)&&n.stops)this.stops=n.stops.map(function(g){return new h(g[1])});else{if(n&&n.charAt&&"#"===n.charAt()){var r=n.length;n=parseInt(n.substr(1),16);7===r?q=[(n&16711680)>>16,(n&65280)>>8,n&255,1]:4===r&&(q=[(n&3840)>>4|(n&3840)>>8,(n&240)>>4|n&240,(n&15)<<4|n&15,1])}if(!q)for(B=this.parsers.length;B--&&!q;){var m=
this.parsers[B];(r=m.regex.exec(n))&&(q=m.parse(r))}}this.rgba=q||[]};h.prototype.get=function(n){var h=this.input,B=this.rgba;if("undefined"!==typeof this.stops){var r=z(h);r.stops=[].concat(r.stops);this.stops.forEach(function(m,g){r.stops[g]=[r.stops[g][0],m.get(n)]})}else r=B&&q(B[0])?"rgb"===n||!n&&1===B[3]?"rgb("+B[0]+","+B[1]+","+B[2]+")":"a"===n?B[3]:"rgba("+B.join(",")+")":h;return r};h.prototype.brighten=function(n){var h,B=this.rgba;if(this.stops)this.stops.forEach(function(r){r.brighten(n)});
else if(q(n)&&0!==n)for(h=0;3>h;h++)B[h]+=y(255*n),0>B[h]&&(B[h]=0),255<B[h]&&(B[h]=255);return this};h.prototype.setOpacity=function(n){this.rgba[3]=n;return this};h.prototype.tweenTo=function(n,h){var B=this.rgba,r=n.rgba;r.length&&B&&B.length?(n=1!==r[3]||1!==B[3],h=(n?"rgba(":"rgb(")+Math.round(r[0]+(B[0]-r[0])*(1-h))+","+Math.round(r[1]+(B[1]-r[1])*(1-h))+","+Math.round(r[2]+(B[2]-r[2])*(1-h))+(n?","+(r[3]+(B[3]-r[3])*(1-h)):"")+")"):h=n.input||"none";return h};h.names={white:"#ffffff",black:"#000000"};
return h}();n.Color=h;n.color=h.parse;return h});O(q,"Core/Animation/Fx.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=n.win,z=h.isNumber,y=h.objectEach;h=function(){function h(h,n,B){this.pos=NaN;this.options=n;this.elem=h;this.prop=B}h.prototype.dSetter=function(){var h=this.paths,n=h&&h[0];h=h&&h[1];var B=[],r=this.now||0;if(1!==r&&n&&h)if(n.length===h.length&&1>r)for(var m=0;m<h.length;m++){for(var g=n[m],D=h[m],H=[],v=0;v<D.length;v++){var u=g[v],A=D[v];H[v]="number"===
typeof u&&"number"===typeof A&&("A"!==D[0]||4!==v&&5!==v)?u+r*(A-u):A}B.push(H)}else B=h;else B=this.toD||[];this.elem.attr("d",B,void 0,!0)};h.prototype.update=function(){var h=this.elem,n=this.prop,B=this.now,r=this.options.step;if(this[n+"Setter"])this[n+"Setter"]();else h.attr?h.element&&h.attr(n,B,null,!0):h.style[n]=B+this.unit;r&&r.call(h,B,this)};h.prototype.run=function(h,G,B){var r=this,m=r.options,g=function(v){return g.stopped?!1:r.step(v)},D=q.requestAnimationFrame||function(v){setTimeout(v,
13)},H=function(){for(var v=0;v<n.timers.length;v++)n.timers[v]()||n.timers.splice(v--,1);n.timers.length&&D(H)};h!==G||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=h,this.end=G,this.unit=B,this.now=this.start,this.pos=0,g.elem=this.elem,g.prop=this.prop,g()&&1===n.timers.push(g)&&D(H)):(delete m.curAnim[this.prop],m.complete&&0===Object.keys(m.curAnim).length&&m.complete.call(this.elem))};h.prototype.step=function(h){var n=+new Date,B=this.options,r=this.elem,m=B.complete,
g=B.duration,D=B.curAnim;if(r.attr&&!r.element)h=!1;else if(h||n>=g+this.startTime){this.now=this.end;this.pos=1;this.update();var H=D[this.prop]=!0;y(D,function(v){!0!==v&&(H=!1)});H&&m&&m.call(r);h=!1}else this.pos=B.easing((n-this.startTime)/g),this.now=this.start+(this.end-this.start)*this.pos,this.update(),h=!0;return h};h.prototype.initPath=function(h,n,B){function r(k,c){for(;k.length<p;){var e=k[0],f=c[p-k.length];f&&"M"===e[0]&&(k[0]="C"===f[0]?["C",e[1],e[2],e[1],e[2],e[1],e[2]]:["L",e[1],
e[2]]);k.unshift(e);H&&k.push(k[k.length-1])}}function m(k,c){for(;k.length<p;)if(c=k[k.length/v-1].slice(),"C"===c[0]&&(c[1]=c[5],c[2]=c[6]),H){var e=k[k.length/v].slice();k.splice(k.length/2,0,c,e)}else k.push(c)}var g=h.startX,D=h.endX;n=n&&n.slice();B=B.slice();var H=h.isArea,v=H?2:1;if(!n)return[B,B];if(g&&D){for(h=0;h<g.length;h++)if(g[h]===D[0]){var u=h;break}else if(g[0]===D[D.length-g.length+h]){u=h;var A=!0;break}else if(g[g.length-1]===D[D.length-g.length+h]){u=g.length-h;break}"undefined"===
typeof u&&(n=[])}if(n.length&&z(u)){var p=B.length+u*v;A?(r(n,B),m(B,n)):(r(B,n),m(n,B))}return[n,B]};h.prototype.fillSetter=function(){h.prototype.strokeSetter.apply(this,arguments)};h.prototype.strokeSetter=function(){this.elem.attr(this.prop,n.color(this.start).tweenTo(n.color(this.end),this.pos),null,!0)};return h}();return n.Fx=h});O(q,"Core/Animation/AnimationUtilities.js",[q["Core/Animation/Fx.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q){var L=q.defined,y=q.getStyle,F=
q.isArray,M=q.isNumber,G=q.isObject,B=q.merge,r=q.objectEach,m=q.pick;q=h.setAnimation=function(u,v){v.renderer.globalAnimation=m(u,v.options.chart.animation,!0)};var g=h.animObject=function(u){return G(u)?h.merge({duration:500,defer:0},u):{duration:u?500:0,defer:0}},D=h.getDeferredAnimation=function(u,v,p){var k=g(v),c=0,e=0;(p?[p]:u.series).forEach(function(f){f=g(f.options.animation);c=v&&L(v.defer)?k.defer:Math.max(c,f.duration+f.defer);e=Math.min(k.duration,f.duration)});u.renderer.forExport&&
(c=0);return{defer:Math.max(0,c-e),duration:Math.min(c,e)}},H=h.animate=function(u,g,p){var k,c="",e,f;if(!G(p)){var b=arguments;p={duration:b[2],easing:b[3],complete:b[4]}}M(p.duration)||(p.duration=400);p.easing="function"===typeof p.easing?p.easing:Math[p.easing]||Math.easeInOutSine;p.curAnim=B(g);r(g,function(b,a){v(u,a);f=new n(u,p,a);e=null;"d"===a&&F(g.d)?(f.paths=f.initPath(u,u.pathArray,g.d),f.toD=g.d,k=0,e=1):u.attr?k=u.attr(a):(k=parseFloat(y(u,a))||0,"opacity"!==a&&(c="px"));e||(e=b);
e&&e.match&&e.match("px")&&(e=e.replace(/px/g,""));f.run(k,e,c)})},v=h.stop=function(v,g){for(var p=h.timers.length;p--;)h.timers[p].elem!==v||g&&g!==h.timers[p].prop||(h.timers[p].stopped=!0)};return{animate:H,animObject:g,getDeferredAnimation:D,setAnimation:q,stop:v}});O(q,"Core/Renderer/SVG/SVGElement.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.animate,L=n.animObject,M=n.stop,G=q.deg2rad,B=q.doc,
r=q.hasTouch,m=q.isFirefox,g=q.noop,D=q.svg,H=q.SVG_NS,v=q.win,u=z.attr,A=z.createElement,p=z.css,k=z.defined,c=z.erase,e=z.extend,f=z.fireEvent,b=z.isArray,l=z.isFunction,a=z.isNumber,x=z.isString,E=z.merge,C=z.objectEach,K=z.pick,T=z.pInt,R=z.syncTimeout,N=z.uniqueKey;"";n=function(){function I(){this.height=this.element=void 0;this.opacity=1;this.renderer=void 0;this.SVG_NS=H;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ");this.width=void 0}I.prototype._defaultGetter=
function(a){a=K(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};I.prototype._defaultSetter=function(a,d,t){t.setAttribute(d,a)};I.prototype.add=function(a){var d=this.renderer,t=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&d.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var b=this.zIndexSetter();b||(a?a.element:d.box).appendChild(t);
if(this.onAdd)this.onAdd();return this};I.prototype.addClass=function(a,d){var t=d?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(d,a){-1===t.indexOf(a)&&d.push(a);return d},t?[t]:[]).join(" ");a!==t&&this.attr("class",a);return this};I.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};I.prototype.align=function(a,d,t){var b,f={};var l=this.renderer;var e=l.alignedObjects;var w,k;if(a){if(this.alignOptions=a,this.alignByTranslate=d,
!t||x(t))this.alignTo=b=t||"renderer",c(e,this),e.push(this),t=void 0}else a=this.alignOptions,d=this.alignByTranslate,b=this.alignTo;t=K(t,l[b],l);b=a.align;l=a.verticalAlign;e=(t.x||0)+(a.x||0);var E=(t.y||0)+(a.y||0);"right"===b?w=1:"center"===b&&(w=2);w&&(e+=(t.width-(a.width||0))/w);f[d?"translateX":"x"]=Math.round(e);"bottom"===l?k=1:"middle"===l&&(k=2);k&&(E+=(t.height-(a.height||0))/k);f[d?"translateY":"y"]=Math.round(E);this[this.placed?"animate":"attr"](f);this.placed=!0;this.alignAttr=
f;return this};I.prototype.alignSetter=function(a){var d={left:"start",center:"middle",right:"end"};d[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",d[a]))};I.prototype.animate=function(a,d,t){var b=this,c=L(K(d,this.renderer.globalAnimation,!0));d=c.defer;K(B.hidden,B.msHidden,B.webkitHidden,!1)&&(c.duration=0);0!==c.duration?(t&&(c.complete=t),R(function(){b.element&&y(b,a,c)},d)):(this.attr(a,void 0,t),C(a,function(d,t){c.step&&c.step.call(this,d,{prop:t,pos:1})},this));return this};
I.prototype.applyTextOutline=function(a){var d=this.element,t;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(d.style.fill)));a=a.split(" ");var b=a[a.length-1];if((t=a[0])&&"none"!==t&&q.svg){this.fakeTS=!0;a=[].slice.call(d.getElementsByTagName("tspan"));this.ySetter=this.xSetter;t=t.replace(/(^[\d\.]+)(.*?)$/g,function(d,t,a){return 2*t+a});this.removeTextOutline(a);var c=d.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(d.textContent):
!1;var f=d.firstChild;a.forEach(function(a,l){0===l&&(a.setAttribute("x",d.getAttribute("x")),l=d.getAttribute("y"),a.setAttribute("y",l||0),null===l&&d.setAttribute("y",0));l=a.cloneNode(!0);u(c&&!m?a:l,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":t,"stroke-linejoin":"round"});d.insertBefore(l,f)});c&&m&&a[0]&&(a=a[0].cloneNode(!0),a.textContent=" ",d.insertBefore(a,f))}};I.prototype.attr=function(a,d,t,b){var c=this.element,f,l=this,J,e,w=this.symbolCustomAttribs;if("string"===
typeof a&&"undefined"!==typeof d){var k=a;a={};a[k]=d}"string"===typeof a?l=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(C(a,function(d,t){J=!1;b||M(this,t);this.symbolName&&-1!==w.indexOf(t)&&(f||(this.symbolAttr(a),f=!0),J=!0);!this.rotation||"x"!==t&&"y"!==t||(this.doTransform=!0);J||(e=this[t+"Setter"]||this._defaultSetter,e.call(this,d,t,c),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(t)&&this.updateShadows(t,d,e))},this),this.afterSetters());
t&&t.call(this);return l};I.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};I.prototype.crisp=function(a,d){d=d||a.strokeWidth||0;var t=Math.round(d)%2/2;a.x=Math.floor(a.x||this.x||0)+t;a.y=Math.floor(a.y||this.y||0)+t;a.width=Math.floor((a.width||this.width||0)-2*t);a.height=Math.floor((a.height||this.height||0)-2*t);k(a.strokeWidth)&&(a.strokeWidth=d);return a};I.prototype.complexColor=function(a,d,t){var c=this.renderer,l,e,w,x,p,v,u,g,
A,m,K=[],r;f(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?e="radialGradient":a.linearGradient&&(e="linearGradient");if(e){w=a[e];p=c.gradients;v=a.stops;A=t.radialReference;b(w)&&(a[e]=w={x1:w[0],y1:w[1],x2:w[2],y2:w[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===e&&A&&!k(w.gradientUnits)&&(x=w,w=E(w,c.getRadialAttr(A,x),{gradientUnits:"userSpaceOnUse"}));C(w,function(d,t){"id"!==t&&K.push(t,d)});C(v,function(d){K.push(d)});K=K.join(",");if(p[K])m=p[K].attr("id");
else{w.id=m=N();var f=p[K]=c.createElement(e).attr(w).add(c.defs);f.radAttr=x;f.stops=[];v.forEach(function(d){0===d[1].indexOf("rgba")?(l=h.parse(d[1]),u=l.get("rgb"),g=l.get("a")):(u=d[1],g=1);d=c.createElement("stop").attr({offset:d[0],"stop-color":u,"stop-opacity":g}).add(f);f.stops.push(d)})}r="url("+c.url+"#"+m+")";t.setAttribute(d,r);t.gradient=K;a.toString=function(){return r}}})};I.prototype.css=function(a){var d=this.styles,t={},b=this.element,c="",f=!d,l=["textOutline","textOverflow","width"];
a&&a.color&&(a.fill=a.color);d&&C(a,function(a,b){d&&d[b]!==a&&(t[b]=a,f=!0)});if(f){d&&(a=e(d,t));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===b.nodeName.toLowerCase()&&a.width)var w=this.textWidth=T(a.width);this.styles=a;w&&!D&&this.renderer.forExport&&delete a.width;if(b.namespaceURI===this.SVG_NS){var k=function(d,t){return"-"+t.toLowerCase()};C(a,function(d,t){-1===l.indexOf(t)&&(c+=t.replace(/([A-Z])/g,k)+":"+d+";")});c&&u(b,"style",c)}else p(b,a);this.added&&
("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};I.prototype.dashstyleSetter=function(a){var d=this["stroke-width"];"inherit"===d&&(d=1);if(a=a&&a.toLowerCase()){var t=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(a=t.length;a--;)t[a]=
""+T(t[a])*K(d,NaN);a=t.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};I.prototype.destroy=function(){var a=this,d=a.element||{},t=a.renderer,b=t.isSVG&&"SPAN"===d.nodeName&&a.parentGroup||void 0,f=d.ownerSVGElement;d.onclick=d.onmouseout=d.onmouseover=d.onmousemove=d.point=null;M(a);if(a.clipPath&&f){var l=a.clipPath;[].forEach.call(f.querySelectorAll("[clip-path],[CLIP-PATH]"),function(d){-1<d.getAttribute("clip-path").indexOf(l.element.id)&&d.removeAttribute("clip-path")});
a.clipPath=l.destroy()}if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(d);for(t.styledMode||a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)d=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=d;a.alignTo&&c(t.alignedObjects,a);C(a,function(d,t){a[t]&&a[t].parentGroup===a&&a[t].destroy&&a[t].destroy();delete a[t]})};I.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);
this.shadows=void 0};I.prototype.destroyTextPath=function(a,d){var t=a.getElementsByTagName("text")[0];if(t){if(t.removeAttribute("dx"),t.removeAttribute("dy"),d.element.setAttribute("id",""),this.textPathWrapper&&t.getElementsByTagName("textPath").length){for(a=this.textPathWrapper.element.childNodes;a.length;)t.appendChild(a[0]);t.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=
this.textPathWrapper.destroy())};I.prototype.dSetter=function(a,d,t){b(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(d,t,a){return t&&t.join?(a?d+" ":"")+t.join(" "):(t||"").toString()},""));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[d]!==a&&(t.setAttribute(d,a),this[d]=a)};I.prototype.fadeOut=function(a){var d=this;d.animate({opacity:0},{duration:K(a,150),complete:function(){d.attr({y:-9999}).hide()}})};I.prototype.fillSetter=function(a,d,t){"string"===
typeof a?t.setAttribute(d,a):a&&this.complexColor(a,d,t)};I.prototype.getBBox=function(a,d){var t,b=this.renderer,c=this.element,f=this.styles,w=this.textStr,x=b.cache,E=b.cacheKeys,p=c.namespaceURI===this.SVG_NS;d=K(d,this.rotation,0);var C=b.styledMode?c&&I.prototype.getStyle.call(c,"font-size"):f&&f.fontSize;if(k(w)){var v=w.toString();-1===v.indexOf("<")&&(v=v.replace(/[0-9]/g,"0"));v+=["",d,C,this.textWidth,f&&f.textOverflow,f&&f.fontWeight].join()}v&&!a&&(t=x[v]);if(!t){if(p||b.forExport){try{var u=
this.fakeTS&&function(d){[].forEach.call(c.querySelectorAll(".highcharts-text-outline"),function(t){t.style.display=d})};l(u)&&u("none");t=c.getBBox?e({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight};l(u)&&u("")}catch(aa){""}if(!t||0>t.width)t={width:0,height:0}}else t=this.htmlGetBBox();b.isSVG&&(a=t.width,b=t.height,p&&(t.height=b={"11px,17":14,"13px,20":16}[f&&f.fontSize+","+Math.round(b)]||b),d&&(f=d*G,t.width=Math.abs(b*Math.sin(f))+Math.abs(a*Math.cos(f)),t.height=Math.abs(b*Math.cos(f))+
Math.abs(a*Math.sin(f))));if(v&&0<t.height){for(;250<E.length;)delete x[E.shift()];x[v]||E.push(v);x[v]=t}}return t};I.prototype.getStyle=function(a){return v.getComputedStyle(this.element||this,"").getPropertyValue(a)};I.prototype.hasClass=function(a){return-1!==(""+this.attr("class")).split(" ").indexOf(a)};I.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};I.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};I.prototype.init=function(a,
d){this.element="span"===d?A(d):B.createElementNS(this.SVG_NS,d);this.renderer=a;f(this,"afterInit")};I.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};I.prototype.on=function(a,d){var t,b,c=this.element,f;r&&"click"===a?(c.ontouchstart=function(d){t=d.touches[0].clientX;b=d.touches[0].clientY},c.ontouchend=function(a){t&&4<=Math.sqrt(Math.pow(t-a.changedTouches[0].clientX,2)+Math.pow(b-a.changedTouches[0].clientY,2))||d.call(c,a);f=!0;!1!==a.cancelable&&a.preventDefault()},
c.onclick=function(t){f||d.call(c,t)}):c["on"+a]=d;return this};I.prototype.opacitySetter=function(a,d,t){this.opacity=a=Number(Number(a).toFixed(3));t.setAttribute(d,a)};I.prototype.removeClass=function(a){return this.attr("class",(""+this.attr("class")).replace(x(a)?new RegExp("(^| )"+a+"( |$)"):a," ").replace(/ +/g," ").trim())};I.prototype.removeTextOutline=function(a){for(var d=a.length,t;d--;)t=a[d],"highcharts-text-outline"===t.getAttribute("class")&&c(a,this.element.removeChild(t))};I.prototype.safeRemoveChild=
function(a){var d=a.parentNode;d&&d.removeChild(a)};I.prototype.setRadialReference=function(a){var d=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;d&&d.radAttr&&d.animate(this.renderer.getRadialAttr(a,d.radAttr));return this};I.prototype.setTextPath=function(b,d){var t=this.element,c={textAnchor:"text-anchor"},f=!1,l=this.textPathWrapper,e=!l;d=E(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},d);var x=d.attributes;if(b&&
d&&d.enabled){l&&null===l.element.parentNode?(e=!0,l=l.destroy()):l&&this.removeTextOutline.call(l.parentGroup,[].slice.call(t.getElementsByTagName("tspan")));this.options&&this.options.padding&&(x.dx=-this.options.padding);l||(this.textPathWrapper=l=this.renderer.createElement("textPath"),f=!0);var w=l.element;(d=b.element.getAttribute("id"))||b.element.setAttribute("id",d=N());if(e)for(b=t.getElementsByTagName("tspan");b.length;)b[0].setAttribute("y",0),a(x.dx)&&b[0].setAttribute("x",-x.dx),w.appendChild(b[0]);
f&&l&&l.add({element:this.text?this.text.element:t});w.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+d);k(x.dy)&&(w.parentNode.setAttribute("dy",x.dy),delete x.dy);k(x.dx)&&(w.parentNode.setAttribute("dx",x.dx),delete x.dx);C(x,function(d,t){w.setAttribute(c[t]||t,d)});t.removeAttribute("transform");this.removeTextOutline.call(l,[].slice.call(t.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=
this.updateTransform=g}else l&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(t,b),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};I.prototype.shadow=function(a,d,t){var b=[],c=this.element,f=!1,l=this.oldShadowOptions;var k={color:"#000000",offsetX:1,offsetY:1,opacity:.15,width:3};var x;!0===a?x=k:"object"===typeof a&&(x=e(k,a));x&&(x&&l&&C(x,function(d,t){d!==l[t]&&(f=!0)}),f&&this.destroyShadows(),
this.oldShadowOptions=x);if(!x)this.destroyShadows();else if(!this.shadows){var w=x.opacity/x.width;var E=this.parentInverted?"translate(-1,-1)":"translate("+x.offsetX+", "+x.offsetY+")";for(k=1;k<=x.width;k++){var p=c.cloneNode(!1);var v=2*x.width+1-2*k;u(p,{stroke:a.color||"#000000","stroke-opacity":w*k,"stroke-width":v,transform:E,fill:"none"});p.setAttribute("class",(p.getAttribute("class")||"")+" highcharts-shadow");t&&(u(p,"height",Math.max(u(p,"height")-v,0)),p.cutHeight=v);d?d.element.appendChild(p):
c.parentNode&&c.parentNode.insertBefore(p,c);b.push(p)}this.shadows=b}return this};I.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};I.prototype.strokeSetter=function(a,d,t){this[d]=a;this.stroke&&this["stroke-width"]?(I.prototype.fillSetter.call(this,this.stroke,"stroke",t),t.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===d&&0===a&&this.hasStroke?(t.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&
(t.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};I.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),d=0;if(a.indexOf("px")===a.length-2)d=T(a);else if(""!==a){var t=B.createElementNS(H,"rect");u(t,{width:a,"stroke-width":0});this.element.parentNode.appendChild(t);d=t.getBBox().width;t.parentNode.removeChild(t)}return d};I.prototype.symbolAttr=function(a){var d=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(t){d[t]=
K(a[t],d[t])});d.attr({d:d.renderer.symbols[d.symbolName](d.x,d.y,d.width,d.height,d)})};I.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};I.prototype.titleSetter=function(a){var d=this.element.getElementsByTagName("title")[0];d||(d=B.createElementNS(this.SVG_NS,"title"),this.element.appendChild(d));d.firstChild&&d.removeChild(d.firstChild);d.appendChild(B.createTextNode(String(K(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,
"<").replace(/&gt;/g,">")))};I.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};I.prototype.translate=function(a,d){return this.attr({translateX:a,translateY:d})};I.prototype.updateShadows=function(a,d,t){var b=this.shadows;if(b)for(var c=b.length;c--;)t.call(b[c],"height"===a?Math.max(d-(b[c].cutHeight||0),0):"d"===a?this.d:d,a,b[c])};I.prototype.updateTransform=function(){var a=this.translateX||0,d=this.translateY||0,t=this.scaleX,b=this.scaleY,c=this.inverted,
f=this.rotation,l=this.matrix,e=this.element;c&&(a+=this.width,d+=this.height);a=["translate("+a+","+d+")"];k(l)&&a.push("matrix("+l.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+K(this.rotationOriginX,e.getAttribute("x"),0)+" "+K(this.rotationOriginY,e.getAttribute("y")||0)+")");(k(t)||k(b))&&a.push("scale("+K(t,1)+" "+K(b,1)+")");a.length&&e.setAttribute("transform",a.join(" "))};I.prototype.visibilitySetter=function(a,d,t){"inherit"===a?t.removeAttribute(d):this[d]!==
a&&t.setAttribute(d,a);this[d]=a};I.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};I.prototype.zIndexSetter=function(a,d){var t=this.renderer,b=this.parentGroup,c=(b||t).element||t.box,f=this.element,l=!1;t=c===t.box;var e=this.added;var x;k(a)?(f.setAttribute("data-z-index",a),a=+a,this[d]===a&&(e=!1)):k(this[d])&&f.removeAttribute("data-z-index");this[d]=a;if(e){(a=this.zIndex)&&b&&(b.handleZ=!0);d=c.childNodes;for(x=
d.length-1;0<=x&&!l;x--){b=d[x];e=b.getAttribute("data-z-index");var p=!k(e);if(b!==f)if(0>a&&p&&!t&&!x)c.insertBefore(f,d[x]),l=!0;else if(T(e)<=a||p&&(!k(a)||0<=a))c.insertBefore(f,d[x+1]||null),l=!0}l||(c.insertBefore(f,d[t?3:0]||null),l=!0)}return l};return I}();n.prototype["stroke-widthSetter"]=n.prototype.strokeSetter;n.prototype.yGetter=n.prototype.xGetter;n.prototype.matrixSetter=n.prototype.rotationOriginXSetter=n.prototype.rotationOriginYSetter=n.prototype.rotationSetter=n.prototype.scaleXSetter=
n.prototype.scaleYSetter=n.prototype.translateXSetter=n.prototype.translateYSetter=n.prototype.verticalAlignSetter=function(a,b){this[b]=a;this.doTransform=!0};q.SVGElement=n;return q.SVGElement});O(q,"Core/Renderer/SVG/SVGLabel.js",[q["Core/Renderer/SVG/SVGElement.js"],q["Core/Utilities.js"]],function(n,h){var q=this&&this.__extends||function(){var h=function(r,m){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,m){g.__proto__=m}||function(g,m){for(var r in m)m.hasOwnProperty(r)&&
(g[r]=m[r])};return h(r,m)};return function(r,m){function g(){this.constructor=r}h(r,m);r.prototype=null===m?Object.create(m):(g.prototype=m.prototype,new g)}}(),z=h.defined,y=h.extend,F=h.isNumber,M=h.merge,G=h.removeEvent;return function(h){function r(m,g,D,H,v,u,A,p,k,c){var e=h.call(this)||this;e.init(m,"g");e.textStr=g;e.x=D;e.y=H;e.anchorX=u;e.anchorY=A;e.baseline=k;e.className=c;"button"!==c&&e.addClass("highcharts-label");c&&e.addClass("highcharts-"+c);e.text=m.text("",0,0,p).attr({zIndex:1});
if("string"===typeof v){var f=/^url\((.*?)\)$/.test(v);if(e.renderer.symbols[v]||f)e.symbolKey=v}e.bBox=r.emptyBBox;e.padding=3;e.paddingLeft=0;e.baselineOffset=0;e.needsBox=m.styledMode||f;e.deferredAttr={};e.alignFactor=0;return e}q(r,h);r.prototype.alignSetter=function(m){m={left:0,center:.5,right:1}[m];m!==this.alignFactor&&(this.alignFactor=m,this.bBox&&F(this.xSetting)&&this.attr({x:this.xSetting}))};r.prototype.anchorXSetter=function(m,g){this.anchorX=m;this.boxAttr(g,Math.round(m)-this.getCrispAdjust()-
this.xSetting)};r.prototype.anchorYSetter=function(m,g){this.anchorY=m;this.boxAttr(g,m-this.ySetting)};r.prototype.boxAttr=function(m,g){this.box?this.box.attr(m,g):this.deferredAttr[m]=g};r.prototype.css=function(m){if(m){var g={};m=M(m);r.textProps.forEach(function(r){"undefined"!==typeof m[r]&&(g[r]=m[r],delete m[r])});this.text.css(g);var h="fontSize"in g||"fontWeight"in g;if("width"in g||h)this.updateBoxSize(),h&&this.updateTextPadding()}return n.prototype.css.call(this,m)};r.prototype.destroy=
function(){G(this.element,"mouseenter");G(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());n.prototype.destroy.call(this)};r.prototype.fillSetter=function(m,g){m&&(this.needsBox=!0);this.fill=m;this.boxAttr(g,m)};r.prototype.getBBox=function(){var m=this.bBox,g=this.padding;return{width:m.width+2*g,height:m.height+2*g,x:m.x-g,y:m.y-g}};r.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?
parseInt(this["stroke-width"],10):0)%2/2};r.prototype.heightSetter=function(m){this.heightSetting=m};r.prototype.on=function(m,g){var r=this,h=r.text,v=h&&"SPAN"===h.element.tagName?h:void 0;if(v){var u=function(u){("mouseenter"===m||"mouseleave"===m)&&u.relatedTarget instanceof Element&&(r.element.contains(u.relatedTarget)||v.element.contains(u.relatedTarget))||g.call(r.element,u)};v.on(m,u)}n.prototype.on.call(r,m,u||g);return r};r.prototype.onAdd=function(){var m=this.textStr;this.text.add(this);
this.attr({text:z(m)?m:"",x:this.x,y:this.y});this.box&&z(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};r.prototype.paddingSetter=function(m){z(m)&&m!==this.padding&&(this.padding=m,this.updateTextPadding())};r.prototype.paddingLeftSetter=function(m){z(m)&&m!==this.paddingLeft&&(this.paddingLeft=m,this.updateTextPadding())};r.prototype.rSetter=function(m,g){this.boxAttr(g,m)};r.prototype.shadow=function(m){m&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(m));
return this};r.prototype.strokeSetter=function(m,g){this.stroke=m;this.boxAttr(g,m)};r.prototype["stroke-widthSetter"]=function(m,g){m&&(this.needsBox=!0);this["stroke-width"]=m;this.boxAttr(g,m)};r.prototype["text-alignSetter"]=function(m){this.textAlign=m};r.prototype.textSetter=function(m){"undefined"!==typeof m&&this.text.attr({text:m});this.updateBoxSize();this.updateTextPadding()};r.prototype.updateBoxSize=function(){var m=this.text.element.style,g={},h=this.padding,H=this.paddingLeft,v=F(this.widthSetting)&&
F(this.heightSetting)&&!this.textAlign||!z(this.text.textStr)?r.emptyBBox:this.text.getBBox();this.width=(this.widthSetting||v.width||0)+2*h+H;this.height=(this.heightSetting||v.height||0)+2*h;this.baselineOffset=h+Math.min(this.renderer.fontMetrics(m&&m.fontSize,this.text).b,v.height||Infinity);this.needsBox&&(this.box||(m=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),m.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+
this.className+"-box":"")),m.add(this),m=this.getCrispAdjust(),g.x=m,g.y=(this.baseline?-this.baselineOffset:0)+m),g.width=Math.round(this.width),g.height=Math.round(this.height),this.box.attr(y(g,this.deferredAttr)),this.deferredAttr={});this.bBox=v};r.prototype.updateTextPadding=function(){var m=this.text,g=this.baseline?0:this.baselineOffset,r=this.paddingLeft+this.padding;z(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(r+={center:.5,right:1}[this.textAlign]*
(this.widthSetting-this.bBox.width));if(r!==m.x||g!==m.y)m.attr("x",r),m.hasBoxWidthChanged&&(this.bBox=m.getBBox(!0),this.updateBoxSize()),"undefined"!==typeof g&&m.attr("y",g);m.x=r;m.y=g};r.prototype.widthSetter=function(m){this.widthSetting=F(m)?m:void 0};r.prototype.xSetter=function(m){this.x=m;this.alignFactor&&(m-=this.alignFactor*((this.widthSetting||this.bBox.width)+2*this.padding),this["forceAnimate:x"]=!0);this.xSetting=Math.round(m);this.attr("translateX",this.xSetting)};r.prototype.ySetter=
function(m){this.ySetting=this.y=Math.round(m);this.attr("translateY",this.ySetting)};r.emptyBBox={width:0,height:0,x:0,y:0};r.textProps="color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");return r}(n)});O(q,"Core/Renderer/SVG/SVGRenderer.js",[q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Renderer/SVG/SVGElement.js"],q["Core/Renderer/SVG/SVGLabel.js"],q["Core/Utilities.js"]],function(n,h,q,z,y){var F=
y.addEvent,L=y.attr,G=y.createElement,B=y.css,r=y.defined,m=y.destroyObjectProperties,g=y.extend,D=y.isArray,H=y.isNumber,v=y.isObject,u=y.isString,A=y.merge,p=y.objectEach,k=y.pick,c=y.pInt,e=y.splat,f=y.uniqueKey,b=h.charts,l=h.deg2rad,a=h.doc,x=h.isFirefox,E=h.isMS,C=h.isWebKit;y=h.noop;var K=h.svg,T=h.SVG_NS,R=h.symbolSizes,N=h.win,I=function(){function w(d,a,b,c,f,l,e){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=
this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(d,a,b,c,f,l,e)}w.prototype.init=function(d,t,b,c,f,l,e){var J=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});e||J.css(this.getStyle(c));c=J.element;d.appendChild(c);L(d,"dir","ltr");-1===d.innerHTML.indexOf("xmlns")&&L(c,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=c;this.boxWrapper=J;this.alignedObjects=[];this.url=(x||C)&&a.getElementsByTagName("base").length?N.location.href.split("#")[0].replace(/<[^>]*>/g,
"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(a.createTextNode("Created with Highcharts 8.2.2"));this.defs=this.createElement("defs").add();this.allowHTML=l;this.forExport=f;this.styledMode=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(t,b,!1);var k;x&&d.getBoundingClientRect&&(t=function(){B(d,{left:0,top:0});k=d.getBoundingClientRect();B(d,{left:Math.ceil(k.left)-k.left+"px",top:Math.ceil(k.top)-k.top+
"px"})},t(),this.unSubPixelFix=F(N,"resize",t))};w.prototype.definition=function(d){function t(d,c){var f;e(d).forEach(function(d){var l=b.createElement(d.tagName),e={};p(d,function(d,a){"tagName"!==a&&"children"!==a&&"textContent"!==a&&(e[a]=d)});l.attr(e);l.add(c||b.defs);d.textContent&&l.element.appendChild(a.createTextNode(d.textContent));t(d.children||[],l);f=l});return f}var b=this;return t(d)};w.prototype.getStyle=function(d){return this.style=g({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
fontSize:"12px"},d)};w.prototype.setStyle=function(d){this.boxWrapper.css(this.getStyle(d))};w.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};w.prototype.destroy=function(){var d=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();m(this.gradients||{});this.gradients=null;d&&(this.defs=d.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};w.prototype.createElement=function(d){var a=new this.Element;a.init(this,d);return a};w.prototype.getRadialAttr=
function(d,a){return{cx:d[0]-d[2]/2+a.cx*d[2],cy:d[1]-d[2]/2+a.cy*d[2],r:a.r*d[2]}};w.prototype.truncate=function(d,t,b,c,f,l,e){var J=this,k=d.rotation,x,P=c?1:0,Q=(b||c).length,p=Q,E=[],C=function(d){t.firstChild&&t.removeChild(t.firstChild);d&&t.appendChild(a.createTextNode(d))},w=function(a,l){l=l||a;if("undefined"===typeof E[l])if(t.getSubStringLength)try{E[l]=f+t.getSubStringLength(0,c?l+1:l)}catch(ja){""}else J.getSpanWidth&&(C(e(b||c,a)),E[l]=f+J.getSpanWidth(d,t));return E[l]},v;d.rotation=
0;var u=w(t.textContent.length);if(v=f+u>l){for(;P<=Q;)p=Math.ceil((P+Q)/2),c&&(x=e(c,p)),u=w(p,x&&x.length-1),P===Q?P=Q+1:u>l?Q=p-1:P=p;0===Q?C(""):b&&Q===b.length-1||C(x||e(b||c,p))}c&&c.splice(0,p);d.actualWidth=u;d.rotation=k;return v};w.prototype.buildText=function(d){var t=d.element,b=this,f=b.forExport,l=k(d.textStr,"").toString(),e=-1!==l.indexOf("<"),x=t.childNodes,E,C=L(t,"x"),w=d.styles,v=d.textWidth,g=w&&w.lineHeight,A=w&&w.textOutline,m=w&&"ellipsis"===w.textOverflow,r=w&&"nowrap"===
w.whiteSpace,h=w&&w.fontSize,N,I=x.length;w=v&&!d.added&&this.box;var H=function(d){var a;b.styledMode||(a=/(px|em)$/.test(d&&d.style.fontSize)?d.style.fontSize:h||b.style.fontSize||12);return g?c(g):b.fontMetrics(a,d.getAttribute("style")?d:t).h},D=function(d,a){p(b.escapes,function(t,b){a&&-1!==a.indexOf(t)||(d=d.toString().replace(new RegExp(t,"g"),b))});return d},n=function(d,a){var t=d.indexOf("<");d=d.substring(t,d.indexOf(">")-t);t=d.indexOf(a+"=");if(-1!==t&&(t=t+a.length+1,a=d.charAt(t),
'"'===a||"'"===a))return d=d.substring(t+1),d.substring(0,d.indexOf(a))},q=/<br.*?>/g;var R=[l,m,r,g,A,h,v].join();if(R!==d.textCache){for(d.textCache=R;I--;)t.removeChild(x[I]);e||A||m||v||-1!==l.indexOf(" ")&&(!r||q.test(l))?(w&&w.appendChild(t),e?(l=b.styledMode?l.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):l.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),
l=l.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(q)):l=[l],l=l.filter(function(d){return""!==d}),l.forEach(function(c,l){var e=0,J=0;c=c.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var k=c.split("|||");k.forEach(function(c){if(""!==c||1===k.length){var x={},P=a.createElementNS(b.SVG_NS,"tspan"),p,Q;(p=n(c,"class"))&&L(P,"class",p);if(p=n(c,"style"))p=p.replace(/(;| |^)color([ :])/,"$1fill$2"),L(P,"style",p);if((Q=n(c,"href"))&&
!f&&-1===Q.split(":")[0].toLowerCase().indexOf("javascript")){var w=a.createElementNS(b.SVG_NS,"a");L(w,"href",Q);L(P,"class","highcharts-anchor");w.appendChild(P);b.styledMode||B(P,{cursor:"pointer"})}c=D(c.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==c){P.appendChild(a.createTextNode(c));e?x.dx=0:l&&null!==C&&(x.x=C);L(P,x);t.appendChild(w||P);!e&&N&&(!K&&f&&B(P,{display:"block"}),L(P,"dy",H(P)));if(v){var u=c.replace(/([^\^])-/g,"$1- ").split(" ");x=!r&&(1<k.length||l||1<u.length);w=0;Q=
H(P);if(m)E=b.truncate(d,P,c,void 0,0,Math.max(0,v-parseInt(h||12,10)),function(d,a){return d.substring(0,a)+"\u2026"});else if(x)for(;u.length;)u.length&&!r&&0<w&&(P=a.createElementNS(T,"tspan"),L(P,{dy:Q,x:C}),p&&L(P,"style",p),P.appendChild(a.createTextNode(u.join(" ").replace(/- /g,"-"))),t.appendChild(P)),b.truncate(d,P,null,u,0===w?J:0,v,function(d,a){return u.slice(0,a).join(" ").replace(/- /g,"-")}),J=d.actualWidth,w++}e++}}});N=N||t.childNodes.length}),m&&E&&d.attr("title",D(d.textStr||"",
["&lt;","&gt;"])),w&&w.removeChild(t),u(A)&&d.applyTextOutline&&d.applyTextOutline(A)):t.appendChild(a.createTextNode(D(l)))}};w.prototype.getContrast=function(d){d=n.parse(d).rgba;d[0]*=1;d[1]*=1.2;d[2]*=.5;return 459<d[0]+d[1]+d[2]?"#000000":"#FFFFFF"};w.prototype.button=function(d,a,b,c,f,l,e,k,x,p){var t=this.label(d,a,b,x,void 0,void 0,p,void 0,"button"),J=0,P=this.styledMode;d=(f=f?A(f):f)&&f.style||{};f&&f.style&&delete f.style;t.attr(A({padding:8,r:2},f));if(!P){f=A({fill:"#f7f7f7",stroke:"#cccccc",
"stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},{style:d},f);var Q=f.style;delete f.style;l=A(f,{fill:"#e6e6e6"},l);var w=l.style;delete l.style;e=A(f,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},e);var C=e.style;delete e.style;k=A(f,{style:{color:"#cccccc"}},k);var v=k.style;delete k.style}F(t.element,E?"mouseover":"mouseenter",function(){3!==J&&t.setState(1)});F(t.element,E?"mouseout":"mouseleave",function(){3!==J&&t.setState(J)});t.setState=function(d){1!==
d&&(t.state=J=d);t.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][d||0]);P||t.attr([f,l,e,k][d||0]).css([Q,w,C,v][d||0])};P||t.attr(f).css(g({cursor:"default"},Q));return t.on("click",function(d){3!==J&&c.call(t,d)})};w.prototype.crispLine=function(d,a,b){void 0===b&&(b="round");var t=d[0],c=d[1];t[1]===c[1]&&(t[1]=c[1]=Math[b](t[1])-a%2/2);t[2]===c[2]&&(t[2]=c[2]=Math[b](t[2])+a%2/2);return d};w.prototype.path=
function(d){var a=this.styledMode?{}:{fill:"none"};D(d)?a.d=d:v(d)&&g(a,d);return this.createElement("path").attr(a)};w.prototype.circle=function(d,a,b){d=v(d)?d:"undefined"===typeof d?{}:{x:d,y:a,r:b};a=this.createElement("circle");a.xSetter=a.ySetter=function(d,a,t){t.setAttribute("c"+a,d)};return a.attr(d)};w.prototype.arc=function(d,a,b,c,f,l){v(d)?(c=d,a=c.y,b=c.r,d=c.x):c={innerR:c,start:f,end:l};d=this.symbol("arc",d,a,b,b,c);d.r=b;return d};w.prototype.rect=function(d,a,b,c,f,l){f=v(d)?d.r:
f;var t=this.createElement("rect");d=v(d)?d:"undefined"===typeof d?{}:{x:d,y:a,width:Math.max(b,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof l&&(d.strokeWidth=l,d=t.crisp(d)),d.fill="none");f&&(d.r=f);t.rSetter=function(d,a,b){t.r=d;L(b,{rx:d,ry:d})};t.rGetter=function(){return t.r};return t.attr(d)};w.prototype.setSize=function(d,a,b){var t=this.alignedObjects,c=t.length;this.width=d;this.height=a;for(this.boxWrapper.animate({width:d,height:a},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:k(b,!0)?void 0:0});c--;)t[c].align()};w.prototype.g=function(d){var a=this.createElement("g");return d?a.attr({"class":"highcharts-"+d}):a};w.prototype.image=function(d,a,b,c,f,l){var t={preserveAspectRatio:"none"},e=function(d,a){d.setAttributeNS?d.setAttributeNS("http://www.w3.org/1999/xlink","href",a):d.setAttribute("hc-svg-href",a)},J=function(a){e(k.element,d);l.call(k,a)};1<arguments.length&&g(t,{x:a,y:b,width:c,height:f});var k=this.createElement("image").attr(t);
l?(e(k.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),t=new N.Image,F(t,"load",J),t.src=d,t.complete&&J({})):e(k.element,d);return k};w.prototype.symbol=function(d,t,c,f,l,e){var J=this,x=/^url\((.*?)\)$/,P=x.test(d),p=!P&&(this.symbols[d]?d:"circle"),E=p&&this.symbols[p],Q;if(E){"number"===typeof t&&(Q=E.call(this.symbols,Math.round(t||0),Math.round(c||0),f||0,l||0,e));var w=this.path(Q);J.styledMode||w.attr("fill","none");g(w,{symbolName:p,x:t,y:c,width:f,
height:l});e&&g(w,e)}else if(P){var C=d.match(x)[1];w=this.image(C);w.imgwidth=k(R[C]&&R[C].width,e&&e.width);w.imgheight=k(R[C]&&R[C].height,e&&e.height);var v=function(){w.attr({width:w.width,height:w.height})};["width","height"].forEach(function(d){w[d+"Setter"]=function(d,a){var t={},b=this["img"+a],c="width"===a?"translateX":"translateY";this[a]=d;r(b)&&(e&&"within"===e.backgroundSize&&this.width&&this.height&&(b=Math.round(b*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&
this.element.setAttribute(a,b),this.alignByTranslate||(t[c]=((this[a]||0)-b)/2,this.attr(t)))}});r(t)&&w.attr({x:t,y:c});w.isImg=!0;r(w.imgwidth)&&r(w.imgheight)?v():(w.attr({width:0,height:0}),G("img",{onload:function(){var d=b[J.chartIndex];0===this.width&&(B(this,{position:"absolute",top:"-999em"}),a.body.appendChild(this));R[C]={width:this.width,height:this.height};w.imgwidth=this.width;w.imgheight=this.height;w.element&&v();this.parentNode&&this.parentNode.removeChild(this);J.imgCount--;if(!J.imgCount&&
d&&!d.hasLoaded)d.onload()},src:C}),this.imgCount++)}return w};w.prototype.clipRect=function(d,a,b,c){var t=f()+"-",l=this.createElement("clipPath").attr({id:t}).add(this.defs);d=this.rect(d,a,b,c,0).add(l);d.id=t;d.clipPath=l;d.count=0;return d};w.prototype.text=function(d,a,b,c){var t={};if(c&&(this.allowHTML||!this.forExport))return this.html(d,a,b);t.x=Math.round(a||0);b&&(t.y=Math.round(b));r(d)&&(t.text=d);d=this.createElement("text").attr(t);c||(d.xSetter=function(d,a,t){var b=t.getElementsByTagName("tspan"),
c=t.getAttribute(a),f;for(f=0;f<b.length;f++){var l=b[f];l.getAttribute(a)===c&&l.setAttribute(a,d)}t.setAttribute(a,d)});return d};w.prototype.fontMetrics=function(d,a){d=!this.styledMode&&/px/.test(d)||!N.getComputedStyle?d||a&&a.style&&a.style.fontSize||this.style&&this.style.fontSize:a&&q.prototype.getStyle.call(a,"font-size");d=/px/.test(d)?c(d):12;a=24>d?d+3:Math.round(1.2*d);return{h:a,b:Math.round(.8*a),f:d}};w.prototype.rotCorr=function(d,a,b){var t=d;a&&b&&(t=Math.max(t*Math.cos(a*l),4));
return{x:-d/3*Math.sin(a*l),y:t}};w.prototype.pathToSegments=function(d){for(var a=[],b=[],c={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},f=0;f<d.length;f++)u(b[0])&&H(d[f])&&b.length===c[b[0].toUpperCase()]&&d.splice(f,0,b[0].replace("M","L").replace("m","l")),"string"===typeof d[f]&&(b.length&&a.push(b.slice(0)),b.length=0),b.push(d[f]);a.push(b.slice(0));return a};w.prototype.label=function(d,a,b,c,f,l,e,k,x){return new z(this,d,a,b,c,f,l,e,k,x)};return w}();I.prototype.Element=q;I.prototype.SVG_NS=T;
I.prototype.draw=y;I.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};I.prototype.symbols={circle:function(a,d,t,b){return this.arc(a+t/2,d+b/2,t/2,b/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,d,t,b){return[["M",a,d],["L",a+t,d],["L",a+t,d+b],["L",a,d+b],["Z"]]},triangle:function(a,d,t,b){return[["M",a+t/2,d],["L",a+t,d+b],["L",a,d+b],["Z"]]},"triangle-down":function(a,d,t,b){return[["M",a,d],["L",a+t,d],["L",a+t/2,d+b],["Z"]]},diamond:function(a,
d,t,b){return[["M",a+t/2,d],["L",a+t,d+b/2],["L",a+t/2,d+b],["L",a,d+b/2],["Z"]]},arc:function(a,d,t,b,c){var f=[];if(c){var l=c.start||0,e=c.end||0,J=c.r||t;t=c.r||b||t;var x=.001>Math.abs(e-l-2*Math.PI);e-=.001;b=c.innerR;x=k(c.open,x);var p=Math.cos(l),E=Math.sin(l),P=Math.cos(e),w=Math.sin(e);l=k(c.longArc,.001>e-l-Math.PI?0:1);f.push(["M",a+J*p,d+t*E],["A",J,t,0,l,k(c.clockwise,1),a+J*P,d+t*w]);r(b)&&f.push(x?["M",a+b*P,d+b*w]:["L",a+b*P,d+b*w],["A",b,b,0,l,r(c.clockwise)?1-c.clockwise:0,a+b*
p,d+b*E]);x||f.push(["Z"])}return f},callout:function(a,d,t,b,c){var f=Math.min(c&&c.r||0,t,b),l=f+6,e=c&&c.anchorX||0;c=c&&c.anchorY||0;var J=[["M",a+f,d],["L",a+t-f,d],["C",a+t,d,a+t,d,a+t,d+f],["L",a+t,d+b-f],["C",a+t,d+b,a+t,d+b,a+t-f,d+b],["L",a+f,d+b],["C",a,d+b,a,d+b,a,d+b-f],["L",a,d+f],["C",a,d,a,d,a+f,d]];e&&e>t?c>d+l&&c<d+b-l?J.splice(3,1,["L",a+t,c-6],["L",a+t+6,c],["L",a+t,c+6],["L",a+t,d+b-f]):J.splice(3,1,["L",a+t,b/2],["L",e,c],["L",a+t,b/2],["L",a+t,d+b-f]):e&&0>e?c>d+l&&c<d+b-l?
J.splice(7,1,["L",a,c+6],["L",a-6,c],["L",a,c-6],["L",a,d+f]):J.splice(7,1,["L",a,b/2],["L",e,c],["L",a,b/2],["L",a,d+f]):c&&c>b&&e>a+l&&e<a+t-l?J.splice(5,1,["L",e+6,d+b],["L",e,d+b+6],["L",e-6,d+b],["L",a+f,d+b]):c&&0>c&&e>a+l&&e<a+t-l&&J.splice(1,1,["L",e-6,d],["L",e,d-6],["L",e+6,d],["L",t-f,d]);return J}};h.SVGRenderer=I;h.Renderer=h.SVGRenderer;return h.Renderer});O(q,"Core/Renderer/HTML/HTMLElement.js",[q["Core/Globals.js"],q["Core/Renderer/SVG/SVGElement.js"],q["Core/Utilities.js"]],function(n,
h,q){var L=q.css,y=q.defined,F=q.extend,M=q.pick,G=q.pInt,B=n.isFirefox;F(h.prototype,{htmlCss:function(r){var m="SPAN"===this.element.tagName&&r&&"width"in r,g=M(m&&r.width,void 0);if(m){delete r.width;this.textWidth=g;var h=!0}r&&"ellipsis"===r.textOverflow&&(r.whiteSpace="nowrap",r.overflow="hidden");this.styles=F(this.styles,r);L(this.element,r);h&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var r=this.element;return{x:r.offsetLeft,y:r.offsetTop,width:r.offsetWidth,height:r.offsetHeight}},
htmlUpdateTransform:function(){if(this.added){var r=this.renderer,m=this.element,g=this.translateX||0,h=this.translateY||0,H=this.x||0,v=this.y||0,u=this.textAlign||"left",A={left:0,center:.5,right:1}[u],p=this.styles,k=p&&p.whiteSpace;L(m,{marginLeft:g,marginTop:h});!r.styledMode&&this.shadows&&this.shadows.forEach(function(b){L(b,{marginLeft:g+1,marginTop:h+1})});this.inverted&&[].forEach.call(m.childNodes,function(b){r.invertChild(b,m)});if("SPAN"===m.tagName){p=this.rotation;var c=this.textWidth&&
G(this.textWidth),e=[p,u,m.innerHTML,this.textWidth,this.textAlign].join(),f;(f=c!==this.oldTextWidth)&&!(f=c>this.oldTextWidth)&&((f=this.textPxLength)||(L(m,{width:"",whiteSpace:k||"nowrap"}),f=m.offsetWidth),f=f>c);f&&(/[ \-]/.test(m.textContent||m.innerText)||"ellipsis"===m.style.textOverflow)?(L(m,{width:c+"px",display:"block",whiteSpace:k||"normal"}),this.oldTextWidth=c,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;e!==this.cTT&&(k=r.fontMetrics(m.style.fontSize,m).b,!y(p)||p===(this.oldRotation||
0)&&u===this.oldAlign||this.setSpanRotation(p,A,k),this.getSpanCorrection(!y(p)&&this.textPxLength||m.offsetWidth,k,A,p,u));L(m,{left:H+(this.xCorr||0)+"px",top:v+(this.yCorr||0)+"px"});this.cTT=e;this.oldRotation=p;this.oldAlign=u}}else this.alignOnAdd=!0},setSpanRotation:function(r,m,g){var h={},H=this.renderer.getTransformKey();h[H]=h.transform="rotate("+r+"deg)";h[H+(B?"Origin":"-origin")]=h.transformOrigin=100*m+"% "+g+"px";L(this.element,h)},getSpanCorrection:function(r,m,g){this.xCorr=-r*g;
this.yCorr=-m}});return h});O(q,"Core/Renderer/HTML/HTMLRenderer.js",[q["Core/Globals.js"],q["Core/Renderer/SVG/SVGElement.js"],q["Core/Renderer/SVG/SVGRenderer.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.isFirefox,L=n.isMS,M=n.isWebKit,G=n.win,B=z.attr,r=z.createElement,m=z.extend,g=z.pick;m(q.prototype,{getTransformKey:function(){return L&&!/Edge/.test(G.navigator.userAgent)?"-ms-transform":M?"-webkit-transform":y?"MozTransform":G.opera?"-o-transform":""},html:function(n,H,v){var u=this.createElement("span"),
A=u.element,p=u.renderer,k=p.isSVG,c=function(c,f){["opacity","visibility"].forEach(function(b){c[b+"Setter"]=function(l,a,e){var k=c.div?c.div.style:f;h.prototype[b+"Setter"].call(this,l,a,e);k&&(k[a]=l)}});c.addedSetters=!0};u.textSetter=function(c){c!==A.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=c;A.innerHTML=g(c,"");u.doTransform=!0};k&&c(u,u.element.style);u.xSetter=u.ySetter=u.alignSetter=u.rotationSetter=function(c,f){"align"===f?u.alignValue=u.textAlign=c:u[f]=c;
u.doTransform=!0};u.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};u.attr({text:n,x:Math.round(H),y:Math.round(v)}).css({position:"absolute"});p.styledMode||u.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});A.style.whiteSpace="nowrap";u.css=u.htmlCss;k&&(u.add=function(e){var f=p.box.parentNode,b=[];if(this.parentGroup=e){var l=e.div;if(!l){for(;e;)b.push(e),e=e.parentGroup;b.reverse().forEach(function(a){function e(b,c){a[c]=b;"translateX"===
c?p.left=b+"px":p.top=b+"px";a.doTransform=!0}var k=B(a.element,"class");l=a.div=a.div||r("div",k?{className:k}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},l||f);var p=l.style;m(a,{classSetter:function(a){return function(b){this.element.setAttribute("class",b);a.className=b}}(l),on:function(){b[0].div&&u.on.apply({element:b[0].div},arguments);return a},translateXSetter:e,translateYSetter:e});
a.addedSetters||c(a)})}}else l=f;l.appendChild(A);u.added=!0;u.alignOnAdd&&u.htmlUpdateTransform();return u});return u}});return q});O(q,"Core/Axis/Tick.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=h.clamp,z=h.correctFloat,y=h.defined,F=h.destroyObjectProperties,M=h.extend,G=h.fireEvent,B=h.isNumber,r=h.merge,m=h.objectEach,g=h.pick,D=n.deg2rad;h=function(){function h(v,u,g,p,k){this.isNewLabel=this.isNew=!0;this.axis=v;this.pos=u;this.type=g||"";this.parameters=k||{};this.tickmarkOffset=
this.parameters.tickmarkOffset;this.options=this.parameters.options;G(this,"init");g||p||this.addLabel()}h.prototype.addLabel=function(){var v=this,u=v.axis,m=u.options,p=u.chart,k=u.categories,c=u.logarithmic,e=u.names,f=v.pos,b=g(v.options&&v.options.labels,m.labels),l=u.tickPositions,a=f===l[0],x=f===l[l.length-1];e=this.parameters.category||(k?g(k[f],e[f],f):f);var E=v.label;k=(!b.step||1===b.step)&&1===u.tickInterval;l=l.info;var C,r;if(u.dateTime&&l){var h=p.time.resolveDTLFormat(m.dateTimeLabelFormats[!m.grid&&
l.higherRanks[f]||l.unitName]);var n=h.main}v.isFirst=a;v.isLast=x;v.formatCtx={axis:u,chart:p,isFirst:a,isLast:x,dateTimeLabelFormat:n,tickPositionInfo:l,value:c?z(c.lin2log(e)):e,pos:f};m=u.labelFormatter.call(v.formatCtx,this.formatCtx);if(r=h&&h.list)v.shortenLabel=function(){for(C=0;C<r.length;C++)if(E.attr({text:u.labelFormatter.call(M(v.formatCtx,{dateTimeLabelFormat:r[C]}))}),E.getBBox().width<u.getSlotWidth(v)-2*g(b.padding,5))return;E.attr({text:""})};k&&u._addedPlotLB&&v.moveLabel(m,b);
y(E)||v.movedLabel?E&&E.textStr!==m&&!k&&(!E.textWidth||b.style&&b.style.width||E.styles.width||E.css({width:null}),E.attr({text:m}),E.textPxLength=E.getBBox().width):(v.label=E=v.createLabel({x:0,y:0},m,b),v.rotation=0)};h.prototype.createLabel=function(v,u,g){var p=this.axis,k=p.chart;if(v=y(u)&&g.enabled?k.renderer.text(u,v.x,v.y,g.useHTML).add(p.labelGroup):null)k.styledMode||v.css(r(g.style)),v.textPxLength=v.getBBox().width;return v};h.prototype.destroy=function(){F(this,this.axis)};h.prototype.getPosition=
function(v,u,g,p){var k=this.axis,c=k.chart,e=p&&c.oldChartHeight||c.chartHeight;v={x:v?z(k.translate(u+g,null,null,p)+k.transB):k.left+k.offset+(k.opposite?(p&&c.oldChartWidth||c.chartWidth)-k.right-k.left:0),y:v?e-k.bottom+k.offset-(k.opposite?k.height:0):z(e-k.translate(u+g,null,null,p)-k.transB)};v.y=q(v.y,-1E5,1E5);G(this,"afterGetPosition",{pos:v});return v};h.prototype.getLabelPosition=function(v,u,g,p,k,c,e,f){var b=this.axis,l=b.transA,a=b.isLinked&&b.linkedParent?b.linkedParent.reversed:
b.reversed,x=b.staggerLines,E=b.tickRotCorr||{x:0,y:0},C=k.y,m=p||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),r={};y(C)||(C=0===b.side?g.rotation?-8:-g.getBBox().height:2===b.side?E.y+8:Math.cos(g.rotation*D)*(E.y-g.getBBox(!1,0).height/2));v=v+k.x+m+E.x-(c&&p?c*l*(a?-1:1):0);u=u+C-(c&&!p?c*l*(a?1:-1):0);x&&(g=e/(f||1)%x,b.opposite&&(g=x-g-1),u+=b.labelOffset/x*g);r.x=v;r.y=Math.round(u);G(this,"afterGetLabelPosition",{pos:r,tickmarkOffset:c,index:e});return r};h.prototype.getLabelSize=
function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};h.prototype.getMarkPath=function(v,u,g,p,k,c){return c.crispLine([["M",v,u],["L",v+(k?0:-g),u+(k?g:0)]],p)};h.prototype.handleOverflow=function(v){var u=this.axis,m=u.options.labels,p=v.x,k=u.chart.chartWidth,c=u.chart.spacing,e=g(u.labelLeft,Math.min(u.pos,c[3]));c=g(u.labelRight,Math.max(u.isRadial?0:u.pos+u.len,k-c[1]));var f=this.label,b=this.rotation,l={left:0,center:.5,right:1}[u.labelAlign||f.attr("align")],
a=f.getBBox().width,x=u.getSlotWidth(this),E=x,C=1,r,h={};if(b||"justify"!==g(m.overflow,"justify"))0>b&&p-l*a<e?r=Math.round(p/Math.cos(b*D)-e):0<b&&p+l*a>c&&(r=Math.round((k-p)/Math.cos(b*D)));else if(k=p+(1-l)*a,p-l*a<e?E=v.x+E*(1-l)-e:k>c&&(E=c-v.x+E*l,C=-1),E=Math.min(x,E),E<x&&"center"===u.labelAlign&&(v.x+=C*(x-E-l*(x-Math.min(a,E)))),a>E||u.autoRotation&&(f.styles||{}).width)r=E;r&&(this.shortenLabel?this.shortenLabel():(h.width=Math.floor(r)+"px",(m.style||{}).textOverflow||(h.textOverflow=
"ellipsis"),f.css(h)))};h.prototype.moveLabel=function(v,u){var g=this,p=g.label,k=!1,c=g.axis,e=c.reversed;p&&p.textStr===v?(g.movedLabel=p,k=!0,delete g.label):m(c.ticks,function(b){k||b.isNew||b===g||!b.label||b.label.textStr!==v||(g.movedLabel=b.label,k=!0,b.labelPos=g.movedLabel.xy,delete b.label)});if(!k&&(g.labelPos||p)){var f=g.labelPos||p.xy;p=c.horiz?e?0:c.width+c.left:f.x;c=c.horiz?f.y:e?c.width+c.left:0;g.movedLabel=g.createLabel({x:p,y:c},v,u);g.movedLabel&&g.movedLabel.attr({opacity:0})}};
h.prototype.render=function(v,u,m){var p=this.axis,k=p.horiz,c=this.pos,e=g(this.tickmarkOffset,p.tickmarkOffset);c=this.getPosition(k,c,e,u);e=c.x;var f=c.y;p=k&&e===p.pos+p.len||!k&&f===p.pos?-1:1;m=g(m,1);this.isActive=!0;this.renderGridLine(u,m,p);this.renderMark(c,m,p);this.renderLabel(c,u,m,v);this.isNew=!1;G(this,"afterRender")};h.prototype.renderGridLine=function(v,u,m){var p=this.axis,k=p.options,c=this.gridLine,e={},f=this.pos,b=this.type,l=g(this.tickmarkOffset,p.tickmarkOffset),a=p.chart.renderer,
x=b?b+"Grid":"grid",E=k[x+"LineWidth"],C=k[x+"LineColor"];k=k[x+"LineDashStyle"];c||(p.chart.styledMode||(e.stroke=C,e["stroke-width"]=E,k&&(e.dashstyle=k)),b||(e.zIndex=1),v&&(u=0),this.gridLine=c=a.path().attr(e).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(p.gridGroup));if(c&&(m=p.getPlotLinePath({value:f+l,lineWidth:c.strokeWidth()*m,force:"pass",old:v})))c[v||this.isNew?"attr":"animate"]({d:m,opacity:u})};h.prototype.renderMark=function(v,u,m){var p=this.axis,k=p.options,c=p.chart.renderer,
e=this.type,f=e?e+"Tick":"tick",b=p.tickSize(f),l=this.mark,a=!l,x=v.x;v=v.y;var E=g(k[f+"Width"],!e&&p.isXAxis?1:0);k=k[f+"Color"];b&&(p.opposite&&(b[0]=-b[0]),a&&(this.mark=l=c.path().addClass("highcharts-"+(e?e+"-":"")+"tick").add(p.axisGroup),p.chart.styledMode||l.attr({stroke:k,"stroke-width":E})),l[a?"attr":"animate"]({d:this.getMarkPath(x,v,b[0],l.strokeWidth()*m,p.horiz,c),opacity:u}))};h.prototype.renderLabel=function(v,u,m,p){var k=this.axis,c=k.horiz,e=k.options,f=this.label,b=e.labels,
l=b.step;k=g(this.tickmarkOffset,k.tickmarkOffset);var a=!0,x=v.x;v=v.y;f&&B(x)&&(f.xy=v=this.getLabelPosition(x,v,f,c,b,k,p,l),this.isFirst&&!this.isLast&&!g(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!g(e.showLastLabel,1)?a=!1:!c||b.step||b.rotation||u||0===m||this.handleOverflow(v),l&&p%l&&(a=!1),a&&B(v.y)?(v.opacity=m,f[this.isNewLabel?"attr":"animate"](v),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))};h.prototype.replaceMovedLabel=function(){var v=this.label,g=this.axis,m=
g.reversed;if(v&&!this.isNew){var p=g.horiz?m?g.left:g.width+g.left:v.xy.x;m=g.horiz?v.xy.y:m?g.width+g.top:g.top;v.animate({x:p,y:m,opacity:0},void 0,v.destroy);delete this.label}g.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return h}();n.Tick=h;return n.Tick});O(q,"Core/Time.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=h.defined,z=h.error,y=h.extend,F=h.isObject,M=h.merge,G=h.objectEach,B=h.pad,r=h.pick,m=h.splat,g=h.timeUnits,D=n.win;h=function(){function h(g){this.options=
{};this.variableTimezone=this.useUTC=!1;this.Date=D.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(g)}h.prototype.get=function(g,u){if(this.variableTimezone||this.timezoneOffset){var v=u.getTime(),p=v-this.getTimezoneOffset(u);u.setTime(p);g=u["getUTC"+g]();u.setTime(v);return g}return this.useUTC?u["getUTC"+g]():u["get"+g]()};h.prototype.set=function(g,u,m){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===g||"Seconds"===g||"Minutes"===g)return u["setUTC"+
g](m);var p=this.getTimezoneOffset(u);p=u.getTime()-p;u.setTime(p);u["setUTC"+g](m);g=this.getTimezoneOffset(u);p=u.getTime()+g;return u.setTime(p)}return this.useUTC?u["setUTC"+g](m):u["set"+g](m)};h.prototype.update=function(g){var m=r(g&&g.useUTC,!0);this.options=g=M(!0,this.options||{},g);this.Date=g.Date||D.Date||Date;this.timezoneOffset=(this.useUTC=m)&&g.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(m&&!g.getTimezoneOffset&&!g.timezone)};h.prototype.makeTime=
function(g,m,h,p,k,c){if(this.useUTC){var e=this.Date.UTC.apply(0,arguments);var f=this.getTimezoneOffset(e);e+=f;var b=this.getTimezoneOffset(e);f!==b?e+=b-f:f-36E5!==this.getTimezoneOffset(e-36E5)||n.isSafari||(e-=36E5)}else e=(new this.Date(g,m,r(h,1),r(p,0),r(k,0),r(c,0))).getTime();return e};h.prototype.timezoneOffsetFunction=function(){var g=this,m=this.options,r=m.moment||D.moment;if(!this.useUTC)return function(p){return 6E4*(new Date(p.toString())).getTimezoneOffset()};if(m.timezone){if(r)return function(p){return 6E4*
-r.tz(p,m.timezone).utcOffset()};z(25)}return this.useUTC&&m.getTimezoneOffset?function(p){return 6E4*m.getTimezoneOffset(p.valueOf())}:function(){return 6E4*(g.timezoneOffset||0)}};h.prototype.dateFormat=function(g,m,h){var p;if(!q(m)||isNaN(m))return(null===(p=n.defaultOptions.lang)||void 0===p?void 0:p.invalidDate)||"";g=r(g,"%Y-%m-%d %H:%M:%S");var k=this;p=new this.Date(m);var c=this.get("Hours",p),e=this.get("Day",p),f=this.get("Date",p),b=this.get("Month",p),l=this.get("FullYear",p),a=n.defaultOptions.lang,
x=null===a||void 0===a?void 0:a.weekdays,E=null===a||void 0===a?void 0:a.shortWeekdays;p=y({a:E?E[e]:x[e].substr(0,3),A:x[e],d:B(f),e:B(f,2," "),w:e,b:a.shortMonths[b],B:a.months[b],m:B(b+1),o:b+1,y:l.toString().substr(2,2),Y:l,H:B(c),k:c,I:B(c%12||12),l:c%12||12,M:B(this.get("Minutes",p)),p:12>c?"AM":"PM",P:12>c?"am":"pm",S:B(p.getSeconds()),L:B(Math.floor(m%1E3),3)},n.dateFormats);G(p,function(a,b){for(;-1!==g.indexOf("%"+b);)g=g.replace("%"+b,"function"===typeof a?a.call(k,m):a)});return h?g.substr(0,
1).toUpperCase()+g.substr(1):g};h.prototype.resolveDTLFormat=function(g){return F(g,!0)?g:(g=m(g),{main:g[0],from:g[1],to:g[2]})};h.prototype.getTimeTicks=function(m,u,h,p){var k=this,c=[],e={};var f=new k.Date(u);var b=m.unitRange,l=m.count||1,a;p=r(p,1);if(q(u)){k.set("Milliseconds",f,b>=g.second?0:l*Math.floor(k.get("Milliseconds",f)/l));b>=g.second&&k.set("Seconds",f,b>=g.minute?0:l*Math.floor(k.get("Seconds",f)/l));b>=g.minute&&k.set("Minutes",f,b>=g.hour?0:l*Math.floor(k.get("Minutes",f)/l));
b>=g.hour&&k.set("Hours",f,b>=g.day?0:l*Math.floor(k.get("Hours",f)/l));b>=g.day&&k.set("Date",f,b>=g.month?1:Math.max(1,l*Math.floor(k.get("Date",f)/l)));if(b>=g.month){k.set("Month",f,b>=g.year?0:l*Math.floor(k.get("Month",f)/l));var x=k.get("FullYear",f)}b>=g.year&&k.set("FullYear",f,x-x%l);b===g.week&&(x=k.get("Day",f),k.set("Date",f,k.get("Date",f)-x+p+(x<p?-7:0)));x=k.get("FullYear",f);p=k.get("Month",f);var E=k.get("Date",f),C=k.get("Hours",f);u=f.getTime();k.variableTimezone&&(a=h-u>4*g.month||
k.getTimezoneOffset(u)!==k.getTimezoneOffset(h));u=f.getTime();for(f=1;u<h;)c.push(u),u=b===g.year?k.makeTime(x+f*l,0):b===g.month?k.makeTime(x,p+f*l):!a||b!==g.day&&b!==g.week?a&&b===g.hour&&1<l?k.makeTime(x,p,E,C+f*l):u+b*l:k.makeTime(x,p,E+f*l*(b===g.day?1:7)),f++;c.push(u);b<=g.hour&&1E4>c.length&&c.forEach(function(a){0===a%18E5&&"000000000"===k.dateFormat("%H%M%S%L",a)&&(e[a]="day")})}c.info=y(m,{higherRanks:e,totalRange:b*l});return c};return h}();n.Time=h;return n.Time});O(q,"Core/Options.js",
[q["Core/Globals.js"],q["Core/Color/Color.js"],q["Core/Time.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.isTouchDevice,L=n.svg;h=h.parse;z=z.merge;"";n.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,
height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",
inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,
textAlign:"center"}},tooltip:{enabled:!0,animation:L,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:y?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:h("#f7f7f7").setOpacity(.85).get(),
borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};"";n.time=new q(z(n.defaultOptions.global,n.defaultOptions.time));n.dateFormat=function(h,q,B){return n.time.dateFormat(h,q,B)};return{dateFormat:n.dateFormat,defaultOptions:n.defaultOptions,time:n.time}});
O(q,"Core/Axis/Axis.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Axis/Tick.js"],q["Core/Utilities.js"],q["Core/Options.js"]],function(n,h,q,z,y,F){var L=n.animObject,G=y.addEvent,B=y.arrayMax,r=y.arrayMin,m=y.clamp,g=y.correctFloat,D=y.defined,H=y.destroyObjectProperties,v=y.error,u=y.extend,A=y.fireEvent,p=y.format,k=y.getMagnitude,c=y.isArray,e=y.isFunction,f=y.isNumber,b=y.isString,l=y.merge,a=y.normalizeTickInterval,x=y.objectEach,E=y.pick,
C=y.relativeLength,K=y.removeEvent,T=y.splat,R=y.syncTimeout,N=F.defaultOptions,I=q.deg2rad;n=function(){function w(d,a){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=
this.overlap=this.options=this.oldMin=this.oldMax=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(d,a)}w.prototype.init=function(d,a){var t=a.isX,b=this;b.chart=d;b.horiz=d.inverted&&!b.isZAxis?!t:t;b.isXAxis=
t;b.coll=b.coll||(t?"xAxis":"yAxis");A(this,"init",{userOptions:a});b.opposite=a.opposite;b.side=a.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(a);var c=this.options,f=c.type;b.labelFormatter=c.labels.formatter||b.defaultLabelFormatter;b.userOptions=a;b.minPixelPadding=0;b.reversed=c.reversed;b.visible=!1!==c.visible;b.zoomEnabled=!1!==c.zoomEnabled;b.hasNames="category"===f||!0===c.categories;b.categories=c.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups=
{};b.positiveValuesOnly=!!b.logarithmic;b.isLinked=D(c.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands={};b.len=0;b.minRange=b.userMinRange=c.minRange||c.maxZoom;b.range=c.range;b.offset=c.offset||0;b.max=null;b.min=null;b.crosshair=E(c.crosshair,T(d.options.tooltip.crosshairs)[t?0:1],!1);a=b.options.events;-1===d.axes.indexOf(b)&&(t?d.axes.splice(d.xAxis.length,0,b):d.axes.push(b),d[b.coll].push(b));b.series=b.series||[];d.inverted&&!b.isZAxis&&t&&"undefined"===
typeof b.reversed&&(b.reversed=!0);b.labelRotation=b.options.labels.rotation;x(a,function(d,a){e(d)&&G(b,a,d)});A(this,"afterInit")};w.prototype.setOptions=function(d){this.options=l(w.defaultOptions,"yAxis"===this.coll&&w.defaultYAxisOptions,[w.defaultTopAxisOptions,w.defaultRightAxisOptions,w.defaultBottomAxisOptions,w.defaultLeftAxisOptions][this.side],l(N[this.coll],d));A(this,"afterSetOptions",{userOptions:d})};w.prototype.defaultLabelFormatter=function(){var d=this.axis,a=f(this.value)?this.value:
NaN,b=d.chart.time,c=d.categories,l=this.dateTimeLabelFormat,e=N.lang,k=e.numericSymbols;e=e.numericSymbolMagnitude||1E3;var x=k&&k.length,g=d.options.labels.format;d=d.logarithmic?Math.abs(a):d.tickInterval;var E=this.chart,C=E.numberFormatter;if(g)var m=p(g,this,E);else if(c)m=""+this.value;else if(l)m=b.dateFormat(l,a);else if(x&&1E3<=d)for(;x--&&"undefined"===typeof m;)b=Math.pow(e,x+1),d>=b&&0===10*a%b&&null!==k[x]&&0!==a&&(m=C(a/b,-1)+k[x]);"undefined"===typeof m&&(m=1E4<=Math.abs(a)?C(a,-1):
C(a,-1,void 0,""));return m};w.prototype.getSeriesExtremes=function(){var d=this,a=d.chart,b;A(this,"getSeriesExtremes",null,function(){d.hasVisibleSeries=!1;d.dataMin=d.dataMax=d.threshold=null;d.softThreshold=!d.isXAxis;d.stacking&&d.stacking.buildStacks();d.series.forEach(function(t){if(t.visible||!a.options.chart.ignoreHiddenSeries){var c=t.options,l=c.threshold;d.hasVisibleSeries=!0;d.positiveValuesOnly&&0>=l&&(l=null);if(d.isXAxis){if(c=t.xData,c.length){c=d.logarithmic?c.filter(d.validatePositiveValue):
c;b=t.getXExtremes(c);var e=b.min;var k=b.max;f(e)||e instanceof Date||(c=c.filter(f),b=t.getXExtremes(c),e=b.min,k=b.max);c.length&&(d.dataMin=Math.min(E(d.dataMin,e),e),d.dataMax=Math.max(E(d.dataMax,k),k))}}else if(t=t.applyExtremes(),f(t.dataMin)&&(e=t.dataMin,d.dataMin=Math.min(E(d.dataMin,e),e)),f(t.dataMax)&&(k=t.dataMax,d.dataMax=Math.max(E(d.dataMax,k),k)),D(l)&&(d.threshold=l),!c.softThreshold||d.positiveValuesOnly)d.softThreshold=!1}})});A(this,"afterGetSeriesExtremes")};w.prototype.translate=
function(d,a,b,c,l,e){var t=this.linkedParent||this,k=1,J=0,x=c?t.oldTransA:t.transA;c=c?t.oldMin:t.min;var p=t.minPixelPadding;l=(t.isOrdinal||t.brokenAxis&&t.brokenAxis.hasBreaks||t.logarithmic&&l)&&t.lin2val;x||(x=t.transA);b&&(k*=-1,J=t.len);t.reversed&&(k*=-1,J-=k*(t.sector||t.len));a?(d=(d*k+J-p)/x+c,l&&(d=t.lin2val(d))):(l&&(d=t.val2lin(d)),d=f(c)?k*(d-c)*x+J+k*p+(f(e)?x*e:0):void 0);return d};w.prototype.toPixels=function(d,a){return this.translate(d,!1,!this.horiz,null,!0)+(a?0:this.pos)};
w.prototype.toValue=function(d,a){return this.translate(d-(a?0:this.pos),!0,!this.horiz,null,!0)};w.prototype.getPlotLinePath=function(d){function a(d,a,t){if("pass"!==C&&d<a||d>t)C?d=m(d,a,t):N=!0;return d}var b=this,c=b.chart,l=b.left,e=b.top,k=d.old,x=d.value,p=d.translatedValue,g=d.lineWidth,C=d.force,w,u,v,h,r=k&&c.oldChartHeight||c.chartHeight,K=k&&c.oldChartWidth||c.chartWidth,N,I=b.transB;d={value:x,lineWidth:g,old:k,force:C,acrossPanes:d.acrossPanes,translatedValue:p};A(this,"getPlotLinePath",
d,function(d){p=E(p,b.translate(x,null,null,k));p=m(p,-1E5,1E5);w=v=Math.round(p+I);u=h=Math.round(r-p-I);f(p)?b.horiz?(u=e,h=r-b.bottom,w=v=a(w,l,l+b.width)):(w=l,v=K-b.right,u=h=a(u,e,e+b.height)):(N=!0,C=!1);d.path=N&&!C?null:c.renderer.crispLine([["M",w,u],["L",v,h]],g||1)});return d.path};w.prototype.getLinearTickPositions=function(d,a,b){var t=g(Math.floor(a/d)*d);b=g(Math.ceil(b/d)*d);var c=[],f;g(t+d)===t&&(f=20);if(this.single)return[a];for(a=t;a<=b;){c.push(a);a=g(a+d,f);if(a===l)break;
var l=a}return c};w.prototype.getMinorTickInterval=function(){var d=this.options;return!0===d.minorTicks?E(d.minorTickInterval,"auto"):!1===d.minorTicks?null:d.minorTickInterval};w.prototype.getMinorTickPositions=function(){var d=this.options,a=this.tickPositions,b=this.minorTickInterval,c=[],f=this.pointRangePadding||0,l=this.min-f;f=this.max+f;var e=f-l;if(e&&e/b<this.len/3){var k=this.logarithmic;if(k)this.paddedTicks.forEach(function(d,a,t){a&&c.push.apply(c,k.getLogTickPositions(b,t[a-1],t[a],
!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())c=c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(b),l,f,d.startOfWeek));else for(d=l+(a[0]-l)%b;d<=f&&d!==c[0];d+=b)c.push(d)}0!==c.length&&this.trimTicks(c);return c};w.prototype.adjustForMinRange=function(){var d=this.options,a=this.min,b=this.max,c=this.logarithmic,f,l,e,k,x;this.isXAxis&&"undefined"===typeof this.minRange&&!c&&(D(d.min)||D(d.max)?this.minRange=null:(this.series.forEach(function(d){k=d.xData;
for(l=x=d.xIncrement?1:k.length-1;0<l;l--)if(e=k[l]-k[l-1],"undefined"===typeof f||e<f)f=e}),this.minRange=Math.min(5*f,this.dataMax-this.dataMin)));if(b-a<this.minRange){var p=this.dataMax-this.dataMin>=this.minRange;var g=this.minRange;var C=(g-b+a)/2;C=[a-C,E(d.min,a-C)];p&&(C[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);a=B(C);b=[a+g,E(d.max,a+g)];p&&(b[2]=c?c.log2lin(this.dataMax):this.dataMax);b=r(b);b-a<g&&(C[0]=b-g,C[1]=E(d.min,b-g),a=B(C))}this.min=a;this.max=
b};w.prototype.getClosest=function(){var d;this.categories?d=1:this.series.forEach(function(a){var t=a.closestPointRange,b=a.visible||!a.chart.options.chart.ignoreHiddenSeries;!a.noSharedTooltip&&D(t)&&b&&(d=D(d)?Math.min(d,t):t)});return d};w.prototype.nameToX=function(d){var a=c(this.categories),b=a?this.categories:this.names,f=d.options.x;d.series.requireSorting=!1;D(f)||(f=!1===this.options.uniqueNames?d.series.autoIncrement():a?b.indexOf(d.name):E(b.keys[d.name],-1));if(-1===f){if(!a)var l=b.length}else l=
f;"undefined"!==typeof l&&(this.names[l]=d.name,this.names.keys[d.name]=l);return l};w.prototype.updateNames=function(){var d=this,a=this.names;0<a.length&&(Object.keys(a.keys).forEach(function(d){delete a.keys[d]}),a.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)d.max=Math.max(d.max,a.xData.length-1),a.processData(),a.generatePoints();a.data.forEach(function(b,t){if(b&&b.options&&"undefined"!==typeof b.name){var c=d.nameToX(b);
"undefined"!==typeof c&&c!==b.x&&(b.x=c,a.xData[t]=c)}})}))};w.prototype.setAxisTranslation=function(d){var a=this,c=a.max-a.min,f=a.axisPointRange||0,l=0,e=0,k=a.linkedParent,x=!!a.categories,p=a.transA,g=a.isXAxis;if(g||x||f){var C=a.getClosest();k?(l=k.minPointOffset,e=k.pointRangePadding):a.series.forEach(function(d){var t=x?1:g?E(d.options.pointRange,C,0):a.axisPointRange||0,c=d.options.pointPlacement;f=Math.max(f,t);if(!a.single||x)d=d.is("xrange")?!g:g,l=Math.max(l,d&&b(c)?0:t/2),e=Math.max(e,
d&&"on"===c?0:t)});k=a.ordinal&&a.ordinal.slope&&C?a.ordinal.slope/C:1;a.minPointOffset=l*=k;a.pointRangePadding=e*=k;a.pointRange=Math.min(f,a.single&&x?1:c);g&&(a.closestPointRange=C)}d&&(a.oldTransA=p);a.translationSlope=a.transA=p=a.staticScale||a.len/(c+e||1);a.transB=a.horiz?a.left:a.bottom;a.minPixelPadding=p*l;A(this,"afterSetAxisTranslation")};w.prototype.minFromRange=function(){return this.max-this.range};w.prototype.setTickInterval=function(d){var b=this,c=b.chart,l=b.logarithmic,e=b.options,
x=b.isXAxis,p=b.isLinked,C=e.maxPadding,m=e.minPadding,w=e.tickInterval,u=e.tickPixelInterval,h=b.categories,r=f(b.threshold)?b.threshold:null,K=b.softThreshold;b.dateTime||h||p||this.getTickAmount();var N=E(b.userMin,e.min);var I=E(b.userMax,e.max);if(p){b.linkedParent=c[b.coll][e.linkedTo];var n=b.linkedParent.getExtremes();b.min=E(n.min,n.dataMin);b.max=E(n.max,n.dataMax);e.type!==b.linkedParent.options.type&&v(11,1,c)}else{if(K&&D(r))if(b.dataMin>=r)n=r,m=0;else if(b.dataMax<=r){var H=r;C=0}b.min=
E(N,n,b.dataMin);b.max=E(I,H,b.dataMax)}l&&(b.positiveValuesOnly&&!d&&0>=Math.min(b.min,E(b.dataMin,b.min))&&v(10,1,c),b.min=g(l.log2lin(b.min),16),b.max=g(l.log2lin(b.max),16));b.range&&D(b.max)&&(b.userMin=b.min=N=Math.max(b.dataMin,b.minFromRange()),b.userMax=I=b.max,b.range=null);A(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(h||b.axisPointRange||b.stacking&&b.stacking.usePercentage||p)&&D(b.min)&&D(b.max)&&(c=b.max-b.min)&&(!D(N)&&m&&(b.min-=c*m),!D(I)&&C&&(b.max+=
c*C));f(b.userMin)||(f(e.softMin)&&e.softMin<b.min&&(b.min=N=e.softMin),f(e.floor)&&(b.min=Math.max(b.min,e.floor)));f(b.userMax)||(f(e.softMax)&&e.softMax>b.max&&(b.max=I=e.softMax),f(e.ceiling)&&(b.max=Math.min(b.max,e.ceiling)));K&&D(b.dataMin)&&(r=r||0,!D(N)&&b.min<r&&b.dataMin>=r?b.min=b.options.minRange?Math.min(r,b.max-b.minRange):r:!D(I)&&b.max>r&&b.dataMax<=r&&(b.max=b.options.minRange?Math.max(r,b.min+b.minRange):r));b.tickInterval=b.min===b.max||"undefined"===typeof b.min||"undefined"===
typeof b.max?1:p&&!w&&u===b.linkedParent.options.tickPixelInterval?w=b.linkedParent.tickInterval:E(w,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,h?1:(b.max-b.min)*u/Math.max(b.len,u));x&&!d&&b.series.forEach(function(d){d.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);A(this,"initialAxisTranslation");b.pointRange&&!w&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));d=E(e.minTickInterval,b.dateTime&&!b.series.some(function(d){return d.noSharedTooltip})?
b.closestPointRange:0);!w&&b.tickInterval<d&&(b.tickInterval=d);b.dateTime||b.logarithmic||w||(b.tickInterval=a(b.tickInterval,void 0,k(b.tickInterval),E(e.allowDecimals,.5>b.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()};w.prototype.setTickPositions=function(){var d=this.options,a=d.tickPositions;var b=this.getMinorTickInterval();var c=d.tickPositioner,f=this.hasVerticalPanning(),l="colorAxis"===this.coll,e=(l||
!f)&&d.startOnTick;f=(l||!f)&&d.endOnTick;this.tickmarkOffset=this.categories&&"between"===d.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&D(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==d.allowDecimals);this.tickPositions=b=a&&a.slice();!b&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?b=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
d.units),this.min,this.max,d.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(b=[this.min,this.max],v(19,!1,this.chart)),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,
e,f);this.isLinked||(this.single&&2>b.length&&!this.categories&&!this.series.some(function(d){return d.is("heatmap")&&"between"===d.options.pointPlacement})&&(this.min-=.5,this.max+=.5),a||c||this.adjustTickAmount());A(this,"afterSetTickPositions")};w.prototype.trimTicks=function(d,a,b){var c=d[0],t=d[d.length-1],f=!this.isOrdinal&&this.minPointOffset||0;A(this,"trimTicks");if(!this.isLinked){if(a&&-Infinity!==c)this.min=c;else for(;this.min-f>d[0];)d.shift();if(b)this.max=t;else for(;this.max+f<
d[d.length-1];)d.pop();0===d.length&&D(c)&&!this.options.tickPositions&&d.push((t+c)/2)}};w.prototype.alignToOthers=function(){var d={},a,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||!1===b.startOnTick||!1===b.endOnTick||this.logarithmic||this.chart[this.coll].forEach(function(b){var c=b.options;c=[b.horiz?c.left:c.top,c.width,c.height,c.pane].join();b.series.length&&(d[c]?a=!0:d[c]=1)});return a};w.prototype.getTickAmount=function(){var d=this.options,a=d.tickAmount,
b=d.tickPixelInterval;!D(d.tickInterval)&&!a&&this.len<b&&!this.isRadial&&!this.logarithmic&&d.startOnTick&&d.endOnTick&&(a=2);!a&&this.alignToOthers()&&(a=Math.ceil(this.len/b)+1);4>a&&(this.finalTickAmt=a,a=5);this.tickAmount=a};w.prototype.adjustTickAmount=function(){var d=this.options,a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,l=b&&b.length,e=E(this.threshold,this.softThreshold?0:null),k;if(this.hasData()){if(l<c){for(k=this.min;b.length<c;)b.length%2||k===
e?b.push(g(b[b.length-1]+a)):b.unshift(g(b[0]-a));this.transA*=(l-1)/(c-1);this.min=d.startOnTick?b[0]:Math.min(this.min,b[0]);this.max=d.endOnTick?b[b.length-1]:Math.max(this.max,b[b.length-1])}else l>c&&(this.tickInterval*=2,this.setTickPositions());if(D(f)){for(a=d=b.length;a--;)(3===f&&1===a%2||2>=f&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}}};w.prototype.setScale=function(){var d,a=!1,b=!1;this.series.forEach(function(d){var c;a=a||d.isDirtyData||d.isDirty;b=b||(null===(c=d.xAxis)||
void 0===c?void 0:c.isDirty)||!1});this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(d=this.len!==this.oldAxisLength)||a||b||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=d||this.min!==this.oldMin||
this.max!==this.oldMax)):this.stacking&&this.stacking.cleanStacks();a&&this.panningState&&(this.panningState.isDirty=!0);A(this,"afterSetScale")};w.prototype.setExtremes=function(d,a,b,c,f){var t=this,l=t.chart;b=E(b,!0);t.series.forEach(function(d){delete d.kdTree});f=u(f,{min:d,max:a});A(t,"setExtremes",f,function(){t.userMin=d;t.userMax=a;t.eventArgs=f;b&&l.redraw(c)})};w.prototype.zoom=function(d,a){var b=this,c=this.dataMin,t=this.dataMax,f=this.options,l=Math.min(c,E(f.min,c)),e=Math.max(t,
E(f.max,t));d={newMin:d,newMax:a};A(this,"zoom",d,function(d){var a=d.newMin,f=d.newMax;if(a!==b.min||f!==b.max)b.allowZoomOutside||(D(c)&&(a<l&&(a=l),a>e&&(a=e)),D(t)&&(f<l&&(f=l),f>e&&(f=e))),b.displayBtn="undefined"!==typeof a||"undefined"!==typeof f,b.setExtremes(a,f,!1,void 0,{trigger:"zoom"});d.zoomed=!0});return d.zoomed};w.prototype.setAxisSize=function(){var d=this.chart,a=this.options,b=a.offsets||[0,0,0,0],c=this.horiz,f=this.width=Math.round(C(E(a.width,d.plotWidth-b[3]+b[1]),d.plotWidth)),
l=this.height=Math.round(C(E(a.height,d.plotHeight-b[0]+b[2]),d.plotHeight)),e=this.top=Math.round(C(E(a.top,d.plotTop+b[0]),d.plotHeight,d.plotTop));a=this.left=Math.round(C(E(a.left,d.plotLeft+b[3]),d.plotWidth,d.plotLeft));this.bottom=d.chartHeight-l-e;this.right=d.chartWidth-f-a;this.len=Math.max(c?f:l,0);this.pos=c?a:e};w.prototype.getExtremes=function(){var d=this.logarithmic;return{min:d?g(d.lin2log(this.min)):this.min,max:d?g(d.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}};w.prototype.getThreshold=function(d){var a=this.logarithmic,b=a?a.lin2log(this.min):this.min;a=a?a.lin2log(this.max):this.max;null===d||-Infinity===d?d=b:Infinity===d?d=a:b>d?d=b:a<d&&(d=a);return this.translate(d,0,1,0,1)};w.prototype.autoLabelAlign=function(d){var a=(E(d,0)-90*this.side+720)%360;d={align:"center"};A(this,"autoLabelAlign",d,function(d){15<a&&165>a?d.align="right":195<a&&345>a&&(d.align="left")});return d.align};w.prototype.tickSize=function(d){var a=
this.options,b=a["tick"===d?"tickLength":"minorTickLength"],c=E(a["tick"===d?"tickWidth":"minorTickWidth"],"tick"===d&&this.isXAxis&&!this.categories?1:0);if(c&&b){"inside"===a[d+"Position"]&&(b=-b);var f=[b,c]}d={tickSize:f};A(this,"afterTickSize",d);return d.tickSize};w.prototype.labelMetrics=function(){var d=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[d]&&this.ticks[d].label)};w.prototype.unsquish=
function(){var d=this.options.labels,a=this.horiz,b=this.tickInterval,c=b,f=this.len/(((this.categories?1:0)+this.max-this.min)/b),l,e=d.rotation,k=this.labelMetrics(),x,p=Number.MAX_VALUE,C,m=this.max-this.min,w=function(d){var a=d/(f||1);a=1<a?Math.ceil(a):1;a*b>m&&Infinity!==d&&Infinity!==f&&m&&(a=Math.ceil(m/b));return g(a*b)};a?(C=!d.staggerLines&&!d.step&&(D(e)?[e]:f<E(d.autoRotationLimit,80)&&d.autoRotation))&&C.forEach(function(d){if(d===e||d&&-90<=d&&90>=d){x=w(Math.abs(k.h/Math.sin(I*d)));
var a=x+Math.abs(d/360);a<p&&(p=a,l=d,c=x)}}):d.step||(c=w(k.h));this.autoRotation=C;this.labelRotation=E(l,e);return c};w.prototype.getSlotWidth=function(d){var a,b=this.chart,c=this.horiz,l=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),k=b.margin[3];if(d&&f(d.slotWidth))return d.slotWidth;if(c&&l&&2>(l.step||0))return l.rotation?0:(this.staggerLines||1)*this.len/e;if(!c){d=null===(a=null===l||void 0===l?void 0:l.style)||void 0===a?void 0:a.width;if(void 0!==d)return parseInt(d,
10);if(k)return k-b.spacing[3]}return.33*b.chartWidth};w.prototype.renderUnsquish=function(){var d=this.chart,a=d.renderer,c=this.tickPositions,f=this.ticks,l=this.options.labels,e=l&&l.style||{},k=this.horiz,x=this.getSlotWidth(),p=Math.max(1,Math.round(x-2*(l.padding||5))),g={},E=this.labelMetrics(),C=l.style&&l.style.textOverflow,m=0;b(l.rotation)||(g.rotation=l.rotation||0);c.forEach(function(d){d=f[d];d.movedLabel&&d.replaceMovedLabel();d&&d.label&&d.label.textPxLength>m&&(m=d.label.textPxLength)});
this.maxLabelLength=m;if(this.autoRotation)m>p&&m>E.h?g.rotation=this.labelRotation:this.labelRotation=0;else if(x){var w=p;if(!C){var u="clip";for(p=c.length;!k&&p--;){var r=c[p];if(r=f[r].label)r.styles&&"ellipsis"===r.styles.textOverflow?r.css({textOverflow:"clip"}):r.textPxLength>x&&r.css({width:x+"px"}),r.getBBox().height>this.len/c.length-(E.h-E.f)&&(r.specificTextOverflow="ellipsis")}}}g.rotation&&(w=m>.5*d.chartHeight?.33*d.chartHeight:m,C||(u="ellipsis"));if(this.labelAlign=l.align||this.autoLabelAlign(this.labelRotation))g.align=
this.labelAlign;c.forEach(function(d){var a=(d=f[d])&&d.label,b=e.width,c={};a&&(a.attr(g),d.shortenLabel?d.shortenLabel():w&&!b&&"nowrap"!==e.whiteSpace&&(w<a.textPxLength||"SPAN"===a.element.tagName)?(c.width=w+"px",C||(c.textOverflow=a.specificTextOverflow||u),a.css(c)):a.styles&&a.styles.width&&!c.width&&!b&&a.css({width:null}),delete a.specificTextOverflow,d.rotation=g.rotation)},this);this.tickRotCorr=a.rotCorr(E.b,this.labelRotation||0,0!==this.side)};w.prototype.hasData=function(){return this.series.some(function(d){return d.hasData()})||
this.options.showEmpty&&D(this.min)&&D(this.max)};w.prototype.addTitle=function(d){var a=this.chart.renderer,b=this.horiz,c=this.opposite,f=this.options.title,e,k=this.chart.styledMode;this.axisTitle||((e=f.textAlign)||(e=(b?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[f.align]),this.axisTitle=a.text(f.text,0,0,f.useHTML).attr({zIndex:7,rotation:f.rotation||0,align:e}).addClass("highcharts-axis-title"),k||this.axisTitle.css(l(f.style)),this.axisTitle.add(this.axisGroup),
this.axisTitle.isNew=!0);k||f.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[d?"show":"hide"](d)};w.prototype.generateTick=function(d){var a=this.ticks;a[d]?a[d].addLabel():a[d]=new z(this,d)};w.prototype.getOffset=function(){var d=this,a=d.chart,b=a.renderer,c=d.options,f=d.tickPositions,l=d.ticks,e=d.horiz,k=d.side,p=a.inverted&&!d.isZAxis?[1,0,3,2][k]:k,g,C=0,m=0,w=c.title,u=c.labels,r=0,v=a.axisOffset;a=a.clipOffset;var h=[-1,1,1,-1][k],K=c.className,N=d.axisParent;
var I=d.hasData();d.showAxis=g=I||E(c.showEmpty,!0);d.staggerLines=d.horiz&&u.staggerLines;d.axisGroup||(d.gridGroup=b.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(K||"")).add(N),d.axisGroup=b.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(K||"")).add(N),d.labelGroup=b.g("axis-labels").attr({zIndex:u.zIndex||7}).addClass("highcharts-"+d.coll.toLowerCase()+"-labels "+(K||"")).add(N));I||d.isLinked?(f.forEach(function(a,
b){d.generateTick(a,b)}),d.renderUnsquish(),d.reserveSpaceDefault=0===k||2===k||{1:"left",3:"right"}[k]===d.labelAlign,E(u.reserveSpace,"center"===d.labelAlign?!0:null,d.reserveSpaceDefault)&&f.forEach(function(a){r=Math.max(l[a].getLabelSize(),r)}),d.staggerLines&&(r*=d.staggerLines),d.labelOffset=r*(d.opposite?-1:1)):x(l,function(a,d){a.destroy();delete l[d]});if(w&&w.text&&!1!==w.enabled&&(d.addTitle(g),g&&!1!==w.reserveSpace)){d.titleOffset=C=d.axisTitle.getBBox()[e?"height":"width"];var n=w.offset;
m=D(n)?0:E(w.margin,e?5:10)}d.renderLine();d.offset=h*E(c.offset,v[k]?v[k]+(c.margin||0):0);d.tickRotCorr=d.tickRotCorr||{x:0,y:0};b=0===k?-d.labelMetrics().h:2===k?d.tickRotCorr.y:0;m=Math.abs(r)+m;r&&(m=m-b+h*(e?E(u.y,d.tickRotCorr.y+8*h):u.x));d.axisTitleMargin=E(n,m);d.getMaxLabelDimensions&&(d.maxLabelDimensions=d.getMaxLabelDimensions(l,f));e=this.tickSize("tick");v[k]=Math.max(v[k],d.axisTitleMargin+C+h*d.offset,m,f&&f.length&&e?e[0]+h*d.offset:0);c=c.offset?0:2*Math.floor(d.axisLine.strokeWidth()/
2);a[p]=Math.max(a[p],c);A(this,"afterGetOffset")};w.prototype.getLinePath=function(a){var d=this.chart,b=this.opposite,c=this.offset,f=this.horiz,l=this.left+(b?this.width:0)+c;c=d.chartHeight-this.bottom-(b?this.height:0)+c;b&&(a*=-1);return d.renderer.crispLine([["M",f?this.left:l,f?c:this.top],["L",f?d.chartWidth-this.right:l,f?c:d.chartHeight-this.bottom]],a)};w.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};w.prototype.getTitlePosition=function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,l=this.options.title,e=a?b:c,k=this.opposite,x=this.offset,p=l.x||0,g=l.y||0,E=this.axisTitle,C=this.chart.renderer.fontMetrics(l.style&&l.style.fontSize,E);E=Math.max(E.getBBox(null,0).height-C.h-1,0);f={low:e+(a?0:f),middle:e+f/2,high:e+(a?f:0)}[l.align];b=(a?c+this.height:b)+(a?1:-1)*
(k?-1:1)*this.axisTitleMargin+[-E,E,C.f,-E][this.side];a={x:a?f+p:b+(k?this.width:0)+x+p,y:a?b+g-(k?this.height:0)+x:f+g};A(this,"afterGetTitlePosition",{titlePosition:a});return a};w.prototype.renderMinorTick=function(a){var d=this.chart.hasRendered&&f(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new z(this,a,"minor"));d&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)};w.prototype.renderTick=function(a,b){var d,c=this.isLinked,l=this.ticks,t=this.chart.hasRendered&&f(this.oldMin);if(!c||a>=
this.min&&a<=this.max||(null===(d=this.grid)||void 0===d?0:d.isColumn))l[a]||(l[a]=new z(this,a)),t&&l[a].isNew&&l[a].render(b,!0,-1),l[a].render(b)};w.prototype.render=function(){var a=this,b=a.chart,c=a.logarithmic,l=a.options,e=a.isLinked,k=a.tickPositions,p=a.axisTitle,g=a.ticks,E=a.minorTicks,C=a.alternateBands,m=l.stackLabels,w=l.alternateGridColor,u=a.tickmarkOffset,r=a.axisLine,v=a.showAxis,h=L(b.renderer.globalAnimation),K,N;a.labelEdge.length=0;a.overlap=!1;[g,E,C].forEach(function(a){x(a,
function(a){a.isActive=!1})});if(a.hasData()||e)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(d){a.renderMinorTick(d)}),k.length&&(k.forEach(function(d,b){a.renderTick(d,b)}),u&&(0===a.min||a.single)&&(g[-1]||(g[-1]=new z(a,-1,null,!0)),g[-1].render(-1))),w&&k.forEach(function(d,f){N="undefined"!==typeof k[f+1]?k[f+1]+u:a.max-u;0===f%2&&d<a.max&&N<=a.max+(b.polar?-u:u)&&(C[d]||(C[d]=new q.PlotLineOrBand(a)),K=d+u,C[d].options={from:c?c.lin2log(K):K,to:c?c.lin2log(N):
N,color:w,className:"highcharts-alternate-grid"},C[d].render(),C[d].isActive=!0)}),a._addedPlotLB||((l.plotLines||[]).concat(l.plotBands||[]).forEach(function(d){a.addPlotBandOrLine(d)}),a._addedPlotLB=!0);[g,E,C].forEach(function(a){var d,c=[],f=h.duration;x(a,function(a,d){a.isActive||(a.render(d,!1,0),a.isActive=!1,c.push(d))});R(function(){for(d=c.length;d--;)a[c[d]]&&!a[c[d]].isActive&&(a[c[d]].destroy(),delete a[c[d]])},a!==C&&b.hasRendered&&f?f:0)});r&&(r[r.isPlaced?"animate":"attr"]({d:this.getLinePath(r.strokeWidth())}),
r.isPlaced=!0,r[v?"show":"hide"](v));p&&v&&(l=a.getTitlePosition(),f(l.y)?(p[p.isNew?"attr":"animate"](l),p.isNew=!1):(p.attr("y",-9999),p.isNew=!0));m&&m.enabled&&a.stacking&&a.stacking.renderStackTotals();a.isDirty=!1;A(this,"afterRender")};w.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})};w.prototype.getKeepProps=function(){return this.keepProps||w.keepProps};w.prototype.destroy=function(a){var d=
this,b=d.plotLinesAndBands,c;A(this,"destroy",{keepEvents:a});a||K(d);[d.ticks,d.minorTicks,d.alternateBands].forEach(function(a){H(a)});if(b)for(a=b.length;a--;)b[a].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){d[a]&&(d[a]=d[a].destroy())});for(c in d.plotLinesAndBandsGroups)d.plotLinesAndBandsGroups[c]=d.plotLinesAndBandsGroups[c].destroy();x(d,function(a,b){-1===d.getKeepProps().indexOf(b)&&delete d[b]})};w.prototype.drawCrosshair=
function(a,b){var d=this.crosshair,c=E(d.snap,!0),f,l=this.cross,t=this.chart;A(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(D(b)||!c)){c?D(b)&&(f=E("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):f=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(D(f)){var e={value:b&&(this.isXAxis?b.x:E(b.stackY,b.y)),translatedValue:f};t.polar&&u(e,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:b});e=
this.getPlotLinePath(e)||null}if(!D(e)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;l||(this.cross=l=t.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+d.className).attr({zIndex:E(d.zIndex,2)}).add(),t.styledMode||(l.attr({stroke:d.color||(c?h.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":E(d.width,1)}).css({"pointer-events":"none"}),d.dashStyle&&l.attr({dashstyle:d.dashStyle})));l.show().attr({d:e});c&&!d.width&&l.attr({"stroke-width":this.transA});
this.cross.e=a}else this.hideCrosshair();A(this,"afterDrawCrosshair",{e:a,point:b})};w.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();A(this,"afterHideCrosshair")};w.prototype.hasVerticalPanning=function(){var a,b;return/y/.test((null===(b=null===(a=this.chart.options.chart)||void 0===a?void 0:a.panning)||void 0===b?void 0:b.type)||"")};w.prototype.validatePositiveValue=function(a){return f(a)&&0<a};w.defaultOptions={dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},
second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"};w.defaultYAxisOptions={endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,
-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};w.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};w.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};w.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};w.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};w.keepProps="extKey hcEvents names series userMax userMin".split(" ");return w}();
q.Axis=n;return q.Axis});O(q,"Core/Axis/DateTimeAxis.js",[q["Core/Axis/Axis.js"],q["Core/Utilities.js"]],function(n,h){var q=h.addEvent,z=h.getMagnitude,y=h.normalizeTickInterval,F=h.timeUnits,M=function(){function h(h){this.axis=h}h.prototype.normalizeTimeTickInterval=function(h,r){var m=r||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];r=m[m.length-
1];var g=F[r[0]],n=r[1],H;for(H=0;H<m.length&&!(r=m[H],g=F[r[0]],n=r[1],m[H+1]&&h<=(g*n[n.length-1]+F[m[H+1][0]])/2);H++);g===F.year&&h<5*g&&(n=[1,2,5]);h=y(h/g,n,"year"===r[0]?Math.max(z(h/g),1):1);return{unitRange:g,count:h,unitName:r[0]}};return h}();h=function(){function h(){}h.compose=function(h){h.keepProps.push("dateTime");h.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};q(h,"init",function(r){"datetime"!==r.userOptions.type?this.dateTime=
void 0:this.dateTime||(this.dateTime=new M(this))})};h.AdditionsClass=M;return h}();h.compose(n);return h});O(q,"Core/Axis/LogarithmicAxis.js",[q["Core/Axis/Axis.js"],q["Core/Utilities.js"]],function(n,h){var q=h.addEvent,z=h.getMagnitude,y=h.normalizeTickInterval,F=h.pick,M=function(){function h(h){this.axis=h}h.prototype.getLogTickPositions=function(h,r,m,g){var n=this.axis,H=n.len,v=n.options,u=[];g||(this.minorAutoInterval=void 0);if(.5<=h)h=Math.round(h),u=n.getLinearTickPositions(h,r,m);else if(.08<=
h){v=Math.floor(r);var A,p;for(H=.3<h?[1,2,4]:.15<h?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];v<m+1&&!p;v++){var k=H.length;for(A=0;A<k&&!p;A++){var c=this.log2lin(this.lin2log(v)*H[A]);c>r&&(!g||e<=m)&&"undefined"!==typeof e&&u.push(e);e>m&&(p=!0);var e=c}}}else r=this.lin2log(r),m=this.lin2log(m),h=g?n.getMinorTickInterval():v.tickInterval,h=F("auto"===h?null:h,this.minorAutoInterval,v.tickPixelInterval/(g?5:1)*(m-r)/((g?H/n.tickPositions.length:H)||1)),h=y(h,void 0,z(h)),u=n.getLinearTickPositions(h,r,m).map(this.log2lin),
g||(this.minorAutoInterval=h/5);g||(n.tickInterval=h);return u};h.prototype.lin2log=function(h){return Math.pow(10,h)};h.prototype.log2lin=function(h){return Math.log(h)/Math.LN10};return h}();h=function(){function h(){}h.compose=function(h){h.keepProps.push("logarithmic");var r=h.prototype,m=M.prototype;r.log2lin=m.log2lin;r.lin2log=m.lin2log;q(h,"init",function(g){var m=this.logarithmic;"logarithmic"!==g.userOptions.type?this.logarithmic=void 0:(m||(m=this.logarithmic=new M(this)),this.log2lin!==
m.log2lin&&(m.log2lin=this.log2lin.bind(this)),this.lin2log!==m.lin2log&&(m.lin2log=this.lin2log.bind(this)))});q(h,"afterInit",function(){var g=this.logarithmic;g&&(this.lin2val=function(m){return g.lin2log(m)},this.val2lin=function(m){return g.log2lin(m)})})};return h}();h.compose(n);return h});O(q,"Core/Axis/PlotLineOrBand.js",[q["Core/Axis/Axis.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q){var z=q.arrayMax,y=q.arrayMin,F=q.defined,L=q.destroyObjectProperties,G=q.erase,B=q.extend,
r=q.merge,m=q.objectEach,g=q.pick;q=function(){function n(g,m){this.axis=g;m&&(this.options=m,this.id=m.id)}n.prototype.render=function(){h.fireEvent(this,"render");var n=this,v=n.axis,u=v.horiz,A=v.logarithmic,p=n.options,k=p.label,c=n.label,e=p.to,f=p.from,b=p.value,l=F(f)&&F(e),a=F(b),x=n.svgElem,E=!x,C=[],K=p.color,q=g(p.zIndex,0),D=p.events;C={"class":"highcharts-plot-"+(l?"band ":"line ")+(p.className||"")};var N={},I=v.chart.renderer,w=l?"bands":"lines";A&&(f=A.log2lin(f),e=A.log2lin(e),b=
A.log2lin(b));v.chart.styledMode||(a?(C.stroke=K||"#999999",C["stroke-width"]=g(p.width,1),p.dashStyle&&(C.dashstyle=p.dashStyle)):l&&(C.fill=K||"#e6ebf5",p.borderWidth&&(C.stroke=p.borderColor,C["stroke-width"]=p.borderWidth)));N.zIndex=q;w+="-"+q;(A=v.plotLinesAndBandsGroups[w])||(v.plotLinesAndBandsGroups[w]=A=I.g("plot-"+w).attr(N).add());E&&(n.svgElem=x=I.path().attr(C).add(A));if(a)C=v.getPlotLinePath({value:b,lineWidth:x.strokeWidth(),acrossPanes:p.acrossPanes});else if(l)C=v.getPlotBandPath(f,
e,p);else return;!n.eventsAdded&&D&&(m(D,function(a,b){x.on(b,function(a){D[b].apply(n,[a])})}),n.eventsAdded=!0);(E||!x.d)&&C&&C.length?x.attr({d:C}):x&&(C?(x.show(!0),x.animate({d:C})):x.d&&(x.hide(),c&&(n.label=c=c.destroy())));k&&(F(k.text)||F(k.formatter))&&C&&C.length&&0<v.width&&0<v.height&&!C.isFlat?(k=r({align:u&&l&&"center",x:u?!l&&4:10,verticalAlign:!u&&l&&"middle",y:u?l?16:10:l?6:-4,rotation:u&&!l&&90},k),this.renderLabel(k,C,l,q)):c&&c.hide();return n};n.prototype.renderLabel=function(g,
m,h,r){var p=this.label,k=this.axis.chart.renderer;p||(p={align:g.textAlign||g.align,rotation:g.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(g.className||"")},p.zIndex=r,r=this.getLabelText(g),this.label=p=k.text(r,0,0,g.useHTML).attr(p).add(),this.axis.chart.styledMode||p.css(g.style));k=m.xBounds||[m[0][1],m[1][1],h?m[2][1]:m[0][1]];m=m.yBounds||[m[0][2],m[1][2],h?m[2][2]:m[0][2]];h=y(k);r=y(m);p.align(g,!1,{x:h,y:r,width:z(k)-h,height:z(m)-r});p.show(!0)};n.prototype.getLabelText=
function(g){return F(g.formatter)?g.formatter.call(this):g.text};n.prototype.destroy=function(){G(this.axis.plotLinesAndBands,this);delete this.axis;L(this)};return n}();B(n.prototype,{getPlotBandPath:function(g,m,h){void 0===h&&(h=this.options);var r=this.getPlotLinePath({value:m,force:!0,acrossPanes:h.acrossPanes});h=this.getPlotLinePath({value:g,force:!0,acrossPanes:h.acrossPanes});var v=[],p=this.horiz,k=1;g=g<this.min&&m<this.min||g>this.max&&m>this.max;if(h&&r){if(g){var c=h.toString()===r.toString();
k=0}for(g=0;g<h.length;g+=2){m=h[g];var e=h[g+1],f=r[g],b=r[g+1];"M"!==m[0]&&"L"!==m[0]||"M"!==e[0]&&"L"!==e[0]||"M"!==f[0]&&"L"!==f[0]||"M"!==b[0]&&"L"!==b[0]||(p&&f[1]===m[1]?(f[1]+=k,b[1]+=k):p||f[2]!==m[2]||(f[2]+=k,b[2]+=k),v.push(["M",m[1],m[2]],["L",e[1],e[2]],["L",b[1],b[2]],["L",f[1],f[2]],["Z"]));v.isFlat=c}}return v},addPlotBand:function(g){return this.addPlotBandOrLine(g,"plotBands")},addPlotLine:function(g){return this.addPlotBandOrLine(g,"plotLines")},addPlotBandOrLine:function(g,m){var r=
new h.PlotLineOrBand(this,g),u=this.userOptions;this.visible&&(r=r.render());if(r){if(m){var n=u[m]||[];n.push(g);u[m]=n}this.plotLinesAndBands.push(r);this._addedPlotLB=!0}return r},removePlotBandOrLine:function(g){for(var m=this.plotLinesAndBands,h=this.options,r=this.userOptions,n=m.length;n--;)m[n].id===g&&m[n].destroy();[h.plotLines||[],r.plotLines||[],h.plotBands||[],r.plotBands||[]].forEach(function(p){for(n=p.length;n--;)(p[n]||{}).id===g&&G(p,p[n])})},removePlotBand:function(g){this.removePlotBandOrLine(g)},
removePlotLine:function(g){this.removePlotBandOrLine(g)}});h.PlotLineOrBand=q;return h.PlotLineOrBand});O(q,"Core/Tooltip.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=n.doc,z=h.clamp,y=h.css,F=h.defined,M=h.discardElement,G=h.extend,B=h.fireEvent,r=h.format,m=h.isNumber,g=h.isString,D=h.merge,H=h.pick,v=h.splat,u=h.syncTimeout,A=h.timeUnits;"";var p=function(){function k(c,e){this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now=
{};this.options={};this.outside=!1;this.chart=c;this.init(c,e)}k.prototype.applyFilter=function(){var c=this.chart;c.renderer.definition({tagName:"filter",id:"drop-shadow-"+c.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});c.renderer.definition({tagName:"style",
textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})};k.prototype.bodyFormatter=function(c){return c.map(function(c){var f=c.series.tooltipOptions;return(f[(c.point.formatPrefix||"point")+"Formatter"]||c.point.tooltipFormatter).call(c.point,f[(c.point.formatPrefix||"point")+"Format"]||"")})};k.prototype.cleanSplit=function(c){this.chart.series.forEach(function(e){var f=e&&e.tt;f&&(!f.isActive||c?e.tt=f.destroy():f.isActive=!1)})};k.prototype.defaultFormatter=function(c){var e=
this.points||v(this);var f=[c.tooltipFooterHeaderFormatter(e[0])];f=f.concat(c.bodyFormatter(e));f.push(c.tooltipFooterHeaderFormatter(e[0],!0));return f};k.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),M(this.container));h.clearTimeout(this.hideTimer);h.clearTimeout(this.tooltipTimeout)};k.prototype.getAnchor=function(c,e){var f=this.chart,
b=f.pointer,l=f.inverted,a=f.plotTop,k=f.plotLeft,g=0,p=0,m,h;c=v(c);this.followPointer&&e?("undefined"===typeof e.chartX&&(e=b.normalize(e)),c=[e.chartX-k,e.chartY-a]):c[0].tooltipPos?c=c[0].tooltipPos:(c.forEach(function(b){m=b.series.yAxis;h=b.series.xAxis;g+=b.plotX+(!l&&h?h.left-k:0);p+=(b.plotLow?(b.plotLow+b.plotHigh)/2:b.plotY)+(!l&&m?m.top-a:0)}),g/=c.length,p/=c.length,c=[l?f.plotWidth-p:g,this.shared&&!l&&1<c.length&&e?e.chartY-a:l?f.plotHeight-g:p]);return c.map(Math.round)};k.prototype.getDateFormat=
function(c,e,f,b){var l=this.chart.time,a=l.dateFormat("%m-%d %H:%M:%S.%L",e),k={millisecond:15,second:12,minute:9,hour:6,day:3},g="millisecond";for(p in A){if(c===A.week&&+l.dateFormat("%w",e)===f&&"00:00:00.000"===a.substr(6)){var p="week";break}if(A[p]>c){p=g;break}if(k[p]&&a.substr(k[p])!=="01-01 00:00:00.000".substr(k[p]))break;"week"!==p&&(g=p)}if(p)var m=l.resolveDTLFormat(b[p]).main;return m};k.prototype.getLabel=function(){var c,e,f=this,b=this.chart.renderer,l=this.chart.styledMode,a=this.options,
k="tooltip"+(F(a.className)?" "+a.className:""),p=(null===(c=a.style)||void 0===c?void 0:c.pointerEvents)||(!this.followPointer&&a.stickOnContact?"auto":"none"),g;c=function(){f.inContact=!0};var m=function(){var a=f.chart.hoverSeries;f.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=g=n.doc.createElement("div"),g.className="highcharts-tooltip-container",y(g,{position:"absolute",top:"1px",pointerEvents:p,zIndex:3}),n.doc.body.appendChild(g),this.renderer=
b=new n.Renderer(g,0,0,null===(e=this.chart.options.chart)||void 0===e?void 0:e.style,void 0,void 0,b.styledMode));this.split?this.label=b.g(k):(this.label=b.label("",0,0,a.shape||"callout",null,null,a.useHTML,null,k).attr({padding:a.padding,r:a.borderRadius}),l||this.label.attr({fill:a.backgroundColor,"stroke-width":a.borderWidth}).css(a.style).css({pointerEvents:p}).shadow(a.shadow));l&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(f.outside&&!f.split){var h=
this.label,r=h.xSetter,u=h.ySetter;h.xSetter=function(a){r.call(h,f.distance);g.style.left=a+"px"};h.ySetter=function(a){u.call(h,f.distance);g.style.top=a+"px"}}this.label.on("mouseenter",c).on("mouseleave",m).attr({zIndex:8}).add()}return this.label};k.prototype.getPosition=function(c,e,f){var b=this.chart,l=this.distance,a={},k=b.inverted&&f.h||0,g,p=this.outside,m=p?q.documentElement.clientWidth-2*l:b.chartWidth,h=p?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,
q.documentElement.offsetHeight,q.documentElement.clientHeight):b.chartHeight,r=b.pointer.getChartPosition(),u=b.containerScaling,v=function(a){return u?a*u.scaleX:a},w=function(a){return u?a*u.scaleY:a},d=function(a){var d="x"===a;return[a,d?m:h,d?c:e].concat(p?[d?v(c):w(e),d?r.left-l+v(f.plotX+b.plotLeft):r.top-l+w(f.plotY+b.plotTop),0,d?m:h]:[d?c:e,d?f.plotX+b.plotLeft:f.plotY+b.plotTop,d?b.plotLeft:b.plotTop,d?b.plotLeft+b.plotWidth:b.plotTop+b.plotHeight])},t=d("y"),J=d("x"),n=!this.followPointer&&
H(f.ttBelow,!b.inverted===!!f.negative),A=function(d,b,c,f,t,e,g){var p="y"===d?w(l):v(l),x=(c-f)/2,m=f<t-l,E=t+l+f<b,h=t-p-c+x;t=t+p-x;if(n&&E)a[d]=t;else if(!n&&m)a[d]=h;else if(m)a[d]=Math.min(g-f,0>h-k?h:h-k);else if(E)a[d]=Math.max(e,t+k+c>b?t:t+k);else return!1},D=function(d,b,c,f,t){var e;t<l||t>b-l?e=!1:a[d]=t<c/2?1:t>b-f/2?b-f-2:t-c/2;return e},B=function(a){var d=t;t=J;J=d;g=a},y=function(){!1!==A.apply(0,t)?!1!==D.apply(0,J)||g||(B(!0),y()):g?a.x=a.y=0:(B(!0),y())};(b.inverted||1<this.len)&&
B();y();return a};k.prototype.getXDateFormat=function(c,e,f){e=e.dateTimeLabelFormats;var b=f&&f.closestPointRange;return(b?this.getDateFormat(b,c.x,f.options.startOfWeek,e):e.day)||e.year};k.prototype.hide=function(c){var e=this;h.clearTimeout(this.hideTimer);c=H(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){e.getLabel().fadeOut(c?void 0:c);e.isHidden=!0},c))};k.prototype.init=function(c,e){this.chart=c;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=
!0;this.split=e.split&&!c.inverted&&!c.polar;this.shared=e.shared||this.split;this.outside=H(e.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))};k.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};k.prototype.move=function(c,e,f,b){var l=this,a=l.now,k=!1!==l.options.animation&&!l.isHidden&&(1<Math.abs(c-a.x)||1<Math.abs(e-a.y)),g=l.followPointer||1<l.len;G(a,{x:k?(2*a.x+c)/3:c,y:k?(a.y+e)/2:e,anchorX:g?void 0:k?(2*a.anchorX+f)/
3:f,anchorY:g?void 0:k?(a.anchorY+b)/2:b});l.getLabel().attr(a);l.drawTracker();k&&(h.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){l&&l.move(c,e,f,b)},32))};k.prototype.refresh=function(c,e){var f=this.chart,b=this.options,l=c,a={},k=[],g=b.formatter||this.defaultFormatter;a=this.shared;var p=f.styledMode;if(b.enabled){h.clearTimeout(this.hideTimer);this.followPointer=v(l)[0].series.tooltipOptions.followPointer;var m=this.getAnchor(l,e);e=m[0];var r=m[1];!a||l.series&&
l.series.noSharedTooltip?a=l.getLabelConfig():(f.pointer.applyInactiveState(l),l.forEach(function(a){a.setState("hover");k.push(a.getLabelConfig())}),a={x:l[0].category,y:l[0].y},a.points=k,l=l[0]);this.len=k.length;f=g.call(a,this);g=l.series;this.distance=H(g.tooltipOptions.distance,16);!1===f?this.hide():(this.split?this.renderSplit(f,v(c)):(c=this.getLabel(),b.style.width&&!p||c.css({width:this.chart.spacingBox.width+"px"}),c.attr({text:f&&f.join?f.join(""):f}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
H(l.colorIndex,g.colorIndex)),p||c.attr({stroke:b.borderColor||l.color||g.color||"#666666"}),this.updatePosition({plotX:e,plotY:r,negative:l.negative,ttBelow:l.ttBelow,h:m[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1);B(this,"refresh")}};k.prototype.renderSplit=function(c,e){function f(a,d,b,c,f){void 0===f&&(f=!0);b?(d=B?0:L,a=z(a-c/2,A.left,A.right-c)):(d-=y,a=f?a-c-t:a+t,a=z(a,f?a:A.left,A.right));return{x:a,y:d}}var b=this,l=b.chart,a=b.chart,k=a.plotHeight,
p=a.plotLeft,m=a.plotTop,h=a.pointer,r=a.renderer,u=a.scrollablePixelsY,v=void 0===u?0:u;u=a.scrollingContainer;u=void 0===u?{scrollLeft:0,scrollTop:0}:u;var I=u.scrollLeft,w=u.scrollTop,d=a.styledMode,t=b.distance,J=b.options,q=b.options.positioner,A={left:I,right:I+a.chartWidth,top:w,bottom:w+a.chartHeight},D=b.getLabel(),B=!(!l.xAxis[0]||!l.xAxis[0].opposite),y=m+w,F=0,L=k-v;g(c)&&(c=[!1,c]);c=c.slice(0,e.length+1).reduce(function(a,c,l){if(!1!==c&&""!==c){l=e[l-1]||{isHeader:!0,plotX:e[0].plotX,
plotY:k,series:{}};var g=l.isHeader,x=g?b:l.series,h=x.tt,E=l.isHeader;var C=l.series;var u="highcharts-color-"+H(l.colorIndex,C.colorIndex,"none");h||(h={padding:J.padding,r:J.borderRadius},d||(h.fill=J.backgroundColor,h["stroke-width"]=J.borderWidth),h=r.label("",0,0,J[E?"headerShape":"shape"]||"callout",void 0,void 0,J.useHTML).addClass((E?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+u).attr(h).add(D));h.isActive=!0;h.attr({text:c});d||h.css(J.style).shadow(J.shadow).attr({stroke:J.borderColor||
l.color||C.color||"#333333"});c=x.tt=h;E=c.getBBox();x=E.width+c.strokeWidth();g&&(F=E.height,L+=F,B&&(y-=F));C=l.plotX;C=void 0===C?0:C;u=l.plotY;u=void 0===u?0:u;var n=l.series;if(l.isHeader){C=p+C;var N=m+k/2}else h=n.xAxis,n=n.yAxis,C=h.pos+z(C,-t,h.len+t),n.pos+u>=w+m&&n.pos+u<=w+m+k-v&&(N=n.pos+u);C=z(C,A.left-t,A.right+t);"number"===typeof N?(E=E.height+1,u=q?q.call(b,x,E,l):f(C,N,g,x),a.push({align:q?0:void 0,anchorX:C,anchorY:N,boxWidth:x,point:l,rank:H(u.rank,g?1:0),size:E,target:u.y,tt:c,
x:u.x})):c.isActive=!1}return a},[]);!q&&c.some(function(a){return a.x<A.left})&&(c=c.map(function(a){var d=f(a.anchorX,a.anchorY,a.point.isHeader,a.boxWidth,!1);return G(a,{target:d.y,x:d.x})}));b.cleanSplit();n.distribute(c,L);c.forEach(function(a){var d=a.pos;a.tt.attr({visibility:"undefined"===typeof d?"hidden":"inherit",x:a.x,y:d+y,anchorX:a.anchorX,anchorY:a.anchorY})});c=b.container;l=b.renderer;b.outside&&c&&l&&(a=D.getBBox(),l.setSize(a.width+a.x,a.height+a.y,!1),h=h.getChartPosition(),c.style.left=
h.left+"px",c.style.top=h.top+"px")};k.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var c=this.chart,e=this.label,f=c.hoverPoint;if(e&&f){var b={x:0,y:0,width:0,height:0};f=this.getAnchor(f);var l=e.getBBox();f[0]+=c.plotLeft-e.translateX;f[1]+=c.plotTop-e.translateY;b.x=Math.min(0,f[0]);b.y=Math.min(0,f[1]);b.width=0>f[0]?Math.max(Math.abs(f[0]),l.width-f[0]):Math.max(Math.abs(f[0]),l.width);b.height=0>f[1]?Math.max(Math.abs(f[1]),
l.height-Math.abs(f[1])):Math.max(Math.abs(f[1]),l.height);this.tracker?this.tracker.attr(b):(this.tracker=e.renderer.rect(b).addClass("highcharts-tracker").add(e),c.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};k.prototype.styledModeFormat=function(c){return c.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};k.prototype.tooltipFooterHeaderFormatter=function(c,e){var f=e?"footer":
"header",b=c.series,l=b.tooltipOptions,a=l.xDateFormat,k=b.xAxis,g=k&&"datetime"===k.options.type&&m(c.key),p=l[f+"Format"];e={isFooter:e,labelConfig:c};B(this,"headerFormatter",e,function(f){g&&!a&&(a=this.getXDateFormat(c,l,k));g&&a&&(c.point&&c.point.tooltipDateKeys||["key"]).forEach(function(b){p=p.replace("{point."+b+"}","{point."+b+":"+a+"}")});b.chart.styledMode&&(p=this.styledModeFormat(p));f.text=r(p,{point:c,series:b},this.chart)});return e.text};k.prototype.update=function(c){this.destroy();
D(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,D(!0,this.options,c))};k.prototype.updatePosition=function(c){var e=this.chart,f=e.pointer,b=this.getLabel(),l=c.plotX+e.plotLeft,a=c.plotY+e.plotTop;f=f.getChartPosition();c=(this.options.positioner||this.getPosition).call(this,b.width,b.height,c);if(this.outside){var k=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(b.width+k,b.height+k,!1);if(e=e.containerScaling)y(this.container,{transform:"scale("+e.scaleX+
", "+e.scaleY+")"}),l*=e.scaleX,a*=e.scaleY;l+=f.left-c.x;a+=f.top-c.y}this.move(Math.round(c.x),Math.round(c.y||0),l,a)};return k}();n.Tooltip=p;return n.Tooltip});O(q,"Core/Pointer.js",[q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Tooltip.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.parse,F=h.charts,L=h.noop,G=z.addEvent,B=z.attr,r=z.css,m=z.defined,g=z.extend,D=z.find,H=z.fireEvent,v=z.isNumber,u=z.isObject,A=z.objectEach,p=z.offset,k=z.pick,c=z.splat;"";n=function(){function e(c,
b){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=c;this.hasDragged=!1;this.options=b;this.unbindContainerMouseLeave=function(){};this.unbindContainerMouseEnter=function(){};this.init(c,b)}e.prototype.applyInactiveState=function(c){var b=[],f;(c||[]).forEach(function(a){f=a.series;b.push(f);f.linkedParent&&b.push(f.linkedParent);f.linkedSeries&&(b=b.concat(f.linkedSeries));f.navigatorSeries&&b.push(f.navigatorSeries)});this.chart.series.forEach(function(a){-1===b.indexOf(a)?
a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};e.prototype.destroy=function(){var c=this;"undefined"!==typeof c.unDocMouseMove&&c.unDocMouseMove();this.unbindContainerMouseLeave();h.chartCount||(h.unbindDocumentMouseUp&&(h.unbindDocumentMouseUp=h.unbindDocumentMouseUp()),h.unbindDocumentTouchEnd&&(h.unbindDocumentTouchEnd=h.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);A(c,function(b,f){c[f]=void 0})};e.prototype.drag=function(c){var b=this.chart,
f=b.options.chart,a=c.chartX,e=c.chartY,k=this.zoomHor,g=this.zoomVert,p=b.plotLeft,m=b.plotTop,h=b.plotWidth,r=b.plotHeight,v=this.selectionMarker,w=this.mouseDownX||0,d=this.mouseDownY||0,t=u(f.panning)?f.panning&&f.panning.enabled:f.panning,J=f.panKey&&c[f.panKey+"Key"];if(!v||!v.touch)if(a<p?a=p:a>p+h&&(a=p+h),e<m?e=m:e>m+r&&(e=m+r),this.hasDragged=Math.sqrt(Math.pow(w-a,2)+Math.pow(d-e,2)),10<this.hasDragged){var n=b.isInsidePlot(w-p,d-m);b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&n&&!J&&
!v&&(this.selectionMarker=v=b.renderer.rect(p,m,k?1:h,g?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),b.styledMode||v.attr({fill:f.selectionMarkerFill||y("#335cad").setOpacity(.25).get()}));v&&k&&(a-=w,v.attr({width:Math.abs(a),x:(0<a?0:a)+w}));v&&g&&(a=e-d,v.attr({height:Math.abs(a),y:(0<a?0:a)+d}));n&&!v&&t&&b.pan(c,f.panning)}};e.prototype.dragStart=function(c){var b=this.chart;b.mouseIsDown=c.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=c.chartX;b.mouseDownY=this.mouseDownY=
c.chartY};e.prototype.drop=function(c){var b=this,f=this.chart,a=this.hasPinched;if(this.selectionMarker){var e={originalEvent:c,xAxis:[],yAxis:[]},k=this.selectionMarker,p=k.attr?k.attr("x"):k.x,h=k.attr?k.attr("y"):k.y,u=k.attr?k.attr("width"):k.width,n=k.attr?k.attr("height"):k.height,N;if(this.hasDragged||a)f.axes.forEach(function(f){if(f.zoomEnabled&&m(f.min)&&(a||b[{xAxis:"zoomX",yAxis:"zoomY"}[f.coll]])&&v(p)&&v(h)){var l=f.horiz,d="touchend"===c.type?f.minPixelPadding:0,t=f.toValue((l?p:h)+
d);l=f.toValue((l?p+u:h+n)-d);e[f.coll].push({axis:f,min:Math.min(t,l),max:Math.max(t,l)});N=!0}}),N&&H(f,"selection",e,function(b){f.zoom(g(b,a?{animation:!1}:null))});v(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());a&&this.scaleGroups()}f&&v(f.index)&&(r(f.container,{cursor:f._cursor}),f.cancelClick=10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};e.prototype.findNearestKDPoint=function(c,b,l){var a=this.chart,f=a.hoverPoint;a=a.tooltip;if(f&&
a&&a.isStickyOnContact())return f;var e;c.forEach(function(a){var c=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(l,c);if((c=u(a,!0))&&!(c=!u(e,!0))){c=e.distX-a.distX;var f=e.dist-a.dist,k=(a.series.group&&a.series.group.zIndex)-(e.series.group&&e.series.group.zIndex);c=0<(0!==c&&b?c:0!==f?f:0!==k?k:e.series.index>a.series.index?-1:1)}c&&(e=a)});return e};e.prototype.getChartCoordinatesFromPoint=function(c,b){var f=c.series,a=f.xAxis;f=f.yAxis;var e=k(c.clientX,
c.plotX),g=c.shapeArgs;if(a&&f)return b?{chartX:a.len+a.pos-e,chartY:f.len+f.pos-c.plotY}:{chartX:e+a.pos,chartY:c.plotY+f.pos};if(g&&g.x&&g.y)return{chartX:g.x,chartY:g.y}};e.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=p(this.chart.container))};e.prototype.getCoordinates=function(c){var b={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(f){b[f.isXAxis?"xAxis":"yAxis"].push({axis:f,value:f.toValue(c[f.horiz?"chartX":"chartY"])})});return b};e.prototype.getHoverData=
function(c,b,l,a,e,g){var f,p=[];a=!(!a||!c);var x=b&&!b.stickyTracking,m={chartX:g?g.chartX:void 0,chartY:g?g.chartY:void 0,shared:e};H(this,"beforeGetHoverData",m);x=x?[b]:l.filter(function(a){return m.filter?m.filter(a):a.visible&&!(!e&&a.directTouch)&&k(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(f=a||!g?c:this.findNearestKDPoint(x,e,g))&&f.series;f&&(e&&!b.noSharedTooltip?(x=l.filter(function(a){return m.filter?m.filter(a):a.visible&&!(!e&&a.directTouch)&&k(a.options.enableMouseTracking,
!0)&&!a.noSharedTooltip}),x.forEach(function(a){var b=D(a.points,function(a){return a.x===f.x&&!a.isNull});u(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),p.push(b))})):p.push(f));m={hoverPoint:f};H(this,"afterGetHoverData",m);return{hoverPoint:m.hoverPoint,hoverSeries:b,hoverPoints:p}};e.prototype.getPointFromEvent=function(c){c=c.target;for(var b;c&&!b;)b=c.point,c=c.parentNode;return b};e.prototype.onTrackerMouseOut=function(c){c=c.relatedTarget||c.toElement;var b=this.chart.hoverSeries;this.isDirectTouch=
!1;if(!(!b||!c||b.stickyTracking||this.inClass(c,"highcharts-tooltip")||this.inClass(c,"highcharts-series-"+b.index)&&this.inClass(c,"highcharts-tracker")))b.onMouseOut()};e.prototype.inClass=function(c,b){for(var f;c;){if(f=B(c,"class")){if(-1!==f.indexOf(b))return!0;if(-1!==f.indexOf("highcharts-container"))return!1}c=c.parentNode}};e.prototype.init=function(c,b){this.options=b;this.chart=c;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(c.tooltip=
new q(c,b.tooltip),this.followTouchMove=k(b.tooltip.followTouchMove,!0));this.setDOMEvents()};e.prototype.normalize=function(c,b){var f=c.touches,a=f?f.length?f.item(0):k(f.changedTouches,c.changedTouches)[0]:c;b||(b=this.getChartPosition());f=a.pageX-b.left;b=a.pageY-b.top;if(a=this.chart.containerScaling)f/=a.scaleX,b/=a.scaleY;return g(c,{chartX:Math.round(f),chartY:Math.round(b)})};e.prototype.onContainerClick=function(c){var b=this.chart,f=b.hoverPoint;c=this.normalize(c);var a=b.plotLeft,e=
b.plotTop;b.cancelClick||(f&&this.inClass(c.target,"highcharts-tracker")?(H(f.series,"click",g(c,{point:f})),b.hoverPoint&&f.firePointEvent("click",c)):(g(c,this.getCoordinates(c)),b.isInsidePlot(c.chartX-a,c.chartY-e)&&H(b,"click",c)))};e.prototype.onContainerMouseDown=function(c){var b=1===((c.buttons||c.button)&1);c=this.normalize(c);if(h.isFirefox&&0!==c.button)this.onContainerMouseMove(c);if("undefined"===typeof c.button||b)this.zoomOption(c),b&&c.preventDefault&&c.preventDefault(),this.dragStart(c)};
e.prototype.onContainerMouseLeave=function(c){var b=F[k(h.hoverChartIndex,-1)],f=this.chart.tooltip;c=this.normalize(c);b&&(c.relatedTarget||c.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=void 0);f&&!f.isHidden&&this.reset()};e.prototype.onContainerMouseEnter=function(c){delete this.chartPosition};e.prototype.onContainerMouseMove=function(c){var b=this.chart;c=this.normalize(c);this.setHoverChartIndex();c.preventDefault||(c.returnValue=!1);"mousedown"===b.mouseIsDown&&this.drag(c);b.openMenu||
!this.inClass(c.target,"highcharts-tracker")&&!b.isInsidePlot(c.chartX-b.plotLeft,c.chartY-b.plotTop)||this.runPointActions(c)};e.prototype.onDocumentTouchEnd=function(c){F[h.hoverChartIndex]&&F[h.hoverChartIndex].pointer.drop(c)};e.prototype.onContainerTouchMove=function(c){this.touch(c)};e.prototype.onContainerTouchStart=function(c){this.zoomOption(c);this.touch(c,!0)};e.prototype.onDocumentMouseMove=function(c){var b=this.chart,f=this.chartPosition;c=this.normalize(c,f);var a=b.tooltip;!f||a&&
a.isStickyOnContact()||b.isInsidePlot(c.chartX-b.plotLeft,c.chartY-b.plotTop)||this.inClass(c.target,"highcharts-tracker")||this.reset()};e.prototype.onDocumentMouseUp=function(c){var b=F[k(h.hoverChartIndex,-1)];b&&b.pointer.drop(c)};e.prototype.pinch=function(c){var b=this,f=b.chart,a=b.pinchDown,e=c.touches||[],p=e.length,m=b.lastValidTouch,h=b.hasZoom,r=b.selectionMarker,u={},v=1===p&&(b.inClass(c.target,"highcharts-tracker")&&f.runTrackerClick||b.runChartClick),n={};1<p&&(b.initiated=!0);h&&
b.initiated&&!v&&!1!==c.cancelable&&c.preventDefault();[].map.call(e,function(a){return b.normalize(a)});"touchstart"===c.type?([].forEach.call(e,function(b,d){a[d]={chartX:b.chartX,chartY:b.chartY}}),m.x=[a[0].chartX,a[1]&&a[1].chartX],m.y=[a[0].chartY,a[1]&&a[1].chartY],f.axes.forEach(function(a){if(a.zoomEnabled){var d=f.bounds[a.horiz?"h":"v"],b=a.minPixelPadding,c=a.toPixels(Math.min(k(a.options.min,a.dataMin),a.dataMin)),e=a.toPixels(Math.max(k(a.options.max,a.dataMax),a.dataMax)),l=Math.max(c,
e);d.min=Math.min(a.pos,Math.min(c,e)-b);d.max=Math.max(a.pos+a.len,l+b)}}),b.res=!0):b.followTouchMove&&1===p?this.runPointActions(b.normalize(c)):a.length&&(r||(b.selectionMarker=r=g({destroy:L,touch:!0},f.plotBox)),b.pinchTranslate(a,e,u,r,n,m),b.hasPinched=h,b.scaleGroups(u,n),b.res&&(b.res=!1,this.reset(!1,0)))};e.prototype.pinchTranslate=function(c,b,e,a,k,g){this.zoomHor&&this.pinchTranslateDirection(!0,c,b,e,a,k,g);this.zoomVert&&this.pinchTranslateDirection(!1,c,b,e,a,k,g)};e.prototype.pinchTranslateDirection=
function(c,b,e,a,k,g,p,m){var f=this.chart,l=c?"x":"y",x=c?"X":"Y",h="chart"+x,r=c?"width":"height",d=f["plot"+(c?"Left":"Top")],t,E,u=m||1,C=f.inverted,v=f.bounds[c?"h":"v"],n=1===b.length,q=b[0][h],K=e[0][h],A=!n&&b[1][h],H=!n&&e[1][h];e=function(){"number"===typeof H&&20<Math.abs(q-A)&&(u=m||Math.abs(K-H)/Math.abs(q-A));E=(d-K)/u+q;t=f["plot"+(c?"Width":"Height")]/u};e();b=E;if(b<v.min){b=v.min;var D=!0}else b+t>v.max&&(b=v.max-t,D=!0);D?(K-=.8*(K-p[l][0]),"number"===typeof H&&(H-=.8*(H-p[l][1])),
e()):p[l]=[K,H];C||(g[l]=E-d,g[r]=t);g=C?1/u:u;k[r]=t;k[l]=b;a[C?c?"scaleY":"scaleX":"scale"+x]=u;a["translate"+x]=g*d+(K-g*q)};e.prototype.reset=function(f,b){var e=this.chart,a=e.hoverSeries,k=e.hoverPoint,g=e.hoverPoints,p=e.tooltip,m=p&&p.shared?g:k;f&&m&&c(m).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(f=!1)});if(f)p&&m&&c(m).length&&(p.refresh(m),p.shared&&g?g.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,
a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):k&&(k.setState(k.state,!0),e.axes.forEach(function(a){a.crosshair&&k.series[a.coll]===a&&a.drawCrosshair(null,k)})));else{if(k)k.onMouseOut();g&&g.forEach(function(a){a.setState()});if(a)a.onMouseOut();p&&p.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());e.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=e.hoverPoints=e.hoverPoint=null}};e.prototype.runPointActions=function(c,b){var f=this.chart,
a=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,e=a?a.shared:!1,g=b||f.hoverPoint,p=g&&g.series||f.hoverSeries;p=this.getHoverData(g,p,f.series,(!c||"touchmove"!==c.type)&&(!!b||p&&p.directTouch&&this.isDirectTouch),e,c);g=p.hoverPoint;var m=p.hoverPoints;b=(p=p.hoverSeries)&&p.tooltipOptions.followPointer;e=e&&p&&!p.noSharedTooltip;if(g&&(g!==f.hoverPoint||a&&a.isHidden)){(f.hoverPoints||[]).forEach(function(a){-1===m.indexOf(a)&&a.setState()});if(f.hoverSeries!==p)p.onMouseOver();this.applyInactiveState(m);
(m||[]).forEach(function(a){a.setState("hover")});f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!g.series)return;f.hoverPoints=m;f.hoverPoint=g;g.firePointEvent("mouseOver");a&&a.refresh(e?m:g,c)}else b&&a&&!a.isHidden&&(g=a.getAnchor([{}],c),a.updatePosition({plotX:g[0],plotY:g[1]}));this.unDocMouseMove||(this.unDocMouseMove=G(f.container.ownerDocument,"mousemove",function(a){var b=F[h.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(a)}));f.axes.forEach(function(a){var b=k((a.crosshair||
{}).snap,!0),e;b&&((e=f.hoverPoint)&&e.series[a.coll]===a||(e=D(m,function(b){return b.series[a.coll]===a})));e||!b?a.drawCrosshair(c,e):a.hideCrosshair()})};e.prototype.scaleGroups=function(c,b){var f=this.chart,a;f.series.forEach(function(e){a=c||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&e.group&&(e.group.attr(a),e.markerGroup&&(e.markerGroup.attr(a),e.markerGroup.clip(b?f.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(a))});f.clipRect.attr(b||f.clipBox)};e.prototype.setDOMEvents=
function(){var c=this.chart.container,b=c.ownerDocument;c.onmousedown=this.onContainerMouseDown.bind(this);c.onmousemove=this.onContainerMouseMove.bind(this);c.onclick=this.onContainerClick.bind(this);this.unbindContainerMouseEnter=G(c,"mouseenter",this.onContainerMouseEnter.bind(this));this.unbindContainerMouseLeave=G(c,"mouseleave",this.onContainerMouseLeave.bind(this));h.unbindDocumentMouseUp||(h.unbindDocumentMouseUp=G(b,"mouseup",this.onDocumentMouseUp.bind(this)));h.hasTouch&&(G(c,"touchstart",
this.onContainerTouchStart.bind(this)),G(c,"touchmove",this.onContainerTouchMove.bind(this)),h.unbindDocumentTouchEnd||(h.unbindDocumentTouchEnd=G(b,"touchend",this.onDocumentTouchEnd.bind(this))))};e.prototype.setHoverChartIndex=function(){var c=this.chart,b=h.charts[k(h.hoverChartIndex,-1)];if(b&&b!==c)b.pointer.onContainerMouseLeave({relatedTarget:!0});b&&b.mouseIsDown||(h.hoverChartIndex=c.index)};e.prototype.touch=function(c,b){var e=this.chart,a;this.setHoverChartIndex();if(1===c.touches.length)if(c=
this.normalize(c),(a=e.isInsidePlot(c.chartX-e.plotLeft,c.chartY-e.plotTop))&&!e.openMenu){b&&this.runPointActions(c);if("touchmove"===c.type){b=this.pinchDown;var f=b[0]?4<=Math.sqrt(Math.pow(b[0].chartX-c.chartX,2)+Math.pow(b[0].chartY-c.chartY,2)):!1}k(f,!0)&&this.pinch(c)}else b&&this.reset();else 2===c.touches.length&&this.pinch(c)};e.prototype.zoomOption=function(c){var b=this.chart,e=b.options.chart,a=e.zoomType||"";b=b.inverted;/touch/.test(c.type)&&(a=k(e.pinchType,a));this.zoomX=c=/x/.test(a);
this.zoomY=a=/y/.test(a);this.zoomHor=c&&!b||a&&b;this.zoomVert=a&&!b||c&&b;this.hasZoom=c||a};return e}();return h.Pointer=n});O(q,"Core/MSPointer.js",[q["Core/Globals.js"],q["Core/Pointer.js"],q["Core/Utilities.js"]],function(n,h,q){function z(){var m=[];m.item=function(g){return this[g]};g(H,function(g){m.push({pageX:g.pageX,pageY:g.pageY,target:g.target})});return m}function y(g,m,p,k){"touch"!==g.pointerType&&g.pointerType!==g.MSPOINTER_TYPE_TOUCH||!L[n.hoverChartIndex]||(k(g),k=L[n.hoverChartIndex].pointer,
k[m]({type:p,target:g.currentTarget,preventDefault:B,touches:z()}))}var F=this&&this.__extends||function(){var g=function(m,p){g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(k,c){k.__proto__=c}||function(k,c){for(var e in c)c.hasOwnProperty(e)&&(k[e]=c[e])};return g(m,p)};return function(m,p){function k(){this.constructor=m}g(m,p);m.prototype=null===p?Object.create(p):(k.prototype=p.prototype,new k)}}(),L=n.charts,G=n.doc,B=n.noop,r=q.addEvent,m=q.css,g=q.objectEach,D=q.removeEvent,
H={},v=!!n.win.PointerEvent;return function(g){function h(){return null!==g&&g.apply(this,arguments)||this}F(h,g);h.prototype.batchMSEvents=function(g){g(this.chart.container,v?"pointerdown":"MSPointerDown",this.onContainerPointerDown);g(this.chart.container,v?"pointermove":"MSPointerMove",this.onContainerPointerMove);g(G,v?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};h.prototype.destroy=function(){this.batchMSEvents(D);g.prototype.destroy.call(this)};h.prototype.init=function(p,k){g.prototype.init.call(this,
p,k);this.hasZoom&&m(p.container,{"-ms-touch-action":"none","touch-action":"none"})};h.prototype.onContainerPointerDown=function(g){y(g,"onContainerTouchStart","touchstart",function(k){H[k.pointerId]={pageX:k.pageX,pageY:k.pageY,target:k.currentTarget}})};h.prototype.onContainerPointerMove=function(g){y(g,"onContainerTouchMove","touchmove",function(k){H[k.pointerId]={pageX:k.pageX,pageY:k.pageY};H[k.pointerId].target||(H[k.pointerId].target=k.currentTarget)})};h.prototype.onDocumentPointerUp=function(g){y(g,
"onDocumentTouchEnd","touchend",function(k){delete H[k.pointerId]})};h.prototype.setDOMEvents=function(){g.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(r)};return h}(h)});O(q,"Core/Legend.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q){var z=n.animObject,y=n.setAnimation,F=q.addEvent,L=q.css,G=q.defined,B=q.discardElement,r=q.find,m=q.fireEvent,g=q.format,D=q.isNumber,H=q.merge,v=q.pick,u=q.relativeLength,
A=q.stableSort,p=q.syncTimeout;n=q.wrap;q=h.isFirefox;var k=h.marginNames,c=h.win,e=function(){function c(b,c){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;
this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=b;this.init(b,c)}c.prototype.init=function(b,c){this.chart=b;this.setOptions(c);c.enabled&&(this.render(),F(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=F(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};c.prototype.setOptions=function(b){var c=v(b.padding,
8);this.options=b;this.chart.styledMode||(this.itemStyle=b.itemStyle,this.itemHiddenStyle=H(this.itemStyle,b.itemHiddenStyle));this.itemMarginTop=b.itemMarginTop||0;this.itemMarginBottom=b.itemMarginBottom||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=v(b.symbolWidth,16);this.pages=[];this.proximate="proximate"===b.layout&&!this.chart.inverted;this.baseline=void 0};c.prototype.update=function(b,c){var a=this.chart;this.setOptions(H(!0,this.options,b));this.destroy();a.isDirtyLegend=a.isDirtyBox=
!0;v(c,!0)&&a.redraw();m(this,"afterUpdate")};c.prototype.colorizeItem=function(b,c){b.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var a=this.options,e=b.legendItem,f=b.legendLine,l=b.legendSymbol,k=this.itemHiddenStyle.color;a=c?a.itemStyle.color:k;var g=c?b.color||k:k,p=b.options&&b.options.marker,h={fill:g};e&&e.css({fill:a,color:a});f&&f.attr({stroke:g});l&&(p&&l.isMarker&&(h=b.pointAttribs(),c||(h.stroke=h.fill=k)),l.attr(h))}m(this,"afterColorizeItem",
{item:b,visible:c})};c.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};c.prototype.positionItem=function(b){var c=this,a=this.options,e=a.symbolPadding,f=!a.rtl,k=b._legendItemPos;a=k[0];k=k[1];var g=b.checkbox,p=b.legendGroup;p&&p.element&&(e={translateX:f?a:this.legendWidth-a-2*e-4,translateY:k},f=function(){m(c,"afterPositionItem",{item:b})},G(p.translateY)?p.animate(e,void 0,f):(p.attr(e),f()));g&&(g.x=a,g.y=k)};
c.prototype.destroyItem=function(b){var c=b.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){b[a]&&(b[a]=b[a].destroy())});c&&B(b.checkbox)};c.prototype.destroy=function(){function b(b){this[b]&&(this[b]=this[b].destroy())}this.getAllItems().forEach(function(c){["legendItem","legendGroup"].forEach(b,c)});"clipRect up down pager nav box title group".split(" ").forEach(b,this);this.display=null};c.prototype.positionCheckboxes=function(){var b=this.group&&this.group.alignAttr,
c=this.clipHeight||this.legendHeight,a=this.titleHeight;if(b){var e=b.translateY;this.allItems.forEach(function(f){var l=f.checkbox;if(l){var k=e+a+l.y+(this.scrollOffset||0)+3;L(l,{left:b.translateX+f.checkboxOffset+l.x-20+"px",top:k+"px",display:this.proximate||k>e-6&&k<e+c-6?"":"none"})}},this)}};c.prototype.renderTitle=function(){var b=this.options,c=this.padding,a=b.title,e=0;a.text&&(this.title||(this.title=this.chart.renderer.label(a.text,c-3,c-4,null,null,null,b.useHTML,null,"legend-title").attr({zIndex:1}),
this.chart.styledMode||this.title.css(a.style),this.title.add(this.group)),a.width||this.title.css({width:this.maxLegendWidth+"px"}),b=this.title.getBBox(),e=b.height,this.offsetWidth=b.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e};c.prototype.setText=function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?g(c.labelFormat,b,this.chart):c.labelFormatter.call(b)})};c.prototype.renderItem=function(b){var c=this.chart,a=c.renderer,e=this.options,f=this.symbolWidth,k=e.symbolPadding,
g=this.itemStyle,p=this.itemHiddenStyle,m="horizontal"===e.layout?v(e.itemDistance,20):0,h=!e.rtl,r=b.legendItem,u=!b.series,d=!u&&b.series.drawLegendSymbol?b.series:b,t=d.options;t=this.createCheckboxForItem&&t&&t.showCheckbox;m=f+k+m+(t?20:0);var J=e.useHTML,n=b.options.className;r||(b.legendGroup=a.g("legend-item").addClass("highcharts-"+d.type+"-series highcharts-color-"+b.colorIndex+(n?" "+n:"")+(u?" highcharts-series-"+b.index:"")).attr({zIndex:1}).add(this.scrollGroup),b.legendItem=r=a.text("",
h?f+k:-k,this.baseline||0,J),c.styledMode||r.css(H(b.visible?g:p)),r.attr({align:h?"left":"right",zIndex:2}).add(b.legendGroup),this.baseline||(this.fontMetrics=a.fontMetrics(c.styledMode?12:g.fontSize,r),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,r.attr("y",this.baseline)),this.symbolHeight=e.symbolHeight||this.fontMetrics.f,d.drawLegendSymbol(this,b),this.setItemEvents&&this.setItemEvents(b,r,J));t&&!b.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(b);this.colorizeItem(b,
b.visible);!c.styledMode&&g.width||r.css({width:(e.itemWidth||this.widthOption||c.spacingBox.width)-m+"px"});this.setText(b);c=r.getBBox();b.itemWidth=b.checkboxOffset=e.itemWidth||b.legendItemWidth||c.width+m;this.maxItemWidth=Math.max(this.maxItemWidth,b.itemWidth);this.totalItemWidth+=b.itemWidth;this.itemHeight=b.itemHeight=Math.round(b.legendItemHeight||c.height||this.symbolHeight)};c.prototype.layoutItem=function(b){var c=this.options,a=this.padding,e="horizontal"===c.layout,f=b.itemHeight,
k=this.itemMarginBottom,g=this.itemMarginTop,p=e?v(c.itemDistance,20):0,m=this.maxLegendWidth;c=c.alignColumns&&this.totalItemWidth>m?this.maxItemWidth:b.itemWidth;e&&this.itemX-a+c>m&&(this.itemX=a,this.lastLineHeight&&(this.itemY+=g+this.lastLineHeight+k),this.lastLineHeight=0);this.lastItemY=g+this.itemY+k;this.lastLineHeight=Math.max(f,this.lastLineHeight);b._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=c:(this.itemY+=g+f+k,this.lastLineHeight=f);this.offsetWidth=this.widthOption||Math.max((e?
this.itemX-a-(b.checkbox?0:p):c)+a,this.offsetWidth)};c.prototype.getAllItems=function(){var b=[];this.chart.series.forEach(function(c){var a=c&&c.options;c&&v(a.showInLegend,G(a.linkedTo)?!1:void 0,!0)&&(b=b.concat(c.legendItems||("point"===a.legendType?c.data:c)))});m(this,"afterGetAllItems",{allItems:b});return b};c.prototype.getAlignment=function(){var b=this.options;return this.proximate?b.align.charAt(0)+"tv":b.floating?"":b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0)};c.prototype.adjustMargins=
function(b,c){var a=this.chart,e=this.options,f=this.getAlignment();f&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(l,g){l.test(f)&&!G(b[g])&&(a[k[g]]=Math.max(a[k[g]],a.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*e[g%2?"x":"y"]+v(e.margin,12)+c[g]+(a.titleOffset[g]||0)))})};c.prototype.proximatePositions=function(){var b=this.chart,c=[],a="left"===this.options.align;this.allItems.forEach(function(e){var f;var l=a;if(e.yAxis){e.xAxis.options.reversed&&
(l=!l);e.points&&(f=r(l?e.points:e.points.slice(0).reverse(),function(a){return D(a.plotY)}));l=this.itemMarginTop+e.legendItem.getBBox().height+this.itemMarginBottom;var k=e.yAxis.top-b.plotTop;e.visible?(f=f?f.plotY:e.yAxis.height,f+=k-.3*l):f=k+e.yAxis.height;c.push({target:f,size:l,item:e})}},this);h.distribute(c,b.plotHeight);c.forEach(function(a){a.item._legendItemPos[1]=b.plotTop-b.spacing[0]+a.pos})};c.prototype.render=function(){var b=this.chart,c=b.renderer,a=this.group,e=this.box,f=this.options,
k=this.padding;this.itemX=k;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=u(f.width,b.spacingBox.width-k);var g=b.spacingBox.width-2*k-f.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(g/=2);this.maxLegendWidth=this.widthOption||g;a||(this.group=a=c.g("legend").attr({zIndex:7}).add(),this.contentGroup=c.g().attr({zIndex:1}).add(a),this.scrollGroup=c.g().add(this.contentGroup));this.renderTitle();var p=this.getAllItems();A(p,function(a,b){return(a.options&&
a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});f.reversed&&p.reverse();this.allItems=p;this.display=g=!!p.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;p.forEach(this.renderItem,this);p.forEach(this.layoutItem,this);p=(this.widthOption||this.offsetWidth)+k;var h=this.lastItemY+this.lastLineHeight+this.titleHeight;h=this.handleOverflow(h);h+=k;e||(this.box=e=c.rect().addClass("highcharts-legend-box").attr({r:f.borderRadius}).add(a),e.isNew=!0);
b.styledMode||e.attr({stroke:f.borderColor,"stroke-width":f.borderWidth||0,fill:f.backgroundColor||"none"}).shadow(f.shadow);0<p&&0<h&&(e[e.isNew?"attr":"animate"](e.crisp.call({},{x:0,y:0,width:p,height:h},e.strokeWidth())),e.isNew=!1);e[g?"show":"hide"]();b.styledMode&&"none"===a.getStyle("display")&&(p=h=0);this.legendWidth=p;this.legendHeight=h;g&&this.align();this.proximate||this.positionItems();m(this,"afterRender")};c.prototype.align=function(b){void 0===b&&(b=this.chart.spacingBox);var c=
this.chart,a=this.options,e=b.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<c.titleOffset[0]?e+=c.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<c.titleOffset[2]&&(e-=c.titleOffset[2]);e!==b.y&&(b=H(b,{y:e}));this.group.align(H(a,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":a.verticalAlign}),!0,b)};c.prototype.handleOverflow=function(b){var c=this,a=this.chart,e=a.renderer,f=this.options,k=f.y,g=this.padding;k=a.spacingBox.height+("top"===f.verticalAlign?
-k:k)-g;var p=f.maxHeight,m,h=this.clipRect,r=f.navigation,u=v(r.animation,!0),d=r.arrowSize||12,t=this.nav,J=this.pages,n,q=this.allItems,A=function(a){"number"===typeof a?h.attr({height:a}):h&&(c.clipRect=h.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+g+"px,9999px,"+(g+a)+"px,0)":"auto")},H=function(b){c[b]=e.circle(0,0,1.3*d).translate(d/2,d/2).add(t);a.styledMode||c[b].attr("fill","rgba(0,0,0,0.0001)");return c[b]};"horizontal"!==f.layout||"middle"===
f.verticalAlign||f.floating||(k/=2);p&&(k=Math.min(k,p));J.length=0;b>k&&!1!==r.enabled?(this.clipHeight=m=Math.max(k-20-this.titleHeight-g,0),this.currentPage=v(this.currentPage,1),this.fullHeight=b,q.forEach(function(a,d){var b=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),e=J.length;if(!e||b-J[e-1]>m&&(n||b)!==J[e-1])J.push(n||b),e++;a.pageIx=e-1;n&&(q[d-1].pageIx=e-1);d===q.length-1&&b+c-J[e-1]>m&&b!==n&&(J.push(b),a.pageIx=e);b!==n&&(n=b)}),h||(h=c.clipRect=e.clipRect(0,g,9999,
0),c.contentGroup.clip(h)),A(m),t||(this.nav=t=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,d,d).add(t),H("upTracker").on("click",function(){c.scroll(-1,u)}),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation"),a.styledMode||this.pager.css(r.style),this.pager.add(t),this.down=e.symbol("triangle-down",0,0,d,d).add(t),H("downTracker").on("click",function(){c.scroll(1,u)})),c.scroll(0),b=k):t&&(A(),this.nav=t.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0);return b};c.prototype.scroll=function(b,c){var a=this,e=this.chart,f=this.pages,l=f.length,k=this.currentPage+b;b=this.clipHeight;var g=this.options.navigation,h=this.pager,r=this.padding;k>l&&(k=l);0<k&&("undefined"!==typeof c&&y(c,e),this.nav.attr({translateX:r,translateY:b+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===k?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),h.attr({text:k+"/"+l}),[this.down,
this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":k===l?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),e.styledMode||(this.up.attr({fill:1===k?g.inactiveColor:g.activeColor}),this.upTracker.css({cursor:1===k?"default":"pointer"}),this.down.attr({fill:k===l?g.inactiveColor:g.activeColor}),this.downTracker.css({cursor:k===l?"default":"pointer"})),this.scrollOffset=-f[k-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=k,this.positionCheckboxes(),c=z(v(c,e.renderer.globalAnimation,!0)),p(function(){m(a,"afterScroll",{currentPage:k})},c.duration))};return c}();(/Trident\/7\.0/.test(c.navigator&&c.navigator.userAgent)||q)&&n(e.prototype,"positionItem",function(c,b){var e=this,a=function(){b._legendItemPos&&c.call(e,b)};a();e.bubbleLegend||setTimeout(a)});h.Legend=e;return h.Legend});O(q,"Core/Series/Point.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],
function(n,h,q){var z=n.animObject,y=q.defined,F=q.erase,L=q.extend,G=q.fireEvent,B=q.format,r=q.getNestedProperty,m=q.isArray,g=q.isNumber,D=q.isObject,H=q.syncTimeout,v=q.pick,u=q.removeEvent,A=q.uniqueKey;"";n=function(){function p(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}p.prototype.animateBeforeDestroy=function(){var k=
this,c={x:k.startXPos,opacity:0},e,f=k.getGraphicalProps();f.singular.forEach(function(b){e="dataLabel"===b;k[b]=k[b].animate(e?{x:k[b].startXPos,y:k[b].startYPos,opacity:0}:c)});f.plural.forEach(function(b){k[b].forEach(function(b){b.element&&b.animate(L({x:k.startXPos},b.startYPos?{x:b.startXPos,y:b.startYPos}:{}))})})};p.prototype.applyOptions=function(k,c){var e=this.series,f=e.options.pointValKey||e.pointValKey;k=p.prototype.optionsToObject.call(this,k);L(this,k);this.options=this.options?L(this.options,
k):k;k.group&&delete this.group;k.dataLabels&&delete this.dataLabels;f&&(this.y=p.prototype.getNestedProperty.call(this,f));this.formatPrefix=(this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!g(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));"undefined"===typeof this.x&&e&&(this.x="undefined"===typeof c?e.autoIncrement(this):c);return this};p.prototype.destroy=function(){function k(){if(c.graphic||
c.dataLabel||c.dataLabels)u(c),c.destroyElements();for(a in c)c[a]=null}var c=this,e=c.series,f=e.chart;e=e.options.dataSorting;var b=f.hoverPoints,l=z(c.series.chart.renderer.globalAnimation),a;c.legendItem&&f.legend.destroyItem(c);b&&(c.setState(),F(b,c),b.length||(f.hoverPoints=null));if(c===f.hoverPoint)c.onMouseOut();e&&e.enabled?(this.animateBeforeDestroy(),H(k,l.duration)):k();f.pointCount--};p.prototype.destroyElements=function(k){var c=this;k=c.getGraphicalProps(k);k.singular.forEach(function(e){c[e]=
c[e].destroy()});k.plural.forEach(function(e){c[e].forEach(function(c){c.element&&c.destroy()});delete c[e]})};p.prototype.firePointEvent=function(k,c,e){var f=this,b=this.series.options;(b.point.events[k]||f.options&&f.options.events&&f.options.events[k])&&f.importEvents();"click"===k&&b.allowPointSelect&&(e=function(b){f.select&&f.select(null,b.ctrlKey||b.metaKey||b.shiftKey)});G(f,k,c,e)};p.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+
(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};p.prototype.getGraphicalProps=function(k){var c=this,e=[],f,b={singular:[],plural:[]};k=k||{graphic:1,dataLabel:1};k.graphic&&e.push("graphic","shadowGroup");k.dataLabel&&e.push("dataLabel",
"dataLabelUpper","connector");for(f=e.length;f--;){var l=e[f];c[l]&&b.singular.push(l)}["dataLabel","connector"].forEach(function(a){var e=a+"s";k[a]&&c[e]&&b.plural.push(e)});return b};p.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};p.prototype.getNestedProperty=function(k){if(k)return 0===k.indexOf("custom.")?
r(k,this.options):this[k]};p.prototype.getZone=function(){var k=this.series,c=k.zones;k=k.zoneAxis||"y";var e=0,f;for(f=c[e];this[k]>=f.value;)f=c[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=f&&f.color&&!this.options.color?f.color:this.nonZonedColor;return f};p.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};p.prototype.init=function(k,c,e){this.series=k;this.applyOptions(c,e);this.id=y(this.id)?
this.id:A();this.resolveColor();k.chart.pointCount++;G(this,"afterInit");return this};p.prototype.optionsToObject=function(k){var c={},e=this.series,f=e.options.keys,b=f||e.pointArrayMap||["y"],l=b.length,a=0,h=0;if(g(k)||null===k)c[b[0]]=k;else if(m(k))for(!f&&k.length>l&&(e=typeof k[0],"string"===e?c.name=k[0]:"number"===e&&(c.x=k[0]),a++);h<l;)f&&"undefined"===typeof k[a]||(0<b[h].indexOf(".")?p.prototype.setNestedProperty(c,k[a],b[h]):c[b[h]]=k[a]),a++,h++;else"object"===typeof k&&(c=k,k.dataLabels&&
(e._hasPointLabels=!0),k.marker&&(e._hasPointMarkers=!0));return c};p.prototype.resolveColor=function(){var k=this.series;var c=k.chart.options.chart.colorCount;var e=k.chart.styledMode;delete this.nonZonedColor;e||this.options.color||(this.color=k.color);k.options.colorByPoint?(e||(c=k.options.colors||k.chart.options.colors,this.color=this.color||c[k.colorCounter],c=c.length),e=k.colorCounter,k.colorCounter++,k.colorCounter===c&&(k.colorCounter=0)):e=k.colorIndex;this.colorIndex=v(this.colorIndex,
e)};p.prototype.setNestedProperty=function(k,c,e){e.split(".").reduce(function(e,b,l,a){e[b]=a.length-1===l?c:D(e[b],!0)?e[b]:{};return e[b]},k);return k};p.prototype.tooltipFormatter=function(k){var c=this.series,e=c.tooltipOptions,f=v(e.valueDecimals,""),b=e.valuePrefix||"",l=e.valueSuffix||"";c.chart.styledMode&&(k=c.chart.tooltip.styledModeFormat(k));(c.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(b||l)k=k.replace(RegExp(a+"}","g"),b+a+"}"+l);k=k.replace(RegExp(a+"}","g"),a+":,."+
f+"f}")});return B(k,{point:this,series:this.series},c.chart)};return p}();return h.Point=n});O(q,"Core/Series/Series.js",[q["Core/Globals.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q){var z=q.error,y=q.extendClass,F=q.fireEvent,L=q.getOptions,G=q.isObject,B=q.merge,r=q.objectEach;q=function(){function m(g,h){var r=B(m.defaultOptions,h);this.chart=g;this._i=g.series.length;g.series.push(this);this.options=r;this.userOptions=B(h)}m.addSeries=function(g,h){m.seriesTypes[g]=
h};m.cleanRecursively=function(g,h){var n={};r(g,function(r,u){if(G(g[u],!0)&&!g.nodeType&&h[u])r=m.cleanRecursively(g[u],h[u]),Object.keys(r).length&&(n[u]=r);else if(G(g[u])||g[u]!==h[u])n[u]=g[u]});return n};m.getSeries=function(g,h){void 0===h&&(h={});var r=g.options.chart;r=h.type||r.type||r.defaultSeriesType||"";var v=m.seriesTypes[r];v||z(17,!0,g,{missingModuleFor:r});return new v(g,h)};m.seriesType=function(g,r,n,v,u){var q=L().plotOptions||{},p=m.seriesTypes;r=r||"";q[g]=B(q[r],n);m.addSeries(g,
y(p[r]||function(){},v));p[g].prototype.type=g;u&&(p[g].prototype.pointClass=y(h,u));return p[g]};m.prototype.update=function(g,h){void 0===h&&(h=!0);var r=this;g=m.cleanRecursively(g,this.userOptions);var v=g.type;"undefined"!==typeof v&&v!==r.type&&(r=m.getSeries(r.chart,g));F(r,"update",{newOptions:g});r.userOptions=B(g);F(r,"afterUpdate",{newOptions:g});h&&r.chart.redraw();return r};m.defaultOptions={type:"base"};m.seriesTypes={};return m}();q.prototype.pointClass=h;n.seriesType=q.seriesType;
n.seriesTypes=q.seriesTypes;return q});O(q,"Core/Chart/Chart.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Axis/Axis.js"],q["Core/Series/Series.js"],q["Core/Globals.js"],q["Core/Legend.js"],q["Core/MSPointer.js"],q["Core/Options.js"],q["Core/Pointer.js"],q["Core/Time.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G,B,r){var m=n.animate,g=n.animObject,D=n.setAnimation,H=z.charts,v=z.doc,u=z.win,A=M.defaultOptions,p=r.addEvent,k=r.attr,c=r.createElement,e=r.css,f=r.defined,b=r.discardElement,
l=r.erase,a=r.error,x=r.extend,E=r.find,C=r.fireEvent,K=r.getStyle,T=r.isArray,R=r.isFunction,N=r.isNumber,I=r.isObject,w=r.isString,d=r.merge,t=r.numberFormat,J=r.objectEach,P=r.pick,Q=r.pInt,ba=r.relativeLength,Y=r.removeEvent,Z=r.splat,X=r.syncTimeout,L=r.uniqueKey,W=z.marginNames,U=function(){function n(a,d,b){this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=
this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.getArgs(a,d,b)}n.prototype.getArgs=function(a,d,b){w(a)||a.nodeName?(this.renderTo=a,this.init(d,b)):this.init(a,d)};n.prototype.init=function(a,b){var c,e=a.series,f=a.plotOptions||{};C(this,"init",{args:arguments},
function(){a.series=null;c=d(A,a);var l=c.chart||{};J(c.plotOptions,function(a,b){I(a)&&(a.tooltip=f[b]&&d(f[b].tooltip)||void 0)});c.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;c.series=a.series=e;this.userOptions=a;var k=l.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new B(a.time):z.time;this.numberFormatter=
l.numberFormatter||t;this.styledMode=l.styledMode;this.hasCartesianSeries=l.showAxes;var g=this;g.index=H.length;H.push(g);z.chartCount++;k&&J(k,function(a,d){R(a)&&p(g,d,a)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=g.symbolCounter=0;C(g,"afterInit");g.firstRender()})};n.prototype.initSeries=function(d){var b=this.options.chart;b=d.type||b.type||b.defaultSeriesType;var c=q.seriesTypes[b];c||a(17,!0,this,{missingModuleFor:b});b=new c(this,d);"function"===typeof b.init&&b.init(this,d);return b};
n.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(a){a.points||a.data||!a.enabledDataSorting||a.setData(a.options.data,!1)})};n.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(a,d){return a.linkedSeries.length||d.linkedSeries.length?d.linkedSeries.length-a.linkedSeries.length:0})};n.prototype.orderSeries=function(a){var d=this.series;for(a=a||0;a<d.length;a++)d[a]&&(d[a].index=a,d[a].name=d[a].getName())};n.prototype.isInsidePlot=
function(a,d,b){var c=b?d:a;a=b?a:d;c={x:c,y:a,isInsidePlot:0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight};C(this,"afterIsInsidePlot",c);return c.isInsidePlot};n.prototype.redraw=function(a){C(this,"beforeRedraw");var d=this,b=d.axes,c=d.series,e=d.pointer,f=d.legend,t=d.userOptions.legend,l=d.isDirtyLegend,k=d.hasCartesianSeries,g=d.isDirtyBox,p=d.renderer,m=p.isHidden(),h=[];d.setResponsive&&d.setResponsive(!1);D(d.hasRendered?a:!1,d);m&&d.temporaryDisplay();d.layOutTitles();for(a=c.length;a--;){var r=
c[a];if(r.options.stacking){var u=!0;if(r.isDirty){var w=!0;break}}}if(w)for(a=c.length;a--;)r=c[a],r.options.stacking&&(r.isDirty=!0);c.forEach(function(a){a.isDirty&&("point"===a.options.legendType?("function"===typeof a.updateTotals&&a.updateTotals(),l=!0):t&&(t.labelFormatter||t.labelFormat)&&(l=!0));a.isDirtyData&&C(a,"updatedData")});l&&f&&f.options.enabled&&(f.render(),d.isDirtyLegend=!1);u&&d.getStacks();k&&b.forEach(function(a){d.isResizing&&N(a.min)||(a.updateNames(),a.setScale())});d.getMargins();
k&&(b.forEach(function(a){a.isDirty&&(g=!0)}),b.forEach(function(a){var d=a.min+","+a.max;a.extKey!==d&&(a.extKey=d,h.push(function(){C(a,"afterSetExtremes",x(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(g||u)&&a.redraw()}));g&&d.drawChartBox();C(d,"predraw");c.forEach(function(a){(g||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);p.draw();C(d,"redraw");C(d,"render");m&&d.temporaryDisplay(!0);h.forEach(function(a){a.call()})};n.prototype.get=function(a){function d(d){return d.id===
a||d.options&&d.options.id===a}var b=this.series,c;var e=E(this.axes,d)||E(this.series,d);for(c=0;!e&&c<b.length;c++)e=E(b[c].points||[],d);return e};n.prototype.getAxes=function(){var a=this,d=this.options,b=d.xAxis=Z(d.xAxis||{});d=d.yAxis=Z(d.yAxis||{});C(this,"getAxes");b.forEach(function(a,d){a.index=d;a.isX=!0});d.forEach(function(a,d){a.index=d});b.concat(d).forEach(function(d){new h(a,d)});C(this,"afterGetAxes")};n.prototype.getSelectedPoints=function(){var a=[];this.series.forEach(function(d){a=
a.concat(d.getPointsCollection().filter(function(a){return P(a.selectedStaging,a.selected)}))});return a};n.prototype.getSelectedSeries=function(){return this.series.filter(function(a){return a.selected})};n.prototype.setTitle=function(a,d,b){this.applyDescription("title",a);this.applyDescription("subtitle",d);this.applyDescription("caption",void 0);this.layOutTitles(b)};n.prototype.applyDescription=function(a,b){var c=this,e="title"===a?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:
{color:"#666666"};e=this.options[a]=d(!this.styledMode&&{style:e},this.options[a],b);var f=this[a];f&&b&&(this[a]=f=f.destroy());e&&!f&&(f=this.renderer.text(e.text,0,0,e.useHTML).attr({align:e.align,"class":"highcharts-"+a,zIndex:e.zIndex||4}).add(),f.update=function(d){c[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[a]](d)},this.styledMode||f.css(e.style),this[a]=f)};n.prototype.layOutTitles=function(a){var d=[0,0,0],b=this.renderer,c=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var e=
this[a],f=this.options[a],t=f.verticalAlign||"top";a="title"===a?-3:"top"===t?d[0]+2:0;if(e){if(!this.styledMode)var l=f.style.fontSize;l=b.fontMetrics(l,e).b;e.css({width:(f.width||c.width+(f.widthAdjust||0))+"px"});var k=Math.round(e.getBBox(f.useHTML).height);e.align(x({y:"bottom"===t?l:a+l,height:k},f),!1,"spacingBox");f.floating||("top"===t?d[0]=Math.ceil(d[0]+k):"bottom"===t&&(d[2]=Math.ceil(d[2]+k)))}},this);d[0]&&"top"===(this.options.title.verticalAlign||"top")&&(d[0]+=this.options.title.margin);
d[2]&&"bottom"===this.options.caption.verticalAlign&&(d[2]+=this.options.caption.margin);var e=!this.titleOffset||this.titleOffset.join(",")!==d.join(",");this.titleOffset=d;C(this,"afterLayOutTitles");!this.isDirtyBox&&e&&(this.isDirtyBox=this.isDirtyLegend=e,this.hasRendered&&P(a,!0)&&this.isDirtyBox&&this.redraw())};n.prototype.getChartSize=function(){var a=this.options.chart,d=a.width;a=a.height;var b=this.renderTo;f(d)||(this.containerWidth=K(b,"width"));f(a)||(this.containerHeight=K(b,"height"));
this.chartWidth=Math.max(0,d||this.containerWidth||600);this.chartHeight=Math.max(0,ba(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};n.prototype.temporaryDisplay=function(a){var d=this.renderTo;if(a)for(;d&&d.style;)d.hcOrigStyle&&(e(d,d.hcOrigStyle),delete d.hcOrigStyle),d.hcOrigDetached&&(v.body.removeChild(d),d.hcOrigDetached=!1),d=d.parentNode;else for(;d&&d.style;){v.body.contains(d)||d.parentNode||(d.hcOrigDetached=!0,v.body.appendChild(d));if("none"===K(d,"display",
!1)||d.hcOricDetached)d.hcOrigStyle={display:d.style.display,height:d.style.height,overflow:d.style.overflow},a={display:"block",overflow:"hidden"},d!==this.renderTo&&(a.height=0),e(d,a),d.offsetWidth||d.style.setProperty("display","block","important");d=d.parentNode;if(d===v.body)break}};n.prototype.setClassName=function(a){this.container.className="highcharts-container "+(a||"")};n.prototype.getContainer=function(){var d=this.options,b=d.chart;var f=this.renderTo;var t=L(),l,g;f||(this.renderTo=
f=b.renderTo);w(f)&&(this.renderTo=f=v.getElementById(f));f||a(13,!0,this);var p=Q(k(f,"data-highcharts-chart"));N(p)&&H[p]&&H[p].hasRendered&&H[p].destroy();k(f,"data-highcharts-chart",this.index);f.innerHTML="";b.skipClone||f.offsetWidth||this.temporaryDisplay();this.getChartSize();p=this.chartWidth;var m=this.chartHeight;e(f,{overflow:"hidden"});this.styledMode||(l=x({position:"relative",overflow:"hidden",width:p+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",
userSelect:"none"},b.style));this.container=f=c("div",{id:t},l,f);this._cursor=f.style.cursor;this.renderer=new (z[b.renderer]||z.Renderer)(f,p,m,null,b.forExport,d.exporting&&d.exporting.allowHTML,this.styledMode);D(void 0,this);this.setClassName(b.className);if(this.styledMode)for(g in d.defs)this.renderer.definition(d.defs[g]);else this.renderer.setStyle(b.style);this.renderer.chartIndex=this.index;C(this,"afterGetContainer")};n.prototype.getMargins=function(a){var d=this.spacing,b=this.margin,
c=this.titleOffset;this.resetMargins();c[0]&&!f(b[0])&&(this.plotTop=Math.max(this.plotTop,c[0]+d[0]));c[2]&&!f(b[2])&&(this.marginBottom=Math.max(this.marginBottom,c[2]+d[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(b,d);C(this,"getMargins");a||this.getAxisMargins()};n.prototype.getAxisMargins=function(){var a=this,d=a.axisOffset=[0,0,0,0],b=a.colorAxis,c=a.margin,e=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?e(a.axes):b&&b.length&&e(b);
W.forEach(function(b,e){f(c[e])||(a[b]+=d[e])});a.setChartSize()};n.prototype.reflow=function(a){var d=this,b=d.options.chart,c=d.renderTo,e=f(b.width)&&f(b.height),t=b.width||K(c,"width");b=b.height||K(c,"height");c=a?a.target:u;if(!e&&!d.isPrinting&&t&&b&&(c===u||c===v)){if(t!==d.containerWidth||b!==d.containerHeight)r.clearTimeout(d.reflowTimeout),d.reflowTimeout=X(function(){d.container&&d.setSize(void 0,void 0,!1)},a?100:0);d.containerWidth=t;d.containerHeight=b}};n.prototype.setReflow=function(a){var d=
this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=p(u,"resize",function(a){d.options&&d.reflow(a)}),p(this,"destroy",this.unbindReflow))};n.prototype.setSize=function(a,d,b){var c=this,f=c.renderer;c.isResizing+=1;D(b,c);b=f.globalAnimation;c.oldChartHeight=c.chartHeight;c.oldChartWidth=c.chartWidth;"undefined"!==typeof a&&(c.options.chart.width=a);"undefined"!==typeof d&&(c.options.chart.height=d);c.getChartSize();c.styledMode||(b?
m:e)(c.container,{width:c.chartWidth+"px",height:c.chartHeight+"px"},b);c.setChartSize(!0);f.setSize(c.chartWidth,c.chartHeight,b);c.axes.forEach(function(a){a.isDirty=!0;a.setScale()});c.isDirtyLegend=!0;c.isDirtyBox=!0;c.layOutTitles();c.getMargins();c.redraw(b);c.oldChartHeight=null;C(c,"resize");X(function(){c&&C(c,"endResize",null,function(){--c.isResizing})},g(b).duration)};n.prototype.setChartSize=function(a){var d=this.inverted,b=this.renderer,c=this.chartWidth,e=this.chartHeight,f=this.options.chart,
t=this.spacing,l=this.clipOffset,k,g,p,m;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=g=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(c-k-this.marginRight));this.plotHeight=m=Math.max(0,Math.round(e-g-this.marginBottom));this.plotSizeX=d?m:p;this.plotSizeY=d?p:m;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=b.spacingBox={x:t[3],y:t[0],width:c-t[3]-t[1],height:e-t[0]-t[2]};this.plotBox=b.plotBox={x:k,y:g,width:p,height:m};c=2*Math.floor(this.plotBorderWidth/
2);d=Math.ceil(Math.max(c,l[3])/2);b=Math.ceil(Math.max(c,l[0])/2);this.clipBox={x:d,y:b,width:Math.floor(this.plotSizeX-Math.max(c,l[1])/2-d),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(c,l[2])/2-b))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});C(this,"afterSetChartSize",{skipAxes:a})};n.prototype.resetMargins=function(){C(this,"resetMargins");var a=this,d=a.options.chart;["margin","spacing"].forEach(function(b){var c=d[b],e=I(c)?c:[c,c,c,c];["Top","Right",
"Bottom","Left"].forEach(function(c,f){a[b][f]=P(d[b+c],e[f])})});W.forEach(function(d,b){a[d]=P(a.margin[b],a.spacing[b])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]};n.prototype.drawChartBox=function(){var a=this.options.chart,d=this.renderer,b=this.chartWidth,c=this.chartHeight,e=this.chartBackground,f=this.plotBackground,t=this.plotBorder,l=this.styledMode,k=this.plotBGImage,g=a.backgroundColor,p=a.plotBackgroundColor,m=a.plotBackgroundImage,h,r=this.plotLeft,x=this.plotTop,u=this.plotWidth,
w=this.plotHeight,n=this.plotBox,v=this.clipRect,E=this.clipBox,J="animate";e||(this.chartBackground=e=d.rect().addClass("highcharts-background").add(),J="attr");if(l)var q=h=e.strokeWidth();else{q=a.borderWidth||0;h=q+(a.shadow?8:0);g={fill:g||"none"};if(q||e["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=q;e.attr(g).shadow(a.shadow)}e[J]({x:h/2,y:h/2,width:b-h-q%2,height:c-h-q%2,r:a.borderRadius});J="animate";f||(J="attr",this.plotBackground=f=d.rect().addClass("highcharts-plot-background").add());
f[J](n);l||(f.attr({fill:p||"none"}).shadow(a.plotShadow),m&&(k?(m!==k.attr("href")&&k.attr("href",m),k.animate(n)):this.plotBGImage=d.image(m,r,x,u,w).add()));v?v.animate({width:E.width,height:E.height}):this.clipRect=d.clipRect(E);J="animate";t||(J="attr",this.plotBorder=t=d.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());l||t.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});t[J](t.crisp({x:r,y:x,width:u,height:w},-t.strokeWidth()));this.isDirtyBox=
!1;C(this,"afterDrawChartBox")};n.prototype.propFromSeries=function(){var a=this,d=a.options.chart,b,c=a.options.series,e,f;["inverted","angular","polar"].forEach(function(t){b=q.seriesTypes[d.type||d.defaultSeriesType];f=d[t]||b&&b.prototype[t];for(e=c&&c.length;!f&&e--;)(b=q.seriesTypes[c[e].type])&&b.prototype[t]&&(f=!0);a[t]=f})};n.prototype.linkSeries=function(){var a=this,d=a.series;d.forEach(function(a){a.linkedSeries.length=0});d.forEach(function(d){var b=d.options.linkedTo;w(b)&&(b=":previous"===
b?a.series[d.index-1]:a.get(b))&&b.linkedParent!==d&&(b.linkedSeries.push(d),d.linkedParent=b,b.enabledDataSorting&&d.setDataSortingOptions(),d.visible=P(d.options.visible,b.options.visible,d.visible))});C(this,"afterLinkSeries")};n.prototype.renderSeries=function(){this.series.forEach(function(a){a.translate();a.render()})};n.prototype.renderLabels=function(){var a=this,d=a.options.labels;d.items&&d.items.forEach(function(b){var c=x(d.style,b.style),e=Q(c.left)+a.plotLeft,f=Q(c.top)+a.plotTop+12;
delete c.left;delete c.top;a.renderer.text(b.html,e,f).attr({zIndex:2}).css(c).add()})};n.prototype.render=function(){var a=this.axes,d=this.colorAxis,b=this.renderer,c=this.options,e=0,f=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new y(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return e=21,!0});var t=this.plotHeight=
Math.max(this.plotHeight-e,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var l=1.1<c/this.plotWidth;var k=1.05<t/this.plotHeight;if(l||k)a.forEach(function(a){(a.horiz&&l||!a.horiz&&k)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?f(a):d&&d.length&&f(d);this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();
this.hasRendered=!0};n.prototype.addCredits=function(a){var b=this,c=d(!0,this.options.credits,a);c.enabled&&!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(u.location.href=c.href)}).attr({align:c.position.align,zIndex:8}),b.styledMode||this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})};n.prototype.updateContainerScaling=
function(){var a=this.container;if(2<a.offsetWidth&&2<a.offsetHeight&&a.getBoundingClientRect){var d=a.getBoundingClientRect(),b=d.width/a.offsetWidth;a=d.height/a.offsetHeight;1!==b||1!==a?this.containerScaling={scaleX:b,scaleY:a}:delete this.containerScaling}};n.prototype.destroy=function(){var a=this,d=a.axes,c=a.series,e=a.container,f,t=e&&e.parentNode;C(a,"destroy");a.renderer.forExport?l(H,a):H[a.index]=void 0;z.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");Y(a);for(f=d.length;f--;)d[f]=
d[f].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(f=c.length;f--;)c[f]=c[f].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(d){var b=a[d];b&&b.destroy&&(a[d]=b.destroy())});e&&(e.innerHTML="",Y(e),t&&b(e));J(a,function(d,b){delete a[b]})};n.prototype.firstRender=function(){var a=this,d=a.options;if(!a.isReadyToRender||
a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(T(d.series)?d.series:[]).forEach(function(d){a.initSeries(d)});a.linkSeries();a.setSeriesData();C(a,"beforeRender");G&&(a.pointer=z.hasTouch||!u.PointerEvent&&!u.MSPointerEvent?new G(a,d):new F(a,d));a.render();if(!a.renderer.imgCount&&!a.hasLoaded)a.onload();a.temporaryDisplay(!0)}};n.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&"undefined"!==typeof this.index&&
a.apply(this,[this])},this);C(this,"load");C(this,"render");f(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};return n}();U.prototype.callbacks=[];z.chart=function(a,d,b){return new U(a,d,b)};return z.Chart=U});O(q,"Extensions/ScrollablePlotArea.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.stop,F=z.addEvent,L=z.createElement,G=z.pick;"";F(h,"afterSetChartSize",function(h){var r=
this.options.chart.scrollablePlotArea,m=r&&r.minWidth;r=r&&r.minHeight;if(!this.renderer.forExport){if(m){if(this.scrollablePixelsX=m=Math.max(0,m-this.chartWidth)){this.plotWidth+=m;this.inverted?(this.clipBox.height+=m,this.plotBox.height+=m):(this.clipBox.width+=m,this.plotBox.width+=m);var g={1:{name:"right",value:m}}}}else r&&(this.scrollablePixelsY=m=Math.max(0,r-this.chartHeight))&&(this.plotHeight+=m,this.inverted?(this.clipBox.width+=m,this.plotBox.width+=m):(this.clipBox.height+=m,this.plotBox.height+=
m),g={2:{name:"bottom",value:m}});g&&!h.skipAxes&&this.axes.forEach(function(m){g[m.side]?m.getPlotLinePath=function(){var h=g[m.side].name,r=this[h];this[h]=r-g[m.side].value;var u=q.Axis.prototype.getPlotLinePath.apply(this,arguments);this[h]=r;return u}:(m.setAxisSize(),m.setAxisTranslation())})}});F(h,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});h.prototype.setUpScrolling=function(){var h=
this,r={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(r.overflowX="auto");this.scrollablePixelsY&&(r.overflowY="auto");this.scrollingParent=L("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo);this.scrollingContainer=L("div",{className:"highcharts-scrolling"},r,this.scrollingParent);F(this.scrollingContainer,"scroll",function(){h.pointer&&delete h.pointer.chartPosition});this.innerContainer=L("div",{className:"highcharts-inner-container"},
null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};h.prototype.moveFixedElements=function(){var h=this.container,r=this.fixedRenderer,m=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),g;this.scrollablePixelsX&&
!this.inverted?g=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(g=".highcharts-yaxis");m.push(g,g+"-labels");m.forEach(function(g){[].forEach.call(h.querySelectorAll(g),function(g){(g.namespaceURI===r.SVG_NS?r.box:r.box.parentNode).appendChild(g);g.style.pointerEvents="auto"})})};h.prototype.applyFixed=function(){var h,r,m=!this.fixedDiv,g=this.options.chart.scrollablePlotArea;
m?(this.fixedDiv=L("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2,top:0},null,!0),null===(h=this.scrollingContainer)||void 0===h?void 0:h.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=h=new q.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight,null===(r=this.options.chart)||void 0===r?void 0:r.style),this.scrollableMask=h.path().attr({fill:this.options.chart.backgroundColor||
"#fff","fill-opacity":G(g.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),F(this,"afterShowResetZoom",this.moveFixedElements),F(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);r=this.chartWidth+(this.scrollablePixelsX||0);h=this.chartHeight+(this.scrollablePixelsY||0);y(this.container);this.container.style.width=r+"px";this.container.style.height=h+"px";this.renderer.boxWrapper.attr({width:r,
height:h,viewBox:[0,0,r,h].join(" ")});this.chartBackground.attr({width:r,height:h});this.scrollingContainer.style.height=this.chartHeight+"px";m&&(g.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*g.scrollPositionX),g.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*g.scrollPositionY));h=this.axisOffset;m=this.plotTop-h[0]-1;g=this.plotLeft-h[3]-1;r=this.plotTop+this.plotHeight+h[2]+1;h=this.plotLeft+this.plotWidth+h[1]+1;var n=this.plotLeft+
this.plotWidth-(this.scrollablePixelsX||0),H=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);m=this.scrollablePixelsX?[["M",0,m],["L",this.plotLeft-1,m],["L",this.plotLeft-1,r],["L",0,r],["Z"],["M",n,m],["L",this.chartWidth,m],["L",this.chartWidth,r],["L",n,r],["Z"]]:this.scrollablePixelsY?[["M",g,0],["L",g,this.plotTop-1],["L",h,this.plotTop-1],["L",h,0],["Z"],["M",g,H],["L",g,this.chartHeight],["L",h,this.chartHeight],["L",h,H],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:m})}});
O(q,"Core/Axis/StackingAxis.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Utilities.js"]],function(n,h){var q=n.getDeferredAnimation,z=h.addEvent,y=h.destroyObjectProperties,F=h.fireEvent,M=h.objectEach,G=h.pick,B=function(){function h(h){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=h}h.prototype.buildStacks=function(){var h=this.axis,g=h.series,r=G(h.options.reversedStacks,!0),n=g.length,v;if(!h.isXAxis){this.usePercentage=!1;for(v=n;v--;){var u=g[r?v:n-v-1];u.setStackedPoints();
u.setGroupedPoints()}for(v=0;v<n;v++)g[v].modifyStacks();F(h,"afterBuildStacks")}};h.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var h=this.stacks=this.oldStacks;M(h,function(g){M(g,function(g){g.cumulative=g.total})})}};h.prototype.resetStacks=function(){var h=this,g=h.stacks;h.axis.isXAxis||M(g,function(g){M(g,function(m,r){m.touched<h.stacksTouched?(m.destroy(),delete g[r]):(m.total=null,m.cumulative=null)})})};h.prototype.renderStackTotals=function(){var h=this.axis,
g=h.chart,r=g.renderer,n=this.stacks;h=q(g,h.options.stackLabels.animation);var v=this.stackTotalGroup=this.stackTotalGroup||r.g("stack-labels").attr({visibility:"visible",zIndex:6,opacity:0}).add();v.translate(g.plotLeft,g.plotTop);M(n,function(g){M(g,function(g){g.render(v)})});v.animate({opacity:1},h)};return h}();return function(){function h(){}h.compose=function(m){z(m,"init",h.onInit);z(m,"destroy",h.onDestroy)};h.onDestroy=function(){var h=this.stacking;if(h){var g=h.stacks;M(g,function(h,
m){y(h);g[m]=null});h&&h.stackTotalGroup&&h.stackTotalGroup.destroy()}};h.onInit=function(){this.stacking||(this.stacking=new B(this))};return h}()});O(q,"Mixins/LegendSymbol.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=h.merge,z=h.pick;return n.LegendSymbolMixin={drawRectangle:function(h,n){var q=h.symbolHeight,y=h.options.squareSymbol;n.legendSymbol=this.chart.renderer.rect(y?(h.symbolWidth-q)/2:0,h.baseline-q+1,y?q:h.symbolWidth,q,z(h.options.symbolRadius,q/2)).addClass("highcharts-point").attr({zIndex:3}).add(n.legendGroup)},
drawLineMarker:function(h){var n=this.options,y=n.marker,G=h.symbolWidth,B=h.symbolHeight,r=B/2,m=this.chart.renderer,g=this.legendGroup;h=h.baseline-Math.round(.3*h.fontMetrics.b);var D={};this.chart.styledMode||(D={"stroke-width":n.lineWidth||0},n.dashStyle&&(D.dashstyle=n.dashStyle));this.legendLine=m.path([["M",0,h],["L",G,h]]).addClass("highcharts-graph").attr(D).add(g);y&&!1!==y.enabled&&G&&(n=Math.min(z(y.radius,r),r),0===this.symbol.indexOf("url")&&(y=q(y,{width:B,height:B}),n=0),this.legendSymbol=
y=m.symbol(this.symbol,G/2-n,h-n,2*n,2*n,y).addClass("highcharts-point").add(g),y.isMarker=!0)}}});O(q,"Core/Series/CartesianSeries.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Series/Series.js"],q["Core/Globals.js"],q["Mixins/LegendSymbol.js"],q["Core/Options.js"],q["Core/Series/Point.js"],q["Core/Renderer/SVG/SVGElement.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G){var B=n.animObject,r=y.defaultOptions,m=G.addEvent,g=G.arrayMax,D=G.arrayMin,H=G.clamp,v=G.correctFloat,u=G.defined,
A=G.erase,p=G.error,k=G.extend,c=G.find,e=G.fireEvent,f=G.getNestedProperty,b=G.isArray,l=G.isFunction,a=G.isNumber,x=G.isString,E=G.merge,C=G.objectEach,K=G.pick,T=G.removeEvent,R=G.splat,N=G.syncTimeout;"";var I=h.seriesTypes,w=q.win;n=h.seriesType("line",void 0,{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,
lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",defer:!0,formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},
lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,isCartesian:!0,parallelArrays:["x","y"],pointClass:F,requireSorting:!0,sorted:!0,init:function(a,b){e(this,"init",{options:b});var d=this,c=a.series,f;this.eventOptions=this.eventOptions||{};this.eventsToUnbind=[];d.chart=
a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();k(d,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});var t=b.events;C(t,function(a,b){l(a)&&d.eventOptions[b]!==a&&(l(d.eventOptions[b])&&T(d,b,d.eventOptions[b]),d.eventOptions[b]=a,m(d,b,a))});if(t&&t.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();d.parallelArrays.forEach(function(a){d[a+"Data"]||(d[a+"Data"]=[])});d.isCartesian&&(a.hasCartesianSeries=
!0);c.length&&(f=c[c.length-1]);d._i=K(f&&f._i,-1)+1;d.opacity=d.options.opacity;a.orderSeries(this.insert(c));b.dataSorting&&b.dataSorting.enabled?d.setDataSortingOptions():d.points||d.data||d.setData(b.data,!1);e(this,"afterInit")},is:function(a){return I[a]&&this instanceof I[a]},insert:function(d){var b=this.options.index,c;if(a(b)){for(c=d.length;c--;)if(b>=K(d[c].options.index,d[c]._i)){d.splice(c+1,0,this);break}-1===c&&d.unshift(this);c+=1}else d.push(this);return K(c,d.length-1)},bindAxes:function(){var a=
this,b=a.options,c=a.chart,f;e(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(d){c[d].forEach(function(c){f=c.options;if(b[d]===f.index||"undefined"!==typeof b[d]&&b[d]===f.id||"undefined"===typeof b[d]&&0===f.index)a.insert(c.series),a[d]=c,c.isDirty=!0});a[d]||a.optionalAxis===d||p(18,!0,c)})});e(this,"afterBindAxes")},updateParallelArrays:function(d,b){var c=d.series,e=arguments,f=a(b)?function(a){var e="y"===a&&c.toYData?c.toYData(d):d[a];c[a+"Data"][b]=e}:function(a){Array.prototype[b].apply(c[a+
"Data"],Array.prototype.slice.call(e,2))};c.parallelArrays.forEach(f)},hasData:function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,f=this.chart.time;b=K(b,a.pointStart,0);this.pointInterval=c=K(this.pointInterval,a.pointInterval,1);e&&(a=new f.Date(b),"day"===e?f.set("Date",a,f.get("Date",a)+c):"month"===e?f.set("Month",
a,f.get("Month",a)+c):"year"===e&&f.set("FullYear",a,f.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setDataSortingOptions:function(){var a=this.options;k(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});u(a.pointRange)||(a.pointRange=1)},setOptions:function(a){var d=this.chart,b=d.options,c=b.plotOptions,f=d.userOptions||{};a=E(a);d=d.styledMode;var l={plotOptions:c,userOptions:a};e(this,"setOptions",l);var k=l.plotOptions[this.type],g=f.plotOptions||{};
this.userOptions=l.userOptions;f=E(k,c.series,f.plotOptions&&f.plotOptions[this.type],a);this.tooltipOptions=E(r.tooltip,r.plotOptions.series&&r.plotOptions.series.tooltip,r.plotOptions[this.type].tooltip,b.tooltip.userOptions,c.series&&c.series.tooltip,c[this.type].tooltip,a.tooltip);this.stickyTracking=K(a.stickyTracking,g[this.type]&&g[this.type].stickyTracking,g.series&&g.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:f.stickyTracking);null===k.marker&&delete f.marker;
this.zoneAxis=f.zoneAxis;b=this.zones=(f.zones||[]).slice();!f.negativeColor&&!f.negativeFillColor||f.zones||(c={value:f[this.zoneAxis+"Threshold"]||f.threshold||0,className:"highcharts-negative"},d||(c.color=f.negativeColor,c.fillColor=f.negativeFillColor),b.push(c));b.length&&u(b[b.length-1].value)&&b.push(d?{}:{color:this.color,fillColor:this.fillColor});e(this,"afterSetOptions",{options:f});return f},getName:function(){return K(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,
b,c){var d=this.chart,e=this.userOptions,f=a+"Index",t=a+"Counter",l=c?c.length:K(d.options.chart[a+"Count"],d[a+"Count"]);if(!b){var k=K(e[f],e["_"+f]);u(k)||(d.series.length||(d[t]=0),e["_"+f]=k=d[t]%l,d[t]+=1);c&&(b=c[k])}"undefined"!==typeof k&&(this[f]=k);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||r.plotOptions[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?
this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(d,b){var e=d.id,f=d.x,t=this.points,l,k=this.options.dataSorting;if(e)var g=this.chart.get(e);else if(this.linkedParent||this.enabledDataSorting){var h=k&&k.matchByName?"name":"index";g=c(t,function(a){return!a.touched&&a[h]===d[h]});if(!g)return}if(g){var p=g&&g.index;"undefined"!==typeof p&&(l=!0)}"undefined"===typeof p&&a(f)&&(p=this.xData.indexOf(f,
b));-1!==p&&"undefined"!==typeof p&&this.cropped&&(p=p>=this.cropStart?p-this.cropStart:p);!l&&t[p]&&t[p].touched&&(p=void 0);return p},drawLegendSymbol:z.drawLineMarker,updateData:function(d,b){var c=this.options,e=c.dataSorting,f=this.points,t=[],l,k,p,h=this.requireSorting,m=d.length===f.length,r=!0;this.xIncrement=null;d.forEach(function(d,b){var k=u(d)&&this.pointClass.prototype.optionsToObject.call({series:this},d)||{};var g=k.x;if(k.id||a(g)){if(g=this.findPointIndex(k,p),-1===g||"undefined"===
typeof g?t.push(d):f[g]&&d!==c.data[g]?(f[g].update(d,!1,null,!1),f[g].touched=!0,h&&(p=g+1)):f[g]&&(f[g].touched=!0),!m||b!==g||e&&e.enabled||this.hasDerivedData)l=!0}else t.push(d)},this);if(l)for(d=f.length;d--;)(k=f[d])&&!k.touched&&k.remove&&k.remove(!1,b);else!m||e&&e.enabled?r=!1:(d.forEach(function(a,d){f[d].update&&a!==f[d].y&&f[d].update(a,!1,null,!1)}),t.length=0);f.forEach(function(a){a&&(a.touched=!1)});if(!r)return!1;t.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);null===
this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=g(this.xData),this.autoIncrement());return!0},setData:function(d,c,e,f){var t=this,l=t.points,k=l&&l.length||0,g,h=t.options,m=t.chart,r=h.dataSorting,n=null,u=t.xAxis;n=h.turboThreshold;var w=this.xData,v=this.yData,q=(g=t.pointArrayMap)&&g.length,E=h.keys,C=0,N=1,J;d=d||[];g=d.length;c=K(c,!0);r&&r.enabled&&(d=this.sortData(d));!1!==f&&g&&k&&!t.cropped&&!t.hasGroupedData&&t.visible&&!t.isSeriesBoosting&&(J=this.updateData(d,e));if(!J){t.xIncrement=
null;t.colorCounter=0;this.parallelArrays.forEach(function(a){t[a+"Data"].length=0});if(n&&g>n)if(n=t.getFirstValidPoint(d),a(n))for(e=0;e<g;e++)w[e]=this.autoIncrement(),v[e]=d[e];else if(b(n))if(q)for(e=0;e<g;e++)f=d[e],w[e]=f[0],v[e]=f.slice(1,q+1);else for(E&&(C=E.indexOf("x"),N=E.indexOf("y"),C=0<=C?C:0,N=0<=N?N:1),e=0;e<g;e++)f=d[e],w[e]=f[C],v[e]=f[N];else p(12,!1,m);else for(e=0;e<g;e++)"undefined"!==typeof d[e]&&(f={series:t},t.pointClass.prototype.applyOptions.apply(f,[d[e]]),t.updateParallelArrays(f,
e));v&&x(v[0])&&p(14,!0,m);t.data=[];t.options.data=t.userOptions.data=d;for(e=k;e--;)l[e]&&l[e].destroy&&l[e].destroy();u&&(u.minRange=u.userMinRange);t.isDirty=m.isDirtyBox=!0;t.isDirtyData=!!l;e=!1}"point"===h.legendType&&(this.processData(),this.generatePoints());c&&m.redraw(e)},sortData:function(a){var d=this,b=d.options.dataSorting.sortKey||"y",c=function(a,d){return u(d)&&a.pointClass.prototype.optionsToObject.call({series:a},d)||{}};a.forEach(function(b,e){a[e]=c(d,b);a[e].index=e},this);
a.concat().sort(function(a,d){a=f(b,a);d=f(b,d);return d<a?-1:d>a?1:0}).forEach(function(a,d){a.x=d},this);d.linkedSeries&&d.linkedSeries.forEach(function(d){var b=d.options,e=b.data;b.dataSorting&&b.dataSorting.enabled||!e||(e.forEach(function(b,f){e[f]=c(d,b);a[f]&&(e[f].x=a[f].x,e[f].index=f)}),d.setData(e,!1))});return a},getProcessedData:function(a){var d=this.xData,b=this.yData,c=d.length;var e=0;var f=this.xAxis,l=this.options;var k=l.cropThreshold;var g=a||this.getExtremesFromAll||l.getExtremesFromAll,
h=this.isCartesian;a=f&&f.val2lin;l=!(!f||!f.logarithmic);var m=this.requireSorting;if(f){f=f.getExtremes();var r=f.min;var n=f.max}if(h&&this.sorted&&!g&&(!k||c>k||this.forceCrop))if(d[c-1]<r||d[0]>n)d=[],b=[];else if(this.yData&&(d[0]<r||d[c-1]>n)){e=this.cropData(this.xData,this.yData,r,n);d=e.xData;b=e.yData;e=e.start;var u=!0}for(k=d.length||1;--k;)if(c=l?a(d[k])-a(d[k-1]):d[k]-d[k-1],0<c&&("undefined"===typeof x||c<x))var x=c;else 0>c&&m&&(p(15,!1,this.chart),m=!1);return{xData:d,yData:b,cropped:u,
cropStart:e,closestPointRange:x}},processData:function(a){var d=this.xAxis;if(this.isCartesian&&!this.isDirty&&!d.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange},cropData:function(a,b,c,e,f){var d=a.length,t=0,l=d,k;f=K(f,this.cropShoulder);for(k=0;k<d;k++)if(a[k]>=c){t=Math.max(0,k-f);break}for(c=k;c<d;c++)if(a[c]>
e){l=c+f;break}return{xData:a.slice(t,l),yData:b.slice(t,l),start:t,end:l}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,f,l=this.processedXData,g=this.processedYData,p=this.pointClass,h=l.length,m=this.cropStart||0,r=this.hasGroupedData;a=a.keys;var n=[],x;c||r||(c=[],c.length=b.length,c=this.data=c);a&&r&&(this.options.keys=!1);for(x=0;x<h;x++){var u=m+x;if(r){var w=(new p).init(this,[l[x]].concat(R(g[x])));w.dataGroup=this.groupMap[x];w.dataGroup.options&&(w.options=w.dataGroup.options,
k(w,w.dataGroup.options),delete w.dataLabels)}else(w=c[u])||"undefined"===typeof b[u]||(c[u]=w=(new p).init(this,b[u],l[x]));w&&(w.index=u,n[x]=w)}this.options.keys=a;if(c&&(h!==(f=c.length)||r))for(x=0;x<f;x++)x!==m||r||(x+=h),c[x]&&(c[x].destroyElements(),c[x].plotX=void 0);this.data=c;this.points=n;e(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:D(a),max:g(a)}},getExtremes:function(d,c){var f=this.xAxis,t=this.yAxis,l=this.processedXData||this.xData,k=[],p=0,h=0;var m=0;var r=
this.requireSorting?this.cropShoulder:0,x=t?t.positiveValuesOnly:!1,n;d=d||this.stackedYData||this.processedYData||[];t=d.length;f&&(m=f.getExtremes(),h=m.min,m=m.max);for(n=0;n<t;n++){var u=l[n];var w=d[n];var v=(a(w)||b(w))&&(w.length||0<w||!x);u=c||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!f||(l[n+r]||u)>=h&&(l[n-r]||u)<=m;if(v&&u)if(v=w.length)for(;v--;)a(w[v])&&(k[p++]=w[v]);else k[p++]=w}d={dataMin:D(k),dataMax:g(k)};e(this,"afterGetExtremes",{dataExtremes:d});
return d},applyExtremes:function(){var a=this.getExtremes();this.dataMin=a.dataMin;this.dataMax=a.dataMax;return a},getFirstValidPoint:function(a){for(var d=null,b=a.length,c=0;null===d&&c<b;)d=a[c],c++;return d},translate:function(){this.processedXData||this.processData();this.generatePoints();var d=this.options,c=d.stacking,f=this.xAxis,l=f.categories,k=this.enabledDataSorting,g=this.yAxis,p=this.points,h=p.length,m=!!this.modifyValue,r,n=this.pointPlacementToXValue(),x=!!n,w=d.threshold,E=d.startFromThreshold?
w:0,q,C=this.zoneAxis||"y",N=Number.MAX_VALUE;for(r=0;r<h;r++){var I=p[r],A=I.x,D=I.y,y=I.low,B=c&&g.stacking&&g.stacking.stacks[(this.negStacks&&D<(E?0:w)?"-":"")+this.stackKey];if(g.positiveValuesOnly&&!g.validatePositiveValue(D)||f.positiveValuesOnly&&!f.validatePositiveValue(A))I.isNull=!0;I.plotX=q=v(H(f.translate(A,0,0,0,1,n,"flags"===this.type),-1E5,1E5));if(c&&this.visible&&B&&B[A]){var R=this.getStackIndicator(R,A,this.index);if(!I.isNull){var G=B[A];var z=G.points[R.key]}}b(z)&&(y=z[0],
D=z[1],y===E&&R.key===B[A].base&&(y=K(a(w)&&w,g.min)),g.positiveValuesOnly&&0>=y&&(y=null),I.total=I.stackTotal=G.total,I.percentage=G.total&&I.y/G.total*100,I.stackY=D,this.irregularWidths||G.setOffset(this.pointXOffset||0,this.barW||0));I.yBottom=u(y)?H(g.translate(y,0,1,0,1),-1E5,1E5):null;m&&(D=this.modifyValue(D,I));I.plotY="number"===typeof D&&Infinity!==D?H(g.translate(D,0,1,0,1),-1E5,1E5):void 0;I.isInside=this.isPointInside(I);I.clientX=x?v(f.translate(A,0,0,0,1,n)):q;I.negative=I[C]<(d[C+
"Threshold"]||w||0);I.category=l&&"undefined"!==typeof l[I.x]?l[I.x]:I.x;if(!I.isNull&&!1!==I.visible){"undefined"!==typeof F&&(N=Math.min(N,Math.abs(q-F)));var F=q}I.zone=this.zones.length&&I.getZone();!I.graphic&&this.group&&k&&(I.isNew=!0)}this.closestPointRangePx=N;e(this,"afterTranslate")},getValidPoints:function(a,b,c){var d=this.chart;return(a||this.points||[]).filter(function(a){return b&&!d.isInsidePlot(a.plotX,a.plotY,d.inverted)?!1:!1!==a.visible&&(c||!a.isNull)})},getClipBox:function(a,
b){var d=this.options,c=this.chart,e=c.inverted,f=this.xAxis,t=f&&this.yAxis,l=c.options.chart.scrollablePlotArea||{};a&&!1===d.clip&&t?a=e?{y:-c.chartWidth+t.len+t.pos,height:c.chartWidth,width:c.chartHeight,x:-c.chartHeight+f.len+f.pos}:{y:-t.pos,height:c.chartHeight,width:c.chartWidth,x:-f.pos}:(a=this.clipBox||c.clipBox,b&&(a.width=c.plotSizeX,a.x=(c.scrollablePixelsX||0)*(l.scrollPositionX||0)));return b?{width:a.width,x:a.x}:a},setClip:function(a){var d=this.chart,b=this.options,c=d.renderer,
e=d.inverted,f=this.clipBox,l=this.getClipBox(a),k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,l.height,b.xAxis,b.yAxis].join(),g=d[k],p=d[k+"m"];a&&(l.width=0,e&&(l.x=d.plotHeight+(!1!==b.clip?0:d.plotTop)));g?d.hasLoaded||g.attr(l):(a&&(d[k+"m"]=p=c.clipRect(e?d.plotSizeX+99:-99,e?-d.plotLeft:-d.plotTop,99,e?d.chartWidth:d.chartHeight)),d[k]=g=c.clipRect(l),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);if(!1!==b.clip||a)this.group.clip(a||
f?g:d.clipRect),this.markerGroup.clip(p),this.sharedClipKey=k;a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&k&&d[k]&&(f||(d[k]=d[k].destroy()),d[k+"m"]&&(d[k+"m"]=d[k+"m"].destroy())))},animate:function(a){var d=this.chart,b=B(this.options.animation);if(!d.hasRendered)if(a)this.setClip(b);else{var c=this.sharedClipKey;a=d[c];var e=this.getClipBox(b,!0);a&&a.animate(e,b);d[c+"m"]&&d[c+"m"].animate({width:e.width+99,x:e.x-(d.inverted?0:99)},b)}},afterAnimate:function(){this.setClip();
e(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,e,f=this.options.marker,l=this[this.specialGroup]||this.markerGroup,k=this.xAxis,g=K(f.enabled,!k||k.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++){var p=a[c];var h=(e=p.graphic)?"animate":"attr";var m=p.marker||{};var r=!!p.marker;if((g&&"undefined"===typeof m.enabled||m.enabled)&&!p.isNull&&!1!==p.visible){var n=
K(m.symbol,this.symbol);var x=this.markerAttribs(p,p.selected&&"select");this.enabledDataSorting&&(p.startXPos=k.reversed?-x.width:k.width);var w=!1!==p.isInside;e?e[w?"show":"hide"](w).animate(x):w&&(0<x.width||p.hasImage)&&(p.graphic=e=b.renderer.symbol(n,x.x,x.y,x.width,x.height,r?m:f).add(l),this.enabledDataSorting&&b.hasRendered&&(e.attr({x:p.startXPos}),h="animate"));e&&"animate"===h&&e[w?"show":"hide"](w).animate(x);if(e&&!b.styledMode)e[h](this.pointAttribs(p,p.selected&&"select"));e&&e.addClass(p.getClassName(),
!0)}else e&&(p.graphic=e.destroy())}},markerAttribs:function(a,b){var d=this.options,c=d.marker,e=a.marker||{},f=e.symbol||c.symbol,l=K(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],l=K(b&&b.radius,c&&c.radius,l+(c&&c.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(l=0);a={x:d.crisp?Math.floor(a.plotX)-l:a.plotX-l,y:a.plotY-l};l&&(a.width=a.height=2*l);return a},pointAttribs:function(a,b){var d=this.options.marker,c=a&&a.options,e=c&&c.marker||{},f=this.color,l=c&&
c.color,t=a&&a.color;c=K(e.lineWidth,d.lineWidth);var k=a&&a.zone&&a.zone.color;a=1;f=l||k||t||f;l=e.fillColor||d.fillColor||f;f=e.lineColor||d.lineColor||f;b=b||"normal";d=d.states[b];b=e.states&&e.states[b]||{};c=K(b.lineWidth,d.lineWidth,c+K(b.lineWidthPlus,d.lineWidthPlus,0));l=b.fillColor||d.fillColor||l;f=b.lineColor||d.lineColor||f;a=K(b.opacity,d.opacity,a);return{stroke:f,"stroke-width":c,fill:l,opacity:a}},destroy:function(a){var d=this,b=d.chart,c=/AppleWebKit\/533/.test(w.navigator.userAgent),
f,l,k=d.data||[],g,p;e(d,"destroy");this.removeEvents(a);(d.axisTypes||[]).forEach(function(a){(p=d[a])&&p.series&&(A(p.series,d),p.isDirty=p.forceRedraw=!0)});d.legendItem&&d.chart.legend.destroyItem(d);for(l=k.length;l--;)(g=k[l])&&g.destroy&&g.destroy();d.points=null;G.clearTimeout(d.animationTimeout);C(d,function(a,d){a instanceof M&&!a.survive&&(f=c&&"group"===d?"hide":"destroy",a[f]())});b.hoverSeries===d&&(b.hoverSeries=null);A(b.series,d);b.orderSeries();C(d,function(b,c){a&&"hcEvents"===
c||delete d[c]})},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,l,k=[],t=[],g;a=a||d.points;(l=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&l&&(f=4-f);a=this.getValidPoints(a,!1,!(e.connectNulls&&!b&&!c));a.forEach(function(l,p){var h=l.plotX,m=l.plotY,r=a[p-1];(l.leftCliff||r&&r.rightCliff)&&!c&&(g=!0);l.isNull&&!u(b)&&0<p?g=!e.connectNulls:l.isNull&&!b?g=!0:(0===p||g?p=[["M",l.plotX,l.plotY]]:d.getPointSpline?p=[d.getPointSpline(a,l,p)]:f?(p=1===f?[["L",r.plotX,m]]:2===
f?[["L",(r.plotX+h)/2,r.plotY],["L",(r.plotX+h)/2,m]]:[["L",h,r.plotY]],p.push(["L",h,m])):p=[["L",h,m]],t.push(l.x),f&&(t.push(l.x),2===f&&t.push(l.x)),k.push.apply(k,p),g=!1)});k.xMap=t;return d.graphPath=k},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),e=this.chart.styledMode,f=[["graph","highcharts-graph"]];e||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(d,f){var l=d[0],k=a[l],t=k?"animate":
"attr";k?(k.endX=a.preventGraphAnimation?null:c.xMap,k.animate({d:c})):c.length&&(a[l]=k=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group));k&&!e&&(l={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?l.dashstyle=d[3]:"square"!==b.linecap&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),k[t](l).shadow(2>f&&b.shadow));k&&(k.startX=c.xMap,k.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(d,b){b=["zone-graph-"+b,"highcharts-graph highcharts-zone-graph-"+
b+" "+(d.className||"")];this.chart.styledMode||b.push(d.color||this.color,d.dashStyle||this.options.dashStyle);a.push(b)},this);return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,f,l,k=this.clips||[],g,p=this.graph,h=this.area,m=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],x=b.inverted,n,w,u,v=!1,q,E;if(e.length&&(p||h)&&r&&"undefined"!==typeof r.min){var C=r.reversed;var N=r.horiz;p&&!this.showLine&&p.hide();h&&h.hide();var I=r.getExtremes();
e.forEach(function(d,e){f=C?N?b.plotWidth:0:N?0:r.toPixels(I.min)||0;f=H(K(l,f),0,m);l=H(Math.round(r.toPixels(K(d.value,I.max),!0)||0),0,m);v&&(f=l=r.toPixels(I.max));n=Math.abs(f-l);w=Math.min(f,l);u=Math.max(f,l);r.isXAxis?(g={x:x?u:w,y:0,width:n,height:m},N||(g.x=b.plotHeight-g.x)):(g={x:0,y:x?u:w,width:m,height:n},N&&(g.y=b.plotWidth-g.y));x&&c.isVML&&(g=r.isXAxis?{x:0,y:C?w:u,height:g.width,width:b.chartWidth}:{x:g.y-b.plotLeft-b.spacingBox.x,y:0,width:g.height,height:b.chartHeight});k[e]?k[e].animate(g):
k[e]=c.clipRect(g);q=a["zone-area-"+e];E=a["zone-graph-"+e];p&&E&&E.clip(k[e]);h&&q&&q.clip(k[e]);v=d.value>I.max;a.resetZones&&0===l&&(l=void 0)});this.clips=k}else a.visible&&(p&&p.show(!0),h&&h.show(!0))},invertGroups:function(a){function d(){["group","markerGroup"].forEach(function(d){b[d]&&(c.renderer.isVML&&b[d].attr({width:b.yAxis.len,height:b.xAxis.len}),b[d].width=b.yAxis.len,b[d].height=b.xAxis.len,b[d].invert(b.isRadialSeries?!1:a))})}var b=this,c=b.chart;b.xAxis&&(b.eventsToUnbind.push(m(c,
"resize",d)),d(),b.invertGroups=d)},plotGroup:function(a,b,c,e,f){var d=this[a],l=!d;c={visibility:c,zIndex:e||.1};"undefined"===typeof this.opacity||this.chart.styledMode||"inactive"===this.state||(c.opacity=this.opacity);l&&(this[a]=d=this.chart.renderer.g().add(f));d.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(u(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(d.hasClass("highcharts-tracker")?" highcharts-tracker":
""),!0);d.attr(c)[l?"attr":"animate"](this.getPlotBox());return d},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=0):T(this)},render:function(){var a=this,b=a.chart,c=a.options,f=B(c.animation),l=!a.finishedAnimating&&b.renderer.isSVG&&
f.duration,k=a.visible?"inherit":"hidden",g=c.zIndex,p=a.hasRendered,h=b.seriesGroup,m=b.inverted;e(this,"render");var r=a.plotGroup("group","series",k,g,h);a.markerGroup=a.plotGroup("markerGroup","markers",k,g,h);l&&a.animate&&a.animate(!0);r.inverted=a.isCartesian||a.invertable?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);
!1===c.clip||a.sharedClipKey||p||r.clip(b.clipRect);l&&a.animate&&a.animate();p||(l&&f.defer&&(l+=f.defer),a.animationTimeout=N(function(){a.afterAnimate()},l||0));a.isDirty=!1;a.hasRendered=!0;e(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:K(e&&e.left,a.plotLeft),translateY:K(f&&f.top,a.plotTop)}));this.translate();this.render();b&&
delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,c=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:e?c.len-a.chartX+c.pos:a.chartY-c.pos},b,a)},buildKDTree:function(a){function b(a,c,e){var f;if(f=a&&a.length){var l=d.kdAxisArray[c%e];a.sort(function(a,b){return a[l]-b[l]});f=Math.floor(f/2);return{point:a[f],left:b(a.slice(0,f),c+1,e),right:b(a.slice(f+1),c+1,e)}}}this.buildingKdTree=!0;var d=
this,c=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;N(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),c,c);d.buildingKdTree=!1},d.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,c){function d(a,b,c,g){var t=b.point,p=e.kdAxisArray[c%g],h=t;var m=u(a[f])&&u(t[f])?Math.pow(a[f]-t[f],2):null;var r=u(a[l])&&u(t[l])?Math.pow(a[l]-t[l],2):null;r=(m||0)+(r||0);t.dist=u(r)?Math.sqrt(r):Number.MAX_VALUE;t.distX=u(m)?Math.sqrt(m):Number.MAX_VALUE;p=a[p]-
t[p];r=0>p?"left":"right";m=0>p?"right":"left";b[r]&&(r=d(a,b[r],c+1,g),h=r[k]<h[k]?r:t);b[m]&&Math.sqrt(p*p)<h[k]&&(a=d(a,b[m],c+1,g),h=a[k]<h[k]?a:h);return h}var e=this,f=this.kdAxisArray[0],l=this.kdAxisArray[1],k=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var b=this.options,c=b.pointRange,e=this.xAxis;b=b.pointPlacement;"between"===b&&(b=
e.reversed?-.5:.5);return a(b)?b*K(c,e.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&0<=a.plotX&&a.plotX<=this.xAxis.len}});"";return n});O(q,"Series/LineSeries.js",[q["Core/Series/CartesianSeries.js"],q["Core/Globals.js"]],function(n,h){h.Series=n;return h.Series});O(q,"Extensions/Stacking.js",[q["Core/Axis/Axis.js"],q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Axis/StackingAxis.js"],q["Core/Utilities.js"]],
function(n,h,q,z,y){var F=y.correctFloat,L=y.defined,G=y.destroyObjectProperties,B=y.format,r=y.isNumber,m=y.pick;"";var g=q.Series,D=function(){function h(g,h,m,p,k){var c=g.chart.inverted;this.axis=g;this.isNegative=m;this.options=h=h||{};this.x=p;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=k;this.rightCliff=this.leftCliff=0;this.alignOptions={align:h.align||(c?m?"left":"right":"center"),verticalAlign:h.verticalAlign||(c?"middle":m?"bottom":"top"),y:h.y,x:h.x};this.textAlign=
h.textAlign||(c?m?"right":"left":"center")}h.prototype.destroy=function(){G(this,this.axis)};h.prototype.render=function(g){var h=this.axis.chart,r=this.options,p=r.format;p=p?B(p,this,h):r.formatter.call(this);this.label?this.label.attr({text:p,visibility:"hidden"}):(this.label=h.renderer.label(p,null,null,r.shape,null,null,r.useHTML,!1,"stack-labels"),p={r:r.borderRadius||0,text:p,rotation:r.rotation,padding:m(r.padding,5),visibility:"hidden"},h.styledMode||(p.fill=r.backgroundColor,p.stroke=r.borderColor,
p["stroke-width"]=r.borderWidth,this.label.css(r.style)),this.label.attr(p),this.label.added||this.label.add(g));this.label.labelrank=h.plotHeight};h.prototype.setOffset=function(h,n,q,p,k){var c=this.axis,e=c.chart;p=c.translate(c.stacking.usePercentage?100:p?p:this.total,0,0,0,1);q=c.translate(q?q:0);q=L(p)&&Math.abs(p-q);h=m(k,e.xAxis[0].translate(this.x))+h;c=L(p)&&this.getStackBox(e,this,h,p,n,q,c);n=this.label;q=this.isNegative;h="justify"===m(this.options.overflow,"justify");var f=this.textAlign;
n&&c&&(k=n.getBBox(),p=n.padding,f="left"===f?e.inverted?-p:p:"right"===f?k.width:e.inverted&&"center"===f?k.width/2:e.inverted?q?k.width+p:-p:k.width/2,q=e.inverted?k.height/2:q?-p:k.height,this.alignOptions.x=m(this.options.x,0),this.alignOptions.y=m(this.options.y,0),c.x-=f,c.y-=q,n.align(this.alignOptions,null,c),e.isInsidePlot(n.alignAttr.x+f-this.alignOptions.x,n.alignAttr.y+q-this.alignOptions.y)?n.show():(n.alignAttr.y=-9999,h=!1),h&&g.prototype.justifyDataLabel.call(this.axis,n,this.alignOptions,
n.alignAttr,k,c),n.attr({x:n.alignAttr.x,y:n.alignAttr.y}),m(!h&&this.options.crop,!0)&&((e=r(n.x)&&r(n.y)&&e.isInsidePlot(n.x-p+n.width,n.y)&&e.isInsidePlot(n.x+p,n.y))||n.hide()))};h.prototype.getStackBox=function(g,h,m,p,k,c,e){var f=h.axis.reversed,b=g.inverted,l=e.height+e.pos-(b?g.plotLeft:g.plotTop);h=h.isNegative&&!f||!h.isNegative&&f;return{x:b?h?p-e.right:p-c+e.pos-g.plotLeft:m+g.xAxis[0].transB-g.plotLeft,y:b?e.height-m-k:h?l-p-c:l-p,width:b?c:k,height:b?k:c}};return h}();h.prototype.getStacks=
function(){var g=this,h=g.inverted;g.yAxis.forEach(function(g){g.stacking&&g.stacking.stacks&&g.hasVisibleSeries&&(g.stacking.oldStacks=g.stacking.stacks)});g.series.forEach(function(r){var n=r.xAxis&&r.xAxis.options||{};!r.options.stacking||!0!==r.visible&&!1!==g.options.chart.ignoreHiddenSeries||(r.stackKey=[r.type,m(r.options.stack,""),h?n.top:n.left,h?n.height:n.width].join())})};z.compose(n);g.prototype.setGroupedPoints=function(){this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&
!this.options.stacking&&1<this.chart.series.length&&g.prototype.setStackedPoints.call(this,"group")};g.prototype.setStackedPoints=function(g){var h=g||this.options.stacking;if(h&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var r=this.processedXData,n=this.processedYData,p=[],k=n.length,c=this.options,e=c.threshold,f=m(c.startFromThreshold&&e,0);c=c.stack;g=g?this.type+","+h:this.stackKey;var b="-"+g,l=this.negStacks,a=this.yAxis,x=a.stacking.stacks,q=a.stacking.oldStacks,
C,K;a.stacking.stacksTouched+=1;for(K=0;K<k;K++){var H=r[K];var y=n[K];var N=this.getStackIndicator(N,H,this.index);var I=N.key;var w=(C=l&&y<(f?0:e))?b:g;x[w]||(x[w]={});x[w][H]||(q[w]&&q[w][H]?(x[w][H]=q[w][H],x[w][H].total=null):x[w][H]=new D(a,a.options.stackLabels,C,H,c));w=x[w][H];null!==y?(w.points[I]=w.points[this.index]=[m(w.cumulative,f)],L(w.cumulative)||(w.base=I),w.touched=a.stacking.stacksTouched,0<N.index&&!1===this.singleStacks&&(w.points[I][0]=w.points[this.index+","+H+",0"][0])):
w.points[I]=w.points[this.index]=null;"percent"===h?(C=C?g:b,l&&x[C]&&x[C][H]?(C=x[C][H],w.total=C.total=Math.max(C.total,w.total)+Math.abs(y)||0):w.total=F(w.total+(Math.abs(y)||0))):"group"===h?null!==y&&(w.total=(w.total||0)+1):w.total=F(w.total+(y||0));w.cumulative="group"===h?(w.total||1)-1:m(w.cumulative,f)+(y||0);null!==y&&(w.points[I].push(w.cumulative),p[K]=w.cumulative,w.hasValidPoints=!0)}"percent"===h&&(a.stacking.usePercentage=!0);"group"!==h&&(this.stackedYData=p);a.stacking.oldStacks=
{}}};g.prototype.modifyStacks=function(){var g=this,h=g.stackKey,m=g.yAxis.stacking.stacks,r=g.processedXData,p,k=g.options.stacking;g[k+"Stacker"]&&[h,"-"+h].forEach(function(c){for(var e=r.length,f,b;e--;)if(f=r[e],p=g.getStackIndicator(p,f,g.index,c),b=(f=m[c]&&m[c][f])&&f.points[p.key])g[k+"Stacker"](b,f,e)})};g.prototype.percentStacker=function(g,h,m){h=h.total?100/h.total:0;g[0]=F(g[0]*h);g[1]=F(g[1]*h);this.stackedYData[m]=g[1]};g.prototype.getStackIndicator=function(g,h,m,r){!L(g)||g.x!==
h||r&&g.key!==r?g={x:h,index:0,key:r}:g.index++;g.key=[m,h,g.index].join();return g};q.StackItem=D;return q.StackItem});O(q,"Core/Dynamics.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Axis/Axis.js"],q["Core/Series/Series.js"],q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Series/LineSeries.js"],q["Core/Options.js"],q["Core/Series/Point.js"],q["Core/Time.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G,B,r){var m=n.animate,g=n.setAnimation,D=q.seriesTypes,H=M.time,v=r.addEvent,u=r.createElement,
A=r.css,p=r.defined,k=r.erase,c=r.error,e=r.extend,f=r.fireEvent,b=r.isArray,l=r.isNumber,a=r.isObject,x=r.isString,E=r.merge,C=r.objectEach,K=r.pick,T=r.relativeLength,R=r.splat;y.cleanRecursively=function(b,c){var e={};C(b,function(d,f){if(a(b[f],!0)&&!b.nodeType&&c[f])d=y.cleanRecursively(b[f],c[f]),Object.keys(d).length&&(e[f]=d);else if(a(b[f])||b[f]!==c[f])e[f]=b[f]});return e};e(z.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=K(b,!0),f(e,"addSeries",{options:a},function(){d=e.initSeries(a);
e.isDirtyLegend=!0;e.linkSeries();d.enabledDataSorting&&d.setData(a.data,!1);f(e,"afterAddSeries",{series:d});b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){return this.createAxis(b?"xAxis":"yAxis",{axis:a,redraw:c,animation:d})},addColorAxis:function(a,b,c){return this.createAxis("colorAxis",{axis:a,redraw:b,animation:c})},createAxis:function(a,b){var c=this.options,d="colorAxis"===a,e=b.redraw,f=b.animation;b=E(b.axis,{index:this[a].length,isX:"xAxis"===a});var l=d?new y.ColorAxis(this,b):
new h(this,b);c[a]=R(c[a]||{});c[a].push(b);d&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));K(e,!0)&&this.redraw(f);return l},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,l=function(){d&&A(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=u("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),
b.loadingSpan=u("span",{className:"highcharts-loading-inner"},null,d),v(b,"redraw",l));d.className="highcharts-loading";b.loadingSpan.innerHTML=K(a,c.lang.loading,"");b.styledMode||(A(d,e(f.style,{zIndex:10})),A(b.loadingSpan,f.labelStyle),b.loadingShown||(A(d,{opacity:0,display:""}),m(d,{opacity:f.style.opacity||.5},{duration:f.showDuration||0})));b.loadingShown=!0;l()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",this.styledMode||
m(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){A(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
collectionsWithUpdate:["xAxis","yAxis","zAxis","series"],update:function(a,b,c,d){var e=this,g={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},k,h,m,r=a.isResponsiveOptions,n=[];f(e,"update",{options:a});r||e.setResponsive(!1,!0);a=y.cleanRecursively(a,e.options);E(!0,e.userOptions,a);if(k=a.chart){E(!0,e.options.chart,k);"className"in k&&e.setClassName(k.className);"reflow"in k&&e.setReflow(k.reflow);if("inverted"in k||"polar"in k||"type"in k){e.propFromSeries();
var w=!0}"alignTicks"in k&&(w=!0);C(k,function(a,b){-1!==e.propsRequireUpdateSeries.indexOf("chart."+b)&&(h=!0);-1!==e.propsRequireDirtyBox.indexOf(b)&&(e.isDirtyBox=!0);-1!==e.propsRequireReflow.indexOf(b)&&(r?e.isDirtyBox=!0:m=!0)});!e.styledMode&&"style"in k&&e.renderer.setStyle(k.style)}!e.styledMode&&a.colors&&(this.options.colors=a.colors);a.time&&(this.time===H&&(this.time=new B(a.time)),E(!0,e.options.time,a.time));C(a,function(b,c){if(e[c]&&"function"===typeof e[c].update)e[c].update(b,!1);
else if("function"===typeof e[g[c]])e[g[c]](b);else"color"!==c&&-1===e.collectionsWithUpdate.indexOf(c)&&E(!0,e.options[c],a[c]);"chart"!==c&&-1!==e.propsRequireUpdateSeries.indexOf(c)&&(h=!0)});this.collectionsWithUpdate.forEach(function(b){if(a[b]){if("series"===b){var d=[];e[b].forEach(function(a,b){a.options.isInternal||d.push(K(a.options.index,b))})}R(a[b]).forEach(function(a,f){var l=p(a.id),k;l&&(k=e.get(a.id));k||(k=e[b][d?d[f]:f])&&l&&p(k.options.id)&&(k=void 0);k&&k.coll===b&&(k.update(a,
!1),c&&(k.touched=!0));!k&&c&&e.collectionsWithInit[b]&&(e.collectionsWithInit[b][0].apply(e,[a].concat(e.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});c&&e[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:n.push(a)})}});n.forEach(function(a){a.remove&&a.remove(!1)});w&&e.axes.forEach(function(a){a.update({},!1)});h&&e.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);w=k&&k.width;k=k&&k.height;x(k)&&(k=T(k,w||e.chartWidth));m||l(w)&&w!==
e.chartWidth||l(k)&&k!==e.chartHeight?e.setSize(w,k,d):K(b,!0)&&e.redraw(d);f(e,"afterUpdate",{options:a,redraw:b,animation:d})},setSubtitle:function(a,b){this.applyDescription("subtitle",a);this.layOutTitles(b)},setCaption:function(a,b){this.applyDescription("caption",a);this.layOutTitles(b)}});z.prototype.collectionsWithInit={xAxis:[z.prototype.addAxis,[!0]],yAxis:[z.prototype.addAxis,[!1]],series:[z.prototype.addSeries]};e(G.prototype,{update:function(b,c,e,d){function f(){l.applyOptions(b);var d=
g&&l.hasDummyGraphic;d=null===l.y?!d:d;g&&d&&(l.graphic=g.destroy(),delete l.hasDummyGraphic);a(b,!0)&&(g&&g.element&&b&&b.marker&&"undefined"!==typeof b.marker.symbol&&(l.graphic=g.destroy()),b&&b.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()),l.connector&&(l.connector=l.connector.destroy()));h=l.index;k.updateParallelArrays(l,h);m.data[h]=a(m.data[h],!0)||a(b,!0)?l.options:K(b,m.data[h]);k.isDirty=k.isDirtyData=!0;!k.fixedBox&&k.hasCartesianSeries&&(p.isDirtyBox=!0);"point"===m.legendType&&
(p.isDirtyLegend=!0);c&&p.redraw(e)}var l=this,k=l.series,g=l.graphic,h,p=k.chart,m=k.options;c=K(c,!0);!1===d?f():l.firePointEvent("update",{options:b},f)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});e(F.prototype,{addPoint:function(a,b,c,d,e){var l=this.options,k=this.data,g=this.chart,h=this.xAxis;h=h&&h.hasNames&&h.names;var p=l.data,t=this.xData,m;b=K(b,!0);var r={series:this};this.pointClass.prototype.applyOptions.apply(r,[a]);var n=r.x;var x=t.length;
if(this.requireSorting&&n<t[x-1])for(m=!0;x&&t[x-1]>n;)x--;this.updateParallelArrays(r,"splice",x,0,0);this.updateParallelArrays(r,x);h&&r.name&&(h[n]=r.name);p.splice(x,0,a);m&&(this.data.splice(x,0,null),this.processData());"point"===l.legendType&&this.generatePoints();c&&(k[0]&&k[0].remove?k[0].remove(!1):(k.shift(),this.updateParallelArrays(r,"shift"),p.shift()));!1!==e&&f(this,"addPoint",{point:r});this.isDirtyData=this.isDirty=!0;b&&g.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,
f=e[a],l=d.points,k=d.chart,h=function(){l&&l.length===e.length&&l.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&k.redraw()};g(c,k);b=K(b,!0);f?f.firePointEvent("remove",null,h):h()},remove:function(a,b,c,d){function e(){l.destroy(d);l.remove=null;k.isDirtyLegend=k.isDirtyBox=!0;k.linkSeries();K(a,!0)&&k.redraw(b)}var l=this,k=l.chart;!1!==c?f(l,"remove",null,e):e()},update:function(a,b){a=y.cleanRecursively(a,
this.userOptions);f(this,"update",{options:a});var l=this,d=l.chart,k=l.userOptions,g=l.initialType||l.type,h=d.options.plotOptions,p=a.type||k.type||d.options.chart.type,m=!(this.hasDerivedData||p&&p!==this.type||"undefined"!==typeof a.pointStart||"undefined"!==typeof a.pointInterval||l.hasOptionChanged("dataGrouping")||l.hasOptionChanged("pointStart")||l.hasOptionChanged("pointInterval")||l.hasOptionChanged("pointIntervalUnit")||l.hasOptionChanged("keys")),r=D[g].prototype,n,x=["eventOptions","navigatorSeries",
"baseSeries"],q=l.finishedAnimating&&{animation:!1},u={};m&&(x.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&x.push("area","graph"),l.parallelArrays.forEach(function(a){x.push(a+"Data")}),a.data&&(a.dataSorting&&e(l.options.dataSorting,a.dataSorting),this.setData(a.data,!1)));a=E(k,q,{index:"undefined"===typeof k.index?l.index:k.index,pointStart:K(h&&h.series&&
h.series.pointStart,k.pointStart,l.xData[0])},!m&&{data:l.options.data},a);m&&a.data&&(a.data=l.options.data);x=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(x);x.forEach(function(a){x[a]=l[a];delete l[a]});l.remove(!1,null,!1,!0);for(n in r)l[n]=void 0;D[p||g]?e(l,D[p||g].prototype):c(17,!0,d,{missingModuleFor:p||g});x.forEach(function(a){l[a]=x[a]});l.init(d,a);if(m&&this.points){var C=l.options;!1===C.visible?(u.graphic=1,u.dataLabel=1):l._hasPointLabels||(a=C.marker,k=C.dataLabels,
a&&(!1===a.enabled||"symbol"in a)&&(u.graphic=1),k&&!1===k.enabled&&(u.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(u).length&&a.destroyElements(u),!1===C.showInLegend&&a.legendItem&&d.legend.destroyItem(a))},this)}l.initialType=g;d.linkSeries();f(this,"afterUpdate");K(b,!0)&&d.redraw(m?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0},hasOptionChanged:function(a){var b=this.options[a],c=this.chart.options.plotOptions,
d=this.userOptions[a];return d?b!==d:b!==K(c&&c[this.type]&&c[this.type][a],c&&c.series&&c.series[a],b)}});e(h.prototype,{update:function(a,b){var c=this.chart,d=a&&a.events||{};a=E(this.userOptions,a);c.options[this.coll].indexOf&&(c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)]=a);C(c.options[this.coll].events,function(a,b){"undefined"===typeof d[b]&&(d[b]=void 0)});this.destroy(!0);this.init(c,e(a,{events:d}));c.isDirtyBox=!0;K(b,!0)&&c.redraw()},remove:function(a){for(var c=
this.chart,e=this.coll,d=this.series,f=d.length;f--;)d[f]&&d[f].remove(!1);k(c.axes,this);k(c[e],this);b(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];c[e].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();c.isDirtyBox=!0;K(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})});O(q,"Series/AreaSeries.js",[q["Core/Series/Series.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],
q["Mixins/LegendSymbol.js"],q["Core/Utilities.js"]],function(n,h,q,z,y){var F=h.parse,L=y.objectEach,G=y.pick,B=q.Series;n.seriesType("area","line",{threshold:0},{singleStacks:!1,getStackPoints:function(h){var m=[],g=[],r=this.xAxis,n=this.yAxis,q=n.stacking.stacks[this.stackKey],u={},A=this.index,p=n.series,k=p.length,c=G(n.options.reversedStacks,!0)?1:-1,e;h=h||this.points;if(this.options.stacking){for(e=0;e<h.length;e++)h[e].leftNull=h[e].rightNull=void 0,u[h[e].x]=h[e];L(q,function(b,c){null!==
b.total&&g.push(c)});g.sort(function(b,c){return b-c});var f=p.map(function(b){return b.visible});g.forEach(function(b,l){var a=0,h,p;if(u[b]&&!u[b].isNull)m.push(u[b]),[-1,1].forEach(function(a){var m=1===a?"rightNull":"leftNull",r=0,n=q[g[l+a]];if(n)for(e=A;0<=e&&e<k;)h=n.points[e],h||(e===A?u[b][m]=!0:f[e]&&(p=q[b].points[e])&&(r-=p[1]-p[0])),e+=c;u[b][1===a?"rightCliff":"leftCliff"]=r});else{for(e=A;0<=e&&e<k;){if(h=q[b].points[e]){a=h[1];break}e+=c}a=n.translate(a,0,1,0,1);m.push({isNull:!0,
plotX:r.translate(b,0,0,0,1),x:b,plotY:a,yBottom:a})}})}return m},getGraphPath:function(h){var m=B.prototype.getGraphPath,g=this.options,r=g.stacking,n=this.yAxis,q,u=[],A=[],p=this.index,k=n.stacking.stacks[this.stackKey],c=g.threshold,e=Math.round(n.getThreshold(g.threshold));g=G(g.connectNulls,"percent"===r);var f=function(a,b,f){var g=h[a];a=r&&k[g.x].points[p];var m=g[f+"Null"]||0;f=g[f+"Cliff"]||0;g=!0;if(f||m){var x=(m?a[0]:a[1])+f;var q=a[0]+f;g=!!m}else!r&&h[b]&&h[b].isNull&&(x=q=c);"undefined"!==
typeof x&&(A.push({plotX:l,plotY:null===x?e:n.getThreshold(x),isNull:g,isCliff:!0}),u.push({plotX:l,plotY:null===q?e:n.getThreshold(q),doCurve:!1}))};h=h||this.points;r&&(h=this.getStackPoints(h));for(q=0;q<h.length;q++){r||(h[q].leftCliff=h[q].rightCliff=h[q].leftNull=h[q].rightNull=void 0);var b=h[q].isNull;var l=G(h[q].rectPlotX,h[q].plotX);var a=r?h[q].yBottom:e;if(!b||g)g||f(q,q-1,"left"),b&&!r&&g||(A.push(h[q]),u.push({x:q,plotX:l,plotY:a})),g||f(q,q+1,"right")}q=m.call(this,A,!0,!0);u.reversed=
!0;b=m.call(this,u,!0,!0);(a=b[0])&&"M"===a[0]&&(b[0]=["L",a[1],a[2]]);b=q.concat(b);m=m.call(this,A,!1,g);b.xMap=q.xMap;this.areaPath=b;return m},drawGraph:function(){this.areaPath=[];B.prototype.drawGraph.apply(this);var h=this,m=this.areaPath,g=this.options,n=[["area","highcharts-area",this.color,g.fillColor]];this.zones.forEach(function(m,r){n.push(["zone-area-"+r,"highcharts-area highcharts-zone-area-"+r+" "+m.className,m.color||h.color,m.fillColor||g.fillColor])});n.forEach(function(r){var n=
r[0],q=h[n],A=q?"animate":"attr",p={};q?(q.endX=h.preventGraphAnimation?null:m.xMap,q.animate({d:m})):(p.zIndex=0,q=h[n]=h.chart.renderer.path(m).addClass(r[1]).add(h.group),q.isArea=!0);h.chart.styledMode||(p.fill=G(r[3],F(r[2]).setOpacity(G(g.fillOpacity,.75)).get()));q[A](p);q.startX=m.xMap;q.shiftUnit=g.step?2:1})},drawLegendSymbol:z.drawRectangle});""});O(q,"Series/SplineSeries.js",[q["Core/Series/Series.js"],q["Core/Utilities.js"]],function(n,h){var q=h.pick;n.seriesType("spline","line",{},
{getPointSpline:function(h,n,F){var y=n.plotX||0,G=n.plotY||0,B=h[F-1];F=h[F+1];if(B&&!B.isNull&&!1!==B.doCurve&&!n.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!n.isCliff){h=B.plotY||0;var r=F.plotX||0;F=F.plotY||0;var m=0;var g=(1.5*y+(B.plotX||0))/2.5;var D=(1.5*G+h)/2.5;r=(1.5*y+r)/2.5;var H=(1.5*G+F)/2.5;r!==g&&(m=(H-D)*(r-y)/(r-g)+G-H);D+=m;H+=m;D>h&&D>G?(D=Math.max(h,G),H=2*G-D):D<h&&D<G&&(D=Math.min(h,G),H=2*G-D);H>F&&H>G?(H=Math.max(F,G),D=2*G-H):H<F&&H<G&&(H=Math.min(F,G),D=2*G-H);n.rightContX=
r;n.rightContY=H}n=["C",q(B.rightContX,B.plotX,0),q(B.rightContY,B.plotY,0),q(g,y,0),q(D,G,0),y,G];B.rightContX=B.rightContY=void 0;return n}});""});O(q,"Series/AreaSplineSeries.js",[q["Core/Series/Series.js"],q["Mixins/LegendSymbol.js"],q["Core/Options.js"]],function(n,h,q){var z=n.seriesTypes.area.prototype;n.seriesType("areaspline","spline",q.defaultOptions.plotOptions.area,{getStackPoints:z.getStackPoints,getGraphPath:z.getGraphPath,drawGraph:z.drawGraph,drawLegendSymbol:h.drawRectangle});""});
O(q,"Series/ColumnSeries.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Series/Series.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],q["Mixins/LegendSymbol.js"],q["Series/LineSeries.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M){var G=n.animObject,B=q.parse;n=z.noop;var r=M.clamp,m=M.defined,g=M.extend,D=M.isArray,H=M.isNumber,v=M.merge,u=M.pick,A=M.objectEach;"";h=h.seriesType("column","line",{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,
cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){F.prototype.init.apply(this,arguments);var g=this,k=g.chart;k.hasRendered&&k.series.forEach(function(c){c.type===g.type&&(c.isDirty=
!0)})},getColumnMetrics:function(){var g=this,k=g.options,c=g.xAxis,e=g.yAxis,f=c.options.reversedStacks;f=c.reversed&&!f||!c.reversed&&f;var b,l={},a=0;!1===k.grouping?a=1:g.chart.series.forEach(function(c){var f=c.yAxis,k=c.options;if(c.type===g.type&&(c.visible||!g.chart.options.chart.ignoreHiddenSeries)&&e.len===f.len&&e.pos===f.pos){if(k.stacking&&"group"!==k.stacking){b=c.stackKey;"undefined"===typeof l[b]&&(l[b]=a++);var h=l[b]}else!1!==k.grouping&&(h=a++);c.columnIndex=h}});var h=Math.min(Math.abs(c.transA)*
(c.ordinal&&c.ordinal.slope||k.pointRange||c.closestPointRange||c.tickInterval||1),c.len),m=h*k.groupPadding,r=(h-2*m)/(a||1);k=Math.min(k.maxPointWidth||c.len,u(k.pointWidth,r*(1-2*k.pointPadding)));g.columnMetrics={width:k,offset:(r-k)/2+(m+((g.columnIndex||0)+(f?1:0))*r-h/2)*(f?-1:1),paddedWidth:r,columnCount:a};return g.columnMetrics},crispCol:function(g,k,c,e){var f=this.chart,b=this.borderWidth,l=-(b%2?.5:0);b=b%2?.5:1;f.inverted&&f.renderer.isVML&&(b+=1);this.options.crisp&&(c=Math.round(g+
c)+l,g=Math.round(g)+l,c-=g);e=Math.round(k+e)+b;l=.5>=Math.abs(k)&&.5<e;k=Math.round(k)+b;e-=k;l&&e&&(--k,e+=1);return{x:g,y:k,width:c,height:e}},adjustForMissingColumns:function(g,k,c,e){var f=this,b=this.options.stacking;if(!c.isNull&&1<e.columnCount){var l=0,a=0;A(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(e){if("number"===typeof c.x&&(e=e[c.x.toString()])){var k=e.points[f.index],g=e.total;b?(k&&(l=a),e.hasValidPoints&&a++):D(k)&&(l=k[1],a=g||0)}});g=(c.plotX||0)+((a-1)*e.paddedWidth+
k)/2-k-l*e.paddedWidth}return g},translate:function(){var g=this,k=g.chart,c=g.options,e=g.dense=2>g.closestPointRange*g.xAxis.transA;e=g.borderWidth=u(c.borderWidth,e?0:1);var f=g.xAxis,b=g.yAxis,l=c.threshold,a=g.translatedThreshold=b.getThreshold(l),h=u(c.minPointLength,5),n=g.getColumnMetrics(),q=n.width,v=g.barW=Math.max(q,1+2*e),A=g.pointXOffset=n.offset,D=g.dataMin,N=g.dataMax;k.inverted&&(a-=.5);c.pointPadding&&(v=Math.ceil(v));F.prototype.translate.apply(g);g.points.forEach(function(e){var p=
u(e.yBottom,a),d=999+Math.abs(p),t=q,x=e.plotX||0;d=r(e.plotY,-d,b.len+d);var E=x+A,C=v,K=Math.min(d,p),I=Math.max(d,p)-K;if(h&&Math.abs(I)<h){I=h;var y=!b.reversed&&!e.negative||b.reversed&&e.negative;H(l)&&H(N)&&e.y===l&&N<=l&&(b.min||0)<l&&D!==N&&(y=!y);K=Math.abs(K-a)>h?p-h:a-(y?h:0)}m(e.options.pointWidth)&&(t=C=Math.ceil(e.options.pointWidth),E-=Math.round((t-q)/2));c.centerInCategory&&(E=g.adjustForMissingColumns(E,t,e,n));e.barX=E;e.pointWidth=t;e.tooltipPos=k.inverted?[b.len+b.pos-k.plotLeft-
d,f.len+f.pos-k.plotTop-(x||0)-A-C/2,I]:[E+C/2,d+b.pos-k.plotTop,I];e.shapeType=g.pointClass.prototype.shapeType||"rect";e.shapeArgs=g.crispCol.apply(g,e.isNull?[E,a,C,0]:[E,K,C,I])})},getSymbol:n,drawLegendSymbol:y.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(g,k){var c=this.options,e=this.pointAttrToOptions||{};var f=e.stroke||"borderColor";var b=e["stroke-width"]||"borderWidth",l=g&&g.color||this.color,a=g&&g[f]||
c[f]||this.color||l,h=g&&g[b]||c[b]||this[b]||0;e=g&&g.options.dashStyle||c.dashStyle;var p=u(g&&g.opacity,c.opacity,1);if(g&&this.zones.length){var m=g.getZone();l=g.options.color||m&&(m.color||g.nonZonedColor)||this.color;m&&(a=m.borderColor||a,e=m.dashStyle||e,h=m.borderWidth||h)}k&&g&&(g=v(c.states[k],g.options.states&&g.options.states[k]||{}),k=g.brightness,l=g.color||"undefined"!==typeof k&&B(l).brighten(g.brightness).get()||l,a=g[f]||a,h=g[b]||h,e=g.dashStyle||e,p=u(g.opacity,p));f={fill:l,
stroke:a,"stroke-width":h,opacity:p};e&&(f.dashstyle=e);return f},drawPoints:function(){var g=this,k=this.chart,c=g.options,e=k.renderer,f=c.animationLimit||250,b;g.points.forEach(function(l){var a=l.graphic,h=!!a,p=a&&k.pointCount<f?"animate":"attr";if(H(l.plotY)&&null!==l.y){b=l.shapeArgs;a&&l.hasNewShapeType()&&(a=a.destroy());g.enabledDataSorting&&(l.startXPos=g.xAxis.reversed?-(b?b.width:0):g.xAxis.width);a||(l.graphic=a=e[l.shapeType](b).add(l.group||g.group))&&g.enabledDataSorting&&k.hasRendered&&
k.pointCount<f&&(a.attr({x:l.startXPos}),h=!0,p="animate");if(a&&h)a[p](v(b));if(c.borderRadius)a[p]({r:c.borderRadius});k.styledMode||a[p](g.pointAttribs(l,l.selected&&"select")).shadow(!1!==l.allowShadow&&c.shadow,null,c.stacking&&!c.borderRadius);a.addClass(l.getClassName(),!0)}else a&&(l.graphic=a.destroy())})},animate:function(h){var k=this,c=this.yAxis,e=k.options,f=this.chart.inverted,b={},l=f?"translateX":"translateY";if(h)b.scaleY=.001,h=r(c.toPixels(e.threshold),c.pos,c.pos+c.len),f?b.translateX=
h-c.len:b.translateY=h,k.clipBox&&k.setClip(),k.group.attr(b);else{var a=k.group.attr(l);k.group.animate({scaleY:1},g(G(k.options.animation),{step:function(e,f){k.group&&(b[l]=a+f.pos*(c.pos-a),k.group.attr(b))}}))}},remove:function(){var g=this,k=g.chart;k.hasRendered&&k.series.forEach(function(c){c.type===g.type&&(c.isDirty=!0)});F.prototype.remove.apply(g,arguments)}});"";return h});O(q,"Series/BarSeries.js",[q["Core/Series/Series.js"]],function(n){n.seriesType("bar","column",null,{inverted:!0});
""});O(q,"Series/ScatterSeries.js",[q["Core/Series/Series.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q){q=q.addEvent;var z=h.Series;n.seriesType("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group",
"markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){(this.options.lineWidth||0===this.options.lineWidth&&this.graph&&this.graph.strokeWidth())&&z.prototype.drawGraph.call(this)},applyJitter:function(){var h=this,n=this.options.jitter,q=this.points.length;n&&this.points.forEach(function(y,B){["x","y"].forEach(function(r,m){var g="plot"+r.toUpperCase();if(n[r]&&!y.isNull){var D=h[r+"Axis"];var H=n[r]*D.transA;if(D&&!D.isLog){var v=Math.max(0,y[g]-H);D=Math.min(D.len,y[g]+H);
m=1E4*Math.sin(B+m*q);y[g]=v+(D-v)*(m-Math.floor(m));"x"===r&&(y.clientX=y.plotX)}}})})}});q(z,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});O(q,"Mixins/CenteredSeries.js",[q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h){var q=h.isNumber,z=h.pick,y=h.relativeLength,F=n.deg2rad;return n.CenteredSeriesMixin={getCenter:function(){var h=this.options,q=this.chart,B=2*(h.slicedOffset||0),r=q.plotWidth-2*B,m=q.plotHeight-2*B,g=h.center,D=Math.min(r,m),H=h.size,v=h.innerSize||
0;"string"===typeof H&&(H=parseFloat(H));"string"===typeof v&&(v=parseFloat(v));h=[z(g[0],"50%"),z(g[1],"50%"),z(H&&0>H?void 0:h.size,"100%"),z(v&&0>v?void 0:h.innerSize||0,"0%")];!q.angular||this instanceof n.Series||(h[3]=0);for(g=0;4>g;++g)H=h[g],q=2>g||2===g&&/%$/.test(H),h[g]=y(H,[r,m,D,h[2]][g])+(q?B:0);h[3]>h[2]&&(h[3]=h[2]);return h},getStartAndEndRadians:function(h,n){h=q(h)?h:0;n=q(n)&&n>h&&360>n-h?n:h+360;return{start:F*(h+-90),end:F*(n+-90)}}}});O(q,"Series/PieSeries.js",[q["Core/Animation/AnimationUtilities.js"],
q["Core/Series/Series.js"],q["Mixins/CenteredSeries.js"],q["Core/Globals.js"],q["Mixins/LegendSymbol.js"],q["Series/LineSeries.js"],q["Core/Series/Point.js"],q["Core/Renderer/SVG/SVGRenderer.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G,B){var r=n.setAnimation,m=q.getStartAndEndRadians;n=z.noop;var g=B.addEvent,D=B.clamp,H=B.defined,v=B.fireEvent,u=B.isNumber,A=B.merge,p=B.pick,k=B.relativeLength;h.seriesType("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,
connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,
trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:h.seriesTypes.column.prototype.pointAttribs,animate:function(c){var e=this,f=e.points,b=e.startAngleRad;c||f.forEach(function(c){var a=c.graphic,f=c.shapeArgs;a&&f&&(a.attr({r:p(c.startR,e.center&&e.center[3]/2),start:b,end:b}),a.animate({r:f.r,start:f.start,end:f.end},e.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var c,e=0,f=this.points,b=f.length,g=this.options.ignoreHiddenPoint;
for(c=0;c<b;c++){var a=f[c];e+=g&&!a.visible?0:a.isNull?0:a.y}this.total=e;for(c=0;c<b;c++)a=f[c],a.percentage=0<e&&(a.visible||!g)?a.y/e*100:0,a.total=e},generatePoints:function(){F.prototype.generatePoints.call(this);this.updateTotals()},getX:function(c,e,f){var b=this.center,g=this.radii?this.radii[f.index]:b[2]/2;c=Math.asin(D((c-b[1])/(g+f.labelDistance),-1,1));return b[0]+(e?-1:1)*Math.cos(c)*(g+f.labelDistance)+(0<f.labelDistance?(e?-1:1)*this.options.dataLabels.padding:0)},translate:function(c){this.generatePoints();
var e=0,f=this.options,b=f.slicedOffset,g=b+(f.borderWidth||0),a=m(f.startAngle,f.endAngle),h=this.startAngleRad=a.start;a=(this.endAngleRad=a.end)-h;var r=this.points,n=f.dataLabels.distance;f=f.ignoreHiddenPoint;var q,u=r.length;c||(this.center=c=this.getCenter());for(q=0;q<u;q++){var A=r[q];var D=h+e*a;if(!f||A.visible)e+=A.percentage/100;var I=h+e*a;A.shapeType="arc";A.shapeArgs={x:c[0],y:c[1],r:c[2]/2,innerR:c[3]/2,start:Math.round(1E3*D)/1E3,end:Math.round(1E3*I)/1E3};A.labelDistance=p(A.options.dataLabels&&
A.options.dataLabels.distance,n);A.labelDistance=k(A.labelDistance,A.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,A.labelDistance);I=(I+D)/2;I>1.5*Math.PI?I-=2*Math.PI:I<-Math.PI/2&&(I+=2*Math.PI);A.slicedTranslation={translateX:Math.round(Math.cos(I)*b),translateY:Math.round(Math.sin(I)*b)};var w=Math.cos(I)*c[2]/2;var d=Math.sin(I)*c[2]/2;A.tooltipPos=[c[0]+.7*w,c[1]+.7*d];A.half=I<-Math.PI/2||I>Math.PI/2?1:0;A.angle=I;D=Math.min(g,A.labelDistance/5);A.labelPosition={natural:{x:c[0]+
w+Math.cos(I)*A.labelDistance,y:c[1]+d+Math.sin(I)*A.labelDistance},"final":{},alignment:0>A.labelDistance?"center":A.half?"right":"left",connectorPosition:{breakAt:{x:c[0]+w+Math.cos(I)*D,y:c[1]+d+Math.sin(I)*D},touchingSliceAt:{x:c[0]+w,y:c[1]+d}}}}v(this,"afterTranslate")},drawEmpty:function(){var c=this.startAngleRad,e=this.endAngleRad,f=this.options;if(0===this.total&&this.center){var b=this.center[0];var g=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(b,g,this.center[1]/2,0,
c,e).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:G.prototype.symbols.arc(b,g,this.center[2]/2,0,{start:c,end:e,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":f.borderWidth,fill:f.fillColor||"none",stroke:f.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var c=this,e=c.chart,f=e.renderer,b,g,a,k,h=c.options.shadow;this.drawEmpty();!h||c.shadowGroup||e.styledMode||(c.shadowGroup=f.g("shadow").attr({zIndex:-1}).add(c.group));
c.points.forEach(function(l){var p={};g=l.graphic;if(!l.isNull&&g){k=l.shapeArgs;b=l.getTranslate();if(!e.styledMode){var m=l.shadowGroup;h&&!m&&(m=l.shadowGroup=f.g("shadow").add(c.shadowGroup));m&&m.attr(b);a=c.pointAttribs(l,l.selected&&"select")}l.delayedRendering?(g.setRadialReference(c.center).attr(k).attr(b),e.styledMode||g.attr(a).attr({"stroke-linejoin":"round"}).shadow(h,m),l.delayedRendering=!1):(g.setRadialReference(c.center),e.styledMode||A(!0,p,a),A(!0,p,k,b),g.animate(p));g.attr({visibility:l.visible?
"inherit":"hidden"});g.addClass(l.getClassName())}else g&&(l.graphic=g.destroy())})},drawPoints:function(){var c=this.chart.renderer;this.points.forEach(function(e){e.graphic&&e.hasNewShapeType()&&(e.graphic=e.graphic.destroy());e.graphic||(e.graphic=c[e.shapeType](e.shapeArgs).add(e.series.group),e.delayedRendering=!0)})},searchPoint:n,sortByAngle:function(c,e){c.sort(function(c,b){return"undefined"!==typeof c.angle&&(b.angle-c.angle)*e})},drawLegendSymbol:y.drawRectangle,getCenter:q.getCenter,getSymbol:n,
drawGraph:null},{init:function(){M.prototype.init.apply(this,arguments);var c=this;c.name=p(c.name,"Slice");var e=function(e){c.slice("select"===e.type)};g(c,"select",e);g(c,"unselect",e);return c},isValid:function(){return u(this.y)&&0<=this.y},setVisible:function(c,e){var f=this,b=f.series,g=b.chart,a=b.options.ignoreHiddenPoint;e=p(e,a);c!==f.visible&&(f.visible=f.options.visible=c="undefined"===typeof c?!f.visible:c,b.options.data[b.data.indexOf(f)]=f.options,["graphic","dataLabel","connector",
"shadowGroup"].forEach(function(a){if(f[a])f[a][c?"show":"hide"](!0)}),f.legendItem&&g.legend.colorizeItem(f,c),c||"hover"!==f.state||f.setState(""),a&&(b.isDirty=!0),e&&g.redraw())},slice:function(c,e,f){var b=this.series;r(f,b.chart);p(e,!0);this.sliced=this.options.sliced=H(c)?c:!this.sliced;b.options.data[b.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?
this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(c){var e=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,e.r+c,e.r+c,{innerR:e.r-1,start:e.start,end:e.end})},connectorShapes:{fixedOffset:function(c,e,f){var b=e.breakAt;e=e.touchingSliceAt;return[["M",c.x,c.y],f.softConnector?["C",c.x+("left"===c.alignment?-5:5),c.y,2*b.x-e.x,2*b.y-e.y,b.x,b.y]:["L",b.x,b.y],["L",e.x,e.y]]},straight:function(c,e){e=e.touchingSliceAt;return[["M",
c.x,c.y],["L",e.x,e.y]]},crookedLine:function(c,e,f){e=e.touchingSliceAt;var b=this.series,g=b.center[0],a=b.chart.plotWidth,h=b.chart.plotLeft;b=c.alignment;var p=this.shapeArgs.r;f=k(f.crookDistance,1);a="left"===b?g+p+(a+h-g-p)*(1-f):h+(g-p)*f;f=["L",a,c.y];g=!0;if("left"===b?a>c.x||a<e.x:a<c.x||a>e.x)g=!1;c=[["M",c.x,c.y]];g&&c.push(f);c.push(["L",e.x,e.y]);return c}},getConnectorPath:function(){var c=this.labelPosition,e=this.series.options.dataLabels,f=e.connectorShape,b=this.connectorShapes;
b[f]&&(f=b[f]);return f.call(this,{x:c.final.x,y:c.final.y,alignment:c.alignment},c.connectorPosition,e)}});""});O(q,"Core/Series/DataLabels.js",[q["Core/Animation/AnimationUtilities.js"],q["Core/Globals.js"],q["Core/Series/CartesianSeries.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=n.getDeferredAnimation;n=h.noop;var F=h.seriesTypes,L=z.arrayMax,G=z.clamp,B=z.defined,r=z.extend,m=z.fireEvent,g=z.format,D=z.isArray,H=z.merge,v=z.objectEach,u=z.pick,A=z.relativeLength,p=z.splat,k=z.stableSort;
"";h.distribute=function(c,e,f){function b(a,b){return a.target-b.target}var g,a=!0,p=c,m=[];var r=0;var n=p.reducedLen||e;for(g=c.length;g--;)r+=c[g].size;if(r>n){k(c,function(a,b){return(b.rank||0)-(a.rank||0)});for(r=g=0;r<=n;)r+=c[g].size,g++;m=c.splice(g-1,c.length)}k(c,b);for(c=c.map(function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});a;){for(g=c.length;g--;)a=c[g],r=(Math.min.apply(0,a.targets)+Math.max.apply(0,a.targets))/2,a.pos=G(r-a.size*a.align,0,e-a.size);g=c.length;
for(a=!1;g--;)0<g&&c[g-1].pos+c[g-1].size>c[g].pos&&(c[g-1].size+=c[g].size,c[g-1].targets=c[g-1].targets.concat(c[g].targets),c[g-1].align=.5,c[g-1].pos+c[g-1].size>e&&(c[g-1].pos=e-c[g-1].size),c.splice(g,1),a=!0)}p.push.apply(p,m);g=0;c.some(function(a){var b=0;if(a.targets.some(function(){p[g].pos=a.pos+b;if("undefined"!==typeof f&&Math.abs(p[g].pos-p[g].target)>f)return p.slice(0,g+1).forEach(function(a){delete a.pos}),p.reducedLen=(p.reducedLen||e)-.1*e,p.reducedLen>.1*e&&h.distribute(p,e,f),
!0;b+=p[g].size;g++}))return!0});k(p,b)};q.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function e(a,b){var c=[],d;if(D(a)&&!D(b))c=a.map(function(a){return H(a,b)});else if(D(b)&&!D(a))c=b.map(function(b){return H(a,b)});else if(D(a)||D(b))for(d=Math.max(a.length,b.length);d--;)c[d]=H(a[d],b[d]);else c=H(a,b);return c}var f=
this,b=f.chart,k=f.options,a=k.dataLabels,h=f.points,r,n=f.hasRendered||0,q=a.animation;q=a.defer?y(b,q,f):{defer:0,duration:0};var A=b.renderer;a=e(e(b.options.plotOptions&&b.options.plotOptions.series&&b.options.plotOptions.series.dataLabels,b.options.plotOptions&&b.options.plotOptions[f.type]&&b.options.plotOptions[f.type].dataLabels),a);m(this,"drawDataLabels");if(D(a)||a.enabled||f._hasPointLabels){var z=f.plotGroup("dataLabelsGroup","data-labels",n?"inherit":"hidden",a.zIndex||6);z.attr({opacity:+n});
!n&&(n=f.dataLabelsGroup)&&(f.visible&&z.show(!0),n[k.animation?"animate":"attr"]({opacity:1},q));h.forEach(function(l){r=p(e(a,l.dlOptions||l.options&&l.options.dataLabels));r.forEach(function(a,e){var d=a.enabled&&(!l.isNull||l.dataLabelOnNull)&&c(l,a),h=l.dataLabels?l.dataLabels[e]:l.dataLabel,p=l.connectors?l.connectors[e]:l.connector,m=u(a.distance,l.labelDistance),r=!h;if(d){var n=l.getLabelConfig();var q=u(a[l.formatPrefix+"Format"],a.format);n=B(q)?g(q,n,b):(a[l.formatPrefix+"Formatter"]||
a.formatter).call(n,a);q=a.style;var x=a.rotation;b.styledMode||(q.color=u(a.color,q.color,f.color,"#000000"),"contrast"===q.color?(l.contrastColor=A.getContrast(l.color||f.color),q.color=!B(m)&&a.inside||0>m||k.stacking?l.contrastColor:"#000000"):delete l.contrastColor,k.cursor&&(q.cursor=k.cursor));var w={r:a.borderRadius||0,rotation:x,padding:a.padding,zIndex:1};b.styledMode||(w.fill=a.backgroundColor,w.stroke=a.borderColor,w["stroke-width"]=a.borderWidth);v(w,function(a,b){"undefined"===typeof a&&
delete w[b]})}!h||d&&B(n)?d&&B(n)&&(h?w.text=n:(l.dataLabels=l.dataLabels||[],h=l.dataLabels[e]=x?A.text(n,0,-9999,a.useHTML).addClass("highcharts-data-label"):A.label(n,0,-9999,a.shape,null,null,a.useHTML,null,"data-label"),e||(l.dataLabel=h),h.addClass(" highcharts-data-label-color-"+l.colorIndex+" "+(a.className||"")+(a.useHTML?" highcharts-tracker":""))),h.options=a,h.attr(w),b.styledMode||h.css(q).shadow(a.shadow),h.added||h.add(z),a.textPath&&!a.useHTML&&(h.setTextPath(l.getDataLabelPath&&l.getDataLabelPath(h)||
l.graphic,a.textPath),l.dataLabelPath&&!a.textPath.enabled&&(l.dataLabelPath=l.dataLabelPath.destroy())),f.alignDataLabel(l,h,a,null,r)):(l.dataLabel=l.dataLabel&&l.dataLabel.destroy(),l.dataLabels&&(1===l.dataLabels.length?delete l.dataLabels:delete l.dataLabels[e]),e||delete l.dataLabel,p&&(l.connector=l.connector.destroy(),l.connectors&&(1===l.connectors.length?delete l.connectors:delete l.connectors[e])))})})}m(this,"afterDrawDataLabels")};q.prototype.alignDataLabel=function(c,e,f,b,g){var a=
this,l=this.chart,k=this.isCartesian&&l.inverted,h=this.enabledDataSorting,p=u(c.dlBox&&c.dlBox.centerX,c.plotX,-9999),m=u(c.plotY,-9999),n=e.getBBox(),q=f.rotation,v=f.align,w=l.isInsidePlot(p,Math.round(m),k),d="justify"===u(f.overflow,h?"none":"justify"),t=this.visible&&!1!==c.visible&&(c.series.forceDL||h&&!d||w||f.inside&&b&&l.isInsidePlot(p,k?b.x+1:b.y+b.height-1,k));var A=function(b){h&&a.xAxis&&!d&&a.setDataLabelStartPos(c,e,g,w,b)};if(t){var D=l.renderer.fontMetrics(l.styledMode?void 0:f.style.fontSize,
e).b;b=r({x:k?this.yAxis.len-m:p,y:Math.round(k?this.xAxis.len-p:m),width:0,height:0},b);r(f,{width:n.width,height:n.height});q?(d=!1,p=l.renderer.rotCorr(D,q),p={x:b.x+(f.x||0)+b.width/2+p.x,y:b.y+(f.y||0)+{top:0,middle:.5,bottom:1}[f.verticalAlign]*b.height},A(p),e[g?"attr":"animate"](p).attr({align:v}),A=(q+720)%360,A=180<A&&360>A,"left"===v?p.y-=A?n.height:0:"center"===v?(p.x-=n.width/2,p.y-=n.height/2):"right"===v&&(p.x-=n.width,p.y-=A?0:n.height),e.placed=!0,e.alignAttr=p):(A(b),e.align(f,null,
b),p=e.alignAttr);d&&0<=b.height?this.justifyDataLabel(e,f,p,n,b,g):u(f.crop,!0)&&(t=l.isInsidePlot(p.x,p.y)&&l.isInsidePlot(p.x+n.width,p.y+n.height));if(f.shape&&!q)e[g?"attr":"animate"]({anchorX:k?l.plotWidth-c.plotY:c.plotX,anchorY:k?l.plotHeight-c.plotX:c.plotY})}g&&h&&(e.placed=!1);t||h&&!d||(e.hide(!0),e.placed=!1)};q.prototype.setDataLabelStartPos=function(c,e,f,b,g){var a=this.chart,l=a.inverted,k=this.xAxis,h=k.reversed,p=l?e.height/2:e.width/2;c=(c=c.pointWidth)?c/2:0;k=l?g.x:h?-p-c:k.width-
p+c;g=l?h?this.yAxis.height-p+c:-p-c:g.y;e.startXPos=k;e.startYPos=g;b?"hidden"===e.visibility&&(e.show(),e.attr({opacity:0}).animate({opacity:1})):e.attr({opacity:1}).animate({opacity:0},void 0,e.hide);a.hasRendered&&(f&&e.attr({x:e.startXPos,y:e.startYPos}),e.placed=!0)};q.prototype.justifyDataLabel=function(c,e,f,b,g,a){var k=this.chart,l=e.align,h=e.verticalAlign,p=c.box?0:c.padding||0,m=e.x;m=void 0===m?0:m;var r=e.y;var n=void 0===r?0:r;r=f.x+p;if(0>r){"right"===l&&0<=m?(e.align="left",e.inside=
!0):m-=r;var q=!0}r=f.x+b.width-p;r>k.plotWidth&&("left"===l&&0>=m?(e.align="right",e.inside=!0):m+=k.plotWidth-r,q=!0);r=f.y+p;0>r&&("bottom"===h&&0<=n?(e.verticalAlign="top",e.inside=!0):n-=r,q=!0);r=f.y+b.height-p;r>k.plotHeight&&("top"===h&&0>=n?(e.verticalAlign="bottom",e.inside=!0):n+=k.plotHeight-r,q=!0);q&&(e.x=m,e.y=n,c.placed=!a,c.align(e,void 0,g));return q};F.pie&&(F.pie.prototype.dataLabelPositioners={radialDistributionY:function(c){return c.top+c.distributeBox.pos},radialDistributionX:function(c,
e,f,b){return c.getX(f<e.top+2||f>e.bottom-2?b:f,e.half,e)},justify:function(c,e,f){return f[0]+(c.half?-1:1)*(e+c.labelDistance)},alignToPlotEdges:function(c,e,f,b){c=c.getBBox().width;return e?c+b:f-c-b},alignToConnectors:function(c,e,f,b){var g=0,a;c.forEach(function(b){a=b.dataLabel.getBBox().width;a>g&&(g=a)});return e?g+b:f-g-b}},F.pie.prototype.drawDataLabels=function(){var c=this,e=c.data,f,b=c.chart,g=c.options.dataLabels||{},a=g.connectorPadding,k,p=b.plotWidth,m=b.plotHeight,r=b.plotLeft,
n=Math.round(b.chartWidth/3),v,A=c.center,D=A[2]/2,w=A[1],d,t,y,z,G=[[],[]],F,M,O,X,S=[0,0,0,0],W=c.dataLabelPositioners,U;c.visible&&(g.enabled||c._hasPointLabels)&&(e.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),q.prototype.drawDataLabels.apply(c),e.forEach(function(a){a.dataLabel&&(a.visible?(G[a.half].push(a),a.dataLabel._pos=null,!B(g.style.width)&&!B(a.options.dataLabels&&
a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>n&&(a.dataLabel.css({width:Math.round(.7*n)+"px"}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),G.forEach(function(e,k){var l=e.length,n=[],q;if(l){c.sortByAngle(e,k-.5);if(0<c.maxLabelDistance){var x=Math.max(0,w-D-c.maxLabelDistance);var v=Math.min(w+D+c.maxLabelDistance,b.plotHeight);e.forEach(function(a){0<a.labelDistance&&a.dataLabel&&
(a.top=Math.max(0,w-D-a.labelDistance),a.bottom=Math.min(w+D+a.labelDistance,b.plotHeight),q=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+q/2,size:q,rank:a.y},n.push(a.distributeBox))});x=v+q-x;h.distribute(n,x,x/5)}for(X=0;X<l;X++){f=e[X];y=f.labelPosition;d=f.dataLabel;O=!1===f.visible?"hidden":"inherit";M=x=y.natural.y;n&&B(f.distributeBox)&&("undefined"===typeof f.distributeBox.pos?O="hidden":(z=f.distributeBox.size,M=W.radialDistributionY(f)));delete f.positionIndex;
if(g.justify)F=W.justify(f,D,A);else switch(g.alignTo){case "connectors":F=W.alignToConnectors(e,k,p,r);break;case "plotEdges":F=W.alignToPlotEdges(d,k,p,r);break;default:F=W.radialDistributionX(c,f,M,x)}d._attr={visibility:O,align:y.alignment};U=f.options.dataLabels||{};d._pos={x:F+u(U.x,g.x)+({left:a,right:-a}[y.alignment]||0),y:M+u(U.y,g.y)-10};y.final.x=F;y.final.y=M;u(g.crop,!0)&&(t=d.getBBox().width,x=null,F-t<a&&1===k?(x=Math.round(t-F+a),S[3]=Math.max(x,S[3])):F+t>p-a&&0===k&&(x=Math.round(F+
t-p+a),S[1]=Math.max(x,S[1])),0>M-z/2?S[0]=Math.max(Math.round(-M+z/2),S[0]):M+z/2>m&&(S[2]=Math.max(Math.round(M+z/2-m),S[2])),d.sideOverflow=x)}}}),0===L(S)||this.verifyDataLabelOverflow(S))&&(this.placeDataLabels(),this.points.forEach(function(a){U=H(g,a.options.dataLabels);if(k=u(U.connectorWidth,1)){var e;v=a.connector;if((d=a.dataLabel)&&d._pos&&a.visible&&0<a.labelDistance){O=d._attr.visibility;if(e=!v)a.connector=v=b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+
a.colorIndex+(a.className?" "+a.className:"")).add(c.dataLabelsGroup),b.styledMode||v.attr({"stroke-width":k,stroke:U.connectorColor||a.color||"#666666"});v[e?"attr":"animate"]({d:a.getConnectorPath()});v.attr("visibility",O)}else v&&(a.connector=v.destroy())}}))},F.pie.prototype.placeDataLabels=function(){this.points.forEach(function(c){var e=c.dataLabel,f;e&&c.visible&&((f=e._pos)?(e.sideOverflow&&(e._attr.width=Math.max(e.getBBox().width-e.sideOverflow,0),e.css({width:e._attr.width+"px",textOverflow:(this.options.dataLabels.style||
{}).textOverflow||"ellipsis"}),e.shortened=!0),e.attr(e._attr),e[e.moved?"animate":"attr"](f),e.moved=!0):e&&e.attr({y:-9999}));delete c.distributeBox},this)},F.pie.prototype.alignDataLabel=n,F.pie.prototype.verifyDataLabelOverflow=function(c){var e=this.center,f=this.options,b=f.center,g=f.minSize||80,a=null!==f.size;if(!a){if(null!==b[0])var k=Math.max(e[2]-Math.max(c[1],c[3]),g);else k=Math.max(e[2]-c[1]-c[3],g),e[0]+=(c[3]-c[1])/2;null!==b[1]?k=G(k,g,e[2]-Math.max(c[0],c[2])):(k=G(k,g,e[2]-c[0]-
c[2]),e[1]+=(c[0]-c[2])/2);k<e[2]?(e[2]=k,e[3]=Math.min(A(f.innerSize||0,k),k),this.translate(e),this.drawDataLabels&&this.drawDataLabels()):a=!0}return a});F.column&&(F.column.prototype.alignDataLabel=function(c,e,f,b,g){var a=this.chart.inverted,k=c.series,l=c.dlBox||c.shapeArgs,h=u(c.below,c.plotY>u(this.translatedThreshold,k.yAxis.len)),p=u(f.inside,!!this.options.stacking);l&&(b=H(l),0>b.y&&(b.height+=b.y,b.y=0),l=b.y+b.height-k.yAxis.len,0<l&&l<b.height&&(b.height-=l),a&&(b={x:k.yAxis.len-b.y-
b.height,y:k.xAxis.len-b.x-b.width,width:b.height,height:b.width}),p||(a?(b.x+=h?0:b.width,b.width=0):(b.y+=h?b.height:0,b.height=0)));f.align=u(f.align,!a||p?"center":h?"right":"left");f.verticalAlign=u(f.verticalAlign,a||p?"middle":h?"top":"bottom");q.prototype.alignDataLabel.call(this,c,e,f,b,g);f.inside&&c.contrastColor&&e.css({color:c.contrastColor})})});O(q,"Extensions/OverlappingDataLabels.js",[q["Core/Chart/Chart.js"],q["Core/Utilities.js"]],function(n,h){var q=h.addEvent,z=h.fireEvent,y=
h.isArray,F=h.isNumber,M=h.objectEach,G=h.pick;q(n,"render",function(){var h=[];(this.labelCollectors||[]).forEach(function(r){h=h.concat(r())});(this.yAxis||[]).forEach(function(r){r.stacking&&r.options.stackLabels&&!r.options.stackLabels.allowOverlap&&M(r.stacking.stacks,function(m){M(m,function(g){h.push(g.label)})})});(this.series||[]).forEach(function(r){var m=r.options.dataLabels;r.visible&&(!1!==m.enabled||r._hasPointLabels)&&(r.nodes||r.points).forEach(function(g){g.visible&&(y(g.dataLabels)?
g.dataLabels:g.dataLabel?[g.dataLabel]:[]).forEach(function(m){var r=m.options;m.labelrank=G(r.labelrank,g.labelrank,g.shapeArgs&&g.shapeArgs.height);r.allowOverlap||h.push(m)})})});this.hideOverlappingLabels(h)});n.prototype.hideOverlappingLabels=function(h){var r=this,m=h.length,g=r.renderer,n,q,v,u=!1;var A=function(c){var e,f=c.box?0:c.padding||0,b=e=0,k;if(c&&(!c.alignAttr||c.placed)){var a=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var h=c.parentGroup;c.width||(e=c.getBBox(),c.width=e.width,
c.height=e.height,e=g.fontMetrics(null,c.element).h);var p=c.width-2*f;(k={left:"0",center:"0.5",right:"1"}[c.alignValue])?b=+k*p:F(c.x)&&Math.round(c.x)!==c.translateX&&(b=c.x-c.translateX);return{x:a.x+(h.translateX||0)+f-(b||0),y:a.y+(h.translateY||0)+f-e,width:c.width-2*f,height:c.height-2*f}}};for(q=0;q<m;q++)if(n=h[q])n.oldOpacity=n.opacity,n.newOpacity=1,n.absoluteBox=A(n);h.sort(function(c,e){return(e.labelrank||0)-(c.labelrank||0)});for(q=0;q<m;q++){var p=(A=h[q])&&A.absoluteBox;for(n=q+
1;n<m;++n){var k=(v=h[n])&&v.absoluteBox;!p||!k||A===v||0===A.newOpacity||0===v.newOpacity||k.x>=p.x+p.width||k.x+k.width<=p.x||k.y>=p.y+p.height||k.y+k.height<=p.y||((A.labelrank<v.labelrank?A:v).newOpacity=0)}}h.forEach(function(c){if(c){var e=c.newOpacity;c.oldOpacity!==e&&(c.alignAttr&&c.placed?(c[e?"removeClass":"addClass"]("highcharts-data-label-hidden"),u=!0,c.alignAttr.opacity=e,c[c.isOld?"animate":"attr"](c.alignAttr,null,function(){r.styledMode||c.css({pointerEvents:e?"auto":"none"});c.visibility=
e?"inherit":"hidden"}),z(r,"afterHideOverlappingLabel")):c.attr({opacity:e}));c.isOld=!0}});u&&z(r,"afterHideAllOverlappingLabels")}});O(q,"Core/Interaction.js",[q["Core/Series/Series.js"],q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Legend.js"],q["Series/LineSeries.js"],q["Core/Options.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G){n=n.seriesTypes;var B=q.hasTouch,r=q.svg,m=F.defaultOptions,g=G.addEvent,D=G.createElement,H=G.css,v=G.defined,u=G.extend,A=
G.fireEvent,p=G.isArray,k=G.isFunction,c=G.isNumber,e=G.isObject,f=G.merge,b=G.objectEach,l=G.pick;"";q=q.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,e=function(a){var b=c.getPointFromEvent(a);"undefined"!==typeof b&&(c.isDirectTouch=!0,b.onMouseOver(a))},f;a.points.forEach(function(a){f=p(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);f.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(f){if(a[f]){a[f].addClass("highcharts-tracker").on("mouseover",
e).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(B)a[f].on("touchstart",e);!b.styledMode&&a.options.cursor&&a[f].css(H).css({cursor:a.options.cursor})}}),a._hasTracking=!0);A(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,e=[].concat(c?a.areaPath:a.graphPath),f=a.chart,g=f.pointer,k=f.renderer,l=f.options.tooltip.snap,h=a.tracker,p=function(b){if(f.hoverSeries!==a)a.onMouseOver()},d="rgba(192,192,192,"+(r?.0001:.002)+")";h?h.attr({d:e}):a.graph&&
(a.tracker=k.path(e).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),f.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:d,fill:c?d:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",p).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&!f.styledMode&&a.css({cursor:b.cursor});
if(B)a.on("touchstart",p)}));A(this,"afterDrawTracker")}};n.column&&(n.column.prototype.drawTracker=q.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=q.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=q.drawTrackerPoint);u(z.prototype,{setItemEvents:function(a,b,c){var e=this,g=e.chart.renderer.boxWrapper,k=a instanceof M,l="highcharts-legend-"+(k?"point":"series")+"-active",h=e.chart.styledMode;(c?[b,a.legendSymbol]:[a.legendGroup]).forEach(function(c){if(c)c.on("mouseover",function(){a.visible&&
e.allItems.forEach(function(b){a!==b&&b.setState("inactive",!k)});a.setState("hover");a.visible&&g.addClass(l);h||b.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||b.css(f(a.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(b){a!==b&&b.setState("",!k)});g.removeClass(l);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible();e.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!k)})};g.removeClass(l);b=
{browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):A(a,"legendItemClick",b,c)})})},createCheckboxForItem:function(a){a.checkbox=D("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);g(a.checkbox,"click",function(b){A(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});u(h.prototype,{showResetZoom:function(){function a(){b.zoomOut()}
var b=this,c=m.lang,e=b.options.chart.resetZoomButton,f=e.theme,g=f.states,k="chart"===e.relativeTo||"spaceBox"===e.relativeTo?null:"plotBox";A(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,f,g&&g.hover).attr({align:e.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,k)});A(this,"afterShowResetZoom")},zoomOut:function(){A(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b=
this,c,f=b.pointer,g=!1,k=b.inverted?f.mouseDownX:f.mouseDownY;!a||a.resetSelection?(b.axes.forEach(function(a){c=a.zoom()}),f.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var e=a.axis,l=b.inverted?e.left:e.top,d=b.inverted?l+e.width:l+e.height,h=e.isXAxis,p=!1;if(!h&&k>=l&&k<=d||h||!v(k))p=!0;f[h?"zoomX":"zoomY"]&&p&&(c=e.zoom(a.min,a.max),e.displayBtn&&(g=!0))});var h=b.resetZoomButton;g&&!h?b.showResetZoom():!g&&e(h)&&(b.resetZoomButton=h.destroy());c&&b.redraw(l(b.options.chart.animation,
a&&a.animation,100>b.pointCount))},pan:function(a,b){var e=this,f=e.hoverPoints,g=e.options.chart,k=e.options.mapNavigation&&e.options.mapNavigation.enabled,h;b="object"===typeof b?b:{enabled:b,type:"x"};g&&g.panning&&(g.panning=b);var p=b.type;A(this,"pan",{originalEvent:a},function(){f&&f.forEach(function(a){a.setState()});var b=[1];"xy"===p?b=[1,0]:"y"===p&&(b=[0]);b.forEach(function(b){var d=e[b?"xAxis":"yAxis"][0],f=d.horiz,g=a[f?"chartX":"chartY"];f=f?"mouseDownX":"mouseDownY";var m=e[f],r=
(d.pointRange||0)/2,n=d.reversed&&!e.inverted||!d.reversed&&e.inverted?-1:1,q=d.getExtremes(),u=d.toValue(m-g,!0)+r*n;n=d.toValue(m+d.len-g,!0)-r*n;var x=n<u;m=x?n:u;u=x?u:n;var w=d.hasVerticalPanning(),v=d.panningState;d.series.forEach(function(a){if(w&&!b&&(!v||v.isDirty)){var d=a.getProcessedData(!0);a=a.getExtremes(d.yData,!0);v||(v={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});c(a.dataMin)&&c(a.dataMax)&&(v.startMin=Math.min(a.dataMin,v.startMin),v.startMax=Math.max(a.dataMax,v.startMax))}});
n=Math.min(l(null===v||void 0===v?void 0:v.startMin,q.dataMin),r?q.min:d.toValue(d.toPixels(q.min)-d.minPixelPadding));r=Math.max(l(null===v||void 0===v?void 0:v.startMax,q.dataMax),r?q.max:d.toValue(d.toPixels(q.max)+d.minPixelPadding));d.panningState=v;d.isOrdinal||(x=n-m,0<x&&(u+=x,m=n),x=u-r,0<x&&(u=r,m-=x),d.series.length&&m!==q.min&&u!==q.max&&m>=n&&u<=r&&(d.setExtremes(m,u,!1,!1,{trigger:"pan"}),e.resetZoomButton||k||m===n||u===r||!p.match("y")||(e.showResetZoom(),d.displayBtn=!1),h=!0),e[f]=
g)});h&&e.redraw(!1);H(e.container,{cursor:"move"})})}});u(M.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;this.selectedStaging=a=l(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[e.data.indexOf(c)]=c.options;c.setState(a&&"select");b||f.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==c&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&
b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=
this,c=f(a.series.options.point,a.options).events;a.events=c;b(c,function(b,c){k(b)&&g(a,c,b)});this.hasImportedEvents=!0}},setState:function(a,b){var c=this.series,e=this.state,f=c.options.states[a||"normal"]||{},g=m.plotOptions[c.type].marker&&c.options.marker,k=g&&!1===g.enabled,h=g&&g.states&&g.states[a||"normal"]||{},p=!1===h.enabled,r=c.stateMarkerGraphic,d=this.marker||{},t=c.chart,n=c.halo,q,x=g&&c.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===f.enabled||
a&&(p||k&&!1===h.enabled)||a&&d.states&&d.states[a]&&!1===d.states[a].enabled)){this.state=a;x&&(q=c.markerAttribs(this,a));if(this.graphic){e&&this.graphic.removeClass("highcharts-point-"+e);a&&this.graphic.addClass("highcharts-point-"+a);if(!t.styledMode){var v=c.pointAttribs(this,a);var y=l(t.options.chart.animation,f.animation);c.options.inactiveOtherPoints&&v.opacity&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:v.opacity},y)}),this.connector&&this.connector.animate({opacity:v.opacity},
y));this.graphic.animate(v,y)}q&&this.graphic.animate(q,l(t.options.chart.animation,h.animation,g.animation));r&&r.hide()}else{if(a&&h){e=d.symbol||c.symbol;r&&r.currentSymbol!==e&&(r=r.destroy());if(q)if(r)r[b?"animate":"attr"]({x:q.x,y:q.y});else e&&(c.stateMarkerGraphic=r=t.renderer.symbol(e,q.x,q.y,q.width,q.height).add(c.markerGroup),r.currentSymbol=e);!t.styledMode&&r&&r.attr(c.pointAttribs(this,a))}r&&(r[a&&this.isInside?"show":"hide"](),r.element.point=this)}a=f.halo;f=(r=this.graphic||r)&&
r.visibility||"inherit";a&&a.size&&r&&"hidden"!==f&&!this.isCluster?(n||(c.halo=n=t.renderer.path().add(r.parentGroup)),n.show()[b?"animate":"attr"]({d:this.haloPath(a.size)}),n.attr({"class":"highcharts-halo highcharts-color-"+l(this.colorIndex,c.colorIndex)+(this.className?" "+this.className:""),visibility:f,zIndex:-1}),n.point=this,t.styledMode||n.attr(u({fill:this.color||c.color,"fill-opacity":a.opacity},a.attributes))):n&&n.point&&n.point.haloPath&&n.animate({d:n.point.haloPath(0)},null,n.hide);
A(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});u(y.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;a.pointer.setHoverChartIndex();if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&A(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&
A(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,b){var c=this,e=c.options,f=c.graph,g=e.inactiveOtherPoints,k=e.states,h=e.lineWidth,p=e.opacity,m=l(k[a||"normal"]&&k[a||"normal"].animation,c.chart.options.chart.animation);e=0;a=a||"";if(c.state!==a&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+
a))}),c.state=a,!c.chart.styledMode)){if(k[a]&&!1===k[a].enabled)return;a&&(h=k[a].lineWidth||h+(k[a].lineWidthPlus||0),p=l(k[a].opacity,p));if(f&&!f.dashstyle)for(k={"stroke-width":h},f.animate(k,m);c["zone-graph-"+e];)c["zone-graph-"+e].attr(k),e+=1;g||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(a){a&&a.animate({opacity:p},m)})}b&&g&&c.points&&c.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})},setVisible:function(a,
b){var c=this,e=c.chart,f=c.legendItem,g=e.options.chart.ignoreHiddenSeries,k=c.visible;var h=(c.visible=a=c.options.visible=c.userOptions.visible="undefined"===typeof a?!k:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][h]()});if(e.hoverSeries===c||(e.hoverPoint&&e.hoverPoint.series)===c)c.onMouseOut();f&&e.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&e.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});
c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});g&&(e.isDirtyBox=!0);A(c,h);!1!==b&&e.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);A(this,a?"select":"unselect")},drawTracker:q.drawTrackerGraph})});O(q,"Core/Responsive.js",[q["Core/Chart/Chart.js"],q["Core/Utilities.js"]],function(n,h){var q=h.find,z=h.isArray,y=h.isObject,
F=h.merge,M=h.objectEach,G=h.pick,B=h.splat,r=h.uniqueKey;n.prototype.setResponsive=function(h,g){var m=this.options.responsive,n=[],v=this.currentResponsive;!g&&m&&m.rules&&m.rules.forEach(function(g){"undefined"===typeof g._id&&(g._id=r());this.matchResponsiveRule(g,n)},this);g=F.apply(0,n.map(function(g){return q(m.rules,function(h){return h._id===g}).chartOptions}));g.isResponsiveOptions=!0;n=n.toString()||void 0;n!==(v&&v.ruleIds)&&(v&&this.update(v.undoOptions,h,!0),n?(v=this.currentOptions(g),
v.isResponsiveOptions=!0,this.currentResponsive={ruleIds:n,mergedOptions:g,undoOptions:v},this.update(g,h,!0)):this.currentResponsive=void 0)};n.prototype.matchResponsiveRule=function(h,g){var m=h.condition;(m.callback||function(){return this.chartWidth<=G(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=G(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=G(m.minWidth,0)&&this.chartHeight>=G(m.minHeight,0)}).call(this)&&g.push(h._id)};n.prototype.currentOptions=function(h){function g(h,r,n,p){var k;
M(h,function(c,e){if(!p&&-1<m.collectionsWithUpdate.indexOf(e))for(c=B(c),n[e]=[],k=0;k<Math.max(c.length,r[e].length);k++)r[e][k]&&(void 0===c[k]?n[e][k]=r[e][k]:(n[e][k]={},g(c[k],r[e][k],n[e][k],p+1)));else y(c)?(n[e]=z(c)?[]:{},g(c,r[e]||{},n[e],p+1)):n[e]="undefined"===typeof r[e]?null:r[e]})}var m=this,r={};g(h,this.options,r,0);return r}});O(q,"masters/highcharts.src.js",[q["Core/Globals.js"]],function(n){return n});O(q,"Core/Axis/MapAxis.js",[q["Core/Axis/Axis.js"],q["Core/Utilities.js"]],
function(n,h){var q=h.addEvent,z=h.pick,y=function(){return function(h){this.axis=h}}();h=function(){function h(){}h.compose=function(h){h.keepProps.push("mapAxis");q(h,"init",function(){this.mapAxis||(this.mapAxis=new y(this))});q(h,"getSeriesExtremes",function(){if(this.mapAxis){var h=[];this.isXAxis&&(this.series.forEach(function(n,r){n.useMapGeometry&&(h[r]=n.xData,n.xData=[])}),this.mapAxis.seriesXData=h)}});q(h,"afterGetSeriesExtremes",function(){if(this.mapAxis){var h=this.mapAxis.seriesXData||
[],n;if(this.isXAxis){var r=z(this.dataMin,Number.MAX_VALUE);var m=z(this.dataMax,-Number.MAX_VALUE);this.series.forEach(function(g,q){g.useMapGeometry&&(r=Math.min(r,z(g.minX,r)),m=Math.max(m,z(g.maxX,m)),g.xData=h[q],n=!0)});n&&(this.dataMin=r,this.dataMax=m);this.mapAxis.seriesXData=void 0}}});q(h,"afterSetAxisTranslation",function(){if(this.mapAxis){var h=this.chart,n=h.plotWidth/h.plotHeight;h=h.xAxis[0];var r;"yAxis"===this.coll&&"undefined"!==typeof h.transA&&this.series.forEach(function(h){h.preserveAspectRatio&&
(r=!0)});if(r&&(this.transA=h.transA=Math.min(this.transA,h.transA),n/=(h.max-h.min)/(this.max-this.min),n=1>n?this:h,h=(n.max-n.min)*n.transA,n.mapAxis.pixelPadding=n.len-h,n.minPixelPadding=n.mapAxis.pixelPadding/2,h=n.mapAxis.fixTo)){h=h[1]-n.toValue(h[0],!0);h*=n.transA;if(Math.abs(h)>n.minPixelPadding||n.min===n.dataMin&&n.max===n.dataMax)h=0;n.minPixelPadding-=h}}});q(h,"render",function(){this.mapAxis&&(this.mapAxis.fixTo=void 0)})};return h}();h.compose(n);return h});O(q,"Mixins/ColorSeries.js",
[],function(){return{colorPointMixin:{setVisible:function(n){var h=this,q=n?"show":"hide";h.visible=h.options.visible=!!n;["graphic","dataLabel"].forEach(function(n){if(h[n])h[n][q]()});this.series.buildKDTree()}},colorSeriesMixin:{optionalAxis:"colorAxis",colorAxis:0,translateColors:function(){var n=this,h=this.options.nullColor,q=this.colorAxis,z=this.colorKey;(this.data.length?this.data:this.points).forEach(function(y){var F=y.getNestedProperty(z);(F=y.options.color||(y.isNull||null===y.value?
h:q&&"undefined"!==typeof F?q.toColor(F,y):y.color||n.color))&&y.color!==F&&(y.color=F,"point"===n.options.legendType&&y.legendItem&&n.chart.legend.colorizeItem(y,y.visible))})}}}});O(q,"Core/Axis/ColorAxis.js",[q["Core/Axis/Axis.js"],q["Core/Chart/Chart.js"],q["Core/Color/Color.js"],q["Mixins/ColorSeries.js"],q["Core/Animation/Fx.js"],q["Core/Globals.js"],q["Core/Legend.js"],q["Mixins/LegendSymbol.js"],q["Series/LineSeries.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,
F,M,G,B,r,m){var g=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return b(c,a)};return function(c,a){function e(){this.constructor=c}b(c,a);c.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}}(),D=q.parse;q=z.colorPointMixin;z=z.colorSeriesMixin;var H=F.noop,v=m.addEvent,u=m.erase,A=m.extend,p=m.isNumber,k=m.merge,c=m.pick,
e=m.splat;"";A(B.prototype,z);A(r.prototype,q);h.prototype.collectionsWithUpdate.push("colorAxis");h.prototype.collectionsWithInit.colorAxis=[h.prototype.addColorAxis];var f=function(b){function e(a,c){var e=b.call(this,a,c)||this;e.beforePadding=!1;e.chart=void 0;e.coll="colorAxis";e.dataClasses=void 0;e.legendItem=void 0;e.legendItems=void 0;e.name="";e.options=void 0;e.stops=void 0;e.visible=!0;e.init(a,c);return e}g(e,b);e.buildOptions=function(a,b,c){a=a.options.legend||{};var e=c.layout?"vertical"!==
c.layout:"vertical"!==a.layout;return k(b,{side:e?2:1,reversed:!e},c,{opposite:!e,showEmpty:!1,title:null,visible:a.enabled&&(c?!1!==c.visible:!0)})};e.prototype.init=function(a,c){var f=e.buildOptions(a,e.defaultOptions,c);this.coll="colorAxis";b.prototype.init.call(this,a,f);c.dataClasses&&this.initDataClasses(c);this.initStops();this.horiz=!f.opposite;this.zoomEnabled=!1};e.prototype.initDataClasses=function(a){var b=this.chart,c,e=0,f=b.options.chart.colorCount,g=this.options,h=a.dataClasses.length;
this.dataClasses=c=[];this.legendItems=[];a.dataClasses.forEach(function(a,l){a=k(a);c.push(a);if(b.styledMode||!a.color)"category"===g.dataClassColor?(b.styledMode||(l=b.options.colors,f=l.length,a.color=l[e]),a.colorIndex=e,e++,e===f&&(e=0)):a.color=D(g.minColor).tweenTo(D(g.maxColor),2>h?.5:l/(h-1))})};e.prototype.hasData=function(){return!!(this.tickPositions||[]).length};e.prototype.setTickPositions=function(){if(!this.dataClasses)return b.prototype.setTickPositions.call(this)};e.prototype.initStops=
function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=D(a[1])})};e.prototype.setOptions=function(a){b.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker};e.prototype.setAxisSize=function(){var a=this.legendSymbol,b=this.chart,c=b.options.legend||{},f,g;a?(this.left=c=a.attr("x"),this.top=f=a.attr("y"),this.width=g=a.attr("width"),this.height=a=a.attr("height"),this.right=b.chartWidth-c-g,this.bottom=
b.chartHeight-f-a,this.len=this.horiz?g:a,this.pos=this.horiz?c:f):this.len=(this.horiz?c.symbolWidth:c.symbolHeight)||e.defaultLegendLength};e.prototype.normalizedValue=function(a){this.logarithmic&&(a=this.logarithmic.log2lin(a));return 1-(this.max-a)/(this.max-this.min||1)};e.prototype.toColor=function(a,b){var c=this.dataClasses,e=this.stops,f;if(c)for(f=c.length;f--;){var g=c[f];var k=g.from;e=g.to;if(("undefined"===typeof k||a>=k)&&("undefined"===typeof e||a<=e)){var h=g.color;b&&(b.dataClass=
f,b.colorIndex=g.colorIndex);break}}else{a=this.normalizedValue(a);for(f=e.length;f--&&!(a>e[f][0]););k=e[f]||e[f+1];e=e[f+1]||k;a=1-(e[0]-a)/(e[0]-k[0]||1);h=k.color.tweenTo(e.color,a)}return h};e.prototype.getOffset=function(){var a=this.legendGroup,c=this.chart.axisOffset[this.side];a&&(this.axisParent=a,b.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=c)};e.prototype.setLegendColor=function(){var a=this.reversed,
b=a?1:0;a=a?0:1;b=this.horiz?[b,0,a,0]:[0,a,0,b];this.legendColor={linearGradient:{x1:b[0],y1:b[1],x2:b[2],y2:b[3]},stops:this.stops}};e.prototype.drawLegendSymbol=function(a,b){var f=a.padding,g=a.options,k=this.horiz,h=c(g.symbolWidth,k?e.defaultLegendLength:12),l=c(g.symbolHeight,k?12:e.defaultLegendLength),p=c(g.labelPadding,k?16:30);g=c(g.itemDistance,10);this.setLegendColor();b.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,h,l).attr({zIndex:1}).add(b.legendGroup);this.legendItemWidth=
h+f+(k?g:p);this.legendItemHeight=l+f+(k?p:0)};e.prototype.setState=function(a){this.series.forEach(function(b){b.setState(a)})};e.prototype.setVisible=function(){};e.prototype.getSeriesExtremes=function(){var a=this.series,b=a.length,e;this.dataMin=Infinity;for(this.dataMax=-Infinity;b--;){var f=a[b];var g=f.colorKey=c(f.options.colorKey,f.colorKey,f.pointValKey,f.zoneAxis,"y");var k=f.pointArrayMap;var h=f[g+"Min"]&&f[g+"Max"];if(f[g+"Data"])var l=f[g+"Data"];else if(k){l=[];k=k.indexOf(g);var p=
f.yData;if(0<=k&&p)for(e=0;e<p.length;e++)l.push(c(p[e][k],p[e]))}else l=f.yData;h?(f.minColorValue=f[g+"Min"],f.maxColorValue=f[g+"Max"]):(l=B.prototype.getExtremes.call(f,l),f.minColorValue=l.dataMin,f.maxColorValue=l.dataMax);"undefined"!==typeof f.minColorValue&&(this.dataMin=Math.min(this.dataMin,f.minColorValue),this.dataMax=Math.max(this.dataMax,f.maxColorValue));h||B.prototype.applyExtremes.call(f)}};e.prototype.drawCrosshair=function(a,c){var e=c&&c.plotX,f=c&&c.plotY,g=this.pos,k=this.len;
if(c){var h=this.toPixels(c.getNestedProperty(c.series.colorKey));h<g?h=g-2:h>g+k&&(h=g+k+2);c.plotX=h;c.plotY=this.len-h;b.prototype.drawCrosshair.call(this,a,c);c.plotX=e;c.plotY=f;this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,!this.chart.styledMode&&this.crosshair&&this.cross.attr({fill:this.crosshair.color}))}};e.prototype.getPlotLinePath=function(a){var c=this.left,e=a.translatedValue,
f=this.top;return p(e)?this.horiz?[["M",e-4,f-6],["L",e+4,f-6],["L",e,f],["Z"]]:[["M",c,e],["L",c-6,e+6],["L",c-6,e-6],["Z"]]:b.prototype.getPlotLinePath.call(this,a)};e.prototype.update=function(a,c){var f=this.chart,g=f.legend,h=e.buildOptions(f,{},a);this.series.forEach(function(a){a.isDirtyData=!0});(a.dataClasses&&g.allItems||this.dataClasses)&&this.destroyItems();f.options[this.coll]=k(this.userOptions,h);b.prototype.update.call(this,h,c);this.legendItem&&(this.setLegendColor(),g.colorizeItem(this,
!0))};e.prototype.destroyItems=function(){var a=this.chart;this.legendItem?a.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach(function(b){a.legend.destroyItem(b)});a.isDirtyLegend=!0};e.prototype.remove=function(a){this.destroyItems();b.prototype.remove.call(this,a)};e.prototype.getDataClassLegendSymbols=function(){var a=this,b=a.chart,c=a.legendItems,e=b.options.legend,f=e.valueDecimals,g=e.valueSuffix||"",k;c.length||a.dataClasses.forEach(function(e,h){var l=!0,d=e.from,p=e.to,
m=b.numberFormatter;k="";"undefined"===typeof d?k="< ":"undefined"===typeof p&&(k="> ");"undefined"!==typeof d&&(k+=m(d,f)+g);"undefined"!==typeof d&&"undefined"!==typeof p&&(k+=" - ");"undefined"!==typeof p&&(k+=m(p,f)+g);c.push(A({chart:b,name:k,options:{},drawLegendSymbol:G.drawRectangle,visible:!0,setState:H,isDataClass:!0,setVisible:function(){l=a.visible=!l;a.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===h&&a.setVisible(l)})});b.legend.colorizeItem(this,l)}},e))});return c};
e.defaultLegendLength=200;e.defaultOptions={lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0};e.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"];return e}(n);Array.prototype.push.apply(n.keepProps,f.keepProps);F.ColorAxis=f;["fill",
"stroke"].forEach(function(b){y.prototype[b+"Setter"]=function(){this.elem.attr(b,D(this.start).tweenTo(D(this.end),this.pos),null,!0)}});v(h,"afterGetAxes",function(){var b=this,c=b.options;this.colorAxis=[];c.colorAxis&&(c.colorAxis=e(c.colorAxis),c.colorAxis.forEach(function(a,c){a.index=c;new f(b,a)}))});v(B,"bindAxes",function(){var b=this.axisTypes;b?-1===b.indexOf("colorAxis")&&b.push("colorAxis"):this.axisTypes=["colorAxis"]});v(M,"afterGetAllItems",function(b){var c=[],a,e;(this.chart.colorAxis||
[]).forEach(function(e){(a=e.options)&&a.showInLegend&&(a.dataClasses&&a.visible?c=c.concat(e.getDataClassLegendSymbols()):a.visible&&c.push(e),e.series.forEach(function(c){if(!c.options.showInLegend||a.dataClasses)"point"===c.options.legendType?c.points.forEach(function(a){u(b.allItems,a)}):u(b.allItems,c)}))});for(e=c.length;e--;)b.allItems.unshift(c[e])});v(M,"afterColorizeItem",function(b){b.visible&&b.item.legendColor&&b.item.legendSymbol.attr({fill:b.item.legendColor})});v(M,"afterUpdate",function(){var b=
this.chart.colorAxis;b&&b.forEach(function(b,a,c){b.update({},c)})});v(B,"afterTranslate",function(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()});return f});O(q,"Mixins/ColorMapSeries.js",[q["Core/Globals.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q){var z=q.defined;return{colorMapPointMixin:{dataLabelOnNull:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setState:function(n){h.prototype.setState.call(this,
n);this.graphic&&this.graphic.attr({zIndex:"hover"===n?1:0})}},colorMapSeriesMixin:{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:n.noop,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:n.seriesTypes.column.prototype.pointAttribs,colorAttribs:function(h){var n={};z(h.color)&&(n[this.colorProp||"fill"]=h.color);return n}}}});O(q,"Maps/MapNavigation.js",[q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],
function(n,h,q){function z(g){g&&(g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),g.cancelBubble=!0)}function y(g){this.init(g)}var F=h.doc,L=q.addEvent,G=q.extend,B=q.merge,r=q.objectEach,m=q.pick;y.prototype.init=function(g){this.chart=g;g.mapNavButtons=[]};y.prototype.update=function(g){var h=this.chart,n=h.options.mapNavigation,q,u,A,p,k,c=function(c){this.handler.call(h,c);z(c)},e=h.mapNavButtons;g&&(n=h.options.mapNavigation=B(h.options.mapNavigation,g));for(;e.length;)e.pop().destroy();
m(n.enableButtons,n.enabled)&&!h.renderer.forExport&&r(n.buttons,function(f,b){q=B(n.buttonOptions,f);h.styledMode||(u=q.theme,u.style=B(q.theme.style,q.style),p=(A=u.states)&&A.hover,k=A&&A.select);f=h.renderer.button(q.text,0,0,c,u,p,k,0,"zoomIn"===b?"topbutton":"bottombutton").addClass("highcharts-map-navigation highcharts-"+{zoomIn:"zoom-in",zoomOut:"zoom-out"}[b]).attr({width:q.width,height:q.height,title:h.options.lang[b],padding:q.padding,zIndex:5}).add();f.handler=q.onclick;L(f.element,"dblclick",
z);e.push(f);var g=q,a=L(h,"load",function(){f.align(G(g,{width:f.width,height:2*f.height}),null,g.alignTo);a()})});this.updateEvents(n)};y.prototype.updateEvents=function(g){var h=this.chart;m(g.enableDoubleClickZoom,g.enabled)||g.enableDoubleClickZoomTo?this.unbindDblClick=this.unbindDblClick||L(h.container,"dblclick",function(g){h.pointer.onContainerDblClick(g)}):this.unbindDblClick&&(this.unbindDblClick=this.unbindDblClick());m(g.enableMouseWheelZoom,g.enabled)?this.unbindMouseWheel=this.unbindMouseWheel||
L(h.container,"undefined"===typeof F.onmousewheel?"DOMMouseScroll":"mousewheel",function(g){h.pointer.onContainerMouseWheel(g);z(g);return!1}):this.unbindMouseWheel&&(this.unbindMouseWheel=this.unbindMouseWheel())};G(n.prototype,{fitToBox:function(g,h){[["x","width"],["y","height"]].forEach(function(m){var n=m[0];m=m[1];g[n]+g[m]>h[n]+h[m]&&(g[m]>h[m]?(g[m]=h[m],g[n]=h[n]):g[n]=h[n]+h[m]-g[m]);g[m]>h[m]&&(g[m]=h[m]);g[n]<h[n]&&(g[n]=h[n])});return g},mapZoom:function(g,h,n,r,q){var u=this.xAxis[0],
p=u.max-u.min,k=m(h,u.min+p/2),c=p*g;p=this.yAxis[0];var e=p.max-p.min,f=m(n,p.min+e/2);e*=g;k=this.fitToBox({x:k-c*(r?(r-u.pos)/u.len:.5),y:f-e*(q?(q-p.pos)/p.len:.5),width:c,height:e},{x:u.dataMin,y:p.dataMin,width:u.dataMax-u.dataMin,height:p.dataMax-p.dataMin});c=k.x<=u.dataMin&&k.width>=u.dataMax-u.dataMin&&k.y<=p.dataMin&&k.height>=p.dataMax-p.dataMin;r&&u.mapAxis&&(u.mapAxis.fixTo=[r-u.pos,h]);q&&p.mapAxis&&(p.mapAxis.fixTo=[q-p.pos,n]);"undefined"===typeof g||c?(u.setExtremes(void 0,void 0,
!1),p.setExtremes(void 0,void 0,!1)):(u.setExtremes(k.x,k.x+k.width,!1),p.setExtremes(k.y,k.y+k.height,!1));this.redraw()}});L(n,"beforeRender",function(){this.mapNavigation=new y(this);this.mapNavigation.update()});h.MapNavigation=y});O(q,"Maps/MapPointer.js",[q["Core/Pointer.js"],q["Core/Utilities.js"]],function(n,h){var q=h.extend,z=h.pick;h=h.wrap;q(n.prototype,{onContainerDblClick:function(h){var n=this.chart;h=this.normalize(h);n.options.mapNavigation.enableDoubleClickZoomTo?n.pointer.inClass(h.target,
"highcharts-tracker")&&n.hoverPoint&&n.hoverPoint.zoomTo():n.isInsidePlot(h.chartX-n.plotLeft,h.chartY-n.plotTop)&&n.mapZoom(.5,n.xAxis[0].toValue(h.chartX),n.yAxis[0].toValue(h.chartY),h.chartX,h.chartY)},onContainerMouseWheel:function(h){var n=this.chart;h=this.normalize(h);var q=h.detail||-(h.wheelDelta/120);n.isInsidePlot(h.chartX-n.plotLeft,h.chartY-n.plotTop)&&n.mapZoom(Math.pow(n.options.mapNavigation.mouseWheelSensitivity,q),n.xAxis[0].toValue(h.chartX),n.yAxis[0].toValue(h.chartY),h.chartX,
h.chartY)}});h(n.prototype,"zoomOption",function(h){var n=this.chart.options.mapNavigation;z(n.enableTouchZoom,n.enabled)&&(this.chart.options.chart.pinchType="xy");h.apply(this,[].slice.call(arguments,1))});h(n.prototype,"pinchTranslate",function(h,n,q,z,B,r,m){h.call(this,n,q,z,B,r,m);"map"===this.chart.options.chart.type&&this.hasZoom&&(h=z.scaleX>z.scaleY,this.pinchTranslateDirection(!h,n,q,z,B,r,m,h?z.scaleX:z.scaleY))})});O(q,"Maps/Map.js",[q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Options.js"],
q["Core/Renderer/SVG/SVGRenderer.js"],q["Core/Utilities.js"]],function(n,h,q,z,y){function F(g,h,m,n,r,q,p,k){return[["M",g+r,h],["L",g+m-q,h],["C",g+m-q/2,h,g+m,h+q/2,g+m,h+q],["L",g+m,h+n-p],["C",g+m,h+n-p/2,g+m-p/2,h+n,g+m-p,h+n],["L",g+k,h+n],["C",g+k/2,h+n,g,h+n-k/2,g,h+n-k],["L",g,h+r],["C",g,h+r/2,g+r/2,h,g+r,h],["Z"]]}q=q.defaultOptions;var L=y.extend,G=y.getOptions,B=y.merge,r=y.pick;y=h.Renderer;var m=h.VMLRenderer;L(q.lang,{zoomIn:"Zoom in",zoomOut:"Zoom out"});q.mapNavigation={buttonOptions:{alignTo:"plotBox",
align:"left",verticalAlign:"top",x:0,width:18,height:18,padding:5,style:{fontSize:"15px",fontWeight:"bold"},theme:{"stroke-width":1,"text-align":"center"}},buttons:{zoomIn:{onclick:function(){this.mapZoom(.5)},text:"+",y:0},zoomOut:{onclick:function(){this.mapZoom(2)},text:"-",y:28}},mouseWheelSensitivity:1.1};q=h.splitPath=function(g){"string"===typeof g&&(g=g.replace(/([A-Za-z])/g," $1 ").replace(/^\s*/,"").replace(/\s*$/,""),g=g.split(/[ ,;]+/).map(function(g){return/[A-za-z]/.test(g)?g:parseFloat(g)}));
return z.prototype.pathToSegments(g)};h.maps={};z.prototype.symbols.topbutton=function(g,h,m,n,r){r=r&&r.r||0;return F(g-1,h-1,m,n,r,r,0,0)};z.prototype.symbols.bottombutton=function(g,h,m,n,r){r=r&&r.r||0;return F(g-1,h-1,m,n,0,0,r,r)};y===m&&["topbutton","bottombutton"].forEach(function(g){m.prototype.symbols[g]=z.prototype.symbols[g]});return{mapChart:h.Map=h.mapChart=function(g,h,m){var q="string"===typeof g||g.nodeName,u=arguments[q?1:0],A=u,p={endOnTick:!1,visible:!1,minPadding:0,maxPadding:0,
startOnTick:!1},k=G().credits;var c=u.series;u.series=null;u=B({chart:{panning:{enabled:!0,type:"xy"},type:"map"},credits:{mapText:r(k.mapText,' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'),mapTextFull:r(k.mapTextFull,"{geojson.copyright}")},tooltip:{followTouchMove:!1},xAxis:p,yAxis:B(p,{reversed:!0})},u,{chart:{inverted:!1,alignTicks:!1}});u.series=A.series=c;return q?new n(g,u,m):new n(u,h)},maps:h.maps,splitPath:q}});O(q,"Series/MapSeries.js",[q["Core/Series/Series.js"],
q["Mixins/ColorMapSeries.js"],q["Core/Globals.js"],q["Mixins/LegendSymbol.js"],q["Maps/Map.js"],q["Core/Series/Point.js"],q["Core/Renderer/SVG/SVGRenderer.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F,M,G){var B=h.colorMapPointMixin,r=q.noop,m=y.maps,g=y.splitPath,D=G.extend,H=G.fireEvent,v=G.getNestedProperty,u=G.isArray,A=G.isNumber,p=G.merge,k=G.objectEach,c=G.pick,e=G.splat,f=q.Series,b=n.seriesTypes;n.seriesType("map","scatter",{animation:!1,dataLabels:{crop:!1,formatter:function(){return this.point.value},
inside:!0,overflow:!1,padding:0,verticalAlign:"middle"},marker:null,nullColor:"#f7f7f7",stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:"{point.name}: {point.value}<br/>"},turboThreshold:0,allAreas:!0,borderColor:"#cccccc",borderWidth:1,joinBy:"hc-key",states:{hover:{halo:null,brightness:.2},normal:{animation:!0},select:{color:"#cccccc"},inactive:{opacity:1}}},p(h.colorMapSeriesMixin,{type:"map",getExtremesFromAll:!0,useMapGeometry:!0,forceDL:!0,searchPoint:r,directTouch:!0,preserveAspectRatio:!0,
pointArrayMap:["value"],setOptions:function(b){b=f.prototype.setOptions.call(this,b);var a=b.joinBy;null===a&&(a="_i");a=this.joinBy=e(a);a[1]||(a[1]=a[0]);return b},getBox:function(b){var a=Number.MAX_VALUE,e=-a,f=a,h=-a,k=a,l=a,p=this.xAxis,m=this.yAxis,n;(b||[]).forEach(function(b){if(b.path){"string"===typeof b.path?b.path=g(b.path):"M"===b.path[0]&&(b.path=M.prototype.pathToSegments(b.path));var d=b.path||[],p=-a,m=a,r=-a,q=a,u=b.properties;b._foundBox||(d.forEach(function(a){var b=a[a.length-
2];a=a[a.length-1];"number"===typeof b&&"number"===typeof a&&(m=Math.min(m,b),p=Math.max(p,b),q=Math.min(q,a),r=Math.max(r,a))}),b._midX=m+(p-m)*c(b.middleX,u&&u["hc-middle-x"],.5),b._midY=q+(r-q)*c(b.middleY,u&&u["hc-middle-y"],.5),b._maxX=p,b._minX=m,b._maxY=r,b._minY=q,b.labelrank=c(b.labelrank,(p-m)*(r-q)),b._foundBox=!0);e=Math.max(e,b._maxX);f=Math.min(f,b._minX);h=Math.max(h,b._maxY);k=Math.min(k,b._minY);l=Math.min(b._maxX-b._minX,b._maxY-b._minY,l);n=!0}});n&&(this.minY=Math.min(k,c(this.minY,
a)),this.maxY=Math.max(h,c(this.maxY,-a)),this.minX=Math.min(f,c(this.minX,a)),this.maxX=Math.max(e,c(this.maxX,-a)),p&&"undefined"===typeof p.options.minRange&&(p.minRange=Math.min(5*l,(this.maxX-this.minX)/5,p.minRange||a)),m&&"undefined"===typeof m.options.minRange&&(m.minRange=Math.min(5*l,(this.maxY-this.minY)/5,m.minRange||a)))},hasData:function(){return!!this.processedXData.length},getExtremes:function(){var b=f.prototype.getExtremes.call(this,this.valueData),a=b.dataMin;b=b.dataMax;this.chart.hasRendered&&
this.isDirtyData&&this.getBox(this.options.data);A(a)&&(this.valueMin=a);A(b)&&(this.valueMax=b);return{dataMin:this.minY,dataMax:this.maxY}},translatePath:function(b){var a=this.xAxis,c=this.yAxis,e=a.min,f=a.transA,g=a.minPixelPadding,h=c.min,k=c.transA,l=c.minPixelPadding,p=[];b&&b.forEach(function(a){"M"===a[0]?p.push(["M",(a[1]-(e||0))*f+g,(a[2]-(h||0))*k+l]):"L"===a[0]?p.push(["L",(a[1]-(e||0))*f+g,(a[2]-(h||0))*k+l]):"C"===a[0]?p.push(["C",(a[1]-(e||0))*f+g,(a[2]-(h||0))*k+l,(a[3]-(e||0))*
f+g,(a[4]-(h||0))*k+l,(a[5]-(e||0))*f+g,(a[6]-(h||0))*k+l]):"Q"===a[0]?p.push(["Q",(a[1]-(e||0))*f+g,(a[2]-(h||0))*k+l,(a[3]-(e||0))*f+g,(a[4]-(h||0))*k+l]):"Z"===a[0]&&p.push(["Z"])});return p},setData:function(b,a,c,e){var g=this.options,h=this.chart.options.chart,l=h&&h.map,n=g.mapData,r=this.joinBy,x=g.keys||this.pointArrayMap,w=[],d={},t=this.chart.mapTransforms;!n&&l&&(n="string"===typeof l?m[l]:l);b&&b.forEach(function(a,c){var d=0;if(A(a))b[c]={value:a};else if(u(a)){b[c]={};!g.keys&&a.length>
x.length&&"string"===typeof a[0]&&(b[c]["hc-key"]=a[0],++d);for(var e=0;e<x.length;++e,++d)x[e]&&"undefined"!==typeof a[d]&&(0<x[e].indexOf(".")?F.prototype.setNestedProperty(b[c],a[d],x[e]):b[c][x[e]]=a[d])}r&&"_i"===r[0]&&(b[c]._i=c)});this.getBox(b);(this.chart.mapTransforms=t=h&&h.mapTransforms||n&&n["hc-transform"]||t)&&k(t,function(a){a.rotation&&(a.cosAngle=Math.cos(a.rotation),a.sinAngle=Math.sin(a.rotation))});if(n){"FeatureCollection"===n.type&&(this.mapTitle=n.title,n=q.geojson(n,this.type,
this));this.mapData=n;this.mapMap={};for(t=0;t<n.length;t++)h=n[t],l=h.properties,h._i=t,r[0]&&l&&l[r[0]]&&(h[r[0]]=l[r[0]]),d[h[r[0]]]=h;this.mapMap=d;if(b&&r[1]){var y=r[1];b.forEach(function(a){a=v(y,a);d[a]&&w.push(d[a])})}if(g.allAreas){this.getBox(n);b=b||[];if(r[1]){var E=r[1];b.forEach(function(a){w.push(v(E,a))})}w="|"+w.map(function(a){return a&&a[r[0]]}).join("|")+"|";n.forEach(function(a){r[0]&&-1!==w.indexOf("|"+a[r[0]]+"|")||(b.push(p(a,{value:null})),e=!1)})}else this.getBox(w)}f.prototype.setData.call(this,
b,a,c,e)},drawGraph:r,drawDataLabels:r,doFullTranslate:function(){return this.isDirtyData||this.chart.isResizing||this.chart.renderer.isVML||!this.baseTrans},translate:function(){var b=this,a=b.xAxis,c=b.yAxis,e=b.doFullTranslate();b.generatePoints();b.data.forEach(function(f){A(f._midX)&&A(f._midY)&&(f.plotX=a.toPixels(f._midX,!0),f.plotY=c.toPixels(f._midY,!0));e&&(f.shapeType="path",f.shapeArgs={d:b.translatePath(f.path)})});H(b,"afterTranslate")},pointAttribs:function(e,a){a=e.series.chart.styledMode?
this.colorAttribs(e):b.column.prototype.pointAttribs.call(this,e,a);a["stroke-width"]=c(e.options[this.pointAttrToOptions&&this.pointAttrToOptions["stroke-width"]||"borderWidth"],"inherit");return a},drawPoints:function(){var e=this,a=e.xAxis,f=e.yAxis,g=e.group,h=e.chart,k=h.renderer,p=this.baseTrans;e.transformGroup||(e.transformGroup=k.g().attr({scaleX:1,scaleY:1}).add(g),e.transformGroup.survive=!0);if(e.doFullTranslate())h.hasRendered&&!h.styledMode&&e.points.forEach(function(a){a.shapeArgs&&
(a.shapeArgs.fill=e.pointAttribs(a,a.state).fill)}),e.group=e.transformGroup,b.column.prototype.drawPoints.apply(e),e.group=g,e.points.forEach(function(a){if(a.graphic){var b="";a.name&&(b+="highcharts-name-"+a.name.replace(/ /g,"-").toLowerCase());a.properties&&a.properties["hc-key"]&&(b+=" highcharts-key-"+a.properties["hc-key"].toLowerCase());b&&a.graphic.addClass(b);h.styledMode&&a.graphic.css(e.pointAttribs(a,a.selected&&"select"||void 0))}}),this.baseTrans={originX:a.min-a.minPixelPadding/a.transA,
originY:f.min-f.minPixelPadding/f.transA+(f.reversed?0:f.len/f.transA),transAX:a.transA,transAY:f.transA},this.transformGroup.animate({translateX:0,translateY:0,scaleX:1,scaleY:1});else{var m=a.transA/p.transAX;var n=f.transA/p.transAY;var r=a.toPixels(p.originX,!0);var q=f.toPixels(p.originY,!0);.99<m&&1.01>m&&.99<n&&1.01>n&&(n=m=1,r=Math.round(r),q=Math.round(q));var d=this.transformGroup;if(h.renderer.globalAnimation){var t=d.attr("translateX");var u=d.attr("translateY");var v=d.attr("scaleX");
var A=d.attr("scaleY");d.attr({animator:0}).animate({animator:1},{step:function(a,b){d.attr({translateX:t+(r-t)*b.pos,translateY:u+(q-u)*b.pos,scaleX:v+(m-v)*b.pos,scaleY:A+(n-A)*b.pos})}})}else d.attr({translateX:r,translateY:q,scaleX:m,scaleY:n})}h.styledMode||g.element.setAttribute("stroke-width",c(e.options[e.pointAttrToOptions&&e.pointAttrToOptions["stroke-width"]||"borderWidth"],1)/(m||1));this.drawMapDataLabels()},drawMapDataLabels:function(){f.prototype.drawDataLabels.call(this);this.dataLabelsGroup&&
this.dataLabelsGroup.clip(this.chart.clipRect)},render:function(){var b=this,a=f.prototype.render;b.chart.renderer.isVML&&3E3<b.data.length?setTimeout(function(){a.call(b)}):a.call(b)},animate:function(b){var a=this.options.animation,c=this.group,e=this.xAxis,f=this.yAxis,g=e.pos,h=f.pos;this.chart.renderer.isSVG&&(!0===a&&(a={duration:1E3}),b?c.attr({translateX:g+e.len/2,translateY:h+f.len/2,scaleX:.001,scaleY:.001}):c.animate({translateX:g,translateY:h,scaleX:1,scaleY:1},a))},animateDrilldown:function(b){var a=
this.chart.plotBox,c=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],e=c.bBox,f=this.chart.options.drilldown.animation;b||(b=Math.min(e.width/a.width,e.height/a.height),c.shapeArgs={scaleX:b,scaleY:b,translateX:e.x,translateY:e.y},this.points.forEach(function(a){a.graphic&&a.graphic.attr(c.shapeArgs).animate({scaleX:1,scaleY:1,translateX:0,translateY:0},f)}))},drawLegendSymbol:z.drawRectangle,animateDrillupFrom:function(c){b.column.prototype.animateDrillupFrom.call(this,c)},animateDrillupTo:function(c){b.column.prototype.animateDrillupTo.call(this,
c)}}),D({applyOptions:function(b,a){var c=this.series;b=F.prototype.applyOptions.call(this,b,a);a=c.joinBy;c.mapData&&c.mapMap&&(a=F.prototype.getNestedProperty.call(b,a[1]),(a="undefined"!==typeof a&&c.mapMap[a])?(c.xyFromShape&&(b.x=a._midX,b.y=a._midY),D(b,a)):b.value=b.value||null);return b},onMouseOver:function(b){G.clearTimeout(this.colorInterval);if(null!==this.value||this.series.options.nullInteraction)F.prototype.onMouseOver.call(this,b);else this.series.onMouseOut(b)},zoomTo:function(){var b=
this.series;b.xAxis.setExtremes(this._minX,this._maxX,!1);b.yAxis.setExtremes(this._minY,this._maxY,!1);b.chart.redraw()}},B));""});O(q,"Series/MapLineSeries.js",[q["Core/Series/Series.js"]],function(n){var h=n.seriesTypes;n.seriesType("mapline","map",{lineWidth:1,fillColor:"none"},{type:"mapline",colorProp:"stroke",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(n,q){n=h.map.prototype.pointAttribs.call(this,n,q);n.fill=this.options.fillColor;return n},drawLegendSymbol:h.line.prototype.drawLegendSymbol});
""});O(q,"Series/MapPointSeries.js",[q["Core/Series/Series.js"],q["Core/Globals.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q,z){var y=z.merge,F=h.Series;n.seriesType("mappoint","scatter",{dataLabels:{crop:!1,defer:!1,enabled:!0,formatter:function(){return this.point.name},overflow:!1,style:{color:"#000000"}}},{type:"mappoint",forceDL:!0,drawDataLabels:function(){F.prototype.drawDataLabels.call(this);this.dataLabelsGroup&&this.dataLabelsGroup.clip(this.chart.clipRect)}},{applyOptions:function(h,
n){h="undefined"!==typeof h.lat&&"undefined"!==typeof h.lon?y(h,this.series.chart.fromLatLonToPoint(h)):h;return q.prototype.applyOptions.call(this,h,n)}});""});O(q,"Series/Bubble/BubbleLegend.js",[q["Core/Chart/Chart.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Legend.js"],q["Core/Utilities.js"]],function(n,h,q,z,y){var F=h.parse;h=y.addEvent;var L=y.arrayMax,G=y.arrayMin,B=y.isNumber,r=y.merge,m=y.objectEach,g=y.pick,D=y.setOptions,H=y.stableSort,v=y.wrap;"";var u=q.Series,A=q.noop;
D({legend:{bubbleLegend:{borderColor:void 0,borderWidth:2,className:void 0,color:void 0,connectorClassName:void 0,connectorColor:void 0,connectorDistance:60,connectorWidth:1,enabled:!1,labels:{className:void 0,allowOverlap:!1,format:"",formatter:void 0,align:"right",style:{fontSize:10,color:void 0},x:0,y:0},maxSize:60,minSize:10,legendIndex:0,ranges:{value:void 0,borderColor:void 0,color:void 0,connectorColor:void 0},sizeBy:"area",sizeByAbsoluteValue:!1,zIndex:1,zThreshold:0}}});D=function(){function h(g,
c){this.options=this.symbols=this.visible=this.ranges=this.movementX=this.maxLabel=this.legendSymbol=this.legendItemWidth=this.legendItemHeight=this.legendItem=this.legendGroup=this.legend=this.fontMetrics=this.chart=void 0;this.setState=A;this.init(g,c)}h.prototype.init=function(g,c){this.options=g;this.visible=!0;this.chart=c.chart;this.legend=c};h.prototype.addToLegend=function(g){g.splice(this.options.legendIndex,0,this)};h.prototype.drawLegendSymbol=function(h){var c=this.chart,e=this.options,
f=g(h.options.itemDistance,20),b=e.ranges;var k=e.connectorDistance;this.fontMetrics=c.renderer.fontMetrics(e.labels.style.fontSize.toString()+"px");b&&b.length&&B(b[0].value)?(H(b,function(a,b){return b.value-a.value}),this.ranges=b,this.setOptions(),this.render(),c=this.getMaxLabelSize(),b=this.ranges[0].radius,h=2*b,k=k-b+c.width,k=0<k?k:0,this.maxLabel=c,this.movementX="left"===e.labels.align?k:0,this.legendItemWidth=h+k+f,this.legendItemHeight=h+this.fontMetrics.h/2):h.options.bubbleLegend.autoRanges=
!0};h.prototype.setOptions=function(){var h=this.ranges,c=this.options,e=this.chart.series[c.seriesIndex],f=this.legend.baseline,b={"z-index":c.zIndex,"stroke-width":c.borderWidth},l={"z-index":c.zIndex,"stroke-width":c.connectorWidth},a=this.getLabelStyles(),p=e.options.marker.fillOpacity,m=this.chart.styledMode;h.forEach(function(k,n){m||(b.stroke=g(k.borderColor,c.borderColor,e.color),b.fill=g(k.color,c.color,1!==p?F(e.color).setOpacity(p).get("rgba"):e.color),l.stroke=g(k.connectorColor,c.connectorColor,
e.color));h[n].radius=this.getRangeRadius(k.value);h[n]=r(h[n],{center:h[0].radius-h[n].radius+f});m||r(!0,h[n],{bubbleStyle:r(!1,b),connectorStyle:r(!1,l),labelStyle:a})},this)};h.prototype.getLabelStyles=function(){var h=this.options,c={},e="left"===h.labels.align,f=this.legend.options.rtl;m(h.labels.style,function(b,e){"color"!==e&&"fontSize"!==e&&"z-index"!==e&&(c[e]=b)});return r(!1,c,{"font-size":h.labels.style.fontSize,fill:g(h.labels.style.color,"#000000"),"z-index":h.zIndex,align:f||e?"right":
"left"})};h.prototype.getRangeRadius=function(g){var c=this.options;return this.chart.series[this.options.seriesIndex].getRadius.call(this,c.ranges[c.ranges.length-1].value,c.ranges[0].value,c.minSize,c.maxSize,g)};h.prototype.render=function(){var g=this.chart.renderer,c=this.options.zThreshold;this.symbols||(this.symbols={connectors:[],bubbleItems:[],labels:[]});this.legendSymbol=g.g("bubble-legend");this.legendItem=g.g("bubble-legend-item");this.legendSymbol.translateX=0;this.legendSymbol.translateY=
0;this.ranges.forEach(function(e){e.value>=c&&this.renderRange(e)},this);this.legendSymbol.add(this.legendItem);this.legendItem.add(this.legendGroup);this.hideOverlappingLabels()};h.prototype.renderRange=function(g){var c=this.options,e=c.labels,f=this.chart.renderer,b=this.symbols,h=b.labels,a=g.center,k=Math.abs(g.radius),p=c.connectorDistance||0,m=e.align,n=e.style.fontSize;p=this.legend.options.rtl||"left"===m?-p:p;e=c.connectorWidth;var r=this.ranges[0].radius||0,q=a-k-c.borderWidth/2+e/2;n=
n/2-(this.fontMetrics.h-n)/2;var u=f.styledMode;"center"===m&&(p=0,c.connectorDistance=0,g.labelStyle.align="center");m=q+c.labels.y;var v=r+p+c.labels.x;b.bubbleItems.push(f.circle(r,a+((q%1?1:.5)-(e%2?0:.5)),k).attr(u?{}:g.bubbleStyle).addClass((u?"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-symbol "+(c.className||"")).add(this.legendSymbol));b.connectors.push(f.path(f.crispLine([["M",r,q],["L",r+p,q]],c.connectorWidth)).attr(u?{}:g.connectorStyle).addClass((u?
"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-connectors "+(c.connectorClassName||"")).add(this.legendSymbol));g=f.text(this.formatLabel(g),v,m+n).attr(u?{}:g.labelStyle).addClass("highcharts-bubble-legend-labels "+(c.labels.className||"")).add(this.legendSymbol);h.push(g);g.placed=!0;g.alignAttr={x:v,y:m+n}};h.prototype.getMaxLabelSize=function(){var g,c;this.symbols.labels.forEach(function(e){c=e.getBBox(!0);g=g?c.width>g.width?c:g:c});return g||{}};h.prototype.formatLabel=
function(g){var c=this.options,e=c.labels.formatter;c=c.labels.format;var f=this.chart.numberFormatter;return c?y.format(c,g):e?e.call(g):f(g.value,1)};h.prototype.hideOverlappingLabels=function(){var g=this.chart,c=this.symbols;!this.options.labels.allowOverlap&&c&&(g.hideOverlappingLabels(c.labels),c.labels.forEach(function(e,f){e.newOpacity?e.newOpacity!==e.oldOpacity&&c.connectors[f].show():c.connectors[f].hide()}))};h.prototype.getRanges=function(){var h=this.legend.bubbleLegend,c=h.options.ranges,
e,f=Number.MAX_VALUE,b=-Number.MAX_VALUE;h.chart.series.forEach(function(a){a.isBubble&&!a.ignoreSeries&&(e=a.zData.filter(B),e.length&&(f=g(a.options.zMin,Math.min(f,Math.max(G(e),!1===a.options.displayNegative?a.options.zThreshold:-Number.MAX_VALUE))),b=g(a.options.zMax,Math.max(b,L(e)))))});var l=f===b?[{value:b}]:[{value:f},{value:(f+b)/2},{value:b,autoRanges:!0}];c.length&&c[0].radius&&l.reverse();l.forEach(function(a,b){c&&c[b]&&(l[b]=r(!1,c[b],a))});return l};h.prototype.predictBubbleSizes=
function(){var g=this.chart,c=this.fontMetrics,e=g.legend.options,f="horizontal"===e.layout,b=f?g.legend.lastLineHeight:0,h=g.plotSizeX,a=g.plotSizeY,p=g.series[this.options.seriesIndex];g=Math.ceil(p.minPxSize);var m=Math.ceil(p.maxPxSize);p=p.options.maxSize;var n=Math.min(a,h);if(e.floating||!/%$/.test(p))c=m;else if(p=parseFloat(p),c=(n+b-c.h/2)*p/100/(p/100+1),f&&a-c>=h||!f&&h-c>=a)c=m;return[g,Math.ceil(c)]};h.prototype.updateRanges=function(g,c){var e=this.legend.options.bubbleLegend;e.minSize=
g;e.maxSize=c;e.ranges=this.getRanges()};h.prototype.correctSizes=function(){var g=this.legend,c=this.chart.series[this.options.seriesIndex];1<Math.abs(Math.ceil(c.maxPxSize)-this.options.maxSize)&&(this.updateRanges(this.options.minSize,c.maxPxSize),g.render())};return h}();h(z,"afterGetAllItems",function(g){var h=this.bubbleLegend,c=this.options,e=c.bubbleLegend,f=this.chart.getVisibleBubbleSeriesIndex();h&&h.ranges&&h.ranges.length&&(e.ranges.length&&(e.autoRanges=!!e.ranges[0].autoRanges),this.destroyItem(h));
0<=f&&c.enabled&&e.enabled&&(e.seriesIndex=f,this.bubbleLegend=new q.BubbleLegend(e,this),this.bubbleLegend.addToLegend(g.allItems))});n.prototype.getVisibleBubbleSeriesIndex=function(){for(var g=this.series,h=0;h<g.length;){if(g[h]&&g[h].isBubble&&g[h].visible&&g[h].zData.length)return h;h++}return-1};z.prototype.getLinesHeights=function(){var g=this.allItems,h=[],c=g.length,e,f=0;for(e=0;e<c;e++)if(g[e].legendItemHeight&&(g[e].itemHeight=g[e].legendItemHeight),g[e]===g[c-1]||g[e+1]&&g[e]._legendItemPos[1]!==
g[e+1]._legendItemPos[1]){h.push({height:0});var b=h[h.length-1];for(f;f<=e;f++)g[f].itemHeight>b.height&&(b.height=g[f].itemHeight);b.step=e}return h};z.prototype.retranslateItems=function(g){var h,c,e,f=this.options.rtl,b=0;this.allItems.forEach(function(k,a){h=k.legendGroup.translateX;c=k._legendItemPos[1];if((e=k.movementX)||f&&k.ranges)e=f?h-k.options.maxSize/2:h+e,k.legendGroup.attr({translateX:e});a>g[b].step&&b++;k.legendGroup.attr({translateY:Math.round(c+g[b].height/2)});k._legendItemPos[1]=
c+g[b].height/2})};h(u,"legendItemClick",function(){var g=this.chart,h=this.visible,c=this.chart.legend;c&&c.bubbleLegend&&(this.visible=!h,this.ignoreSeries=h,g=0<=g.getVisibleBubbleSeriesIndex(),c.bubbleLegend.visible!==g&&(c.update({bubbleLegend:{enabled:g}}),c.bubbleLegend.visible=g),this.visible=h)});v(n.prototype,"drawChartBox",function(g,h,c){var e=this.legend,f=0<=this.getVisibleBubbleSeriesIndex();if(e&&e.options.enabled&&e.bubbleLegend&&e.options.bubbleLegend.autoRanges&&f){var b=e.bubbleLegend.options;
f=e.bubbleLegend.predictBubbleSizes();e.bubbleLegend.updateRanges(f[0],f[1]);b.placed||(e.group.placed=!1,e.allItems.forEach(function(b){b.legendGroup.translateY=null}));e.render();this.getMargins();this.axes.forEach(function(c){c.visible&&c.render();b.placed||(c.setScale(),c.updateNames(),m(c.ticks,function(a){a.isNew=!0;a.isNewLabel=!0}))});b.placed=!0;this.getMargins();g.call(this,h,c);e.bubbleLegend.correctSizes();e.retranslateItems(e.getLinesHeights())}else g.call(this,h,c),e&&e.options.enabled&&
e.bubbleLegend&&(e.render(),e.retranslateItems(e.getLinesHeights()))});q.BubbleLegend=D;return q.BubbleLegend});O(q,"Series/Bubble/BubbleSeries.js",[q["Core/Axis/Axis.js"],q["Core/Series/Series.js"],q["Core/Color/Color.js"],q["Core/Globals.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q,z,y,F){var L=q.parse;q=z.noop;var G=F.arrayMax,B=F.arrayMin,r=F.clamp,m=F.extend,g=F.isNumber,D=F.pick,H=F.pInt,v=z.Series,u=h.seriesTypes;"";h.seriesType("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},
inside:!0,verticalAlign:"middle"},animationLimit:250,marker:{lineColor:null,lineWidth:1,fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,
isBubble:!0,pointAttribs:function(g,h){var k=this.options.marker.fillOpacity;g=v.prototype.pointAttribs.call(this,g,h);1!==k&&(g.fill=L(g.fill).setOpacity(k).get("rgba"));return g},getRadii:function(g,h,k){var c=this.zData,e=this.yData,f=k.minPxSize,b=k.maxPxSize,l=[];var a=0;for(k=c.length;a<k;a++){var m=c[a];l.push(this.getRadius(g,h,f,b,m,e[a]))}this.radii=l},getRadius:function(h,m,k,c,e,f){var b=this.options,l="width"!==b.sizeBy,a=b.zThreshold,n=m-h,p=.5;if(null===f||null===e)return null;if(g(e)){b.sizeByAbsoluteValue&&
(e=Math.abs(e-a),n=Math.max(m-a,Math.abs(h-a)),h=0);if(e<h)return k/2-1;0<n&&(p=(e-h)/n)}l&&0<=p&&(p=Math.sqrt(p));return Math.ceil(k+p*(c-k))/2},animate:function(g){!g&&this.points.length<this.options.animationLimit&&this.points.forEach(function(g){var h=g.graphic;h&&h.width&&(this.hasRendered||h.attr({x:g.plotX,y:g.plotY,width:1,height:1}),h.animate(this.markerAttribs(g),this.options.animation))},this)},hasData:function(){return!!this.processedXData.length},translate:function(){var h,n=this.data,
k=this.radii;u.scatter.prototype.translate.call(this);for(h=n.length;h--;){var c=n[h];var e=k?k[h]:0;g(e)&&e>=this.minPxSize/2?(c.marker=m(c.marker,{radius:e,width:2*e,height:2*e}),c.dlBox={x:c.plotX-e,y:c.plotY-e,width:2*e,height:2*e}):c.shapeArgs=c.plotY=c.dlBox=void 0}},alignDataLabel:u.column.prototype.alignDataLabel,buildKDTree:q,applyZones:q},{haloPath:function(g){return y.prototype.haloPath.call(this,0===g?0:(this.marker?this.marker.radius||0:0)+g)},ttBelow:!1});n.prototype.beforePadding=function(){var h=
this,m=this.len,k=this.chart,c=0,e=m,f=this.isXAxis,b=f?"xData":"yData",l=this.min,a={},n=Math.min(k.plotWidth,k.plotHeight),q=Number.MAX_VALUE,u=-Number.MAX_VALUE,v=this.max-l,y=m/v,z=[];this.series.forEach(function(b){var c=b.options;!b.bubblePadding||!b.visible&&k.options.chart.ignoreHiddenSeries||(h.allowZoomOutside=!0,z.push(b),f&&(["minSize","maxSize"].forEach(function(b){var d=c[b],e=/%$/.test(d);d=H(d);a[b]=e?n*d/100:d}),b.minPxSize=a.minSize,b.maxPxSize=Math.max(a.maxSize,a.minSize),b=b.zData.filter(g),
b.length&&(q=D(c.zMin,r(B(b),!1===c.displayNegative?c.zThreshold:-Number.MAX_VALUE,q)),u=D(c.zMax,Math.max(u,G(b))))))});z.forEach(function(a){var k=a[b],m=k.length;f&&a.getRadii(q,u,a);if(0<v)for(;m--;)if(g(k[m])&&h.dataMin<=k[m]&&k[m]<=h.max){var d=a.radii?a.radii[m]:0;c=Math.min((k[m]-l)*y-d,c);e=Math.max((k[m]-l)*y+d,e)}});z.length&&0<v&&!this.logarithmic&&(e-=m,y*=(m+Math.max(0,c)-Math.min(e,m))/m,[["min","userMin",c],["max","userMax",e]].forEach(function(a){"undefined"===typeof D(h.options[a[0]],
h[a[1]])&&(h[a[0]]+=a[2]/y)}))};""});O(q,"Series/MapBubbleSeries.js",[q["Core/Series/Series.js"],q["Core/Series/Point.js"],q["Core/Utilities.js"]],function(n,h,q){var z=q.merge,y=n.seriesTypes;y.bubble&&n.seriesType("mapbubble","bubble",{animationLimit:500,tooltip:{pointFormat:"{point.name}: {point.z}"}},{xyFromShape:!0,type:"mapbubble",pointArrayMap:["z"],getMapData:y.map.prototype.getMapData,getBox:y.map.prototype.getBox,setData:y.map.prototype.setData,setOptions:y.map.prototype.setOptions},{applyOptions:function(n,
q){return n&&"undefined"!==typeof n.lat&&"undefined"!==typeof n.lon?h.prototype.applyOptions.call(this,z(n,this.series.chart.fromLatLonToPoint(n)),q):y.map.prototype.pointClass.prototype.applyOptions.call(this,n,q)},isValid:function(){return"number"===typeof this.z},ttBelow:!1});""});O(q,"Series/HeatmapSeries.js",[q["Core/Series/Series.js"],q["Mixins/ColorMapSeries.js"],q["Core/Globals.js"],q["Mixins/LegendSymbol.js"],q["Core/Renderer/SVG/SVGRenderer.js"],q["Core/Utilities.js"]],function(n,h,q,z,
y,F){var L=h.colorMapPointMixin;h=h.colorMapSeriesMixin;var G=q.noop,B=F.clamp,r=F.extend,m=F.fireEvent,g=F.isNumber,D=F.merge,H=F.pick,v=q.Series;F=n.seriesTypes;var u=y.prototype.symbols;"";n.seriesType("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,
tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}},D(h,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){v.prototype.init.apply(this,arguments);var g=this.options;g.pointRange=H(g.pointRange,g.colsize||1);this.yAxis.axisPointRange=g.rowsize||1;r(u,{ellipse:u.circle,rect:u.square})},getSymbol:v.prototype.getSymbol,setClip:function(g){var h=this.chart;v.prototype.setClip.apply(this,arguments);
(!1!==this.options.clip||g)&&this.markerGroup.clip((g||this.clipBox)&&this.sharedClipKey?h[this.sharedClipKey]:h.clipRect)},translate:function(){var g=this.options,h=g.marker&&g.marker.symbol||"",k=u[h]?h:"rect";g=this.options;var c=-1!==["circle","square"].indexOf(k);this.generatePoints();this.points.forEach(function(e){var f=e.getCellAttributes(),b={x:Math.min(f.x1,f.x2),y:Math.min(f.y1,f.y2),width:Math.max(Math.abs(f.x2-f.x1),0),height:Math.max(Math.abs(f.y2-f.y1),0)};var g=e.hasImage=0===(e.marker&&
e.marker.symbol||h||"").indexOf("url");if(c){var a=Math.abs(b.width-b.height);b.x=Math.min(f.x1,f.x2)+(b.width<b.height?0:a/2);b.y=Math.min(f.y1,f.y2)+(b.width<b.height?a/2:0);b.width=b.height=Math.min(b.width,b.height)}a={plotX:(f.x1+f.x2)/2,plotY:(f.y1+f.y2)/2,clientX:(f.x1+f.x2)/2,shapeType:"path",shapeArgs:D(!0,b,{d:u[k](b.x,b.y,b.width,b.height)})};g&&(e.marker={width:b.width,height:b.height});r(e,a)});m(this,"afterTranslate")},pointAttribs:function(g,h){var k=v.prototype.pointAttribs.call(this,
g,h),c=this.options||{},e=this.chart.options.plotOptions||{},f=e.series||{},b=e.heatmap||{};e=c.borderColor||b.borderColor||f.borderColor;f=c.borderWidth||b.borderWidth||f.borderWidth||k["stroke-width"];k.stroke=g&&g.marker&&g.marker.lineColor||c.marker&&c.marker.lineColor||e||this.color;k["stroke-width"]=f;h&&(g=D(c.states[h],c.marker&&c.marker.states[h],g.options.states&&g.options.states[h]||{}),h=g.brightness,k.fill=g.color||q.color(k.fill).brighten(h||0).get(),k.stroke=g.lineColor);return k},
markerAttribs:function(g,h){var k=g.marker||{},c=this.options.marker||{},e=g.shapeArgs||{},f={};if(g.hasImage)return{x:g.plotX,y:g.plotY};if(h){var b=c.states[h]||{};var l=k.states&&k.states[h]||{};[["width","x"],["height","y"]].forEach(function(a){f[a[0]]=(l[a[0]]||b[a[0]]||e[a[0]])+(l[a[0]+"Plus"]||b[a[0]+"Plus"]||0);f[a[1]]=e[a[1]]+(e[a[0]]-f[a[0]])/2})}return h?f:e},drawPoints:function(){var g=this;if((this.options.marker||{}).enabled||this._hasPointMarkers)v.prototype.drawPoints.call(this),this.points.forEach(function(h){h.graphic&&
h.graphic[g.chart.styledMode?"css":"animate"](g.colorAttribs(h))})},hasData:function(){return!!this.processedXData.length},getValidPoints:function(g,h){return v.prototype.getValidPoints.call(this,g,h,!0)},getBox:G,drawLegendSymbol:z.drawRectangle,alignDataLabel:F.column.prototype.alignDataLabel,getExtremes:function(){var h=v.prototype.getExtremes.call(this,this.valueData),m=h.dataMin;h=h.dataMax;g(m)&&(this.valueMin=m);g(h)&&(this.valueMax=h);return v.prototype.getExtremes.call(this)}}),D(L,{applyOptions:function(g,
h){g=q.Point.prototype.applyOptions.call(this,g,h);g.formatPrefix=g.isNull||null===g.value?"null":"point";return g},isValid:function(){return Infinity!==this.value&&-Infinity!==this.value},haloPath:function(g){if(!g)return[];var h=this.shapeArgs;return["M",h.x-g,h.y-g,"L",h.x-g,h.y+h.height+g,h.x+h.width+g,h.y+h.height+g,h.x+h.width+g,h.y-g,"Z"]},getCellAttributes:function(){var g=this.series,h=g.options,k=(h.colsize||1)/2,c=(h.rowsize||1)/2,e=g.xAxis,f=g.yAxis,b=this.options.marker||g.options.marker;
g=g.pointPlacementToXValue();var l=H(this.pointPadding,h.pointPadding,0),a={x1:B(Math.round(e.len-(e.translate(this.x-k,!1,!0,!1,!0,-g)||0)),-e.len,2*e.len),x2:B(Math.round(e.len-(e.translate(this.x+k,!1,!0,!1,!0,-g)||0)),-e.len,2*e.len),y1:B(Math.round(f.translate(this.y-c,!1,!0,!1,!0)||0),-f.len,2*f.len),y2:B(Math.round(f.translate(this.y+c,!1,!0,!1,!0)||0),-f.len,2*f.len)};[["width","x"],["height","y"]].forEach(function(c){var e=c[0];c=c[1];var f=c+"1",g=c+"2",h=Math.abs(a[f]-a[g]),k=b&&b.lineWidth||
0,m=Math.abs(a[f]+a[g])/2;b[e]&&b[e]<h&&(a[f]=m-b[e]/2-k/2,a[g]=m+b[e]/2+k/2);l&&("y"===c&&(f=g,g=c+"1"),a[f]+=l,a[g]-=l)});return a}}));""});O(q,"Extensions/GeoJSON.js",[q["Core/Chart/Chart.js"],q["Core/Globals.js"],q["Core/Utilities.js"]],function(n,h,q){function z(h,m){var g,n=!1,r=h.x,q=h.y;h=0;for(g=m.length-1;h<m.length;g=h++){var u=m[h][1]>q;var y=m[g][1]>q;u!==y&&r<(m[g][0]-m[h][0])*(q-m[h][1])/(m[g][1]-m[h][1])+m[h][0]&&(n=!n)}return n}var y=h.win,F=q.error,L=q.extend,G=q.format,B=q.merge;
q=q.wrap;"";n.prototype.transformFromLatLon=function(h,m){var g,n=(null===(g=this.userOptions.chart)||void 0===g?void 0:g.proj4)||y.proj4;if(!n)return F(21,!1,this),{x:0,y:null};h=n(m.crs,[h.lon,h.lat]);g=m.cosAngle||m.rotation&&Math.cos(m.rotation);n=m.sinAngle||m.rotation&&Math.sin(m.rotation);h=m.rotation?[h[0]*g+h[1]*n,-h[0]*n+h[1]*g]:h;return{x:((h[0]-(m.xoffset||0))*(m.scale||1)+(m.xpan||0))*(m.jsonres||1)+(m.jsonmarginX||0),y:(((m.yoffset||0)-h[1])*(m.scale||1)+(m.ypan||0))*(m.jsonres||1)-
(m.jsonmarginY||0)}};n.prototype.transformToLatLon=function(h,m){if("undefined"===typeof y.proj4)F(21,!1,this);else{h={x:((h.x-(m.jsonmarginX||0))/(m.jsonres||1)-(m.xpan||0))/(m.scale||1)+(m.xoffset||0),y:((-h.y-(m.jsonmarginY||0))/(m.jsonres||1)+(m.ypan||0))/(m.scale||1)+(m.yoffset||0)};var g=m.cosAngle||m.rotation&&Math.cos(m.rotation),n=m.sinAngle||m.rotation&&Math.sin(m.rotation);m=y.proj4(m.crs,"WGS84",m.rotation?{x:h.x*g+h.y*-n,y:h.x*n+h.y*g}:h);return{lat:m.y,lon:m.x}}};n.prototype.fromPointToLatLon=
function(h){var m=this.mapTransforms,g;if(m){for(g in m)if(Object.hasOwnProperty.call(m,g)&&m[g].hitZone&&z({x:h.x,y:-h.y},m[g].hitZone.coordinates[0]))return this.transformToLatLon(h,m[g]);return this.transformToLatLon(h,m["default"])}F(22,!1,this)};n.prototype.fromLatLonToPoint=function(h){var m=this.mapTransforms,g;if(!m)return F(22,!1,this),{x:0,y:null};for(g in m)if(Object.hasOwnProperty.call(m,g)&&m[g].hitZone){var n=this.transformFromLatLon(h,m[g]);if(z({x:n.x,y:-n.y},m[g].hitZone.coordinates[0]))return n}return this.transformFromLatLon(h,
m["default"])};h.geojson=function(h,m,g){var n=[],q=[],r=function(g){g.forEach(function(g,h){0===h?q.push(["M",g[0],-g[1]]):q.push(["L",g[0],-g[1]])})};m=m||"map";h.features.forEach(function(g){var h=g.geometry,p=h.type;h=h.coordinates;g=g.properties;var k;q=[];"map"===m||"mapbubble"===m?("Polygon"===p?(h.forEach(r),q.push(["Z"])):"MultiPolygon"===p&&(h.forEach(function(c){c.forEach(r)}),q.push(["Z"])),q.length&&(k={path:q})):"mapline"===m?("LineString"===p?r(h):"MultiLineString"===p&&h.forEach(r),
q.length&&(k={path:q})):"mappoint"===m&&"Point"===p&&(k={x:h[0],y:-h[1]});k&&n.push(L(k,{name:g.name||g.NAME,properties:g}))});g&&h.copyrightShort&&(g.chart.mapCredits=G(g.chart.options.credits.mapText,{geojson:h}),g.chart.mapCreditsFull=G(g.chart.options.credits.mapTextFull,{geojson:h}));return n};q(n.prototype,"addCredits",function(h,m){m=B(!0,this.options.credits,m);this.mapCredits&&(m.href=null);h.call(this,m);this.credits&&this.mapCreditsFull&&this.credits.attr({title:this.mapCreditsFull})})});
O(q,"masters/modules/map.src.js",[],function(){});O(q,"masters/highmaps.src.js",[q["masters/highcharts.src.js"]],function(n){n.product="Highmaps";return n});q["masters/highmaps.src.js"]._modules=q;return q["masters/highmaps.src.js"]});
//# sourceMappingURL=highmaps.js.map;
/*
 Highcharts JS v8.2.2 (2020-10-22)

 Data module

 (c) 2012-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/data",["highcharts"],function(q){b(q);b.Highcharts=q;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function q(b,x,q,v){b.hasOwnProperty(x)||(b[x]=v.apply(null,q))}b=b?b._modules:{};q(b,"Extensions/Ajax.js",[b["Core/Globals.js"],b["Core/Utilities.js"]],function(b,x){var q=x.merge,v=x.objectEach;b.ajax=function(b){var m=
q(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},b);b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var r=new XMLHttpRequest;if(!m.url)return!1;r.open(m.type.toUpperCase(),m.url,!0);m.headers["Content-Type"]||r.setRequestHeader("Content-Type",b[m.dataType]||b.text);v(m.headers,function(b,m){r.setRequestHeader(m,b)});r.onreadystatechange=function(){if(4===r.readyState){if(200===r.status){var b=r.responseText;if("json"===
m.dataType)try{b=JSON.parse(b)}catch(C){m.error&&m.error(r,C);return}return m.success&&m.success(b)}m.error&&m.error(r,r.responseText)}};try{m.data=JSON.stringify(m.data)}catch(O){}r.send(m.data||!0)};b.getJSON=function(q,m){b.ajax({url:q,success:m,dataType:"json",headers:{"Content-Type":"text/plain"}})};return{ajax:b.ajax,getJSON:b.getJSON}});q(b,"Extensions/Data.js",[b["Extensions/Ajax.js"],b["Core/Series/Series.js"],b["Core/Chart/Chart.js"],b["Core/Globals.js"],b["Core/Series/Point.js"],b["Core/Utilities.js"]],
function(b,q,H,v,I,m){var r=b.ajax,x=v.doc;b=m.addEvent;var C=m.defined,J=m.extend,K=m.fireEvent,E=m.isNumber,B=m.merge,L=m.objectEach,M=m.pick,N=m.splat,D=q.seriesTypes;q=function(){function b(a,c,f){this.options=this.rawColumns=this.firstRowAsNames=this.chartOptions=this.chart=void 0;this.dateFormats={"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(a){return a?Date.UTC(+a[1],a[2]-1,+a[3]):NaN}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
parser:function(a){return a?Date.UTC(+a[3],a[2]-1,+a[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return a?Date.UTC(+a[3],a[1]-1,+a[2]):NaN}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){if(!a)return NaN;var c=+a[3];c=c>(new Date).getFullYear()-2E3?c+1900:c+2E3;return Date.UTC(c,a[2]-1,+a[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
parser:function(a){return a?Date.UTC(+a[3]+2E3,a[1]-1,+a[2]):NaN}}};this.init(a,c,f)}b.prototype.init=function(a,c,f){var d=a.decimalPoint;c&&(this.chartOptions=c);f&&(this.chart=f);"."!==d&&","!==d&&(d=void 0);this.options=a;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=M(a.firstRowAsNames,this.firstRowAsNames,!0);this.decimalRegex=d&&new RegExp("^(-?[0-9]+)"+d+"([0-9]+)$");this.rawColumns=[];if(this.columns.length){this.dataFound();var h=!0}this.hasURLOption(a)&&(clearTimeout(this.liveDataTimeout),
h=!1);h||(h=this.fetchLiveData());h||(h=!!this.parseCSV().length);h||(h=!!this.parseTable().length);h||(h=this.parseGoogleSpreadsheet());!h&&a.afterComplete&&a.afterComplete()};b.prototype.hasURLOption=function(a){return!(!a||!(a.rowsURL||a.csvURL||a.columnsURL))};b.prototype.getColumnDistribution=function(){var a=this.chartOptions,c=this.options,f=[],d=function(a){return(D[a||"line"].prototype.pointArrayMap||[0]).length},h=a&&a.chart&&a.chart.type,g=[],b=[],l=0;c=c&&c.seriesMapping||a&&a.series&&
a.series.map(function(){return{x:0}})||[];var e;(a&&a.series||[]).forEach(function(a){g.push(d(a.type||h))});c.forEach(function(a){f.push(a.x||0)});0===f.length&&f.push(0);c.forEach(function(c){var f=new G,k=g[l]||d(h),n=(a&&a.series||[])[l]||{},m=D[n.type||h||"line"].prototype.pointArrayMap,y=m||["y"];(C(c.x)||n.isCartesian||!m)&&f.addColumnReader(c.x,"x");L(c,function(a,c){"x"!==c&&f.addColumnReader(a,c)});for(e=0;e<k;e++)f.hasReader(y[e])||f.addColumnReader(void 0,y[e]);b.push(f);l++});c=D[h||
"line"].prototype.pointArrayMap;"undefined"===typeof c&&(c=["y"]);this.valueCount={global:d(h),xColumns:f,individual:g,seriesBuilders:b,globalPointArrayMap:c}};b.prototype.dataFound=function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()};b.prototype.parseCSV=function(a){function c(a,c,f,d){function b(c){k=a[c];l=a[c-1];p=a[c+1]}function h(a){w.length<t+1&&w.push([a]);w[t][w[t].length-
1]!==a&&w[t].push(a)}function g(){e>u||u>m?(++u,n=""):(!isNaN(parseFloat(n))&&isFinite(n)?(n=parseFloat(n),h("number")):isNaN(Date.parse(n))?h("string"):(n=n.replace(/\//g,"-"),h("date")),A.length<t+1&&A.push([]),f||(A[t][c]=n),n="",++t,++u)}var z=0,k="",l="",p="",n="",u=0,t=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;z<a.length;z++){b(z);if("#"===k){g();return}if('"'===k)for(b(++z);z<a.length&&('"'!==k||'"'===l||'"'===p);){if('"'!==k||'"'===k&&'"'!==l)n+=k;b(++z)}else d&&d[k]?d[k](k,n)&&g():k===
y?g():n+=k}g()}}function f(a){var c=0,f=0,d=!1;a.some(function(a,d){var b=!1,h="";if(13<d)return!0;for(var g=0;g<a.length;g++){d=a[g];var k=a[g+1];var e=a[g-1];if("#"===d)break;if('"'===d)if(b){if('"'!==e&&'"'!==k){for(;" "===k&&g<a.length;)k=a[++g];"undefined"!==typeof n[k]&&n[k]++;b=!1}}else b=!0;else"undefined"!==typeof n[d]?(h=h.trim(),isNaN(Date.parse(h))?!isNaN(h)&&isFinite(h)||n[d]++:n[d]++,h=""):h+=d;","===d&&f++;"."===d&&c++}});d=n[";"]>n[","]?";":",";b.decimalPoint||(b.decimalPoint=c>f?
".":",",h.decimalRegex=new RegExp("^(-?[0-9]+)"+b.decimalPoint+"([0-9]+)$"));return d}function d(a,c){var d=[],f=0,g=!1,k=[],n=[],e;if(!c||c>a.length)c=a.length;for(;f<c;f++)if("undefined"!==typeof a[f]&&a[f]&&a[f].length){var l=a[f].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");d=["","",""];for(e=0;e<l.length;e++)e<d.length&&(l[e]=parseInt(l[e],10),l[e]&&(n[e]=!n[e]||n[e]<l[e]?l[e]:n[e],"undefined"!==typeof k[e]?k[e]!==l[e]&&(k[e]=!1):k[e]=l[e],31<l[e]?d[e]=100>l[e]?
"YY":"YYYY":12<l[e]&&31>=l[e]?(d[e]="dd",g=!0):d[e].length||(d[e]="mm")))}if(g){for(e=0;e<k.length;e++)!1!==k[e]?12<n[e]&&"YY"!==d[e]&&"YYYY"!==d[e]&&(d[e]="YY"):12<n[e]&&"mm"===d[e]&&(d[e]="dd");3===d.length&&"dd"===d[1]&&"dd"===d[2]&&(d[2]="YY");a=d.join("/");return(b.dateFormats||h.dateFormats)[a]?a:(K("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var h=this,b=a||this.options,k=b.csv;a="undefined"!==typeof b.startRow&&b.startRow?b.startRow:0;var l=b.endRow||Number.MAX_VALUE,e="undefined"!==
typeof b.startColumn&&b.startColumn?b.startColumn:0,m=b.endColumn||Number.MAX_VALUE,p=0,w=[],n={",":0,";":0,"\t":0};var A=this.columns=[];k&&b.beforeParse&&(k=b.beforeParse.call(this,k));if(k){k=k.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(b.lineDelimiter||"\n");if(!a||0>a)a=0;if(!l||l>=k.length)l=k.length-1;if(b.itemDelimiter)var y=b.itemDelimiter;else y=null,y=f(k);var t=0;for(p=a;p<=l;p++)"#"===k[p][0]?t++:c(k[p],p-a-t);b.columnTypes&&0!==b.columnTypes.length||!w.length||!w[0].length||"date"!==
w[0][1]||b.dateFormat||(b.dateFormat=d(A[0]));this.dataFound()}return A};b.prototype.parseTable=function(){var a=this.options,c=a.table,f=this.columns||[],d=a.startRow||0,b=a.endRow||Number.MAX_VALUE,g=a.startColumn||0,k=a.endColumn||Number.MAX_VALUE;c&&("string"===typeof c&&(c=x.getElementById(c)),[].forEach.call(c.getElementsByTagName("tr"),function(a,c){c>=d&&c<=b&&[].forEach.call(a.children,function(a,b){var h=f[b-g],e=1;if(("TD"===a.tagName||"TH"===a.tagName)&&b>=g&&b<=k)for(f[b-g]||(f[b-g]=
[]),f[b-g][c-d]=a.innerHTML;c-d>=e&&void 0===h[c-d-e];)h[c-d-e]=null,e++})}),this.dataFound());return f};b.prototype.fetchLiveData=function(){function a(h){function e(e,l,n){function m(){g&&f.liveDataURL===e&&(c.liveDataTimeout=setTimeout(a,k))}if(!e||0!==e.indexOf("http"))return e&&d.error&&d.error("Invalid URL"),!1;h&&(clearTimeout(c.liveDataTimeout),f.liveDataURL=e);r({url:e,dataType:n||"json",success:function(a){f&&f.series&&l(a);m()},error:function(a,c){3>++b&&m();return d.error&&d.error(c,a)}});
return!0}e(l.csvURL,function(a){f.update({data:{csv:a}})},"text")||e(l.rowsURL,function(a){f.update({data:{rows:a}})})||e(l.columnsURL,function(a){f.update({data:{columns:a}})})}var c=this,f=this.chart,d=this.options,b=0,g=d.enablePolling,k=1E3*(d.dataRefreshRate||2),l=B(d);if(!this.hasURLOption(d))return!1;1E3>k&&(k=1E3);delete d.csvURL;delete d.rowsURL;delete d.columnsURL;a(!0);return this.hasURLOption(d)};b.prototype.parseGoogleSpreadsheet=function(){function a(c){var b=["https://spreadsheets.google.com/feeds/cells",
d,g,"public/values?alt=json"].join("/");r({url:b,dataType:"json",success:function(d){c(d);f.enablePolling&&setTimeout(function(){a(c)},1E3*(f.dataRefreshRate||2))},error:function(a,c){return f.error&&f.error(c,a)}})}var c=this,f=this.options,d=f.googleSpreadsheetKey,b=this.chart,g=f.googleSpreadsheetWorksheet||1,k=f.startRow||0,l=f.endRow||Number.MAX_VALUE,e=f.startColumn||0,m=f.endColumn||Number.MAX_VALUE,p=1E3*(f.dataRefreshRate||2);4E3>p&&(p=4E3);d&&(delete f.googleSpreadsheetKey,a(function(a){var d=
[];a=a.feed.entry;var f=(a||[]).length,h=0,g;if(!a||0===a.length)return!1;for(g=0;g<f;g++){var p=a[g];h=Math.max(h,p.gs$cell.col)}for(g=0;g<h;g++)g>=e&&g<=m&&(d[g-e]=[]);for(g=0;g<f;g++){p=a[g];h=p.gs$cell.row-1;var q=p.gs$cell.col-1;if(q>=e&&q<=m&&h>=k&&h<=l){var u=p.gs$cell||p.content;p=null;u.numericValue?p=0<=u.$t.indexOf("/")||0<=u.$t.indexOf("-")?u.$t:0<u.$t.indexOf("%")?100*parseFloat(u.numericValue):parseFloat(u.numericValue):u.$t&&u.$t.length&&(p=u.$t);d[q-e][h-k]=p}}d.forEach(function(a){for(g=
0;g<a.length;g++)"undefined"===typeof a[g]&&(a[g]=null)});b&&b.series?b.update({data:{columns:d}}):(c.columns=d,c.dataFound())}));return!1};b.prototype.trim=function(a,c){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),c&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a};b.prototype.parseTypes=function(){for(var a=this.columns,c=a.length;c--;)this.parseColumn(a[c],c)};b.prototype.parseColumn=function(a,c){var f=this.rawColumns,
d=this.columns,b=a.length,g=this.firstRowAsNames,k=-1!==this.valueCount.xColumns.indexOf(c),l,e=[],m=this.chartOptions,p,q=(this.options.columnTypes||[])[c];m=k&&(m&&m.xAxis&&"category"===N(m.xAxis)[0].type||"string"===q);for(f[c]||(f[c]=[]);b--;){var n=e[b]||a[b];var r=this.trim(n);var F=this.trim(n,!0);var t=parseFloat(F);"undefined"===typeof f[c][b]&&(f[c][b]=r);m||0===b&&g?a[b]=""+r:+F===t?(a[b]=t,31536E6<t&&"float"!==q?a.isDatetime=!0:a.isNumeric=!0,"undefined"!==typeof a[b+1]&&(p=t>a[b+1])):
(r&&r.length&&(l=this.parseDate(n)),k&&E(l)&&"float"!==q?(e[b]=n,a[b]=l,a.isDatetime=!0,"undefined"!==typeof a[b+1]&&(n=l>a[b+1],n!==p&&"undefined"!==typeof p&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,b=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),p=n)):(a[b]=""===r?null:r,0!==b&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)))}k&&a.mixed&&(d[c]=f[c]);if(k&&p&&this.options.sort)for(c=0;c<d.length;c++)d[c].reverse(),g&&d[c].unshift(d[c].pop())};
b.prototype.parseDate=function(a){var c=this.options.parseDate,b,d=this.options.dateFormat||this.dateFormat,h;if(c)var g=c(a);else if("string"===typeof a){if(d)(c=this.dateFormats[d])||(c=this.dateFormats["YYYY/mm/dd"]),(h=a.match(c.regex))&&(g=c.parser(h));else for(b in this.dateFormats)if(c=this.dateFormats[b],h=a.match(c.regex)){this.dateFormat=b;this.alternativeFormat=c.alternative;g=c.parser(h);break}h||(h=Date.parse(a),"object"===typeof h&&null!==h&&h.getTime?g=h.getTime()-6E4*h.getTimezoneOffset():
E(h)&&(g=h-6E4*(new Date(h)).getTimezoneOffset()))}return g};b.prototype.rowsToColumns=function(a){var c,b;if(a){var d=[];var h=a.length;for(c=0;c<h;c++){var g=a[c].length;for(b=0;b<g;b++)d[b]||(d[b]=[]),d[b][c]=a[c][b]}}return d};b.prototype.getData=function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)};b.prototype.parsed=function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)};b.prototype.getFreeIndexes=function(a,c){var b,d=[],h=[];for(b=0;b<a;b+=
1)d.push(!0);for(a=0;a<c.length;a+=1){var g=c[a].getReferencedColumnIndexes();for(b=0;b<g.length;b+=1)d[g[b]]=!1}for(b=0;b<d.length;b+=1)d[b]&&h.push(b);return h};b.prototype.complete=function(){var a=this.columns,b,f=this.options,d,h,g=[];if(f.complete||f.afterComplete){if(this.firstRowAsNames)for(d=0;d<a.length;d++)a[d].name=a[d].shift();var k=[];var l=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(d=0;d<this.valueCount.seriesBuilders.length;d++){var e=this.valueCount.seriesBuilders[d];
e.populateColumns(l)&&g.push(e)}for(;0<l.length;){e=new G;e.addColumnReader(0,"x");d=l.indexOf(0);-1!==d&&l.splice(d,1);for(d=0;d<this.valueCount.global;d++)e.addColumnReader(void 0,this.valueCount.globalPointArrayMap[d]);e.populateColumns(l)&&g.push(e)}0<g.length&&0<g[0].readers.length&&(e=a[g[0].readers[0].columnIndex],"undefined"!==typeof e&&(e.isDatetime?b="datetime":e.isNumeric||(b="category")));if("category"===b)for(d=0;d<g.length;d++)for(e=g[d],l=0;l<e.readers.length;l++)"x"===e.readers[l].configName&&
(e.readers[l].configName="name");for(d=0;d<g.length;d++){e=g[d];l=[];for(h=0;h<a[0].length;h++)l[h]=e.read(a,h);k[d]={data:l};e.name&&(k[d].name=e.name);"category"===b&&(k[d].turboThreshold=0)}a={series:k};b&&(a.xAxis={type:b},"category"===b&&(a.xAxis.uniqueNames=!1));f.complete&&f.complete(a);f.afterComplete&&f.afterComplete(a)}};b.prototype.update=function(a,b){var c=this.chart;a&&(a.afterComplete=function(a){a&&(a.xAxis&&c.xAxis[0]&&a.xAxis.type===c.xAxis[0].options.type&&delete a.xAxis,c.update(a,
b,!0))},B(!0,c.options.data,a),this.init(c.options.data))};return b}();v.data=function(b,a,c){return new v.Data(b,a,c)};b(H,"init",function(b){var a=this,c=b.args[0]||{},f=b.args[1];c&&c.data&&!a.hasDataDef&&(a.hasDataDef=!0,a.data=new v.Data(J(c.data,{afterComplete:function(b){var d;if(Object.hasOwnProperty.call(c,"series"))if("object"===typeof c.series)for(d=Math.max(c.series.length,b&&b.series?b.series.length:0);d--;){var g=c.series[d]||{};c.series[d]=B(g,b&&b.series?b.series[d]:{})}else delete c.series;
c=B(b,c);a.init(c,f)}}),c,a),b.preventDefault())});var G=function(){function b(){this.readers=[];this.pointIsArray=!0;this.name=void 0}b.prototype.populateColumns=function(a){var b=!0;this.readers.forEach(function(b){"undefined"===typeof b.columnIndex&&(b.columnIndex=a.shift())});this.readers.forEach(function(a){"undefined"===typeof a.columnIndex&&(b=!1)});return b};b.prototype.read=function(a,b){var c=this.pointIsArray,d=c?[]:{};this.readers.forEach(function(g){var f=a[g.columnIndex][b];c?d.push(f):
0<g.configName.indexOf(".")?I.prototype.setNestedProperty(d,f,g.configName):d[g.configName]=f});if("undefined"===typeof this.name&&2<=this.readers.length){var h=this.getReferencedColumnIndexes();2<=h.length&&(h.shift(),h.sort(function(a,b){return a-b}),this.name=a[h.shift()].name)}return d};b.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&"undefined"!==typeof b&&(this.pointIsArray=!1)};b.prototype.getReferencedColumnIndexes=function(){var a,
b=[];for(a=0;a<this.readers.length;a+=1){var f=this.readers[a];"undefined"!==typeof f.columnIndex&&b.push(f.columnIndex)}return b};b.prototype.hasReader=function(a){var b;for(b=0;b<this.readers.length;b+=1){var f=this.readers[b];if(f.configName===a)return!0}};return b}();v.Data=q;return v.Data});q(b,"masters/modules/data.src.js",[],function(){})});
//# sourceMappingURL=data.js.map;
/*
 Highcharts JS v8.2.2 (2020-10-22)

 Exporting module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/exporting",["highcharts"],function(q){e(q);e.Highcharts=q;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function q(e,l,g,k){e.hasOwnProperty(l)||(e[l]=k.apply(null,g))}e=e?e._modules:{};q(e,"Extensions/FullScreen.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,l,g){var k=g.addEvent;
g=function(){function e(f){this.chart=f;this.isOpen=!1;f=f.renderTo;this.browserProps||("function"===typeof f.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:f.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:f.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",
requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:f.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}e.prototype.close=function(){var f=this.chart;if(this.isOpen&&this.browserProps&&f.container.ownerDocument instanceof Document)f.container.ownerDocument[this.browserProps.exitFullscreen]();this.unbindFullscreenEvent&&this.unbindFullscreenEvent();this.isOpen=!1;
this.setButtonText()};e.prototype.open=function(){var f=this,e=f.chart;if(f.browserProps){f.unbindFullscreenEvent=k(e.container.ownerDocument,f.browserProps.fullscreenChange,function(){f.isOpen?(f.isOpen=!1,f.close()):(f.isOpen=!0,f.setButtonText())});var g=e.renderTo[f.browserProps.requestFullscreen]();if(g)g["catch"](function(){alert("Full screen is not supported inside a frame.")});k(e,"destroy",f.unbindFullscreenEvent)}};e.prototype.setButtonText=function(){var f,e=this.chart,g=e.exportDivElements,
k=e.options.exporting,l=null===(f=null===k||void 0===k?void 0:k.buttons)||void 0===f?void 0:f.contextButton.menuItems;f=e.options.lang;(null===k||void 0===k?0:k.menuItemDefinitions)&&(null===f||void 0===f?0:f.exitFullscreen)&&f.viewFullscreen&&l&&g&&g.length&&(g[l.indexOf("viewFullscreen")].innerHTML=this.isOpen?f.exitFullscreen:k.menuItemDefinitions.viewFullscreen.text||f.viewFullscreen)};e.prototype.toggle=function(){this.isOpen?this.close():this.open()};return e}();l.Fullscreen=g;k(e,"beforeRender",
function(){this.fullscreen=new l.Fullscreen(this)});return l.Fullscreen});q(e,"Mixins/Navigation.js",[],function(){return{initUpdate:function(e){e.navigation||(e.navigation={updates:[],update:function(e,g){this.updates.forEach(function(k){k.update.call(k.context,e,g)})}})},addUpdate:function(e,l){l.navigation||this.initUpdate(l);l.navigation.updates.push({update:e,context:l})}}});q(e,"Extensions/Exporting.js",[e["Core/Chart/Chart.js"],e["Mixins/Navigation.js"],e["Core/Globals.js"],e["Core/Options.js"],
e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(e,l,g,k,q,f){var A=g.doc,H=g.isTouchDevice,y=g.win;k=k.defaultOptions;var v=f.addEvent,r=f.css,x=f.createElement,D=f.discardElement,z=f.extend,I=f.find,C=f.fireEvent,J=f.isObject,p=f.merge,E=f.objectEach,t=f.pick,K=f.removeEvent,L=f.uniqueKey,F=y.navigator.userAgent,G=g.Renderer.prototype.symbols,M=/Edge\/|Trident\/|MSIE /.test(F),N=/firefox/i.test(F);z(k.lang,{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",
printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation||(k.navigation={});p(!0,k.navigation,{buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}});p(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",
color:"#333333",background:"none",fontSize:H?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},
menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",
onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};g.post=function(a,b,c){var d=x("form",p({method:"post",action:a,enctype:"multipart/form-data"},c),{display:"none"},A.body);E(b,function(a,b){x("input",{type:"hidden",name:b,value:a},null,d)});d.submit();D(d)};g.isSafari&&g.win.matchMedia("print").addListener(function(a){g.printingChart&&(a.matches?g.printingChart.beforePrint():g.printingChart.afterPrint())});z(e.prototype,{sanitizeSVG:function(a,b){var c=a.indexOf("</svg>")+6,d=a.substr(c);
a=a.substr(0,c);b&&b.exporting&&b.exporting.allowHTML&&d&&(d='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+d.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",d+"</svg>"));a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,
'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a));return a},getChartHTML:function(){this.styledMode&&this.inlineStyles();return this.container.innerHTML},getSVG:function(a){var b,c=p(this.options,a);c.plotOptions=p(this.userOptions.plotOptions,
a&&a.plotOptions);c.time=p(this.userOptions.time,a&&a.time);var d=x("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},A.body);var f=this.renderTo.style.width;var w=this.renderTo.style.height;f=c.exporting.sourceWidth||c.chart.width||/px$/.test(f)&&parseInt(f,10)||(c.isGantt?800:600);w=c.exporting.sourceHeight||c.chart.height||/px$/.test(w)&&parseInt(w,10)||400;z(c.chart,{animation:!1,renderTo:d,forExport:!0,renderer:"SVGRenderer",width:f,height:w});
c.exporting.enabled=!1;delete c.data;c.series=[];this.series.forEach(function(a){b=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});b.isInternal||c.series.push(b)});this.axes.forEach(function(a){a.userOptions.internalKey||(a.userOptions.internalKey=L())});var g=new e(c,this.callback);a&&["xAxis","yAxis","series"].forEach(function(b){var d={};a[b]&&(d[b]=a[b],g.update(d))});this.axes.forEach(function(a){var b=I(g.axes,function(b){return b.options.internalKey===
a.userOptions.internalKey}),d=a.getExtremes(),c=d.userMin;d=d.userMax;b&&("undefined"!==typeof c&&c!==b.min||"undefined"!==typeof d&&d!==b.max)&&b.setExtremes(c,d,!0,!1)});f=g.getChartHTML();C(this,"getSVG",{chartCopy:g});f=this.sanitizeSVG(f,c);c=null;g.destroy();D(d);return f},getSVGForExport:function(a,b){var c=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},c.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||c.sourceWidth,sourceHeight:a&&a.sourceHeight||c.sourceHeight}}))},
getFilename:function(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;if(b)return b.replace(/\//g,"-");"string"===typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,""));if(!b||5>b.length)b="chart";return b},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=p(this.options.exporting,a);g.post(a.url,{filename:a.filename?
a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)},moveContainers:function(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach(function(b){a.appendChild(b)})},beforePrint:function(){var a=A.body,b=this.options.exporting.printMaxWidth,c={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0;this.pointer.reset(null,0);C(this,"beforePrint");b&&this.chartWidth>b&&(c.resetParams=[this.options.chart.width,
void 0,!1],this.setSize(b,void 0,!1));[].forEach.call(c.childNodes,function(a,b){1===a.nodeType&&(c.origDisplay[b]=a.style.display,a.style.display="none")});this.moveContainers(a);this.printReverseInfo=c},afterPrint:function(){if(this.printReverseInfo){var a=this.printReverseInfo.childNodes,b=this.printReverseInfo.origDisplay,c=this.printReverseInfo.resetParams;this.moveContainers(this.renderTo);[].forEach.call(a,function(a,c){1===a.nodeType&&(a.style.display=b[c]||"")});this.isPrinting=!1;c&&this.setSize.apply(this,
c);delete this.printReverseInfo;delete g.printingChart;C(this,"afterPrint")}},print:function(){var a=this;a.isPrinting||(g.printingChart=a,g.isSafari||a.beforePrint(),setTimeout(function(){y.focus();y.print();g.isSafari||setTimeout(function(){a.afterPrint()},1E3)},1))},contextMenu:function(a,b,c,d,e,g,k){var h=this,w=h.options.navigation,l=h.chartWidth,B=h.chartHeight,n="cache-"+a,m=h[n],u=Math.max(e,g);if(!m){h.exportContextMenu=h[n]=m=x("div",{className:a},{position:"absolute",zIndex:1E3,padding:u+
"px",pointerEvents:"auto"},h.fixedDiv||h.container);var p=x("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},m);h.styledMode||r(p,z({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},w.menuStyle));m.hideMenu=function(){r(m,{display:"none"});k&&k.setState(0);h.openMenu=!1;r(h.renderTo,{overflow:"hidden"});f.clearTimeout(m.hideTimer);C(h,"exportMenuHidden")};h.exportEvents.push(v(m,"mouseleave",function(){m.hideTimer=y.setTimeout(m.hideMenu,
500)}),v(m,"mouseenter",function(){f.clearTimeout(m.hideTimer)}),v(A,"mouseup",function(b){h.pointer.inClass(b.target,a)||m.hideMenu()}),v(m,"click",function(){h.openMenu&&m.hideMenu()}));b.forEach(function(a){"string"===typeof a&&(a=h.options.exporting.menuItemDefinitions[a]);if(J(a,!0)){if(a.separator)var b=x("hr",null,null,p);else"viewData"===a.textKey&&h.isDataTableVisible&&(a.textKey="hideData"),b=x("li",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();m.hideMenu();
a.onclick&&a.onclick.apply(h,arguments)},innerHTML:a.text||h.options.lang[a.textKey]},null,p),h.styledMode||(b.onmouseover=function(){r(this,w.menuItemHoverStyle)},b.onmouseout=function(){r(this,w.menuItemStyle)},r(b,z({cursor:"pointer"},w.menuItemStyle)));h.exportDivElements.push(b)}});h.exportDivElements.push(p,m);h.exportMenuWidth=m.offsetWidth;h.exportMenuHeight=m.offsetHeight}b={display:"block"};c+h.exportMenuWidth>l?b.right=l-c-e-u+"px":b.left=c-u+"px";d+g+h.exportMenuHeight>B&&"top"!==k.alignOptions.verticalAlign?
b.bottom=B-d-u+"px":b.top=d+g-u+"px";r(m,b);r(h.renderTo,{overflow:""});h.openMenu=!0;C(h,"exportMenuShown")},addButton:function(a){var b=this,c=b.renderer,d=p(b.options.navigation.buttonOptions,a),e=d.onclick,f=d.menuItems,g=d.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==d.enabled){var h=d.theme,k=h.states,l=k&&k.hover;k=k&&k.select;var B;b.styledMode||(h.fill=t(h.fill,"#ffffff"),h.stroke=t(h.stroke,"none"));delete h.states;
e?B=function(a){a&&a.stopPropagation();e.call(b,a)}:f&&(B=function(a){a&&a.stopPropagation();b.contextMenu(n.menuClassName,f,n.translateX,n.translateY,n.width,n.height,n);n.setState(2)});d.text&&d.symbol?h.paddingLeft=t(h.paddingLeft,25):d.text||z(h,{width:d.width,height:d.height,padding:0});b.styledMode||(h["stroke-linecap"]="round",h.fill=t(h.fill,"#ffffff"),h.stroke=t(h.stroke,"none"));var n=c.button(d.text,0,0,B,h,l,k).addClass(a.className).attr({title:t(b.options.lang[d._titleKey||d.titleKey],
"")});n.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;if(d.symbol){var m=c.symbol(d.symbol,d.symbolX-g/2,d.symbolY-g/2,g,g,{width:g,height:g}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(n);b.styledMode||m.attr({stroke:d.symbolStroke,fill:d.symbolFill,"stroke-width":d.symbolStrokeWidth||1})}n.add(b.exportingGroup).align(z(d,{width:n.width,x:t(d.x,b.buttonOffset)}),!0,"spacingBox");b.buttonOffset+=(n.width+d.buttonSpacing)*("right"===d.align?-1:1);b.exportSVGElements.push(n,
m)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var c=b.exportDivElements,d=b.exportEvents,e;a&&(a.forEach(function(a,d){a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,b[e]&&delete b[e],b.exportSVGElements[d]=a.destroy())}),a.length=0);b.exportingGroup&&(b.exportingGroup.destroy(),delete b.exportingGroup);c&&(c.forEach(function(a,d){f.clearTimeout(a.hideTimer);K(a,"mouseleave");b.exportDivElements[d]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null;
D(a)}),c.length=0);d&&(d.forEach(function(a){a()}),d.length=0)}});q.prototype.inlineToAttributes="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");q.prototype.inlineBlacklist=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/];q.prototype.unstyledElements=["clipPath","defs","desc"];e.prototype.inlineStyles=function(){function a(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+
b.toLowerCase()})}function b(c){function n(b,g){u=q=!1;if(f){for(r=f.length;r--&&!q;)q=f[r].test(g);u=!q}"transform"===g&&"none"===b&&(u=!0);for(r=e.length;r--&&!u;)u=e[r].test(g)||"function"===typeof b;u||w[g]===b&&"svg"!==c.nodeName||h[c.nodeName][g]===b||(d&&-1===d.indexOf(g)?m+=a(g)+":"+b+";":b&&c.setAttribute(a(g),b))}var m="",u,q,r;if(1===c.nodeType&&-1===g.indexOf(c.nodeName)){var t=y.getComputedStyle(c,null);var w="svg"===c.nodeName?{}:y.getComputedStyle(c.parentNode,null);if(!h[c.nodeName]){k=
l.getElementsByTagName("svg")[0];var v=l.createElementNS(c.namespaceURI,c.nodeName);k.appendChild(v);h[c.nodeName]=p(y.getComputedStyle(v,null));"text"===c.nodeName&&delete h.text.fill;k.removeChild(v)}if(N||M)for(var x in t)n(t[x],x);else E(t,n);m&&(t=c.getAttribute("style"),c.setAttribute("style",(t?t+";":"")+m));"svg"===c.nodeName&&c.setAttribute("stroke-width","1px");"text"!==c.nodeName&&[].forEach.call(c.children||c.childNodes,b)}}var c=this.renderer,d=c.inlineToAttributes,e=c.inlineBlacklist,
f=c.inlineWhitelist,g=c.unstyledElements,h={},k;c=A.createElement("iframe");r(c,{width:"1px",height:"1px",visibility:"hidden"});A.body.appendChild(c);var l=c.contentWindow.document;l.open();l.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');l.close();b(this.container.querySelector("svg"));k.parentNode.remove();c.remove()};G.menu=function(a,b,c,d){return[["M",a,b+2.5],["L",a+c,b+2.5],["M",a,b+d/2+.5],["L",a+c,b+d/2+.5],["M",a,b+d-1.5],["L",a+c,b+d-1.5]]};G.menuball=function(a,b,c,d){a=[];d=
d/3-2;return a=a.concat(this.circle(c-d,b,d,d),this.circle(c-d,b+d+4,d,d),this.circle(c-d,b+2*(d+4),d,d))};e.prototype.renderExporting=function(){var a=this,b=a.options.exporting,c=b.buttons,d=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();d&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),E(c,function(b){a.addButton(b)}),a.isDirtyExporting=!1);v(a,"destroy",a.destroyExport)};
v(e,"init",function(){var a=this;a.exporting={update:function(b,c){a.isDirtyExporting=!0;p(!0,a.options.exporting,b);t(c,!0)&&a.redraw()}};l.addUpdate(function(b,c){a.isDirtyExporting=!0;p(!0,a.options.navigation,b);t(c,!0)&&a.redraw()},a)});e.prototype.callbacks.push(function(a){a.renderExporting();v(a,"redraw",a.renderExporting)})});q(e,"masters/modules/exporting.src.js",[],function(){})});
//# sourceMappingURL=exporting.js.map;
/*
 Highcharts JS v8.2.2 (2020-10-22)

 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/drilldown",["highcharts"],function(m){c(m);c.Highcharts=m;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function m(c,m,n,y){c.hasOwnProperty(m)||(c[m]=y.apply(null,n))}c=c?c._modules:{};m(c,"Extensions/Drilldown.js",[c["Core/Animation/AnimationUtilities.js"],c["Core/Axis/Axis.js"],c["Core/Chart/Chart.js"],c["Core/Color/Color.js"],
c["Core/Globals.js"],c["Core/Options.js"],c["Core/Series/Point.js"],c["Core/Renderer/SVG/SVGRenderer.js"],c["Core/Axis/Tick.js"],c["Core/Utilities.js"]],function(c,m,n,y,w,p,z,E,B,k){var C=c.animObject,F=w.noop;c=p.defaultOptions;var q=k.addEvent,G=k.removeEvent,t=k.extend,x=k.fireEvent,H=k.format,u=k.merge,I=k.objectEach,v=k.pick,J=k.syncTimeout;p=w.seriesTypes;k=p.pie;p=p.column;var D=1;t(c.lang,{drillUpText:"\u25c1 Back to {series.name}"});c.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#003399",
fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};E.prototype.Element.prototype.fadeIn=function(a){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:v(this.newOpacity,1)},a||{duration:250})};n.prototype.addSeriesAsDrilldown=function(a,b){this.addSingleSeriesAsDrilldown(a,b);this.applyDrilldown()};n.prototype.addSingleSeriesAsDrilldown=
function(a,b){var d=a.series,e=d.xAxis,f=d.yAxis,g=[],r=[],h;var l=this.styledMode?{colorIndex:v(a.colorIndex,d.colorIndex)}:{color:a.color||d.color};this.drilldownLevels||(this.drilldownLevels=[]);var c=d.options._levelNumber||0;(h=this.drilldownLevels[this.drilldownLevels.length-1])&&h.levelNumber!==c&&(h=void 0);b=t(t({_ddSeriesId:D++},l),b);var k=d.points.indexOf(a);d.chart.series.forEach(function(a){a.xAxis!==e||a.isDrilling||(a.options._ddSeriesId=a.options._ddSeriesId||D++,a.options._colorIndex=
a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||c,h?(g=h.levelSeries,r=h.levelSeriesOptions):(g.push(a),a.purgedOptions=u({_ddSeriesId:a.options._ddSeriesId,_levelNumber:a.options._levelNumber,selected:a.options.selected},a.userOptions),r.push(a.purgedOptions)))});a=t({levelNumber:c,seriesOptions:d.options,seriesPurgedOptions:d.purgedOptions,levelSeriesOptions:r,levelSeries:g,shapeArgs:a.shapeArgs,bBox:a.graphic?a.graphic.getBBox():{},color:a.isNull?(new y(l.color)).setOpacity(0).get():
l.color,lowerSeriesOptions:b,pointOptions:d.options.data[k],pointIndex:k,oldExtremes:{xMin:e&&e.userMin,xMax:e&&e.userMax,yMin:f&&f.userMin,yMax:f&&f.userMax},resetZoomButton:this.resetZoomButton},l);this.drilldownLevels.push(a);e&&e.names&&(e.names.length=0);b=a.lowerSeries=this.addSeries(b,!1);b.options._levelNumber=c+1;e&&(e.oldPos=e.pos,e.userMin=e.userMax=null,f.userMin=f.userMax=null);d.type===b.type&&(b.animate=b.animateDrilldown||F,b.options.animation=!0)};n.prototype.applyDrilldown=function(){var a=
this.drilldownLevels;if(a&&0<a.length){var b=a[a.length-1].levelNumber;this.drilldownLevels.forEach(function(a){a.levelNumber===b&&a.levelSeries.forEach(function(a){a.options&&a.options._levelNumber===b&&a.remove(!1)})})}this.resetZoomButton&&(this.resetZoomButton.hide(),delete this.resetZoomButton);this.pointer.reset();this.redraw();this.showDrillUpButton();x(this,"afterDrilldown")};n.prototype.getDrilldownBackText=function(){var a=this.drilldownLevels;if(a&&0<a.length)return a=a[a.length-1],a.series=
a.seriesOptions,H(this.options.lang.drillUpText,a)};n.prototype.showDrillUpButton=function(){var a=this,b=this.getDrilldownBackText(),d=a.options.drilldown.drillUpButton,e;if(this.drillUpButton)this.drillUpButton.attr({text:b}).align();else{var f=(e=d.theme)&&e.states;this.drillUpButton=this.renderer.button(b,null,null,function(){a.drillUp()},e,f&&f.hover,f&&f.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox")}};
n.prototype.drillUp=function(){if(this.drilldownLevels&&0!==this.drilldownLevels.length){for(var a=this,b=a.drilldownLevels,d=b[b.length-1].levelNumber,e=b.length,f=a.series,g,c,h,l,k=function(b){f.forEach(function(a){a.options._ddSeriesId===b._ddSeriesId&&(d=a)});var d=d||a.addSeries(b,!1);d.type===h.type&&d.animateDrillupTo&&(d.animate=d.animateDrillupTo);b===c.seriesPurgedOptions&&(l=d)};e--;)if(c=b[e],c.levelNumber===d){b.pop();h=c.lowerSeries;if(!h.chart)for(g=f.length;g--;)if(f[g].options.id===
c.lowerSeriesOptions.id&&f[g].options._levelNumber===d+1){h=f[g];break}h.xData=[];c.levelSeriesOptions.forEach(k);x(a,"drillup",{seriesOptions:c.seriesPurgedOptions||c.seriesOptions});l.type===h.type&&(l.drilldownLevel=c,l.options.animation=a.options.drilldown.animation,h.animateDrillupFrom&&h.chart&&h.animateDrillupFrom(c));l.options._levelNumber=d;h.remove(!1);l.xAxis&&(g=c.oldExtremes,l.xAxis.setExtremes(g.xMin,g.xMax,!1),l.yAxis.setExtremes(g.yMin,g.yMax,!1));c.resetZoomButton&&(a.resetZoomButton=
c.resetZoomButton,a.resetZoomButton.show())}this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align();this.ddDupes.length=[];x(a,"drillupall")}};q(n,"afterInit",function(){var a=this;a.drilldown={update:function(b,d){u(!0,a.options.drilldown,b);v(d,!0)&&a.redraw()}}});q(n,"beforeShowResetZoom",function(){if(this.drillUpButton)return!1});q(n,"render",function(){(this.xAxis||[]).forEach(function(a){a.ddPoints=
{};a.series.forEach(function(b){var d,e=b.xData||[],f=b.points;for(d=0;d<e.length;d++){var c=b.options.data[d];"number"!==typeof c&&(c=b.pointClass.prototype.optionsToObject.call({series:b},c),c.drilldown&&(a.ddPoints[e[d]]||(a.ddPoints[e[d]]=[]),a.ddPoints[e[d]].push(f?f[d]:!0)))}});I(a.ticks,B.prototype.drillable)})});p.prototype.animateDrillupTo=function(a){if(!a){var b=this,d=b.drilldownLevel;this.points.forEach(function(a){var b=a.dataLabel;a.graphic&&a.graphic.hide();b&&(b.hidden="hidden"===
b.attr("visibility"),b.hidden||(b.hide(),a.connector&&a.connector.hide()))});J(function(){if(b.points){var a=[];b.data.forEach(function(b){a.push(b)});b.nodes&&(a=a.concat(b.nodes));a.forEach(function(a,b){b=b===(d&&d.pointIndex)?"show":"fadeIn";var c="show"===b?!0:void 0,e=a.dataLabel;if(a.graphic)a.graphic[b](c);e&&!e.hidden&&(e.fadeIn(),a.connector&&a.connector.fadeIn())})}},Math.max(this.chart.options.drilldown.animation.duration-50,0));delete this.animate}};p.prototype.animateDrilldown=function(a){var b=
this,d=this.chart,e=d.drilldownLevels,c,g=C(d.options.drilldown.animation),r=this.xAxis,h=d.styledMode;a||(e.forEach(function(a){b.options._ddSeriesId===a.lowerSeriesOptions._ddSeriesId&&(c=a.shapeArgs,h||(c.fill=a.color))}),c.x+=v(r.oldPos,r.pos)-r.pos,this.points.forEach(function(a){var d=a.shapeArgs;h||(d.fill=a.color);a.graphic&&a.graphic.attr(c).animate(t(a.shapeArgs,{fill:a.color||b.color}),g);a.dataLabel&&a.dataLabel.fadeIn(g)}),delete this.animate)};p.prototype.animateDrillupFrom=function(a){var b=
C(this.chart.options.drilldown.animation),d=this.group,c=d!==this.chart.columnGroup,f=this;f.trackerGroups.forEach(function(a){if(f[a])f[a].on("mouseover")});c&&delete this.group;this.points.forEach(function(e){var g=e.graphic,h=a.shapeArgs,l=function(){g.destroy();d&&c&&(d=d.destroy())};g&&h&&(delete e.graphic,f.chart.styledMode||(h.fill=a.color),b.duration?g.animate(h,u(b,{complete:l})):(g.attr(h),l()))})};k&&t(k.prototype,{animateDrillupTo:p.prototype.animateDrillupTo,animateDrillupFrom:p.prototype.animateDrillupFrom,
animateDrilldown:function(a){var b=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],d=this.chart.options.drilldown.animation;this.is("item")&&(d.duration=0);if(this.center){var c=b.shapeArgs,f=c.start,g=(c.end-f)/this.points.length,k=this.chart.styledMode;a||(this.points.forEach(function(a,e){var h=a.shapeArgs;k||(c.fill=b.color,h.fill=a.color);if(a.graphic)a.graphic.attr(u(c,{start:f+e*g,end:f+(e+1)*g}))[d?"animate":"attr"](h,d)}),delete this.animate)}}});z.prototype.doDrilldown=function(a,
b,d){var c=this.series.chart,f=c.options.drilldown,g=(f.series||[]).length;c.ddDupes||(c.ddDupes=[]);for(;g--&&!k;)if(f.series[g].id===this.drilldown&&-1===c.ddDupes.indexOf(this.drilldown)){var k=f.series[g];c.ddDupes.push(this.drilldown)}x(c,"drilldown",{point:this,seriesOptions:k,category:b,originalEvent:d,points:"undefined"!==typeof b&&this.series.xAxis.getDDPoints(b).slice(0)},function(b){var d=b.point.series&&b.point.series.chart,c=b.seriesOptions;d&&c&&(a?d.addSingleSeriesAsDrilldown(b.point,
c):d.addSeriesAsDrilldown(b.point,c))})};m.prototype.drilldownCategory=function(a,b){this.getDDPoints(a).forEach(function(d){d&&d.series&&d.series.visible&&d.doDrilldown&&d.doDrilldown(!0,a,b)});this.chart.applyDrilldown()};m.prototype.getDDPoints=function(a){return this.ddPoints&&this.ddPoints[a]||[]};B.prototype.drillable=function(){var a=this.pos,b=this.label,d=this.axis,c="xAxis"===d.coll&&d.getDDPoints,f=c&&d.getDDPoints(a),g=d.chart.styledMode;c&&(b&&f&&f.length?(b.drillable=!0,b.basicStyles||
g||(b.basicStyles=u(b.styles)),b.addClass("highcharts-drilldown-axis-label"),b.removeOnDrillableClick&&G(b.element,"click"),b.removeOnDrillableClick=q(b.element,"click",function(b){b.preventDefault();d.drilldownCategory(a,b)}),g||b.css(d.chart.options.drilldown.activeAxisLabelStyle)):b&&b.drillable&&b.removeOnDrillableClick&&(g||(b.styles={},b.css(b.basicStyles)),b.removeOnDrillableClick(),b.removeClass("highcharts-drilldown-axis-label")))};q(z,"afterInit",function(){var a=this,b=a.series;a.drilldown&&
q(a,"click",function(c){b.xAxis&&!1===b.chart.options.drilldown.allowPointDrilldown?b.xAxis.drilldownCategory(a.x,c):a.doDrilldown(void 0,void 0,c)});return a});q(w.Series,"afterDrawDataLabels",function(){var a=this.chart.options.drilldown.activeDataLabelStyle,b=this.chart.renderer,c=this.chart.styledMode;this.points.forEach(function(d){var f=d.options.dataLabels,e=v(d.dlOptions,f&&f.style,{});d.drilldown&&d.dataLabel&&("contrast"!==a.color||c||(e.color=b.getContrast(d.color||this.color)),f&&f.color&&
(e.color=f.color),d.dataLabel.addClass("highcharts-drilldown-data-label"),c||d.dataLabel.css(a).css(e))},this)});var A=function(a,b,c,e){a[c?"addClass":"removeClass"]("highcharts-drilldown-point");e||a.css({cursor:b})};q(w.Series,"afterDrawTracker",function(){var a=this.chart.styledMode;this.points.forEach(function(b){b.drilldown&&b.graphic&&A(b.graphic,"pointer",!0,a)})});q(z,"afterSetState",function(){var a=this.series.chart.styledMode;this.drilldown&&this.series.halo&&"hover"===this.state?A(this.series.halo,
"pointer",!0,a):this.series.halo&&A(this.series.halo,"auto",!1,a)})});m(c,"masters/modules/drilldown.src.js",[],function(){})});
//# sourceMappingURL=drilldown.js.map;
/*
 Highcharts JS v8.2.2 (2020-10-22)

 Client side exporting module

 (c) 2015-2019 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/offline-exporting",["highcharts","highcharts/modules/exporting"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,b,m,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,m))}a=a?a._modules:{};f(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],function(a){var b=a.win,m=b.navigator,
e=b.document,f=b.URL||b.webkitURL||b,u=/Edge\/\d+/.test(m.userAgent),D=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&f.createObjectURL){var x=b.atob(a[3]),d=new b.ArrayBuffer(x.length);d=new b.Uint8Array(d);for(var k=0;k<d.length;++k)d[k]=x.charCodeAt(k);a=new b.Blob([d],{type:a[1]});return f.createObjectURL(a)}};a=a.downloadURL=function(a,f){var d=e.createElement("a");if("string"===
typeof a||a instanceof String||!m.msSaveOrOpenBlob){a=""+a;if(u||2E6<a.length)if(a=D(a)||"",!a)throw Error("Failed to convert to blob");if("undefined"!==typeof d.download)d.href=a,d.download=f,e.body.appendChild(d),d.click(),e.body.removeChild(d);else try{var k=b.open(a,"chart");if("undefined"===typeof k||null===k)throw Error("Failed to open window");}catch(E){b.location.href=a}}else m.msSaveOrOpenBlob(a,f)};return{dataURLtoBlob:D,downloadURL:a}});f(a,"Extensions/OfflineExporting.js",[a["Core/Chart/Chart.js"],
a["Core/Globals.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"],a["Extensions/DownloadURL.js"]],function(a,b,f,e,L){function u(a,d){var g=k.getElementsByTagName("head")[0],c=k.createElement("script");c.type="text/javascript";c.src=a;c.onload=d;c.onerror=function(){F("Error loading script "+a)};g.appendChild(c)}function m(a){var b=-1<v.userAgent.indexOf("WebKit")&&0>v.userAgent.indexOf("Chrome");try{if(!b&&0>v.userAgent.toLowerCase().indexOf("firefox"))return G.createObjectURL(new d.Blob([a],
{type:"image/svg+xml;charset-utf-16"}))}catch(g){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)}function x(a,b,g,c,y,n,f,p,l){var h=new d.Image,r=function(){setTimeout(function(){var d=k.createElement("canvas"),n=d.getContext&&d.getContext("2d");try{if(n){d.height=h.height*c;d.width=h.width*c;n.drawImage(h,0,0,d.width,d.height);try{var w=d.toDataURL(b);y(w,b,g,c)}catch(I){q(a,b,g,c)}}else f(a,b,g,c)}finally{l&&l(a,b,g,c)}},M)},e=function(){p(a,b,g,c);l&&l(a,b,g,c)};var q=function(){h=
new d.Image;q=n;h.crossOrigin="Anonymous";h.onload=r;h.onerror=e;h.src=a};h.onload=r;h.onerror=e;h.src=a}function C(a,b,g,c){function f(a,b){var c=a.width.baseVal.value+2*b;b=a.height.baseVal.value+2*b;c=new d.jsPDF(b>c?"p":"l","pt",[c,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),function(a){a.parentNode.removeChild(a)});d.svg2pdf(a,c,{removeInvalid:!0});return c.output("datauristring")}function n(){l.innerHTML=a;var b=l.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["font-family",
"font-size"].forEach(function(b){for(var c=a;c&&c!==l;){if(c.style[b]){a.style[b]=c.style[b];break}c=c.parentNode}});a.style["font-family"]=a.style["font-family"]&&a.style["font-family"].split(" ").splice(-1);d=a.getElementsByTagName("title");[].forEach.call(d,function(b){a.removeChild(b)})});b=f(l.firstChild,0);try{z(b,r),c&&c()}catch(N){g(N)}}var e=!0,p=b.libURL||J().exporting.libURL,l=k.createElement("div"),h=b.type||"image/png",r=(b.filename||"chart")+"."+("image/svg+xml"===h?"svg":h.split("/")[1]),
A=b.scale||1;p="/"!==p.slice(-1)?p+"/":p;if("image/svg+xml"===h)try{if("undefined"!==typeof v.msSaveOrOpenBlob){var q=new MSBlobBuilder;q.append(a);var t=q.getBlob("image/svg+xml")}else t=m(a);z(t,r);c&&c()}catch(w){g(w)}else if("application/pdf"===h)d.jsPDF&&d.svg2pdf?n():(e=!0,u(p+"jspdf.js",function(){u(p+"svg2pdf.js",function(){n()})}));else{t=m(a);var H=function(){try{G.revokeObjectURL(t)}catch(w){}};x(t,h,{},A,function(a){try{z(a,r),c&&c()}catch(I){g(I)}},function(){var b=k.createElement("canvas"),
n=b.getContext("2d"),f=a.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*A,y=a.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*A,l=function(){n.drawSvg(a,0,0,f,y);try{z(v.msSaveOrOpenBlob?b.msToBlob():b.toDataURL(h),r),c&&c()}catch(O){g(O)}finally{H()}};b.width=f;b.height=y;d.canvg?l():(e=!0,u(p+"rgbcolor.js",function(){u(p+"canvg.js",function(){l()})}))},g,g,function(){e&&H()})}}var d=b.win,k=b.doc,E=e.addEvent,F=e.error,P=e.extend,J=e.getOptions,K=e.merge,z=L.downloadURL,G=d.URL||d.webkitURL||
d,v=d.navigator,B=/Edge\/|Trident\/|MSIE /.test(v.userAgent),M=B?150:0;b.CanVGRenderer={};a.prototype.getSVGForLocalExport=function(a,b,d,c){var g=this,n=0,f,e,l,h,k=function(){n===q.length&&c(g.sanitizeSVG(f.innerHTML,e))},r=function(a,b,c){++n;c.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);k()};g.unbindGetSVG=E(g,"getSVG",function(a){e=a.chartCopy.options;f=a.chartCopy.container.cloneNode(!0)});g.getSVGForExport(a,b);var q=f.getElementsByTagName("image");try{if(!q.length){c(g.sanitizeSVG(f.innerHTML,
e));return}var t=0;for(l=q.length;t<l;++t){var m=q[t];(h=m.getAttributeNS("http://www.w3.org/1999/xlink","href"))?x(h,"image/png",{imageElement:m},a.scale,r,d,d,d):(++n,m.parentNode.removeChild(m),k())}}catch(w){d(w)}g.unbindGetSVG()};a.prototype.exportChartLocal=function(a,b){var d=this,c=K(d.options.exporting,a),e=function(a){!1===c.fallbackToExportServer?c.error?c.error(c,a):F(28,!0):d.exportChart(c)};a=function(){return[].some.call(d.container.getElementsByTagName("image"),function(a){a=a.getAttribute("href");
return""!==a&&0!==a.indexOf("data:")})};B&&d.styledMode&&(f.prototype.inlineWhitelist=[/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/]);B&&("application/pdf"===c.type||d.container.getElementsByTagName("image").length&&
"image/svg+xml"!==c.type)||"application/pdf"===c.type&&a()?e("Image type not supported for this chart/browser."):d.getSVGForLocalExport(c,b,e,function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==c.type?e("Image type not supportedfor charts with embedded HTML"):C(a,P({filename:d.getFilename()},c),e)})};K(!0,J().exporting,{libURL:"https://code.highcharts.com/8.2.2/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",
onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}});b.downloadSVGLocal=C});f(a,"masters/modules/offline-exporting.src.js",[],function(){})});
//# sourceMappingURL=offline-exporting.js.map;
Highcharts.maps["countries/et/et-all"] = {"type":"FeatureCollection", "features": [
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[38.78084354900005,9.090418864000071],[38.716642738000075,9.087750198000037],[38.685408005000056,9.073027127000046],[38.683541099000024,9.050037711000073],[38.66722298500008,9.026232475000029],[38.65938647000007,8.985402486000055],[38.64281850800006,8.965853421000077],[38.67622715400006,8.95760486200004],[38.70842789200003,8.920915007000076],[38.74358938100005,8.902585569000053],[38.74551760400004,8.863423673000057],[38.772991760000025,8.857467391000057],[38.78059487300004,8.835919558000057],[38.82439300400006,8.841332266000052],[38.82600142900003,8.880187270000022],[38.86983131300008,8.880774936000023],[38.87944709200008,8.918314232000057],[38.901098938000075,8.94614109400004],[38.90500095200008,9.009499839000057],[38.88294377700004,9.052105380000057],[38.87632080600008,9.081584122000038],[38.82473622900005,9.075888689000067],[38.78084354900005,9.090418864000071]]]},"properties":{"Shape_Leng":1.01086910871,"Shape_Area":0.04436934999,"ADM1_EN":"Addis Ababa","ADM1_PCODE":"ET14","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[41.81170458500003,10.983851437000055],[41.78972,11.00805],[41.80055,11.03111],[41.81194,11.25792],[41.79375,11.38097],[41.75986,11.50792],[41.82902,11.74097],[41.89139,11.77361],[41.94861,11.81667],[42.05861,11.97583],[42.12722,12.09028],[42.16889,12.13722],[42.25556,12.26333],[42.30833,12.30833],[42.33944,12.39694],[42.39972,12.46972],[42.35073886500004,12.517582657000048],[42.280262185000026,12.556435585000031],[42.24238227500007,12.615565613000058],[42.13569234000005,12.745865757000047],[42.09641231900008,12.783445844000028],[42.09540235900005,12.793495823000057],[42.05023235800007,12.843125902000054],[42.01021251600008,12.92071588500005],[41.97255260900005,12.983165899000028],[41.87868261600005,13.089606055000047],[41.78642253500004,13.17532625900003],[41.737332528000024,13.231186338000043],[41.61168239600005,13.347506613000064],[41.53122235100005,13.43313676300005],[41.45948300800006,13.501189472000021],[41.378462142000046,13.569927111000027],[41.313702060000026,13.630287251000027],[41.25037208800006,13.71271734000004],[41.077301857000066,13.878547704000027],[40.836741396000036,14.084148277000054],[40.650530943000035,14.229388753000023],[40.545590627000024,14.301409044000025],[40.444510286000025,14.363459338000041],[40.38467004000006,14.389749535000021],[40.33094985500003,14.424009685000044],[40.222589421000066,14.478630022000061],[40.13991899000007,14.498050334000027],[40.05525840200005,14.486900711000033],[40.01021790500005,14.439631002000056],[39.98425632200008,14.432340698000075],[39.979576327000075,14.40987599400006],[39.990843734000066,14.381967487000054],[39.95026941200007,14.360418709000044],[39.91626741600004,14.370258854000042],[39.85311879000005,14.367098800000065],[39.838065835000066,14.380497410000032],[39.80094810700007,14.387177744000041],[39.77204903900008,14.373850666000067],[39.77920407800008,14.330532193000067],[39.771334523000064,14.319853774000023],[39.726247716000046,14.302962213000058],[39.757605709000075,14.277177362000032],[39.75730409100004,14.239843563000022],[39.742216588000076,14.234941699000046],[39.694087480000064,14.241311387000053],[39.672269655000036,14.200334724000072],[39.68199849500007,14.164686730000028],[39.74954134600006,14.151798413000051],[39.76713301700005,14.140043372000036],[39.83762477300007,14.154198463000057],[39.84399702300004,14.050258584000062],[39.85472990900007,14.030980888000045],[39.885936994000076,14.012203097000054],[39.85859366300008,13.973186820000024],[39.81565090600003,13.968239547000053],[39.817633132000026,13.942581124000071],[39.83327865100006,13.918403375000025],[39.82902222000007,13.868502307000028],[39.842246326000065,13.83840288500005],[39.83370132500005,13.821384023000064],[39.85227309800007,13.794897904000038],[39.85319733600005,13.766511068000057],[39.87419850300006,13.749403871000027],[39.87622210300003,13.680253978000053],[39.86742260400007,13.658281017000036],[39.863907174000076,13.548160815000074],[39.80383567400003,13.553725030000066],[39.76303208300004,13.571270992000052],[39.74454715000007,13.570811598000034],[39.72342470600006,13.509191865000048],[39.71951747700007,13.475681038000062],[39.727742360000036,13.422228443000051],[39.74355080700008,13.388937370000065],[39.73774666300005,13.321094395000046],[39.71972319500003,13.294554241000071],[39.785749087000056,13.262705022000034],[39.78722496900008,13.245630310000024],[39.80853293600006,13.217173927000033],[39.803772141000024,13.18967977400007],[39.81194707900005,13.155157411000062],[39.831223065000074,13.112541892000024],[39.83319579400006,13.088560810000047],[39.86305890300008,13.01970368800005],[39.86001018200005,12.96963240100007],[39.87277411900004,12.942250135000052],[39.90424742000005,12.92175437700007],[39.92935826300004,12.874393049000048],[39.96950860100003,12.81412627800006],[39.97798291700008,12.792190897000069],[39.94270781200004,12.77147870400006],[39.89904895900003,12.762307990000068],[39.83941388900007,12.713274352000042],[39.82610431200004,12.693741426000031],[39.82007780500004,12.65882725800003],[39.83257350300005,12.63437755600006],[39.806736717000035,12.596283054000025],[39.83276409800004,12.549890953000045],[39.86319581200007,12.53144859300005],[39.86818189100006,12.494316991000062],[39.88106566400006,12.484460752000075],[39.83336777900007,12.43348185700006],[39.814929224000025,12.407061931000044],[39.83087630400007,12.357500495000068],[39.817611330000034,12.324029795000058],[39.824736882000025,12.317740811000021],[39.827579085000025,12.240457897000056],[39.807546968000054,12.238868969000066],[39.79986076800003,12.194985067000061],[39.828600589000075,12.099837122000054],[39.86172473000005,12.088369026000066],[39.841262494000034,12.053548152000076],[39.876546907000034,11.974361157000033],[39.88710022400005,11.905738230000054],[39.878096897000034,11.882652047000022],[39.87487162200006,11.778754453000033],[39.92394613300007,11.700796031000039],[39.96965565900007,11.664480790000027],[39.99411318600005,11.681157761000065],[40.015285541000026,11.645552542000075],[39.99745104300007,11.612226043000021],[39.993314070000054,11.58379725900005],[40.02401273300006,11.530850727000029],[40.05487798900003,11.487684908000062],[40.06706454400006,11.442924640000058],[40.07123437700005,11.325645610000038],[40.10257758600005,11.316914857000029],[40.12280365300006,11.296106744000042],[40.14561976200008,11.255625560000055],[40.172875988000044,11.239979554000058],[40.21243796400006,11.108908145000044],[40.19379644300005,11.096367237000038],[40.195512819000044,11.068224788000066],[40.18693906100003,11.02534279400004],[40.14412840400007,10.952115029000026],[40.12377152300007,10.937639217000026],[40.169951585000035,10.873524748000023],[40.16669539000003,10.805048328000055],[40.12203130900008,10.768172395000022],[40.108423533000064,10.763825498000074],[40.10907660700008,10.72388458200004],[40.12849631900008,10.617484684000033],[40.150632407000046,10.470404321000046],[40.16158795200005,10.435340451000059],[40.16038565500003,10.300797679000027],[40.146659742000054,10.277217093000047],[40.155579610000075,10.257410691000075],[40.12899366700003,10.173546208000062],[40.15814575200005,10.090278628000021],[40.132584922000035,10.071093523000059],[40.06902491100004,10.079061598000067],[39.99356275300005,10.076897555000073],[39.98895081100005,10.088315128000033],[39.94817166800004,10.084464076000074],[39.92727482200007,10.089962566000054],[39.94161987500007,10.043069919000061],[39.924699313000076,10.01409615700004],[39.94735419300008,9.99337484800003],[40.031952431000036,9.994486964000032],[40.05890526400003,9.977105247000054],[40.08884250700004,9.934805461000053],[40.077824476000046,9.905461927000033],[40.06355910600007,9.90241310700003],[40.052670644000045,9.842197328000054],[40.03520667500004,9.842798573000039],[40.01102541600005,9.81855682500003],[40.00807342500008,9.781776156000035],[39.99115401000006,9.756725605000042],[40.009369777000074,9.732856664000053],[39.94894062800006,9.731398820000038],[39.87580034800004,9.752809007000053],[39.84977405800004,9.748358988000064],[39.83912755000006,9.723559838000028],[39.85267854400007,9.698681828000076],[39.85766258800004,9.655151854000053],[39.88379554900007,9.610633282000038],[39.877146614000026,9.576569404000054],[39.84757856300007,9.564292124000076],[39.857324161000065,9.547084830000074],[39.84709839200008,9.510716314000035],[39.84783121800007,9.481207726000036],[39.87252583800006,9.459261316000038],[39.87289182500007,9.39776355500004],[39.821455806000074,9.417440211000041],[39.78519255900005,9.395607150000046],[39.791478890000064,9.36981957200004],[39.749826330000076,9.369215018000034],[39.774872146000064,9.314217300000053],[39.78914123200008,9.304219599000021],[39.83385729500003,9.314753878000033],[39.859998318000066,9.307126238000023],[39.88598905400005,9.26935940200002],[39.85700540200003,9.270074117000036],[39.87302977300004,9.227292401000057],[39.813013316000024,9.171110356000042],[39.817420679000065,9.136314175000052],[39.877658687000064,9.14472952500006],[39.909018797000044,9.131799454000031],[39.91874867000007,9.068409475000067],[39.951868717000025,9.02998941800007],[39.947628630000054,9.003599447000056],[39.99955887700003,9.00715930900003],[40.03481900200006,8.994449229000054],[40.05109899000007,8.961359208000033],[40.03661877800005,8.906529287000069],[40.01926865200005,8.88912934700005],[40.01040852700004,8.856089392000058],[40.024218561000055,8.845049361000065],[40.06695374800006,8.843969253000068],[40.09449691700007,8.862165169000036],[40.15224936100003,8.931958967000071],[40.16988952200006,8.964498896000066],[40.23780991000007,8.99733868800007],[40.24603005200004,9.035408635000067],[40.24550016100005,9.07486859900007],[40.32702074200006,9.154658312000038],[40.40812145900003,9.28118796900003],[40.47102194900003,9.35475771800003],[40.49882213300003,9.375047621000022],[40.52841229100005,9.385457529000064],[40.60596265300006,9.391047300000025],[40.65955292800004,9.404307129000074],[40.69613891500006,9.446065145000034],[40.69618218200003,9.502225672000066],[40.70220239300005,9.536092664000023],[40.751893772000074,9.654612077000024],[40.82556475100006,9.763456219000034],[40.84733493200008,9.790326117000063],[40.94667565800006,9.88035569300007],[40.99655603300005,9.928695472000072],[41.01335621000004,9.95999537800003],[40.96580603500007,9.971685510000043],[40.94603604500003,10.001315531000046],[40.93655611200006,10.035245519000057],[40.97467667400008,10.156645228000059],[40.97882682000005,10.194675160000031],[41.00509735500003,10.318844901000034],[41.03043774400004,10.400444692000065],[41.047148080000056,10.477624518000027],[41.07130840600007,10.540984345000027],[41.08703868600003,10.60056419800003],[41.07788878000008,10.639474169000039],[41.07726892300008,10.681154098000036],[41.16642968700006,10.779713638000032],[41.19087985700003,10.796413524000059],[41.22006012700007,10.834463355000025],[41.23198029300005,10.863653268000064],[41.24075053800004,10.92136313800006],[41.26816080000003,10.957852979000052],[41.30028097600007,10.96406285200004],[41.39222140600003,10.96631252000003],[41.41008146200005,10.958472469000071],[41.484071837000045,10.966902183000059],[41.58223227000008,10.962071839000032],[41.68083272600006,10.963881473000072],[41.739543010000034,10.968331248000027],[41.76891322500006,10.991211091000025],[41.81170458500003,10.983851437000055]]]},"properties":{"Shape_Leng":16.7519712644,"Shape_Area":7.87958074271,"ADM1_EN":"Afar","ADM1_PCODE":"ET02","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[39.817611330000034,12.324029795000058],[39.76154694200005,12.303252024000074],[39.75855376100003,12.319953055000042],[39.70626514400004,12.306206621000058],[39.63227443100004,12.307654083000045],[39.60500034300003,12.270562437000024],[39.57254390300005,12.255925599000022],[39.543273525000075,12.265007941000022],[39.52266195200008,12.326414029000034],[39.507440992000056,12.332852040000034],[39.45556405600007,12.32502717500006],[39.41951424100006,12.296596726000075],[39.35015160100005,12.29841342800006],[39.32170279400003,12.304866179000044],[39.29087425500006,12.296071961000052],[39.245529419000036,12.352944384000068],[39.236354548000065,12.473085540000056],[39.20159372400008,12.582314154000073],[39.18574671600004,12.60691016900006],[39.17440127700007,12.643480483000076],[39.19887097900005,12.660395375000064],[39.23885772300008,12.66309915200003],[39.28048218300006,12.688008259000071],[39.269535044000065,12.723219788000051],[39.28093232300006,12.743338179000034],[39.267663775000074,12.77133496600004],[39.29573004800005,12.78549726600005],[39.30721557900006,12.811652772000059],[39.277685629000075,12.826024042000029],[39.279022835000035,12.856247515000064],[39.258728715000075,12.914682269000025],[39.192832,12.928084988000023],[39.16346988400005,12.948412102000077],[39.11914623200005,12.960857076000025],[39.08285895600005,12.959272311000063],[39.07414789500007,12.976086022000061],[39.03426109000003,13.00046831000003],[39.00021910600003,13.00344377600004],[38.98982390400005,13.081289800000036],[38.97860188800007,13.09896208400005],[39.036933944000054,13.134239248000029],[39.04256980100007,13.155619385000023],[38.99736778000005,13.203404457000033],[38.95582407400008,13.21201319000005],[38.95174191800004,13.237514728000065],[38.91333401900005,13.224472513000023],[38.87621835400006,13.220508148000022],[38.86310541200004,13.209497662000047],[38.80069076600006,13.247309866000023],[38.77918740800004,13.249370877000047],[38.72991659400003,13.269219220000025],[38.74181258900006,13.33983243800003],[38.73019398200006,13.365402085000028],[38.733132743000056,13.39881121600007],[38.70568553700008,13.38929888000007],[38.64863995300004,13.396521310000026],[38.62237124400008,13.411227093000036],[38.61578828300003,13.451400938000063],[38.63328095500003,13.472711336000032],[38.67643033400003,13.48344026600006],[38.66215026800006,13.531181440000069],[38.62246698300004,13.495379052000033],[38.59011241500008,13.50612402300004],[38.56207545800004,13.483329712000057],[38.51174260200003,13.472911396000029],[38.49680462400005,13.50678939200003],[38.54245898200003,13.525802209000062],[38.55394614100004,13.550308131000065],[38.48985275800004,13.558012334000068],[38.46521463300007,13.567644900000062],[38.406508159000055,13.539411139000038],[38.35995090700004,13.553004272000067],[38.34119673400005,13.537642857000037],[38.31985647500005,13.502151981000054],[38.278917156000034,13.485519139000075],[38.24312796300006,13.496734238000045],[38.200897636000036,13.480138399000055],[38.173720255000035,13.49344396600003],[38.145192748000056,13.471678589000021],[38.11532188000007,13.494262651000042],[38.059441012000036,13.467191867000054],[38.020729473000074,13.481256969000071],[38.008103955000024,13.500828980000051],[37.96838892400007,13.493693865000068],[37.94648738400008,13.46641508600004],[37.904101473000026,13.44704897400004],[37.86640019400005,13.475127249000025],[37.816905536000036,13.463175524000064],[37.80900596300006,13.51909388100006],[37.79265930500003,13.520614519000048],[37.76902466300004,13.562598913000045],[37.78414945000003,13.587719252000056],[37.774765315000025,13.611653900000022],[37.727027012000065,13.563421897000069],[37.70961749700007,13.530195776000028],[37.69414243700004,13.472426752000047],[37.65656396900005,13.441373475000034],[37.63709725600006,13.413895488000037],[37.611006289000045,13.411080451000032],[37.51778052700007,13.366474953000022],[37.47653906000005,13.367708272000073],[37.44050583400008,13.354094306000036],[37.419581863000076,13.368158366000046],[37.38865733100005,13.356305259000067],[37.36524188900006,13.359850854000058],[37.35040973300005,13.326731793000022],[37.321827248000034,13.297177615000066],[37.280647187000056,13.28494396700006],[37.25587690000003,13.294970844000034],[37.20470911800004,13.255712392000078],[37.185726628000054,13.282550094000044],[37.15031358500005,13.300761329000068],[37.098737854000035,13.316356616000064],[37.069265442000074,13.317440271000066],[37.03969357700004,13.351033380000047],[37.00184710900004,13.35668362000007],[36.90513609900006,13.388151803000028],[36.837915545000044,13.444639205000044],[36.817147515000045,13.446529213000076],[36.808622144000026,13.418499846000032],[36.78843733700006,13.40762932900003],[36.762180940000064,13.374144353000077],[36.73465985300004,13.363072466000062],[36.68510106900004,13.374785176000046],[36.66459551400004,13.36656520400004],[36.64912614800005,13.380191237000076],[36.60949644500005,13.375213016000032],[36.569510996000076,13.425268509000034],[36.56642194400007,13.446200746000045],[36.57877691900006,13.482191022000052],[36.59810236000004,13.504735359000051],[36.572427755000035,13.522249879000071],[36.56027328600004,13.563341128000047],[36.53783675300008,13.581960353000056],[36.51281608000005,13.631304600000021],[36.50439169800006,13.665134416000058],[36.477664256000025,13.693450618000043],[36.48067406800004,13.734733629000061],[36.45352451600007,13.762965645000065],[36.40902,13.6575],[36.41138,13.61555],[36.3975,13.56778],[36.2486,13.36806],[36.15736,13.03306],[36.16889,12.99],[36.15111,12.97167],[36.13534,12.92541],[36.15916,12.88139],[36.14254,12.71485],[36.11194,12.69403],[36.07229,12.7241],[36.03722,12.715],[36.01263,12.72055],[35.96472,12.71556],[35.70108,12.66612],[35.70014,12.625],[35.68624,12.60222],[35.64736,12.59153],[35.3836,12.16555],[35.28388,11.98333],[35.261084449000066,11.92768725600007],[35.28282734000004,11.88969329400004],[35.28469753600007,11.846503197000061],[35.29750410100007,11.807175506000021],[35.32571308900003,11.794483632000038],[35.33744408900003,11.773028751000027],[35.36377255800005,11.752983616000051],[35.394678371000055,11.746206013000062],[35.42178871200008,11.729397647000042],[35.47329843400007,11.736175096000068],[35.51694609800006,11.718011190000027],[35.576589014000035,11.767351612000027],[35.644907181000065,11.781448775000058],[35.661715636000054,11.79337722300005],[35.66659556900004,11.825909434000039],[35.705544444000054,11.822406479000051],[35.73676452600006,11.832813031000057],[35.80366466900006,11.838016204000041],[35.82299135000005,11.826866221000046],[35.84826476000006,11.840246103000027],[35.870564855000055,11.864775934000022],[35.87442395200003,11.885936799000035],[35.936458851000054,11.920757861000027],[35.939385128000026,11.970209798000042],[35.96581619800003,11.984583926000028],[35.99597978400004,11.926879409000037],[36.04264244900003,11.89506560700005],[36.06626463900005,11.851600541000039],[36.10523044900003,11.81589069100005],[36.117241499000045,11.774199840000051],[36.12552809500005,11.719165881000038],[36.11835755800007,11.705810793000069],[36.16499539000006,11.678176713000028],[36.18566994400004,11.690032162000023],[36.20707344500005,11.72143470800006],[36.235871693000036,11.736957523000058],[36.28290673300006,11.772664398000074],[36.308797963000075,11.80322932100006],[36.329066074000025,11.796687280000071],[36.33959920700005,11.737497499000028],[36.332064212000034,11.704052347000072],[36.34755637300003,11.696597154000074],[36.332418123000025,11.66604200300003],[36.34842141200005,11.605359639000028],[36.37935877700005,11.596136897000065],[36.41311592300008,11.53195975400007],[36.44430377300006,11.492808237000077],[36.409544390000065,11.458302047000075],[36.409947647000024,11.41391171600003],[36.49783023100008,11.443694374000074],[36.51222244400003,11.458277112000076],[36.52991016500005,11.434547089000034],[36.533094912000024,11.394058938000057],[36.551354521000064,11.38664407300007],[36.56362653100007,11.35802906400005],[36.53873465500004,11.345646435000049],[36.562419936000026,11.318338093000023],[36.55687911600006,11.302116365000074],[36.529648389000045,11.302497437000056],[36.46714241600006,11.264992662000054],[36.475830751000046,11.244666323000047],[36.467564638000056,11.215339358000051],[36.467607841000074,11.15540872500003],[36.502904681000075,11.137539042000071],[36.54933945800008,11.137815229000068],[36.56019797000005,11.113251220000052],[36.55490839500004,11.093216993000055],[36.51497943100003,11.104808821000063],[36.469853820000026,11.055211689000032],[36.444243511000025,11.050402400000053],[36.42256484600006,11.031367313000032],[36.41766966800003,11.000727715000039],[36.36579727600008,10.945663394000064],[36.33210446700008,10.887440476000052],[36.30914227900007,10.862546867000049],[36.31012811000005,10.82715027100005],[36.28225389700003,10.80386724300007],[36.285242190000076,10.74458287400006],[36.31078427700004,10.74725869200006],[36.34160323800006,10.788837210000054],[36.377216858000054,10.785756431000038],[36.37395882200008,10.758410501000071],[36.33133824500004,10.726237028000071],[36.317596673000025,10.703604919000043],[36.32419513200006,10.661657177000052],[36.28164751300005,10.60455902800004],[36.30587585200004,10.57794774100006],[36.31821832500003,10.528003484000067],[36.34361345900004,10.520897604000027],[36.38222295600008,10.489591063000034],[36.40899585000005,10.45530369100004],[36.43530218800004,10.45252511600006],[36.46271156600005,10.479181219000054],[36.52677735900005,10.482896159000063],[36.546228503000066,10.456896895000057],[36.52044581200005,10.40593973800003],[36.53924494300003,10.364979387000062],[36.58948832200008,10.368858258000046],[36.63700763600008,10.34663549000004],[36.66832541000008,10.313818870000034],[36.68539933400007,10.317595047000054],[36.69165352300007,10.357319884000049],[36.74571697300007,10.359969913000043],[36.76175988600005,10.36730949400004],[36.77660038100004,10.34596864200006],[36.869241516000045,10.340692899000032],[36.89796121000006,10.312848153000061],[36.97992079900007,10.314026481000042],[37.01326530000006,10.284938673000056],[37.06183946500005,10.281734372000074],[37.078103285000054,10.263374553000062],[37.11460535100008,10.250697416000037],[37.18181111400003,10.241264534000038],[37.19748745600003,10.213875812000026],[37.16770232300007,10.16327334600004],[37.19550498500007,10.10452590500006],[37.24074594700005,10.075610279000045],[37.26188273100007,10.076671901000054],[37.29653929800003,10.052849455000057],[37.323254586000076,10.008101796000062],[37.34930215300005,10.01194857400003],[37.35698317400005,10.040231712000036],[37.39827541200003,10.046150453000052],[37.444469594000054,10.014559267000038],[37.529236929000035,9.996176773000059],[37.55292905600004,9.958554656000047],[37.58693420000003,9.939397922000069],[37.59239668400005,9.918764587000055],[37.661852758000066,9.860484457000041],[37.680392862000076,9.862317749000056],[37.700652079000065,9.83671438400006],[37.748529878000056,9.855939269000032],[37.81602151100003,9.867150363000064],[37.84268072100008,9.89670316400003],[37.85593637300008,9.895941177000054],[37.880155012000046,9.92150822800005],[37.93874469100007,9.94407979600004],[37.95706717500008,9.938637758000027],[37.99342139200007,9.949085918000037],[38.008454707000055,9.96413482500003],[38.04358595600007,9.969779790000075],[38.080279708000035,10.015223329000037],[38.113128851000056,10.015991517000032],[38.12530269000007,10.043157056000041],[38.15056522800006,10.035121651000054],[38.170611389000044,10.057752590000064],[38.240426651000064,10.102633868000055],[38.25237559800007,10.088427973000023],[38.29527499100004,10.089247869000076],[38.32180950900005,10.10718679300004],[38.333319679000056,10.151362736000067],[38.39749999800006,10.144277915000032],[38.43004354400006,10.193132966000064],[38.41939135500007,10.21322964500007],[38.454191224000056,10.246689368000034],[38.46006729900006,10.289970320000066],[38.473721502000046,10.314608434000036],[38.48349118600004,10.365448870000023],[38.534393041000044,10.366504697000039],[38.56020932800004,10.375922873000036],[38.59911398600008,10.374108566000075],[38.63027658800007,10.382174811000027],[38.656484954000064,10.373610750000068],[38.73824377200003,10.385626615000035],[38.77214604000005,10.366160703000048],[38.80646847700007,10.368835610000076],[38.84572870900007,10.361023596000052],[38.86084376400004,10.277980960000036],[38.835273492000056,10.225733905000027],[38.83374431400006,10.161852710000062],[38.852601261000075,10.118053046000057],[38.82361612300008,10.10968152700002],[38.81094316100007,10.094408716000032],[38.72135744500008,10.051443836000033],[38.66266515900003,10.057361979000063],[38.66949909500005,10.01917198800004],[38.725445310000055,9.991341868000063],[38.796867758000076,9.967724847000056],[38.80246299400005,9.909464233000051],[38.79085286600008,9.882626782000045],[38.803028846000075,9.86211411000005],[38.807775707000076,9.819546366000054],[38.82890026900003,9.769105514000046],[38.86654203400008,9.733633362000035],[38.90934218600006,9.708731604000036],[38.974420311000074,9.761105070000042],[38.990104350000024,9.745970874000022],[39.02361671400007,9.757856779000065],[39.06887588500007,9.752956417000064],[39.09221344400004,9.763080850000051],[39.10960357600004,9.732476078000047],[39.13930268200005,9.740658277000023],[39.145374471000025,9.693345943000054],[39.17422737900006,9.694849772000055],[39.20012553200007,9.70873571900006],[39.24990599400007,9.704906936000043],[39.268117776000054,9.739742061000072],[39.30809898900003,9.74401639000007],[39.32045096500008,9.724124522000068],[39.341784939000036,9.727459945000021],[39.34448632800007,9.699004271000035],[39.36413515900006,9.701451828000074],[39.37129904600005,9.669967688000042],[39.35775050700005,9.656863755000074],[39.35204852900006,9.622053937000032],[39.38585866100004,9.630821438000055],[39.373358609000036,9.592027723000058],[39.37647344900006,9.567334510000023],[39.36060448000006,9.546063235000076],[39.312939914000026,9.535559985000077],[39.29362187000004,9.500593276000075],[39.31485021900005,9.467004079000048],[39.33856702200006,9.47478067700007],[39.37507051000006,9.467057258000068],[39.43032535700007,9.433876471000076],[39.453874523000025,9.40120186400003],[39.44564315200006,9.383906202000048],[39.420409206000045,9.37145171800006],[39.39485196800007,9.391904554000064],[39.35670594100003,9.369031534000044],[39.32511720200006,9.380519217000028],[39.29298836400005,9.349165240000048],[39.28543760000008,9.315796520000049],[39.26441627400004,9.32419096700005],[39.26620577600005,9.288451741000074],[39.284730565000075,9.27753737300003],[39.26616884500004,9.244486983000058],[39.23366221900005,9.293612357000029],[39.207188114000076,9.291940750000037],[39.17774371100006,9.271073862000037],[39.21368254200007,9.228121866000038],[39.18858872000004,9.209260136000069],[39.24952222500008,9.135586015000058],[39.29412633000004,9.149269342000025],[39.323169034000045,9.148786460000053],[39.348602914000026,9.088063156000032],[39.34702558600003,9.064174540000067],[39.29675131600004,9.053268949000028],[39.288188397000056,8.998978411000053],[39.25859961200007,8.962636106000048],[39.26538144400007,8.922385086000077],[39.24101508700005,8.888922484000034],[39.23749115600003,8.862024795000025],[39.26052330500005,8.850551866000046],[39.243854955000074,8.827681300000052],[39.27199310900005,8.783044547000031],[39.26195211600003,8.746935880000024],[39.27044801400007,8.724513068000022],[39.30530677400003,8.72172577300006],[39.32454207600006,8.746886870000026],[39.342048858000055,8.726945429000068],[39.37710117000006,8.730897078000055],[39.378164,8.791171490000067],[39.41775156800003,8.814541965000046],[39.44922661900006,8.752237944000058],[39.500750191000066,8.714812530000074],[39.533776129000046,8.757960640000022],[39.551786236000055,8.768750596000075],[39.56198677100008,8.81783961800005],[39.61702272300005,8.786868969000068],[39.66213722700007,8.81319248400007],[39.71672786700003,8.816080568000075],[39.73133270000005,8.844191349000027],[39.74801287400004,8.910277915000052],[39.746161200000074,9.01526069700003],[39.74024224400006,9.039542641000025],[39.74749581800006,9.063134944000069],[39.742452109000055,9.091257814000073],[39.79380439300007,9.112743744000056],[39.817420679000065,9.136314175000052],[39.813013316000024,9.171110356000042],[39.87302977300004,9.227292401000057],[39.85700540200003,9.270074117000036],[39.88598905400005,9.26935940200002],[39.859998318000066,9.307126238000023],[39.83385729500003,9.314753878000033],[39.78914123200008,9.304219599000021],[39.774872146000064,9.314217300000053],[39.749826330000076,9.369215018000034],[39.791478890000064,9.36981957200004],[39.78519255900005,9.395607150000046],[39.821455806000074,9.417440211000041],[39.87289182500007,9.39776355500004],[39.87252583800006,9.459261316000038],[39.84783121800007,9.481207726000036],[39.84709839200008,9.510716314000035],[39.857324161000065,9.547084830000074],[39.84757856300007,9.564292124000076],[39.877146614000026,9.576569404000054],[39.88379554900007,9.610633282000038],[39.85766258800004,9.655151854000053],[39.85267854400007,9.698681828000076],[39.83912755000006,9.723559838000028],[39.84977405800004,9.748358988000064],[39.87580034800004,9.752809007000053],[39.94894062800006,9.731398820000038],[40.009369777000074,9.732856664000053],[39.99115401000006,9.756725605000042],[40.00807342500008,9.781776156000035],[40.01102541600005,9.81855682500003],[40.03520667500004,9.842798573000039],[40.052670644000045,9.842197328000054],[40.06355910600007,9.90241310700003],[40.077824476000046,9.905461927000033],[40.08884250700004,9.934805461000053],[40.05890526400003,9.977105247000054],[40.031952431000036,9.994486964000032],[39.94735419300008,9.99337484800003],[39.924699313000076,10.01409615700004],[39.94161987500007,10.043069919000061],[39.92727482200007,10.089962566000054],[39.94817166800004,10.084464076000074],[39.98895081100005,10.088315128000033],[39.99356275300005,10.076897555000073],[40.06902491100004,10.079061598000067],[40.132584922000035,10.071093523000059],[40.15814575200005,10.090278628000021],[40.12899366700003,10.173546208000062],[40.155579610000075,10.257410691000075],[40.146659742000054,10.277217093000047],[40.16038565500003,10.300797679000027],[40.16158795200005,10.435340451000059],[40.150632407000046,10.470404321000046],[40.12849631900008,10.617484684000033],[40.10907660700008,10.72388458200004],[40.108423533000064,10.763825498000074],[40.12203130900008,10.768172395000022],[40.16669539000003,10.805048328000055],[40.169951585000035,10.873524748000023],[40.12377152300007,10.937639217000026],[40.14412840400007,10.952115029000026],[40.18693906100003,11.02534279400004],[40.195512819000044,11.068224788000066],[40.19379644300005,11.096367237000038],[40.21243796400006,11.108908145000044],[40.172875988000044,11.239979554000058],[40.14561976200008,11.255625560000055],[40.12280365300006,11.296106744000042],[40.10257758600005,11.316914857000029],[40.07123437700005,11.325645610000038],[40.06706454400006,11.442924640000058],[40.05487798900003,11.487684908000062],[40.02401273300006,11.530850727000029],[39.993314070000054,11.58379725900005],[39.99745104300007,11.612226043000021],[40.015285541000026,11.645552542000075],[39.99411318600005,11.681157761000065],[39.96965565900007,11.664480790000027],[39.92394613300007,11.700796031000039],[39.87487162200006,11.778754453000033],[39.878096897000034,11.882652047000022],[39.88710022400005,11.905738230000054],[39.876546907000034,11.974361157000033],[39.841262494000034,12.053548152000076],[39.86172473000005,12.088369026000066],[39.828600589000075,12.099837122000054],[39.79986076800003,12.194985067000061],[39.807546968000054,12.238868969000066],[39.827579085000025,12.240457897000056],[39.824736882000025,12.317740811000021],[39.817611330000034,12.324029795000058]]]},"properties":{"Shape_Leng":25.8942223233,"Shape_Area":12.9014535141,"ADM1_EN":"Amhara","ADM1_PCODE":"ET03","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[36.23861703600005,8.965110055000025],[36.22103909900005,8.98853736500007],[36.17429321100008,8.97942299600004],[36.22213471300006,8.950194146000058],[36.23861703600005,8.965110055000025]]],[[[36.68539933400007,10.317595047000054],[36.66832541000008,10.313818870000034],[36.63700763600008,10.34663549000004],[36.58948832200008,10.368858258000046],[36.53924494300003,10.364979387000062],[36.52044581200005,10.40593973800003],[36.546228503000066,10.456896895000057],[36.52677735900005,10.482896159000063],[36.46271156600005,10.479181219000054],[36.43530218800004,10.45252511600006],[36.40899585000005,10.45530369100004],[36.38222295600008,10.489591063000034],[36.34361345900004,10.520897604000027],[36.31821832500003,10.528003484000067],[36.30587585200004,10.57794774100006],[36.28164751300005,10.60455902800004],[36.32419513200006,10.661657177000052],[36.317596673000025,10.703604919000043],[36.33133824500004,10.726237028000071],[36.37395882200008,10.758410501000071],[36.377216858000054,10.785756431000038],[36.34160323800006,10.788837210000054],[36.31078427700004,10.74725869200006],[36.285242190000076,10.74458287400006],[36.28225389700003,10.80386724300007],[36.31012811000005,10.82715027100005],[36.30914227900007,10.862546867000049],[36.33210446700008,10.887440476000052],[36.36579727600008,10.945663394000064],[36.41766966800003,11.000727715000039],[36.42256484600006,11.031367313000032],[36.444243511000025,11.050402400000053],[36.469853820000026,11.055211689000032],[36.51497943100003,11.104808821000063],[36.55490839500004,11.093216993000055],[36.56019797000005,11.113251220000052],[36.54933945800008,11.137815229000068],[36.502904681000075,11.137539042000071],[36.467607841000074,11.15540872500003],[36.467564638000056,11.215339358000051],[36.475830751000046,11.244666323000047],[36.46714241600006,11.264992662000054],[36.529648389000045,11.302497437000056],[36.55687911600006,11.302116365000074],[36.562419936000026,11.318338093000023],[36.53873465500004,11.345646435000049],[36.56362653100007,11.35802906400005],[36.551354521000064,11.38664407300007],[36.533094912000024,11.394058938000057],[36.52991016500005,11.434547089000034],[36.51222244400003,11.458277112000076],[36.49783023100008,11.443694374000074],[36.409947647000024,11.41391171600003],[36.409544390000065,11.458302047000075],[36.44430377300006,11.492808237000077],[36.41311592300008,11.53195975400007],[36.37935877700005,11.596136897000065],[36.34842141200005,11.605359639000028],[36.332418123000025,11.66604200300003],[36.34755637300003,11.696597154000074],[36.332064212000034,11.704052347000072],[36.33959920700005,11.737497499000028],[36.329066074000025,11.796687280000071],[36.308797963000075,11.80322932100006],[36.28290673300006,11.772664398000074],[36.235871693000036,11.736957523000058],[36.20707344500005,11.72143470800006],[36.18566994400004,11.690032162000023],[36.16499539000006,11.678176713000028],[36.11835755800007,11.705810793000069],[36.12552809500005,11.719165881000038],[36.117241499000045,11.774199840000051],[36.10523044900003,11.81589069100005],[36.06626463900005,11.851600541000039],[36.04264244900003,11.89506560700005],[35.99597978400004,11.926879409000037],[35.96581619800003,11.984583926000028],[35.939385128000026,11.970209798000042],[35.936458851000054,11.920757861000027],[35.87442395200003,11.885936799000035],[35.870564855000055,11.864775934000022],[35.84826476000006,11.840246103000027],[35.82299135000005,11.826866221000046],[35.80366466900006,11.838016204000041],[35.73676452600006,11.832813031000057],[35.705544444000054,11.822406479000051],[35.66659556900004,11.825909434000039],[35.661715636000054,11.79337722300005],[35.644907181000065,11.781448775000058],[35.576589014000035,11.767351612000027],[35.51694609800006,11.718011190000027],[35.47329843400007,11.736175096000068],[35.42178871200008,11.729397647000042],[35.394678371000055,11.746206013000062],[35.36377255800005,11.752983616000051],[35.33744408900003,11.773028751000027],[35.32571308900003,11.794483632000038],[35.29750410100007,11.807175506000021],[35.28469753600007,11.846503197000061],[35.28282734000004,11.88969329400004],[35.261084449000066,11.92768725600007],[35.23138,11.89819],[35.16833,11.87833],[35.11625,11.85083],[35.08361,11.80555],[35.06319,11.75958],[35.05833,11.73028],[35.0668,11.64653],[35.09166,11.59889],[35.0952,11.57646],[35.08749,11.53583],[35.01333,11.36778],[34.96708,11.27486],[34.97111,11.23111],[35.0075,11.19833],[35.00555,11.17444],[34.93333,10.95666],[34.97861,10.91528],[34.97527,10.86444],[34.86062,10.73201],[34.80055,10.72333],[34.67388,10.83472],[34.59444,10.88778],[34.43972,10.78444],[34.35278,10.63167],[34.28611,10.55416],[34.34194,10.28083],[34.34833,10.23847],[34.32305,10.11722],[34.23055,10.02764],[34.20722,9.905],[34.14,9.75805],[34.08583,9.55305],[34.09499,9.45389],[34.13440686100006,8.962560775000043],[34.430651004000026,8.967436632000044],[34.503707991000056,9.004134039000064],[34.483666689000074,9.047145573000023],[34.45833001600005,9.073183166000035],[34.42683500900006,9.07179545400004],[34.393269976000056,9.11632992500006],[34.34087704800004,9.168779030000053],[34.40174218400006,9.186634573000049],[34.43956002200008,9.21557553100007],[34.45238950900006,9.257480946000044],[34.45172809500008,9.308702328000038],[34.466270465000036,9.365810855000063],[34.45180644800007,9.449110630000064],[34.51297477000003,9.448000646000025],[34.49873226600005,9.514231066000036],[34.523230916000045,9.541112503000022],[34.53214268800008,9.590564430000029],[34.54846670300003,9.62966294000006],[34.58539422700005,9.630359738000038],[34.632014748000074,9.588021403000027],[34.735137544000054,9.545301779000056],[34.782986711000035,9.55333113000006],[34.79205744500007,9.603314874000034],[34.810854103000054,9.63011872900006],[34.80996044700004,9.70224115800005],[34.79614251800007,9.73623946500004],[34.83166546500007,9.80311560000007],[34.86972697700003,9.820667072000049],[34.89768351600003,9.881757181000069],[34.88778145300006,9.908213968000041],[34.90442008500003,9.955878686000062],[34.942995980000035,9.93356731700004],[34.98818221300007,9.996766925000031],[35.01501748700008,9.995190863000062],[35.01965436100005,9.928791940000053],[35.04851353200007,9.917741245000059],[35.08102060900006,9.921920612000065],[35.088341497000044,9.950488895000035],[35.159583687000065,9.948402073000068],[35.220798401000025,9.925425696000048],[35.23074359100008,9.893252214000029],[35.27847186900004,9.907078983000076],[35.29745400500008,9.922483253000053],[35.32469285600007,9.884796300000062],[35.34980061600004,9.866075812000076],[35.36378899700003,9.813043185000026],[35.41962852800003,9.785145035000028],[35.378831148000074,9.765406404000032],[35.36508100900005,9.727466421000031],[35.41076633100005,9.713677552000036],[35.45537498500005,9.672230703000025],[35.50510615400003,9.688702257000045],[35.561087462000046,9.692018451000024],[35.594427594000024,9.656038397000032],[35.63472781400003,9.651488330000063],[35.653437895000025,9.634928304000027],[35.643579662000036,9.59455031400006],[35.647491968000054,9.553310385000032],[35.671391096000036,9.517234552000048],[35.710760712000024,9.48677192200006],[35.764992988000074,9.473350737000032],[35.77732583100004,9.440139414000043],[35.754002660000026,9.416548201000069],[35.75674797600004,9.323638114000062],[35.79719169100008,9.308617540000057],[35.85987032500003,9.324971589000029],[35.91108877400006,9.315957987000047],[35.917871966000064,9.285639052000022],[35.94932102400003,9.249153646000025],[36.03157719600006,9.233426059000067],[36.04396514700005,9.195062900000039],[36.053610656000046,9.119437129000062],[36.03402284500004,9.107416687000068],[36.02807451900003,9.055977324000025],[36.04244908600003,9.032177624000042],[36.08654582300005,9.012616791000028],[36.09697461400003,9.032414896000034],[36.08417349300004,9.05842066300005],[36.108553458000074,9.080031575000021],[36.12868639800007,9.05111736300006],[36.13142903100004,9.020788201000073],[36.15963301900007,9.02065994000003],[36.17679055000008,9.044525228000055],[36.22594920200004,9.03096793700007],[36.24647782400007,9.040962060000027],[36.207650458000046,9.06715276600005],[36.18458592800005,9.071951687000023],[36.17191229900004,9.108297185000026],[36.203947895000056,9.15734681300006],[36.228925168000046,9.229031010000028],[36.22633601000007,9.27172814000005],[36.194894704000035,9.288973481000028],[36.194597216000034,9.32628903400007],[36.21458697200006,9.332416972000033],[36.21837304700006,9.297118325000042],[36.25317940600007,9.301823312000067],[36.27022760800003,9.328369870000074],[36.295482496000034,9.301691637000033],[36.31899619500007,9.305850016000022],[36.33376793600007,9.339799325000058],[36.37471653800003,9.358019170000034],[36.46141108900008,9.357156935000035],[36.484109647000025,9.367867244000024],[36.47519087500007,9.39463723800003],[36.50726560900006,9.419345341000053],[36.514911091000045,9.444134004000034],[36.498663554000075,9.472884584000042],[36.494429858000046,9.509365743000046],[36.461168171000054,9.528057690000026],[36.400629507000076,9.51098832100007],[36.380307981000044,9.480480466000074],[36.335955124000066,9.511994007000055],[36.301025209000045,9.555515471000035],[36.26626546700004,9.568695262000062],[36.231777016000024,9.57032304300003],[36.20077737200006,9.614928768000027],[36.19186586200004,9.68787751800005],[36.17749612100005,9.701314421000063],[36.15905722600007,9.746936508000033],[36.10528661300003,9.773323643000026],[36.13647113500008,9.807447298000056],[36.128207082000074,9.852213635000055],[36.15219386800004,9.866363135000029],[36.11979873200005,9.961333164000052],[36.13989836400003,10.009705090000068],[36.184567068000035,10.049661314000048],[36.21892419200003,10.053212510000037],[36.25891955600008,10.078452010000035],[36.27189215800007,10.113087661000066],[36.33231714100003,10.13839473400003],[36.369421904000035,10.16165277600004],[36.44535089300007,10.24584416600004],[36.49091287300007,10.234268733000022],[36.51548847200007,10.239931540000043],[36.554480933000036,10.285072005000075],[36.574685618000046,10.264173395000057],[36.610570507000034,10.25922184600006],[36.65969071600006,10.27704084100003],[36.69219150500004,10.296289130000048],[36.68539933400007,10.317595047000054]]]]},"properties":{"Shape_Leng":15.6412161487,"Shape_Area":4.14930481109,"ADM1_EN":"Benishangul Gumz","ADM1_PCODE":"ET06","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[41.73461770200004,9.471483758000034],[41.77299792700006,9.491053607000026],[41.81519805100004,9.476743490000047],[41.85970826800008,9.488013330000058],[41.91337842900003,9.47246317500003],[41.938748556000064,9.479543086000035],[41.98252383100004,9.508492896000064],[42.019098978000045,9.508172774000059],[42.05213905000005,9.491952694000076],[42.067614055000035,9.474807665000071],[42.13889953700004,9.534692333000066],[42.15259966700006,9.556372258000067],[42.133409681000046,9.582492279000064],[42.12485976100004,9.61452225000005],[42.20053019100004,9.653141934000075],[42.25863541500007,9.65158173900005],[42.31814083900008,9.705661442000064],[42.33977280800008,9.719617623000033],[42.29352092700003,9.757491440000024],[42.25099084900006,9.783491543000025],[42.21335069400004,9.783741669000051],[42.18577054800005,9.773561785000027],[42.03080939300003,9.618482565000022],[42.01890934200003,9.617922606000036],[41.90613909500007,9.679302884000037],[41.87323897700003,9.683882986000071],[41.80867856300006,9.64055326600004],[41.77382847000007,9.653703360000065],[41.74860187400003,9.636353472000053],[41.74906819100005,9.60055352300003],[41.72802773800004,9.489033754000047],[41.73461770200004,9.471483758000034]]]},"properties":{"Shape_Leng":1.6925702505,"Shape_Area":0.08675747085,"ADM1_EN":"Dire Dawa","ADM1_PCODE":"ET15","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[35.11603360700008,7.645092153000064],[35.07709584100007,7.731005248000031],[34.99547325100008,7.747974243000044],[34.93197755600005,7.728168627000059],[34.93711194700006,7.764793453000038],[34.932276358000024,7.827954211000076],[34.95068663400008,7.890286446000061],[35.000615269000036,7.862321638000026],[35.013101335000044,7.882457938000073],[35.008480071000065,7.923502092000035],[35.048340566000036,7.95443646700005],[35.108557973000075,7.957113076000041],[35.141024095000034,7.989027562000047],[35.14071639700006,8.02168946100005],[35.10387878600005,8.115117707000024],[35.143271224000046,8.142853244000037],[35.13813145800003,8.181827079000072],[35.11891349000007,8.200608826000064],[35.07324599700007,8.220184827000026],[35.01825891200008,8.219643652000059],[34.96479208300008,8.247346959000026],[34.85509482500004,8.250647129000072],[34.826427111000044,8.261935566000034],[34.78580333000008,8.303639340000075],[34.79507204600003,8.326909196000031],[34.785250433000044,8.355242661000034],[34.72875182800004,8.390022244000022],[34.630335896000076,8.402000729000065],[34.57427349900007,8.403479557000026],[34.55652675400006,8.455134120000025],[34.52268710100003,8.475544933000037],[34.47119589300007,8.447576749000064],[34.43635263900006,8.421774275000075],[34.347280143000035,8.37664733300005],[34.31329640800004,8.389928504000068],[34.35743284800003,8.499928235000027],[34.35822337600007,8.52204352800004],[34.34547136800006,8.600099974000045],[34.31242902300005,8.682099813000036],[34.27938897700005,8.708837029000051],[34.255733657000064,8.702638657000023],[34.22351863200004,8.669767442000023],[34.18963902100006,8.651632735000021],[34.12424570300004,8.651479982000069],[34.1228,8.58465],[34.10555,8.55778],[34.00222,8.46028],[33.97076,8.43757],[33.85249,8.42583],[33.81874,8.41153],[33.77133,8.36775],[33.71527,8.37507],[33.69048,8.39548],[33.66999,8.43708],[33.63437,8.46715],[33.50861,8.4662],[33.38083,8.43792],[33.32673,8.45368],[33.26354,8.46153],[33.17125,8.39979],[33.16083,8.35653],[33.16583,8.27833],[33.17805,8.2225],[33.18592,8.14029],[33.16277,8.115],[33.12138,8.10097],[33.03194,7.99739],[32.9918,7.92604],[32.99683,7.88722],[33.01497,7.84606],[33.05222,7.79069],[33.09666,7.78111],[33.43916,7.74444],[33.46444,7.74403],[33.64722,7.685],[33.71249,7.65847],[33.88555,7.52542],[34.02771,7.37868],[34.03278,7.30444],[34.02708,7.24812],[34.09916,7.19972],[34.16333,7.17167],[34.19389,7.09],[34.23569,7.01972],[34.28055,6.97583],[34.29957,6.96432],[34.36097,6.95903],[34.43095,6.93541],[34.4718,6.91431],[34.48697,6.87749],[34.52882,6.74722],[34.55361,6.73569],[34.63208,6.72903],[34.67916,6.7],[34.70472,6.67778],[34.75699,6.61378],[34.85,6.36666],[34.852922775000025,6.332049399000027],[34.98497044900006,6.298803941000074],[35.01128976700005,6.28025950600005],[35.03826853400005,6.304626489000043],[35.073462548000066,6.307410026000071],[35.106107879000035,6.318904831000054],[35.13150426100003,6.395495062000066],[35.17849983100007,6.379267700000071],[35.199465521000036,6.41090398800003],[35.173851643000035,6.466523021000057],[35.18557774900006,6.489749267000036],[35.18678158600005,6.557474966000029],[35.19534260800003,6.597440955000025],[35.186250262000044,6.626927301000023],[35.19766214500004,6.680216192000046],[35.17822016700006,6.709621103000075],[35.179559546000064,6.727364908000027],[35.14677620900005,6.761095086000068],[35.07986179400007,6.81079876900003],[35.04291161900005,6.810497235000071],[34.98537100200008,6.798202512000046],[34.93366099800005,6.796293009000067],[34.94563801900006,6.826537307000024],[34.96899440000004,6.859264409000048],[34.99236460800006,6.864031074000025],[34.997882971000024,6.892863830000067],[34.973957711000025,6.925165673000038],[34.945707937000066,6.944131046000052],[34.91132545600004,6.988154524000038],[34.90208104300007,7.030915407000066],[34.88434041800008,7.030759646000035],[34.87708233300003,7.069790269000066],[34.89267251800004,7.091504588000021],[34.890591089000054,7.159336462000056],[34.89809304100004,7.184790768000028],[34.94244919000005,7.19290841000003],[34.965621224000074,7.215074367000057],[35.02081333500007,7.18578179800005],[35.05391351900005,7.18426348600002],[35.08371015600005,7.124841251000021],[35.114266403000045,7.102144963000057],[35.20456386800004,7.099613933000057],[35.23445990600004,7.137931503000061],[35.26462189100005,7.136232583000037],[35.29988931500003,7.115772707000076],[35.33078149100004,7.127092152000046],[35.35454357800006,7.118483207000054],[35.38035054000005,7.122820944000068],[35.33398643000004,7.17993301000007],[35.37285763400007,7.231027526000048],[35.34580836400005,7.238978042000042],[35.37029153000003,7.277360544000032],[35.387543648000076,7.35066745000006],[35.39229841000002,7.396183099000041],[35.367835393000064,7.414628042000061],[35.34531066900007,7.452871979000065],[35.30955471200008,7.479178306000051],[35.27260354400005,7.471477654000068],[35.209512077000056,7.471867610000061],[35.18925243500007,7.455626145000053],[35.16141289800004,7.471357534000049],[35.12240210600004,7.478600811000035],[35.13808280500007,7.512076175000061],[35.17191638400004,7.532753644000024],[35.16470639200003,7.580407574000048],[35.16630522300005,7.61487082900004],[35.11603360700008,7.645092153000064]]]},"properties":{"Shape_Leng":10.0077265251,"Shape_Area":2.56091029219,"ADM1_EN":"Gambela","ADM1_PCODE":"ET12","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[42.186329519000026,9.36175010900007],[42.168579082000065,9.362832511000022],[42.14661907300007,9.387512541000035],[42.11422889800008,9.37251266900006],[42.070468498000025,9.303942921000043],[42.060508338000034,9.265873009000074],[42.06133221300007,9.226459059000035],[42.073688238000045,9.22096302600005],[42.11240842500007,9.230742892000023],[42.14855848700006,9.206262811000045],[42.19745872100003,9.219872631000044],[42.233718742000065,9.185912564000034],[42.26471890300007,9.197887447000028],[42.27203898800008,9.215667394000036],[42.24934908700004,9.270032382000068],[42.26604928300003,9.309772269000064],[42.25851933300004,9.334412256000064],[42.27031265900007,9.361664396000037],[42.23807942700006,9.384942246000037],[42.186329519000026,9.36175010900007]]]},"properties":{"Shape_Leng":0.76366797102,"Shape_Area":0.03051183782,"ADM1_EN":"Harari","ADM1_PCODE":"ET13","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[39.817420679000065,9.136314175000052],[39.79380439300007,9.112743744000056],[39.742452109000055,9.091257814000073],[39.74749581800006,9.063134944000069],[39.74024224400006,9.039542641000025],[39.746161200000074,9.01526069700003],[39.74801287400004,8.910277915000052],[39.73133270000005,8.844191349000027],[39.71672786700003,8.816080568000075],[39.66213722700007,8.81319248400007],[39.61702272300005,8.786868969000068],[39.56198677100008,8.81783961800005],[39.551786236000055,8.768750596000075],[39.533776129000046,8.757960640000022],[39.500750191000066,8.714812530000074],[39.44922661900006,8.752237944000058],[39.41775156800003,8.814541965000046],[39.378164,8.791171490000067],[39.37710117000006,8.730897078000055],[39.342048858000055,8.726945429000068],[39.32454207600006,8.746886870000026],[39.30530677400003,8.72172577300006],[39.27044801400007,8.724513068000022],[39.26195211600003,8.746935880000024],[39.27199310900005,8.783044547000031],[39.243854955000074,8.827681300000052],[39.26052330500005,8.850551866000046],[39.23749115600003,8.862024795000025],[39.24101508700005,8.888922484000034],[39.26538144400007,8.922385086000077],[39.25859961200007,8.962636106000048],[39.288188397000056,8.998978411000053],[39.29675131600004,9.053268949000028],[39.34702558600003,9.064174540000067],[39.348602914000026,9.088063156000032],[39.323169034000045,9.148786460000053],[39.29412633000004,9.149269342000025],[39.24952222500008,9.135586015000058],[39.18858872000004,9.209260136000069],[39.21368254200007,9.228121866000038],[39.17774371100006,9.271073862000037],[39.207188114000076,9.291940750000037],[39.23366221900005,9.293612357000029],[39.26616884500004,9.244486983000058],[39.284730565000075,9.27753737300003],[39.26620577600005,9.288451741000074],[39.26441627400004,9.32419096700005],[39.28543760000008,9.315796520000049],[39.29298836400005,9.349165240000048],[39.32511720200006,9.380519217000028],[39.35670594100003,9.369031534000044],[39.39485196800007,9.391904554000064],[39.420409206000045,9.37145171800006],[39.44564315200006,9.383906202000048],[39.453874523000025,9.40120186400003],[39.43032535700007,9.433876471000076],[39.37507051000006,9.467057258000068],[39.33856702200006,9.47478067700007],[39.31485021900005,9.467004079000048],[39.29362187000004,9.500593276000075],[39.312939914000026,9.535559985000077],[39.36060448000006,9.546063235000076],[39.37647344900006,9.567334510000023],[39.373358609000036,9.592027723000058],[39.38585866100004,9.630821438000055],[39.35204852900006,9.622053937000032],[39.35775050700005,9.656863755000074],[39.37129904600005,9.669967688000042],[39.36413515900006,9.701451828000074],[39.34448632800007,9.699004271000035],[39.341784939000036,9.727459945000021],[39.32045096500008,9.724124522000068],[39.30809898900003,9.74401639000007],[39.268117776000054,9.739742061000072],[39.24990599400007,9.704906936000043],[39.20012553200007,9.70873571900006],[39.17422737900006,9.694849772000055],[39.145374471000025,9.693345943000054],[39.13930268200005,9.740658277000023],[39.10960357600004,9.732476078000047],[39.09221344400004,9.763080850000051],[39.06887588500007,9.752956417000064],[39.02361671400007,9.757856779000065],[38.990104350000024,9.745970874000022],[38.974420311000074,9.761105070000042],[38.90934218600006,9.708731604000036],[38.86654203400008,9.733633362000035],[38.82890026900003,9.769105514000046],[38.807775707000076,9.819546366000054],[38.803028846000075,9.86211411000005],[38.79085286600008,9.882626782000045],[38.80246299400005,9.909464233000051],[38.796867758000076,9.967724847000056],[38.725445310000055,9.991341868000063],[38.66949909500005,10.01917198800004],[38.66266515900003,10.057361979000063],[38.72135744500008,10.051443836000033],[38.81094316100007,10.094408716000032],[38.82361612300008,10.10968152700002],[38.852601261000075,10.118053046000057],[38.83374431400006,10.161852710000062],[38.835273492000056,10.225733905000027],[38.86084376400004,10.277980960000036],[38.84572870900007,10.361023596000052],[38.80646847700007,10.368835610000076],[38.77214604000005,10.366160703000048],[38.73824377200003,10.385626615000035],[38.656484954000064,10.373610750000068],[38.63027658800007,10.382174811000027],[38.59911398600008,10.374108566000075],[38.56020932800004,10.375922873000036],[38.534393041000044,10.366504697000039],[38.48349118600004,10.365448870000023],[38.473721502000046,10.314608434000036],[38.46006729900006,10.289970320000066],[38.454191224000056,10.246689368000034],[38.41939135500007,10.21322964500007],[38.43004354400006,10.193132966000064],[38.39749999800006,10.144277915000032],[38.333319679000056,10.151362736000067],[38.32180950900005,10.10718679300004],[38.29527499100004,10.089247869000076],[38.25237559800007,10.088427973000023],[38.240426651000064,10.102633868000055],[38.170611389000044,10.057752590000064],[38.15056522800006,10.035121651000054],[38.12530269000007,10.043157056000041],[38.113128851000056,10.015991517000032],[38.080279708000035,10.015223329000037],[38.04358595600007,9.969779790000075],[38.008454707000055,9.96413482500003],[37.99342139200007,9.949085918000037],[37.95706717500008,9.938637758000027],[37.93874469100007,9.94407979600004],[37.880155012000046,9.92150822800005],[37.85593637300008,9.895941177000054],[37.84268072100008,9.89670316400003],[37.81602151100003,9.867150363000064],[37.748529878000056,9.855939269000032],[37.700652079000065,9.83671438400006],[37.680392862000076,9.862317749000056],[37.661852758000066,9.860484457000041],[37.59239668400005,9.918764587000055],[37.58693420000003,9.939397922000069],[37.55292905600004,9.958554656000047],[37.529236929000035,9.996176773000059],[37.444469594000054,10.014559267000038],[37.39827541200003,10.046150453000052],[37.35698317400005,10.040231712000036],[37.34930215300005,10.01194857400003],[37.323254586000076,10.008101796000062],[37.29653929800003,10.052849455000057],[37.26188273100007,10.076671901000054],[37.24074594700005,10.075610279000045],[37.19550498500007,10.10452590500006],[37.16770232300007,10.16327334600004],[37.19748745600003,10.213875812000026],[37.18181111400003,10.241264534000038],[37.11460535100008,10.250697416000037],[37.078103285000054,10.263374553000062],[37.06183946500005,10.281734372000074],[37.01326530000006,10.284938673000056],[36.97992079900007,10.314026481000042],[36.89796121000006,10.312848153000061],[36.869241516000045,10.340692899000032],[36.77660038100004,10.34596864200006],[36.76175988600005,10.36730949400004],[36.74571697300007,10.359969913000043],[36.69165352300007,10.357319884000049],[36.68539933400007,10.317595047000054],[36.69219150500004,10.296289130000048],[36.65969071600006,10.27704084100003],[36.610570507000034,10.25922184600006],[36.574685618000046,10.264173395000057],[36.554480933000036,10.285072005000075],[36.51548847200007,10.239931540000043],[36.49091287300007,10.234268733000022],[36.44535089300007,10.24584416600004],[36.369421904000035,10.16165277600004],[36.33231714100003,10.13839473400003],[36.27189215800007,10.113087661000066],[36.25891955600008,10.078452010000035],[36.21892419200003,10.053212510000037],[36.184567068000035,10.049661314000048],[36.13989836400003,10.009705090000068],[36.11979873200005,9.961333164000052],[36.15219386800004,9.866363135000029],[36.128207082000074,9.852213635000055],[36.13647113500008,9.807447298000056],[36.10528661300003,9.773323643000026],[36.15905722600007,9.746936508000033],[36.17749612100005,9.701314421000063],[36.19186586200004,9.68787751800005],[36.20077737200006,9.614928768000027],[36.231777016000024,9.57032304300003],[36.26626546700004,9.568695262000062],[36.301025209000045,9.555515471000035],[36.335955124000066,9.511994007000055],[36.380307981000044,9.480480466000074],[36.400629507000076,9.51098832100007],[36.461168171000054,9.528057690000026],[36.494429858000046,9.509365743000046],[36.498663554000075,9.472884584000042],[36.514911091000045,9.444134004000034],[36.50726560900006,9.419345341000053],[36.47519087500007,9.39463723800003],[36.484109647000025,9.367867244000024],[36.46141108900008,9.357156935000035],[36.37471653800003,9.358019170000034],[36.33376793600007,9.339799325000058],[36.31899619500007,9.305850016000022],[36.295482496000034,9.301691637000033],[36.27022760800003,9.328369870000074],[36.25317940600007,9.301823312000067],[36.21837304700006,9.297118325000042],[36.21458697200006,9.332416972000033],[36.194597216000034,9.32628903400007],[36.194894704000035,9.288973481000028],[36.22633601000007,9.27172814000005],[36.228925168000046,9.229031010000028],[36.203947895000056,9.15734681300006],[36.17191229900004,9.108297185000026],[36.18458592800005,9.071951687000023],[36.207650458000046,9.06715276600005],[36.24647782400007,9.040962060000027],[36.22594920200004,9.03096793700007],[36.17679055000008,9.044525228000055],[36.15963301900007,9.02065994000003],[36.13142903100004,9.020788201000073],[36.12868639800007,9.05111736300006],[36.108553458000074,9.080031575000021],[36.08417349300004,9.05842066300005],[36.09697461400003,9.032414896000034],[36.08654582300005,9.012616791000028],[36.04244908600003,9.032177624000042],[36.02807451900003,9.055977324000025],[36.03402284500004,9.107416687000068],[36.053610656000046,9.119437129000062],[36.04396514700005,9.195062900000039],[36.03157719600006,9.233426059000067],[35.94932102400003,9.249153646000025],[35.917871966000064,9.285639052000022],[35.91108877400006,9.315957987000047],[35.85987032500003,9.324971589000029],[35.79719169100008,9.308617540000057],[35.75674797600004,9.323638114000062],[35.754002660000026,9.416548201000069],[35.77732583100004,9.440139414000043],[35.764992988000074,9.473350737000032],[35.710760712000024,9.48677192200006],[35.671391096000036,9.517234552000048],[35.647491968000054,9.553310385000032],[35.643579662000036,9.59455031400006],[35.653437895000025,9.634928304000027],[35.63472781400003,9.651488330000063],[35.594427594000024,9.656038397000032],[35.561087462000046,9.692018451000024],[35.50510615400003,9.688702257000045],[35.45537498500005,9.672230703000025],[35.41076633100005,9.713677552000036],[35.36508100900005,9.727466421000031],[35.378831148000074,9.765406404000032],[35.41962852800003,9.785145035000028],[35.36378899700003,9.813043185000026],[35.34980061600004,9.866075812000076],[35.32469285600007,9.884796300000062],[35.29745400500008,9.922483253000053],[35.27847186900004,9.907078983000076],[35.23074359100008,9.893252214000029],[35.220798401000025,9.925425696000048],[35.159583687000065,9.948402073000068],[35.088341497000044,9.950488895000035],[35.08102060900006,9.921920612000065],[35.04851353200007,9.917741245000059],[35.01965436100005,9.928791940000053],[35.01501748700008,9.995190863000062],[34.98818221300007,9.996766925000031],[34.942995980000035,9.93356731700004],[34.90442008500003,9.955878686000062],[34.88778145300006,9.908213968000041],[34.89768351600003,9.881757181000069],[34.86972697700003,9.820667072000049],[34.83166546500007,9.80311560000007],[34.79614251800007,9.73623946500004],[34.80996044700004,9.70224115800005],[34.810854103000054,9.63011872900006],[34.79205744500007,9.603314874000034],[34.782986711000035,9.55333113000006],[34.735137544000054,9.545301779000056],[34.632014748000074,9.588021403000027],[34.58539422700005,9.630359738000038],[34.54846670300003,9.62966294000006],[34.53214268800008,9.590564430000029],[34.523230916000045,9.541112503000022],[34.49873226600005,9.514231066000036],[34.51297477000003,9.448000646000025],[34.45180644800007,9.449110630000064],[34.466270465000036,9.365810855000063],[34.45172809500008,9.308702328000038],[34.45238950900006,9.257480946000044],[34.43956002200008,9.21557553100007],[34.40174218400006,9.186634573000049],[34.34087704800004,9.168779030000053],[34.393269976000056,9.11632992500006],[34.42683500900006,9.07179545400004],[34.45833001600005,9.073183166000035],[34.483666689000074,9.047145573000023],[34.503707991000056,9.004134039000064],[34.430651004000026,8.967436632000044],[34.13440686100006,8.962560775000043],[34.12424570300004,8.651479982000069],[34.18963902100006,8.651632735000021],[34.22351863200004,8.669767442000023],[34.255733657000064,8.702638657000023],[34.27938897700005,8.708837029000051],[34.31242902300005,8.682099813000036],[34.34547136800006,8.600099974000045],[34.35822337600007,8.52204352800004],[34.35743284800003,8.499928235000027],[34.31329640800004,8.389928504000068],[34.347280143000035,8.37664733300005],[34.43635263900006,8.421774275000075],[34.47119589300007,8.447576749000064],[34.52268710100003,8.475544933000037],[34.55652675400006,8.455134120000025],[34.57427349900007,8.403479557000026],[34.630335896000076,8.402000729000065],[34.72875182800004,8.390022244000022],[34.785250433000044,8.355242661000034],[34.79507204600003,8.326909196000031],[34.78580333000008,8.303639340000075],[34.826427111000044,8.261935566000034],[34.85509482500004,8.250647129000072],[34.96479208300008,8.247346959000026],[35.01825891200008,8.219643652000059],[35.07324599700007,8.220184827000026],[35.11891349000007,8.200608826000064],[35.13813145800003,8.181827079000072],[35.143271224000046,8.142853244000037],[35.10387878600005,8.115117707000024],[35.14071639700006,8.02168946100005],[35.141024095000034,7.989027562000047],[35.108557973000075,7.957113076000041],[35.048340566000036,7.95443646700005],[35.008480071000065,7.923502092000035],[35.013101335000044,7.882457938000073],[35.000615269000036,7.862321638000026],[34.95068663400008,7.890286446000061],[34.932276358000024,7.827954211000076],[34.93711194700006,7.764793453000038],[34.93197755600005,7.728168627000059],[34.99547325100008,7.747974243000044],[35.07709584100007,7.731005248000031],[35.11603360700008,7.645092153000064],[35.172934602000055,7.654229187000055],[35.21232413900003,7.651496985000051],[35.22273282400005,7.703102542000067],[35.27556691600006,7.746008052000036],[35.34087764900005,7.776610678000054],[35.34202958700007,7.821368869000025],[35.35805152200004,7.842994418000046],[35.400578841000026,7.829573682000046],[35.43353109800006,7.882756181000047],[35.459730937000074,7.872515717000056],[35.49719071800007,7.880296048000048],[35.52072558400005,7.895606731000044],[35.53621048000008,7.849384648000068],[35.554630358000054,7.820213334000073],[35.589620153000055,7.808632804000069],[35.61827998600006,7.814743066000062],[35.69372955400007,7.864355270000033],[35.716439421000075,7.855474859000026],[35.762149159000046,7.882606059000068],[35.79972173300007,7.932609052000032],[35.79527180700006,7.948020420000034],[35.73851274100008,7.988824024000053],[35.72285299200007,8.022467005000067],[35.765769212000066,8.081234959000028],[35.81634891900006,8.082424991000039],[35.86086865400006,8.07723474100004],[35.87271857600007,8.058773906000056],[35.90512834400005,7.946018852000066],[35.88687443500004,7.892538244000036],[35.84861863200007,7.838964073000056],[35.94162805700006,7.773921118000032],[35.99723771600003,7.745119799000065],[36.02055755300006,7.692017406000048],[36.05190735200006,7.653905677000068],[36.032487444000026,7.591452878000041],[36.035327417000076,7.572582032000071],[36.062197248000075,7.557481339000049],[36.12761685700008,7.555641226000034],[36.15655667800007,7.54262062600003],[36.224696245000075,7.48438797600005],[36.30175576600004,7.449876385000039],[36.34866548400004,7.445416163000061],[36.37463531100008,7.415574806000052],[36.40629512300006,7.408544479000057],[36.45316484600005,7.417424854000046],[36.48391965400003,7.41600977500002],[36.59833394100008,7.369032600000025],[36.632953738000026,7.377862983000057],[36.65174360700007,7.345011488000068],[36.762522895000075,7.265907864000042],[36.79111261300005,7.252283413000043],[36.840936200000044,7.325989875000062],[36.87915457500003,7.329694398000072],[36.95546430700006,7.260490995000055],[36.96464517000004,7.224732706000054],[37.03951119000004,7.240016542000035],[37.10483078300007,7.224495804000071],[37.15418049200008,7.240666506000025],[37.23783002500005,7.312059669000064],[37.28763973500003,7.334420649000037],[37.33122432500005,7.343444724000051],[37.379733601000055,7.380000817000052],[37.39028494200005,7.402422383000044],[37.40721963300007,7.492180415000064],[37.44510397000005,7.564316881000025],[37.401194678000024,7.682667443000071],[37.40002468700004,7.74105264800005],[37.40484457800005,7.827260347000049],[37.43440405800004,7.898066667000023],[37.436714014000074,7.91852848700006],[37.41661434900004,7.943580719000067],[37.38981479700004,7.961972350000053],[37.39179029300004,7.992900512000062],[37.49079898100007,8.017061117000026],[37.51399882700008,7.999670325000068],[37.53927864000008,7.95385826200004],[37.557518523000056,7.948338],[37.60282978400005,7.964857662000043],[37.60158120700004,8.010666743000058],[37.591801358000055,8.074012381000045],[37.595431285000075,8.111725733000071],[37.623886783000046,8.200043598000036],[37.60176817300004,8.23464195200006],[37.576077834000046,8.232589763000021],[37.53015788300007,8.265441096000075],[37.506301852000036,8.254395118000048],[37.480860937000045,8.258579291000046],[37.46408344800005,8.282420874000024],[37.47138331000008,8.350706936000051],[37.49856962700005,8.40361894800003],[37.51220915600004,8.416968900000029],[37.557978897000055,8.425509241000043],[37.57607877400005,8.41406872500005],[37.59803861000006,8.36531653700007],[37.61196851900007,8.35408602800004],[37.66606321800003,8.383537295000053],[37.67870814100007,8.377707025000063],[37.70454795400008,8.337035197000034],[37.74796771000007,8.351765815000022],[37.81625728200004,8.331804870000042],[37.86294700900004,8.335705010000027],[37.927986659000055,8.378166835000059],[37.988166285000034,8.359525958000063],[38.02804107500003,8.390282286000058],[38.06670582800007,8.375966615000038],[38.08653572600008,8.39009722700007],[38.10999997500005,8.390368231000025],[38.12254552300004,8.406587924000064],[38.16418088300003,8.408050598000045],[38.180030170000066,8.392867265000064],[38.21754495600004,8.408777934000057],[38.26631466500004,8.406637793000073],[38.28925450600008,8.380696621000027],[38.311464357000034,8.369946128000038],[38.30703432100006,8.299693011000045],[38.333175065000034,8.25855070700004],[38.347344031000034,8.254240952000032],[38.421633616000065,8.289022429000056],[38.430208726000046,8.298750815000062],[38.451706827000066,8.385030177000033],[38.46828823800007,8.435005139000054],[38.52684252000006,8.457619570000077],[38.57578418800006,8.44489163000003],[38.59088214800005,8.42601864300002],[38.61675172200006,8.431138369000053],[38.65445164600004,8.394637113000044],[38.66723175800007,8.350485245000073],[38.666025158000025,8.32696015700003],[38.650952231000076,8.285082027000044],[38.702051880000056,8.244470173000025],[38.71601842800004,8.219447782000032],[38.68218734900006,8.190427868000029],[38.68451186300007,8.122454772000026],[38.67284312800007,8.089863961000049],[38.635133765000035,8.132337731000064],[38.593544457000064,8.260199101000069],[38.56074500500006,8.266089618000024],[38.542052848000026,8.246110405000024],[38.542552826000076,8.225849506000031],[38.56802264400005,8.193928063000044],[38.58726248900007,8.156236371000034],[38.58394489500006,8.108104487000048],[38.62185219000003,8.06841243100007],[38.61268221800003,8.043301324000026],[38.62770176400005,8.033595279000053],[38.59736768300007,7.990588941000055],[38.58650728900005,7.938259967000022],[38.54948523100006,7.870874441000069],[38.51290808600004,7.848910445000058],[38.49244288400007,7.795393342000068],[38.44484742900005,7.759533909000027],[38.43865298000003,7.718867018000026],[38.41243332600004,7.681553431000054],[38.42026300900005,7.624342803000047],[38.400824613000054,7.59530316200005],[38.41891480500004,7.569457974000045],[38.426748651000025,7.514721252000072],[38.34122879100005,7.478579378000063],[38.32724489200007,7.461681727000041],[38.32519778600005,7.433893377000061],[38.30886934700004,7.40149247100004],[38.27944283900007,7.380599418000031],[38.28152741700006,7.338683435000064],[38.26521009900006,7.306723977000047],[38.19859123700007,7.261549926000043],[38.181081531000075,7.257899595000026],[38.104332846000034,7.21087536400006],[38.07801476100008,7.180263146000073],[38.06142899900004,7.072213040000065],[38.06415474100004,7.043386989000055],[38.101914478000026,7.010775482000042],[38.13015427000005,6.974009886000033],[38.146584174000054,6.977463948000036],[38.19379390600005,7.012345484000036],[38.23792059600004,7.020054713000036],[38.25443070800003,7.059897726000031],[38.30525896200004,7.121612751000043],[38.32189493300007,7.161742447000051],[38.34219310100008,7.164452227000027],[38.378072847000055,7.129760635000025],[38.400632700000074,7.121470242000044],[38.44254832800004,7.126812556000061],[38.46002232600006,7.118190046000052],[38.48002218200003,7.090398776000029],[38.546114525000064,7.090876842000057],[38.58364155400005,7.126290302000029],[38.611491380000075,7.124180187000036],[38.646171139000046,7.095543106000036],[38.636951174000046,7.066097547000027],[38.66800097000004,7.059857244000057],[38.68445074600004,7.033951444000024],[38.68938163300004,7.000867257000039],[38.71050065800006,7.012985094000044],[38.71116794900007,6.973757076000027],[38.69477071600005,6.957492603000048],[38.70463062400006,6.930631385000027],[38.69976063400003,6.90334015600007],[38.71408469800008,6.860577375000048],[38.63985344200006,6.812686850000034],[38.63567093200004,6.77171426700005],[38.65821078300007,6.769624154000041],[38.67842064200005,6.748963198000069],[38.705550464000055,6.742042868000055],[38.72736029600003,6.711971491000043],[38.75424011500007,6.697030791000032],[38.81792971400006,6.703611031000037],[38.83775103000005,6.674915718000022],[38.901769143000024,6.665659248000054],[38.94942382100004,6.643803218000073],[38.94167884400008,6.610336709000023],[38.959640225000044,6.60087935100006],[39.03219825800005,6.611806697000077],[39.06452507700004,6.598816795000062],[39.052568086000065,6.556984197000077],[39.08621785500003,6.545168636000028],[39.09661776400003,6.521612558000072],[39.09539773400007,6.472090315000059],[39.107527626000035,6.43768874400007],[39.12738741700008,6.344354499000076],[39.119546178000064,6.298994291000042],[39.09085062300005,6.270802641000046],[39.08596761000007,6.252010342000062],[39.113207371000044,6.17655688800005],[39.13185995300006,6.158786172000021],[39.07971625600004,6.153000181000039],[39.03448703000004,6.137438774000032],[38.96059829700005,6.159270747000051],[38.92091897300003,6.228557013000056],[38.874109772000054,6.300833539000052],[38.83202535800007,6.343216404000032],[38.812130839000076,6.355918506000023],[38.77149152900006,6.399762461000023],[38.73865209300004,6.408953289000067],[38.70716263400004,6.392451803000029],[38.69062291500006,6.406223044000058],[38.64501602000007,6.423178951000068],[38.62674400800006,6.417034019000027],[38.56654503800007,6.440456127000061],[38.47528660000006,6.430375209000033],[38.44103718900004,6.405362953000065],[38.42434710600003,6.368675131000032],[38.42539189800004,6.290092589000039],[38.438971759000026,6.216879246000076],[38.434682692000024,6.19876580500005],[38.39421801000003,6.181772756000044],[38.36528317500006,6.142800061000059],[38.35150567300008,6.096230788000071],[38.31986929900006,6.047420609000028],[38.31388050500004,6.02783349200007],[38.27924000300004,6.006286885000065],[38.28225995100007,5.970703664000041],[38.30454344000003,5.979980627000032],[38.32752917700003,5.955372279000073],[38.37480906600007,5.943043287000023],[38.396085707000054,5.920052383000041],[38.38087825900004,5.903997631000038],[38.35813865100005,5.902137461000052],[38.32532922300004,5.868814446000044],[38.30374959200003,5.861443774000065],[38.270430162000025,5.868524416000071],[38.23923070200004,5.844372226000075],[38.207991238000034,5.840191838000067],[38.19969959400004,5.864800523000042],[38.21481111600008,5.893246647000069],[38.203731305000076,5.935020423000026],[38.18097169200007,5.941651025000056],[38.150342212000055,6.000406334000047],[38.121592709000026,6.016677806000075],[38.11649278800007,6.050200836000045],[38.079863412000066,6.116986871000051],[38.086728393000044,6.161044785000058],[38.102301546000035,6.180448387000069],[38.125063726000064,6.155126650000057],[38.17103344100008,6.166887159000055],[38.19792137500008,6.206434972000068],[38.17191181600003,6.255329379000045],[38.18842153000003,6.304253797000058],[38.213893281000026,6.330174559000056],[38.24860305800007,6.336279819000026],[38.288230414000054,6.359842237000066],[38.29275972700003,6.395922082000027],[38.28240350100003,6.437769978000063],[38.245590529000026,6.468228601000021],[38.17062181500006,6.449826935000033],[38.14349126600007,6.458191833000058],[38.14968371900005,6.496589192000044],[38.11451055800006,6.499561886000038],[38.09073151500007,6.526068446000068],[38.05159517900006,6.534738812000057],[38.01646857000003,6.575178275000042],[37.99685384400004,6.575613409000027],[37.96876584700004,6.548954434000052],[37.93270059300005,6.557206405000045],[37.91261203100004,6.590668957000048],[37.89277595400006,6.596070541000074],[37.87148281900005,6.582228514000064],[37.80777488100006,6.500655317000053],[37.79992600400004,6.47818157200004],[37.797455987000035,6.429239352000025],[37.81959582800005,6.393427707000058],[37.840085687000055,6.378747021000038],[37.85215556300005,6.304783647000022],[37.840265601000056,6.248251081000035],[37.77809593500007,6.149596620000068],[37.77469594400003,6.123855449000075],[37.78977580000003,6.049442044000045],[37.783175819000064,6.010600270000054],[37.803736092000065,5.993178830000033],[37.84296543800008,6.010940249000043],[37.88048518100004,5.985039044000075],[37.903975012000046,5.960507907000022],[37.952694705000056,5.96334801200004],[37.96857460200005,5.956017667000026],[37.98247446700003,5.887824539000064],[38.00713428500006,5.849272763000045],[38.01987416700007,5.79004003700004],[38.088883692000024,5.745607964000044],[38.075163846000066,5.688940437000042],[38.040814141000055,5.67364673000003],[38.00801470400006,5.650154599000075],[37.94351999600008,5.639464151000027],[37.93017464400003,5.616672147000031],[37.941128269000046,5.585105321000071],[37.94781448700007,5.537688512000045],[37.94681445500004,5.47428560000003],[37.935224497000036,5.423033255000064],[37.90121237500006,5.373247752000054],[37.896374714000046,5.349879911000073],[37.904774635000024,5.303957793000052],[37.90081933500005,5.244854087000022],[37.88508552400003,5.234310022000045],[37.852657442000066,5.234646854000061],[37.81007817200003,5.268299910000053],[37.77282881700006,5.28335127400004],[37.747129259000076,5.276610653000034],[37.70088005300005,5.305883307000045],[37.64670603800005,5.299287273000061],[37.62973481100005,5.266009696000026],[37.51786323600004,5.220475515000032],[37.417214982000075,5.166550595000047],[37.36717585100007,5.155099544000052],[37.340736313000036,5.159599950000029],[37.292357141000025,5.194363099000043],[37.23810807800004,5.199433549000048],[37.216908441000044,5.212684750000051],[37.18182905900005,5.193923041000062],[37.08212078400004,5.186382331000061],[37.00331111600008,5.199082903000033],[36.94896665400006,5.19468654700006],[36.92122786400006,5.145130641000037],[36.892970983000055,5.109787746000052],[36.86070896700005,4.978767301000062],[36.86347565500006,4.793039446000023],[36.85473946500008,4.736059609000051],[36.82847998600005,4.709174806000021],[36.64640914100005,4.710757126000033],[36.68084120200007,4.604300630000068],[36.657532315000026,4.580373676000022],[36.71425396400008,4.433850543000062],[36.88777,4.43472],[37.03972,4.37555],[37.09916,4.33167],[37.13027,4.28639],[37.28055,4.19444],[37.99805,3.72861],[38.03361,3.69806],[38.05611,3.65194],[38.12111,3.61167],[38.32388,3.60889],[38.44805,3.59944],[38.51694,3.62694],[38.62194,3.60167],[38.72944,3.56722],[38.91361,3.51389],[39.04611,3.52889],[39.09111795800004,3.531103962000032],[39.220496129000026,3.602478588000054],[39.284696387000054,3.623078557000042],[39.39961698500008,3.795658718000027],[39.482847451000055,3.941998843000022],[39.499677537000025,3.96572886000007],[39.47827754200006,4.040328985000031],[39.52878786900004,4.16673909800005],[39.539687995000065,4.235169173000031],[39.56696812600006,4.264589181000076],[39.585778238000046,4.296539195000037],[39.61881844100003,4.36846924200006],[39.64205861100004,4.435939291000068],[39.70326900400005,4.568169368000042],[39.72512917300003,4.63305940500004],[39.745899293000036,4.666579411000043],[39.74355936300003,4.723479474000044],[39.765069607000044,4.846849563000035],[39.804449899000076,4.951479603000053],[39.812860002000036,5.002069636000044],[39.83359012600005,5.032769630000075],[39.878400448000036,5.140319646000023],[39.907300672000076,5.219609665000064],[39.94229090700003,5.284989659000075],[40.03368142100004,5.396789590000026],[40.09795160800007,5.364879467000037],[40.17443187500004,5.353379345000064],[40.24063214200004,5.366079246000027],[40.276672279000024,5.368169189000071],[40.36950264200004,5.38640904600004],[40.53289327700003,5.410648792000075],[40.581043554000075,5.475948735000031],[40.60538367000004,5.490288706000058],[40.63305383200003,5.530068672000027],[40.67958401800007,5.540638594000029],[40.69437411500007,5.567168583000068],[40.752884376000054,5.594398484000067],[40.81148465700005,5.634908392000057],[40.83220476500003,5.65589836700002],[40.922295132000045,5.683378211000047],[40.87479519000004,5.807898320000049],[40.87840553700005,5.987518345000069],[40.86667566400007,6.076638369000023],[40.86787581100003,6.151288376000025],[40.87797591800006,6.187668358000053],[40.879696083000056,6.266508351000027],[40.86450613000005,6.320258382000077],[40.85674623600005,6.385908396000048],[40.86035635200005,6.436198390000072],[40.88561652000004,6.472118329000068],[40.900056653000036,6.511638298000037],[40.98996717700004,6.604238101000021],[41.01553735400006,6.644558033000067],[41.071207651000066,6.687897910000061],[41.13102787300005,6.691257776000043],[41.228468081000074,6.623007581000024],[41.35838841800006,6.565527316000043],[41.380038496000054,6.565527269000029],[41.43778865400003,6.543967151000061],[41.528008793000026,6.464936979000072],[41.61968888300004,6.361716810000075],[41.63334899200004,6.391386771000043],[41.69032926800003,6.429416634000063],[41.738929635000034,6.519906501000037],[41.75787974700006,6.540536444000054],[41.81966002100006,6.570476295000049],[41.85366585000003,6.568909076000068],[41.86073008300008,6.535341221000067],[41.88798017100004,6.53534615500007],[41.936410376000026,6.553176036000025],[41.999540669000055,6.589845874000048],[42.00648074800006,6.614385852000055],[41.999180790000025,6.641615850000051],[42.01346087600007,6.658605806000025],[42.025491026000054,6.706415755000023],[42.05553122900005,6.748755663000054],[42.06288076000004,6.825923126000021],[42.07623162900006,6.886735528000031],[42.10605182900008,6.930215429000043],[42.13416198700003,6.954165340000031],[42.16264221300003,7.007115234000025],[42.15761230000004,7.051325216000066],[42.18696251700004,7.096395109000071],[42.204702686000076,7.141035027000044],[42.20345682000004,7.194632988000023],[42.20985301500008,7.264004914000054],[42.19911009600003,7.291440179000062],[41.89612231700005,7.411205596000059],[41.867102525000064,7.53277558000002],[41.90480293500008,7.635925389000022],[41.94249331300006,7.727465209000059],[41.95714348700005,7.77478512600004],[41.91240351600004,7.844395182000028],[41.92216392000006,7.978105022000022],[41.92634422000003,8.080564910000021],[41.94840464200007,8.200894719000075],[42.027053755000054,8.323024846000067],[42.02600558600005,8.425834241000075],[42.06972595000008,8.493974029000071],[42.097746132000054,8.518988912000054],[42.21561685200004,8.611203440000054],[42.23966702600006,8.639883325000028],[42.26307710000003,8.635953264000023],[42.32303701300003,8.536773208000056],[42.50255751800006,8.492082721000031],[42.52976750400006,8.454832691000036],[42.56702702100006,8.25561284500003],[42.61597690200006,8.159602825000036],[42.63062689700007,8.140432805000046],[42.66135697300007,8.130282726000075],[42.70159725600007,8.179612544000065],[42.73487772100003,8.29437228300003],[42.768168047000074,8.36317208500003],[42.88440855700003,8.398511668000026],[42.89884863900005,8.40910160900006],[42.89702878200006,8.457751538000025],[42.912369041000034,8.52210139300007],[42.89878926000006,8.602671316000055],[42.85987923300007,8.63630138800005],[42.83841924600006,8.664391413000033],[42.83198932400006,8.695231381000042],[42.84391957400004,8.75792124700007],[42.86535980200006,8.804351102000055],[42.86532986700007,8.82511106800007],[42.84954988100003,8.844291089000023],[42.80515980900003,8.870031190000077],[42.73063980400008,8.948021313000027],[42.70306981200008,8.980911350000042],[42.64434990700005,9.072981394000067],[42.59934556800005,9.106174348000025],[42.63511011000003,9.143971312000076],[42.63470016100007,9.158521290000067],[42.59548013700004,9.193591358000049],[42.57099025900004,9.258181333000039],[42.551360282000076,9.28657135700007],[42.556290423000064,9.321051281000052],[42.53745334200005,9.372981780000032],[42.64088981900005,9.447462242000029],[42.681975572000056,9.469872345000056],[42.71465737500006,9.474541032000047],[42.73613405100008,9.49508368100004],[42.787491242000044,9.523096305000024],[42.813636848000044,9.57258550000006],[42.84071607900006,9.582856765000031],[42.879934228000025,9.584724145000052],[42.90888087400003,9.563247560000036],[42.94343027700006,9.587525199000027],[42.968641956000056,9.59219390800007],[42.97797974200006,9.628610517000027],[42.95090071000004,9.672497336000049],[42.935026727000036,9.679967474000023],[42.89767600600004,9.650087287000076],[42.82297486900006,9.674365316000035],[42.73053226900004,9.721053651000034],[42.69411559200006,9.768675546000054],[42.64742734400005,9.77521203300006],[42.56805714500007,9.73692815000004],[42.49895844500003,9.72105447000007],[42.44853511400004,9.721988407000026],[42.376572174000046,9.713839606000022],[42.33977280800008,9.719617623000033],[42.31814083900008,9.705661442000064],[42.25863541500007,9.65158173900005],[42.20053019100004,9.653141934000075],[42.12485976100004,9.61452225000005],[42.133409681000046,9.582492279000064],[42.15259966700006,9.556372258000067],[42.13889953700004,9.534692333000066],[42.067614055000035,9.474807665000071],[42.05213905000005,9.491952694000076],[42.019098978000045,9.508172774000059],[41.98252383100004,9.508492896000064],[41.938748556000064,9.479543086000035],[41.91337842900003,9.47246317500003],[41.85970826800008,9.488013330000058],[41.81519805100004,9.476743490000047],[41.77299792700006,9.491053607000026],[41.73461770200004,9.471483758000034],[41.70227755600007,9.466653867000048],[41.65415740700007,9.481234004000044],[41.642597468000076,9.515143991000059],[41.56415712200004,9.506944249000071],[41.540606997000054,9.499584337000044],[41.49096665500008,9.457424547000073],[41.393086338000046,9.485754821000057],[41.30869603700006,9.50307506200005],[41.239315729000054,9.49879528100007],[41.219885617000045,9.490715353000041],[41.19480542600007,9.462295465000068],[41.145445100000074,9.42462566100005],[41.05648461700008,9.391065970000056],[41.014074331000074,9.357206139000027],[40.97071412500003,9.351506276000066],[40.92697385500003,9.323126438000031],[40.84410344300005,9.304796701000043],[40.81256332600003,9.310926782000024],[40.79262340300005,9.367396777000067],[40.79764350800008,9.39555673700005],[40.858223742000064,9.385366568000052],[40.891213899000036,9.389536466000038],[40.927514099000064,9.405136336000055],[40.88999406900007,9.448646402000065],[40.86218399100005,9.46301647000007],[40.81576375600008,9.45273661400006],[40.71953330700006,9.44387690800005],[40.69613891500006,9.446065145000034],[40.65955292800004,9.404307129000074],[40.60596265300006,9.391047300000025],[40.52841229100005,9.385457529000064],[40.49882213300003,9.375047621000022],[40.47102194900003,9.35475771800003],[40.40812145900003,9.28118796900003],[40.32702074200006,9.154658312000038],[40.24550016100005,9.07486859900007],[40.24603005200004,9.035408635000067],[40.23780991000007,8.99733868800007],[40.16988952200006,8.964498896000066],[40.15224936100003,8.931958967000071],[40.09449691700007,8.862165169000036],[40.06695374800006,8.843969253000068],[40.024218561000055,8.845049361000065],[40.01040852700004,8.856089392000058],[40.01926865200005,8.88912934700005],[40.03661877800005,8.906529287000069],[40.05109899000007,8.961359208000033],[40.03481900200006,8.994449229000054],[39.99955887700003,9.00715930900003],[39.947628630000054,9.003599447000056],[39.951868717000025,9.02998941800007],[39.91874867000007,9.068409475000067],[39.909018797000044,9.131799454000031],[39.877658687000064,9.14472952500006],[39.817420679000065,9.136314175000052]],[[38.78084354900005,9.090418864000071],[38.82473622900005,9.075888689000067],[38.87632080600008,9.081584122000038],[38.88294377700004,9.052105380000057],[38.90500095200008,9.009499839000057],[38.901098938000075,8.94614109400004],[38.87944709200008,8.918314232000057],[38.86983131300008,8.880774936000023],[38.82600142900003,8.880187270000022],[38.82439300400006,8.841332266000052],[38.78059487300004,8.835919558000057],[38.772991760000025,8.857467391000057],[38.74551760400004,8.863423673000057],[38.74358938100005,8.902585569000053],[38.70842789200003,8.920915007000076],[38.67622715400006,8.95760486200004],[38.64281850800006,8.965853421000077],[38.65938647000007,8.985402486000055],[38.66722298500008,9.026232475000029],[38.683541099000024,9.050037711000073],[38.685408005000056,9.073027127000046],[38.716642738000075,9.087750198000037],[38.78084354900005,9.090418864000071]],[[36.23861703600005,8.965110055000025],[36.22213471300006,8.950194146000058],[36.17429321100008,8.97942299600004],[36.22103909900005,8.98853736500007],[36.23861703600005,8.965110055000025]],[[42.186329519000026,9.36175010900007],[42.23807942700006,9.384942246000037],[42.27031265900007,9.361664396000037],[42.25851933300004,9.334412256000064],[42.26604928300003,9.309772269000064],[42.24934908700004,9.270032382000068],[42.27203898800008,9.215667394000036],[42.26471890300007,9.197887447000028],[42.233718742000065,9.185912564000034],[42.19745872100003,9.219872631000044],[42.14855848700006,9.206262811000045],[42.11240842500007,9.230742892000023],[42.073688238000045,9.22096302600005],[42.06133221300007,9.226459059000035],[42.060508338000034,9.265873009000074],[42.070468498000025,9.303942921000043],[42.11422889800008,9.37251266900006],[42.14661907300007,9.387512541000035],[42.168579082000065,9.362832511000022],[42.186329519000026,9.36175010900007]]]},"properties":{"Shape_Leng":55.6176085341,"Shape_Area":26.4746597104,"ADM1_EN":"Oromia","ADM1_PCODE":"ET04","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[38.42434710600003,6.368675131000032],[38.44103718900004,6.405362953000065],[38.47528660000006,6.430375209000033],[38.56654503800007,6.440456127000061],[38.62674400800006,6.417034019000027],[38.64501602000007,6.423178951000068],[38.69062291500006,6.406223044000058],[38.70716263400004,6.392451803000029],[38.73865209300004,6.408953289000067],[38.77149152900006,6.399762461000023],[38.812130839000076,6.355918506000023],[38.83202535800007,6.343216404000032],[38.874109772000054,6.300833539000052],[38.92091897300003,6.228557013000056],[38.96059829700005,6.159270747000051],[39.03448703000004,6.137438774000032],[39.07971625600004,6.153000181000039],[39.13185995300006,6.158786172000021],[39.113207371000044,6.17655688800005],[39.08596761000007,6.252010342000062],[39.09085062300005,6.270802641000046],[39.119546178000064,6.298994291000042],[39.12738741700008,6.344354499000076],[39.107527626000035,6.43768874400007],[39.09539773400007,6.472090315000059],[39.09661776400003,6.521612558000072],[39.08621785500003,6.545168636000028],[39.052568086000065,6.556984197000077],[39.06452507700004,6.598816795000062],[39.03219825800005,6.611806697000077],[38.959640225000044,6.60087935100006],[38.94167884400008,6.610336709000023],[38.94942382100004,6.643803218000073],[38.901769143000024,6.665659248000054],[38.83775103000005,6.674915718000022],[38.81792971400006,6.703611031000037],[38.75424011500007,6.697030791000032],[38.72736029600003,6.711971491000043],[38.705550464000055,6.742042868000055],[38.67842064200005,6.748963198000069],[38.65821078300007,6.769624154000041],[38.63567093200004,6.77171426700005],[38.63985344200006,6.812686850000034],[38.71408469800008,6.860577375000048],[38.69976063400003,6.90334015600007],[38.70463062400006,6.930631385000027],[38.69477071600005,6.957492603000048],[38.71116794900007,6.973757076000027],[38.71050065800006,7.012985094000044],[38.68938163300004,7.000867257000039],[38.68445074600004,7.033951444000024],[38.66800097000004,7.059857244000057],[38.636951174000046,7.066097547000027],[38.646171139000046,7.095543106000036],[38.611491380000075,7.124180187000036],[38.58364155400005,7.126290302000029],[38.546114525000064,7.090876842000057],[38.48002218200003,7.090398776000029],[38.46002232600006,7.118190046000052],[38.44254832800004,7.126812556000061],[38.400632700000074,7.121470242000044],[38.378072847000055,7.129760635000025],[38.34219310100008,7.164452227000027],[38.32189493300007,7.161742447000051],[38.30525896200004,7.121612751000043],[38.25443070800003,7.059897726000031],[38.23792059600004,7.020054713000036],[38.19379390600005,7.012345484000036],[38.146584174000054,6.977463948000036],[38.13015427000005,6.974009886000033],[38.13659192200004,6.939727871000059],[38.11844427800003,6.871920474000035],[38.08000849800004,6.796448477000069],[38.050212885000064,6.694124986000077],[38.019388640000045,6.665603544000021],[38.00959474900003,6.617068244000052],[38.01646857000003,6.575178275000042],[38.05159517900006,6.534738812000057],[38.09073151500007,6.526068446000068],[38.11451055800006,6.499561886000038],[38.14968371900005,6.496589192000044],[38.14349126600007,6.458191833000058],[38.17062181500006,6.449826935000033],[38.245590529000026,6.468228601000021],[38.28240350100003,6.437769978000063],[38.30931337000004,6.419694531000061],[38.38630972900006,6.414981931000057],[38.40446606200004,6.396718149000037],[38.394453604000034,6.366310939000073],[38.42434710600003,6.368675131000032]]]},"properties":{"Shape_Leng":4.17416318909,"Shape_Area":0.55419544698,"ADM1_EN":"Sidama","ADM1_PCODE":"ET16","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[38.42434710600003,6.368675131000032],[38.394453604000034,6.366310939000073],[38.40446606200004,6.396718149000037],[38.38630972900006,6.414981931000057],[38.30931337000004,6.419694531000061],[38.28240350100003,6.437769978000063],[38.29275972700003,6.395922082000027],[38.288230414000054,6.359842237000066],[38.24860305800007,6.336279819000026],[38.213893281000026,6.330174559000056],[38.18842153000003,6.304253797000058],[38.17191181600003,6.255329379000045],[38.19792137500008,6.206434972000068],[38.17103344100008,6.166887159000055],[38.125063726000064,6.155126650000057],[38.102301546000035,6.180448387000069],[38.086728393000044,6.161044785000058],[38.079863412000066,6.116986871000051],[38.11649278800007,6.050200836000045],[38.121592709000026,6.016677806000075],[38.150342212000055,6.000406334000047],[38.18097169200007,5.941651025000056],[38.203731305000076,5.935020423000026],[38.21481111600008,5.893246647000069],[38.19969959400004,5.864800523000042],[38.207991238000034,5.840191838000067],[38.23923070200004,5.844372226000075],[38.270430162000025,5.868524416000071],[38.30374959200003,5.861443774000065],[38.32532922300004,5.868814446000044],[38.35813865100005,5.902137461000052],[38.38087825900004,5.903997631000038],[38.396085707000054,5.920052383000041],[38.37480906600007,5.943043287000023],[38.32752917700003,5.955372279000073],[38.30454344000003,5.979980627000032],[38.28225995100007,5.970703664000041],[38.27924000300004,6.006286885000065],[38.31388050500004,6.02783349200007],[38.31986929900006,6.047420609000028],[38.35150567300008,6.096230788000071],[38.36528317500006,6.142800061000059],[38.39421801000003,6.181772756000044],[38.434682692000024,6.19876580500005],[38.438971759000026,6.216879246000076],[38.42539189800004,6.290092589000039],[38.42434710600003,6.368675131000032]]],[[[38.13015427000005,6.974009886000033],[38.101914478000026,7.010775482000042],[38.06415474100004,7.043386989000055],[38.06142899900004,7.072213040000065],[38.07801476100008,7.180263146000073],[38.104332846000034,7.21087536400006],[38.181081531000075,7.257899595000026],[38.19859123700007,7.261549926000043],[38.26521009900006,7.306723977000047],[38.28152741700006,7.338683435000064],[38.27944283900007,7.380599418000031],[38.30886934700004,7.40149247100004],[38.32519778600005,7.433893377000061],[38.32724489200007,7.461681727000041],[38.34122879100005,7.478579378000063],[38.426748651000025,7.514721252000072],[38.41891480500004,7.569457974000045],[38.400824613000054,7.59530316200005],[38.42026300900005,7.624342803000047],[38.41243332600004,7.681553431000054],[38.43865298000003,7.718867018000026],[38.44484742900005,7.759533909000027],[38.49244288400007,7.795393342000068],[38.51290808600004,7.848910445000058],[38.54948523100006,7.870874441000069],[38.58650728900005,7.938259967000022],[38.59736768300007,7.990588941000055],[38.62770176400005,8.033595279000053],[38.61268221800003,8.043301324000026],[38.62185219000003,8.06841243100007],[38.58394489500006,8.108104487000048],[38.58726248900007,8.156236371000034],[38.56802264400005,8.193928063000044],[38.542552826000076,8.225849506000031],[38.542052848000026,8.246110405000024],[38.56074500500006,8.266089618000024],[38.593544457000064,8.260199101000069],[38.635133765000035,8.132337731000064],[38.67284312800007,8.089863961000049],[38.68451186300007,8.122454772000026],[38.68218734900006,8.190427868000029],[38.71601842800004,8.219447782000032],[38.702051880000056,8.244470173000025],[38.650952231000076,8.285082027000044],[38.666025158000025,8.32696015700003],[38.66723175800007,8.350485245000073],[38.65445164600004,8.394637113000044],[38.61675172200006,8.431138369000053],[38.59088214800005,8.42601864300002],[38.57578418800006,8.44489163000003],[38.52684252000006,8.457619570000077],[38.46828823800007,8.435005139000054],[38.451706827000066,8.385030177000033],[38.430208726000046,8.298750815000062],[38.421633616000065,8.289022429000056],[38.347344031000034,8.254240952000032],[38.333175065000034,8.25855070700004],[38.30703432100006,8.299693011000045],[38.311464357000034,8.369946128000038],[38.28925450600008,8.380696621000027],[38.26631466500004,8.406637793000073],[38.21754495600004,8.408777934000057],[38.180030170000066,8.392867265000064],[38.16418088300003,8.408050598000045],[38.12254552300004,8.406587924000064],[38.10999997500005,8.390368231000025],[38.08653572600008,8.39009722700007],[38.06670582800007,8.375966615000038],[38.02804107500003,8.390282286000058],[37.988166285000034,8.359525958000063],[37.927986659000055,8.378166835000059],[37.86294700900004,8.335705010000027],[37.81625728200004,8.331804870000042],[37.74796771000007,8.351765815000022],[37.70454795400008,8.337035197000034],[37.67870814100007,8.377707025000063],[37.66606321800003,8.383537295000053],[37.61196851900007,8.35408602800004],[37.59803861000006,8.36531653700007],[37.57607877400005,8.41406872500005],[37.557978897000055,8.425509241000043],[37.51220915600004,8.416968900000029],[37.49856962700005,8.40361894800003],[37.47138331000008,8.350706936000051],[37.46408344800005,8.282420874000024],[37.480860937000045,8.258579291000046],[37.506301852000036,8.254395118000048],[37.53015788300007,8.265441096000075],[37.576077834000046,8.232589763000021],[37.60176817300004,8.23464195200006],[37.623886783000046,8.200043598000036],[37.595431285000075,8.111725733000071],[37.591801358000055,8.074012381000045],[37.60158120700004,8.010666743000058],[37.60282978400005,7.964857662000043],[37.557518523000056,7.948338],[37.53927864000008,7.95385826200004],[37.51399882700008,7.999670325000068],[37.49079898100007,8.017061117000026],[37.39179029300004,7.992900512000062],[37.38981479700004,7.961972350000053],[37.41661434900004,7.943580719000067],[37.436714014000074,7.91852848700006],[37.43440405800004,7.898066667000023],[37.40484457800005,7.827260347000049],[37.40002468700004,7.74105264800005],[37.401194678000024,7.682667443000071],[37.44510397000005,7.564316881000025],[37.40721963300007,7.492180415000064],[37.39028494200005,7.402422383000044],[37.379733601000055,7.380000817000052],[37.33122432500005,7.343444724000051],[37.28763973500003,7.334420649000037],[37.23783002500005,7.312059669000064],[37.15418049200008,7.240666506000025],[37.10483078300007,7.224495804000071],[37.03951119000004,7.240016542000035],[36.96464517000004,7.224732706000054],[36.95546430700006,7.260490995000055],[36.87915457500003,7.329694398000072],[36.840936200000044,7.325989875000062],[36.79111261300005,7.252283413000043],[36.762522895000075,7.265907864000042],[36.65174360700007,7.345011488000068],[36.632953738000026,7.377862983000057],[36.59833394100008,7.369032600000025],[36.48391965400003,7.41600977500002],[36.45316484600005,7.417424854000046],[36.40629512300006,7.408544479000057],[36.37463531100008,7.415574806000052],[36.34866548400004,7.445416163000061],[36.30175576600004,7.449876385000039],[36.224696245000075,7.48438797600005],[36.15655667800007,7.54262062600003],[36.12761685700008,7.555641226000034],[36.062197248000075,7.557481339000049],[36.035327417000076,7.572582032000071],[36.032487444000026,7.591452878000041],[36.05190735200006,7.653905677000068],[36.02055755300006,7.692017406000048],[35.99723771600003,7.745119799000065],[35.94162805700006,7.773921118000032],[35.84861863200007,7.838964073000056],[35.88687443500004,7.892538244000036],[35.90512834400005,7.946018852000066],[35.87271857600007,8.058773906000056],[35.86086865400006,8.07723474100004],[35.81634891900006,8.082424991000039],[35.765769212000066,8.081234959000028],[35.72285299200007,8.022467005000067],[35.73851274100008,7.988824024000053],[35.79527180700006,7.948020420000034],[35.79972173300007,7.932609052000032],[35.762149159000046,7.882606059000068],[35.716439421000075,7.855474859000026],[35.69372955400007,7.864355270000033],[35.61827998600006,7.814743066000062],[35.589620153000055,7.808632804000069],[35.554630358000054,7.820213334000073],[35.53621048000008,7.849384648000068],[35.52072558400005,7.895606731000044],[35.49719071800007,7.880296048000048],[35.459730937000074,7.872515717000056],[35.43353109800006,7.882756181000047],[35.400578841000026,7.829573682000046],[35.35805152200004,7.842994418000046],[35.34202958700007,7.821368869000025],[35.34087764900005,7.776610678000054],[35.27556691600006,7.746008052000036],[35.22273282400005,7.703102542000067],[35.21232413900003,7.651496985000051],[35.172934602000055,7.654229187000055],[35.11603360700008,7.645092153000064],[35.16630522300005,7.61487082900004],[35.16470639200003,7.580407574000048],[35.17191638400004,7.532753644000024],[35.13808280500007,7.512076175000061],[35.12240210600004,7.478600811000035],[35.16141289800004,7.471357534000049],[35.18925243500007,7.455626145000053],[35.209512077000056,7.471867610000061],[35.27260354400005,7.471477654000068],[35.30955471200008,7.479178306000051],[35.34531066900007,7.452871979000065],[35.367835393000064,7.414628042000061],[35.39229841000002,7.396183099000041],[35.387543648000076,7.35066745000006],[35.37029153000003,7.277360544000032],[35.34580836400005,7.238978042000042],[35.37285763400007,7.231027526000048],[35.33398643000004,7.17993301000007],[35.38035054000005,7.122820944000068],[35.35454357800006,7.118483207000054],[35.33078149100004,7.127092152000046],[35.29988931500003,7.115772707000076],[35.26462189100005,7.136232583000037],[35.23445990600004,7.137931503000061],[35.20456386800004,7.099613933000057],[35.114266403000045,7.102144963000057],[35.08371015600005,7.124841251000021],[35.05391351900005,7.18426348600002],[35.02081333500007,7.18578179800005],[34.965621224000074,7.215074367000057],[34.94244919000005,7.19290841000003],[34.89809304100004,7.184790768000028],[34.890591089000054,7.159336462000056],[34.89267251800004,7.091504588000021],[34.87708233300003,7.069790269000066],[34.88434041800008,7.030759646000035],[34.90208104300007,7.030915407000066],[34.91132545600004,6.988154524000038],[34.945707937000066,6.944131046000052],[34.973957711000025,6.925165673000038],[34.997882971000024,6.892863830000067],[34.99236460800006,6.864031074000025],[34.96899440000004,6.859264409000048],[34.94563801900006,6.826537307000024],[34.93366099800005,6.796293009000067],[34.98537100200008,6.798202512000046],[35.04291161900005,6.810497235000071],[35.07986179400007,6.81079876900003],[35.14677620900005,6.761095086000068],[35.179559546000064,6.727364908000027],[35.17822016700006,6.709621103000075],[35.19766214500004,6.680216192000046],[35.186250262000044,6.626927301000023],[35.19534260800003,6.597440955000025],[35.18678158600005,6.557474966000029],[35.18557774900006,6.489749267000036],[35.173851643000035,6.466523021000057],[35.199465521000036,6.41090398800003],[35.17849983100007,6.379267700000071],[35.13150426100003,6.395495062000066],[35.106107879000035,6.318904831000054],[35.073462548000066,6.307410026000071],[35.03826853400005,6.304626489000043],[35.01128976700005,6.28025950600005],[34.98497044900006,6.298803941000074],[34.852922775000025,6.332049399000027],[34.8593,6.26722],[34.87055,6.2375],[34.92243,6.13229],[34.96972,6.08653],[34.98138,6.06111],[34.98782,6.01394],[34.97583,5.96472],[34.98638,5.87805],[35.02833,5.81417],[35.10541,5.68833],[35.10388,5.6325],[35.28999,5.50778],[35.2927,5.48764],[35.27041,5.43833],[35.30305,5.37736],[35.32625,5.35708],[35.35284,5.35069],[35.41909,5.3984],[35.44371,5.42552],[35.50471,5.43139],[35.52792,5.42681],[35.72624,5.36444],[35.75375,5.34694],[35.82166,5.32861],[35.79874,5.26555],[35.79624,5.23514],[35.80513,5.20681],[35.83069,5.1684],[35.82361,5.13667],[35.77999,5.08264],[35.77444,4.79861],[35.92472,4.64028],[35.9477,4.62933],[35.95111,4.52111],[36.0453,4.44708],[36.21117,4.448],[36.27166,4.43917],[36.6475,4.44667],[36.71425396400008,4.433850543000062],[36.657532315000026,4.580373676000022],[36.68084120200007,4.604300630000068],[36.64640914100005,4.710757126000033],[36.82847998600005,4.709174806000021],[36.85473946500008,4.736059609000051],[36.86347565500006,4.793039446000023],[36.86070896700005,4.978767301000062],[36.892970983000055,5.109787746000052],[36.92122786400006,5.145130641000037],[36.94896665400006,5.19468654700006],[37.00331111600008,5.199082903000033],[37.08212078400004,5.186382331000061],[37.18182905900005,5.193923041000062],[37.216908441000044,5.212684750000051],[37.23810807800004,5.199433549000048],[37.292357141000025,5.194363099000043],[37.340736313000036,5.159599950000029],[37.36717585100007,5.155099544000052],[37.417214982000075,5.166550595000047],[37.51786323600004,5.220475515000032],[37.62973481100005,5.266009696000026],[37.64670603800005,5.299287273000061],[37.70088005300005,5.305883307000045],[37.747129259000076,5.276610653000034],[37.77282881700006,5.28335127400004],[37.81007817200003,5.268299910000053],[37.852657442000066,5.234646854000061],[37.88508552400003,5.234310022000045],[37.90081933500005,5.244854087000022],[37.904774635000024,5.303957793000052],[37.896374714000046,5.349879911000073],[37.90121237500006,5.373247752000054],[37.935224497000036,5.423033255000064],[37.94681445500004,5.47428560000003],[37.94781448700007,5.537688512000045],[37.941128269000046,5.585105321000071],[37.93017464400003,5.616672147000031],[37.94351999600008,5.639464151000027],[38.00801470400006,5.650154599000075],[38.040814141000055,5.67364673000003],[38.075163846000066,5.688940437000042],[38.088883692000024,5.745607964000044],[38.01987416700007,5.79004003700004],[38.00713428500006,5.849272763000045],[37.98247446700003,5.887824539000064],[37.96857460200005,5.956017667000026],[37.952694705000056,5.96334801200004],[37.903975012000046,5.960507907000022],[37.88048518100004,5.985039044000075],[37.84296543800008,6.010940249000043],[37.803736092000065,5.993178830000033],[37.783175819000064,6.010600270000054],[37.78977580000003,6.049442044000045],[37.77469594400003,6.123855449000075],[37.77809593500007,6.149596620000068],[37.840265601000056,6.248251081000035],[37.85215556300005,6.304783647000022],[37.840085687000055,6.378747021000038],[37.81959582800005,6.393427707000058],[37.797455987000035,6.429239352000025],[37.79992600400004,6.47818157200004],[37.80777488100006,6.500655317000053],[37.87148281900005,6.582228514000064],[37.89277595400006,6.596070541000074],[37.91261203100004,6.590668957000048],[37.93270059300005,6.557206405000045],[37.96876584700004,6.548954434000052],[37.99685384400004,6.575613409000027],[38.01646857000003,6.575178275000042],[38.00959474900003,6.617068244000052],[38.019388640000045,6.665603544000021],[38.050212885000064,6.694124986000077],[38.08000849800004,6.796448477000069],[38.11844427800003,6.871920474000035],[38.13659192200004,6.939727871000059],[38.13015427000005,6.974009886000033]]]]},"properties":{"Shape_Leng":21.7100425603,"Shape_Area":8.3743325391,"ADM1_EN":"SNNP","ADM1_PCODE":"ET07","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[39.09111795800004,3.531103962000032],[39.19694,3.47861],[39.24889,3.47139],[39.295,3.47528],[39.32864,3.49965],[39.33138,3.46917],[39.42249,3.46],[39.45083,3.4625],[39.49958,3.45014],[39.50208,3.42264],[39.51902,3.40931],[39.56027,3.40667],[39.59499,3.50083],[39.78278,3.67833],[39.86666,3.86944],[40,3.92858],[40.1825,4.0225],[40.38861,4.09889],[40.39889,4.12306],[40.67222,4.22861],[40.77338413700005,4.282452356000022],[40.81384277400008,4.25515079500002],[40.844100952000076,4.246257782000043],[40.85576629700006,4.226706981000063],[40.882381440000074,4.212838173000023],[40.88320541400003,4.19265699400006],[40.90415954600007,4.154615879000062],[40.965080261000026,4.132068157000049],[41.00142288200004,4.102709771000036],[41.026065826000035,4.070864201000063],[41.057388306000064,4.047733784000059],[41.07265091000005,4.022595882000076],[41.09186935400004,4.013317108000024],[41.10538864100005,3.985281945000054],[41.169265747000054,3.942579985000066],[41.20098114000007,3.938106060000052],[41.23530197100007,3.958884954000041],[41.27577590900006,3.955415011000071],[41.32975006100003,3.939213037000059],[41.354564667000034,3.960318089000054],[41.39125442500006,3.962757110000041],[41.426750183000024,3.945413113000029],[41.46025466900005,3.956598997000071],[41.479732513000044,3.952177048000067],[41.550659179000036,3.981666088000054],[41.56689834600007,3.96666693700007],[41.61782074000007,3.973889113000041],[41.63159942600004,3.982362032000026],[41.67441177400008,3.95992493600005],[41.69258117700008,3.978048086000058],[41.72356033300008,3.987159967000025],[41.79478836100003,3.960262060000048],[41.84055709900008,3.955019951000054],[41.913089752000076,3.990753889000075],[41.94345855700004,4.016658783000025],[41.94622039800004,4.055664063000052],[41.97904968300003,4.095186234000039],[42,4.093367100000023],[42.05113983200005,4.151518822000071],[42.08766937300004,4.179365158000053],[42.19344320300007,4.178970202000073],[42.37097930900006,4.189451217000055],[42.47552108800005,4.202731133000043],[42.527348192000034,4.203004767000039],[42.58508733100007,4.214725171000055],[42.563789384000074,4.246906929000033],[42.62229,4.26042],[42.74083,4.27278],[42.83167,4.29528],[42.87666,4.31833],[42.91999,4.36403],[42.93361,4.38875],[42.95722,4.48111],[42.98569,4.52542],[43.15819,4.66639],[43.1936,4.68778],[43.32166,4.74861],[43.50854576000006,4.829276613000047],[43.53971904400004,4.78974217800004],[43.79863192000005,4.86921770500004],[43.82342463300006,4.909017784000071],[43.85583,4.91389],[43.92222,4.93444],[43.98194,4.96305],[44.4669,4.93353],[44.95083,4.9025],[45.37447,5.36392],[45.71666,5.73861],[45.99027,6.03555],[46.56139,6.61944],[46.99139,7.05694],[47.55555,7.59222],[47.90405,7.92046],[47.98722,8.00111],[47.74638,8.00361],[47.08693,8.00194],[47.01194,8.00111],[46.31872457000003,8.236580085000071],[45.93556637100005,8.365377520000038],[45.50435861900007,8.50776208000002],[44.69712590200004,8.779709554000021],[44.01055,9.00722],[43.62722,9.35444],[43.58306,9.33611],[43.55527,9.34847],[43.44166,9.41764],[43.42583,9.43458],[43.42777,9.48528],[43.38666,9.55694],[43.32847,9.61958],[43.28333,9.63472],[43.26055,9.68472],[43.22486,9.86319],[43.20409,9.89229],[43.18041,9.90278],[43.11028,9.90889],[43.0843,9.92486],[43.05166,9.96819],[43.01305,10.08111],[42.98055,10.11764],[42.92278,10.14778],[42.89097,10.17208],[42.85069,10.21944],[42.80611,10.35],[42.79708,10.42278],[42.78611,10.45555],[42.72222,10.51792],[42.68111,10.58278],[42.66479,10.63291],[42.76416,10.78042],[42.83861,10.87389],[42.9175,10.95528],[42.94409,11.00244],[42.89097,10.98208],[42.81097,10.98833],[42.7693,11.02319],[42.74819,11.07792],[42.64041,11.09708],[42.60824,11.09158],[42.50111,11.06361],[42.35889,11.01916],[42.30055,11.01139],[42.17166,11.00028],[42.12555,10.99944],[42.01972,10.94472],[41.99194,10.94222],[41.91805,10.95361],[41.83722,10.97305],[41.81170458500003,10.983851437000055],[41.76891322500006,10.991211091000025],[41.739543010000034,10.968331248000027],[41.68083272600006,10.963881473000072],[41.58223227000008,10.962071839000032],[41.484071837000045,10.966902183000059],[41.41008146200005,10.958472469000071],[41.39222140600003,10.96631252000003],[41.30028097600007,10.96406285200004],[41.26816080000003,10.957852979000052],[41.24075053800004,10.92136313800006],[41.23198029300005,10.863653268000064],[41.22006012700007,10.834463355000025],[41.19087985700003,10.796413524000059],[41.16642968700006,10.779713638000032],[41.07726892300008,10.681154098000036],[41.07788878000008,10.639474169000039],[41.08703868600003,10.60056419800003],[41.07130840600007,10.540984345000027],[41.047148080000056,10.477624518000027],[41.03043774400004,10.400444692000065],[41.00509735500003,10.318844901000034],[40.97882682000005,10.194675160000031],[40.97467667400008,10.156645228000059],[40.93655611200006,10.035245519000057],[40.94603604500003,10.001315531000046],[40.96580603500007,9.971685510000043],[41.01335621000004,9.95999537800003],[40.99655603300005,9.928695472000072],[40.94667565800006,9.88035569300007],[40.84733493200008,9.790326117000063],[40.82556475100006,9.763456219000034],[40.751893772000074,9.654612077000024],[40.70220239300005,9.536092664000023],[40.69618218200003,9.502225672000066],[40.69613891500006,9.446065145000034],[40.71953330700006,9.44387690800005],[40.81576375600008,9.45273661400006],[40.86218399100005,9.46301647000007],[40.88999406900007,9.448646402000065],[40.927514099000064,9.405136336000055],[40.891213899000036,9.389536466000038],[40.858223742000064,9.385366568000052],[40.79764350800008,9.39555673700005],[40.79262340300005,9.367396777000067],[40.81256332600003,9.310926782000024],[40.84410344300005,9.304796701000043],[40.92697385500003,9.323126438000031],[40.97071412500003,9.351506276000066],[41.014074331000074,9.357206139000027],[41.05648461700008,9.391065970000056],[41.145445100000074,9.42462566100005],[41.19480542600007,9.462295465000068],[41.219885617000045,9.490715353000041],[41.239315729000054,9.49879528100007],[41.30869603700006,9.50307506200005],[41.393086338000046,9.485754821000057],[41.49096665500008,9.457424547000073],[41.540606997000054,9.499584337000044],[41.56415712200004,9.506944249000071],[41.642597468000076,9.515143991000059],[41.65415740700007,9.481234004000044],[41.70227755600007,9.466653867000048],[41.73461770200004,9.471483758000034],[41.72802773800004,9.489033754000047],[41.74906819100005,9.60055352300003],[41.74860187400003,9.636353472000053],[41.77382847000007,9.653703360000065],[41.80867856300006,9.64055326600004],[41.87323897700003,9.683882986000071],[41.90613909500007,9.679302884000037],[42.01890934200003,9.617922606000036],[42.03080939300003,9.618482565000022],[42.18577054800005,9.773561785000027],[42.21335069400004,9.783741669000051],[42.25099084900006,9.783491543000025],[42.29352092700003,9.757491440000024],[42.33977280800008,9.719617623000033],[42.376572174000046,9.713839606000022],[42.44853511400004,9.721988407000026],[42.49895844500003,9.72105447000007],[42.56805714500007,9.73692815000004],[42.64742734400005,9.77521203300006],[42.69411559200006,9.768675546000054],[42.73053226900004,9.721053651000034],[42.82297486900006,9.674365316000035],[42.89767600600004,9.650087287000076],[42.935026727000036,9.679967474000023],[42.95090071000004,9.672497336000049],[42.97797974200006,9.628610517000027],[42.968641956000056,9.59219390800007],[42.94343027700006,9.587525199000027],[42.90888087400003,9.563247560000036],[42.879934228000025,9.584724145000052],[42.84071607900006,9.582856765000031],[42.813636848000044,9.57258550000006],[42.787491242000044,9.523096305000024],[42.73613405100008,9.49508368100004],[42.71465737500006,9.474541032000047],[42.681975572000056,9.469872345000056],[42.64088981900005,9.447462242000029],[42.53745334200005,9.372981780000032],[42.556290423000064,9.321051281000052],[42.551360282000076,9.28657135700007],[42.57099025900004,9.258181333000039],[42.59548013700004,9.193591358000049],[42.63470016100007,9.158521290000067],[42.63511011000003,9.143971312000076],[42.59934556800005,9.106174348000025],[42.64434990700005,9.072981394000067],[42.70306981200008,8.980911350000042],[42.73063980400008,8.948021313000027],[42.80515980900003,8.870031190000077],[42.84954988100003,8.844291089000023],[42.86532986700007,8.82511106800007],[42.86535980200006,8.804351102000055],[42.84391957400004,8.75792124700007],[42.83198932400006,8.695231381000042],[42.83841924600006,8.664391413000033],[42.85987923300007,8.63630138800005],[42.89878926000006,8.602671316000055],[42.912369041000034,8.52210139300007],[42.89702878200006,8.457751538000025],[42.89884863900005,8.40910160900006],[42.88440855700003,8.398511668000026],[42.768168047000074,8.36317208500003],[42.73487772100003,8.29437228300003],[42.70159725600007,8.179612544000065],[42.66135697300007,8.130282726000075],[42.63062689700007,8.140432805000046],[42.61597690200006,8.159602825000036],[42.56702702100006,8.25561284500003],[42.52976750400006,8.454832691000036],[42.50255751800006,8.492082721000031],[42.32303701300003,8.536773208000056],[42.26307710000003,8.635953264000023],[42.23966702600006,8.639883325000028],[42.21561685200004,8.611203440000054],[42.097746132000054,8.518988912000054],[42.06972595000008,8.493974029000071],[42.02600558600005,8.425834241000075],[42.027053755000054,8.323024846000067],[41.94840464200007,8.200894719000075],[41.92634422000003,8.080564910000021],[41.92216392000006,7.978105022000022],[41.91240351600004,7.844395182000028],[41.95714348700005,7.77478512600004],[41.94249331300006,7.727465209000059],[41.90480293500008,7.635925389000022],[41.867102525000064,7.53277558000002],[41.89612231700005,7.411205596000059],[42.19911009600003,7.291440179000062],[42.20985301500008,7.264004914000054],[42.20345682000004,7.194632988000023],[42.204702686000076,7.141035027000044],[42.18696251700004,7.096395109000071],[42.15761230000004,7.051325216000066],[42.16264221300003,7.007115234000025],[42.13416198700003,6.954165340000031],[42.10605182900008,6.930215429000043],[42.07623162900006,6.886735528000031],[42.06288076000004,6.825923126000021],[42.05553122900005,6.748755663000054],[42.025491026000054,6.706415755000023],[42.01346087600007,6.658605806000025],[41.999180790000025,6.641615850000051],[42.00648074800006,6.614385852000055],[41.999540669000055,6.589845874000048],[41.936410376000026,6.553176036000025],[41.88798017100004,6.53534615500007],[41.86073008300008,6.535341221000067],[41.85366585000003,6.568909076000068],[41.81966002100006,6.570476295000049],[41.75787974700006,6.540536444000054],[41.738929635000034,6.519906501000037],[41.69032926800003,6.429416634000063],[41.63334899200004,6.391386771000043],[41.61968888300004,6.361716810000075],[41.528008793000026,6.464936979000072],[41.43778865400003,6.543967151000061],[41.380038496000054,6.565527269000029],[41.35838841800006,6.565527316000043],[41.228468081000074,6.623007581000024],[41.13102787300005,6.691257776000043],[41.071207651000066,6.687897910000061],[41.01553735400006,6.644558033000067],[40.98996717700004,6.604238101000021],[40.900056653000036,6.511638298000037],[40.88561652000004,6.472118329000068],[40.86035635200005,6.436198390000072],[40.85674623600005,6.385908396000048],[40.86450613000005,6.320258382000077],[40.879696083000056,6.266508351000027],[40.87797591800006,6.187668358000053],[40.86787581100003,6.151288376000025],[40.86667566400007,6.076638369000023],[40.87840553700005,5.987518345000069],[40.87479519000004,5.807898320000049],[40.922295132000045,5.683378211000047],[40.83220476500003,5.65589836700002],[40.81148465700005,5.634908392000057],[40.752884376000054,5.594398484000067],[40.69437411500007,5.567168583000068],[40.67958401800007,5.540638594000029],[40.63305383200003,5.530068672000027],[40.60538367000004,5.490288706000058],[40.581043554000075,5.475948735000031],[40.53289327700003,5.410648792000075],[40.36950264200004,5.38640904600004],[40.276672279000024,5.368169189000071],[40.24063214200004,5.366079246000027],[40.17443187500004,5.353379345000064],[40.09795160800007,5.364879467000037],[40.03368142100004,5.396789590000026],[39.94229090700003,5.284989659000075],[39.907300672000076,5.219609665000064],[39.878400448000036,5.140319646000023],[39.83359012600005,5.032769630000075],[39.812860002000036,5.002069636000044],[39.804449899000076,4.951479603000053],[39.765069607000044,4.846849563000035],[39.74355936300003,4.723479474000044],[39.745899293000036,4.666579411000043],[39.72512917300003,4.63305940500004],[39.70326900400005,4.568169368000042],[39.64205861100004,4.435939291000068],[39.61881844100003,4.36846924200006],[39.585778238000046,4.296539195000037],[39.56696812600006,4.264589181000076],[39.539687995000065,4.235169173000031],[39.52878786900004,4.16673909800005],[39.47827754200006,4.040328985000031],[39.499677537000025,3.96572886000007],[39.482847451000055,3.941998843000022],[39.39961698500008,3.795658718000027],[39.284696387000054,3.623078557000042],[39.220496129000026,3.602478588000054],[39.09111795800004,3.531103962000032]]]},"properties":{"Shape_Leng":35.9020305494,"Shape_Area":25.4667069335,"ADM1_EN":"Somali","ADM1_PCODE":"ET05","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}},
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[39.98425632200008,14.432340698000075],[39.949863675000074,14.410645311000053],[39.923756024000056,14.414994941000032],[39.87255345300008,14.461897605000047],[39.83131514100006,14.484855217000074],[39.81318087400007,14.482371486000034],[39.79261010000005,14.50019201200007],[39.76678566700008,14.540761419000034],[39.709332679000056,14.551368027000024],[39.68028972600007,14.588753205000046],[39.65742630600005,14.589822925000021],[39.628808599000024,14.608764478000069],[39.62268647900004,14.635943927000028],[39.575182287000075,14.669890578000036],[39.50267493900003,14.67701014100004],[39.47753421600004,14.60362931900005],[39.491679530000056,14.582474713000067],[39.50038652500007,14.543799707000062],[39.49325313200006,14.509462223000071],[39.472642061000045,14.498251100000061],[39.45326340300005,14.526868381000043],[39.398463254000035,14.538201182000023],[39.36460143000005,14.533988573000045],[39.36464812000003,14.505821387000026],[39.340012122000076,14.511309453000024],[39.31384799400007,14.478881045000037],[39.314812946000075,14.437557153000057],[39.30083248300008,14.411389074000056],[39.249747945000024,14.392260046000047],[39.22100254800006,14.453800363000028],[39.216707959000075,14.49607201200007],[39.23145288300003,14.51916675800004],[39.23863151300003,14.565882257000055],[39.22646718300007,14.568218710000053],[39.20032289200003,14.611037689000057],[39.157450433000065,14.620278210000038],[39.124664419000055,14.613430921000031],[39.097596364000026,14.633373262000077],[39.02351901500003,14.632369865000044],[39.008468608000044,14.616238802000055],[39.00996374400006,14.590275806000022],[38.97473321600006,14.54159684900003],[38.93726709500004,14.532087065000042],[38.904877260000035,14.501192779000064],[38.84839416800003,14.495687701000065],[38.79404033700007,14.463219068000058],[38.77484981600003,14.466887417000066],[38.73054768600008,14.458896300000049],[38.70294283800007,14.465288096000052],[38.61577435800007,14.433529122000039],[38.594375083000045,14.438576193000074],[38.52686561100006,14.414772732000074],[38.48369845900004,14.418195981000054],[38.44741137800003,14.410416756000075],[38.43217395800008,14.427998714000069],[38.42078183900003,14.46374772200005],[38.39480763600005,14.481472588000031],[38.36223350800003,14.48676617500007],[38.35591982500006,14.506738546000065],[38.315242314000045,14.550672305000035],[38.31531819200006,14.573471492000067],[38.28608100300005,14.60750637600006],[38.26450586900006,14.614130603000035],[38.26108313100008,14.667144],[38.22824022700007,14.685774297000023],[38.187405288000036,14.689155056000061],[38.150304928000025,14.674762049000037],[38.10915959100004,14.690091432000031],[38.09154474700006,14.706628799000043],[38.05348955900007,14.710827755000025],[38.018264385000066,14.736637359000042],[38.02147011400007,14.754980674000024],[37.99199610000005,14.779187186000058],[37.987922264000076,14.807947037000076],[37.971047991000034,14.830449088000023],[37.94029629100004,14.845476907000034],[37.90212812400006,14.810034616000053],[37.87566050300006,14.799868305000075],[37.84945360900008,14.812515420000068],[37.83262237900004,14.805154923000032],[37.78185992200008,14.734886032000077],[37.773573456000065,14.698207052000043],[37.782741687000055,14.65372919500004],[37.77355448000003,14.630389106000052],[37.74153494800004,14.642437537000035],[37.72367322200006,14.623757455000032],[37.67074345700007,14.504168423000067],[37.65716951700006,14.494745531000035],[37.59536375400006,14.477582397000049],[37.57253101600003,14.455381370000055],[37.548789784000064,14.446135214000037],[37.48895134300005,14.473108392000029],[37.443125562000034,14.470585996000068],[37.42974504500006,14.480212523000034],[37.403338287000054,14.471358708000025],[37.37710982100003,14.42853025200003],[37.34403103600005,14.409044708000067],[37.30790988000007,14.442622822000033],[37.24785106500008,14.429494461000047],[37.212001635000036,14.436939019000022],[37.17969781000005,14.414514492000023],[37.133841490000066,14.40541988700005],[37.09955439000004,14.333267986000067],[37.103384651000056,14.29076810600003],[37.08929718600007,14.267999369000052],[37.03802429000007,14.264247622000028],[37.00809751400004,14.249484421000034],[36.969233974000076,14.28708814600003],[36.863263550000056,14.317819457000041],[36.83220887700003,14.306866767000031],[36.81667001300008,14.31270188600007],[36.746483752000074,14.317707394000024],[36.68577859900006,14.295905838000067],[36.63640640600005,14.307478637000031],[36.618611513000076,14.29414378100006],[36.55273739800003,14.278901204000022],[36.53944,14.24611],[36.48115881100006,14.064990481000052],[36.44639,13.95694],[36.48694,13.83944],[36.45352451600007,13.762965645000065],[36.48067406800004,13.734733629000061],[36.477664256000025,13.693450618000043],[36.50439169800006,13.665134416000058],[36.51281608000005,13.631304600000021],[36.53783675300008,13.581960353000056],[36.56027328600004,13.563341128000047],[36.572427755000035,13.522249879000071],[36.59810236000004,13.504735359000051],[36.57877691900006,13.482191022000052],[36.56642194400007,13.446200746000045],[36.569510996000076,13.425268509000034],[36.60949644500005,13.375213016000032],[36.64912614800005,13.380191237000076],[36.66459551400004,13.36656520400004],[36.68510106900004,13.374785176000046],[36.73465985300004,13.363072466000062],[36.762180940000064,13.374144353000077],[36.78843733700006,13.40762932900003],[36.808622144000026,13.418499846000032],[36.817147515000045,13.446529213000076],[36.837915545000044,13.444639205000044],[36.90513609900006,13.388151803000028],[37.00184710900004,13.35668362000007],[37.03969357700004,13.351033380000047],[37.069265442000074,13.317440271000066],[37.098737854000035,13.316356616000064],[37.15031358500005,13.300761329000068],[37.185726628000054,13.282550094000044],[37.20470911800004,13.255712392000078],[37.25587690000003,13.294970844000034],[37.280647187000056,13.28494396700006],[37.321827248000034,13.297177615000066],[37.35040973300005,13.326731793000022],[37.36524188900006,13.359850854000058],[37.38865733100005,13.356305259000067],[37.419581863000076,13.368158366000046],[37.44050583400008,13.354094306000036],[37.47653906000005,13.367708272000073],[37.51778052700007,13.366474953000022],[37.611006289000045,13.411080451000032],[37.63709725600006,13.413895488000037],[37.65656396900005,13.441373475000034],[37.69414243700004,13.472426752000047],[37.70961749700007,13.530195776000028],[37.727027012000065,13.563421897000069],[37.774765315000025,13.611653900000022],[37.78414945000003,13.587719252000056],[37.76902466300004,13.562598913000045],[37.79265930500003,13.520614519000048],[37.80900596300006,13.51909388100006],[37.816905536000036,13.463175524000064],[37.86640019400005,13.475127249000025],[37.904101473000026,13.44704897400004],[37.94648738400008,13.46641508600004],[37.96838892400007,13.493693865000068],[38.008103955000024,13.500828980000051],[38.020729473000074,13.481256969000071],[38.059441012000036,13.467191867000054],[38.11532188000007,13.494262651000042],[38.145192748000056,13.471678589000021],[38.173720255000035,13.49344396600003],[38.200897636000036,13.480138399000055],[38.24312796300006,13.496734238000045],[38.278917156000034,13.485519139000075],[38.31985647500005,13.502151981000054],[38.34119673400005,13.537642857000037],[38.35995090700004,13.553004272000067],[38.406508159000055,13.539411139000038],[38.46521463300007,13.567644900000062],[38.48985275800004,13.558012334000068],[38.55394614100004,13.550308131000065],[38.54245898200003,13.525802209000062],[38.49680462400005,13.50678939200003],[38.51174260200003,13.472911396000029],[38.56207545800004,13.483329712000057],[38.59011241500008,13.50612402300004],[38.62246698300004,13.495379052000033],[38.66215026800006,13.531181440000069],[38.67643033400003,13.48344026600006],[38.63328095500003,13.472711336000032],[38.61578828300003,13.451400938000063],[38.62237124400008,13.411227093000036],[38.64863995300004,13.396521310000026],[38.70568553700008,13.38929888000007],[38.733132743000056,13.39881121600007],[38.73019398200006,13.365402085000028],[38.74181258900006,13.33983243800003],[38.72991659400003,13.269219220000025],[38.77918740800004,13.249370877000047],[38.80069076600006,13.247309866000023],[38.86310541200004,13.209497662000047],[38.87621835400006,13.220508148000022],[38.91333401900005,13.224472513000023],[38.95174191800004,13.237514728000065],[38.95582407400008,13.21201319000005],[38.99736778000005,13.203404457000033],[39.04256980100007,13.155619385000023],[39.036933944000054,13.134239248000029],[38.97860188800007,13.09896208400005],[38.98982390400005,13.081289800000036],[39.00021910600003,13.00344377600004],[39.03426109000003,13.00046831000003],[39.07414789500007,12.976086022000061],[39.08285895600005,12.959272311000063],[39.11914623200005,12.960857076000025],[39.16346988400005,12.948412102000077],[39.192832,12.928084988000023],[39.258728715000075,12.914682269000025],[39.279022835000035,12.856247515000064],[39.277685629000075,12.826024042000029],[39.30721557900006,12.811652772000059],[39.29573004800005,12.78549726600005],[39.267663775000074,12.77133496600004],[39.28093232300006,12.743338179000034],[39.269535044000065,12.723219788000051],[39.28048218300006,12.688008259000071],[39.23885772300008,12.66309915200003],[39.19887097900005,12.660395375000064],[39.17440127700007,12.643480483000076],[39.18574671600004,12.60691016900006],[39.20159372400008,12.582314154000073],[39.236354548000065,12.473085540000056],[39.245529419000036,12.352944384000068],[39.29087425500006,12.296071961000052],[39.32170279400003,12.304866179000044],[39.35015160100005,12.29841342800006],[39.41951424100006,12.296596726000075],[39.45556405600007,12.32502717500006],[39.507440992000056,12.332852040000034],[39.52266195200008,12.326414029000034],[39.543273525000075,12.265007941000022],[39.57254390300005,12.255925599000022],[39.60500034300003,12.270562437000024],[39.63227443100004,12.307654083000045],[39.70626514400004,12.306206621000058],[39.75855376100003,12.319953055000042],[39.76154694200005,12.303252024000074],[39.817611330000034,12.324029795000058],[39.83087630400007,12.357500495000068],[39.814929224000025,12.407061931000044],[39.83336777900007,12.43348185700006],[39.88106566400006,12.484460752000075],[39.86818189100006,12.494316991000062],[39.86319581200007,12.53144859300005],[39.83276409800004,12.549890953000045],[39.806736717000035,12.596283054000025],[39.83257350300005,12.63437755600006],[39.82007780500004,12.65882725800003],[39.82610431200004,12.693741426000031],[39.83941388900007,12.713274352000042],[39.89904895900003,12.762307990000068],[39.94270781200004,12.77147870400006],[39.97798291700008,12.792190897000069],[39.96950860100003,12.81412627800006],[39.92935826300004,12.874393049000048],[39.90424742000005,12.92175437700007],[39.87277411900004,12.942250135000052],[39.86001018200005,12.96963240100007],[39.86305890300008,13.01970368800005],[39.83319579400006,13.088560810000047],[39.831223065000074,13.112541892000024],[39.81194707900005,13.155157411000062],[39.803772141000024,13.18967977400007],[39.80853293600006,13.217173927000033],[39.78722496900008,13.245630310000024],[39.785749087000056,13.262705022000034],[39.71972319500003,13.294554241000071],[39.73774666300005,13.321094395000046],[39.74355080700008,13.388937370000065],[39.727742360000036,13.422228443000051],[39.71951747700007,13.475681038000062],[39.72342470600006,13.509191865000048],[39.74454715000007,13.570811598000034],[39.76303208300004,13.571270992000052],[39.80383567400003,13.553725030000066],[39.863907174000076,13.548160815000074],[39.86742260400007,13.658281017000036],[39.87622210300003,13.680253978000053],[39.87419850300006,13.749403871000027],[39.85319733600005,13.766511068000057],[39.85227309800007,13.794897904000038],[39.83370132500005,13.821384023000064],[39.842246326000065,13.83840288500005],[39.82902222000007,13.868502307000028],[39.83327865100006,13.918403375000025],[39.817633132000026,13.942581124000071],[39.81565090600003,13.968239547000053],[39.85859366300008,13.973186820000024],[39.885936994000076,14.012203097000054],[39.85472990900007,14.030980888000045],[39.84399702300004,14.050258584000062],[39.83762477300007,14.154198463000057],[39.76713301700005,14.140043372000036],[39.74954134600006,14.151798413000051],[39.68199849500007,14.164686730000028],[39.672269655000036,14.200334724000072],[39.694087480000064,14.241311387000053],[39.742216588000076,14.234941699000046],[39.75730409100004,14.239843563000022],[39.757605709000075,14.277177362000032],[39.726247716000046,14.302962213000058],[39.771334523000064,14.319853774000023],[39.77920407800008,14.330532193000067],[39.77204903900008,14.373850666000067],[39.80094810700007,14.387177744000041],[39.838065835000066,14.380497410000032],[39.85311879000005,14.367098800000065],[39.91626741600004,14.370258854000042],[39.95026941200007,14.360418709000044],[39.990843734000066,14.381967487000054],[39.979576327000075,14.40987599400006],[39.98425632200008,14.432340698000075]]]},"properties":{"Shape_Leng":15.6577218494,"Shape_Area":4.39912581644,"ADM1_EN":"Tigray","ADM1_PCODE":"ET01","ADM1_REF":null,"ADM1ALT1EN":null,"ADM1ALT2EN":null,"ADM0_EN":"Ethiopia","ADM0_PCODE":"ET","date":"2019-08-19","validOn":"2020-10-08","validTo":null}}
]};
/* globals JQClass */
/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
	'use strict';
	var initializing = false;

	// The base JQClass implementation (does nothing)
	window.JQClass = function(){};

	// Collection of derived classes
	JQClass.classes = {};
 
	// Create a new JQClass that inherits from this class
	JQClass.extend = function extender(prop) {
		var base = this.prototype;

		// Instantiate a base class (but only create the instance, don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) { // jshint loopfunc:true
			// Check if we're overwriting an existing function
			if (typeof prop[name] === 'function' && typeof base[name] === 'function') {
				prototype[name] = (function (name, fn) {
					return function () {
						var __super = this._super;
						// Add a new ._super() method that is the same method but on the super-class
						this._super = function (args) {
							return base[name].apply(this, args || []);
						};
						var ret = fn.apply(this, arguments);
						// The method only needs to be bound temporarily, so we remove it when we're done executing
						this._super = __super;
						return ret;
					};
				})(name, prop[name]);
			// Check if we're overwriting existing default options.
			} else if (typeof prop[name] === 'object' && typeof base[name] === 'object' && name === 'defaultOptions') {
				var obj1 = base[name];
				var obj2 = prop[name];
				var obj3 = {};
				var key;
				for (key in obj1) { // jshint forin:false
					obj3[key] = obj1[key];
				}
				for (key in obj2) { // jshint forin:false
					obj3[key] = obj2[key];
				}
				prototype[name] = obj3;
			} else {
				prototype[name] = prop[name];
			}
		}

		// The dummy class constructor
		function JQClass() {
			// All construction is actually done in the init method
			if (!initializing && this._init) {
				this._init.apply(this, arguments);
			}
		}

		// Populate our constructed prototype object
		JQClass.prototype = prototype;

		// Enforce the constructor to be what we expect
		JQClass.prototype.constructor = JQClass;

		// And make this class extendable
		JQClass.extend = extender;

		return JQClass;
	};
})();
/*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
(function($) { // Ensure $, encapsulate
	'use strict';

	/** <p>Abstract base class for collection plugins v1.0.2.</p>
		<p>Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.</p>
		<p>Licensed under the MIT license (http://keith-wood.name/licence.html).</p>
		<p>Use {@link $.JQPlugin.createPlugin} to create new plugins using this framework.</p>
		<p>This base class provides common functionality such as:</p>
		<ul>
			<li>Creates jQuery bridge - allowing you to invoke your plugin on a collection of elements.</li>
			<li>Handles initialisation including reading settings from metadata -
				an instance object is attached to the affected element(s) containing all the necessary data.</li>
			<li>Handles option retrieval and update - options can be set through default values,
				through inline metadata, or through instantiation settings.<br>
				Metadata is specified as an attribute on the element:
				<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
				Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.</li>
			<li>Handles method calling - inner functions starting with '_'are inaccessible,
				whereas others can be called via <code>$(selector).pluginName('functionName')</code>.</li>
			<li>Handles plugin destruction - removing all trace of the plugin.</li>
		</ul>
		@module JQPlugin
		@abstract */
	JQClass.classes.JQPlugin = JQClass.extend({

		/** Name to identify this plugin.
			@example name: 'tabs' */
		name: 'plugin',

		/** Default options for instances of this plugin (default: {}).
			@example defaultOptions: {
  selectedClass: 'selected',
  triggers: 'click'
} */
		defaultOptions: {},

		/** Options dependent on the locale.
			Indexed by language and (optional) country code, with '' denoting the default language (English/US).
			Normally additional languages would be provided as separate files to all them to be included as needed.
			@example regionalOptions: {
  '': {
    greeting: 'Hi'
  }
} */
		regionalOptions: {},

		/** Whether or not a deep merge should be performed when accumulating options.
			The default is <code>true</code> but can be overridden in a sub-class. */
		deepMerge: true,

		/** Retrieve a marker class for affected elements.
			In the format: <code>is-&lt;pluginName&gt;</code>.
			@protected
			@return {string} The marker class. */
		_getMarker: function() {
			return 'is-' + this.name;
		},

		/** Initialise the plugin.
			Create the jQuery bridge - plugin name <code>xyz</code>
			produces singleton <code>$.xyz</code> and collection function <code>$.fn.xyz</code>.
			@protected */
		_init: function() {
			// Apply default localisations
			$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
			// Camel-case the name
			var jqName = camelCase(this.name);
			// Expose jQuery singleton manager
			$[jqName] = this;
			// Expose jQuery collection plugin
			$.fn[jqName] = function(options) {
				var otherArgs = Array.prototype.slice.call(arguments, 1);
				var inst = this;
				var returnValue = this;
				this.each(function () {
					if (typeof options === 'string') {
						if (options[0] === '_' || !$[jqName][options]) {
							throw 'Unknown method: ' + options;
						}
						var methodValue = $[jqName][options].apply($[jqName], [this].concat(otherArgs));
						if (methodValue !== inst && methodValue !== undefined) {
							returnValue = methodValue;
							return false;
						}
					} else {
						$[jqName]._attach(this, options);
					}
				});
				return returnValue;
			};
		},

		/** Set default options for all subsequent instances.
			@param {object} options The new default options.
			@example $.pluginName.setDefaults({name: value, ...}) */
		setDefaults: function(options) {
			$.extend(this.defaultOptions, options || {});
		},

		/** Initialise an element. Called internally only.
			Adds an instance object as data named for the plugin.
			Override {@linkcode module:JQPlugin~_postAttach|_postAttach} for plugin-specific processing.
			@private
			@param {Element} elem The element to enhance.
			@param {object} options Overriding settings. */
		_attach: function(elem, options) {
			elem = $(elem);
			if (elem.hasClass(this._getMarker())) {
				return;
			}
			elem.addClass(this._getMarker());
			options = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(elem), options || {});
			var inst = $.extend({name: this.name, elem: elem, options: options}, this._instSettings(elem, options));
			elem.data(this.name, inst); // Save instance against element
			this._postAttach(elem, inst);
			this.option(elem, options);
		},

		/** Retrieve additional instance settings.
			Override this in a sub-class to provide extra settings.
			These are added directly to the instance object.
			Default attributes of an instance object are shown as properties below:
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} options The instance options.
			@return {object} Any extra instance values.
			@property {Element} elem The element to which this instance applies.
			@property {string} name The name of this plugin.
			@property {object} options The accumulated options for this instance.
			@example _instSettings: function(elem, options) {
  return {nav: elem.find(options.navSelector)};
} */
		_instSettings: function(elem, options) { // jshint unused:false
			return {};
		},

		/** Plugin specific post initialisation.
			Override this in a sub-class to perform extra activities.
			This is where you would implement your plugin's main functionality.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@example _postAttach: function(elem, inst) {
  elem.on('click.' + this.name, function() {
    ...
  });
} */
		_postAttach: function(elem, inst) { // jshint unused:false
		},
		
		/** Retrieve metadata configuration from the element.
			Metadata is specified as an attribute:
			<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
			Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.
			@private
			@param {jQuery} elem The source element.
			@return {object} The inline configuration or {}. */
		_getMetadata: function(elem) {
			try {
				var data = elem.data(this.name.toLowerCase()) || '';
				data = data.replace(/(\\?)'/g, function(e, t) {
					return t ? '\'' : '"';
				}).replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
					var count = data.substring(0, i).match(/"/g); // Handle embedded ':'
					return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
				}).replace(/\\:/g, ':');
				data = $.parseJSON('{' + data + '}');
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						var value = data[key];
						if (typeof value === 'string' && value.match(/^new Date\(([-0-9,\s]*)\)$/)) { // Convert dates
							data[key] = eval(value); // jshint ignore:line
						}
					}
				}
				return data;
			}
			catch (e) {
				return {};
			}
		},

		/** Retrieve the instance data for element.
			@protected
			@param {Element} elem The source element.
			@return {object} The instance data or <code>{}</code> if none. */
		_getInst: function(elem) {
			return $(elem).data(this.name) || {};
		},

		/** Retrieve or reconfigure the settings for a plugin.
			If new settings are provided they are applied to the instance options.
			If an option name only is provided the value of that option is returned.
			If no name or value is provided, all options are returned.
			Override {@linkcode module:JQPlugin~_optionsChanged|_optionsChanged}
			for plugin-specific processing when option values change.
			@param {Element} elem The source element.
			@param {object|string} [name] The collection of new option values or the name of a single option.
			@param {any} [value] The value for a single named option.
			@return {any|object} If retrieving a single value or all options.
			@example $(selector).plugin('option', 'name', value) // Set one option
$(selector).plugin('option', {name: value, ...}) // Set multiple options
var value = $(selector).plugin('option', 'name') // Get one option
var options = $(selector).plugin('option') // Get all options */
		option: function(elem, name, value) {
			elem = $(elem);
			var inst = elem.data(this.name);
			var options = name || {};
			if  (!name || (typeof name === 'string' && typeof value === 'undefined')) {
				options = (inst || {}).options;
				return (options && name ? options[name] : options);
			}
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			if (typeof name === 'string') {
				options = {};
				options[name] = value;
			}
			this._optionsChanged(elem, inst, options);
			$.extend(inst.options, options);
		},

		/** Plugin specific options processing.
			Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.
			Override this in a sub-class to perform extra activities.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@param {object} options The new options.
			@example _optionsChanged: function(elem, inst, options) {
  if (options.name != inst.options.name) {
    elem.removeClass(inst.options.name).addClass(options.name);
  }
} */
		_optionsChanged: function(elem, inst, options) { // jshint unused:false
		},

		/** Remove all trace of the plugin.
			Override {@linkcode module:JQPlugin~_preDestroy|_preDestroy} for plugin-specific processing.
			@param {Element} elem The source element.
			@example $(selector).plugin('destroy') */
		destroy: function(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			this._preDestroy(elem, this._getInst(elem));
			elem.removeData(this.name).removeClass(this._getMarker());
		},

		/** Plugin specific pre destruction.
			It is invoked as part of the {@linkcode module:JQPlugin~destroy|destroy} processing.
			Override this in a sub-class to perform extra activities and undo everything that was
			done in the {@linkcode module:JQPlugin~_postAttach|_postAttach} or
			{@linkcode module:JQPlugin~_optionsChanged|_optionsChanged} functions.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@example _preDestroy: function(elem, inst) {
  elem.off('.' + this.name);
} */
		_preDestroy: function(elem, inst) { // jshint unused:false
		}
	});

	/** Convert names from hyphenated to camel-case.
		@private
		@param {string} value The original hyphenated name.
		@return {string} The camel-case version. */
	function camelCase(name) {
		return name.replace(/-([a-z])/g, function(match, group) {
			return group.toUpperCase();
		});
	}

	/** Expose the plugin base.
		@namespace $.JQPlugin */
	$.JQPlugin = {

		/** Create a new collection plugin.
			@memberof $.JQPlugin
			@param {string} [superClass='JQPlugin'] The name of the parent class to inherit from.
			@param {object} overrides The property/function overrides for the new class.
				See {@link module:JQPlugin|JQPlugin} for the base functionality.
			@example $.JQPlugin.createPlugin({ // Define the plugin
  name: 'tabs',
  defaultOptions: {selectedClass: 'selected'},
  _initSettings: function(elem, options) { return {...}; },
  _postAttach: function(elem, inst) { ... }
});
$('selector').tabs(); // And instantiate it */
		createPlugin: function(superClass, overrides) {
			if (typeof superClass === 'object') {
				overrides = superClass;
				superClass = 'JQPlugin';
			}
			superClass = camelCase(superClass);
			var className = camelCase(overrides.name);
			JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
			new JQClass.classes[className](); // jshint ignore:line
		}
	};

})(jQuery);
/* http://keith-wood.name/calendars.html
   Calendars for jQuery v2.1.0.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) August 2009.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict
	'use strict';

	function Calendars() {
		this.regionalOptions = [];
		/** Localised values.
			@memberof Calendars
			@property {string} [invalidCalendar='Calendar {0} not found']
				Error message for an unknown calendar.
			@property {string} [invalidDate='Invalid {0} date']
				Error message for an invalid date for this calendar.
			@property {string} [invalidMonth='Invalid {0} month']
				Error message for an invalid month for this calendar.
			@property {string} [invalidYear='Invalid {0} year']
				Error message for an invalid year for this calendar.
			@property {string} [differentCalendars='Cannot mix {0} and {1} dates']
				Error message for mixing different calendars. */
		this.regionalOptions[''] = {
			invalidCalendar: 'Calendar {0} not found',
			invalidDate: 'Invalid {0} date',
			invalidMonth: 'Invalid {0} month',
			invalidYear: 'Invalid {0} year',
			differentCalendars: 'Cannot mix {0} and {1} dates'
		};
		this.local = this.regionalOptions[''];
		this.calendars = {};
		this._localCals = {};
	}

	/** Create the calendars plugin.
		<p>Provides support for various world calendars in a consistent manner.</p>
		<p>Use the global instance, <code>$.calendars</code>, to access the functionality.</p>
		@class Calendars
		@example $.calendars.instance('julian').newDate(2014, 12, 25) */
	$.extend(Calendars.prototype, {

		/** Obtain a calendar implementation and localisation.
			@memberof Calendars
			@param {string} [name='gregorian'] The name of the calendar, e.g. 'gregorian', 'persian', 'islamic'.
			@param {string} [language=''] The language code to use for localisation (default is English).
			@return {Calendar} The calendar and localisation.
			@throws Error if calendar not found.
			@example $.calendars.instance()
$.calendars.instance('persian')
$.calendars.instance('hebrew', 'he') */
		instance: function(name, language) {
			name = (name || 'gregorian').toLowerCase();
			language = language || '';
			var cal = this._localCals[name + '-' + language];
			if (!cal && this.calendars[name]) {
				cal = new this.calendars[name](language);
				this._localCals[name + '-' + language] = cal;
			}
			if (!cal) {
				throw (this.local.invalidCalendar || this.regionalOptions[''].invalidCalendar).
					replace(/\{0\}/, name);
			}
			return cal;
		},

		/** Create a new date - for today if no other parameters given.
			@memberof Calendars
			@param {CDate|number} [year] The date to copy or the year for the date.
			@param {number} [month] The month for the date (if numeric <code>year</code> specified above).
			@param {number} [day] The day for the date (if numeric <code>year</code> specified above).
			@param {BaseCalendar|string} [calendar='gregorian'] The underlying calendar or the name of the calendar.
			@param {string} [language=''] The language to use for localisation (default English).
			@return {CDate} The new date.
			@throws Error if an invalid date.
			@example $.calendars.newDate()
$.calendars.newDate(otherDate)
$.calendars.newDate(2001, 1, 1)
$.calendars.newDate(1379, 10, 12, 'persian') */
		newDate: function(year, month, day, calendar, language) {
			calendar = ((typeof year !== 'undefined' && year !== null) && year.year ? year.calendar() :
				(typeof calendar === 'string' ? this.instance(calendar, language) : calendar)) || this.instance();
			return calendar.newDate(year, month, day);
		},

		/** A simple digit substitution function for localising numbers via the
			{@linkcode GregorianCalendar.regionalOptions|Calendar digits} option.
			@memberof Calendars
			@param {string[]} digits The substitute digits, for 0 through 9.
			@return {CalendarsDigits} The substitution function.
			@example digits: $.calendars.substituteDigits(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']) */
		substituteDigits: function(digits) {
			return function(value) {
				return (value + '').replace(/[0-9]/g, function(digit) {
					return digits[digit];
				});
			};
		},

		/** Digit substitution function for localising Chinese style numbers via the
			{@linkcode GregorianCalendar.regionalOptions|Calendar digits} option.
			@memberof Calendars
			@param {string[]} digits The substitute digits, for 0 through 9.
			@param {string[]} powers The characters denoting powers of 10, i.e. 1, 10, 100, 1000.
			@return {CalendarsDigits} The substitution function.
			@example digits: $.calendars.substituteChineseDigits(
  ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'], ['', '十', '百', '千']) */
		substituteChineseDigits: function(digits, powers) {
			return function(value) {
				var localNumber = '';
				var power = 0;
				while (value > 0) {
					var units = value % 10;
					localNumber = (units === 0 ? '' : digits[units] + powers[power]) + localNumber;
					power++;
					value = Math.floor(value / 10);
				}
				if (localNumber.indexOf(digits[1] + powers[1]) === 0) {
					localNumber = localNumber.substr(1);
				}
				return localNumber || digits[0];
			};
		}
	});

	/** Generic date, based on a particular calendar.
		@class CDate
		@param {BaseCalendar} calendar The underlying calendar implementation.
		@param {number} year The year for this date.
		@param {number} month The month for this date.
		@param {number} day The day for this date.
		@return {CDate} The date object.
		@throws Error if an invalid date. */
	function CDate(calendar, year, month, day) {
		this._calendar = calendar;
		this._year = year;
		this._month = month;
		this._day = day;
		if (this._calendar._validateLevel === 0 &&
				!this._calendar.isValid(this._year, this._month, this._day)) {
			throw ($.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate).
				replace(/\{0\}/, this._calendar.local.name);
		}
	}

	/** Pad a numeric value with leading zeroes.
		@private
		@param {number} value The number to format.
		@param {number} length The minimum length.
		@return {string} The formatted number. */
	function pad(value, length) {
		value = '' + value;
		return '000000'.substring(0, length - value.length) + value;
	}

	$.extend(CDate.prototype, {

		/** Create a new date.
			@memberof CDate
			@param {CDate|number} [year] The date to copy or the year for the date (default to this date).
			@param {number} [month] The month for the date (if numeric <code>year</code> specified above).
			@param {number} [day] The day for the date (if numeric <code>year</code> specified above).
			@return {CDate} The new date.
			@throws Error if an invalid date.
			@example date.newDate()
date.newDate(otherDate)
date.newDate(2001, 1, 1) */
		newDate: function(year, month, day) {
			return this._calendar.newDate((typeof year === 'undefined' || year === null ? this : year), month, day);
		},

		/** Set or retrieve the year for this date.
			@memberof CDate
			@param {number} [year] The year for the date.
			@return {number|CDate} The date's year (if no parameter) or the updated date.
			@throws Error if an invalid date.
			@example date.year(2001)
var year = date.year() */
		year: function(year) {
			return (arguments.length === 0 ? this._year : this.set(year, 'y'));
		},

		/** Set or retrieve the month for this date.
			@memberof CDate
			@param {number} [month] The month for the date.
			@return {number|CDate} The date's month (if no parameter) or the updated date.
			@throws Error if an invalid date.
			@example date.month(1)
var month = date.month() */
		month: function(month) {
			return (arguments.length === 0 ? this._month : this.set(month, 'm'));
		},

		/** Set or retrieve the day for this date.
			@memberof CDate
			@param {number} [day] The day for the date.
			@return {number|CData} The date's day (if no parameter) or the updated date.
			@throws Error if an invalid date.
			@example date.day(1)
var day = date.day() */
		day: function(day) {
			return (arguments.length === 0 ? this._day : this.set(day, 'd'));
		},

		/** Set new values for this date.
			@memberof CDate
			@param {number} year The year for the date.
			@param {number} month The month for the date.
			@param {number} day The day for the date.
			@return {CDate} The updated date.
			@throws Error if an invalid date.
			@example date.date(2001, 1, 1) */
		date: function(year, month, day) {
			if (!this._calendar.isValid(year, month, day)) {
				throw ($.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate).
					replace(/\{0\}/, this._calendar.local.name);
			}
			this._year = year;
			this._month = month;
			this._day = day;
			return this;
		},

		/** Determine whether this date is in a leap year.
			@memberof CDate
			@return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
			@example if (date.leapYear()) ...*/
		leapYear: function() {
			return this._calendar.leapYear(this);
		},

		/** Retrieve the epoch designator for this date, e.g. BCE or CE.
			@memberof CDate
			@return {string} The current epoch.
			@example var epoch = date.epoch() */
		epoch: function() {
			return this._calendar.epoch(this);
		},

		/** Format the year, if not a simple sequential number.
			@memberof CDate
			@return {string} The formatted year.
			@example var year = date.formatYear() */
		formatYear: function() {
			return this._calendar.formatYear(this);
		},

		/** Retrieve the month of the year for this date,
			i.e. the month's position within a numbered year.
			@memberof CDate
			@return {number} The month of the year: <code>minMonth</code> to months per year.
			@example var month = date.monthOfYear() */
		monthOfYear: function() {
			return this._calendar.monthOfYear(this);
		},

		/** Retrieve the week of the year for this date.
			@memberof CDate
			@return {number} The week of the year: 1 to weeks per year.
			@example var week = date.weekOfYear() */
		weekOfYear: function() {
			return this._calendar.weekOfYear(this);
		},

		/** Retrieve the number of days in the year for this date.
			@memberof CDate
			@return {number} The number of days in this year.
			@example var days = date.daysInYear() */
		daysInYear: function() {
			return this._calendar.daysInYear(this);
		},

		/** Retrieve the day of the year for this date.
			@memberof CDate
			@return {number} The day of the year: 1 to days per year.
			@example var doy = date.dayOfYear() */
		dayOfYear: function() {
			return this._calendar.dayOfYear(this);
		},

		/** Retrieve the number of days in the month for this date.
			@memberof CDate
			@return {number} The number of days.
			@example var days = date.daysInMonth() */
		daysInMonth: function() {
			return this._calendar.daysInMonth(this);
		},

		/** Retrieve the day of the week for this date.
			@memberof CDate
			@return {number} The day of the week: 0 to number of days - 1.
			@example var dow = date.dayOfWeek() */
		dayOfWeek: function() {
			return this._calendar.dayOfWeek(this);
		},

		/** Determine whether this date is a week day.
			@memberof CDate
			@return {boolean} <code>true</code> if a week day, <code>false</code> if not.
			@example if (date.weekDay()) ... */
		weekDay: function() {
			return this._calendar.weekDay(this);
		},

		/** Retrieve additional information about this date.
			@memberof CDate
			@return {object} Additional information - contents depends on calendar.
			@example var info = date.extraInfo() */
		extraInfo: function() {
			return this._calendar.extraInfo(this);
		},

		/** Add period(s) to a date.
			@memberof CDate
			@param {number} offset The number of periods to adjust by.
			@param {string} period One of 'y' for years, 'm' for months, 'w' for weeks, 'd' for days.
			@return {CDate} The updated date.
			@example date.add(10, 'd') */
		add: function(offset, period) {
			return this._calendar.add(this, offset, period);
		},

		/** Set a portion of the date.
			@memberof CDate
			@param {number} value The new value for the period.
			@param {string} period One of 'y' for year, 'm' for month, 'd' for day.
			@return {CDate} The updated date.
			@throws Error if not a valid date.
			@example date.set(10, 'd') */
		set: function(value, period) {
			return this._calendar.set(this, value, period);
		},

		/** Compare this date to another date.
			@memberof CDate
			@param {CDate} date The other date.
			@return {number} -1 if this date is before the other date,
					0 if they are equal, or +1 if this date is after the other date.
			@example if (date1.compareTo(date2) < 0) ... */
		compareTo: function(date) {
			if (this._calendar.name !== date._calendar.name) {
				throw ($.calendars.local.differentCalendars || $.calendars.regionalOptions[''].differentCalendars).
					replace(/\{0\}/, this._calendar.local.name).replace(/\{1\}/, date._calendar.local.name);
			}
			var c = (this._year !== date._year ? this._year - date._year :
				this._month !== date._month ? this.monthOfYear() - date.monthOfYear() :
				this._day - date._day);
			return (c === 0 ? 0 : (c < 0 ? -1 : +1));
		},

		/** Retrieve the calendar backing this date.
			@memberof CDate
			@return {BaseCalendar} The calendar implementation.
			@example var cal = date.calendar() */
		calendar: function() {
			return this._calendar;
		},

		/** Retrieve the Julian date equivalent for this date,
			i.e. days since January 1, 4713 BCE Greenwich noon.
			@memberof CDate
			@return {number} The equivalent Julian date.
			@example var jd = date.toJD() */
		toJD: function() {
			return this._calendar.toJD(this);
		},

		/** Create a new date from a Julian date.
			@memberof CDate
			@param {number} jd The Julian date to convert.
			@return {CDate} The equivalent date.
			@example var date2 = date1.fromJD(jd) */
		fromJD: function(jd) {
			return this._calendar.fromJD(jd);
		},

		/** Convert this date to a standard (Gregorian) JavaScript Date.
			@memberof CDate
			@return {Date} The equivalent JavaScript date.
			@example var jsd = date.toJSDate() */
		toJSDate: function() {
			return this._calendar.toJSDate(this);
		},

		/** Create a new date from a standard (Gregorian) JavaScript Date.
			@memberof CDate
			@param {Date} jsd The JavaScript date to convert.
			@return {CDate} The equivalent date.
			@example var date2 = date1.fromJSDate(jsd) */
		fromJSDate: function(jsd) {
			return this._calendar.fromJSDate(jsd);
		},

		/** Convert to a string for display.
			@memberof CDate
			@return {string} This date as a string. */
		toString: function() {
			return (this.year() < 0 ? '-' : '') + pad(Math.abs(this.year()), 4) +
				'-' + pad(this.month(), 2) + '-' + pad(this.day(), 2);
		}
	});

	/** Basic functionality for all calendars.
		Other calendars should extend this:
		<pre>OtherCalendar.prototype = new BaseCalendar();</pre>
		@class BaseCalendar */
	function BaseCalendar() {
		this.shortYearCutoff = '+10';
	}

	$.extend(BaseCalendar.prototype, {
		_validateLevel: 0, // "Stack" to turn validation on/off

		/** Create a new date within this calendar - today if no parameters given.
			@memberof BaseCalendar
			@param {CDate|number} year The date to duplicate or the year for the date.
			@param {number} [month] The month for the date (if numeric <code>year</code> specified above).
			@param {number} [day] The day for the date (if numeric <code>year</code> specified above).
			@return {CDate} The new date.
			@throws Error if not a valid date or a different calendar is used.
			@example var date = calendar.newDate(2014, 1, 26)
var date2 = calendar.newDate(date1)
var today = calendar.newDate() */
		newDate: function(year, month, day) {
			if (typeof year === 'undefined' || year === null) {
				return this.today();
			}
			if (year.year) {
				this._validate(year, month, day,
					$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
				day = year.day();
				month = year.month();
				year = year.year();
			}
			return new CDate(this, year, month, day);
		},

		/** Create a new date for today.
			@memberof BaseCalendar
			@return {CDate} Today's date.
			@example var today = calendar.today() */
		today: function() {
			return this.fromJSDate(new Date());
		},

		/** Retrieve the epoch designator for this date.
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {string} The current epoch.
			@throws Error if an invalid year or a different calendar is used.
			@example var epoch = calendar.epoch(date) 
var epoch = calendar.epoch(2014) */
		epoch: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return (date.year() < 0 ? this.local.epochs[0] : this.local.epochs[1]);
		},

		/** Format the year, if not a simple sequential number
			@memberof BaseCalendar
			@param {CDate|number} year The date to format or the year to format.
			@return {string} The formatted year.
			@throws Error if an invalid year or a different calendar is used.
			@example var year = calendar.formatYear(date)
var year = calendar.formatYear(2014) */
		formatYear: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return (date.year() < 0 ? '-' : '') + pad(Math.abs(date.year()), 4);
		},

		/** Retrieve the number of months in a year.
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {number} The number of months.
			@throws Error if an invalid year or a different calendar is used.
			@example var months = calendar.monthsInYear(date)
var months = calendar.monthsInYear(2014) */
		monthsInYear: function(year) {
			this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return 12;
		},

		/** Calculate the month's ordinal position within the year -
			for those calendars that don't start at month 1!
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if numeric <code>year</code> specified above).
			@return {number} The ordinal position, starting from <code>minMonth</code>.
			@throws Error if an invalid year/month or a different calendar is used.
			@example var pos = calendar.monthOfYear(date)
var pos = calendar.monthOfYear(2014, 7) */
		monthOfYear: function(year, month) {
			var date = this._validate(year, month, this.minDay,
				$.calendars.local.invalidMonth || $.calendars.regionalOptions[''].invalidMonth);
			return (date.month() + this.monthsInYear(date) - this.firstMonth) %
				this.monthsInYear(date) + this.minMonth;
		},

		/** Calculate actual month from ordinal position, starting from <code>minMonth</code>.
			@memberof BaseCalendar
			@param {number} year The year to examine.
			@param {number} ord The month's ordinal position.
			@return {number} The month's number.
			@throws Error if an invalid year/month.
			@example var month = calendar.fromMonthOfYear(2014, 7) */
		fromMonthOfYear: function(year, ord) {
			var m = (ord + this.firstMonth - 2 * this.minMonth) %
				this.monthsInYear(year) + this.minMonth;
			this._validate(year, m, this.minDay,
				$.calendars.local.invalidMonth || $.calendars.regionalOptions[''].invalidMonth);
			return m;
		},

		/** Retrieve the number of days in a year.
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {number} The number of days.
			@throws Error if an invalid year or a different calendar is used.
			@example var days = calendar.daysInYear(date)
var days = calendar.daysInYear(2014) */
		daysInYear: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return (this.leapYear(date) ? 366 : 365);
		},

		/** Retrieve the day of the year for a date.
			@memberof BaseCalendar
			@param {CDate|number} year The date to convert or the year to convert.
			@param {number} [month] The month to convert (if numeric <code>year</code> specified above).
			@param {number} [day] The day to convert (if numeric <code>year</code> specified above).
			@return {number} The day of the year: 1 to days per year.
			@throws Error if an invalid date or a different calendar is used.
			@example var doy = calendar.dayOfYear(date)
var doy = calendar.dayOfYear(2014, 7, 1) */
		dayOfYear: function(year, month, day) {
			var date = this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			return date.toJD() - this.newDate(date.year(),
				this.fromMonthOfYear(date.year(), this.minMonth), this.minDay).toJD() + 1;
		},

		/** Retrieve the number of days in a week.
			@memberof BaseCalendar
			@return {number} The number of days.
			@example var days = calendar.daysInWeek() */
		daysInWeek: function() {
			return 7;
		},

		/** Retrieve the day of the week for a date.
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if numeric <code>year</code> specified above).
			@param {number} [day] The day to examine (if numeric <code>year</code> specified above).
			@return {number} The day of the week: 0 to number of days - 1.
			@throws Error if an invalid date or a different calendar is used.
			@example var dow = calendar.dayOfWeek(date)
var dow = calendar.dayOfWeek(2014, 1, 26) */
		dayOfWeek: function(year, month, day) {
			var date = this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			return (Math.floor(this.toJD(date)) + 2) % this.daysInWeek();
		},

		/** Retrieve additional information about a date.
			@memberof BaseCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if numeric <code>year</code> specified above).
			@param {number} [day] The day to examine (if numeric <code>year</code> specified above).
			@return {object} Additional information - content depends on calendar.
			@throws Error if an invalid date or a different calendar is used.
			@example var info = calendar.extraInfo(date)
var info = calendar.extraInfo(2014, 1, 26) */
		extraInfo: function(year, month, day) {
			this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			return {};
		},

		/** Add period(s) to a date.
			Cater for no year zero.
			@memberof BaseCalendar
			@param {CDate} date The starting date.
			@param {number} offset The number of periods to adjust by.
			@param {string} period One of 'y' for years, 'm' for months, 'w' for weeks, 'd' for days.
			@return {CDate} The updated date.
			@throws Error if a different calendar is used.
			@example calendar.add(date, 10, 'd') */
		add: function(date, offset, period) {
			this._validate(date, this.minMonth, this.minDay,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			return this._correctAdd(date, this._add(date, offset, period), offset, period);
		},

		/** Add period(s) to a date.
			@memberof BaseCalendar
			@private
			@param {CDate} date The starting date.
			@param {number} offset The number of periods to adjust by.
			@param {string} period One of 'y' for years, 'm' for months, 'w' for weeks, 'd' for days.
			@return {number[]} The updated date as year, month, and day. */
		_add: function(date, offset, period) {
			this._validateLevel++;
			var d;
			if (period === 'd' || period === 'w') {
				var jd = date.toJD() + offset * (period === 'w' ? this.daysInWeek() : 1);
				d = date.calendar().fromJD(jd);
				this._validateLevel--;
				return [d.year(), d.month(), d.day()];
			}
			try {
				var y = date.year() + (period === 'y' ? offset : 0);
				var m = date.monthOfYear() + (period === 'm' ? offset : 0);
				d = date.day();
				var resyncYearMonth = function(calendar) {
					while (m < calendar.minMonth) {
						y--;
						m += calendar.monthsInYear(y);
					}
					var yearMonths = calendar.monthsInYear(y);
					while (m > yearMonths - 1 + calendar.minMonth) {
						y++;
						m -= yearMonths;
						yearMonths = calendar.monthsInYear(y);
					}
				};
				if (period === 'y') {
					if (date.month() !== this.fromMonthOfYear(y, m)) { // Hebrew
						m = this.newDate(y, date.month(), this.minDay).monthOfYear();
					}
					m = Math.min(m, this.monthsInYear(y));
					d = Math.min(d, this.daysInMonth(y, this.fromMonthOfYear(y, m)));
				}
				else if (period === 'm') {
					resyncYearMonth(this);
					d = Math.min(d, this.daysInMonth(y, this.fromMonthOfYear(y, m)));
				}
				var ymd = [y, this.fromMonthOfYear(y, m), d];
				this._validateLevel--;
				return ymd;
			}
			catch (e) {
				this._validateLevel--;
				throw e;
			}
		},

		/** Correct a candidate date after adding period(s) to a date.
			Handle no year zero if necessary.
			@memberof BaseCalendar
			@private
			@param {CDate} date The starting date.
			@param {number[]} ymd The added date.
			@param {number} offset The number of periods to adjust by.
			@param {string} period One of 'y' for years, 'm' for months, 'w' for weeks, 'd' for days.
			@return {CDate} The updated date. */
		_correctAdd: function(date, ymd, offset, period) {
			if (!this.hasYearZero && (period === 'y' || period === 'm')) {
				if (ymd[0] === 0 || // In year zero
						(date.year() > 0) !== (ymd[0] > 0)) { // Crossed year zero
					var adj = {y: [1, 1, 'y'], m: [1, this.monthsInYear(-1), 'm'],
						w: [this.daysInWeek(), this.daysInYear(-1), 'd'],
						d: [1, this.daysInYear(-1), 'd']}[period];
					var dir = (offset < 0 ? -1 : +1);
					ymd = this._add(date, offset * adj[0] + dir * adj[1], adj[2]);
				}
			}
			return date.date(ymd[0], ymd[1], ymd[2]);
		},

		/** Set a portion of the date.
			@memberof BaseCalendar
			@param {CDate} date The starting date.
			@param {number} value The new value for the period.
			@param {string} period One of 'y' for year, 'm' for month, 'd' for day.
			@return {CDate} The updated date.
			@throws Error if an invalid date or a different calendar is used.
			@example calendar.set(date, 10, 'd') */
		set: function(date, value, period) {
			this._validate(date, this.minMonth, this.minDay,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			var y = (period === 'y' ? value : date.year());
			var m = (period === 'm' ? value : date.month());
			var d = (period === 'd' ? value : date.day());
			if (period === 'y' || period === 'm') {
				d = Math.min(d, this.daysInMonth(y, m));
			}
			return date.date(y, m, d);
		},

		/** Determine whether a date is valid for this calendar.
			@memberof BaseCalendar
			@param {number} year The year to examine.
			@param {number} month The month to examine.
			@param {number} day The day to examine.
			@return {boolean} <code>true</code> if a valid date, <code>false</code> if not.
			@example if (calendar.isValid(2014, 2, 31)) ... */
		isValid: function(year, month, day) {
			this._validateLevel++;
			var valid = (this.hasYearZero || year !== 0);
			if (valid) {
				var date = this.newDate(year, month, this.minDay);
				valid = (month >= this.minMonth && month - this.minMonth < this.monthsInYear(date)) &&
					(day >= this.minDay && day - this.minDay < this.daysInMonth(date));
			}
			this._validateLevel--;
			return valid;
		},

		/** Convert the date to a standard (Gregorian) JavaScript Date.
			@memberof BaseCalendar
			@param {CDate|number} year The date to convert or the year to convert.
			@param {number} [month] The month to convert (if numeric <code>year</code> specified above).
			@param {number} [day] The day to convert (if numeric <code>year</code> specified above).
			@return {Date} The equivalent JavaScript date.
			@throws Error if an invalid date or a different calendar is used.
			@example var jsd = calendar.toJSDate(date)
var jsd = calendar.toJSDate(2014, 1, 26) */
		toJSDate: function(year, month, day) {
			var date = this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			return $.calendars.instance().fromJD(this.toJD(date)).toJSDate();
		},

		/** Convert the date from a standard (Gregorian) JavaScript Date.
			@memberof BaseCalendar
			@param {Date} jsd The JavaScript date.
			@return {CDate} The equivalent calendar date.
			@example var date = calendar.fromJSDate(jsd) */
		fromJSDate: function(jsd) {
			return this.fromJD($.calendars.instance().fromJSDate(jsd).toJD());
		},

		/** Check that a candidate date is from the same calendar and is valid.
			@memberof BaseCalendar
			@private
			@param {CDate|number} year The date to validate or the year to validate.
			@param {number} [month] The month to validate (if numeric <code>year</code> specified above).
			@param {number} [day] The day to validate (if numeric <code>year</code> specified above).
			@param {string} error Error message if invalid.
			@throws Error if an invalid date or a different calendar is used. */
		_validate: function(year, month, day, error) {
			if (year.year) {
				if (this._validateLevel === 0 && this.name !== year.calendar().name) {
					throw ($.calendars.local.differentCalendars || $.calendars.regionalOptions[''].differentCalendars).
						replace(/\{0\}/, this.local.name).replace(/\{1\}/, year.calendar().local.name);
				}
				return year;
			}
			try {
				this._validateLevel++;
				if (this._validateLevel === 1 && !this.isValid(year, month, day)) {
					throw error.replace(/\{0\}/, this.local.name);
				}
				var date = this.newDate(year, month, day);
				this._validateLevel--;
				return date;
			}
			catch (e) {
				this._validateLevel--;
				throw e;
			}
		}
	});

	/** Implementation of the Proleptic Gregorian Calendar.
		See <a href=":http://en.wikipedia.org/wiki/Gregorian_calendar">http://en.wikipedia.org/wiki/Gregorian_calendar</a>
		and <a href="http://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar">http://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar</a>.
		@class GregorianCalendar
		@augments BaseCalendar
		@param {string} [language=''] The language code (default English) for localisation. */
	function GregorianCalendar(language) {
		this.local = this.regionalOptions[language] || this.regionalOptions[''];
	}

	GregorianCalendar.prototype = new BaseCalendar();

	$.extend(GregorianCalendar.prototype, {
		/** The calendar name.
			@memberof GregorianCalendar */
		name: 'Gregorian',
		/** Julian date of start of Gregorian epoch: 1 January 0001 CE.
			@memberof GregorianCalendar */
		jdEpoch: 1721425.5,
		/** Days per month in a common year.
			@memberof GregorianCalendar */
		daysPerMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		/** <code>true</code> if has a year zero, <code>false</code> if not.
			@memberof GregorianCalendar */
		hasYearZero: false,
		/** The minimum month number.
			@memberof GregorianCalendar */
		minMonth: 1,
		/** The first month in the year.
			@memberof GregorianCalendar */
		firstMonth: 1,
		/** The minimum day number.
			@memberof GregorianCalendar */
		minDay: 1,

		/** Convert a number into a localised form.
			@callback CalendarsDigits
			@param {number} value The number to convert.
			@return {string} The localised number.
			@example digits: $.calendars.substituteDigits(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']) */

		/** Localisations for the plugin.
			Entries are objects indexed by the language code ('' being the default US/English).
			Each object has the following attributes.
			@memberof GregorianCalendar
			@property {string} [name='Gregorian'] The calendar name.
			@property {string[]} [epochs=['BCE','CE']] The epoch names.
			@property {string[]} [monthNames=[...]] The long names of the months of the year.
			@property {string[]} [monthNamesShort=[...]] The short names of the months of the year.
			@property {string[]} [dayNames=[...]] The long names of the days of the week.
			@property {string[]} [dayNamesShort=[...]] The short names of the days of the week.
			@property {string[]} [dayNamesMin=[...]] The minimal names of the days of the week.
			@property {CalendarsDigits} [digits=null] Convert numbers to localised versions.
			@property {string} [dateFormat='mm/dd/yyyy'] The date format for this calendar.
					See the options on {@linkcode BaseCalendar.formatDate|formatDate} for details.
			@property {number} [firstDay=0] The number of the first day of the week, starting at 0.
			@property {boolean} [isRTL=false] <code>true</code> if this localisation reads right-to-left. */
		regionalOptions: { // Localisations
			'': {
				name: 'Gregorian',
				epochs: ['BCE', 'CE'],
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'],
				monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				digits: null,
				dateFormat: 'mm/dd/yyyy',
				firstDay: 0,
				isRTL: false
			}
		},

		/** Determine whether this date is in a leap year.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
			@throws Error if an invalid year or a different calendar is used. */
		leapYear: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			year = date.year() + (date.year() < 0 ? 1 : 0); // No year zero
			return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
		},

		/** Determine the week of the year for a date - ISO 8601.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if numeric <code>year</code> specified above).
			@param {number} [day] The day to examine (if numeric <code>year</code> specified above).
			@return {number} The week of the year, starting from 1.
			@throws Error if an invalid date or a different calendar is used. */
		weekOfYear: function(year, month, day) {
			// Find Thursday of this week starting on Monday
			var checkDate = this.newDate(year, month, day);
			checkDate.add(4 - (checkDate.dayOfWeek() || 7), 'd');
			return Math.floor((checkDate.dayOfYear() - 1) / 7) + 1;
		},

		/** Retrieve the number of days in a month.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to examine or the year of the month.
			@param {number} [month] The month (if numeric <code>year</code> specified above).
			@return {number} The number of days in this month.
			@throws Error if an invalid month/year or a different calendar is used. */
		daysInMonth: function(year, month) {
			var date = this._validate(year, month, this.minDay,
				$.calendars.local.invalidMonth || $.calendars.regionalOptions[''].invalidMonth);
			return this.daysPerMonth[date.month() - 1] +
				(date.month() === 2 && this.leapYear(date.year()) ? 1 : 0);
		},

		/** Determine whether this date is a week day.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if numeric <code>year</code> specified above).
			@param {number} [day] The day to examine (if numeric <code>year</code> specified above).
			@return {boolean} <code>true</code> if a week day, <code>false</code> if not.
			@throws Error if an invalid date or a different calendar is used. */
		weekDay: function(year, month, day) {
			return (this.dayOfWeek(year, month, day) || 7) < 6;
		},

		/** Retrieve the Julian date equivalent for this date,
			i.e. days since January 1, 4713 BCE Greenwich noon.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to convert or the year to convert.
			@param {number} [month] The month to convert (if numeric <code>year</code> specified above).
			@param {number} [day] The day to convert (if numeric <code>year</code> specified above).
			@return {number} The equivalent Julian date.
			@throws Error if an invalid date or a different calendar is used. */
		toJD: function(year, month, day) {
			var date = this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			year = date.year();
			month = date.month();
			day = date.day();
			if (year < 0) { year++; } // No year zero
			// Jean Meeus algorithm, "Astronomical Algorithms", 1991
			if (month < 3) {
				month += 12;
				year--;
			}
			var a = Math.floor(year / 100);
			var b = 2 - a + Math.floor(a / 4);
			return Math.floor(365.25 * (year + 4716)) +
				Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
		},

		/** Create a new date from a Julian date.
			@memberof GregorianCalendar
			@param {number} jd The Julian date to convert.
			@return {CDate} The equivalent date. */
		fromJD: function(jd) {
			// Jean Meeus algorithm, "Astronomical Algorithms", 1991
			var z = Math.floor(jd + 0.5);
			var a = Math.floor((z - 1867216.25) / 36524.25);
			a = z + 1 + a - Math.floor(a / 4);
			var b = a + 1524;
			var c = Math.floor((b - 122.1) / 365.25);
			var d = Math.floor(365.25 * c);
			var e = Math.floor((b - d) / 30.6001);
			var day = b - d - Math.floor(e * 30.6001);
			var month = e - (e > 13.5 ? 13 : 1);
			var year = c - (month > 2.5 ? 4716 : 4715);
			if (year <= 0) { year--; } // No year zero
			return this.newDate(year, month, day);
		},

		/** Convert this date to a standard (Gregorian) JavaScript Date.
			@memberof GregorianCalendar
			@param {CDate|number} year The date to convert or the year to convert.
			@param {number} [month] The month to convert (if numeric <code>year</code> specified above).
			@param {number} [day] The day to convert (if numeric <code>year</code> specified above).
			@return {Date} The equivalent JavaScript date.
			@throws Error if an invalid date or a different calendar is used. */
		toJSDate: function(year, month, day) {
			var date = this._validate(year, month, day,
				$.calendars.local.invalidDate || $.calendars.regionalOptions[''].invalidDate);
			var jsd = new Date(date.year(), date.month() - 1, date.day());
			jsd.setHours(0);
			jsd.setMinutes(0);
			jsd.setSeconds(0);
			jsd.setMilliseconds(0);
			// Hours may be non-zero on daylight saving cut-over:
			// > 12 when midnight changeover, but then cannot generate
			// midnight datetime, so jump to 1AM, otherwise reset.
			jsd.setHours(jsd.getHours() > 12 ? jsd.getHours() + 2 : 0);
			return jsd;
		},

		/** Create a new date from a standard (Gregorian) JavaScript Date.
			@memberof GregorianCalendar
			@param {Date} jsd The JavaScript date to convert.
			@return {CDate} The equivalent date. */
		fromJSDate: function(jsd) {
			return this.newDate(jsd.getFullYear(), jsd.getMonth() + 1, jsd.getDate());
		}
	});

	// Singleton manager
	$.calendars = new Calendars();

	// Date template
	$.calendars.cdate = CDate;

	// Base calendar template
	$.calendars.baseCalendar = BaseCalendar;

	// Gregorian calendar implementation
	$.calendars.calendars.gregorian = GregorianCalendar;

})(jQuery);
/* http://keith-wood.name/calendars.html
   Calendars extras for jQuery v2.1.0.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) August 2009.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict
	'use strict';

	$.extend($.calendars.regionalOptions[''], {
		invalidArguments: 'Invalid arguments',
		invalidFormat: 'Cannot format a date from another calendar',
		missingNumberAt: 'Missing number at position {0}',
		unknownNameAt: 'Unknown name at position {0}',
		unexpectedLiteralAt: 'Unexpected literal at position {0}',
		unexpectedText: 'Additional text found at end'
	});
	$.calendars.local = $.calendars.regionalOptions[''];

	$.extend($.calendars.cdate.prototype, {

		/** Format this date.
			Found in the <code>jquery.calendars.plus.js</code> module.
			@memberof CDate
			@param {string} [format] The date format to use (see {@linkcode BaseCalendar.formatDate|formatDate}).
			@param {object} [settings] Options for the <code>formatDate</code> function.
			@return {string} The formatted date. */
		formatDate: function(format, settings) {
			if (typeof format !== 'string') {
				settings = format;
				format = '';
			}
			return this._calendar.formatDate(format || '', this, settings);
		}
	});

	$.extend($.calendars.baseCalendar.prototype, {

		UNIX_EPOCH: $.calendars.instance().newDate(1970, 1, 1).toJD(),
		SECS_PER_DAY: 24 * 60 * 60,
		TICKS_EPOCH: $.calendars.instance().jdEpoch, // 1 January 0001 CE
		TICKS_PER_DAY: 24 * 60 * 60 * 10000000,

		/** Date format for ATOM (RFC 3339/ISO 8601) - 'yyyy-mm-dd'.
			@memberof BaseCalendar */
		ATOM: 'yyyy-mm-dd',
		/** Date format for cookies - 'D, dd M yyyy'.
			@memberof BaseCalendar */
		COOKIE: 'D, dd M yyyy',
		/** Date format for the full date - 'DD, MM d, yyyy'.
			@memberof BaseCalendar */
		FULL: 'DD, MM d, yyyy',
		/** Date format for ISO 8601 - 'yyyy-mm-dd'.
			@memberof BaseCalendar */
		ISO_8601: 'yyyy-mm-dd',
		/** Date format for Julian date - days since January 1, 4713 BCE Greenwich noon.
			@memberof BaseCalendar */
		JULIAN: 'J',
		/** Date format for RFC 822 - 'D, d M yy'.
			@memberof BaseCalendar */
		RFC_822: 'D, d M yy',
		/** Date format for RFC 850 - 'DD, dd-M-yy'.
			@memberof BaseCalendar */
		RFC_850: 'DD, dd-M-yy',
		/** Date format for RFC 1036 - 'D, d M yy'.
			@memberof BaseCalendar */
		RFC_1036: 'D, d M yy',
		/** Date format for RFC 1123 - 'D, d M yyyy'.
			@memberof BaseCalendar */
		RFC_1123: 'D, d M yyyy',
		/** Date format for RFC 2822 - 'D, d M yyyy'.
			@memberof BaseCalendar */
		RFC_2822: 'D, d M yyyy',
		/** Date format for RSS (RFC 822) - 'D, d M yy'.
			@memberof BaseCalendar */
		RSS: 'D, d M yy',
		/** Date format for Windows ticks - number of 100-nanosecond ticks since 1 January 0001 00:00:00 UTC.
			@memberof BaseCalendar */
		TICKS: '!',
		/** Date format for Unix timestamp - number of seconds elapsed since the
			start of the Unix epoch at 1 January 1970 00:00:00 UTC.
			@memberof BaseCalendar */
		TIMESTAMP: '@',
		/** Date format for W3C (ISO 8601) - 'yyyy-mm-dd'.
			@memberof BaseCalendar */
		W3C: 'yyyy-mm-dd',

		/** Format a date object into a string value.
			The format can be combinations of the following:
			<ul>
			<li>d  - day of month (no leading zero)</li>
			<li>dd - day of month (two digit)</li>
			<li>o  - day of year (no leading zeros)</li>
			<li>oo - day of year (three digit)</li>
			<li>D  - day name short</li>
			<li>DD - day name long</li>
			<li>w  - week of year (no leading zero)</li>
			<li>ww - week of year (two digit)</li>
			<li>m  - month of year (no leading zero)</li>
			<li>mm - month of year (two digit)</li>
			<li>M  - month name short</li>
			<li>MM - month name long</li>
			<li>yy - year (two digit)</li>
			<li>yyyy - year (four digit)</li>
			<li>YYYY - formatted year</li>
			<li>J  - Julian date (days since January 1, 4713 BCE Greenwich noon)</li>
			<li>@  - Unix timestamp (s since 01/01/1970)</li>
			<li>!  - Windows ticks (100ns since 01/01/0001)</li>
			<li>'...' - literal text</li>
			<li>'' - single quote</li>
			</ul>
			Found in the <code>jquery.calendars.plus.js</code> module.
			@memberof BaseCalendar
			@param {string} [format] The desired format of the date (defaults to calendar format).
			@param {CDate} date The date value to format.
			@param {object} [settings] Addition options, whose attributes include:
			@param {string[]} [settings.dayNamesShort] Abbreviated names of the days from day 0 (Sunday).
			@param {string[]} [settings.dayNames] Names of the days from day 0 (Sunday).
			@param {string[]} [settings.monthNamesShort] Abbreviated names of the months.
			@param {string[]} [settings.monthNames] Names of the months.
			@param {boolean} [settings.localNumbers=false] <code>true</code> to localise numbers (if available),
				<code>false</code> to use normal Arabic numerals.
			@return {string} The date in the above format.
			@throws Errors if the date is from a different calendar. */
		formatDate: function(format, date, settings) {
			if (typeof format !== 'string') {
				settings = date;
				date = format;
				format = '';
			}
			if (!date) {
				return '';
			}
			if (date.calendar() !== this) {
				throw $.calendars.local.invalidFormat || $.calendars.regionalOptions[''].invalidFormat;
			}
			format = format || this.local.dateFormat;
			settings = settings || {};
			var dayNamesShort = settings.dayNamesShort || this.local.dayNamesShort;
			var dayNames = settings.dayNames || this.local.dayNames;
			var monthNamesShort = settings.monthNamesShort || this.local.monthNamesShort;
			var monthNames = settings.monthNames || this.local.monthNames;
			var localNumbers = settings.localNumbers || this.local.localNumbers;
			// Check whether a format character is doubled
			var doubled = function(match, step) {
				var matches = 1;
				while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
					matches++;
				}
				iFormat += matches - 1;
				return Math.floor(matches / (step || 1)) > 1;
			};
			// Format a number, with leading zeroes if necessary
			var formatNumber = function(match, value, len, step) {
				var num = '' + value;
				if (doubled(match, step)) {
					while (num.length < len) {
						num = '0' + num;
					}
				}
				return num;
			};
			// Format a name, short or long as requested
			var formatName = function(match, value, shortNames, longNames) {
				return (doubled(match) ? longNames[value] : shortNames[value]);
			};
			// Localise numbers if requested and available
			var localiseNumbers = localNumbers && this.local.digits ?
				this.local.digits : function(value) { return value; };
			var output = '';
			var literal = false;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === '\'' && !doubled('\'')) {
						literal = false;
					}
					else {
						output += format.charAt(iFormat);
					}
				}
				else {
					switch (format.charAt(iFormat)) {
						case 'd':
							output += localiseNumbers(formatNumber('d', date.day(), 2));
							break;
						case 'D':
							output += formatName('D', date.dayOfWeek(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o', date.dayOfYear(), 3);
							break;
						case 'w':
							output += formatNumber('w', date.weekOfYear(), 2);
							break;
						case 'm':
							output += localiseNumbers(formatNumber('m', date.month(), 2));
							break;
						case 'M':
							output += formatName('M', date.month() - this.minMonth, monthNamesShort, monthNames);
							break;
						case 'y':
							output += localiseNumbers(doubled('y', 2) ? date.year() :
								(date.year() % 100 < 10 ? '0' : '') + date.year() % 100);
							break;
						case 'Y':
							doubled('Y', 2);
							output += date.formatYear();
							break;
						case 'J':
							output += date.toJD();
							break;
						case '@':
							output += (date.toJD() - this.UNIX_EPOCH) * this.SECS_PER_DAY;
							break;
						case '!':
							output += (date.toJD() - this.TICKS_EPOCH) * this.TICKS_PER_DAY;
							break;
						case '\'':
							if (doubled('\'')) {
								output += '\'';
							}
							else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
			return output;
		},

		/** Parse a string value into a date object.
			See {@linkcode BaseCalendar.formatDate|formatDate} for the possible formats, plus:
			<ul>
			<li>* - ignore rest of string</li>
			</ul>
			Found in the <code>jquery.calendars.plus.js</code> module.
			@memberof BaseCalendar
			@param {string} format The expected format of the date ('' for default calendar format).
			@param {string} value The date in the above format.
			@param {object} [settings] Additional options whose attributes include:
			@param {number} [settings.shortYearCutoff] The cutoff year for determining the century.
			@param {string[]} [settings.dayNamesShort] Abbreviated names of the days from day 0 (Sunday).
			@param {string[]} [settings.dayNames] Names of the days from day 0 (Sunday).
			@param {string[]} [settings.monthNamesShort] Abbreviated names of the months.
			@param {string[]} [settings.monthNames] Names of the months.
			@return {CDate} The extracted date value or <code>null</code> if value is blank.
			@throws Errors if the format and/or value are missing,
					if the value doesn't match the format, or if the date is invalid. */
		parseDate: function(format, value, settings) {
			if (typeof value === 'undefined' || value === null) {
				throw $.calendars.local.invalidArguments || $.calendars.regionalOptions[''].invalidArguments;
			}
			value = (typeof value === 'object' ? value.toString() : value + '');
			if (value === '') {
				return null;
			}
			format = format || this.local.dateFormat;
			settings = settings || {};
			var shortYearCutoff = settings.shortYearCutoff || this.shortYearCutoff;
			shortYearCutoff = (typeof shortYearCutoff !== 'string' ? shortYearCutoff :
				this.today().year() % 100 + parseInt(shortYearCutoff, 10));
			var dayNamesShort = settings.dayNamesShort || this.local.dayNamesShort;
			var dayNames = settings.dayNames || this.local.dayNames;
			var monthNamesShort = settings.monthNamesShort || this.local.monthNamesShort;
			var monthNames = settings.monthNames || this.local.monthNames;
			var jd = -1;
			var year = -1;
			var month = -1;
			var day = -1;
			var doy = -1;
			var shortYear = false;
			var literal = false;
			// Check whether a format character is doubled
			var doubled = function(match, step) {
				var matches = 1;
				while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
					matches++;
				}
				iFormat += matches - 1;
				return Math.floor(matches / (step || 1)) > 1;
			};
			// Extract a number from the string value
			var getNumber = function(match, step) {
				var isDoubled = doubled(match, step);
				var size = [2, 3, isDoubled ? 4 : 2, isDoubled ? 4 : 2, 10, 11, 20]['oyYJ@!'.indexOf(match) + 1];
				var digits = new RegExp('^-?\\d{1,' + size + '}');
				var num = value.substring(iValue).match(digits);
				if (!num) {
					throw ($.calendars.local.missingNumberAt || $.calendars.regionalOptions[''].missingNumberAt).
						replace(/\{0\}/, iValue);
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			};
			// Extract a name from the string value and convert to an index
			var calendar = this;
			var getName = function(match, shortNames, longNames, step) {
				var names = (doubled(match, step) ? longNames : shortNames);
				for (var i = 0; i < names.length; i++) {
					if (value.substr(iValue, names[i].length).toLowerCase() === names[i].toLowerCase()) {
						iValue += names[i].length;
						return i + calendar.minMonth;
					}
				}
				throw ($.calendars.local.unknownNameAt || $.calendars.regionalOptions[''].unknownNameAt).
					replace(/\{0\}/, iValue);
			};
			// Confirm that a literal character matches the string value
			var checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw ($.calendars.local.unexpectedLiteralAt ||
						$.calendars.regionalOptions[''].unexpectedLiteralAt).replace(/\{0\}/, iValue);
				}
				iValue++;
			};
			var iValue = 0;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === '\'' && !doubled('\'')) {
						literal = false;
					}
					else {
						checkLiteral();
					}
				}
				else {
					switch (format.charAt(iFormat)) {
						case 'd':
							day = getNumber('d');
							break;
						case 'D':
							getName('D', dayNamesShort, dayNames);
							break;
						case 'o':
							doy = getNumber('o');
							break;
						case 'w':
							getNumber('w');
							break;
						case 'm':
							month = getNumber('m');
							break;
						case 'M':
							month = getName('M', monthNamesShort, monthNames);
							break;
						case 'y':
							var iSave = iFormat;
							shortYear = !doubled('y', 2);
							iFormat = iSave;
							year = getNumber('y', 2);
							break;
						case 'Y':
							year = getNumber('Y', 2);
							break;
						case 'J':
							jd = getNumber('J') + 0.5;
							if (value.charAt(iValue) === '.') {
								iValue++;
								getNumber('J');
							}
							break;
						case '@':
							jd = getNumber('@') / this.SECS_PER_DAY + this.UNIX_EPOCH;
							break;
						case '!':
							jd = getNumber('!') / this.TICKS_PER_DAY + this.TICKS_EPOCH;
							break;
						case '*':
							iValue = value.length;
							break;
						case '\'':
							if (doubled('\'')) {
								checkLiteral();
							}
							else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}
			if (iValue < value.length) {
				throw $.calendars.local.unexpectedText || $.calendars.regionalOptions[''].unexpectedText;
			}
			if (year === -1) {
				year = this.today().year();
			}
			else if (year < 100 && shortYear) {
				year += (shortYearCutoff === -1 ? 1900 : this.today().year() -
					this.today().year() % 100 - (year <= shortYearCutoff ? 0 : 100));
			}
			if (doy > -1) {
				month = 1;
				day = doy;
				for (var dim = this.daysInMonth(year, month); day > dim; dim = this.daysInMonth(year, month)) {
					month++;
					day -= dim;
				}
			}
			return (jd > -1 ? this.fromJD(jd) : this.newDate(year, month, day));
		},

		/** A date may be specified as an exact value or a relative one.
			Found in the <code>jquery.calendars.plus.js</code> module.
			@memberof BaseCalendar
			@param {CDate|number|string} dateSpec The date as an object or string in the given format or
					an offset - numeric days from today, or string amounts and periods, e.g. '+1m +2w'.
			@param {CDate} defaultDate The date to use if no other supplied, may be <code>null</code>.
			@param {CDate} [currentDate=null] The current date as a possible basis for relative dates,
					if <code>null</code> today is used.
			@param {string} [dateFormat] The expected date format -
					see {@linkcode BaseCalendar.formatDate|formatDate}. Use '' for the calendar default format.
			@param {object} [settings] Additional options whose attributes include:
			@param {number} [settings.shortYearCutoff] The cutoff year for determining the century.
			@param {string[]} [settings.dayNamesShort] Abbreviated names of the days from day 0 (Sunday).
			@param {string[]} [settings.dayNames] Names of the days from day 0 (Sunday).
			@param {string[]} [settings.monthNamesShort] Abbreviated names of the months.
			@param {string[]} [settings.monthNames] Names of the months.
			@return {CDate} The decoded date. */
		determineDate: function(dateSpec, defaultDate, currentDate, dateFormat, settings) {
			if (currentDate && typeof currentDate !== 'object') {
				settings = dateFormat;
				dateFormat = currentDate;
				currentDate = null;
			}
			if (typeof dateFormat !== 'string') {
				settings = dateFormat;
				dateFormat = '';
			}
			var calendar = this;
			var offsetString = function(offset) {
				try {
					return calendar.parseDate(dateFormat, offset, settings);
				}
				catch (e) {
					// Ignore
				}
				offset = offset.toLowerCase();
				var date = (offset.match(/^c/) && currentDate ?
					currentDate.newDate() : null) || calendar.today();
				var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
				var matches = pattern.exec(offset);
				while (matches) {
					date.add(parseInt(matches[1], 10), matches[2] || 'd');
					matches = pattern.exec(offset);
				}
				return date;
			};
			defaultDate = (defaultDate ? defaultDate.newDate() : null);
			dateSpec = (typeof dateSpec === 'undefined' || dateSpec === null ? defaultDate :
				(typeof dateSpec === 'string' ? offsetString(dateSpec) : (typeof dateSpec === 'number' ?
				(isNaN(dateSpec) || dateSpec === Infinity || dateSpec === -Infinity ? defaultDate :
				calendar.today().add(dateSpec, 'd')) : calendar.newDate(dateSpec))));
			return dateSpec;
		}
	});

})(jQuery);
/* http://keith-wood.name/calendars.html
   Calendars date picker for jQuery v2.1.0.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) August 2009.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict
	'use strict';

	var pluginName = 'calendarsPicker';

	/** Create the calendars datepicker plugin.
		<p>Sets an <code>input</code> field to popup a calendar for date entry,
			or a <code>div</code> or <code>span</code> to show an inline calendar.</p>
		<p>Expects HTML like:</p>
		<pre>&lt;input type="text"> or &lt;div>&lt;/div></pre>
		<p>Provide inline configuration like:</p>
		<pre>&lt;input type="text" data-calendarsPicker="name: 'value'"/></pre>
		@class CalendarsPicker
		@augments JQPlugin
		@example $(selector).calendarsPicker()
$(selector).calendarsPicker({minDate: 0, maxDate: '+1m +1w'}) */
	$.JQPlugin.createPlugin({

		/** The name of the plugin.
			@memberof CalendarsPicker
			@default 'calendarsPicker' */
		name: pluginName,

		/** Default template for generating a datepicker.
			Insert anywhere:
			<ul>
			<li>'{l10n:<em>name</em>}' to insert localised value for <em>name</em>,</li>
			<li>'{link:<em>name</em>}' to insert a link trigger for command <em>name</em>,</li>
			<li>'{button:<em>name</em>}' to insert a button trigger for command <em>name</em>,</li>
			<li>'{popup:start}...{popup:end}' to mark a section for inclusion in a popup datepicker only,</li>
			<li>'{inline:start}...{inline:end}' to mark a section for inclusion in an inline datepicker only.</li>
			</ul>
			@memberof CalendarsPicker
			@property {string} picker Overall structure: '{months}' to insert calendar months.
			@property {string} monthRow One row of months: '{months}' to insert calendar months.
			@property {string} month A single month: '{monthHeader<em>:dateFormat</em>}' to insert the month header -
				<em>dateFormat</em> is optional and defaults to 'MM yyyy',
				'{weekHeader}' to insert a week header, '{weeks}' to insert the month's weeks.
			@property {string} weekHeader A week header: '{days}' to insert individual day names.
			@property {string} dayHeader Individual day header: '{day}' to insert day name.
			@property {string} week One week of the month: '{days}' to insert the week's days,
				'{weekOfYear}' to insert week of year.
			@property {string} day An individual day: '{day}' to insert day value.
			@property {string} monthSelector jQuery selector, relative to picker, for a single month.
			@property {string} daySelector jQuery selector, relative to picker, for individual days.
			@property {string} rtlClass Class for right-to-left (RTL) languages.
			@property {string} multiClass Class for multi-month datepickers.
			@property {string} defaultClass Class for selectable dates.
			@property {string} selectedClass Class for currently selected dates.
			@property {string} highlightedClass Class for highlighted dates.
			@property {string} todayClass Class for today.
			@property {string} otherMonthClass Class for days from other months.
			@property {string} weekendClass Class for days on weekends.
			@property {string} commandClass Class prefix for commands.
			@property {string} commandButtonClass Extra class(es) for commands that are buttons.
			@property {string} commandLinkClass Extra class(es) for commands that are links.
			@property {string} disabledClass Class for disabled commands. */
		defaultRenderer: {
			picker: '<div class="calendars">' +
			'<div class="calendars-nav">{link:prev}{link:today}{link:next}</div>{months}' +
			'{popup:start}<div class="calendars-ctrl">{link:clear}{link:close}</div>{popup:end}' +
			'<div class="calendars-clear-fix"></div></div>',
			monthRow: '<div class="calendars-month-row">{months}</div>',
			month: '<div class="calendars-month"><div class="calendars-month-header">{monthHeader}</div>' +
			'<table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
			weekHeader: '<tr>{days}</tr>',
			dayHeader: '<th>{day}</th>',
			week: '<tr>{days}</tr>',
			day: '<td>{day}</td>',
			monthSelector: '.calendars-month',
			daySelector: 'td',
			rtlClass: 'calendars-rtl',
			multiClass: 'calendars-multi',
			defaultClass: '',
			selectedClass: 'calendars-selected',
			highlightedClass: 'calendars-highlight',
			todayClass: 'calendars-today',
			otherMonthClass: 'calendars-other-month',
			weekendClass: 'calendars-weekend',
			commandClass: 'calendars-cmd',
			commandButtonClass: '',
			commandLinkClass: '',
			disabledClass: 'calendars-disabled'
		},

		/** Command actions that may be added to a layout by name.
			<ul>
			<li>prev - Show the previous month (based on <code>monthsToStep</code> option) - <em>PageUp</em></li>
			<li>prevJump - Show the previous year (based on <code>monthsToJump</code> option) - <em>Ctrl+PageUp</em></li>
			<li>next - Show the next month (based on <code>monthsToStep</code> option) - <em>PageDown</em></li>
			<li>nextJump - Show the next year (based on <code>monthsToJump</code> option) - <em>Ctrl+PageDown</em></li>
			<li>current - Show the currently selected month or today's if none selected - <em>Ctrl+Home</em></li>
			<li>today - Show today's month - <em>Ctrl+Home</em></li>
			<li>clear - Erase the date and close the datepicker popup - <em>Ctrl+End</em></li>
			<li>close - Close the datepicker popup - <em>Esc</em></li>
			<li>prevWeek - Move the cursor to the previous week - <em>Ctrl+Up</em></li>
			<li>prevDay - Move the cursor to the previous day - <em>Ctrl+Left</em></li>
			<li>nextDay - Move the cursor to the next day - <em>Ctrl+Right</em></li>
			<li>nextWeek - Move the cursor to the next week - <em>Ctrl+Down</em></li>
			</ul>
			The command name is the key name and is used to add the command to a layout
			with '{button:<em>name</em>}' or '{link:<em>name</em>}'. Each has the following attributes.
			@memberof CalendarsPicker
			@property {string} text The field in the regional settings for the displayed text.
			@property {string} status The field in the regional settings for the status text.
			@property {object} keystroke The keystroke to trigger the action, with attributes:
			@property {number} keystroke.keyCode the code for the keystroke,
			@property {boolean} [keystroke.ctrlKey] <code>true</code> if <em>Ctrl</em> is required,
			@property {boolean} [keystroke.altKey] <code>true</code> if <em>Alt</em> is required,
			@property {boolean} [keystroke.shiftKey] <code>true</code> if <em>Shift</em> is required.
			@property {CalendarsPickerCommandEnabled} enabled The function that indicates the command is enabled.
			@property {CalendarsPickerCommandDate} date The function to get the date associated with this action.
			@property {CalendarsPickerCommandAction} action The function that implements the action. */
		commands: {
			prev: {
				text: 'prevText',
				status: 'prevStatus', // Previous month
				keystroke: {keyCode: 33}, // Page up
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					return (!minDate || inst.drawDate.newDate().
						add(1 - inst.options.monthsToStep - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay).add(-1, 'd').compareTo(minDate) !== -1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().
						add(-inst.options.monthsToStep - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay);
				},
				action: function(inst) {
					plugin.changeMonth(this, -inst.options.monthsToStep);
				}
			},
			prevJump: {
				text: 'prevJumpText',
				status: 'prevJumpStatus', // Previous year
				keystroke: {keyCode: 33, ctrlKey: true}, // Ctrl + Page up
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					return (!minDate || inst.drawDate.newDate().
						add(1 - inst.options.monthsToJump - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay).add(-1, 'd').compareTo(minDate) !== -1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().
						add(-inst.options.monthsToJump - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay);
				},
				action: function(inst) {
					plugin.changeMonth(this, -inst.options.monthsToJump);
				}
			},
			next: {
				text: 'nextText',
				status: 'nextStatus', // Next month
				keystroke: {keyCode: 34}, // Page down
				enabled: function(inst) {
					var maxDate = inst.get('maxDate');
					return (!maxDate || inst.drawDate.newDate().
						add(inst.options.monthsToStep - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay).compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().
						add(inst.options.monthsToStep - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay);
				},
				action: function(inst) {
					plugin.changeMonth(this, inst.options.monthsToStep);
				}
			},
			nextJump: {
				text: 'nextJumpText',
				status: 'nextJumpStatus', // Next year
				keystroke: {keyCode: 34, ctrlKey: true}, // Ctrl + Page down
				enabled: function(inst) {
					var maxDate = inst.get('maxDate');
					return (!maxDate || inst.drawDate.newDate().
						add(inst.options.monthsToJump - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay).compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().
						add(inst.options.monthsToJump - inst.options.monthsOffset, 'm').
						day(inst.options.calendar.minDay);
				},
				action: function(inst) {
					plugin.changeMonth(this, inst.options.monthsToJump);
				}
			},
			current: {
				text: 'currentText',
				status: 'currentStatus', // Current month
				keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					var maxDate = inst.get('maxDate');
					var curDate = inst.selectedDates[0] || inst.options.calendar.today();
					return (!minDate || curDate.compareTo(minDate) !== -1) &&
						(!maxDate || curDate.compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.selectedDates[0] || inst.options.calendar.today();
				},
				action: function(inst) {
					var curDate = inst.selectedDates[0] || inst.options.calendar.today();
					plugin.showMonth(this, curDate.year(), curDate.month());
				}
			},
			today: {
				text: 'todayText',
				status: 'todayStatus', // Today's month
				keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					var maxDate = inst.get('maxDate');
					return (!minDate || inst.options.calendar.today().compareTo(minDate) !== -1) &&
						(!maxDate || inst.options.calendar.today().compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.options.calendar.today();
				},
				action: function() {
					plugin.showMonth(this);
				}
			},
			clear: {
				text: 'clearText',
				status: 'clearStatus', // Clear the datepicker
				keystroke: {keyCode: 35, ctrlKey: true}, // Ctrl + End
				enabled: function() { return true; },
				date: function() { return null; },
				action: function() { plugin.clear(this); }
			},
			close: {
				text: 'closeText',
				status: 'closeStatus', // Close the datepicker
				keystroke: {keyCode: 27}, // Escape
				enabled: function() { return true; },
				date: function() { return null; },
				action: function() { plugin.hide(this); }
			},
			prevWeek: {
				text: 'prevWeekText',
				status: 'prevWeekStatus', // Previous week
				keystroke: {keyCode: 38, ctrlKey: true}, // Ctrl + Up
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					return (!minDate || inst.drawDate.newDate().
						add(-inst.options.calendar.daysInWeek(), 'd').compareTo(minDate) !== -1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().add(-inst.options.calendar.daysInWeek(), 'd');
				},
				action: function(inst) {
					plugin.changeDay(this, -inst.options.calendar.daysInWeek());
				}
			},
			prevDay: {
				text: 'prevDayText',
				status: 'prevDayStatus', // Previous day
				keystroke: {keyCode: 37, ctrlKey: true}, // Ctrl + Left
				enabled: function(inst) {
					var minDate = inst.curMinDate();
					return (!minDate || inst.drawDate.newDate().add(-1, 'd').compareTo(minDate) !== -1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().add(-1, 'd');
				},
				action: function() {
					plugin.changeDay(this, -1);
				}
			},
			nextDay: {
				text: 'nextDayText',
				status: 'nextDayStatus', // Next day
				keystroke: {keyCode: 39, ctrlKey: true}, // Ctrl + Right
				enabled: function(inst) {
					var maxDate = inst.get('maxDate');
					return (!maxDate || inst.drawDate.newDate().add(1, 'd').compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().add(1, 'd');
				},
				action: function() {
					plugin.changeDay(this, 1);
				}
			},
			nextWeek: {
				text: 'nextWeekText',
				status: 'nextWeekStatus', // Next week
				keystroke: {keyCode: 40, ctrlKey: true}, // Ctrl + Down
				enabled: function(inst) {
					var maxDate = inst.get('maxDate');
					return (!maxDate || inst.drawDate.newDate().
						add(inst.options.calendar.daysInWeek(), 'd').compareTo(maxDate) !== +1);
				},
				date: function(inst) {
					return inst.drawDate.newDate().add(inst.options.calendar.daysInWeek(), 'd');
				},
				action: function(inst) {
					plugin.changeDay(this, inst.options.calendar.daysInWeek());
				}
			}
		},

		/** Determine whether a command is enabled.
			@callback CalendarsPickerCommandEnabled
			@param {object} inst The current instance settings.
			@return {boolean} <code>true</code> if this command is enabled, <code>false</code> if not.
			@example enabled: function(inst) {
  return !!inst.curMinDate();
} */

		/** Calculate the representative date for a command.
			@callback CalendarsPickerCommandDate
			@param {object} inst The current instance settings.
			@return {CDate} A date appropriate for this command.
			@example date: function(inst) {
  return inst.curMinDate();
} */

		/** Perform the action for a command.
			@callback CalendarsPickerCommandAction
			@param {object} inst The current instance settings.
			@example date: function(inst) {
  $.datepick.setDate(inst.elem, inst.curMinDate());
} */

		/** Calculate the week of the year for a date.
			@callback CalendarsPickerCalculateWeek
			@param {CDate} date The date to evaluate.
			@return {number} The week of the year.
			@example calculateWeek: function(date) {
  var startYear = date.newDate(date.year(), 1, 1);
  return Math.floor((date.dayOfYear() - startYear.dayOfYear()) / 7) + 1;
} */

		/** Provide information about an individual date shown in the calendar.
			@callback CalendarsPickerOnDate
			@param {CDate} date The date to evaluate.
			@return {object} Information about that date, with the properties above.
			@property {boolean} selectable <code>true</code> if this date can be selected.
			@property {string} dateClass Class(es) to be applied to the date.
			@property {string} content The date cell content.
			@property {string} tooltip A popup tooltip for the date.
			@example onDate: function(date) {
  return {selectable: date.day() > 0 && date.day() < 5,
    dateClass: date.day() === 4 ? 'last-day' : ''};
} */

		/** Update the datepicker display.
			@callback CalendarsPickerOnShow
			@param {jQuery} picker The datepicker <code>div</code> to be shown.
			@param {object} inst The current instance settings.
			@example onShow: function(picker, inst) {
  picker.append('<button type="button">Hi</button>').
    find('button:last').click(function() {
      alert('Hi!');
    });
} */

		/** React to navigating through the months/years.
			@callback CalendarsPickerOnChangeMonthYear
			@param {number} year The new year.
			@param {number} month The new month (calendar minimum month to maximum month).
			@example onChangeMonthYear: function(year, month) {
  alert('Now in ' + month + '/' + year);
} */

		/** Datepicker on select callback.
			Triggered when a date is selected.
			@callback CalendarsPickerOnSelect
			@param {CDate[]} dates The selected date(s).
			@example onSelect: function(dates) {
  alert('Selected ' + dates);
} */

		/** Datepicker on close callback.
			Triggered when a popup calendar is closed.
			@callback CalendarsPickerOnClose
			@param {CDate[]} dates The selected date(s).
			@example onClose: function(dates) {
  alert('Selected ' + dates);
} */

		/** Default settings for the plugin.
			@memberof CalendarsPicker
			@property {Calendar} [calendar=$.calendars.instance()] The calendar for this datepicker.
			@property {string} [pickerClass=''] CSS class to add to this instance of the datepicker.
			@property {boolean} [showOnFocus=true] <code>true</code> for popup on focus, <code>false</code> for not.
			@property {string|Element|jQuery} [showTrigger=null] Element to be cloned for a trigger,
				<code>null</code> for none.
			@property {string} [showAnim='show'] Name of jQuery animation for popup, '' for no animation.
			@property {object} [showOptions=null] Options for enhanced animations.
			@property {string|number} [showSpeed='normal'] Duration of display/closure, named or in milliseconds.
			@property {string|Element|jQuery} [popupContainer=null] The element to which a popup calendar is added,
				<code>null</code> for body.
			@property {string} [alignment='bottom'] Alignment of popup - with nominated corner of input:
				'top' or 'bottom' aligns depending on language direction,
				'topLeft', 'topRight', 'bottomLeft', 'bottomRight'.
			@property {boolean} [fixedWeeks=false] <code>true</code> to always show 6 weeks,
				<code>false</code> to only show as many as are needed.
			@property {number} [firstDay=null] First day of the week, 0 = Sunday, 1 = Monday, etc.,
				<code>null</code> for <code>calendar</code> default.
			@property {CalendarsPickerCalculateWeek} [calculateWeek=null] Calculate week of the year from a date,
				<code>null</code> for <code>calendar</code> default.
			@property {boolean} [localNumbers=false] <code>true</code> to localise numbers (if available),
				<code>false</code> to use normal Arabic numerals.
			@property {number|number[]} [monthsToShow=1] How many months to show, cols or [rows, cols].
			@property {number} [monthsOffset=0] How many months to offset the primary month by;
				may be a function that takes the date and returns the offset.
			@property {number} [monthsToStep=1] How many months to move when prev/next clicked.
			@property {number} [monthsToJump=12] How many months to move when large prev/next clicked.
			@property {boolean} [useMouseWheel=true] <code>true</code> to use mousewheel if available,
				<code>false</code> to never use it.
			@property {boolean} [changeMonth=true] <code>true</code> to change month/year via drop-down,
				<code>false</code> for navigation only.
			@property {string} [yearRange='c-10:c+10'] Range of years to show in drop-down: 'any' for direct text entry
				or 'start:end', where start/end are '+-nn' for relative to today
				or 'c+-nn' for relative to the currently selected date
				or 'nnnn' for an absolute year.
			@property {boolean} [showOtherMonths=false] <code>true</code> to show dates from other months,
				<code>false</code> to not show them.
			@property {boolean} [selectOtherMonths=false] <code>true</code> to allow selection of dates
				from other months too.
			@property {string|number|CDate} [defaultDate=null] Date to show if no other selected.
			@property {boolean} [selectDefaultDate=false] <code>true</code> to pre-select the default date
				if no other is chosen.
			@property {string|number|CDate} [minDate=null] The minimum selectable date.
			@property {string|number|CDate} [maxDate=null] The maximum selectable date.
			@property {string} [dateFormat='mm/dd/yyyy'] Format for dates.
			@property {boolean} [autoSize=false] <code>true</code> to size the input field according to the date format.
			@property {boolean} [rangeSelect=false] Allows for selecting a date range on one date picker.
			@property {string} [rangeSeparator=' - '] Text between two dates in a range.
			@property {number} [multiSelect=0] Maximum number of selectable dates, zero for single select.
			@property {string} [multiSeparator=','] Text between multiple dates.
			@property {CalendarsPickerOnDate} [onDate=null] Callback as a date is added to the datepicker.
			@property {CalendarsPickerOnShow} [onShow=null] Callback just before a datepicker is shown.
			@property {CalendarsPickerOnChangeMonthYear} [onChangeMonthYear=null] Callback when a new month/year
				is selected.
			@property {CalendarsPickerOnSelect} [onSelect=null] Callback when a date is selected.
			@property {CalendarsPickerOnClose} [onClose=null] Callback when a datepicker is closed.
			@property {string|Element|jQuery} [altField=null] Alternate field to update in synch with the datepicker.
			@property {string} [altFormat=null] Date format for alternate field, defaults to <code>dateFormat</code>.
			@property {boolean} [constrainInput=true] <code>true</code> to constrain typed input to
				<code>dateFormat</code> allowed characters.
			@property {boolean} [commandsAsDateFormat=false] <code>true</code> to apply
				<code><a href="#formatDate">formatDate</a></code> to the command texts.
			@property {object} [commands=this.commands] Command actions that may be added to a layout by name.
			@example $(selector).calendarsPicker({calendar: $.calendars.instance('persian')})
$(selector).calendarsPicker({monthsToShow: [2, 3], monthsToStep: 6})
$(selector).calendarsPicker({minDate: $.calendars.newDate(2001, 1, 1),
  maxDate: $.calendars.newDate(2010, 12, 31)}) */
		defaultOptions: {
			calendar: $.calendars.instance(),
			pickerClass: '',
			showOnFocus: true,
			showTrigger: null,
			showAnim: 'show',
			showOptions: {},
			showSpeed: 'normal',
			popupContainer: null,
			alignment: 'bottom',
			fixedWeeks: false,
			firstDay: null,
			calculateWeek: null,
			localNumbers: false,
			monthsToShow: 1,
			monthsOffset: 0,
			monthsToStep: 1,
			monthsToJump: 12,
			useMouseWheel: true,
			changeMonth: true,
			yearRange: 'c-10:c+10',
			showOtherMonths: false,
			selectOtherMonths: false,
			defaultDate: null,
			selectDefaultDate: false,
			minDate: null,
			maxDate: null,
			dateFormat: null,
			autoSize: false,
			rangeSelect: false,
			rangeSeparator: ' - ',
			multiSelect: 0,
			multiSeparator: ',',
			onDate: null,
			onShow: null,
			onChangeMonthYear: null,
			onSelect: null,
			onClose: null,
			altField: null,
			altFormat: null,
			constrainInput: true,
			commandsAsDateFormat: false,
			commands: {} // this.commands
		},

		/** Localisations for the plugin.
			Entries are objects indexed by the language code ('' being the default US/English).
			Each object has the following attributes.
			@memberof CalendarsPicker
			@property {string} [renderer=this.defaultRenderer] The rendering templates.
			@property {string} [prevText='&lt;Prev'] Text for the previous month command.
			@property {string} [prevStatus='Show the previous month'] Status text for the
						previous month command.
			@property {string} [prevJumpText='&lt;&lt;']  Text for the previous year command.
			@property {string} [prevJumpStatus='Show the previous year'] Status text for the
						previous year command.
			@property {string} [nextText='Next&gt;'] Text for the next month command.
			@property {string} [nextStatus='Show the next month'] Status text for the next month command.
			@property {string} [nextJumpText='&gt;&gt;'] Text for the next year command.
			@property {string} [nextJumpStatus='Show the next year'] Status text for the
						next year command.
			@property {string} [currentText='Current'] Text for the current month command.
			@property {string} [currentStatus='Show the current month']  Status text for the
						current month command.
			@property {string} [todayText='Today'] Text for the today's month command.
			@property {string} [todayStatus='Show today\'s month']  Status text for the today's month command.
			@property {string} [clearText='Clear'] Text for the clear command.
			@property {string} [clearStatus='Clear all the dates'] Status text for the clear command.
			@property {string} [closeText='Close'] Text for the close command.
			@property {string} [closeStatus='Close the datepicker']  Status text for the close command.
			@property {string} [yearStatus='Change the year'] Status text for year selection.
			@property {string} [earlierText='&#160;&#160;▲'] Text for earlier years.
			@property {string} [laterText='&#160;&#160;▼'] Text for later years.
			@property {string} [monthStatus='Change the month'] Status text for month selection.
			@property {string} [weekText='Wk'] Text for week of the year column header.
			@property {string} [weekStatus='Week of the year'] Status text for week of the year
						column header.
			@property {string} [dayStatus='Select DD, M d, yyyy'] Status text for selectable days.
			@property {string} [defaultStatus='Select a date'] Status text shown by default.
			@property {boolean} [isRTL=false] <code>true</code> if language is right-to-left. */
		regionalOptions: { // Available regional settings, indexed by language/country code
			'': { // Default regional settings - English/US
				renderer: {}, // this.defaultRenderer
				prevText: '&lt;Prev',
				prevStatus: 'Show the previous month',
				prevJumpText: '&lt;&lt;',
				prevJumpStatus: 'Show the previous year',
				nextText: 'Next&gt;',
				nextStatus: 'Show the next month',
				nextJumpText: '&gt;&gt;',
				nextJumpStatus: 'Show the next year',
				currentText: 'Current',
				currentStatus: 'Show the current month',
				todayText: 'Today',
				todayStatus: 'Show today\'s month',
				clearText: 'Clear',
				clearStatus: 'Clear all the dates',
				closeText: 'Close',
				closeStatus: 'Close the datepicker',
				yearStatus: 'Change the year',
				earlierText: '&#160;&#160;▲',
				laterText: '&#160;&#160;▼',
				monthStatus: 'Change the month',
				weekText: 'Wk',
				weekStatus: 'Week of the year',
				dayStatus: 'Select DD, M d, yyyy',
				defaultStatus: 'Select a date',
				isRTL: false
			}
		},

		_disabled: [],

		_popupClass: 'calendars-popup', // Marker for popup division
		_triggerClass: 'calendars-trigger', // Marker for trigger element
		_disableClass: 'calendars-disable', // Marker for disabled element
		_monthYearClass: 'calendars-month-year', // Marker for month/year inputs
		_curMonthClass: 'calendars-month-', // Marker for current month/year
		_anyYearClass: 'calendars-any-year', // Marker for year direct input
		_curDoWClass: 'calendars-dow-', // Marker for day of week

		_init: function() {
			this.defaultOptions.commands = this.commands;
			this.regionalOptions[''].renderer = this.defaultRenderer;
			this._super();
		},

		_instSettings: function(elem, options) { // jshint unused:false
			return {selectedDates: [], drawDate: null, pickingRange: false,
				inline: ($.inArray(elem[0].nodeName.toLowerCase(), ['div', 'span']) > -1),
				get: function(name) { // Get a setting value, computing if necessary
					if ($.inArray(name, ['defaultDate', 'minDate', 'maxDate']) > -1) { // Decode date settings
						return this.options.calendar.determineDate(this.options[name], null,
							this.selectedDates[0], this.get('dateFormat'), this.getConfig());
					}
					if (name === 'dateFormat') {
						return this.options.dateFormat || this.options.calendar.local.dateFormat;
					}
					return this.options[name];
				},
				curMinDate: function() {
					return (this.pickingRange ? this.selectedDates[0] : this.get('minDate'));
				},
				getConfig: function() {
					return {dayNamesShort: this.options.dayNamesShort, dayNames: this.options.dayNames,
						monthNamesShort: this.options.monthNamesShort, monthNames: this.options.monthNames,
						calculateWeek: this.options.calculateWeek, shortYearCutoff: this.options.shortYearCutoff};
				}
			};
		},

		_postAttach: function(elem, inst) {
			if (inst.inline) {
				inst.drawDate = plugin._checkMinMax((inst.selectedDates[0] ||
					inst.get('defaultDate') || inst.options.calendar.today()).newDate(), inst);
				inst.prevDate = inst.drawDate.newDate();
				this._update(elem[0]);
				if ($.fn.mousewheel) {
					elem.mousewheel(this._doMouseWheel);
				}
			}
			else {
				this._attachments(elem, inst);
				elem.on('keydown.' + inst.name, this._keyDown).on('keypress.' + inst.name, this._keyPress).
					on('keyup.' + inst.name, this._keyUp);
				if (elem.attr('disabled')) {
					this.disable(elem[0]);
				}
			}
		},

		_optionsChanged: function(elem, inst, options) {
			if (options.calendar && options.calendar !== inst.options.calendar) {
				var discardDate = function(name) {
					return (typeof inst.options[name] === 'object' ? null : inst.options[name]);
				};
				options = $.extend({defaultDate: discardDate('defaultDate'),
					minDate: discardDate('minDate'), maxDate: discardDate('maxDate')}, options);
				inst.selectedDates = [];
				inst.drawDate = null;
			}
			var dates = inst.selectedDates;
			$.extend(inst.options, options);
			this.setDate(elem[0], dates, null, false, true);
			inst.pickingRange = false;
			var calendar = inst.options.calendar;
			var defaultDate = inst.get('defaultDate');
			inst.drawDate = this._checkMinMax((defaultDate ? defaultDate : inst.drawDate) ||
				defaultDate || calendar.today(), inst).newDate();
			if (!inst.inline) {
				this._attachments(elem, inst);
			}
			if (inst.inline || inst.div) {
				this._update(elem[0]);
			}
		},

		/** Attach events and trigger, if necessary.
			@memberof CalendarsPicker
			@private
			@param {jQuery} elem The control to affect.
			@param {object} inst The current instance settings. */
		_attachments: function(elem, inst) {
			elem.off('focus.' + inst.name);
			if (inst.options.showOnFocus) {
				elem.on('focus.' + inst.name, this.show);
			}
			if (inst.trigger) {
				inst.trigger.remove();
			}
			var trigger = inst.options.showTrigger;
			inst.trigger = (!trigger ? $([]) :
				$(trigger).clone().removeAttr('id').addClass(this._triggerClass)
					[inst.options.isRTL ? 'insertBefore' : 'insertAfter'](elem).
					click(function() {
						if (!plugin.isDisabled(elem[0])) {
							plugin[plugin.curInst === inst ? 'hide' : 'show'](elem[0]);
						}
					}));
			this._autoSize(elem, inst);
			var dates = this._extractDates(inst, elem.val());
			if (dates) {
				this.setDate(elem[0], dates, null, true);
			}
			var defaultDate = inst.get('defaultDate');
			if (inst.options.selectDefaultDate && defaultDate && inst.selectedDates.length === 0) {
				this.setDate(elem[0], (defaultDate || inst.options.calendar.today()).newDate());
			}
		},

		/** Apply the maximum length for the date format.
			@memberof CalendarsPicker
			@private
			@param {jQuery} elem The control to affect.
			@param {object} inst The current instance settings. */
		_autoSize: function(elem, inst) {
			if (inst.options.autoSize && !inst.inline) {
				var calendar = inst.options.calendar;
				var date = calendar.newDate(2009, 10, 20); // Ensure double digits
				var dateFormat = inst.get('dateFormat');
				if (dateFormat.match(/[DM]/)) {
					var findMax = function(names) {
						var max = 0;
						var maxI = 0;
						for (var i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.month(findMax(calendar.local[dateFormat.match(/MM/) ? // Longest month
						'monthNames' : 'monthNamesShort']) + 1);
					date.day(findMax(calendar.local[dateFormat.match(/DD/) ? // Longest day
						'dayNames' : 'dayNamesShort']) + 20 - date.dayOfWeek());
				}
				inst.elem.attr('size', date.formatDate(dateFormat,
					{localNumbers: inst.options.localnumbers}).length);
			}
		},

		_preDestroy: function(elem, inst) {
			if (inst.trigger) {
				inst.trigger.remove();
			}
			elem.empty().off('.' + inst.name);
			if (inst.inline && $.fn.mousewheel) {
				elem.unmousewheel();
			}
			if (!inst.inline && inst.options.autoSize) {
				elem.removeAttr('size');
			}
		},

		/** Apply multiple event functions.
			@memberof CalendarsPicker
			@param {function} fns The functions to apply.
			@example onShow: multipleEvents(fn1, fn2, ...) */
		multipleEvents: function(fns) { // jshint unused:false
			var funcs = arguments;
			return function() {
				for (var i = 0; i < funcs.length; i++) {
					funcs[i].apply(this, arguments);
				}
			};
		},

		/** Enable the control.
			@memberof CalendarsPicker
			@param {Element} elem The control to affect.
			@example $(selector).datepick('enable') */
		enable: function(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			var inst = this._getInst(elem);
			if (inst.inline) {
				elem.children('.' + this._disableClass).remove().end().
					find('button,select').prop('disabled', false).end().
					find('a').attr('href', '#');
			}
			else {
				elem.prop('disabled', false);
				inst.trigger.filter('button.' + this._triggerClass).prop('disabled', false).end().
					filter('img.' + this._triggerClass).css({opacity: '1.0', cursor: ''});
			}
			this._disabled = $.map(this._disabled,
				function(value) { return (value === elem[0] ? null : value); }); // Delete entry
		},

		/** Disable the control.
			@memberof CalendarsPicker
			@param {Element} elem The control to affect.
			@example $(selector).datepick('disable') */
		disable: function(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			var inst = this._getInst(elem);
			if (inst.inline) {
				var inline = elem.children(':last');
				var offset = inline.offset();
				var relOffset = {left: 0, top: 0};
				inline.parents().each(function() {
					if ($(this).css('position') === 'relative') {
						relOffset = $(this).offset();
						return false;
					}
				});
				var zIndex = elem.css('zIndex');
				zIndex = (zIndex === 'auto' ? 0 : parseInt(zIndex, 10)) + 1;
				elem.prepend('<div class="' + this._disableClass + '" style="' +
					'width: ' + inline.outerWidth() + 'px; height: ' + inline.outerHeight() +
					'px; left: ' + (offset.left - relOffset.left) + 'px; top: ' +
					(offset.top - relOffset.top) + 'px; z-index: ' + zIndex + '"></div>').
					find('button,select').prop('disabled', true).end().
					find('a').removeAttr('href');
			}
			else {
				elem.prop('disabled', true);
				inst.trigger.filter('button.' + this._triggerClass).prop('disabled', true).end().
					filter('img.' + this._triggerClass).css({opacity: '0.5', cursor: 'default'});
			}
			this._disabled = $.map(this._disabled,
				function(value) { return (value === elem[0] ? null : value); }); // Delete entry
			this._disabled.push(elem[0]);
		},

		/** Is the first field in a jQuery collection disabled as a datepicker?
			@memberof CalendarsPicker
			@param {Element} elem The control to examine.
			@return {boolean} <code>true</code> if disabled, <code>false</code> if enabled.
			@example if ($(selector).datepick('isDisabled')) {...} */
		isDisabled: function(elem) {
			return (elem && $.inArray(elem, this._disabled) > -1);
		},

		/** Show a popup datepicker.
			@memberof CalendarsPicker
			@param {Event|Element} elem a focus event or the control to use.
			@example $(selector).datepick('show') */
		show: function(elem) {
			elem = $(elem.target || elem);
			var inst = plugin._getInst(elem);
			if (plugin.curInst === inst) {
				return;
			}
			if (plugin.curInst) {
				plugin.hide(plugin.curInst, true);
			}
			if (!$.isEmptyObject(inst)) {
				// Retrieve existing date(s)
				inst.lastVal = null;
				inst.selectedDates = plugin._extractDates(inst, elem.val());
				inst.pickingRange = false;
				inst.drawDate = plugin._checkMinMax((inst.selectedDates[0] ||
					inst.get('defaultDate') || inst.options.calendar.today()).newDate(), inst);
				inst.prevDate = inst.drawDate.newDate();
				plugin.curInst = inst;
				// Generate content
				plugin._update(elem[0], true);
				// Adjust position before showing
				var offset = plugin._checkOffset(inst);
				inst.div.css({left: offset.left, top: offset.top});
				// And display
				var showAnim = inst.options.showAnim;
				var showSpeed = inst.options.showSpeed;
				showSpeed = (showSpeed === 'normal' && $.ui &&
					parseInt($.ui.version.substring(2)) >= 8 ? '_default' : showSpeed);
				if ($.effects && ($.effects[showAnim] || ($.effects.effect && $.effects.effect[showAnim]))) {
					var data = inst.div.data(); // Update old effects data
					for (var key in data) {
						if (key.match(/^ec\.storage\./)) {
							data[key] = inst._mainDiv.css(key.replace(/ec\.storage\./, ''));
						}
					}
					inst.div.data(data).show(showAnim, inst.options.showOptions, showSpeed);
				}
				else {
					inst.div[showAnim || 'show'](showAnim ? showSpeed : 0);
				}
			}
		},

		/** Extract possible dates from a string.
			@memberof CalendarsPicker
			@private
			@param {object} inst The current instance settings.
			@param {string} text The text to extract from.
			@return {CDate[]} The extracted dates. */
		_extractDates: function(inst, datesText) {
			if (datesText === inst.lastVal) {
				return;
			}
			inst.lastVal = datesText;
			datesText = datesText.split(inst.options.multiSelect ? inst.options.multiSeparator :
				(inst.options.rangeSelect ? inst.options.rangeSeparator : '\x00'));
			var dates = [];
			for (var i = 0; i < datesText.length; i++) {
				try {
					var date = inst.options.calendar.parseDate(inst.get('dateFormat'), datesText[i]);
					if (date) {
						var found = false;
						for (var j = 0; j < dates.length; j++) {
							if (dates[j].compareTo(date) === 0) {
								found = true;
								break;
							}
						}
						if (!found) {
							dates.push(date);
						}
					}
				}
				catch (e) {
					// Ignore
				}
			}
			dates.splice(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1), dates.length);
			if (inst.options.rangeSelect && dates.length === 1) {
				dates[1] = dates[0];
			}
			return dates;
		},

		/** Update the datepicker display.
			@memberof CalendarsPicker
			@private
			@param {Event|Element} elem A focus event or the control to use.
			@param {boolean} hidden <code>true</code> to initially hide the datepicker. */
		_update: function(elem, hidden) {
			elem = $(elem.target || elem);
			var inst = plugin._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				if (inst.inline || plugin.curInst === inst) {
					if ($.isFunction(inst.options.onChangeMonthYear) && (!inst.prevDate ||
							inst.prevDate.year() !== inst.drawDate.year() ||
							inst.prevDate.month() !== inst.drawDate.month())) {
						inst.options.onChangeMonthYear.apply(elem[0],
							[inst.drawDate.year(), inst.drawDate.month()]);
					}
				}
				if (inst.inline) {
					var index = $('a, :input', elem).index($(':focus', elem));
					elem.html(this._generateContent(elem[0], inst));
					var focus = elem.find('a, :input');
					focus.eq(Math.max(Math.min(index, focus.length - 1), 0)).focus();
				}
				else if (plugin.curInst === inst) {
					if (!inst.div) {
						inst.div = $('<div></div>').addClass(this._popupClass).
							css({display: (hidden ? 'none' : 'static'), position: 'absolute',
								left: elem.offset().left, top: elem.offset().top + elem.outerHeight()}).
							appendTo($(inst.options.popupContainer || 'body'));
						if ($.fn.mousewheel) {
							inst.div.mousewheel(this._doMouseWheel);
						}
					}
					inst.div.html(this._generateContent(elem[0], inst));
					elem.focus();
				}
			}
		},

		/** Update the input field and any alternate field with the current dates.
			@memberof CalendarsPicker
			@private
			@param {Element} elem The control to use.
			@param {boolean} keyUp <code>true</code> if coming from <code>keyUp</code> processing (internal). */
		_updateInput: function(elem, keyUp) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var value = '';
				var altValue = '';
				var sep = (inst.options.multiSelect ? inst.options.multiSeparator :
					inst.options.rangeSeparator);
				var calendar = inst.options.calendar;
				var dateFormat = inst.get('dateFormat');
				var altFormat = inst.options.altFormat || dateFormat;
				var settings = {localNumbers: inst.options.localNumbers};
				for (var i = 0; i < inst.selectedDates.length; i++) {
					value += (keyUp ? '' : (i > 0 ? sep : '') +
						calendar.formatDate(dateFormat, inst.selectedDates[i], settings));
					altValue += (i > 0 ? sep : '') +
						calendar.formatDate(altFormat, inst.selectedDates[i], settings);
				}
				if (!inst.inline && !keyUp) {
					$(elem).val(value);
				}
				$(inst.options.altField).val(altValue);
				if ($.isFunction(inst.options.onSelect) && !keyUp && !inst.inSelect) {
					inst.inSelect = true; // Prevent endless loops
					inst.options.onSelect.apply(elem, [inst.selectedDates]);
					inst.inSelect = false;
				}
				$(elem).change();
			}
		},

		/** Retrieve the size of left and top borders for an element.
			@memberof CalendarsPicker
			@private
			@param {jQuery} elem The element of interest.
			@return {number[]} The left and top borders. */
		_getBorders: function(elem) {
			var convert = function(value) {
				return {thin: 1, medium: 3, thick: 5}[value] || value;
			};
			return [parseFloat(convert(elem.css('border-left-width'))),
				parseFloat(convert(elem.css('border-top-width')))];
		},

		/** Check positioning to remain on the screen.
			@memberof CalendarsPicker
			@private
			@param {object} inst The current instance settings.
			@return {object} The updated offset for the datepicker. */
		_checkOffset: function(inst) {
			var base = (inst.elem.is(':hidden') && inst.trigger ? inst.trigger : inst.elem);
			var offset = base.offset();
			var browserWidth = $(window).width();
			var browserHeight = $(window).height();
			if (browserWidth === 0) {
				return offset;
			}
			var isFixed = false;
			$(inst.elem).parents().each(function() {
				isFixed = isFixed || $(this).css('position') === 'fixed';
				return !isFixed;
			});
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			var above = offset.top - (isFixed ? scrollY : 0) - inst.div.outerHeight();
			var below = offset.top - (isFixed ? scrollY : 0) + base.outerHeight();
			var alignL = offset.left - (isFixed ? scrollX : 0);
			var alignR = offset.left - (isFixed ? scrollX : 0) + base.outerWidth() - inst.div.outerWidth();
			var tooWide = (offset.left - scrollX + inst.div.outerWidth()) > browserWidth;
			var tooHigh = (offset.top - scrollY + inst.elem.outerHeight() +
				inst.div.outerHeight()) > browserHeight;
			inst.div.css('position', isFixed ? 'fixed' : 'absolute');
			var alignment = inst.options.alignment;
			if (alignment === 'topLeft') {
				offset = {left: alignL, top: above};
			}
			else if (alignment === 'topRight') {
				offset = {left: alignR, top: above};
			}
			else if (alignment === 'bottomLeft') {
				offset = {left: alignL, top: below};
			}
			else if (alignment === 'bottomRight') {
				offset = {left: alignR, top: below};
			}
			else if (alignment === 'top') {
				offset = {left: (inst.options.isRTL || tooWide ? alignR : alignL), top: above};
			}
			else { // bottom
				offset = {left: (inst.options.isRTL || tooWide ? alignR : alignL),
					top: (tooHigh ? above : below)};
			}
			offset.left = Math.max((isFixed ? 0 : scrollX), offset.left);
			offset.top = Math.max((isFixed ? 0 : scrollY), offset.top);
			return offset;
		},

		/** Close date picker if clicked elsewhere.
			@memberof CalendarsPicker
			@private
			@param {MouseEvent} event The mouse click to check. */
		_checkExternalClick: function(event) {
			if (!plugin.curInst) {
				return;
			}
			var elem = $(event.target);
			if (elem.closest('.' + plugin._popupClass + ',.' + plugin._triggerClass).length === 0 &&
					!elem.hasClass(plugin._getMarker())) {
				plugin.hide(plugin.curInst);
			}
		},

		/** Hide a popup datepicker.
			@memberof CalendarsPicker
			@param {Element|object} elem The control to use or the current instance settings.
			@param {boolean} immediate <code>true</code> to close immediately without animation (internal).
			@example $(selector).datepick('hide') */
		hide: function(elem, immediate) {
			if (!elem) {
				return;
			}
			var inst = this._getInst(elem);
			if ($.isEmptyObject(inst)) {
				inst = elem;
			}
			if (inst && inst === plugin.curInst) {
				var showAnim = (immediate ? '' : inst.options.showAnim);
				var showSpeed = inst.options.showSpeed;
				showSpeed = (showSpeed === 'normal' && $.ui &&
					parseInt($.ui.version.substring(2)) >= 8 ? '_default' : showSpeed);
				var postProcess = function() {
					if (!inst.div) {
						return;
					}
					inst.div.remove();
					inst.div = null;
					plugin.curInst = null;
					if ($.isFunction(inst.options.onClose)) {
						inst.options.onClose.apply(elem, [inst.selectedDates]);
					}
				};
				inst.div.stop();
				if ($.effects && ($.effects[showAnim] || ($.effects.effect && $.effects.effect[showAnim]))) {
					inst.div.hide(showAnim, inst.options.showOptions, showSpeed, postProcess);
				}
				else {
					var hideAnim = (showAnim === 'slideDown' ? 'slideUp' :
						(showAnim === 'fadeIn' ? 'fadeOut' : 'hide'));
					inst.div[hideAnim]((showAnim ? showSpeed : ''), postProcess);
				}
				if (!showAnim) {
					postProcess();
				}
			}
		},

		/** Handle keystrokes in the datepicker.
			@memberof CalendarsPicker
			@private
			@param {KeyEvent} event The keystroke.
			@return {boolean} <code>true</code> if not handled, <code>false</code> if handled. */
		_keyDown: function(event) {
			var elem = (event.data && event.data.elem) || event.target;
			var inst = plugin._getInst(elem);
			var handled = false;
			var command;
			if (inst.inline || inst.div) {
				if (event.keyCode === 9) { // Tab - close
					plugin.hide(elem);
				}
				else if (event.keyCode === 13) { // Enter - select
					plugin.selectDate(elem,
						$('a.' + inst.options.renderer.highlightedClass, inst.div)[0]);
					handled = true;
				}
				else { // Command keystrokes
					var commands = inst.options.commands;
					for (var name in commands) {
						if (inst.options.commands.hasOwnProperty(name)) {
							command = commands[name];
							/* jshint -W018 */ // Dislikes !!
							if (command.keystroke.keyCode === event.keyCode &&
									!!command.keystroke.ctrlKey === !!(event.ctrlKey || event.metaKey) &&
									!!command.keystroke.altKey === event.altKey &&
									!!command.keystroke.shiftKey === event.shiftKey) {
							/* jshint +W018 */
								plugin.performAction(elem, name);
								handled = true;
								break;
							}
						}
					}
				}
			}
			else { // Show on 'current' keystroke
				command = inst.options.commands.current;
				/* jshint -W018 */ // Dislikes !!
				if (command.keystroke.keyCode === event.keyCode &&
						!!command.keystroke.ctrlKey === !!(event.ctrlKey || event.metaKey) &&
						!!command.keystroke.altKey === event.altKey &&
						!!command.keystroke.shiftKey === event.shiftKey) {
				/* jshint +W018 */
					plugin.show(elem);
					handled = true;
				}
			}
			inst.ctrlKey = ((event.keyCode < 48 && event.keyCode !== 32) || event.ctrlKey || event.metaKey);
			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
			return !handled;
		},

		/** Filter keystrokes in the datepicker.
			@memberof CalendarsPicker
			@private
			@param {KeyEvent} event The keystroke.
			@return {boolean} <code>true</code> if allowed, <code>false</code> if not allowed. */
		_keyPress: function(event) {
			var inst = plugin._getInst((event.data && event.data.elem) || event.target);
			if (!$.isEmptyObject(inst) && inst.options.constrainInput) {
				var ch = String.fromCharCode(event.keyCode || event.charCode);
				var allowedChars = plugin._allowedChars(inst);
				return (event.metaKey || inst.ctrlKey || ch < ' ' ||
					!allowedChars || allowedChars.indexOf(ch) > -1);
			}
			return true;
		},

		/** Determine the set of characters allowed by the date format.
			@memberof CalendarsPicker
			@private
			@param {object} inst The current instance settings.
			@return {string} The set of allowed characters, or <code>null</code> if anything allowed. */
		_allowedChars: function(inst) {
			var allowedChars = (inst.options.multiSelect ? inst.options.multiSeparator :
				(inst.options.rangeSelect ? inst.options.rangeSeparator : ''));
			var literal = false;
			var hasNum = false;
			var dateFormat = inst.get('dateFormat');
			for (var i = 0; i < dateFormat.length; i++) {
				var ch = dateFormat.charAt(i);
				if (literal) {
					if (ch === '\'' && dateFormat.charAt(i + 1) !== '\'') {
						literal = false;
					}
					else {
						allowedChars += ch;
					}
				}
				else {
					switch (ch) {
						case 'd':
						case 'm':
						case 'o':
						case 'w':
							allowedChars += (hasNum ? '' : '0123456789');
							hasNum = true;
							break;
						case 'y':
						case '@':
						case '!':
							allowedChars += (hasNum ? '' : '0123456789') + '-';
							hasNum = true;
							break;
						case 'J':
							allowedChars += (hasNum ? '' : '0123456789') + '-.';
							hasNum = true;
							break;
						case 'D':
						case 'M':
						case 'Y':
							return null; // Accept anything
						case '\'':
							if (dateFormat.charAt(i + 1) === '\'') {
								allowedChars += '\'';
							}
							else {
								literal = true;
							}
							break;
						default:
							allowedChars += ch;
					}
				}
			}
			return allowedChars;
		},

		/** Synchronise datepicker with the field.
			@memberof CalendarsPicker
			@private
			@param {KeyEvent} event The keystroke.
			@return {boolean} <code>true</code> if allowed, <code>false</code> if not allowed. */
		_keyUp: function(event) {
			var elem = (event.data && event.data.elem) || event.target;
			var inst = plugin._getInst(elem);
			if (!$.isEmptyObject(inst) && !inst.ctrlKey && inst.lastVal !== inst.elem.val()) {
				try {
					var dates = plugin._extractDates(inst, inst.elem.val());
					if (dates.length > 0) {
						plugin.setDate(elem, dates, null, true);
					}
				}
				catch (e) {
					// Ignore
				}
			}
			return true;
		},

		/** Increment/decrement month/year on mouse wheel activity.
			@memberof CalendarsPicker
			@private
			@param {event} event The mouse wheel event.
			@param {number} delta The amount of change. */
		_doMouseWheel: function(event, delta) {
			var elem = (plugin.curInst && plugin.curInst.elem[0]) ||
				$(event.target).closest('.' + plugin._getMarker())[0];
			if (plugin.isDisabled(elem)) {
				return;
			}
			var inst = plugin._getInst(elem);
			if (inst.options.useMouseWheel) {
				delta = (delta < 0 ? -1 : +1);
				plugin.changeMonth(elem, -inst.options[event.ctrlKey ? 'monthsToJump' : 'monthsToStep'] * delta);
			}
			event.preventDefault();
		},

		/** Clear an input and close a popup datepicker.
			@memberof CalendarsPicker
			@param {Element} elem The control to use.
			@example $(selector).datepick('clear') */
		clear: function(elem) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				inst.selectedDates = [];
				this.hide(elem);
				var defaultDate = inst.get('defaultDate');
				if (inst.options.selectDefaultDate && defaultDate) {
					this.setDate(elem, (defaultDate || inst.options.calendar.today()).newDate());
				}
				else {
					this._updateInput(elem);
				}
			}
		},

		/** Retrieve the selected date(s) for a datepicker.
			@memberof CalendarsPicker
			@param {Element} elem The control to examine.
			@return {CDate[]} The selected date(s).
			@example var dates = $(selector).datepick('getDate') */
		getDate: function(elem) {
			var inst = this._getInst(elem);
			return (!$.isEmptyObject(inst) ? inst.selectedDates : []);
		},

		/** Set the selected date(s) for a datepicker.
			@memberof CalendarsPicker
			@param {Element} elem The control to examine.
			@param {CDate|number|string|array} dates The selected date(s).
			@param {CDate|number|string} [endDate] The ending date for a range.
			@param {boolean} [keyUp] <code>true</code> if coming from <code>keyUp</code> processing (internal).
			@param {boolean} [setOpt] <code>true</code> if coming from option processing (internal).
			@example $(selector).datepick('setDate', new Date(2014, 12-1, 25))
$(selector).datepick('setDate', '12/25/2014', '01/01/2015')
$(selector).datepick('setDate', [date1, date2, date3]) */
		setDate: function(elem, dates, endDate, keyUp, setOpt) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				if (!$.isArray(dates)) {
					dates = [dates];
					if (endDate) {
						dates.push(endDate);
					}
				}
				var minDate = inst.get('minDate');
				var maxDate = inst.get('maxDate');
				var curDate = inst.selectedDates[0];
				inst.selectedDates = [];
				for (var i = 0; i < dates.length; i++) {
					var date = inst.options.calendar.determineDate(
						dates[i], null, curDate, inst.get('dateFormat'), inst.getConfig());
					if (date) {
						if ((!minDate || date.compareTo(minDate) !== -1) &&
								(!maxDate || date.compareTo(maxDate) !== +1)) {
							var found = false;
							for (var j = 0; j < inst.selectedDates.length; j++) {
								if (inst.selectedDates[j].compareTo(date) === 0) {
									found = true;
									break;
								}
							}
							if (!found) {
								inst.selectedDates.push(date);
							}
						}
					}
				}
				inst.selectedDates.splice(inst.options.multiSelect ||
					(inst.options.rangeSelect ? 2 : 1), inst.selectedDates.length);
				if (inst.options.rangeSelect) {
					switch (inst.selectedDates.length) {
						case 1:
							inst.selectedDates[1] = inst.selectedDates[0];
							break;
						case 2:
							inst.selectedDates[1] = (inst.selectedDates[0].compareTo(inst.selectedDates[1]) === +1 ?
								inst.selectedDates[0] : inst.selectedDates[1]);
							break;
					}
					inst.pickingRange = false;
				}
				inst.prevDate = (inst.drawDate ? inst.drawDate.newDate() : null);
				inst.drawDate = this._checkMinMax((inst.selectedDates[0] ||
					inst.get('defaultDate') || inst.options.calendar.today()).newDate(), inst);
				if (!setOpt) {
					this._update(elem);
					this._updateInput(elem, keyUp);
				}
			}
		},

		/** Determine whether a date is selectable for this datepicker.
			@memberof CalendarsPicker
			@private
			@param {Element} elem The control to check.
			@param {CDate|string|number} date The date to check.
			@return {boolean} <code>true</code> if selectable, <code>false</code> if not.
			@example var selectable = $(selector).datepick('isSelectable', date) */
		isSelectable: function(elem, date) {
			var inst = this._getInst(elem);
			if ($.isEmptyObject(inst)) {
				return false;
			}
			date = inst.options.calendar.determineDate(date,
				inst.selectedDates[0] || inst.options.calendar.today(), null,
				inst.options.dateFormat, inst.getConfig());
			return this._isSelectable(elem, date, inst.options.onDate,
				inst.get('minDate'), inst.get('maxDate'));
		},

		/** Internally determine whether a date is selectable for this datepicker.
			@memberof CalendarsPicker
			@private
			@param {Element} elem The control to check.
			@param {CDate} date The date to check.
			@param {function|boolean} onDate Any <code>onDate</code> callback or <code>callback.selectable</code>.
			@param {CDate} minDate The minimum allowed date.
			@param {CDate} maxDate The maximum allowed date.
			@return {boolean} <code>true</code> if selectable, <code>false</code> if not. */
		_isSelectable: function(elem, date, onDate, minDate, maxDate) {
			var dateInfo = (typeof onDate === 'boolean' ? {selectable: onDate} :
				(!$.isFunction(onDate) ? {} : onDate.apply(elem, [date, true])));
			return (dateInfo.selectable !== false) &&
				(!minDate || date.toJD() >= minDate.toJD()) && (!maxDate || date.toJD() <= maxDate.toJD());
		},

		/** Perform a named action for a datepicker.
			@memberof CalendarsPicker
			@param {element} elem The control to affect.
			@param {string} action The name of the {@link CalendarsPicker.commands|action}.
			@example $(selector).calendarsPicker('performAction', 'next') */
		performAction: function(elem, action) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && !this.isDisabled(elem)) {
				var commands = inst.options.commands;
				if (commands[action] && commands[action].enabled.apply(elem, [inst])) {
					commands[action].action.apply(elem, [inst]);
				}
			}
		},

		/** Set the currently shown month, defaulting to today's.
			@memberof CalendarsPicker
			@param {Element} elem The control to affect.
			@param {number} [year] The year to show.
			@param {number} [month] The month to show (calendar minimum month to maximum month).
			@param {number} [day] The day to show.
			@example $(selector).datepick('showMonth', 2014, 12, 25) */
		showMonth: function(elem, year, month, day) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && ((typeof day !== 'undefined' && day !== null) ||
					inst.drawDate.year() !== year || inst.drawDate.month() !== month)) {
				inst.prevDate = inst.drawDate.newDate();
				var calendar = inst.options.calendar;
				var show = this._checkMinMax(typeof year !== 'undefined' && year !== null ?
					calendar.newDate(year, month, 1) : calendar.today(), inst);
				inst.drawDate.date(show.year(), show.month(), 
					typeof day !== 'undefined' && day !== null ? day : Math.min(inst.drawDate.day(),
					calendar.daysInMonth(show.year(), show.month())));
				this._update(elem);
			}
		},

		/** Adjust the currently shown month.
			@memberof CalendarsPicker
			@param {Element} elem The control to affect.
			@param {number} offset The number of months to change by.
			@example $(selector).datepick('changeMonth', 2)*/
		changeMonth: function(elem, offset) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var date = inst.drawDate.newDate().add(offset, 'm');
				this.showMonth(elem, date.year(), date.month());
			}
		},

		/** Adjust the currently shown day.
			@memberof CalendarsPicker
			@param {Element} elem The control to affect.
			@param {number} offset The number of days to change by.
			@example $(selector).datepick('changeDay', 7)*/
		changeDay: function(elem, offset) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var date = inst.drawDate.newDate().add(offset, 'd');
				this.showMonth(elem, date.year(), date.month(), date.day());
			}
		},

		/** Restrict a date to the minimum/maximum specified.
			@memberof CalendarsPicker
			@private
			@param {CDate} date The date to check.
			@param {object} inst The current instance settings. */
		_checkMinMax: function(date, inst) {
			var minDate = inst.get('minDate');
			var maxDate = inst.get('maxDate');
			date = (minDate && date.compareTo(minDate) === -1 ? minDate.newDate() : date);
			date = (maxDate && date.compareTo(maxDate) === +1 ? maxDate.newDate() : date);
			return date;
		},

		/** Retrieve the date associated with an entry in the datepicker.
			@memberof CalendarsPicker
			@param {Element} elem The control to examine.
			@param {Element} target The selected datepicker element.
			@return {CDate} The corresponding date, or <code>null</code>.
			@example var date = $(selector).datepick('retrieveDate',
  $('div.datepick-popup a:contains(10)')[0]) */
		retrieveDate: function(elem, target) {
			var inst = this._getInst(elem);
			return ($.isEmptyObject(inst) ? null : inst.options.calendar.fromJD(
				parseFloat(target.className.replace(/^.*jd(\d+\.5).*$/, '$1'))));
		},

		/** Select a date for this datepicker.
			@memberof CalendarsPicker
			@param {Element} elem The control to examine.
			@param {Element} target The selected datepicker element.
			@example $(selector).datepick('selectDate', $('div.datepick-popup a:contains(10)')[0]) */
		selectDate: function(elem, target) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && !this.isDisabled(elem)) {
				var date = this.retrieveDate(elem, target);
				if (inst.options.multiSelect) {
					var found = false;
					for (var i = 0; i < inst.selectedDates.length; i++) {
						if (date.compareTo(inst.selectedDates[i]) === 0) {
							inst.selectedDates.splice(i, 1);
							found = true;
							break;
						}
					}
					if (!found && inst.selectedDates.length < inst.options.multiSelect) {
						inst.selectedDates.push(date);
					}
				}
				else if (inst.options.rangeSelect) {
					if (inst.pickingRange) {
						inst.selectedDates[1] = date;
					}
					else {
						inst.selectedDates = [date, date];
					}
					inst.pickingRange = !inst.pickingRange;
				}
				else {
					inst.selectedDates = [date];
				}
				inst.prevDate = inst.drawDate = date.newDate();
				this._updateInput(elem);
				if (inst.inline || inst.pickingRange || inst.selectedDates.length <
						(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1))) {
					this._update(elem);
				}
				else {
					this.hide(elem);
				}
			}
		},

		/** Generate the datepicker content for this control.
			@memberof CalendarsPicker
			@private
			@param {Element} elem The control to affect.
			@param {object} inst The current instance settings.
			@return {jQuery} The datepicker content */
		_generateContent: function(elem, inst) {
			var monthsToShow = inst.options.monthsToShow;
			monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
			inst.drawDate = this._checkMinMax(
				inst.drawDate || inst.get('defaultDate') || inst.options.calendar.today(), inst);
			var drawDate = inst.drawDate.newDate().add(-inst.options.monthsOffset, 'm');
			// Generate months
			var monthRows = '';
			for (var row = 0; row < monthsToShow[0]; row++) {
				var months = '';
				for (var col = 0; col < monthsToShow[1]; col++) {
					months += this._generateMonth(elem, inst, drawDate.year(),
						drawDate.month(), inst.options.calendar, inst.options.renderer, (row === 0 && col === 0));
					drawDate.add(1, 'm');
				}
				monthRows += this._prepare(inst.options.renderer.monthRow, inst).replace(/\{months\}/, months);
			}
			var picker = this._prepare(inst.options.renderer.picker, inst).replace(/\{months\}/, monthRows).
				replace(/\{weekHeader\}/g, this._generateDayHeaders(inst, inst.options.calendar, inst.options.renderer));
			// Add commands
			var addCommand = function(type, open, close, name, classes) {
				if (picker.indexOf('{' + type + ':' + name + '}') === -1) {
					return;
				}
				var command = inst.options.commands[name];
				var date = (inst.options.commandsAsDateFormat ? command.date.apply(elem, [inst]) : null);
				picker = picker.replace(new RegExp('\\{' + type + ':' + name + '\\}', 'g'),
					'<' + open + (command.status ? ' title="' + inst.options[command.status] + '"' : '') +
					' class="' + inst.options.renderer.commandClass + ' ' +
					inst.options.renderer.commandClass + '-' + name + ' ' + classes +
					(command.enabled(inst) ? '' : ' ' + inst.options.renderer.disabledClass) + '">' +
					(date ? date.formatDate(inst.options[command.text], {localNumbers: inst.options.localNumbers}) :
					inst.options[command.text]) + '</' + close + '>');
			};
			for (var name in inst.options.commands) {
				if (inst.options.commands.hasOwnProperty(name)) {
					addCommand('button', 'button type="button"', 'button', name,
						inst.options.renderer.commandButtonClass);
					addCommand('link', 'a href="javascript:void(0)"', 'a', name,
						inst.options.renderer.commandLinkClass);
				}
			}
			picker = $(picker);
			if (monthsToShow[1] > 1) {
				var count = 0;
				$(inst.options.renderer.monthSelector, picker).each(function() {
					var nth = ++count % monthsToShow[1];
					$(this).addClass(nth === 1 ? 'first' : (nth === 0 ? 'last' : ''));
				});
			}
			// Add datepicker behaviour
			var self = this;
			function removeHighlight(elem) {
				(inst.inline ? $(elem).closest('.' + self._getMarker()) : inst.div).
					find(inst.options.renderer.daySelector + ' a').
					removeClass(inst.options.renderer.highlightedClass);
			}
			picker.find(inst.options.renderer.daySelector + ' a').hover(
					function() {
						removeHighlight(this);
						$(this).addClass(inst.options.renderer.highlightedClass);
					},
					function() {
						removeHighlight(this);
					}).
				click(function() {
					self.selectDate(elem, this);
				}).end().
				find('select.' + this._monthYearClass + ':not(.' + this._anyYearClass + ')').
				change(function() {
					var monthYear = $(this).val().split('/');
					self.showMonth(elem, parseInt(monthYear[1], 10), parseInt(monthYear[0], 10));
				}).end().
				find('select.' + this._anyYearClass).click(function() {
					$(this).css('visibility', 'hidden').
						next('input').css({left: this.offsetLeft, top: this.offsetTop,
						width: this.offsetWidth, height: this.offsetHeight}).show().focus();
				}).end().
				find('input.' + self._monthYearClass).change(function() {
					try {
						var year = parseInt($(this).val(), 10);
						year = (isNaN(year) ? inst.drawDate.year() : year);
						self.showMonth(elem, year, inst.drawDate.month(), inst.drawDate.day());
					}
					catch (e) {
						// Ignore
					}
				}).keydown(function(event) {
					if (event.keyCode === 13) { // Enter
						$(event.elem).change();
					}
					else if (event.keyCode === 27) { // Escape
						$(event.elem).hide().prev('select').css('visibility', 'visible');
						inst.elem.focus();
					}
				});
			// Add keyboard handling
			var data = {elem: inst.elem[0]};
			picker.keydown(data, this._keyDown).keypress(data, this._keyPress).keyup(data, this._keyUp);
			// Add command behaviour
			picker.find('.' + inst.options.renderer.commandClass).click(function() {
					if (!$(this).hasClass(inst.options.renderer.disabledClass)) {
						var action = this.className.replace(
							new RegExp('^.*' + inst.options.renderer.commandClass + '-([^ ]+).*$'), '$1');
						plugin.performAction(elem, action);
					}
				});
			// Add classes
			if (inst.options.isRTL) {
				picker.addClass(inst.options.renderer.rtlClass);
			}
			if (monthsToShow[0] * monthsToShow[1] > 1) {
				picker.addClass(inst.options.renderer.multiClass);
			}
			if (inst.options.pickerClass) {
				picker.addClass(inst.options.pickerClass);
			}
			// Resize
			$('body').append(picker);
			var width = 0;
			picker.find(inst.options.renderer.monthSelector).each(function() {
				width += $(this).outerWidth();
			});
			picker.width(width / monthsToShow[0]);
			// Pre-show customisation
			if ($.isFunction(inst.options.onShow)) {
				inst.options.onShow.apply(elem, [picker, inst.options.calendar, inst]);
			}
			return picker;
		},

		/** Generate the content for a single month.
			@memberof CalendarsPicker
			@private
			@param {Element} elem The control to affect.
			@param {object} inst The current instance settings.
			@param {number} year The year to generate.
			@param {number} month The month to generate.
			@param {BaseCalendar} calendar The current calendar.
			@param {object} renderer The rendering templates.
			@param {boolean} first <code>true</code> if first of multiple months.
			@return {string} The month content. */
		_generateMonth: function(elem, inst, year, month, calendar, renderer, first) {
			var daysInMonth = calendar.daysInMonth(year, month);
			var monthsToShow = inst.options.monthsToShow;
			monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
			var fixedWeeks = inst.options.fixedWeeks || (monthsToShow[0] * monthsToShow[1] > 1);
			var firstDay = inst.options.firstDay;
			firstDay = (typeof firstDay === 'undefined' || firstDay === null ? calendar.local.firstDay : firstDay);
			var leadDays = (calendar.dayOfWeek(year, month, calendar.minDay) -
				firstDay + calendar.daysInWeek()) % calendar.daysInWeek();
			var numWeeks = (fixedWeeks ? 6 : Math.ceil((leadDays + daysInMonth) / calendar.daysInWeek()));
			var selectOtherMonths = inst.options.selectOtherMonths && inst.options.showOtherMonths;
			var minDate = (inst.pickingRange ? inst.selectedDates[0] : inst.get('minDate'));
			var maxDate = inst.get('maxDate');
			var showWeeks = renderer.week.indexOf('{weekOfYear}') > -1;
			var today = calendar.today();
			var drawDate = calendar.newDate(year, month, calendar.minDay);
			drawDate.add(-leadDays - (fixedWeeks &&
				(drawDate.dayOfWeek() === firstDay || drawDate.daysInMonth() < calendar.daysInWeek())?
				calendar.daysInWeek() : 0), 'd');
			var jd = drawDate.toJD();
			// Localise numbers if requested and available
			var localiseNumbers = function(value) {
				return (inst.options.localNumbers && calendar.local.digits ? calendar.local.digits(value) : value);
			};
			// Generate weeks
			var weeks = '';
			for (var week = 0; week < numWeeks; week++) {
				var weekOfYear = (!showWeeks ? '' : '<span class="jd' + jd + '">' +
					($.isFunction(inst.options.calculateWeek) ?
					inst.options.calculateWeek(drawDate) : drawDate.weekOfYear()) + '</span>');
				var days = '';
				for (var day = 0; day < calendar.daysInWeek(); day++) {
					var selected = false;
					if (inst.options.rangeSelect && inst.selectedDates.length > 0) {
						selected = drawDate.compareTo(inst.selectedDates[0]) !== -1 &&
							drawDate.compareTo(inst.selectedDates[1]) !== +1;
					}
					else {
						for (var i = 0; i < inst.selectedDates.length; i++) {
							if (inst.selectedDates[i].compareTo(drawDate) === 0) {
								selected = true;
								break;
							}
						}
					}
					var dateInfo = (!$.isFunction(inst.options.onDate) ? {} :
						inst.options.onDate.apply(elem, [drawDate, drawDate.month() === month]));
					var selectable = (selectOtherMonths || drawDate.month() === month) &&
						this._isSelectable(elem, drawDate, dateInfo.selectable, minDate, maxDate);
					days += this._prepare(renderer.day, inst).replace(/\{day\}/g,
						(selectable ? '<a href="javascript:void(0)"' : '<span') +
						' class="jd' + jd + ' ' + (dateInfo.dateClass || '') +
						(selected && (selectOtherMonths || drawDate.month() === month) ?
						' ' + renderer.selectedClass : '') +
						(selectable ? ' ' + renderer.defaultClass : '') +
						(drawDate.weekDay() ? '' : ' ' + renderer.weekendClass) +
						(drawDate.month() === month ? '' : ' ' + renderer.otherMonthClass) +
						(drawDate.compareTo(today) === 0 && drawDate.month() === month ?
						' ' + renderer.todayClass : '') +
						(drawDate.compareTo(inst.drawDate) === 0 && drawDate.month() === month ?
						' ' + renderer.highlightedClass : '') + '"' +
						(dateInfo.title || (inst.options.dayStatus && selectable) ? ' title="' +
						(dateInfo.title || drawDate.formatDate(inst.options.dayStatus,
						{localNumbers: inst.options.localNumbers})) + '"' : '') + '>' +
						(inst.options.showOtherMonths || drawDate.month() === month ?
						dateInfo.content || localiseNumbers(drawDate.day()) : '&#160;') +
						(selectable ? '</a>' : '</span>'));
					drawDate.add(1, 'd');
					jd++;
				}
				weeks += this._prepare(renderer.week, inst).replace(/\{days\}/g, days).
					replace(/\{weekOfYear\}/g, weekOfYear);
			}
			var monthHeader = this._prepare(renderer.month, inst).match(/\{monthHeader(:[^\}]+)?\}/);
			monthHeader = (monthHeader[0].length <= 13 ? 'MM yyyy' :
				monthHeader[0].substring(13, monthHeader[0].length - 1));
			monthHeader = (first ? this._generateMonthSelection(
				inst, year, month, minDate, maxDate, monthHeader, calendar, renderer) :
				calendar.formatDate(monthHeader, calendar.newDate(year, month, calendar.minDay),
					{localNumbers: inst.options.localNumbers}));
			var weekHeader = this._prepare(renderer.weekHeader, inst).
				replace(/\{days\}/g, this._generateDayHeaders(inst, calendar, renderer));
			return this._prepare(renderer.month, inst).replace(/\{monthHeader(:[^\}]+)?\}/g, monthHeader).
				replace(/\{weekHeader\}/g, weekHeader).replace(/\{weeks\}/g, weeks);
		},

		/** Generate the HTML for the day headers.
			@memberof CalendarsPicker
			@private
			@param {object} inst The current instance settings.
			@param {BaseCalendar} calendar The current calendar.
			@param {object} renderer The rendering templates.
			@return {string} A week's worth of day headers. */
		_generateDayHeaders: function(inst, calendar, renderer) {
			var firstDay = inst.options.firstDay;
			firstDay = (typeof firstDay === 'undefined' || firstDay === null ? calendar.local.firstDay : firstDay);
			var header = '';
			for (var day = 0; day < calendar.daysInWeek(); day++) {
				var dow = (day + firstDay) % calendar.daysInWeek();
				header += this._prepare(renderer.dayHeader, inst).replace(/\{day\}/g,
					'<span class="' + this._curDoWClass + dow + '" title="' +
					calendar.local.dayNames[dow] + '">' + calendar.local.dayNamesMin[dow] + '</span>');
			}
			return header;
		},

		/** Generate the selection controls for a month.
			@memberof CalendarsPicker
			@private
			@param {object} inst The current instance settings.
			@param {number} year The year to generate.
			@param {number} month The month to generate.
			@param {CDate} minDate The minimum date allowed.
			@param {CDate} maxDate The maximum date allowed.
			@param {string} monthHeader The month/year format.
			@param {BaseCalendar} calendar The current calendar.
			@return {string} The month selection content. */
		_generateMonthSelection: function(inst, year, month, minDate, maxDate, monthHeader, calendar) {
			if (!inst.options.changeMonth) {
				return calendar.formatDate(monthHeader, calendar.newDate(year, month, 1),
					{localNumbers: inst.options.localNumbers});
			}
			// Months
			var monthNames = calendar.local[
				'monthNames' + (monthHeader.match(/mm/i) ? '' : 'Short')];
			var html = monthHeader.replace(/m+/i, '\\x2E').replace(/y+/i, '\\x2F');
			var selector = '<select class="' + this._monthYearClass +
				'" title="' + inst.options.monthStatus + '">';
			var maxMonth = calendar.monthsInYear(year) + calendar.minMonth;
			for (var m = calendar.minMonth; m < maxMonth; m++) {
				if ((!minDate || calendar.newDate(year, m,
						calendar.daysInMonth(year, m) - 1 + calendar.minDay).
						compareTo(minDate) !== -1) &&
						(!maxDate || calendar.newDate(year, m, calendar.minDay).
						compareTo(maxDate) !== +1)) {
					selector += '<option value="' + m + '/' + year + '"' +
						(month === m ? ' selected="selected"' : '') + '>' +
						monthNames[m - calendar.minMonth] + '</option>';
				}
			}
			selector += '</select>';
			html = html.replace(/\\x2E/, selector);
			// Years
			var localiseNumbers = function(value) {
				return (inst.options.localNumbers && calendar.local.digits ? calendar.local.digits(value) : value);
			};
			var yearRange = inst.options.yearRange;
			if (yearRange === 'any') {
				selector = '<select class="' + this._monthYearClass + ' ' + this._anyYearClass +
					'" title="' + inst.options.yearStatus + '">' +
					'<option value="' + year + '">' + localiseNumbers(year) + '</option></select>' +
					'<input class="' + this._monthYearClass + ' ' + this._curMonthClass +
					month + '" value="' + year + '">';
			}
			else {
				yearRange = yearRange.split(':');
				var todayYear = calendar.today().year();
				var start = (yearRange[0].match('c[+-].*') ? year + parseInt(yearRange[0].substring(1), 10) :
					((yearRange[0].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[0], 10)));
				var end = (yearRange[1].match('c[+-].*') ? year + parseInt(yearRange[1].substring(1), 10) :
					((yearRange[1].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[1], 10)));
				selector = '<select class="' + this._monthYearClass +
					'" title="' + inst.options.yearStatus + '">';
				start = calendar.newDate(start + 1, calendar.firstMonth, calendar.minDay).add(-1, 'd');
				end = calendar.newDate(end, calendar.firstMonth, calendar.minDay);
				var addYear = function(y, yDisplay) {
					if (y !== 0 || calendar.hasYearZero) {
						selector += '<option value="' +
							Math.min(month, calendar.monthsInYear(y) - 1 + calendar.minMonth) +
							'/' + y + '"' + (year === y ? ' selected="selected"' : '') + '>' +
							(yDisplay || localiseNumbers(y)) + '</option>';
					}
				};
				var earlierLater, y;
				if (start.toJD() < end.toJD()) {
					start = (minDate && minDate.compareTo(start) === +1 ? minDate : start).year();
					end = (maxDate && maxDate.compareTo(end) === -1 ? maxDate : end).year();
					earlierLater = Math.floor((end - start) / 2);
					if (!minDate || minDate.year() < start) {
						addYear(start - earlierLater, inst.options.earlierText);
					}
					for (y = start; y <= end; y++) {
						addYear(y);
					}
					if (!maxDate || maxDate.year() > end) {
						addYear(end + earlierLater, inst.options.laterText);
					}
				}
				else {
					start = (maxDate && maxDate.compareTo(start) === -1 ? maxDate : start).year();
					end = (minDate && minDate.compareTo(end) === +1 ? minDate : end).year();
					earlierLater = Math.floor((start - end) / 2);
					if (!maxDate || maxDate.year() > start) {
						addYear(start + earlierLater, inst.options.earlierText);
					}
					for (y = start; y >= end; y--) {
						addYear(y);
					}
					if (!minDate || minDate.year() < end) {
						addYear(end - earlierLater, inst.options.laterText);
					}
				}
				selector += '</select>';
			}
			html = html.replace(/\\x2F/, selector);
			return html;
		},

		/** Prepare a render template for use.
			Exclude popup/inline sections that are not applicable.
			Localise text of the form: {l10n:<em>name</em>}.
			@memberof CalendarsPicker
			@private
			@param {string} text The text to localise.
			@param {object} inst The current instance settings.
			@return {string} The localised text. */
		_prepare: function(text, inst) {
			var replaceSection = function(type, retain) {
				while (true) {
					var start = text.indexOf('{' + type + ':start}');
					if (start === -1) {
						return;
					}
					var end = text.substring(start).indexOf('{' + type + ':end}');
					if (end > -1) {
						text = text.substring(0, start) +
							(retain ? text.substr(start + type.length + 8, end - type.length - 8) : '') +
							text.substring(start + end + type.length + 6);
					}
				}
			};
			replaceSection('inline', inst.inline);
			replaceSection('popup', !inst.inline);
			var pattern = /\{l10n:([^\}]+)\}/;
			var matches = pattern.exec(text);
			while (matches) {
				text = text.replace(matches[0], inst.options[matches[1]]);
				matches = pattern.exec(text);
			}
			return text;
		}
	});

	var plugin = $.calendarsPicker; // Singleton instance

	$(function() {
		$(document).on('mousedown.' + pluginName, plugin._checkExternalClick).
			on('resize.' + pluginName, function() { plugin.hide(plugin.curInst); });
	});

})(jQuery);
/* http://keith-wood.name/calendars.html
   Ethiopian calendar for jQuery v2.1.0.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) February 2010.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict
	'use strict';

	/** Implementation of the Ethiopian calendar.
		See <a href="http://en.wikipedia.org/wiki/Ethiopian_calendar">http://en.wikipedia.org/wiki/Ethiopian_calendar</a>.
		See also Calendrical Calculations: The Millennium Edition
		(<a href="http://emr.cs.iit.edu/home/reingold/calendar-book/index.shtml">http://emr.cs.iit.edu/home/reingold/calendar-book/index.shtml</a>).
		@class EthiopianCalendar
		@param {string} [language=''] The language code (default English) for localisation. */
	function EthiopianCalendar(language) {
		this.local = this.regionalOptions[language || ''] || this.regionalOptions[''];
	}

	EthiopianCalendar.prototype = new $.calendars.baseCalendar();

	$.extend(EthiopianCalendar.prototype, {
		/** The calendar name.
			@memberof EthiopianCalendar */
		name: 'Ethiopian',
		/** Julian date of start of Ethiopian epoch: 27 August 8 CE (Gregorian).
			@memberof EthiopianCalendar */
		jdEpoch: 1724220.5,
		/** Days per month in a common year.
			@memberof EthiopianCalendar */
		daysPerMonth: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5],
		/** <code>true</code> if has a year zero, <code>false</code> if not.
			@memberof EthiopianCalendar */
		hasYearZero: false,
		/** The minimum month number.
			@memberof EthiopianCalendar */
		minMonth: 1,
		/** The first month in the year.
			@memberof EthiopianCalendar */
		firstMonth: 1,
		/** The minimum day number.
			@memberof EthiopianCalendar */
		minDay: 1,

		/** Localisations for the plugin.
			Entries are objects indexed by the language code ('' being the default US/English).
			Each object has the following attributes.
			@memberof EthiopianCalendar
			@property {string} name The calendar name.
			@property {string[]} epochs The epoch names (before/after year 0).
			@property {string[]} monthNames The long names of the months of the year.
			@property {string[]} monthNamesShort The short names of the months of the year.
			@property {string[]} dayNames The long names of the days of the week.
			@property {string[]} dayNamesShort The short names of the days of the week.
			@property {string[]} dayNamesMin The minimal names of the days of the week.
			@property {string} dateFormat The date format for this calendar.
					See the options on <a href="BaseCalendar.html#formatDate"><code>formatDate</code></a> for details.
			@property {number} firstDay The number of the first day of the week, starting at 0.
			@property {boolean} isRTL <code>true</code> if this localisation reads right-to-left. */
		regionalOptions: { // Localisations
			'': {
				name: 'Ethiopian',
				epochs: ['BEE', 'EE'],
				monthNames: ['Meskerem', 'Tikemet', 'Hidar', 'Tahesas', 'Tir', 'Yekatit',
				'Megabit', 'Miazia', 'Genbot', 'Sene', 'Hamle', 'Nehase', 'Pagume'],
				monthNamesShort: ['Mes', 'Tik', 'Hid', 'Tah', 'Tir', 'Yek',
				'Meg', 'Mia', 'Gen', 'Sen', 'Ham', 'Neh', 'Pag'],
				dayNames: ['Ehud', 'Segno', 'Maksegno', 'Irob', 'Hamus', 'Arb', 'Kidame'],
				dayNamesShort: ['Ehu', 'Seg', 'Mak', 'Iro', 'Ham', 'Arb', 'Kid'],
				dayNamesMin: ['Eh', 'Se', 'Ma', 'Ir', 'Ha', 'Ar', 'Ki'],
				digits: null,
				dateFormat: 'dd/mm/yyyy',
				firstDay: 0,
				isRTL: false
			}
		},

		/** Determine whether this date is in a leap year.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
			@throws Error if an invalid year or a different calendar used. */
		leapYear: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay, $.calendars.local.invalidYear);
			year = date.year() + (date.year() < 0 ? 1 : 0); // No year zero
			return year % 4 === 3 || year % 4 === -1;
		},

		/** Retrieve the number of months in a year.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@return {number} The number of months.
			@throws Error if an invalid year or a different calendar used. */
		monthsInYear: function(year) {
			this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return 13;
		},

		/** Determine the week of the year for a date.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if only <code>year</code> specified above).
			@param {number} [day] The day to examine (if only <code>year</code> specified above).
			@return {number} The week of the year.
			@throws Error if an invalid date or a different calendar used. */
		weekOfYear: function(year, month, day) {
			// Find Sunday of this week starting on Sunday
			var checkDate = this.newDate(year, month, day);
			checkDate.add(-checkDate.dayOfWeek(), 'd');
			return Math.floor((checkDate.dayOfYear() - 1) / 7) + 1;
		},

		/** Retrieve the number of days in a month.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to examine or the year of the month.
			@param {number} [month] The month (if only <code>year</code> specified above).
			@return {number} The number of days in this month.
			@throws Error if an invalid month/year or a different calendar used. */
		daysInMonth: function(year, month) {
			var date = this._validate(year, month, this.minDay, $.calendars.local.invalidMonth);
			return this.daysPerMonth[date.month() - 1] +
				(date.month() === 13 && this.leapYear(date.year()) ? 1 : 0);
		},

		/** Determine whether this date is a week day.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to examine or the year to examine.
			@param {number} [month] The month to examine (if only <code>year</code> specified above).
			@param {number} [day] The day to examine (if only <code>year</code> specified above).
			@return {boolean} <code>true</code> if a week day, <code>false</code> if not.
			@throws Error if an invalid date or a different calendar used. */
		weekDay: function(year, month, day) {
			return (this.dayOfWeek(year, month, day) || 7) < 6;
		},

		/** Retrieve the Julian date equivalent for this date,
			i.e. days since January 1, 4713 BCE Greenwich noon.
			@memberof EthiopianCalendar
			@param {CDate|number} year The date to convert or the year to convert.
			@param {number} [month] The month to convert (if only <code>year</code> specified above).
			@param {number} [day] The day to convert (if only <code>year</code> specified above).
			@return {number} The equivalent Julian date.
			@throws Error if an invalid date or a different calendar used. */
		toJD: function(year, month, day) {
			var date = this._validate(year, month, day, $.calendars.local.invalidDate);
			year = date.year();
			if (year < 0) { year++; } // No year zero
			return date.day() + (date.month() - 1) * 30 +
				(year - 1) * 365 + Math.floor(year / 4) + this.jdEpoch - 1;
		},

		/** Create a new date from a Julian date.
			@memberof EthiopianCalendar
			@param {number} jd the Julian date to convert.
			@return {CDate} the equivalent date. */
		fromJD: function(jd) {
			var c = Math.floor(jd) + 0.5 - this.jdEpoch;
			var year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
			if (year <= 0) { year--; } // No year zero
			c = Math.floor(jd) + 0.5 - this.newDate(year, 1, 1).toJD();
			var month = Math.floor(c / 30) + 1;
			var day = c - (month - 1) * 30 + 1;
			return this.newDate(year, month, day);
		}
	});

	// Ethiopian calendar implementation
	$.calendars.calendars.ethiopian = EthiopianCalendar;

})(jQuery);
/* http://keith-wood.name/calendars.html
   Amharic localisation for Ethiopian calendar for jQuery v2.1.0.
   Written by Tewodros Zena February 2010. */
(function($) {
	'use strict';
	$.calendars.calendars.ethiopian.prototype.regionalOptions.am = {
		name: 'የኢትዮጵያ ዘመን አቆጣጠር',
		epochs: ['BEE', 'EE'],
		monthNames: ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታህሣሥ', 'ጥር', 'የካቲት',
		'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'],
		monthNamesShort: ['መስከ', 'ጥቅም', 'ኅዳር', 'ታህሣ', 'ጥር', 'የካቲ',
		'መጋቢ', 'ሚያዝ', 'ግንቦ', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'],
		dayNames: ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሓሙስ', 'ዓርብ', 'ቅዳሜ'],
		dayNamesShort: ['እሑድ', 'ሰኞ', 'ማክሰ', 'ረቡዕ', 'ሓሙስ', 'ዓርብ', 'ቅዳሜ'],
		dayNamesMin: ['እሑ', 'ሰኞ', 'ማክ', 'ረቡ', 'ሐሙ', 'ዓር', 'ቅዳ'],
		digits: null,
		dateFormat: 'dd/mm/yyyy',
		firstDay: 0,
		isRTL: false
	};
})(jQuery);

















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
