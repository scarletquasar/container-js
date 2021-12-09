"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _recursiveComparator = require("./lib/recursiveComparator.js");

var methods = _interopRequireWildcard(require("./components/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _errors = /*#__PURE__*/new WeakMap();

var _content = /*#__PURE__*/new WeakMap();

var _type = /*#__PURE__*/new WeakMap();

var _length = /*#__PURE__*/new WeakMap();

var _states = /*#__PURE__*/new WeakMap();

var _events = /*#__PURE__*/new WeakMap();

var _eventBase = /*#__PURE__*/new WeakMap();

var _triggerEvent = /*#__PURE__*/new WeakSet();

var _resetAttributes = /*#__PURE__*/new WeakSet();

class Container {
  constructor(content) {
    var _this = this;

    _classPrivateMethodInitSpec(this, _resetAttributes);

    _classPrivateMethodInitSpec(this, _triggerEvent);

    _classPrivateFieldInitSpec(this, _errors, {
      writable: true,
      value: {
        notAssignable: "The value declared is not assignable to the container type.",
        invalidArguments: "The inserted arguments are invalid for this operation."
      }
    });

    _classPrivateFieldInitSpec(this, _content, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _type, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _length, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _states, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: {
        check: [],
        set: [],
        get: []
      }
    });

    _classPrivateFieldInitSpec(this, _eventBase, {
      writable: true,
      value: {
        target: this,
        currentTarget: this,
        isTrusted: false
      }
    });

    _defineProperty(this, "addEventListener", (event, callback) => _classPrivateFieldGet(this, _events)[event].push(callback));

    _defineProperty(this, "removeEventListener", (event, callback) => _classPrivateFieldGet(this, _events)[event] = _classPrivateFieldGet(this, _events)[event].filter(x => !(0, _recursiveComparator.compare)(x, callback)));

    _defineProperty(this, "content", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return _classPrivateFieldGet(this, _content);
    });

    _defineProperty(this, "length", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "check");

      return _classPrivateFieldGet(this, _length);
    });

    _defineProperty(this, "type", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "check");

      return _classPrivateFieldGet(this, _type);
    });

    _defineProperty(this, "toString", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return methods.toString(this.content());
    });

    _defineProperty(this, "toNumber", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return methods.toNumber(this.content(), this.type());
    });

    _defineProperty(this, "toBoolean", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return methods.toBoolean(this.content());
    });

    _defineProperty(this, "toSymbol", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return methods.toSymbol(this.content());
    });

    _defineProperty(this, "toBase64", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return methods.toBase64(this.content());
    });

    _defineProperty(this, "first", quantity => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return Container.from(methods.first(this.content(), this.type(), quantity));
    });

    _defineProperty(this, "last", quantity => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return Container.from(methods.last(this.content(), this.type(), quantity, this.length()));
    });

    _defineProperty(this, "skip", quantity => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return Container.from(methods.skip(this.content(), this.type(), quantity));
    });

    _defineProperty(this, "where", condition => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      return Container.from(methods.where(condition, this.content(), this.type()));
    });

    _defineProperty(this, "forEach", function () {
      _classPrivateMethodGet(_this, _triggerEvent, _triggerEvent2).call(_this, "get");

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      methods.forEach(...args, _this.content(), _this.type());
    });

    _defineProperty(this, "map", function () {
      _classPrivateMethodGet(_this, _triggerEvent, _triggerEvent2).call(_this, "get");

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      methods.map(...args, _this.content(), _this.type());
    });

    _defineProperty(this, "strictForEach", (callback, condition) => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      methods.strictForEach(callback, condition, this.content(), this.type());
    });

    _defineProperty(this, "strictMap", (callback, condition) => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      methods.strictMap(callback, condition, this.content(), this.type());
    });

    _defineProperty(this, "set", newContent => {
      if (methods.set(newContent, this.type())) {
        _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "set");

        _classPrivateFieldSet(this, _content, newContent);

        _classPrivateMethodGet(this, _resetAttributes, _resetAttributes2).call(this);
      } else {
        throw new TypeError(_classPrivateFieldGet(this, _errors).notAssignable);
      }
    });

    _defineProperty(this, "saveState", () => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "set");

      _classPrivateFieldGet(this, _states).push(this.content());
    });

    _defineProperty(this, "getState", index => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "get");

      _classPrivateFieldGet(this, _states)[index];
    });

    _defineProperty(this, "restoreState", index => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "set");

      this.set(this.getState(index));
    });

    _defineProperty(this, "add", function () {
      _classPrivateMethodGet(_this, _triggerEvent, _triggerEvent2).call(_this, "set");

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return Container.from(methods.add(_this.type(), _this, ...args));
    });

    _defineProperty(this, "remove", target => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "set");

      return Container.from(methods.remove(this, target));
    });

    _defineProperty(this, "removeIndex", targetIndex => {
      _classPrivateMethodGet(this, _triggerEvent, _triggerEvent2).call(this, "set");

      return Container.from(methods.removeIndex(this, targetIndex));
    });

    _classPrivateFieldSet(this, _content, content);

    _classPrivateMethodGet(this, _resetAttributes, _resetAttributes2).call(this);
  }

}

exports.Container = Container;

function _triggerEvent2(eventName) {
  _classPrivateFieldGet(this, _events)[eventName].forEach(event => event(eventBase));
}

function _resetAttributes2() {
  var newProperties = methods.resetAttributes(this.content());

  _classPrivateFieldSet(this, _type, newProperties.type);

  _classPrivateFieldSet(this, _length, newProperties.length);
}

_defineProperty(Container, "from", content => new Container(content));