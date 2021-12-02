"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = void 0;

/*  
    add() - add a value based in the target type: [value] to iterable or string and
    [key, value] to dictionary. Supports Object, Array, Map, Set and String
*/
var add = function add(type, reference) {
  var content = reference.content();
  var dataToAdd;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  switch (type) {
    case "Object":
      dataToAdd = {};
      dataToAdd[args[0]] = args[1];
      reference.set(Object.assign(content, dataToAdd));
      break;

    case "Array":
      dataToAdd = content;
      dataToAdd.push(args[0]);
      reference.set(dataToAdd);
      break;

    case "Map":
      reference.set(args[0], args[1]);
      break;

    case "Set":
      var tempValue = Array.from(reference.content());
      tempValue.push(args[0]);
      reference.set(new Set(tempValue));
      break;

    case "String":
      reference.set(reference.content() + args[0]);
      break;
  }

  return reference.content();
};

exports.add = add;