"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strictMap = exports.strictForEach = void 0;

var _strictForEach = (callback, condition, content) => {
  var index = 0;

  while (index < content.length && index != -1) {
    !condition(callback(content[index])) ? index = -1 : index++;
  }

  if (index !== -1) return true;
  return false;
};

var _strictMap = (callback, condition, content) => {
  var index = 0;
  var result = [];

  while (index < content.length && index != -1) {
    if (condition(callback(content[index]))) {
      result.push(content[index]);
      index++;
    } else {
      index = -1;
    }
  }

  return result;
};

var strictForEach = (callback, condition, content, type) => {
  var effects = {
    "Array": () => _strictForEach(callback, condition, content),
    "Object": function (_Object) {
      function Object() {
        return _Object.apply(this, arguments);
      }

      Object.toString = function () {
        return _Object.toString();
      };

      return Object;
    }(() => Object.entries(content)._strictForEach(callback, condition, content)),
    "Map": () => content.entries()._strictForEach(callback, condition, content),
    "Set": () => Array.from(content)._strictForEach(callback, condition, content)
  };
  effects[type]();
};

exports.strictForEach = strictForEach;

var strictMap = (callback, condition, content, type) => {
  var effects = {
    "Array": () => _strictMap(callback, condition, content),
    "Object": function (_Object2) {
      function Object() {
        return _Object2.apply(this, arguments);
      }

      Object.toString = function () {
        return _Object2.toString();
      };

      return Object;
    }(() => Object.entries(content)._strictMap(callback, condition, content)),
    "Map": () => content.entries()._strictMap(callback, condition, content),
    "Set": () => Array.from(content)._strictMap(callback, condition, content)
  };
  effects[type]();
};

exports.strictMap = strictMap;