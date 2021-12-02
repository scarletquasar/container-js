"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBoolean = void 0;

var toBoolean = content => {
  var base = content.toString();

  switch (base) {
    case "false":
      return false;

    case "true":
      return true;
  }

  return base.length > 0;
};

exports.toBoolean = toBoolean;