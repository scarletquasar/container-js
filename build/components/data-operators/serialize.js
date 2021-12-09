"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = void 0;

var serialize = reference => {
  var rawResult = {
    content: null,
    type: null,
    length: null
  };
  return JSON.stringify(rawResult);
};

exports.serialize = serialize;