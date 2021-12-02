"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeIndex = void 0;

/*  
    removeIndex() - removes target index item if content is iterable. Removes target text
    index if is a string. Supports Array, Set and String. 
*/
var removeIndex = (reference, targetIndex) => {
  if (!typeof targetIndex == "number") return reference.content();
  var index = 0;
  var result;

  switch (reference.type()) {
    case "Array":
      result = [];
      reference.content().forEach(element => {
        if (index != targetIndex) {
          result.push(element);
        }

        index++;
      });
      reference.set(result);
      break;

    case "Object":
      result = {};
      Object.entries(reference.content()).forEach(entry => {
        if (index != targetIndex) {
          result[entry[0]] = entry[1];
        }
      });
      reference.set(result);
      break;

    case "Set":
      result = [];
      Array.from(reference.content()).forEach(element => {
        if (index != targetIndex) {
          result.push(element);
        }

        index++;
      });
      reference.set(new Set(result));
      break;

    case "String":
      result = "";
      reference.content().split("").forEach(char => {
        if (index != targetIndex) {
          result += char;
        }

        index++;
      });
      reference.set(result);
      break;
  }

  return reference.content();
};

exports.removeIndex = removeIndex;