"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = void 0;

//Todo: Add suport to Map and String constructors
var first = (target, type, quantity) => {
  var result;
  var index = 0;

  switch (type) {
    case "Array":
      if (quantity === 0) return target[0];
      result = [];

      while (quantity > 0) {
        result.push(target[index]);
        quantity--;
        index++;
      }

      return result;

    case "Object":
      if (quantity === 0) return result[objectEntries[0][0]] = objectEntries[0][1];
      var objectEntries = Object.entries(target);
      result = {};
      var contentObjectArray = Object.entries(target);

      while (quantity > 0) {
        result[contentObjectArray[index][0]] = contentObjectArray[index][1];
        quantity--;
        index++;
      }

      return result;

    case "Set":
      if (quantity === 0) return new Set(Array.from(target)[0]);
      result = [];
      var contentArray = Array.from(target);

      while (quantity > 0) {
        result.push(contentArray[index]);
        quantity--;
        index++;
      }

      return result;
  }
};

exports.first = first;