// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var l=e;function c(e){return e!=e}var _=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,r,t,n,o){var i,u,a,f,l;if(e<=0)return NaN;for(u=t<0?(1-e)*t:0,a=o<0?(1-e)*o:0,l=0;l<e&&0!==n[a];l++)u+=t,a+=o;if(l===e)return NaN;if(c(i=r[u]))return i;for(l+=1;l<e;l++)if(u+=t,!n[a+=o]){if(c(f=r[u]))return f;(f<i||f===i&&p(f))&&(i=f)}return i}return l(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,i,u){var a,f,l,_,d;if(e<=0)return NaN;for(f=n,l=u,d=0;d<e&&0!==o[l];d++)f+=t,l+=i;if(d===e)return NaN;if(c(a=r[f]))return a;for(d+=1;d<e;d++)if(f+=t,!o[l+=i]){if(c(_=r[f]))return _;(_<a||_===a&&p(_))&&(a=_)}return a}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).mskmin=r();
//# sourceMappingURL=index.js.map
