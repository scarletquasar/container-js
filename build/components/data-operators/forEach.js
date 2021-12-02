"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = void 0;

var forEach = (callback, content, type) => {
  var effects = {
    "Array": () => content.forEach(x => callback(x)),
    "Object": function (_Object) {
      function Object() {
        return _Object.apply(this, arguments);
      }

      Object.toString = function () {
        return _Object.toString();
      };

      return Object;
    }(() => Object.entries(content).forEach(x => callback(x))),
    "Map": () => content.entries().forEach(x => callback(x)),
    "Set": () => Array.from(content).forEach(x => callback(x))
  };
  effects[type]();
};

exports.forEach = forEach;