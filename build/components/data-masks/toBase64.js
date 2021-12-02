"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBase64 = void 0;

var toBase64 = content => btoa(content.toString());

exports.toBase64 = toBase64;