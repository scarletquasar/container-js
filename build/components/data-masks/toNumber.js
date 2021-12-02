"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNumber = void 0;

var toNumber = content => {
  var base = content.toString();
  var result = base.replace(/[^\d.]/g, '');
  return Number(result);
};

exports.toNumber = toNumber;