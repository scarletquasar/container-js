"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

var set = (newContent, type) => newContent.constructor.name == type;

exports.set = set;