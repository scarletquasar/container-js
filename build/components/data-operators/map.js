"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = void 0;

var map = (callback, content, type) => {
  var effects = {
    "Array": () => content.map(x => callback(x)),
    "Object": function (_Object) {
      function Object() {
        return _Object.apply(this, arguments);
      }

      Object.toString = function () {
        return _Object.toString();
      };

      return Object;
    }(() => Object.entries(content).map(x => callback(x))),
    "Map": () => content.entries().map(x => callback(x)),
    "Set": () => Array.from(content).map(x => callback(x))
  };
  effects[type]();
};

exports.map = map;