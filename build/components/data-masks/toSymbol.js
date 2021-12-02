"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSymbol = void 0;

var toSymbol = content => Symbol(JSON.stringify(content));

exports.toSymbol = toSymbol;