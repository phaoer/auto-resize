!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).autoResize=t()}(this,(function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}return function(t){var n,o,r,i,f=t.container,a=t.iframes,c=void 0===a?[]:a,u=t.standardWidth,d=void 0===u?1920:u,l=t.minimumWidth,s=void 0===l?1200:l,m=t.zoomCallback,y=(n=navigator.userAgent,o=n.indexOf("compatible")>-1&&n.indexOf("MSIE")>-1,r=n.indexOf("Trident")>-1&&n.indexOf("rv:11.0")>-1,i=n.indexOf("Firefox")>-1,o||r||i?o?(new RegExp("MSIE (\\d+\\.\\d+);").test(n),parseFloat(RegExp.$1)>9&&"scale ie"):r?"scale ie":"scale firefox":"zoom");function p(){var t=document.documentElement.offsetWidth||document.body.offsetWidth,n=s/d,o=t/d>=n?t/d:n,r=[f].concat(e(c));if("zoom"===y)for(var i=0;i<r.length;i++){(0===i?document.querySelector(r[i]):document.querySelector(r[i]).contentWindow.document.body).style.zoom=o}else if("scale ie"===y||"scale firefox"===y){if(o<1)return;for(var a=0;a<r.length;a++){var u=0===a?document.querySelector(r[a]):document.querySelector(r[a]).contentWindow.document.body;u.style.transform="scale("+o+", "+o+")",u.style.style.transformOrigin="center top"}}"function"==typeof m&&m(o)}y&&(p(),window.onresize=function(){p()})}}));