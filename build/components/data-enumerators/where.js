"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.where = void 0;

//Todo: Add suport to Map constructor
var where = (condition, content, type) => {
  switch (type) {
    case "Array":
      return content.filter(condition);

    case "Object":
      var rawResult = Object.entries(content).filter(condition);
      var objResult = {};
      rawResult.forEach(entry => objResult[entry[0]] = entry[1]);
      return rawResult;

    case "Set":
      return new Set(content.filter(condition));
  }
};

exports.where = where;