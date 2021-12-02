"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetAttributes = void 0;

var resetAttributes = target => {
  var properties = {
    length: 0,
    type: null
  };
  properties.type = target.constructor.name;

  switch (properties.type) {
    case "Array":
      properties.length = target.length;
      break;

    case "Object":
      properties.length = Object.keys(target).length;

    case "Map":
      properties.length = target.size;
      break;

    case "Set":
      properties.length = target.size;
      break;

    case "String":
      properties.length = target.length;
      break;

    case "Date":
      properties.length = target.toString().length;
      break;

    case "RegExp":
      properties.length = target.toString().length;
      break;

    case "Function":
      properties.length = target.toString().length;
      break;
  }

  return properties;
};

exports.resetAttributes = resetAttributes;