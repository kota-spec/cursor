!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(1),s=n.n(i);(new(function(){function t(){r()(this,t),this.$$cursor=document.getElementById("js-cursor"),this.$$follower=document.getElementById("js-follower"),this._timer=-1,this._time=Date.now(),this.posX=0,this.posY=0,this.mouseX=0,this.mouseY=0}return s()(t,[{key:"init",value:function(){this._ticker(),this.onListener()}},{key:"onListener",value:function(){var t=this;document.addEventListener("mousemove",function(e){t.mouseX=e.pageX,t.mouseY=e.pageY})}},{key:"_ticker",value:function(){var t=this;this._timer=window.requestAnimationFrame(function(){return t._ticker()}),this.posX+=(this.mouseX-this.posX)/10,this.posY+=(this.mouseY-this.posY)/10,this.$$cursor.style.left="".concat(this.mouseX-4,"px"),this.$$cursor.style.top="".concat(this.mouseY-4,"px"),this.$$follower.style.left="".concat(this.posX-20,"px"),this.$$follower.style.top="".concat(this.posY-20,"px")}}]),t}())).init()}]);