"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

/* 
    set() - change the content of the container, is limited to the initial type
*/
var set = (newContent, type) => newContent.constructor.name == type;

exports.set = set;