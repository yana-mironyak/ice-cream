parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"StAZ":[function(require,module,exports) {
var e=function(){var e;e=document.querySelector(".md-overlay"),[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(t,c){var n=document.querySelector("#"+t.getAttribute("data-modal")),o=n.querySelector(".md-close");function s(){var e;e=classie.has(t,"md-setperspective"),classie.remove(n,"md-show"),e&&classie.remove(document.documentElement,"md-perspective")}t.addEventListener("click",function(c){classie.add(n,"md-show"),e.removeEventListener("click",s),e.addEventListener("click",s),classie.has(t,"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)}),o.addEventListener("click",function(e){e.stopPropagation(),s()})})}();
},{}]},{},["StAZ"], null)
//# sourceMappingURL=/ice-cream/modalEffects.080ac8c4.js.map