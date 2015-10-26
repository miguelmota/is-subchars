(function(root) {
  'use strict';

  function isSubchars(chars, string) {
    if (typeof chars === 'number') {
      chars = chars.toString();
    }
    if (typeof chars === 'number') {
      string = string.toString();
    }
    if (!(typeof chars === 'string' && typeof string === 'string')) {
      return false;
    }

    var cs = [].slice.call(chars.replace(/\s+/,''));
    var s = [].slice.call(string.replace(/\s+/,''));
    var l = cs.length;

    while (l--) {
      var i = s.indexOf(cs[l]);

      if (i === -1) {
        return false;
      } else {
        s.splice(i, 1);
      }
    }

    return true;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isSubchars;
    }
    exports.isSubchars = isSubchars;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isSubchars;
    });
  } else {
    root.isSubchars = isSubchars;
  }

})(this);
