"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = void 0;

//Todo: Add suport to Map and String constructors
var last = (target, type, quantity, length) => {
  var result;
  var index = length - 1;

  switch (type) {
    case "Array":
      if (quantity === 0) return target[index];
      result = [];

      while (quantity > 0) {
        result.push(target[index]);
        quantity--;
        index--;
      }

      return result;

    case "Object":
      if (quantity === 0) return result[objectEntries[index][0]] = objectEntries[index][1];
      var objectEntries = Object.entries(target);
      result = {};
      var contentObjectArray = Object.entries(target);

      while (quantity > 0) {
        result[contentObjectArray[index][0]] = contentObjectArray[index][1];
        quantity--;
        index--;
      }

      return result;

    case "Set":
      if (quantity === 0) return new Set(Array.from(target)[index]);
      result = [];
      var contentArray = Array.from(target);

      while (quantity > 0) {
        result.push(contentArray[index]);
        quantity--;
        index--;
      }

      return result;
  }
};

exports.last = last;