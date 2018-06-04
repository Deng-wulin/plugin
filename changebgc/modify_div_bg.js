;(function (global) {
  "use strict";
  var M = function (el) {
    this.el = typeof el === "string" ? document.querySelector(el) : el;
  };

  M.prototype = {
    setBg: function (bg) {
      this.el.style.background = bg;
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = M;
  if (typeof define === 'function') define(function () {
    return M;
  });
  global.ModifyDivBg = M;

})(this);