self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_reactprojects_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\User\\Documents\\reactprojects\\lireddit\\web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_User_Documents_reactprojects_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var client = (0,urql__WEBPACK_IMPORTED_MODULE_3__.createClient)({
  url: "http://localhost:3000/graphql"
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
    resetCSS: true,
    theme: _theme__WEBPACK_IMPORTED_MODULE_1__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('nodejs.util.inspect.custom')
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/urql/dist/urql.es.js":
/*!*******************************************!*\
  !*** ./node_modules/urql/dist/urql.es.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Consumer": function() { return /* binding */ y; },
/* harmony export */   "Context": function() { return /* binding */ x; },
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "Provider": function() { return /* binding */ h; },
/* harmony export */   "Query": function() { return /* binding */ Query; },
/* harmony export */   "Subscription": function() { return /* binding */ Subscription; },
/* harmony export */   "useClient": function() { return /* binding */ useClient; },
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; },
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; },
/* harmony export */   "useSubscription": function() { return /* binding */ useSubscription; }
/* harmony export */ });
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/core */ "./node_modules/@urql/core/dist/urql-core.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _urql_core__WEBPACK_IMPORTED_MODULE_0__) if(["default","Consumer","Context","Mutation","Provider","Query","Subscription","useClient","useMutation","useQuery","useSubscription"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _urql_core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");








var d = (0,_urql_core__WEBPACK_IMPORTED_MODULE_0__.createClient)({
  url: "/graphql"
});

var x = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(d);

var h = x.Provider;

var y = x.Consumer;

x.displayName = "UrqlContext";

var g = !1;

function useClient() {
  var e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(x);
  if ( true && e === d && !g) {
    g = !0;
    console.warn("Default Client: No client has been specified using urql's Provider.This means that urql will be falling back to defaults including making requests to `/graphql`.\nIf that's not what you want, please create a client and add a Provider.");
  }
  return e;
}

function _extends() {
  return (_extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}

var b = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};

function computeNextState(e, t) {
  var n = _extends({}, e, t, {
    fetching: !!t.fetching,
    stale: !!t.stale
  });
  return function isShallowDifferent(e, t) {
    if ("object" != typeof e || "object" != typeof t) {
      return e !== t;
    }
    for (var n in e) {
      if (!(n in t)) {
        return !0;
      }
    }
    for (var r in t) {
      if (e[r] !== t[r]) {
        return !0;
      }
    }
    return !1;
  }(e, n) ? n : e;
}

function hasDepsChanged(e, t) {
  for (var n = 0, r = t.length; n < r; n++) {
    if (e[n] !== t[n]) {
      return !0;
    }
  }
  return !1;
}

function useMutation(e) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);
  var r = useClient();
  var c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(b);
  var f = c[0];
  var l = c[1];
  var v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(u, i) {
    l(_extends({}, b, {
      fetching: !0
    }));
    return (0,wonka__WEBPACK_IMPORTED_MODULE_2__.toPromise)(r.executeMutation((0,_urql_core__WEBPACK_IMPORTED_MODULE_0__.createRequest)(e, u), i || {})).then((function(e) {
      if (n.current) {
        l({
          fetching: !1,
          stale: !!e.stale,
          data: e.data,
          error: e.error,
          extensions: e.extensions,
          operation: e.operation
        });
      }
      return e;
    }));
  }), [ r, e, l ]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function() {
    return function() {
      n.current = !1;
    };
  }), []);
  return [ f, v ];
}

function useRequest(e, n) {
  var r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(void 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function() {
    var u = (0,_urql_core__WEBPACK_IMPORTED_MODULE_0__.createRequest)(e, n);
    if (void 0 !== r.current && r.current.key === u.key) {
      return r.current;
    } else {
      r.current = u;
      return u;
    }
  }), [ e, n ]);
}

var q = !1;

function useQuery(e) {
  var t = useClient();
  var n = function getCacheForClient(e) {
    if (!e._react) {
      var t = new Set;
      var n = new Map;
      if (e.operations$) {
        (0,wonka__WEBPACK_IMPORTED_MODULE_2__.subscribe)((function(e) {
          if ("teardown" === e.kind && t.has(e.key)) {
            t.delete(e.key);
            n.delete(e.key);
          }
        }))(e.operations$);
      }
      e._react = {
        get: function get(e) {
          return n.get(e);
        },
        set: function set(e, r) {
          t.delete(e);
          n.set(e, r);
        },
        dispose: function dispose(e) {
          t.add(e);
        }
      };
    }
    return e._react;
  }(t);
  var r = function isSuspense(e, t) {
    return e.suspense && (!t || !1 !== t.suspense);
  }(t, e.context);
  var u = useRequest(e.query, e.variables);
  var s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function() {
    if (e.pause) {
      return null;
    }
    var i = t.executeQuery(u, _extends({}, {
      requestPolicy: e.requestPolicy
    }, e.context));
    return r ? (0,wonka__WEBPACK_IMPORTED_MODULE_2__.onPush)((function(e) {
      n.set(u.key, e);
    }))(i) : i;
  }), [ n, t, u, r, e.pause, e.requestPolicy, e.context ]);
  var d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e, t) {
    if (!e) {
      return {
        fetching: !1
      };
    }
    var r = n.get(u.key);
    if (!r) {
      var i;
      var a = (0,wonka__WEBPACK_IMPORTED_MODULE_2__.subscribe)((function(e) {
        r = e;
        if (i) {
          i(r);
        }
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_2__.takeWhile)((function() {
        return t && !i || !r;
      }))(e));
      if (null == r && t) {
        var o = new Promise((function(e) {
          i = e;
        }));
        n.set(u.key, o);
        throw o;
      } else {
        a.unsubscribe();
      }
    } else if (t && null != r && "then" in r) {
      throw r;
    }
    return r || {
      fetching: !0
    };
  }), [ n, u ]);
  var x = [ t, u, e.requestPolicy, e.context, e.pause ];
  var h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function() {
    q = !0;
    try {
      return [ s, computeNextState(b, d(s, r)), x ];
    } finally {
      q = !1;
    }
  }));
  var y = h[0];
  var g = h[1];
  var m = y[1];
  if (s !== y[0] && hasDepsChanged(y[2], x)) {
    g([ s, m = computeNextState(y[1], d(s, r)), x ]);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function() {
    var e = y[0];
    var t = y[2][1];
    var r = !1;
    function updateResult(e) {
      r = !0;
      if (!q) {
        g((function(t) {
          var n = computeNextState(t[1], e);
          return t[1] !== n ? [ t[0], n, t[2] ] : t;
        }));
      }
    }
    if (e) {
      var u = (0,wonka__WEBPACK_IMPORTED_MODULE_2__.subscribe)(updateResult)((0,wonka__WEBPACK_IMPORTED_MODULE_2__.onEnd)((function() {
        updateResult({
          fetching: !1
        });
      }))(e));
      if (!r) {
        updateResult({
          fetching: !0
        });
      }
      return function() {
        n.dispose(t.key);
        u.unsubscribe();
      };
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ n, y[0], y[2][1] ]);
  return [ m, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(i) {
    var a = _extends({}, {
      requestPolicy: e.requestPolicy
    }, e.context, i);
    g((function(e) {
      return [ r ? (0,wonka__WEBPACK_IMPORTED_MODULE_2__.onPush)((function(e) {
        n.set(u.key, e);
      }))(t.executeQuery(u, a)) : t.executeQuery(u, a), e[1], x ];
    }));
  }), [ t, n, u, r, d, e.requestPolicy, e.context ]) ];
}

function useSubscription(e, t) {
  var n = useClient();
  var r = useRequest(e.query, e.variables);
  var s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t);
  s.current = t;
  var l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function() {
    return !e.pause ? n.executeSubscription(r, e.context) : null;
  }), [ n, r, e.pause, e.context ]);
  var v = [ n, r, e.context, e.pause ];
  var d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function() {
    return [ l, _extends({}, b, {
      fetching: !!l
    }), v ];
  }));
  var x = d[0];
  var h = d[1];
  var y = x[1];
  if (l !== x[0] && hasDepsChanged(x[2], v)) {
    h([ l, y = computeNextState(x[1], {
      fetching: !!l
    }), v ]);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function() {
    function updateResult(e) {
      h((function(t) {
        var n = computeNextState(t[1], e);
        if (t[1] === n) {
          return t;
        }
        if (s.current && t[1].data !== n.data) {
          n.data = s.current(t[1].data, n.data);
        }
        return [ t[0], n, t[2] ];
      }));
    }
    if (x[0]) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_2__.subscribe)(updateResult)((0,wonka__WEBPACK_IMPORTED_MODULE_2__.onEnd)((function() {
        updateResult({
          fetching: !1
        });
      }))(x[0])).unsubscribe;
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ x[0] ]);
  return [ y, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(t) {
    var u = n.executeSubscription(r, _extends({}, e.context, t));
    h((function(e) {
      return [ u, e[1], e[2] ];
    }));
  }), [ n, e.context, r ]) ];
}

function Mutation(e) {
  var t = useMutation(e.query);
  return e.children(_extends({}, t[0], {
    executeMutation: t[1]
  }));
}

function Query(e) {
  var t = useQuery(e);
  return e.children(_extends({}, t[0], {
    executeQuery: t[1]
  }));
}

function Subscription(e) {
  var t = useSubscription(e, e.handler);
  return e.children(_extends({}, t[0], {
    executeSubscription: t[1]
  }));
}


//# sourceMappingURL=urql.es.js.map


/***/ }),

/***/ "./node_modules/@urql/core/dist/18ee0d5c.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@urql/core/dist/18ee0d5c.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ a; },
/* harmony export */   "_": function() { return /* binding */ _extends; },
/* harmony export */   "a": function() { return /* binding */ makeErrorResult; },
/* harmony export */   "b": function() { return /* binding */ makeFetchBody; },
/* harmony export */   "c": function() { return /* binding */ makeFetchURL; },
/* harmony export */   "d": function() { return /* binding */ makeFetchOptions; },
/* harmony export */   "e": function() { return /* binding */ makeFetchSource; },
/* harmony export */   "f": function() { return /* binding */ createRequest; },
/* harmony export */   "g": function() { return /* binding */ getOperationType; },
/* harmony export */   "h": function() { return /* binding */ stringifyVariables; },
/* harmony export */   "i": function() { return /* binding */ mergeResultPatch; },
/* harmony export */   "j": function() { return /* binding */ getOperationName; },
/* harmony export */   "k": function() { return /* binding */ keyDocument; },
/* harmony export */   "m": function() { return /* binding */ makeResult; },
/* harmony export */   "s": function() { return /* binding */ stringifyDocument; }
/* harmony export */ });
/* harmony import */ var graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];










function rehydrateGraphQlError(r) {
  if ("string" == typeof r) {
    return new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(r);
  } else if ("object" == typeof r && r.message) {
    return new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(r.message, r.nodes, r.source, r.positions, r.path, r, r.extensions || {});
  } else {
    return r;
  }
}

var a = function(e) {
  function CombinedError(r) {
    var t = r.networkError;
    var n = r.response;
    var o = (r.graphQLErrors || []).map(rehydrateGraphQlError);
    var a = function generateErrorMessage(e, r) {
      var t = "";
      if (void 0 !== e) {
        return t = "[Network] " + e.message;
      }
      if (void 0 !== r) {
        r.forEach((function(e) {
          t += "[GraphQL] " + e.message + "\n";
        }));
      }
      return t.trim();
    }(t, o);
    e.call(this, a);
    this.name = "CombinedError";
    this.message = a;
    this.graphQLErrors = o;
    this.networkError = t;
    this.response = n;
  }
  if (e) {
    CombinedError.__proto__ = e;
  }
  (CombinedError.prototype = Object.create(e && e.prototype)).constructor = CombinedError;
  CombinedError.prototype.toString = function toString() {
    return this.message;
  };
  return CombinedError;
}(Error);

function phash(e, r) {
  e |= 0;
  for (var t = 0, n = 0 | r.length; t < n; t++) {
    e = (e << 5) + e + r.charCodeAt(t);
  }
  return e;
}

function hash(e) {
  return phash(5381, e) >>> 0;
}

var i = new Set;

var s = new WeakMap;

function stringify(e) {
  if (null === e || i.has(e)) {
    return "null";
  } else if ("object" != typeof e) {
    return JSON.stringify(e) || "";
  } else if (e.toJSON) {
    return stringify(e.toJSON());
  } else if (Array.isArray(e)) {
    var r = "[";
    for (var t = 0, n = e.length; t < n; t++) {
      if (t > 0) {
        r += ",";
      }
      var o = stringify(e[t]);
      r += o.length > 0 ? o : "null";
    }
    return r += "]";
  }
  var a = Object.keys(e).sort();
  if (!a.length && e.constructor && e.constructor !== Object) {
    var f = s.get(e) || Math.random().toString(36).slice(2);
    s.set(e, f);
    return '{"__key":"' + f + '"}';
  }
  i.add(e);
  var u = "{";
  for (var c = 0, l = a.length; c < l; c++) {
    var h = a[c];
    var p = stringify(e[h]);
    if (p) {
      if (u.length > 1) {
        u += ",";
      }
      u += stringify(h) + ":" + p;
    }
  }
  i.delete(e);
  return u += "}";
}

function stringifyVariables(e) {
  i.clear();
  return stringify(e);
}

function stringifyDocument(e) {
  var r = ("string" != typeof e ? e.loc && e.loc.source.body || (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__.print)(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
  if ("string" != typeof e) {
    var t = "definitions" in e && getOperationName(e);
    if (t) {
      r = "# " + t + "\n" + r;
    }
    if (!e.loc) {
      e.loc = {
        start: 0,
        end: r.length,
        source: {
          body: r,
          name: "gql",
          locationOffset: {
            line: 1,
            column: 1
          }
        }
      };
    }
  }
  return r;
}

var f = new Map;

function keyDocument(e) {
  var r;
  var n;
  if ("string" == typeof e) {
    r = hash(stringifyDocument(e));
    n = f.get(r) || (0,graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__.parse)(e, {
      noLocation: !0
    });
  } else {
    r = e.__key || hash(stringifyDocument(e));
    n = f.get(r) || e;
  }
  if (!n.loc) {
    stringifyDocument(n);
  }
  n.__key = r;
  f.set(r, n);
  return n;
}

function createRequest(e, r) {
  if (!r) {
    r = {};
  }
  var t = keyDocument(e);
  return {
    key: phash(t.__key, stringifyVariables(r)) >>> 0,
    query: t,
    variables: r
  };
}

function getOperationName(e) {
  for (var t = 0, n = e.definitions.length; t < n; t++) {
    var o = e.definitions[t];
    if (o.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION && o.name) {
      return o.name.value;
    }
  }
}

function getOperationType(e) {
  for (var t = 0, n = e.definitions.length; t < n; t++) {
    var o = e.definitions[t];
    if (o.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION) {
      return o.operation;
    }
  }
}

function _extends() {
  return (_extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}

function makeResult(e, r, t) {
  if (!("data" in r) && !("errors" in r) || "path" in r) {
    throw new Error("No Content");
  }
  return {
    operation: e,
    data: r.data,
    error: Array.isArray(r.errors) ? new a({
      graphQLErrors: r.errors,
      response: t
    }) : void 0,
    extensions: "object" == typeof r.extensions && r.extensions || void 0,
    hasNext: !!r.hasNext
  };
}

function mergeResultPatch(e, r, t) {
  var n = _extends({}, e);
  n.hasNext = !!r.hasNext;
  if (!("path" in r)) {
    if ("data" in r) {
      n.data = r.data;
    }
    return n;
  }
  if (Array.isArray(r.errors)) {
    n.error = new a({
      graphQLErrors: n.error ? n.error.graphQLErrors.concat(r.errors) : r.errors,
      response: t
    });
  }
  var o = n.data = _extends({}, n.data);
  var i = 0;
  var s;
  while (i < r.path.length) {
    o = o[s = r.path[i++]] = Array.isArray(o[s]) ? [].concat(o[s]) : _extends({}, o[s]);
  }
  _extends(o, r.data);
  return n;
}

function makeErrorResult(e, r, t) {
  return {
    operation: e,
    data: void 0,
    error: new a({
      networkError: r,
      response: t
    }),
    extensions: void 0
  };
}

function shouldUseGet(e) {
  return "query" === e.kind && !!e.context.preferGetMethod;
}

function makeFetchBody(e) {
  return {
    query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__.print)(e.query),
    operationName: getOperationName(e.query),
    variables: e.variables || void 0,
    extensions: void 0
  };
}

function makeFetchURL(e, r) {
  var t = shouldUseGet(e);
  var n = e.context.url;
  if (!t || !r) {
    return n;
  }
  var o = [];
  if (r.operationName) {
    o.push("operationName=" + encodeURIComponent(r.operationName));
  }
  if (r.query) {
    o.push("query=" + encodeURIComponent(r.query.replace(/#[^\n\r]+/g, " ").trim()));
  }
  if (r.variables) {
    o.push("variables=" + encodeURIComponent(stringifyVariables(r.variables)));
  }
  if (r.extensions) {
    o.push("extensions=" + encodeURIComponent(stringifyVariables(r.extensions)));
  }
  return n + "?" + o.join("&");
}

function makeFetchOptions(e, r) {
  var t = shouldUseGet(e);
  var n = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
  return _extends({}, n, {
    body: !t && r ? JSON.stringify(r) : void 0,
    method: t ? "GET" : "POST",
    headers: t ? n.headers : _extends({}, {
      "content-type": "application/json"
    }, n.headers)
  });
}

var u = "undefined" != typeof Symbol ? Symbol.asyncIterator : null;

var c = "undefined" != typeof TextDecoder ? new TextDecoder : null;

var l = /content-type:[^\r\n]*application\/json/i;

var h = /boundary="?([^=";]+)"?/i;

function executeIncrementalFetch(e, r, t) {
  var n = t.headers && t.headers.get("Content-Type") || "";
  if (!/multipart\/mixed/i.test(n)) {
    return t.json().then((function(n) {
      e(makeResult(r, n, t));
    }));
  }
  var o = "---";
  var a = n.match(h);
  if (a) {
    o = "--" + a[1];
  }
  var i;
  var cancel = function() {};
  if (u && t[u]) {
    var s = t[u]();
    i = s.next.bind(s);
  } else if ("body" in t && t.body) {
    var f = t.body.getReader();
    cancel = f.cancel.bind(f);
    i = f.read.bind(f);
  } else {
    throw new TypeError("Streaming requests unsupported");
  }
  var p = "";
  var d = !0;
  var v = null;
  var m = null;
  return i().then((function next(n) {
    if (!n.done) {
      var a = function toString(e) {
        return "undefined" != typeof Buffer && Buffer.isBuffer(e) ? e.toString() : c.decode(e);
      }(n.value);
      var s = a.indexOf(o);
      if (s > -1) {
        s += p.length;
      } else {
        s = p.indexOf(o);
      }
      p += a;
      while (s > -1) {
        var f = p.slice(0, s);
        var u = p.slice(s + o.length);
        if (d) {
          d = !1;
        } else {
          var h = f.indexOf("\r\n\r\n") + 4;
          var g = f.slice(0, h);
          var y = f.slice(h, f.lastIndexOf("\r\n"));
          var x = void 0;
          if (l.test(g)) {
            try {
              x = JSON.parse(y);
              v = m = m ? mergeResultPatch(m, x, t) : makeResult(r, x, t);
            } catch (e) {}
          }
          if ("--" === u.slice(0, 2) || x && !x.hasNext) {
            if (!m) {
              return e(makeResult(r, {}, t));
            }
            break;
          }
        }
        s = (p = u).indexOf(o);
      }
    }
    if (v) {
      e(v);
      v = null;
    }
    if (!n.done && (!m || m.hasNext)) {
      return i().then(next);
    }
  })).finally(cancel);
}

function makeFetchSource(e, r, t) {
  var n = "manual" === t.redirect ? 400 : 300;
  var a = e.context.fetch;
  return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.make)((function(o) {
    var i = o.next;
    var s = o.complete;
    var f = "undefined" != typeof AbortController ? new AbortController : null;
    if (f) {
      t.signal = f.signal;
    }
    var u = !1;
    var c = !1;
    var l;
    Promise.resolve().then((function() {
      if (u) {
        return;
      }
      return (a || fetch)(r, t);
    })).then((function(r) {
      if (!r) {
        return;
      }
      c = (l = r).status < 200 || l.status >= n;
      return executeIncrementalFetch(i, e, l);
    })).then(s).catch((function(r) {
      if ("AbortError" !== r.name) {
        var t = makeErrorResult(e, c ? new Error(l.statusText) : r, l);
        i(t);
        s();
      }
    }));
    return function() {
      u = !0;
      if (f) {
        f.abort();
      }
    };
  }));
}


//# sourceMappingURL=18ee0d5c.mjs.map


/***/ }),

/***/ "./node_modules/@urql/core/dist/urql-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@urql/core/dist/urql-core.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombinedError": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.C; },
/* harmony export */   "createRequest": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.f; },
/* harmony export */   "getOperationName": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.j; },
/* harmony export */   "makeErrorResult": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.a; },
/* harmony export */   "makeResult": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.m; },
/* harmony export */   "mergeResultPatch": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.i; },
/* harmony export */   "stringifyVariables": function() { return /* reexport safe */ _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   "Client": function() { return /* binding */ W; },
/* harmony export */   "cacheExchange": function() { return /* binding */ cacheExchange; },
/* harmony export */   "composeExchanges": function() { return /* binding */ composeExchanges; },
/* harmony export */   "createClient": function() { return /* binding */ z; },
/* harmony export */   "debugExchange": function() { return /* binding */ debugExchange; },
/* harmony export */   "dedupExchange": function() { return /* binding */ dedupExchange; },
/* harmony export */   "defaultExchanges": function() { return /* binding */ J; },
/* harmony export */   "errorExchange": function() { return /* binding */ errorExchange; },
/* harmony export */   "fallbackExchangeIO": function() { return /* binding */ L; },
/* harmony export */   "fetchExchange": function() { return /* binding */ fetchExchange; },
/* harmony export */   "formatDocument": function() { return /* binding */ formatDocument; },
/* harmony export */   "gql": function() { return /* binding */ gql; },
/* harmony export */   "makeOperation": function() { return /* binding */ makeOperation; },
/* harmony export */   "maskTypename": function() { return /* binding */ maskTypename; },
/* harmony export */   "ssrExchange": function() { return /* binding */ ssrExchange; },
/* harmony export */   "subscriptionExchange": function() { return /* binding */ subscriptionExchange; }
/* harmony export */ });
/* harmony import */ var graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./18ee0d5c.mjs */ "./node_modules/@urql/core/dist/18ee0d5c.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");












function collectTypes(e, r) {
  if (Array.isArray(e)) {
    for (var n = 0; n < e.length; n++) {
      collectTypes(e[n], r);
    }
  } else if ("object" == typeof e && null !== e) {
    for (var t in e) {
      if ("__typename" === t && "string" == typeof e[t]) {
        r[e[t]] = 0;
      } else {
        collectTypes(e[t], r);
      }
    }
  }
  return r;
}

function collectTypesFromResponse(e) {
  return Object.keys(collectTypes(e, {}));
}

var formatNode = function(e) {
  if (e.selectionSet && !e.selectionSet.selections.some((function(e) {
    return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD && "__typename" === e.name.value && !e.alias;
  }))) {
    return (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e, {
      selectionSet: (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.selectionSet, {
        selections: e.selectionSet.selections.concat([ {
          kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD,
          name: {
            kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NAME,
            value: "__typename"
          }
        } ])
      })
    });
  }
};

var Q = new Map;

function formatDocument(r) {
  var n = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(r);
  var a = Q.get(n.__key);
  if (!a) {
    a = (0,graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__.visit)(n, {
      Field: formatNode,
      InlineFragment: formatNode
    });
    Object.defineProperty(a, "__key", {
      value: n.__key,
      enumerable: !1
    });
    Q.set(n.__key, a);
  }
  return a;
}

function maskTypename(e) {
  if (!e || "object" != typeof e) {
    return e;
  }
  return Object.keys(e).reduce((function(r, n) {
    var t = e[n];
    if ("__typename" === n) {
      Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: t
      });
    } else if (Array.isArray(t)) {
      r[n] = t.map(maskTypename);
    } else if (t && "object" == typeof t && "__typename" in t) {
      r[n] = maskTypename(t);
    } else {
      r[n] = t;
    }
    return r;
  }), {});
}

function withPromise(e) {
  e.toPromise = function() {
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.toPromise)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return !e.stale && !e.hasNext;
    }))(e)));
  };
  return e;
}

function makeOperation(e, r, n) {
  if (!n) {
    n = r.context;
  }
  return {
    key: r.key,
    query: r.query,
    variables: r.variables,
    kind: e,
    context: n
  };
}

function addMetadata(e, r) {
  return makeOperation(e.kind, e, (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context, {
    meta: (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context.meta, r)
  }));
}

function noop() {}

function applyDefinitions(e, n, t) {
  for (var a = 0; a < t.length; a++) {
    if (t[a].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION) {
      var o = t[a].name.value;
      var i = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(t[a]);
      if (!e.has(o)) {
        e.set(o, i);
        n.push(t[a]);
      } else if ( true && e.get(o) !== i) {
        console.warn("[WARNING: Duplicate Fragment] A fragment with name `" + o + "` already exists in this document.\nWhile fragment names may not be unique across your source, each name must be unique per document.");
      }
    } else {
      n.push(t[a]);
    }
  }
}

function gql() {
  var e = arguments;
  var n = new Map;
  var a = [];
  var o = [];
  var i = Array.isArray(arguments[0]) ? arguments[0][0] : arguments[0] || "";
  for (var u = 1; u < arguments.length; u++) {
    var c = e[u];
    if (c && c.definitions) {
      o.push.apply(o, c.definitions);
    } else {
      i += c;
    }
    i += e[0][u];
  }
  applyDefinitions(n, a, (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(i).definitions);
  applyDefinitions(n, a, o);
  return (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.k)({
    kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DOCUMENT,
    definitions: a
  });
}

function shouldSkip(e) {
  var r = e.kind;
  return "mutation" !== r && "query" !== r;
}

function cacheExchange(e) {
  var r = e.forward;
  var n = e.client;
  var t = e.dispatchDebug;
  var a = new Map;
  var i = Object.create(null);
  function mapTypeNames(e) {
    var r = makeOperation(e.kind, e);
    r.query = formatDocument(e.query);
    return r;
  }
  function isOperationCached(e) {
    var r = e.context.requestPolicy;
    return "query" === e.kind && "network-only" !== r && ("cache-only" === r || a.has(e.key));
  }
  return function(e) {
    var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
    var c = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
      var r = a.get(e.key);
       true && t((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
        operation: e
      }, r ? {
        type: "cacheHit",
        message: "The result was successfully retried from the cache"
      } : {
        type: "cacheMiss",
        message: "The result could not be retrieved from the cache"
      }));
      var i = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, r, {
        operation: addMetadata(e, {
          cacheOutcome: r ? "hit" : "miss"
        })
      });
      if ("cache-and-network" === e.context.requestPolicy) {
        i.stale = !0;
        reexecuteOperation(n, e);
      }
      return i;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return !shouldSkip(e) && isOperationCached(e);
    }))(u));
    var s = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
      var r = e.operation;
      if (!r) {
        return;
      }
      var o = collectTypesFromResponse(e.data).concat(r.context.additionalTypenames || []);
      if ("mutation" === e.operation.kind) {
        var u = new Set;
         true && t({
          type: "cacheInvalidation",
          message: "The following typenames have been invalidated: " + o,
          operation: r,
          data: {
            typenames: o,
            response: e
          },
          source: "cacheExchange"
        });
        for (var c = 0; c < o.length; c++) {
          var s = o[c];
          var f = i[s] || (i[s] = new Set);
          f.forEach((function(e) {
            u.add(e);
          }));
          f.clear();
        }
        u.forEach((function(e) {
          if (a.has(e)) {
            r = a.get(e).operation;
            a.delete(e);
            reexecuteOperation(n, r);
          }
        }));
      } else if ("query" === r.kind && e.data) {
        a.set(r.key, e);
        for (var p = 0; p < o.length; p++) {
          var l = o[p];
          (i[l] || (i[l] = new Set)).add(r.key);
        }
      }
    }))(r((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" !== e.kind || "cache-only" !== e.context.requestPolicy;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
      return addMetadata(e, {
        cacheOutcome: "miss"
      });
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)(mapTypeNames)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return !shouldSkip(e) && !isOperationCached(e);
    }))(u)), (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return shouldSkip(e);
    }))(u) ])))));
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ c, s ]);
  };
}

function reexecuteOperation(e, r) {
  return e.reexecuteOperation(makeOperation(r.kind, r, (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, r.context, {
    requestPolicy: "network-only"
  })));
}

var G = new Set;

function ssrExchange(e) {
  var r = !(!e || !e.staleWhileRevalidate);
  var n = !(!e || !e.includeExtensions);
  var t = {};
  var a = [];
  function invalidate(e) {
    a.push(e.operation.key);
    if (1 === a.length) {
      Promise.resolve().then((function() {
        var e;
        while (e = a.shift()) {
          t[e] = null;
        }
      }));
    }
  }
  var ssr = function(a) {
    var o = a.client;
    var i = a.forward;
    return function(a) {
      var u = e && "boolean" == typeof e.isClient ? !!e.isClient : !o.suspense;
      var s = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(a);
      var f = i((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return !t[e.key] || !!t[e.key].hasNext;
      }))(s));
      var p = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
        var a = function deserializeResult(e, r, n) {
          return {
            operation: e,
            data: r.data ? JSON.parse(r.data) : void 0,
            extensions: n && r.extensions ? JSON.parse(r.extensions) : void 0,
            error: r.error ? new _18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.C({
              networkError: r.error.networkError ? new Error(r.error.networkError) : void 0,
              graphQLErrors: r.error.graphQLErrors
            }) : void 0,
            hasNext: r.hasNext
          };
        }(e, t[e.key], n);
        if (r && !G.has(e.key)) {
          a.stale = !0;
          G.add(e.key);
          reexecuteOperation(o, e);
        }
        return a;
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return !!t[e.key];
      }))(s));
      if (!u) {
        f = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
          var r = e.operation;
          if ("mutation" !== r.kind) {
            var a = function serializeResult(e, r) {
              var n = e.hasNext;
              var t = e.data;
              var a = e.extensions;
              var o = e.error;
              var i = {};
              if (void 0 !== t) {
                i.data = JSON.stringify(t);
              }
              if (r && void 0 !== a) {
                i.extensions = JSON.stringify(a);
              }
              if (n) {
                i.hasNext = !0;
              }
              if (o) {
                i.error = {
                  graphQLErrors: o.graphQLErrors.map((function(e) {
                    if (!e.path && !e.extensions) {
                      return e.message;
                    }
                    return {
                      message: e.message,
                      path: e.path,
                      extensions: e.extensions
                    };
                  }))
                };
                if (o.networkError) {
                  i.error.networkError = "" + o.networkError;
                }
              }
              return i;
            }(e, n);
            t[r.key] = a;
          }
        }))(f);
      } else {
        p = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)(invalidate)(p);
      }
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ f, p ]);
    };
  };
  ssr.restoreData = function(e) {
    for (var r in e) {
      if (null !== t[r]) {
        t[r] = e[r];
      }
    }
  };
  ssr.extractData = function() {
    var e = {};
    for (var r in t) {
      if (null != t[r]) {
        e[r] = t[r];
      }
    }
    return e;
  };
  if (e && e.initialState) {
    ssr.restoreData(e.initialState);
  }
  return ssr;
}

function subscriptionExchange(e) {
  var r = e.forwardSubscription;
  var t = e.enableAllOperations;
  return function(e) {
    var a = e.client;
    var i = e.forward;
    function isSubscriptionOperation(e) {
      var r = e.kind;
      return "subscription" === r || !!t && ("query" === r || "mutation" === r);
    }
    return function(e) {
      var t = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
      var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((function(e) {
        var i = e.key;
        var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
          return "teardown" === e.kind && e.key === i;
        }))(t);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(u)(function createSubscriptionSource(e) {
          var t = r({
            key: e.key.toString(36),
            query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__.print)(e.query),
            variables: e.variables,
            context: (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context)
          });
          return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.make)((function(r) {
            var n = r.next;
            var o = r.complete;
            var i = !1;
            var u;
            Promise.resolve().then((function() {
              if (i) {
                return;
              }
              u = t.subscribe({
                next: function(r) {
                  return n((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(e, r));
                },
                error: function(r) {
                  return n((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e, r));
                },
                complete: function() {
                  if (!i) {
                    i = !0;
                    if ("subscription" === e.kind) {
                      a.reexecuteOperation(makeOperation("teardown", e, e.context));
                    }
                    o();
                  }
                }
              });
            }));
            return function() {
              i = !0;
              if (u) {
                u.unsubscribe();
              }
            };
          }));
        }(e));
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)(isSubscriptionOperation)(t));
      var c = i((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return !isSubscriptionOperation(e);
      }))(t));
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ u, c ]);
    };
  };
}

function debugExchange(e) {
  var r = e.forward;
  if (false) {} else {
    return function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        return console.log("[Exchange debug]: Completed operation: ", e);
      }))(r((0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        return console.log("[Exchange debug]: Incoming operation: ", e);
      }))(e)));
    };
  }
}

function dedupExchange(e) {
  var r = e.forward;
  var n = e.dispatchDebug;
  var t = new Set;
  function filterIncomingOperation(e) {
    var r = e.key;
    var a = e.kind;
    if ("teardown" === a) {
      t.delete(r);
      return !0;
    }
    if ("query" !== a && "subscription" !== a) {
      return !0;
    }
    var o = t.has(r);
    t.add(r);
    if (o) {
       true && n({
        type: "dedup",
        message: "An operation has been deduped.",
        operation: e,
        source: "dedupExchange"
      });
    }
    return !o;
  }
  function afterOperationResult(e) {
    if (!e.hasNext) {
      t.delete(e.operation.key);
    }
  }
  return function(e) {
    var n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)(filterIncomingOperation)(e);
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)(afterOperationResult)(r(n));
  };
}

function fetchExchange(e) {
  var r = e.forward;
  var n = e.dispatchDebug;
  return function(e) {
    var t = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
    var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((function(e) {
      var r = e.key;
      var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return "teardown" === e.kind && e.key === r;
      }))(t);
      var o = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(e);
      var i = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(e, o);
      var u = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(e, o);
       true && n({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: e,
        data: {
          url: i,
          fetchOptions: u
        },
        source: "fetchExchange"
      });
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.onPush)((function(r) {
        var t = !r.data ? r.error : void 0;
         true && n({
          type: t ? "fetchError" : "fetchSuccess",
          message: "A " + (t ? "failed" : "successful") + " fetch response has been returned.",
          operation: e,
          data: {
            url: i,
            fetchOptions: u,
            value: t || r
          },
          source: "fetchExchange"
        });
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(a)((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(e, i, u)));
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" === e.kind || "mutation" === e.kind;
    }))(t));
    var o = r((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" !== e.kind && "mutation" !== e.kind;
    }))(t));
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ a, o ]);
  };
}

function fallbackExchange(e) {
  var r = e.dispatchDebug;
  return function(e) {
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function() {
      return !1;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
      if ("teardown" !== e.kind && "production" !== "development") {
        var n = 'No exchange has handled operations of kind "' + e.kind + "\". Check whether you've added an exchange responsible for these operations.";
         true && r({
          type: "fallbackCatch",
          message: n,
          operation: e,
          source: "fallbackExchange"
        });
        console.warn(n);
      }
    }))(e));
  };
}

var L = fallbackExchange({
  dispatchDebug: noop
});

function composeExchanges(e) {
  return function(r) {
    var n = r.client;
    var t = r.dispatchDebug;
    return e.reduceRight((function(e, r) {
      return r({
        client: n,
        forward: e,
        dispatchDebug: function dispatchDebug$1(e) {
           true && t((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
            timestamp: Date.now(),
            source: r.name
          }, e));
        }
      });
    }), r.forward);
  };
}

function errorExchange(e) {
  var r = e.onError;
  return function(e) {
    var n = e.forward;
    return function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        var n = e.error;
        if (n) {
          r(n, e.operation);
        }
      }))(n(e));
    };
  };
}

var J = [ dedupExchange, cacheExchange, fetchExchange ];

var W = function Client(e) {
  if ( true && !e.url) {
    throw new Error("You are creating an urql-client without a url.");
  }
  var r = new Map;
  var n = new Map;
  var t = [];
  var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.makeSubject)();
  var i = a.source;
  var u = a.next;
  var c = !1;
  function dispatchOperation(e) {
    c = !0;
    if (e) {
      u(e);
    }
    while (e = t.shift()) {
      u(e);
    }
    c = !1;
  }
  function makeResultSource(e) {
    var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(r) {
      return r.operation.kind === e.kind && r.operation.key === e.key;
    }))(y);
    if (f.maskTypename) {
      a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
        return (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e, {
          data: maskTypename(e.data)
        });
      }))(a);
    }
    if ("mutation" === e.kind) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onStart)((function() {
        return dispatchOperation(e);
      }))(a));
    }
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onEnd)((function() {
      r.delete(e.key);
      n.delete(e.key);
      for (var a = t.length - 1; a >= 0; a--) {
        if (t[a].key === e.key) {
          t.splice(a, 1);
        }
      }
      dispatchOperation(makeOperation("teardown", e, e.context));
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onPush)((function(n) {
      r.set(e.key, n);
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.switchMap)((function(r) {
      if ("query" !== e.kind || r.stale) {
        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.fromValue)(r);
      }
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ (0,wonka__WEBPACK_IMPORTED_MODULE_3__.fromValue)(r), (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function() {
        return (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, r, {
          stale: !0
        });
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(r) {
        return "query" === r.kind && r.key === e.key && "cache-only" !== r.context.requestPolicy;
      }))(i))) ]);
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(r) {
      return "teardown" === r.kind && r.key === e.key;
    }))(i))(a)))));
  }
  var s = this instanceof Client ? this : Object.create(Client.prototype);
  var f = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)(s, {
    url: e.url,
    fetchOptions: e.fetchOptions,
    fetch: e.fetch,
    suspense: !!e.suspense,
    requestPolicy: e.requestPolicy || "cache-first",
    preferGetMethod: !!e.preferGetMethod,
    maskTypename: !!e.maskTypename,
    operations$: i,
    reexecuteOperation: function reexecuteOperation(e) {
      if ("mutation" === e.kind || n.has(e.key)) {
        t.push(e);
        if (!c) {
          Promise.resolve().then(dispatchOperation);
        }
      }
    },
    createOperationContext: function createOperationContext(e) {
      if (!e) {
        e = {};
      }
      return (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
        url: f.url,
        fetchOptions: f.fetchOptions,
        fetch: f.fetch,
        preferGetMethod: f.preferGetMethod
      }, e, {
        suspense: e.suspense || !1 !== e.suspense && f.suspense,
        requestPolicy: e.requestPolicy || f.requestPolicy
      });
    },
    createRequestOperation: function createRequestOperation(e, r, n) {
      var t = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(r.query);
      if ( true && "teardown" !== e && t !== e) {
        throw new Error('Expected operation of type "' + e + '" but found "' + t + '"');
      }
      return makeOperation(e, r, f.createOperationContext(n));
    },
    executeRequestOperation: function executeRequestOperation(e) {
      if ("mutation" === e.kind) {
        return makeResultSource(e);
      }
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.make)((function(t) {
        var a = n.get(e.key);
        if (!a) {
          n.set(e.key, a = makeResultSource(e));
        }
        var i = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)(t.next)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onEnd)(t.complete)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onStart)((function() {
          var n = r.get(e.key);
          if ("subscription" === e.kind) {
            return dispatchOperation(e);
          } else if (i) {
            dispatchOperation(e);
          }
          if (null != n && n === r.get(e.key)) {
            t.next(i ? (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, n, {
              stale: !0
            }) : n);
          } else if (!i) {
            dispatchOperation(e);
          }
        }))(a))).unsubscribe;
      }));
    },
    executeQuery: function executeQuery(e, r) {
      var n = f.createRequestOperation("query", e, r);
      return f.executeRequestOperation(n);
    },
    executeSubscription: function executeSubscription(e, r) {
      var n = f.createRequestOperation("subscription", e, r);
      return f.executeRequestOperation(n);
    },
    executeMutation: function executeMutation(e, r) {
      var n = f.createRequestOperation("mutation", e, r);
      return f.executeRequestOperation(n);
    },
    query: function query(e, r, n) {
      if (!n || "boolean" != typeof n.suspense) {
        n = (0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, n, {
          suspense: !1
        });
      }
      return withPromise(f.executeQuery((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, r), n));
    },
    readQuery: function readQuery(e, r, n) {
      var t = null;
      (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)((function(e) {
        t = e;
      }))(f.query(e, r, n)).unsubscribe();
      return t;
    },
    subscription: function subscription(e, r, n) {
      return f.executeSubscription((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, r), n);
    },
    mutation: function mutation(e, r, n) {
      return withPromise(f.executeMutation((0,_18ee0d5c_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, r), n));
    }
  });
  var p = noop;
  if (true) {
    var l = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.makeSubject)();
    var d = l.next;
    var h = l.source;
    f.subscribeToDebugTarget = function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)(e)(h);
    };
    p = d;
  }
  var v = composeExchanges(void 0 !== e.exchanges ? e.exchanges : J);
  var y = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(v({
    client: f,
    dispatchDebug: p,
    forward: fallbackExchange({
      dispatchDebug: p
    })
  })(i));
  (0,wonka__WEBPACK_IMPORTED_MODULE_3__.publish)(y);
  return f;
};

var z = W;


//# sourceMappingURL=urql-core.mjs.map


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": function() { return /* binding */ GraphQLError; },
/* harmony export */   "printError": function() { return /* binding */ printError; }
/* harmony export */ });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _nodeLocations, _nodeLocations2, _nodeLocations3;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message);
    _this.name = 'GraphQLError';
    _this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.

    _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined);
    var nodeLocations = [];

    for (var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++) {
      var _this$nodes;

      var _ref4 = _ref3[_i2];
      var loc = _ref4.loc;

      if (loc != null) {
        nodeLocations.push(loc);
      }
    }

    nodeLocations = undefinedIfEmpty(nodeLocations); // Compute locations in the source for the given nodes/positions.

    _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
    _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function (loc) {
      return loc.start;
    });
    _this.locations = positions && source ? positions.map(function (pos) {
      return (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(source, pos);
    }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function (loc) {
      return (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(loc.source, loc.start);
    });
    _this.path = path !== null && path !== void 0 ? path : undefined;
    _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
    var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;

    if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(originalExtensions)) {
      _this.extensions = _objectSpread({}, originalExtensions);
    } // By being enumerable, JSON.stringify will include bellow properties in the resulting output.
    // This ensures that the simplest possible GraphQL service adheres to the spec.


    Object.defineProperties(_assertThisInitialized(_this), {
      message: {
        enumerable: true
      },
      locations: {
        enumerable: _this.locations != null
      },
      path: {
        enumerable: _this.path != null
      },
      extensions: {
        enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */


function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++) {
      var node = _error$nodes2[_i4];

      if (node.loc) {
        output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printLocation)(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++) {
      var location = _error$locations2[_i6];
      output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printSourceLocation)(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntaxError": function() { return /* binding */ syntaxError; }
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defineInspect; }
/* harmony export */ });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || (0,_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ devAssert; }
/* harmony export */ });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ inspect; }
/* harmony export */ });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
0 : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (_typeof(value) === 'object' && value !== null) {
    var _value$constructor;

    var className = constructor.prototype[Symbol.toStringTag];
    var valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
    Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;

    if (className === valueClassName) {
      var stringifiedValue = (0,_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(value);
      throw new Error("Cannot use ".concat(className, " \"").concat(stringifiedValue, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ invariant; }
/* harmony export */ });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isObjectLike; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": function() { return /* binding */ Location; },
/* harmony export */   "Token": function() { return /* binding */ Token; },
/* harmony export */   "isNode": function() { return /* binding */ isNode; }
/* harmony export */ });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedentBlockStringValue": function() { return /* binding */ dedentBlockStringValue; },
/* harmony export */   "getBlockStringIndentation": function() { return /* binding */ getBlockStringIndentation; },
/* harmony export */   "printBlockString": function() { return /* binding */ printBlockString; }
/* harmony export */ });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveLocation": function() { return /* binding */ DirectiveLocation; }
/* harmony export */ });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kind": function() { return /* binding */ Kind; }
/* harmony export */ });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": function() { return /* binding */ Lexer; },
/* harmony export */   "isPunctuatorTokenKind": function() { return /* binding */ isPunctuatorTokenKind; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": function() { return /* binding */ getLocation; }
/* harmony export */ });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "parseValue": function() { return /* binding */ parseValue; },
/* harmony export */   "parseType": function() { return /* binding */ parseType; },
/* harmony export */   "Parser": function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = (0,_source_mjs__WEBPACK_IMPORTED_MODULE_1__.isSource)(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_1__.Source(source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return (0,_lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPunctuatorTokenKind)(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printLocation": function() { return /* binding */ printLocation; },
/* harmony export */   "printSourceLocation": function() { return /* binding */ printSourceLocation; }
/* harmony export */ });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, (0,_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "print": function() { return /* binding */ print; }
/* harmony export */ });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit)(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": function() { return /* binding */ Source; },
/* harmony export */   "isSource": function() { return /* binding */ isSource; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, "Body must be a string. Received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenKind": function() { return /* binding */ TokenKind; }
/* harmony export */ });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryDocumentKeys": function() { return /* binding */ QueryDocumentKeys; },
/* harmony export */   "BREAK": function() { return /* binding */ BREAK; },
/* harmony export */   "visit": function() { return /* binding */ visit; },
/* harmony export */   "visitInParallel": function() { return /* binding */ visitInParallel; },
/* harmony export */   "getVisitFn": function() { return /* binding */ getVisitFn; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!(0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(node)) {
        throw new Error("Invalid AST Node: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if ((0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYMBOL_ITERATOR": function() { return /* binding */ SYMBOL_ITERATOR; },
/* harmony export */   "SYMBOL_ASYNC_ITERATOR": function() { return /* binding */ SYMBOL_ASYNC_ITERATOR; },
/* harmony export */   "SYMBOL_TO_STRING_TAG": function() { return /* binding */ SYMBOL_TO_STRING_TAG; }
/* harmony export */ });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/wonka/dist/wonka.mjs":
/*!*******************************************!*\
  !*** ./node_modules/wonka/dist/wonka.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": function() { return /* binding */ buffer$1; },
/* harmony export */   "combine": function() { return /* binding */ combine$1; },
/* harmony export */   "concat": function() { return /* binding */ concat$1; },
/* harmony export */   "concatAll": function() { return /* binding */ concatAll$1; },
/* harmony export */   "concatMap": function() { return /* binding */ z; },
/* harmony export */   "debounce": function() { return /* binding */ debounce$1; },
/* harmony export */   "delay": function() { return /* binding */ delay$1; },
/* harmony export */   "empty": function() { return /* binding */ u; },
/* harmony export */   "filter": function() { return /* binding */ filter$1; },
/* harmony export */   "flatten": function() { return /* binding */ G; },
/* harmony export */   "forEach": function() { return /* binding */ forEach$1; },
/* harmony export */   "fromArray": function() { return /* binding */ p; },
/* harmony export */   "fromCallbag": function() { return /* binding */ fromCallbag$2; },
/* harmony export */   "fromDomEvent": function() { return /* binding */ fromDomEvent$1; },
/* harmony export */   "fromList": function() { return /* binding */ fromList$1; },
/* harmony export */   "fromObservable": function() { return /* binding */ fromObservable$2; },
/* harmony export */   "fromPromise": function() { return /* binding */ fromPromise$1; },
/* harmony export */   "fromValue": function() { return /* binding */ fromValue$1; },
/* harmony export */   "interval": function() { return /* binding */ interval$1; },
/* harmony export */   "make": function() { return /* binding */ make$1; },
/* harmony export */   "makeSubject": function() { return /* binding */ makeSubject$1; },
/* harmony export */   "map": function() { return /* binding */ map$1; },
/* harmony export */   "merge": function() { return /* binding */ merge$1; },
/* harmony export */   "mergeAll": function() { return /* binding */ G; },
/* harmony export */   "mergeMap": function() { return /* binding */ D; },
/* harmony export */   "never": function() { return /* binding */ never$1; },
/* harmony export */   "onEnd": function() { return /* binding */ onEnd$1; },
/* harmony export */   "onPush": function() { return /* binding */ H; },
/* harmony export */   "onStart": function() { return /* binding */ onStart$1; },
/* harmony export */   "pipe": function() { return /* binding */ pipe; },
/* harmony export */   "publish": function() { return /* binding */ publish$1; },
/* harmony export */   "sample": function() { return /* binding */ sample$1; },
/* harmony export */   "scan": function() { return /* binding */ scan$1; },
/* harmony export */   "share": function() { return /* binding */ share$1; },
/* harmony export */   "skip": function() { return /* binding */ skip$1; },
/* harmony export */   "skipUntil": function() { return /* binding */ skipUntil$1; },
/* harmony export */   "skipWhile": function() { return /* binding */ skipWhile$1; },
/* harmony export */   "subscribe": function() { return /* binding */ N; },
/* harmony export */   "switchAll": function() { return /* binding */ switchAll$1; },
/* harmony export */   "switchMap": function() { return /* binding */ K; },
/* harmony export */   "take": function() { return /* binding */ take$1; },
/* harmony export */   "takeLast": function() { return /* binding */ M; },
/* harmony export */   "takeUntil": function() { return /* binding */ takeUntil$1; },
/* harmony export */   "takeWhile": function() { return /* binding */ takeWhile$1; },
/* harmony export */   "tap": function() { return /* binding */ H; },
/* harmony export */   "throttle": function() { return /* binding */ throttle$1; },
/* harmony export */   "toArray": function() { return /* binding */ toArray$1; },
/* harmony export */   "toCallbag": function() { return /* binding */ toCallbag$2; },
/* harmony export */   "toObservable": function() { return /* binding */ toObservable$2; },
/* harmony export */   "toPromise": function() { return /* binding */ toPromise$1; }
/* harmony export */ });
function l(a, b) {
  b.tag = a;
  return b;
}

function m() {}

function p(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
      e = !1,
      f = !1,
      g = 0;
    b(
      l(0, [
        function (h) {
          if (h) {
            d = !0;
          } else if (e) {
            f = !0;
          } else {
            for (e = f = !0; f && !d; ) {
              g < c ? ((h = a[g]), (g = (g + 1) | 0), (f = !1), b(l(1, [h]))) : ((d = !0), b(0));
            }
            e = !1;
          }
        },
      ])
    );
  };
}

function r() {}

function t(a) {
  a(0);
}

function u(a) {
  let b = !1;
  a(
    l(0, [
      function (c) {
        c ? (b = !0) : b || a(0);
      },
    ])
  );
}

function w(a) {
  if (void 0 === a) {
    return ((a = [v, 0]).tag = 256), a;
  }
  if (null === a || a[0] !== v) {
    return a;
  }
  (a = [v, (a[1] + 1) | 0]).tag = 256;
  return a;
}

function x(a) {
  if (null === a || a[0] !== v) {
    return a;
  }
  if (0 !== (a = a[1])) {
    return [v, (a - 1) | 0];
  }
}

function z(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b
          ? k &&
            ((k = !1),
            void 0 !== (b = e.shift())
              ? ((b = a(x(b))), (k = !0), b(d))
              : q
              ? c(0)
              : g || ((g = !0), f(0)))
          : b.tag
          ? k && (c(b), n ? (n = !1) : h(0))
          : ((h = b = b[0]), (n = !1), b(0));
      }
      let e = [],
        f = m,
        g = !1,
        h = m,
        k = !1,
        n = !1,
        q = !1;
      b(function (b) {
        'number' == typeof b
          ? q || ((q = !0), k || 0 !== e.length || c(0))
          : b.tag
          ? q || ((b = b[0]), (g = !1), k ? e.push(b) : ((b = a(b)), (k = !0), b(d)))
          : (f = b[0]);
      });
      c(
        l(0, [
          function (c) {
            if (c) {
              if ((q || ((q = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else {
              q || g || ((g = !0), f(0)), k && !n && ((n = !0), h(0));
            }
          },
        ])
      );
    };
  };
}

function A(a) {
  return a;
}

function B(a) {
  return a;
}

function C(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m,
        f = !1,
        g = [],
        h = !1;
      b(function (b) {
        'number' == typeof b
          ? h || ((h = !0), 0 === g.length && c(0))
          : b.tag
          ? h ||
            ((f = !1),
            (function (a) {
              function b(a) {
                'number' == typeof a
                  ? 0 !== g.length &&
                    ((g = g.filter(d)),
                    (a = 0 === g.length),
                    h && a ? c(0) : !f && a && ((f = !0), e(0)))
                  : a.tag
                  ? 0 !== g.length && (c(l(1, [a[0]])), k(0))
                  : ((k = a = a[0]), (g = g.concat(a)), a(0));
              }
              function d(a) {
                return a !== k;
              }
              let k = m;
              1 === a.length ? a(b) : a.bind(null, b);
            })(a(b[0])),
            f || ((f = !0), e(0)))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            a
              ? (h || ((h = !0), e(a)),
                g.forEach(function (c) {
                  return c(a);
                }),
                (g = []))
              : (f || h ? (f = !1) : ((f = !0), e(0)), g.forEach(C));
          },
        ])
      );
    };
  };
}

function E(a) {
  return a;
}

function F(a) {
  return a;
}

function G(a) {
  return D(F)(a);
}

function H(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || ((d = !0), c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(
            l(0, [
              function (a) {
                if (!d) {
                  return a && (d = !0), g(a);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function J(a) {
  a(0);
}

function K(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h &&
          ('number' == typeof a
            ? ((h = !1), n ? c(a) : f || ((f = !0), e(0)))
            : a.tag
            ? (c(a), k ? (k = !1) : g(0))
            : ((g = a = a[0]), (k = !1), a(0)));
      }
      let e = m,
        f = !1,
        g = m,
        h = !1,
        k = !1,
        n = !1;
      b(function (b) {
        'number' == typeof b
          ? n || ((n = !0), h || c(0))
          : b.tag
          ? n ||
            (h && (g(1), (g = m)), f ? (f = !1) : ((f = !0), e(0)), (b = a(b[0])), (h = !0), b(d))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            if (a) {
              if ((n || ((n = !0), e(1)), h)) {
                return (h = !1), g(1);
              }
            } else {
              n || f || ((f = !0), e(0)), h && !k && ((k = !0), g(0));
            }
          },
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return function (b) {
    return function (c) {
      let d = [],
        e = m;
      return b(function (b) {
        'number' == typeof b
          ? p(d)(c)
          : b.tag
          ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0))
          : ((b = b[0]), 0 >= a ? (b(1), u(c)) : ((e = b), b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m,
      d = !1;
    b(function (e) {
      'number' == typeof e ? (d = !0) : e.tag ? d || (a(e[0]), c(0)) : ((c = e = e[0]), e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return (d = !0), c(1);
        }
      },
    };
  };
}

function O() {}

function Q() {}

function R() {}

function S() {}

function buffer$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? k || ((k = !0), f(1), 0 < e.length && c(l(1, [e])), c(0))
          : a.tag
          ? !k && 0 < e.length && ((a = e), (e = []), c(l(1, [a])))
          : (g = a[0]);
      }
      let e = [],
        f = m,
        g = m,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? k || ((k = !0), g(1), 0 < e.length && c(l(1, [e])), c(0))
          : b.tag
          ? k || (e.push(b[0]), h ? (h = !1) : ((h = !0), f(0), g(0)))
          : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (!h) {
                return (h = !0), f(0), g(0);
              }
            }
          },
        ])
      );
    };
  };
}

function combine$1(a, b) {
  return (function (a, b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = void 0,
        h = !1,
        k = 0,
        n = !1;
      a(function (a) {
        var b = g;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((f = w(a)), (h = !1), c(l(1, [[a, x(b)]])))
              : ((f = w(a)), h ? (h = !1) : e(0)))
          : (d = a[0]);
      });
      b(function (a) {
        var b = f;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((g = w(a)), (h = !1), c(l(1, [[x(b), a]])))
              : ((g = w(a)), h ? (h = !1) : d(0)))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (c) {
            if (!n) {
              if (c) {
                return (n = !0), d(1), e(1);
              }
              if (!h) {
                return (h = !0), d(c), e(c);
              }
            }
          },
        ])
      );
    };
  })(a, b);
}

function concat$1(a) {
  return z(B)(p(a));
}

function concatAll$1(a) {
  return z(A)(a);
}

function debounce$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        var a = e;
        void 0 !== a && ((e = void 0), clearTimeout(x(a)));
      }
      let e = void 0,
        f = !1,
        g = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          g || ((g = !0), void 0 !== e ? (f = !0) : c(0));
        } else if (b.tag) {
          g ||
            (d(),
            (e = w(
              setTimeout(function () {
                e = void 0;
                c(b);
                f && c(0);
              }, a(b[0]))
            )));
        } else {
          var n = b[0];
          c(
            l(0, [
              function (a) {
                if (!g) {
                  return a ? ((g = !0), (f = !1), d(), n(1)) : n(0);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function delay$1(a) {
  return function (b) {
    return function (c) {
      let d = 0;
      return b(function (b) {
        'number' == typeof b || b.tag
          ? ((d = (d + 1) | 0),
            setTimeout(function () {
              0 !== d && ((d = (d - 1) | 0), c(b));
            }, a))
          : c(b);
      });
    };
  };
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? (a(b[0]) ? c(b) : d(0)) : ((d = b[0]), c(b));
      });
    };
  };
}

function forEach$1(a) {
  return function (b) {
    N(a)(b);
  };
}

function fromCallbag$2(a) {
  return function (b) {
    function c(a, c) {
      switch (a) {
        case 0:
          b(
            l(0, [
              function (a) {
                return a ? c(2) : c(1);
              },
            ])
          );
          break;

        case 1:
          b(l(1, [c]));
          break;

        case 2:
          b(0);
      }
    }
    return 2 === a.length ? a(0, c) : a.bind(null, 0, c);
  };
}

function fromDomEvent$1(a, b) {
  return (function (a, b) {
    return function (c) {
      function d(a) {
        c(l(1, [a]));
      }
      c(
        l(0, [
          function (c) {
            c && a.removeEventListener(b, d);
          },
        ])
      );
      a.addEventListener(b, d);
    };
  })(a, b);
}

function fromList$1(a) {
  return function (b) {
    let c = !1,
      d = !1,
      e = !1,
      f = a;
    b(
      l(0, [
        function (a) {
          if (a) {
            c = !0;
          } else if (d) {
            e = !0;
          } else {
            for (d = e = !0; e && !c; ) {
              (a = f) ? ((f = a[1]), (e = !1), b(l(1, [a[0]]))) : ((c = !0), b(0));
            }
            d = !1;
          }
        },
      ])
    );
  };
}

function fromObservable$2(a) {
  var b = void 0 !== a[P] ? a[P]() : a;
  return function (a) {
    var c = b.subscribe({
      next: function (c) {
        a(l(1, [c]));
      },
      complete: function () {
        a(0);
      },
      error: Q,
    });
    a(
      l(0, [
        function (a) {
          if (a) {
            return c.unsubscribe();
          }
        },
      ])
    );
  };
}

function fromPromise$1(a) {
  return function (b) {
    let c = !1;
    a.then(function (a) {
      c || (b(l(1, [a])), b(0));
      return Promise.resolve(void 0);
    });
    b(
      l(0, [
        function (a) {
          a && (c = !0);
        },
      ])
    );
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(
      l(0, [
        function (d) {
          d ? (c = !0) : c || ((c = !0), b(l(1, [a])), b(0));
        },
      ])
    );
  };
}

function interval$1(a) {
  return function (b) {
    let c = 0;
    var d = setInterval(function () {
      var a = c;
      c = (c + 1) | 0;
      b(l(1, [a]));
    }, a);
    b(
      l(0, [
        function (a) {
          a && clearInterval(d);
        },
      ])
    );
  };
}

function make$1(a) {
  return function (b) {
    let c = r,
      d = !1;
    c = a({
      next: function (a) {
        d || b(l(1, [a]));
      },
      complete: function () {
        d || ((d = !0), b(0));
      },
    });
    b(
      l(0, [
        function (a) {
          if (a && !d) {
            return (d = !0), c();
          }
        },
      ])
    );
  };
}

function makeSubject$1() {
  let a = [],
    b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      c(
        l(0, [
          function (c) {
            c && (a = a.filter(b));
          },
        ])
      );
    },
    next: function (c) {
      b ||
        a.forEach(function (a) {
          a(l(1, [c]));
        });
    },
    complete: function () {
      b || ((b = !0), a.forEach(t));
    },
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l(1, [a(b[0])]) : l(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1(a) {
  return D(E)(p(a));
}

function never$1(a) {
  a(l(0, [m]));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }
          d = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(
            l(0, [
              function (c) {
                if (!d) {
                  return c ? ((d = !0), e(c), a()) : e(c);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, d = arguments.length; c < d; c++) {
    b = a[c](b);
  }
  return b;
}

function publish$1(a) {
  return N(O)(a);
}

function sample$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = !1,
        h = !1;
      b(function (a) {
        'number' == typeof a
          ? h || ((h = !0), e(1), c(0))
          : a.tag
          ? ((f = w(a[0])), g ? (g = !1) : ((g = !0), e(0), d(0)))
          : (d = a[0]);
      });
      a(function (a) {
        var b = f;
        'number' == typeof a
          ? h || ((h = !0), d(1), c(0))
          : a.tag
          ? void 0 === b || h || ((f = void 0), c(l(1, [x(b)])))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (a) {
            if (!h) {
              if (a) {
                return (h = !0), d(1), e(1);
              }
              if (!g) {
                return (g = !0), d(0), e(0);
              }
            }
          },
        ])
      );
    };
  };
}

function scan$1(a, b) {
  return (function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c
            ? (c = 0)
            : c.tag
            ? ((e = a(e, c[0])), (c = l(1, [e])))
            : (c = l(0, [c[0]]));
          d(c);
        });
      };
    };
  })(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(J), (c = []))
      : a.tag
      ? ((e = !1),
        c.forEach(function (b) {
          b(a);
        }))
      : (d = a[0]);
  }
  let c = [],
    d = m,
    e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }
    c = c.concat(f);
    1 === c.length && a(b);
    f(
      l(0, [
        function (a) {
          if (a) {
            if (((c = c.filter(g)), 0 === c.length)) {
              return d(1);
            }
          } else {
            e || ((e = !0), d(a));
          }
        },
      ])
    );
  };
}

function skip$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = a;
      return b(function (a) {
        'number' == typeof a
          ? c(a)
          : a.tag
          ? 0 < e
            ? ((e = (e - 1) | 0), d(0))
            : c(a)
          : ((d = a[0]), c(a));
      });
    };
  };
}

function skipUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? g && ((k = !0), e(1))
          : a.tag
          ? ((g = !1), f(1))
          : ((f = a = a[0]), a(0));
      }
      let e = m,
        f = m,
        g = !0,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? (g && f(1), (k = !0), c(0))
          : b.tag
          ? g || k
            ? h
              ? (h = !1)
              : ((h = !0), e(0), f(0))
            : ((h = !1), c(b))
          : ((e = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                if (((k = !0), e(1), g)) {
                  return f(1);
                }
              } else {
                h || ((h = !0), g && f(0), e(0));
              }
            }
          },
        ])
      );
    };
  };
}

function skipWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !0;
      return b(function (b) {
        'number' == typeof b
          ? c(b)
          : b.tag
          ? e
            ? a(b[0])
              ? d(0)
              : ((e = !1), c(b))
            : c(b)
          : ((d = b[0]), c(b));
      });
    };
  };
}

function switchAll$1(a) {
  return K(L)(a);
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
        e = 0,
        f = m;
      b(function (b) {
        'number' == typeof b
          ? d || ((d = !0), c(0))
          : b.tag
          ? e < a && !d && ((e = (e + 1) | 0), c(b), !d && e >= a && ((d = !0), c(0), f(1)))
          : ((b = b[0]), 0 >= a ? ((d = !0), c(0), b(1)) : (f = b));
      });
      c(
        l(0, [
          function (b) {
            if (!d) {
              if (b) {
                return (d = !0), f(1);
              }
              if (e < a) {
                return f(0);
              }
            }
          },
        ])
      );
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? ((e = !0), f(1), c(0)) : ((g = a = a[0]), a(0)));
      }
      let e = !1,
        f = m,
        g = m;
      b(function (b) {
        'number' == typeof b ? e || ((e = !0), g(1), c(0)) : b.tag ? e || c(b) : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!e) {
              return a ? ((e = !0), f(1), g(1)) : f(0);
            }
          },
        ])
      );
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !1;
      return b(function (b) {
        'number' == typeof b
          ? e || ((e = !0), c(0))
          : b.tag
          ? e || (a(b[0]) ? c(b) : ((e = !0), c(0), d(1)))
          : ((d = b[0]), c(b));
      });
    };
  };
}

function throttle$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        void 0 !== g && clearTimeout(x(g));
      }
      function e() {
        g = void 0;
        f = !1;
      }
      let f = !1,
        g = void 0;
      return b(function (b) {
        if ('number' == typeof b) {
          d(), c(0);
        } else if (b.tag) {
          f || ((f = !0), d(), (g = w(setTimeout(e, a(b[0])))), c(b));
        } else {
          var h = b[0];
          c(
            l(0, [
              function (a) {
                return a ? (d(), h(1)) : h(a);
              },
            ])
          );
        }
      });
    };
  };
}

function toArray$1(a) {
  let b = [],
    c = m,
    d = !1;
  a(function (a) {
    'number' == typeof a ? (d = !0) : a.tag ? (b.push(a[0]), c(0)) : ((c = a = a[0]), a(0));
  });
  d || c(1);
  return b;
}

function toCallbag$2(a) {
  return function (b, c) {
    if (0 === b) {
      return a(function (a) {
        function b(a) {
          switch (a) {
            case 1:
              d(0);
              break;

            case 2:
              d(1);
          }
        }
        if ('number' == typeof a) {
          return 2 === c.length ? c(2, void 0) : c.bind(null, 2, void 0);
        }
        if (a.tag) {
          return (a = a[0]), 2 === c.length ? c(1, a) : c.bind(null, 1, a);
        }
        var d = a[0];
        return 2 === c.length ? c(0, b) : c.bind(null, 0, b);
      });
    }
  };
}

function toObservable$2(a) {
  var b = {
    subscribe: function (b, d, e) {
      var c = ('object' == typeof b ? b.next.bind(b) : b) || R,
        g = ('object' == typeof b ? b.complete.bind(b) : e) || S;
      let h = m,
        k = !1;
      a(function (a) {
        if ('number' == typeof a) {
          return (k = !0), g();
        }
        if (a.tag) {
          if (k) {
            return;
          }
          c(a[0]);
          return h(0);
        }
        h = a = a[0];
        a(0);
      });
      return {
        unsubscribe: function () {
          if (!k) {
            return (this.closed = !1), (k = !0), h(1);
          }
        },
        closed: !1,
      };
    },
  };
  b[P] = function () {
    return b;
  };
  return b;
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v = [],
  P =
    'function' == typeof Symbol
      ? Symbol.observable || (Symbol.observable = Symbol('observable'))
      : '@@observable';




/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NWNiMTFiYmU5ODhiNWY5OGY5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxNQUFNLEdBQUdELGtEQUFZLENBQUM7QUFDMUJFLEVBQUFBLEdBQUcsRUFBRTtBQURxQixDQUFELENBQTNCOztBQUlBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFLDhEQUFDLDREQUFEO0FBQWdCLFlBQVEsTUFBeEI7QUFBeUIsU0FBSyxFQUFFTiwyQ0FBaEM7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlTSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUY7QUFRVCwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlk7O0FBRVosa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLHlCQUF5Qjs7QUFFekI7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFp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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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Ozs7Ozs7Ozs7QUM5WEE7QUFDQTtBQUNPLGdIQUFnSDtBQUN2SDs7QUFFTyxxSUFBcUk7O0FBRXJJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWiw2QkFBNkIsU0FBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBeUUsT0FBTztBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXFERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJxbC9kaXN0L3VycWwuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdXJxbC9jb3JlL2Rpc3QvMThlZTBkNWMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHVycWwvY29yZS9kaXN0L3VycWwtY29yZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2Vycm9yL0dyYXBoUUxFcnJvci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2Vycm9yL3N5bnRheEVycm9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZWZpbmVJbnNwZWN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZXZBc3NlcnQubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2luc3BlY3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2luc3RhbmNlT2YubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2ludmFyaWFudC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaXNPYmplY3RMaWtlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9ub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvYXN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvYmxvY2tTdHJpbmcubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9kaXJlY3RpdmVMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvbGV4ZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uvc291cmNlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdG9rZW5LaW5kLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL3BvbHlmaWxscy9zeW1ib2xzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvbmthL2Rpc3Qvd29ua2EubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgUHJvdmlkZXIgfSBmcm9tIFwidXJxbFwiO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWxcIixcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJylcbiAgICA/IFN5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJylcbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG52YXIgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgdmFyIHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIHZhciBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIHZhciB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB2YXIgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oXG4gICAgICB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoXG4gICAgKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgdmFyIGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZilcbiAgICB9XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgaXNJbnN0YW5jZShzdHJpbmcsIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgb3IgQXJyYXlCdWZmZXIuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBzdHJpbmdcbiAgICApXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbXVzdE1hdGNoID0gKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gdHJ1ZSlcbiAgaWYgKCFtdXN0TWF0Y2ggJiYgbGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIG11c3RNYXRjaCA/IC0xIDogdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCAoYW5kIHRoZSBgaXMtYnVmZmVyYCBucG0gcGFja2FnZSlcbi8vIHRvIGRldGVjdCBhIEJ1ZmZlciBpbnN0YW5jZS4gSXQncyBub3QgcG9zc2libGUgdG8gdXNlIGBpbnN0YW5jZW9mIEJ1ZmZlcmBcbi8vIHJlbGlhYmx5IGluIGEgYnJvd3NlcmlmeSBjb250ZXh0IGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgZGlmZmVyZW50XG4vLyBjb3BpZXMgb2YgdGhlICdidWZmZXInIHBhY2thZ2UgaW4gdXNlLiBUaGlzIG1ldGhvZCB3b3JrcyBldmVuIGZvciBCdWZmZXJcbi8vIGluc3RhbmNlcyB0aGF0IHdlcmUgY3JlYXRlZCBmcm9tIGFub3RoZXIgY29weSBvZiB0aGUgYGJ1ZmZlcmAgcGFja2FnZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE1NFxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5yZXBsYWNlKC8oLnsyfSkvZywgJyQxICcpLnRyaW0oKVxuICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5pZiAoY3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICBCdWZmZXIucHJvdG90eXBlW2N1c3RvbUluc3BlY3RTeW1ib2xdID0gQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmIChpc0luc3RhbmNlKHRhcmdldCwgVWludDhBcnJheSkpIHtcbiAgICB0YXJnZXQgPSBCdWZmZXIuZnJvbSh0YXJnZXQsIHRhcmdldC5vZmZzZXQsIHRhcmdldC5ieXRlTGVuZ3RoKVxuICB9XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInRhcmdldFwiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXkuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdGFyZ2V0KVxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKG51bWJlcklzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgW3ZhbF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChudW1iZXJJc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgKGJ5dGVzW2kgKyAxXSAqIDI1NikpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2UgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yICh2YXIgaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZhbHVlIFwiJyArIHZhbCArXG4gICAgICAgICdcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXisvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHRha2VzIGVxdWFsIHNpZ25zIGFzIGVuZCBvZiB0aGUgQmFzZTY0IGVuY29kaW5nXG4gIHN0ciA9IHN0ci5zcGxpdCgnPScpWzBdXG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbnZhciBoZXhTbGljZUxvb2t1cFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gIHZhciB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIHZhciBpMTYgPSBpICogMTZcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIHRhYmxlW2kxNiArIGpdID0gYWxwaGFiZXRbaV0gKyBhbHBoYWJldFtqXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGVcbn0pKClcbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgZSwgY3JlYXRlUmVxdWVzdCBhcyB0IH0gZnJvbSBcIkB1cnFsL2NvcmVcIjtcblxuZXhwb3J0ICogZnJvbSBcIkB1cnFsL2NvcmVcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCBhcyBuLCB1c2VDb250ZXh0IGFzIHIsIHVzZVJlZiBhcyB1LCB1c2VTdGF0ZSBhcyBpLCB1c2VDYWxsYmFjayBhcyBhLCB1c2VFZmZlY3QgYXMgbywgdXNlTWVtbyBhcyBjIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHRvUHJvbWlzZSBhcyBzLCBzdWJzY3JpYmUgYXMgZiwgb25QdXNoIGFzIGwsIHRha2VXaGlsZSBhcyB2LCBvbkVuZCBhcyBwIH0gZnJvbSBcIndvbmthXCI7XG5cbnZhciBkID0gZSh7XG4gIHVybDogXCIvZ3JhcGhxbFwiXG59KTtcblxudmFyIHggPSBuKGQpO1xuXG52YXIgaCA9IHguUHJvdmlkZXI7XG5cbnZhciB5ID0geC5Db25zdW1lcjtcblxueC5kaXNwbGF5TmFtZSA9IFwiVXJxbENvbnRleHRcIjtcblxudmFyIGcgPSAhMTtcblxuZnVuY3Rpb24gdXNlQ2xpZW50KCkge1xuICB2YXIgZSA9IHIoeCk7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgZSA9PT0gZCAmJiAhZykge1xuICAgIGcgPSAhMDtcbiAgICBjb25zb2xlLndhcm4oXCJEZWZhdWx0IENsaWVudDogTm8gY2xpZW50IGhhcyBiZWVuIHNwZWNpZmllZCB1c2luZyB1cnFsJ3MgUHJvdmlkZXIuVGhpcyBtZWFucyB0aGF0IHVycWwgd2lsbCBiZSBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHMgaW5jbHVkaW5nIG1ha2luZyByZXF1ZXN0cyB0byBgL2dyYXBocWxgLlxcbklmIHRoYXQncyBub3Qgd2hhdCB5b3Ugd2FudCwgcGxlYXNlIGNyZWF0ZSBhIGNsaWVudCBhbmQgYWRkIGEgUHJvdmlkZXIuXCIpO1xuICB9XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIChfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24oZSkge1xuICAgIGZvciAodmFyIHQgPSAxOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgbiA9IGFyZ3VtZW50c1t0XTtcbiAgICAgIGZvciAodmFyIHIgaW4gbikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIHIpKSB7XG4gICAgICAgICAgZVtyXSA9IG5bcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBiID0ge1xuICBmZXRjaGluZzogITEsXG4gIHN0YWxlOiAhMSxcbiAgZXJyb3I6IHZvaWQgMCxcbiAgZGF0YTogdm9pZCAwLFxuICBleHRlbnNpb25zOiB2b2lkIDAsXG4gIG9wZXJhdGlvbjogdm9pZCAwXG59O1xuXG5mdW5jdGlvbiBjb21wdXRlTmV4dFN0YXRlKGUsIHQpIHtcbiAgdmFyIG4gPSBfZXh0ZW5kcyh7fSwgZSwgdCwge1xuICAgIGZldGNoaW5nOiAhIXQuZmV0Y2hpbmcsXG4gICAgc3RhbGU6ICEhdC5zdGFsZVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2hhbGxvd0RpZmZlcmVudChlLCB0KSB7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgdCkge1xuICAgICAgcmV0dXJuIGUgIT09IHQ7XG4gICAgfVxuICAgIGZvciAodmFyIG4gaW4gZSkge1xuICAgICAgaWYgKCEobiBpbiB0KSkge1xuICAgICAgICByZXR1cm4gITA7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIHIgaW4gdCkge1xuICAgICAgaWYgKGVbcl0gIT09IHRbcl0pIHtcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gITE7XG4gIH0oZSwgbikgPyBuIDogZTtcbn1cblxuZnVuY3Rpb24gaGFzRGVwc0NoYW5nZWQoZSwgdCkge1xuICBmb3IgKHZhciBuID0gMCwgciA9IHQubGVuZ3RoOyBuIDwgcjsgbisrKSB7XG4gICAgaWYgKGVbbl0gIT09IHRbbl0pIHtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICExO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbihlKSB7XG4gIHZhciBuID0gdSghMCk7XG4gIHZhciByID0gdXNlQ2xpZW50KCk7XG4gIHZhciBjID0gaShiKTtcbiAgdmFyIGYgPSBjWzBdO1xuICB2YXIgbCA9IGNbMV07XG4gIHZhciB2ID0gYSgoZnVuY3Rpb24odSwgaSkge1xuICAgIGwoX2V4dGVuZHMoe30sIGIsIHtcbiAgICAgIGZldGNoaW5nOiAhMFxuICAgIH0pKTtcbiAgICByZXR1cm4gcyhyLmV4ZWN1dGVNdXRhdGlvbih0KGUsIHUpLCBpIHx8IHt9KSkudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKG4uY3VycmVudCkge1xuICAgICAgICBsKHtcbiAgICAgICAgICBmZXRjaGluZzogITEsXG4gICAgICAgICAgc3RhbGU6ICEhZS5zdGFsZSxcbiAgICAgICAgICBkYXRhOiBlLmRhdGEsXG4gICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXG4gICAgICAgICAgZXh0ZW5zaW9uczogZS5leHRlbnNpb25zLFxuICAgICAgICAgIG9wZXJhdGlvbjogZS5vcGVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9KSk7XG4gIH0pLCBbIHIsIGUsIGwgXSk7XG4gIG8oKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIG4uY3VycmVudCA9ICExO1xuICAgIH07XG4gIH0pLCBbXSk7XG4gIHJldHVybiBbIGYsIHYgXTtcbn1cblxuZnVuY3Rpb24gdXNlUmVxdWVzdChlLCBuKSB7XG4gIHZhciByID0gdSh2b2lkIDApO1xuICByZXR1cm4gYygoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHUgPSB0KGUsIG4pO1xuICAgIGlmICh2b2lkIDAgIT09IHIuY3VycmVudCAmJiByLmN1cnJlbnQua2V5ID09PSB1LmtleSkge1xuICAgICAgcmV0dXJuIHIuY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgci5jdXJyZW50ID0gdTtcbiAgICAgIHJldHVybiB1O1xuICAgIH1cbiAgfSksIFsgZSwgbiBdKTtcbn1cblxudmFyIHEgPSAhMTtcblxuZnVuY3Rpb24gdXNlUXVlcnkoZSkge1xuICB2YXIgdCA9IHVzZUNsaWVudCgpO1xuICB2YXIgbiA9IGZ1bmN0aW9uIGdldENhY2hlRm9yQ2xpZW50KGUpIHtcbiAgICBpZiAoIWUuX3JlYWN0KSB7XG4gICAgICB2YXIgdCA9IG5ldyBTZXQ7XG4gICAgICB2YXIgbiA9IG5ldyBNYXA7XG4gICAgICBpZiAoZS5vcGVyYXRpb25zJCkge1xuICAgICAgICBmKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKFwidGVhcmRvd25cIiA9PT0gZS5raW5kICYmIHQuaGFzKGUua2V5KSkge1xuICAgICAgICAgICAgdC5kZWxldGUoZS5rZXkpO1xuICAgICAgICAgICAgbi5kZWxldGUoZS5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpKGUub3BlcmF0aW9ucyQpO1xuICAgICAgfVxuICAgICAgZS5fcmVhY3QgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGUpIHtcbiAgICAgICAgICByZXR1cm4gbi5nZXQoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGUsIHIpIHtcbiAgICAgICAgICB0LmRlbGV0ZShlKTtcbiAgICAgICAgICBuLnNldChlLCByKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gZGlzcG9zZShlKSB7XG4gICAgICAgICAgdC5hZGQoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBlLl9yZWFjdDtcbiAgfSh0KTtcbiAgdmFyIHIgPSBmdW5jdGlvbiBpc1N1c3BlbnNlKGUsIHQpIHtcbiAgICByZXR1cm4gZS5zdXNwZW5zZSAmJiAoIXQgfHwgITEgIT09IHQuc3VzcGVuc2UpO1xuICB9KHQsIGUuY29udGV4dCk7XG4gIHZhciB1ID0gdXNlUmVxdWVzdChlLnF1ZXJ5LCBlLnZhcmlhYmxlcyk7XG4gIHZhciBzID0gYygoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGUucGF1c2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgaSA9IHQuZXhlY3V0ZVF1ZXJ5KHUsIF9leHRlbmRzKHt9LCB7XG4gICAgICByZXF1ZXN0UG9saWN5OiBlLnJlcXVlc3RQb2xpY3lcbiAgICB9LCBlLmNvbnRleHQpKTtcbiAgICByZXR1cm4gciA/IGwoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIG4uc2V0KHUua2V5LCBlKTtcbiAgICB9KSkoaSkgOiBpO1xuICB9KSwgWyBuLCB0LCB1LCByLCBlLnBhdXNlLCBlLnJlcXVlc3RQb2xpY3ksIGUuY29udGV4dCBdKTtcbiAgdmFyIGQgPSBhKChmdW5jdGlvbihlLCB0KSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmZXRjaGluZzogITFcbiAgICAgIH07XG4gICAgfVxuICAgIHZhciByID0gbi5nZXQodS5rZXkpO1xuICAgIGlmICghcikge1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgYSA9IGYoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgciA9IGU7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgaShyKTtcbiAgICAgICAgfVxuICAgICAgfSkpKHYoKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdCAmJiAhaSB8fCAhcjtcbiAgICAgIH0pKShlKSk7XG4gICAgICBpZiAobnVsbCA9PSByICYmIHQpIHtcbiAgICAgICAgdmFyIG8gPSBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGkgPSBlO1xuICAgICAgICB9KSk7XG4gICAgICAgIG4uc2V0KHUua2V5LCBvKTtcbiAgICAgICAgdGhyb3cgbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHQgJiYgbnVsbCAhPSByICYmIFwidGhlblwiIGluIHIpIHtcbiAgICAgIHRocm93IHI7XG4gICAgfVxuICAgIHJldHVybiByIHx8IHtcbiAgICAgIGZldGNoaW5nOiAhMFxuICAgIH07XG4gIH0pLCBbIG4sIHUgXSk7XG4gIHZhciB4ID0gWyB0LCB1LCBlLnJlcXVlc3RQb2xpY3ksIGUuY29udGV4dCwgZS5wYXVzZSBdO1xuICB2YXIgaCA9IGkoKGZ1bmN0aW9uKCkge1xuICAgIHEgPSAhMDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIFsgcywgY29tcHV0ZU5leHRTdGF0ZShiLCBkKHMsIHIpKSwgeCBdO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBxID0gITE7XG4gICAgfVxuICB9KSk7XG4gIHZhciB5ID0gaFswXTtcbiAgdmFyIGcgPSBoWzFdO1xuICB2YXIgbSA9IHlbMV07XG4gIGlmIChzICE9PSB5WzBdICYmIGhhc0RlcHNDaGFuZ2VkKHlbMl0sIHgpKSB7XG4gICAgZyhbIHMsIG0gPSBjb21wdXRlTmV4dFN0YXRlKHlbMV0sIGQocywgcikpLCB4IF0pO1xuICB9XG4gIG8oKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0geVswXTtcbiAgICB2YXIgdCA9IHlbMl1bMV07XG4gICAgdmFyIHIgPSAhMTtcbiAgICBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoZSkge1xuICAgICAgciA9ICEwO1xuICAgICAgaWYgKCFxKSB7XG4gICAgICAgIGcoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgbiA9IGNvbXB1dGVOZXh0U3RhdGUodFsxXSwgZSk7XG4gICAgICAgICAgcmV0dXJuIHRbMV0gIT09IG4gPyBbIHRbMF0sIG4sIHRbMl0gXSA6IHQ7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB1ID0gZih1cGRhdGVSZXN1bHQpKHAoKGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVSZXN1bHQoe1xuICAgICAgICAgIGZldGNoaW5nOiAhMVxuICAgICAgICB9KTtcbiAgICAgIH0pKShlKSk7XG4gICAgICBpZiAoIXIpIHtcbiAgICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICBmZXRjaGluZzogITBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG4uZGlzcG9zZSh0LmtleSk7XG4gICAgICAgIHUudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVJlc3VsdCh7XG4gICAgICAgIGZldGNoaW5nOiAhMVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgWyBuLCB5WzBdLCB5WzJdWzFdIF0pO1xuICByZXR1cm4gWyBtLCBhKChmdW5jdGlvbihpKSB7XG4gICAgdmFyIGEgPSBfZXh0ZW5kcyh7fSwge1xuICAgICAgcmVxdWVzdFBvbGljeTogZS5yZXF1ZXN0UG9saWN5XG4gICAgfSwgZS5jb250ZXh0LCBpKTtcbiAgICBnKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gWyByID8gbCgoZnVuY3Rpb24oZSkge1xuICAgICAgICBuLnNldCh1LmtleSwgZSk7XG4gICAgICB9KSkodC5leGVjdXRlUXVlcnkodSwgYSkpIDogdC5leGVjdXRlUXVlcnkodSwgYSksIGVbMV0sIHggXTtcbiAgICB9KSk7XG4gIH0pLCBbIHQsIG4sIHUsIHIsIGQsIGUucmVxdWVzdFBvbGljeSwgZS5jb250ZXh0IF0pIF07XG59XG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihlLCB0KSB7XG4gIHZhciBuID0gdXNlQ2xpZW50KCk7XG4gIHZhciByID0gdXNlUmVxdWVzdChlLnF1ZXJ5LCBlLnZhcmlhYmxlcyk7XG4gIHZhciBzID0gdSh0KTtcbiAgcy5jdXJyZW50ID0gdDtcbiAgdmFyIGwgPSBjKChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIWUucGF1c2UgPyBuLmV4ZWN1dGVTdWJzY3JpcHRpb24ociwgZS5jb250ZXh0KSA6IG51bGw7XG4gIH0pLCBbIG4sIHIsIGUucGF1c2UsIGUuY29udGV4dCBdKTtcbiAgdmFyIHYgPSBbIG4sIHIsIGUuY29udGV4dCwgZS5wYXVzZSBdO1xuICB2YXIgZCA9IGkoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBbIGwsIF9leHRlbmRzKHt9LCBiLCB7XG4gICAgICBmZXRjaGluZzogISFsXG4gICAgfSksIHYgXTtcbiAgfSkpO1xuICB2YXIgeCA9IGRbMF07XG4gIHZhciBoID0gZFsxXTtcbiAgdmFyIHkgPSB4WzFdO1xuICBpZiAobCAhPT0geFswXSAmJiBoYXNEZXBzQ2hhbmdlZCh4WzJdLCB2KSkge1xuICAgIGgoWyBsLCB5ID0gY29tcHV0ZU5leHRTdGF0ZSh4WzFdLCB7XG4gICAgICBmZXRjaGluZzogISFsXG4gICAgfSksIHYgXSk7XG4gIH1cbiAgbygoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlUmVzdWx0KGUpIHtcbiAgICAgIGgoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIG4gPSBjb21wdXRlTmV4dFN0YXRlKHRbMV0sIGUpO1xuICAgICAgICBpZiAodFsxXSA9PT0gbikge1xuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmN1cnJlbnQgJiYgdFsxXS5kYXRhICE9PSBuLmRhdGEpIHtcbiAgICAgICAgICBuLmRhdGEgPSBzLmN1cnJlbnQodFsxXS5kYXRhLCBuLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbIHRbMF0sIG4sIHRbMl0gXTtcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHhbMF0pIHtcbiAgICAgIHJldHVybiBmKHVwZGF0ZVJlc3VsdCkocCgoZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICAgIH0pO1xuICAgICAgfSkpKHhbMF0pKS51bnN1YnNjcmliZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCBbIHhbMF0gXSk7XG4gIHJldHVybiBbIHksIGEoKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgdSA9IG4uZXhlY3V0ZVN1YnNjcmlwdGlvbihyLCBfZXh0ZW5kcyh7fSwgZS5jb250ZXh0LCB0KSk7XG4gICAgaCgoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFsgdSwgZVsxXSwgZVsyXSBdO1xuICAgIH0pKTtcbiAgfSksIFsgbiwgZS5jb250ZXh0LCByIF0pIF07XG59XG5cbmZ1bmN0aW9uIE11dGF0aW9uKGUpIHtcbiAgdmFyIHQgPSB1c2VNdXRhdGlvbihlLnF1ZXJ5KTtcbiAgcmV0dXJuIGUuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRbMF0sIHtcbiAgICBleGVjdXRlTXV0YXRpb246IHRbMV1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBRdWVyeShlKSB7XG4gIHZhciB0ID0gdXNlUXVlcnkoZSk7XG4gIHJldHVybiBlLmNoaWxkcmVuKF9leHRlbmRzKHt9LCB0WzBdLCB7XG4gICAgZXhlY3V0ZVF1ZXJ5OiB0WzFdXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gU3Vic2NyaXB0aW9uKGUpIHtcbiAgdmFyIHQgPSB1c2VTdWJzY3JpcHRpb24oZSwgZS5oYW5kbGVyKTtcbiAgcmV0dXJuIGUuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRbMF0sIHtcbiAgICBleGVjdXRlU3Vic2NyaXB0aW9uOiB0WzFdXG4gIH0pKTtcbn1cblxuZXhwb3J0IHsgeSBhcyBDb25zdW1lciwgeCBhcyBDb250ZXh0LCBNdXRhdGlvbiwgaCBhcyBQcm92aWRlciwgUXVlcnksIFN1YnNjcmlwdGlvbiwgdXNlQ2xpZW50LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJxbC5lcy5qcy5tYXBcbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciBhcyBlIH0gZnJvbSBcImdyYXBocWwvZXJyb3IvR3JhcGhRTEVycm9yLm1qc1wiO1xuXG5pbXBvcnQgeyBLaW5kIGFzIHIgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuaW1wb3J0IHsgcGFyc2UgYXMgdCB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3BhcnNlci5tanNcIjtcblxuaW1wb3J0IHsgcHJpbnQgYXMgbiB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXIubWpzXCI7XG5cbmltcG9ydCB7IG1ha2UgYXMgbyB9IGZyb20gXCJ3b25rYVwiO1xuXG5mdW5jdGlvbiByZWh5ZHJhdGVHcmFwaFFsRXJyb3Iocikge1xuICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygcikge1xuICAgIHJldHVybiBuZXcgZShyKTtcbiAgfSBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiByICYmIHIubWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgZShyLm1lc3NhZ2UsIHIubm9kZXMsIHIuc291cmNlLCByLnBvc2l0aW9ucywgci5wYXRoLCByLCByLmV4dGVuc2lvbnMgfHwge30pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByO1xuICB9XG59XG5cbnZhciBhID0gZnVuY3Rpb24oZSkge1xuICBmdW5jdGlvbiBDb21iaW5lZEVycm9yKHIpIHtcbiAgICB2YXIgdCA9IHIubmV0d29ya0Vycm9yO1xuICAgIHZhciBuID0gci5yZXNwb25zZTtcbiAgICB2YXIgbyA9IChyLmdyYXBoUUxFcnJvcnMgfHwgW10pLm1hcChyZWh5ZHJhdGVHcmFwaFFsRXJyb3IpO1xuICAgIHZhciBhID0gZnVuY3Rpb24gZ2VuZXJhdGVFcnJvck1lc3NhZ2UoZSwgcikge1xuICAgICAgdmFyIHQgPSBcIlwiO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICByZXR1cm4gdCA9IFwiW05ldHdvcmtdIFwiICsgZS5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgaWYgKHZvaWQgMCAhPT0gcikge1xuICAgICAgICByLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB0ICs9IFwiW0dyYXBoUUxdIFwiICsgZS5tZXNzYWdlICsgXCJcXG5cIjtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQudHJpbSgpO1xuICAgIH0odCwgbyk7XG4gICAgZS5jYWxsKHRoaXMsIGEpO1xuICAgIHRoaXMubmFtZSA9IFwiQ29tYmluZWRFcnJvclwiO1xuICAgIHRoaXMubWVzc2FnZSA9IGE7XG4gICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gbztcbiAgICB0aGlzLm5ldHdvcmtFcnJvciA9IHQ7XG4gICAgdGhpcy5yZXNwb25zZSA9IG47XG4gIH1cbiAgaWYgKGUpIHtcbiAgICBDb21iaW5lZEVycm9yLl9fcHJvdG9fXyA9IGU7XG4gIH1cbiAgKENvbWJpbmVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBDb21iaW5lZEVycm9yO1xuICBDb21iaW5lZEVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH07XG4gIHJldHVybiBDb21iaW5lZEVycm9yO1xufShFcnJvcik7XG5cbmZ1bmN0aW9uIHBoYXNoKGUsIHIpIHtcbiAgZSB8PSAwO1xuICBmb3IgKHZhciB0ID0gMCwgbiA9IDAgfCByLmxlbmd0aDsgdCA8IG47IHQrKykge1xuICAgIGUgPSAoZSA8PCA1KSArIGUgKyByLmNoYXJDb2RlQXQodCk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGhhc2goZSkge1xuICByZXR1cm4gcGhhc2goNTM4MSwgZSkgPj4+IDA7XG59XG5cbnZhciBpID0gbmV3IFNldDtcblxudmFyIHMgPSBuZXcgV2Vha01hcDtcblxuZnVuY3Rpb24gc3RyaW5naWZ5KGUpIHtcbiAgaWYgKG51bGwgPT09IGUgfHwgaS5oYXMoZSkpIHtcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIH0gZWxzZSBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlKSB8fCBcIlwiO1xuICB9IGVsc2UgaWYgKGUudG9KU09OKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeShlLnRvSlNPTigpKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgdmFyIHIgPSBcIltcIjtcbiAgICBmb3IgKHZhciB0ID0gMCwgbiA9IGUubGVuZ3RoOyB0IDwgbjsgdCsrKSB7XG4gICAgICBpZiAodCA+IDApIHtcbiAgICAgICAgciArPSBcIixcIjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gc3RyaW5naWZ5KGVbdF0pO1xuICAgICAgciArPSBvLmxlbmd0aCA+IDAgPyBvIDogXCJudWxsXCI7XG4gICAgfVxuICAgIHJldHVybiByICs9IFwiXVwiO1xuICB9XG4gIHZhciBhID0gT2JqZWN0LmtleXMoZSkuc29ydCgpO1xuICBpZiAoIWEubGVuZ3RoICYmIGUuY29uc3RydWN0b3IgJiYgZS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XG4gICAgdmFyIGYgPSBzLmdldChlKSB8fCBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbiAgICBzLnNldChlLCBmKTtcbiAgICByZXR1cm4gJ3tcIl9fa2V5XCI6XCInICsgZiArICdcIn0nO1xuICB9XG4gIGkuYWRkKGUpO1xuICB2YXIgdSA9IFwie1wiO1xuICBmb3IgKHZhciBjID0gMCwgbCA9IGEubGVuZ3RoOyBjIDwgbDsgYysrKSB7XG4gICAgdmFyIGggPSBhW2NdO1xuICAgIHZhciBwID0gc3RyaW5naWZ5KGVbaF0pO1xuICAgIGlmIChwKSB7XG4gICAgICBpZiAodS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHUgKz0gXCIsXCI7XG4gICAgICB9XG4gICAgICB1ICs9IHN0cmluZ2lmeShoKSArIFwiOlwiICsgcDtcbiAgICB9XG4gIH1cbiAgaS5kZWxldGUoZSk7XG4gIHJldHVybiB1ICs9IFwifVwiO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlWYXJpYWJsZXMoZSkge1xuICBpLmNsZWFyKCk7XG4gIHJldHVybiBzdHJpbmdpZnkoZSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeURvY3VtZW50KGUpIHtcbiAgdmFyIHIgPSAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSA/IGUubG9jICYmIGUubG9jLnNvdXJjZS5ib2R5IHx8IG4oZSkgOiBlKS5yZXBsYWNlKC8oW1xccyxdfCNbXlxcblxccl0rKSsvZywgXCIgXCIpLnRyaW0oKTtcbiAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIHtcbiAgICB2YXIgdCA9IFwiZGVmaW5pdGlvbnNcIiBpbiBlICYmIGdldE9wZXJhdGlvbk5hbWUoZSk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHIgPSBcIiMgXCIgKyB0ICsgXCJcXG5cIiArIHI7XG4gICAgfVxuICAgIGlmICghZS5sb2MpIHtcbiAgICAgIGUubG9jID0ge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiByLmxlbmd0aCxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgYm9keTogcixcbiAgICAgICAgICBuYW1lOiBcImdxbFwiLFxuICAgICAgICAgIGxvY2F0aW9uT2Zmc2V0OiB7XG4gICAgICAgICAgICBsaW5lOiAxLFxuICAgICAgICAgICAgY29sdW1uOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn1cblxudmFyIGYgPSBuZXcgTWFwO1xuXG5mdW5jdGlvbiBrZXlEb2N1bWVudChlKSB7XG4gIHZhciByO1xuICB2YXIgbjtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHtcbiAgICByID0gaGFzaChzdHJpbmdpZnlEb2N1bWVudChlKSk7XG4gICAgbiA9IGYuZ2V0KHIpIHx8IHQoZSwge1xuICAgICAgbm9Mb2NhdGlvbjogITBcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByID0gZS5fX2tleSB8fCBoYXNoKHN0cmluZ2lmeURvY3VtZW50KGUpKTtcbiAgICBuID0gZi5nZXQocikgfHwgZTtcbiAgfVxuICBpZiAoIW4ubG9jKSB7XG4gICAgc3RyaW5naWZ5RG9jdW1lbnQobik7XG4gIH1cbiAgbi5fX2tleSA9IHI7XG4gIGYuc2V0KHIsIG4pO1xuICByZXR1cm4gbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChlLCByKSB7XG4gIGlmICghcikge1xuICAgIHIgPSB7fTtcbiAgfVxuICB2YXIgdCA9IGtleURvY3VtZW50KGUpO1xuICByZXR1cm4ge1xuICAgIGtleTogcGhhc2godC5fX2tleSwgc3RyaW5naWZ5VmFyaWFibGVzKHIpKSA+Pj4gMCxcbiAgICBxdWVyeTogdCxcbiAgICB2YXJpYWJsZXM6IHJcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uTmFtZShlKSB7XG4gIGZvciAodmFyIHQgPSAwLCBuID0gZS5kZWZpbml0aW9ucy5sZW5ndGg7IHQgPCBuOyB0KyspIHtcbiAgICB2YXIgbyA9IGUuZGVmaW5pdGlvbnNbdF07XG4gICAgaWYgKG8ua2luZCA9PT0gci5PUEVSQVRJT05fREVGSU5JVElPTiAmJiBvLm5hbWUpIHtcbiAgICAgIHJldHVybiBvLm5hbWUudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9wZXJhdGlvblR5cGUoZSkge1xuICBmb3IgKHZhciB0ID0gMCwgbiA9IGUuZGVmaW5pdGlvbnMubGVuZ3RoOyB0IDwgbjsgdCsrKSB7XG4gICAgdmFyIG8gPSBlLmRlZmluaXRpb25zW3RdO1xuICAgIGlmIChvLmtpbmQgPT09IHIuT1BFUkFUSU9OX0RFRklOSVRJT04pIHtcbiAgICAgIHJldHVybiBvLm9wZXJhdGlvbjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIHJldHVybiAoX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKGUpIHtcbiAgICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbcl07XG4gICAgICBmb3IgKHZhciBuIGluIHQpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBuKSkge1xuICAgICAgICAgIGVbbl0gPSB0W25dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVzdWx0KGUsIHIsIHQpIHtcbiAgaWYgKCEoXCJkYXRhXCIgaW4gcikgJiYgIShcImVycm9yc1wiIGluIHIpIHx8IFwicGF0aFwiIGluIHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBDb250ZW50XCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uOiBlLFxuICAgIGRhdGE6IHIuZGF0YSxcbiAgICBlcnJvcjogQXJyYXkuaXNBcnJheShyLmVycm9ycykgPyBuZXcgYSh7XG4gICAgICBncmFwaFFMRXJyb3JzOiByLmVycm9ycyxcbiAgICAgIHJlc3BvbnNlOiB0XG4gICAgfSkgOiB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogXCJvYmplY3RcIiA9PSB0eXBlb2Ygci5leHRlbnNpb25zICYmIHIuZXh0ZW5zaW9ucyB8fCB2b2lkIDAsXG4gICAgaGFzTmV4dDogISFyLmhhc05leHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VSZXN1bHRQYXRjaChlLCByLCB0KSB7XG4gIHZhciBuID0gX2V4dGVuZHMoe30sIGUpO1xuICBuLmhhc05leHQgPSAhIXIuaGFzTmV4dDtcbiAgaWYgKCEoXCJwYXRoXCIgaW4gcikpIHtcbiAgICBpZiAoXCJkYXRhXCIgaW4gcikge1xuICAgICAgbi5kYXRhID0gci5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShyLmVycm9ycykpIHtcbiAgICBuLmVycm9yID0gbmV3IGEoe1xuICAgICAgZ3JhcGhRTEVycm9yczogbi5lcnJvciA/IG4uZXJyb3IuZ3JhcGhRTEVycm9ycy5jb25jYXQoci5lcnJvcnMpIDogci5lcnJvcnMsXG4gICAgICByZXNwb25zZTogdFxuICAgIH0pO1xuICB9XG4gIHZhciBvID0gbi5kYXRhID0gX2V4dGVuZHMoe30sIG4uZGF0YSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHM7XG4gIHdoaWxlIChpIDwgci5wYXRoLmxlbmd0aCkge1xuICAgIG8gPSBvW3MgPSByLnBhdGhbaSsrXV0gPSBBcnJheS5pc0FycmF5KG9bc10pID8gW10uY29uY2F0KG9bc10pIDogX2V4dGVuZHMoe30sIG9bc10pO1xuICB9XG4gIF9leHRlbmRzKG8sIHIuZGF0YSk7XG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBtYWtlRXJyb3JSZXN1bHQoZSwgciwgdCkge1xuICByZXR1cm4ge1xuICAgIG9wZXJhdGlvbjogZSxcbiAgICBkYXRhOiB2b2lkIDAsXG4gICAgZXJyb3I6IG5ldyBhKHtcbiAgICAgIG5ldHdvcmtFcnJvcjogcixcbiAgICAgIHJlc3BvbnNlOiB0XG4gICAgfSksXG4gICAgZXh0ZW5zaW9uczogdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZUdldChlKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgPT09IGUua2luZCAmJiAhIWUuY29udGV4dC5wcmVmZXJHZXRNZXRob2Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaEJvZHkoZSkge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBuKGUucXVlcnkpLFxuICAgIG9wZXJhdGlvbk5hbWU6IGdldE9wZXJhdGlvbk5hbWUoZS5xdWVyeSksXG4gICAgdmFyaWFibGVzOiBlLnZhcmlhYmxlcyB8fCB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaFVSTChlLCByKSB7XG4gIHZhciB0ID0gc2hvdWxkVXNlR2V0KGUpO1xuICB2YXIgbiA9IGUuY29udGV4dC51cmw7XG4gIGlmICghdCB8fCAhcikge1xuICAgIHJldHVybiBuO1xuICB9XG4gIHZhciBvID0gW107XG4gIGlmIChyLm9wZXJhdGlvbk5hbWUpIHtcbiAgICBvLnB1c2goXCJvcGVyYXRpb25OYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHIub3BlcmF0aW9uTmFtZSkpO1xuICB9XG4gIGlmIChyLnF1ZXJ5KSB7XG4gICAgby5wdXNoKFwicXVlcnk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoci5xdWVyeS5yZXBsYWNlKC8jW15cXG5cXHJdKy9nLCBcIiBcIikudHJpbSgpKSk7XG4gIH1cbiAgaWYgKHIudmFyaWFibGVzKSB7XG4gICAgby5wdXNoKFwidmFyaWFibGVzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVZhcmlhYmxlcyhyLnZhcmlhYmxlcykpKTtcbiAgfVxuICBpZiAoci5leHRlbnNpb25zKSB7XG4gICAgby5wdXNoKFwiZXh0ZW5zaW9ucz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlWYXJpYWJsZXMoci5leHRlbnNpb25zKSkpO1xuICB9XG4gIHJldHVybiBuICsgXCI/XCIgKyBvLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlRmV0Y2hPcHRpb25zKGUsIHIpIHtcbiAgdmFyIHQgPSBzaG91bGRVc2VHZXQoZSk7XG4gIHZhciBuID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNvbnRleHQuZmV0Y2hPcHRpb25zID8gZS5jb250ZXh0LmZldGNoT3B0aW9ucygpIDogZS5jb250ZXh0LmZldGNoT3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBuLCB7XG4gICAgYm9keTogIXQgJiYgciA/IEpTT04uc3RyaW5naWZ5KHIpIDogdm9pZCAwLFxuICAgIG1ldGhvZDogdCA/IFwiR0VUXCIgOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB0ID8gbi5oZWFkZXJzIDogX2V4dGVuZHMoe30sIHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSwgbi5oZWFkZXJzKVxuICB9KTtcbn1cblxudmFyIHUgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciA6IG51bGw7XG5cbnZhciBjID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgVGV4dERlY29kZXIgPyBuZXcgVGV4dERlY29kZXIgOiBudWxsO1xuXG52YXIgbCA9IC9jb250ZW50LXR5cGU6W15cXHJcXG5dKmFwcGxpY2F0aW9uXFwvanNvbi9pO1xuXG52YXIgaCA9IC9ib3VuZGFyeT1cIj8oW149XCI7XSspXCI/L2k7XG5cbmZ1bmN0aW9uIGV4ZWN1dGVJbmNyZW1lbnRhbEZldGNoKGUsIHIsIHQpIHtcbiAgdmFyIG4gPSB0LmhlYWRlcnMgJiYgdC5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSB8fCBcIlwiO1xuICBpZiAoIS9tdWx0aXBhcnRcXC9taXhlZC9pLnRlc3QobikpIHtcbiAgICByZXR1cm4gdC5qc29uKCkudGhlbigoZnVuY3Rpb24obikge1xuICAgICAgZShtYWtlUmVzdWx0KHIsIG4sIHQpKTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIG8gPSBcIi0tLVwiO1xuICB2YXIgYSA9IG4ubWF0Y2goaCk7XG4gIGlmIChhKSB7XG4gICAgbyA9IFwiLS1cIiArIGFbMV07XG4gIH1cbiAgdmFyIGk7XG4gIHZhciBjYW5jZWwgPSBmdW5jdGlvbigpIHt9O1xuICBpZiAodSAmJiB0W3VdKSB7XG4gICAgdmFyIHMgPSB0W3VdKCk7XG4gICAgaSA9IHMubmV4dC5iaW5kKHMpO1xuICB9IGVsc2UgaWYgKFwiYm9keVwiIGluIHQgJiYgdC5ib2R5KSB7XG4gICAgdmFyIGYgPSB0LmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY2FuY2VsID0gZi5jYW5jZWwuYmluZChmKTtcbiAgICBpID0gZi5yZWFkLmJpbmQoZik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN0cmVhbWluZyByZXF1ZXN0cyB1bnN1cHBvcnRlZFwiKTtcbiAgfVxuICB2YXIgcCA9IFwiXCI7XG4gIHZhciBkID0gITA7XG4gIHZhciB2ID0gbnVsbDtcbiAgdmFyIG0gPSBudWxsO1xuICByZXR1cm4gaSgpLnRoZW4oKGZ1bmN0aW9uIG5leHQobikge1xuICAgIGlmICghbi5kb25lKSB7XG4gICAgICB2YXIgYSA9IGZ1bmN0aW9uIHRvU3RyaW5nKGUpIHtcbiAgICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIoZSkgPyBlLnRvU3RyaW5nKCkgOiBjLmRlY29kZShlKTtcbiAgICAgIH0obi52YWx1ZSk7XG4gICAgICB2YXIgcyA9IGEuaW5kZXhPZihvKTtcbiAgICAgIGlmIChzID4gLTEpIHtcbiAgICAgICAgcyArPSBwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMgPSBwLmluZGV4T2Yobyk7XG4gICAgICB9XG4gICAgICBwICs9IGE7XG4gICAgICB3aGlsZSAocyA+IC0xKSB7XG4gICAgICAgIHZhciBmID0gcC5zbGljZSgwLCBzKTtcbiAgICAgICAgdmFyIHUgPSBwLnNsaWNlKHMgKyBvLmxlbmd0aCk7XG4gICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgZCA9ICExO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBoID0gZi5pbmRleE9mKFwiXFxyXFxuXFxyXFxuXCIpICsgNDtcbiAgICAgICAgICB2YXIgZyA9IGYuc2xpY2UoMCwgaCk7XG4gICAgICAgICAgdmFyIHkgPSBmLnNsaWNlKGgsIGYubGFzdEluZGV4T2YoXCJcXHJcXG5cIikpO1xuICAgICAgICAgIHZhciB4ID0gdm9pZCAwO1xuICAgICAgICAgIGlmIChsLnRlc3QoZykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHggPSBKU09OLnBhcnNlKHkpO1xuICAgICAgICAgICAgICB2ID0gbSA9IG0gPyBtZXJnZVJlc3VsdFBhdGNoKG0sIHgsIHQpIDogbWFrZVJlc3VsdChyLCB4LCB0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcIi0tXCIgPT09IHUuc2xpY2UoMCwgMikgfHwgeCAmJiAheC5oYXNOZXh0KSB7XG4gICAgICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUobWFrZVJlc3VsdChyLCB7fSwgdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHMgPSAocCA9IHUpLmluZGV4T2Yobyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2KSB7XG4gICAgICBlKHYpO1xuICAgICAgdiA9IG51bGw7XG4gICAgfVxuICAgIGlmICghbi5kb25lICYmICghbSB8fCBtLmhhc05leHQpKSB7XG4gICAgICByZXR1cm4gaSgpLnRoZW4obmV4dCk7XG4gICAgfVxuICB9KSkuZmluYWxseShjYW5jZWwpO1xufVxuXG5mdW5jdGlvbiBtYWtlRmV0Y2hTb3VyY2UoZSwgciwgdCkge1xuICB2YXIgbiA9IFwibWFudWFsXCIgPT09IHQucmVkaXJlY3QgPyA0MDAgOiAzMDA7XG4gIHZhciBhID0gZS5jb250ZXh0LmZldGNoO1xuICByZXR1cm4gbygoZnVuY3Rpb24obykge1xuICAgIHZhciBpID0gby5uZXh0O1xuICAgIHZhciBzID0gby5jb21wbGV0ZTtcbiAgICB2YXIgZiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEFib3J0Q29udHJvbGxlciA/IG5ldyBBYm9ydENvbnRyb2xsZXIgOiBudWxsO1xuICAgIGlmIChmKSB7XG4gICAgICB0LnNpZ25hbCA9IGYuc2lnbmFsO1xuICAgIH1cbiAgICB2YXIgdSA9ICExO1xuICAgIHZhciBjID0gITE7XG4gICAgdmFyIGw7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gKGEgfHwgZmV0Y2gpKHIsIHQpO1xuICAgIH0pKS50aGVuKChmdW5jdGlvbihyKSB7XG4gICAgICBpZiAoIXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYyA9IChsID0gcikuc3RhdHVzIDwgMjAwIHx8IGwuc3RhdHVzID49IG47XG4gICAgICByZXR1cm4gZXhlY3V0ZUluY3JlbWVudGFsRmV0Y2goaSwgZSwgbCk7XG4gICAgfSkpLnRoZW4ocykuY2F0Y2goKGZ1bmN0aW9uKHIpIHtcbiAgICAgIGlmIChcIkFib3J0RXJyb3JcIiAhPT0gci5uYW1lKSB7XG4gICAgICAgIHZhciB0ID0gbWFrZUVycm9yUmVzdWx0KGUsIGMgPyBuZXcgRXJyb3IobC5zdGF0dXNUZXh0KSA6IHIsIGwpO1xuICAgICAgICBpKHQpO1xuICAgICAgICBzKCk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHUgPSAhMDtcbiAgICAgIGlmIChmKSB7XG4gICAgICAgIGYuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSk7XG59XG5cbmV4cG9ydCB7IGEgYXMgQywgX2V4dGVuZHMgYXMgXywgbWFrZUVycm9yUmVzdWx0IGFzIGEsIG1ha2VGZXRjaEJvZHkgYXMgYiwgbWFrZUZldGNoVVJMIGFzIGMsIG1ha2VGZXRjaE9wdGlvbnMgYXMgZCwgbWFrZUZldGNoU291cmNlIGFzIGUsIGNyZWF0ZVJlcXVlc3QgYXMgZiwgZ2V0T3BlcmF0aW9uVHlwZSBhcyBnLCBzdHJpbmdpZnlWYXJpYWJsZXMgYXMgaCwgbWVyZ2VSZXN1bHRQYXRjaCBhcyBpLCBnZXRPcGVyYXRpb25OYW1lIGFzIGosIGtleURvY3VtZW50IGFzIGssIG1ha2VSZXN1bHQgYXMgbSwgc3RyaW5naWZ5RG9jdW1lbnQgYXMgcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9MThlZTBkNWMubWpzLm1hcFxuIiwiaW1wb3J0IHsgdmlzaXQgYXMgZSB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3Zpc2l0b3IubWpzXCI7XG5cbmltcG9ydCB7IEtpbmQgYXMgciB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qc1wiO1xuXG5pbXBvcnQgeyBwcmludCBhcyBuIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvcHJpbnRlci5tanNcIjtcblxuaW1wb3J0IHsgayBhcyB0LCBfIGFzIG8sIHMgYXMgdSwgQyBhcyBjLCBtIGFzIHMsIGEgYXMgcCwgYiBhcyBsLCBjIGFzIGQsIGQgYXMgdiwgZSBhcyB5LCBnIGFzIGssIGYgYXMgZyB9IGZyb20gXCIuLzE4ZWUwZDVjLm1qc1wiO1xuXG5leHBvcnQgeyBDIGFzIENvbWJpbmVkRXJyb3IsIGYgYXMgY3JlYXRlUmVxdWVzdCwgaiBhcyBnZXRPcGVyYXRpb25OYW1lLCBhIGFzIG1ha2VFcnJvclJlc3VsdCwgbSBhcyBtYWtlUmVzdWx0LCBpIGFzIG1lcmdlUmVzdWx0UGF0Y2gsIGggYXMgc3RyaW5naWZ5VmFyaWFibGVzIH0gZnJvbSBcIi4vMThlZTBkNWMubWpzXCI7XG5cbmltcG9ydCB7IHRvUHJvbWlzZSBhcyB4LCB0YWtlIGFzIEUsIGZpbHRlciBhcyBPLCBzaGFyZSBhcyBiLCBtYXAgYXMgdywgdGFwIGFzIHEsIG1lcmdlIGFzIE4sIG1lcmdlTWFwIGFzIEQsIHRha2VVbnRpbCBhcyBfLCBtYWtlIGFzIFMsIG9uUHVzaCBhcyBSLCBtYWtlU3ViamVjdCBhcyBULCBzdWJzY3JpYmUgYXMgUCwgb25FbmQgYXMgTSwgb25TdGFydCBhcyBBLCBwdWJsaXNoIGFzIFYsIHN3aXRjaE1hcCBhcyBJLCBmcm9tVmFsdWUgYXMgRiB9IGZyb20gXCJ3b25rYVwiO1xuXG5mdW5jdGlvbiBjb2xsZWN0VHlwZXMoZSwgcikge1xuICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgY29sbGVjdFR5cGVzKGVbbl0sIHIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIG51bGwgIT09IGUpIHtcbiAgICBmb3IgKHZhciB0IGluIGUpIHtcbiAgICAgIGlmIChcIl9fdHlwZW5hbWVcIiA9PT0gdCAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBlW3RdKSB7XG4gICAgICAgIHJbZVt0XV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdFR5cGVzKGVbdF0sIHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gY29sbGVjdFR5cGVzRnJvbVJlc3BvbnNlKGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3RUeXBlcyhlLCB7fSkpO1xufVxuXG52YXIgZm9ybWF0Tm9kZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuc2VsZWN0aW9uU2V0ICYmICFlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLnNvbWUoKGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZS5raW5kID09PSByLkZJRUxEICYmIFwiX190eXBlbmFtZVwiID09PSBlLm5hbWUudmFsdWUgJiYgIWUuYWxpYXM7XG4gIH0pKSkge1xuICAgIHJldHVybiBvKHt9LCBlLCB7XG4gICAgICBzZWxlY3Rpb25TZXQ6IG8oe30sIGUuc2VsZWN0aW9uU2V0LCB7XG4gICAgICAgIHNlbGVjdGlvbnM6IGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuY29uY2F0KFsge1xuICAgICAgICAgIGtpbmQ6IHIuRklFTEQsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAga2luZDogci5OQU1FLFxuICAgICAgICAgICAgdmFsdWU6IFwiX190eXBlbmFtZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9IF0pXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59O1xuXG52YXIgUSA9IG5ldyBNYXA7XG5cbmZ1bmN0aW9uIGZvcm1hdERvY3VtZW50KHIpIHtcbiAgdmFyIG4gPSB0KHIpO1xuICB2YXIgYSA9IFEuZ2V0KG4uX19rZXkpO1xuICBpZiAoIWEpIHtcbiAgICBhID0gZShuLCB7XG4gICAgICBGaWVsZDogZm9ybWF0Tm9kZSxcbiAgICAgIElubGluZUZyYWdtZW50OiBmb3JtYXROb2RlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiX19rZXlcIiwge1xuICAgICAgdmFsdWU6IG4uX19rZXksXG4gICAgICBlbnVtZXJhYmxlOiAhMVxuICAgIH0pO1xuICAgIFEuc2V0KG4uX19rZXksIGEpO1xuICB9XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBtYXNrVHlwZW5hbWUoZSkge1xuICBpZiAoIWUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhlKS5yZWR1Y2UoKGZ1bmN0aW9uKHIsIG4pIHtcbiAgICB2YXIgdCA9IGVbbl07XG4gICAgaWYgKFwiX190eXBlbmFtZVwiID09PSBuKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJfX3R5cGVuYW1lXCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHZhbHVlOiB0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcbiAgICAgIHJbbl0gPSB0Lm1hcChtYXNrVHlwZW5hbWUpO1xuICAgIH0gZWxzZSBpZiAodCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0ICYmIFwiX190eXBlbmFtZVwiIGluIHQpIHtcbiAgICAgIHJbbl0gPSBtYXNrVHlwZW5hbWUodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJbbl0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfSksIHt9KTtcbn1cblxuZnVuY3Rpb24gd2l0aFByb21pc2UoZSkge1xuICBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4KEUoMSkoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuICFlLnN0YWxlICYmICFlLmhhc05leHQ7XG4gICAgfSkpKGUpKSk7XG4gIH07XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBtYWtlT3BlcmF0aW9uKGUsIHIsIG4pIHtcbiAgaWYgKCFuKSB7XG4gICAgbiA9IHIuY29udGV4dDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogci5rZXksXG4gICAgcXVlcnk6IHIucXVlcnksXG4gICAgdmFyaWFibGVzOiByLnZhcmlhYmxlcyxcbiAgICBraW5kOiBlLFxuICAgIGNvbnRleHQ6IG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTWV0YWRhdGEoZSwgcikge1xuICByZXR1cm4gbWFrZU9wZXJhdGlvbihlLmtpbmQsIGUsIG8oe30sIGUuY29udGV4dCwge1xuICAgIG1ldGE6IG8oe30sIGUuY29udGV4dC5tZXRhLCByKVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhcHBseURlZmluaXRpb25zKGUsIG4sIHQpIHtcbiAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgaWYgKHRbYV0ua2luZCA9PT0gci5GUkFHTUVOVF9ERUZJTklUSU9OKSB7XG4gICAgICB2YXIgbyA9IHRbYV0ubmFtZS52YWx1ZTtcbiAgICAgIHZhciBpID0gdSh0W2FdKTtcbiAgICAgIGlmICghZS5oYXMobykpIHtcbiAgICAgICAgZS5zZXQobywgaSk7XG4gICAgICAgIG4ucHVzaCh0W2FdKTtcbiAgICAgIH0gZWxzZSBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGUuZ2V0KG8pICE9PSBpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltXQVJOSU5HOiBEdXBsaWNhdGUgRnJhZ21lbnRdIEEgZnJhZ21lbnQgd2l0aCBuYW1lIGBcIiArIG8gKyBcImAgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBkb2N1bWVudC5cXG5XaGlsZSBmcmFnbWVudCBuYW1lcyBtYXkgbm90IGJlIHVuaXF1ZSBhY3Jvc3MgeW91ciBzb3VyY2UsIGVhY2ggbmFtZSBtdXN0IGJlIHVuaXF1ZSBwZXIgZG9jdW1lbnQuXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuLnB1c2godFthXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdxbCgpIHtcbiAgdmFyIGUgPSBhcmd1bWVudHM7XG4gIHZhciBuID0gbmV3IE1hcDtcbiAgdmFyIGEgPSBbXTtcbiAgdmFyIG8gPSBbXTtcbiAgdmFyIGkgPSBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF1bMF0gOiBhcmd1bWVudHNbMF0gfHwgXCJcIjtcbiAgZm9yICh2YXIgdSA9IDE7IHUgPCBhcmd1bWVudHMubGVuZ3RoOyB1KyspIHtcbiAgICB2YXIgYyA9IGVbdV07XG4gICAgaWYgKGMgJiYgYy5kZWZpbml0aW9ucykge1xuICAgICAgby5wdXNoLmFwcGx5KG8sIGMuZGVmaW5pdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpICs9IGM7XG4gICAgfVxuICAgIGkgKz0gZVswXVt1XTtcbiAgfVxuICBhcHBseURlZmluaXRpb25zKG4sIGEsIHQoaSkuZGVmaW5pdGlvbnMpO1xuICBhcHBseURlZmluaXRpb25zKG4sIGEsIG8pO1xuICByZXR1cm4gdCh7XG4gICAga2luZDogci5ET0NVTUVOVCxcbiAgICBkZWZpbml0aW9uczogYVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2tpcChlKSB7XG4gIHZhciByID0gZS5raW5kO1xuICByZXR1cm4gXCJtdXRhdGlvblwiICE9PSByICYmIFwicXVlcnlcIiAhPT0gcjtcbn1cblxuZnVuY3Rpb24gY2FjaGVFeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5mb3J3YXJkO1xuICB2YXIgbiA9IGUuY2xpZW50O1xuICB2YXIgdCA9IGUuZGlzcGF0Y2hEZWJ1ZztcbiAgdmFyIGEgPSBuZXcgTWFwO1xuICB2YXIgaSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZ1bmN0aW9uIG1hcFR5cGVOYW1lcyhlKSB7XG4gICAgdmFyIHIgPSBtYWtlT3BlcmF0aW9uKGUua2luZCwgZSk7XG4gICAgci5xdWVyeSA9IGZvcm1hdERvY3VtZW50KGUucXVlcnkpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGZ1bmN0aW9uIGlzT3BlcmF0aW9uQ2FjaGVkKGUpIHtcbiAgICB2YXIgciA9IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IGUua2luZCAmJiBcIm5ldHdvcmstb25seVwiICE9PSByICYmIChcImNhY2hlLW9ubHlcIiA9PT0gciB8fCBhLmhhcyhlLmtleSkpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHUgPSBiKGUpO1xuICAgIHZhciBjID0gdygoZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHIgPSBhLmdldChlLmtleSk7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgdChvKHt9LCB7XG4gICAgICAgIG9wZXJhdGlvbjogZVxuICAgICAgfSwgciA/IHtcbiAgICAgICAgdHlwZTogXCJjYWNoZUhpdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIlRoZSByZXN1bHQgd2FzIHN1Y2Nlc3NmdWxseSByZXRyaWVkIGZyb20gdGhlIGNhY2hlXCJcbiAgICAgIH0gOiB7XG4gICAgICAgIHR5cGU6IFwiY2FjaGVNaXNzXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVGhlIHJlc3VsdCBjb3VsZCBub3QgYmUgcmV0cmlldmVkIGZyb20gdGhlIGNhY2hlXCJcbiAgICAgIH0pKTtcbiAgICAgIHZhciBpID0gbyh7fSwgciwge1xuICAgICAgICBvcGVyYXRpb246IGFkZE1ldGFkYXRhKGUsIHtcbiAgICAgICAgICBjYWNoZU91dGNvbWU6IHIgPyBcImhpdFwiIDogXCJtaXNzXCJcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgaWYgKFwiY2FjaGUtYW5kLW5ldHdvcmtcIiA9PT0gZS5jb250ZXh0LnJlcXVlc3RQb2xpY3kpIHtcbiAgICAgICAgaS5zdGFsZSA9ICEwO1xuICAgICAgICByZWV4ZWN1dGVPcGVyYXRpb24obiwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9KSkoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuICFzaG91bGRTa2lwKGUpICYmIGlzT3BlcmF0aW9uQ2FjaGVkKGUpO1xuICAgIH0pKSh1KSk7XG4gICAgdmFyIHMgPSBxKChmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgciA9IGUub3BlcmF0aW9uO1xuICAgICAgaWYgKCFyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gY29sbGVjdFR5cGVzRnJvbVJlc3BvbnNlKGUuZGF0YSkuY29uY2F0KHIuY29udGV4dC5hZGRpdGlvbmFsVHlwZW5hbWVzIHx8IFtdKTtcbiAgICAgIGlmIChcIm11dGF0aW9uXCIgPT09IGUub3BlcmF0aW9uLmtpbmQpIHtcbiAgICAgICAgdmFyIHUgPSBuZXcgU2V0O1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgdCh7XG4gICAgICAgICAgdHlwZTogXCJjYWNoZUludmFsaWRhdGlvblwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGZvbGxvd2luZyB0eXBlbmFtZXMgaGF2ZSBiZWVuIGludmFsaWRhdGVkOiBcIiArIG8sXG4gICAgICAgICAgb3BlcmF0aW9uOiByLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGVuYW1lczogbyxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IFwiY2FjaGVFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IG8ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICB2YXIgcyA9IG9bY107XG4gICAgICAgICAgdmFyIGYgPSBpW3NdIHx8IChpW3NdID0gbmV3IFNldCk7XG4gICAgICAgICAgZi5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB1LmFkZChlKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgZi5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHUuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChhLmhhcyhlKSkge1xuICAgICAgICAgICAgciA9IGEuZ2V0KGUpLm9wZXJhdGlvbjtcbiAgICAgICAgICAgIGEuZGVsZXRlKGUpO1xuICAgICAgICAgICAgcmVleGVjdXRlT3BlcmF0aW9uKG4sIHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChcInF1ZXJ5XCIgPT09IHIua2luZCAmJiBlLmRhdGEpIHtcbiAgICAgICAgYS5zZXQoci5rZXksIGUpO1xuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG8ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICB2YXIgbCA9IG9bcF07XG4gICAgICAgICAgKGlbbF0gfHwgKGlbbF0gPSBuZXcgU2V0KSkuYWRkKHIua2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKShyKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBcInF1ZXJ5XCIgIT09IGUua2luZCB8fCBcImNhY2hlLW9ubHlcIiAhPT0gZS5jb250ZXh0LnJlcXVlc3RQb2xpY3k7XG4gICAgfSkpKHcoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBhZGRNZXRhZGF0YShlLCB7XG4gICAgICAgIGNhY2hlT3V0Y29tZTogXCJtaXNzXCJcbiAgICAgIH0pO1xuICAgIH0pKShOKFsgdyhtYXBUeXBlTmFtZXMpKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiAhc2hvdWxkU2tpcChlKSAmJiAhaXNPcGVyYXRpb25DYWNoZWQoZSk7XG4gICAgfSkpKHUpKSwgTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHNob3VsZFNraXAoZSk7XG4gICAgfSkpKHUpIF0pKSkpKTtcbiAgICByZXR1cm4gTihbIGMsIHMgXSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZXhlY3V0ZU9wZXJhdGlvbihlLCByKSB7XG4gIHJldHVybiBlLnJlZXhlY3V0ZU9wZXJhdGlvbihtYWtlT3BlcmF0aW9uKHIua2luZCwgciwgbyh7fSwgci5jb250ZXh0LCB7XG4gICAgcmVxdWVzdFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIlxuICB9KSkpO1xufVxuXG52YXIgRyA9IG5ldyBTZXQ7XG5cbmZ1bmN0aW9uIHNzckV4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSAhKCFlIHx8ICFlLnN0YWxlV2hpbGVSZXZhbGlkYXRlKTtcbiAgdmFyIG4gPSAhKCFlIHx8ICFlLmluY2x1ZGVFeHRlbnNpb25zKTtcbiAgdmFyIHQgPSB7fTtcbiAgdmFyIGEgPSBbXTtcbiAgZnVuY3Rpb24gaW52YWxpZGF0ZShlKSB7XG4gICAgYS5wdXNoKGUub3BlcmF0aW9uLmtleSk7XG4gICAgaWYgKDEgPT09IGEubGVuZ3RoKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHdoaWxlIChlID0gYS5zaGlmdCgpKSB7XG4gICAgICAgICAgdFtlXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgdmFyIHNzciA9IGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgbyA9IGEuY2xpZW50O1xuICAgIHZhciBpID0gYS5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgdSA9IGUgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGUuaXNDbGllbnQgPyAhIWUuaXNDbGllbnQgOiAhby5zdXNwZW5zZTtcbiAgICAgIHZhciBzID0gYihhKTtcbiAgICAgIHZhciBmID0gaShPKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiAhdFtlLmtleV0gfHwgISF0W2Uua2V5XS5oYXNOZXh0O1xuICAgICAgfSkpKHMpKTtcbiAgICAgIHZhciBwID0gdygoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgYSA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplUmVzdWx0KGUsIHIsIG4pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICAgICAgZGF0YTogci5kYXRhID8gSlNPTi5wYXJzZShyLmRhdGEpIDogdm9pZCAwLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogbiAmJiByLmV4dGVuc2lvbnMgPyBKU09OLnBhcnNlKHIuZXh0ZW5zaW9ucykgOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogci5lcnJvciA/IG5ldyBjKHtcbiAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiByLmVycm9yLm5ldHdvcmtFcnJvciA/IG5ldyBFcnJvcihyLmVycm9yLm5ldHdvcmtFcnJvcikgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHIuZXJyb3IuZ3JhcGhRTEVycm9yc1xuICAgICAgICAgICAgfSkgOiB2b2lkIDAsXG4gICAgICAgICAgICBoYXNOZXh0OiByLmhhc05leHRcbiAgICAgICAgICB9O1xuICAgICAgICB9KGUsIHRbZS5rZXldLCBuKTtcbiAgICAgICAgaWYgKHIgJiYgIUcuaGFzKGUua2V5KSkge1xuICAgICAgICAgIGEuc3RhbGUgPSAhMDtcbiAgICAgICAgICBHLmFkZChlLmtleSk7XG4gICAgICAgICAgcmVleGVjdXRlT3BlcmF0aW9uKG8sIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSkpKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuICEhdFtlLmtleV07XG4gICAgICB9KSkocykpO1xuICAgICAgaWYgKCF1KSB7XG4gICAgICAgIGYgPSBxKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHIgPSBlLm9wZXJhdGlvbjtcbiAgICAgICAgICBpZiAoXCJtdXRhdGlvblwiICE9PSByLmtpbmQpIHtcbiAgICAgICAgICAgIHZhciBhID0gZnVuY3Rpb24gc2VyaWFsaXplUmVzdWx0KGUsIHIpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSBlLmhhc05leHQ7XG4gICAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhO1xuICAgICAgICAgICAgICB2YXIgYSA9IGUuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgdmFyIG8gPSBlLmVycm9yO1xuICAgICAgICAgICAgICB2YXIgaSA9IHt9O1xuICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgaS5kYXRhID0gSlNPTi5zdHJpbmdpZnkodCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHIgJiYgdm9pZCAwICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgaS5leHRlbnNpb25zID0gSlNPTi5zdHJpbmdpZnkoYSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBpLmhhc05leHQgPSAhMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIGkuZXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBvLmdyYXBoUUxFcnJvcnMubWFwKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5wYXRoICYmICFlLmV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBlLmV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKG8ubmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICBpLmVycm9yLm5ldHdvcmtFcnJvciA9IFwiXCIgKyBvLm5ldHdvcmtFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9KGUsIG4pO1xuICAgICAgICAgICAgdFtyLmtleV0gPSBhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpKGYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcCA9IHEoaW52YWxpZGF0ZSkocCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTihbIGYsIHAgXSk7XG4gICAgfTtcbiAgfTtcbiAgc3NyLnJlc3RvcmVEYXRhID0gZnVuY3Rpb24oZSkge1xuICAgIGZvciAodmFyIHIgaW4gZSkge1xuICAgICAgaWYgKG51bGwgIT09IHRbcl0pIHtcbiAgICAgICAgdFtyXSA9IGVbcl07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzc3IuZXh0cmFjdERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZSA9IHt9O1xuICAgIGZvciAodmFyIHIgaW4gdCkge1xuICAgICAgaWYgKG51bGwgIT0gdFtyXSkge1xuICAgICAgICBlW3JdID0gdFtyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH07XG4gIGlmIChlICYmIGUuaW5pdGlhbFN0YXRlKSB7XG4gICAgc3NyLnJlc3RvcmVEYXRhKGUuaW5pdGlhbFN0YXRlKTtcbiAgfVxuICByZXR1cm4gc3NyO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpcHRpb25FeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5mb3J3YXJkU3Vic2NyaXB0aW9uO1xuICB2YXIgdCA9IGUuZW5hYmxlQWxsT3BlcmF0aW9ucztcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgYSA9IGUuY2xpZW50O1xuICAgIHZhciBpID0gZS5mb3J3YXJkO1xuICAgIGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uT3BlcmF0aW9uKGUpIHtcbiAgICAgIHZhciByID0gZS5raW5kO1xuICAgICAgcmV0dXJuIFwic3Vic2NyaXB0aW9uXCIgPT09IHIgfHwgISF0ICYmIChcInF1ZXJ5XCIgPT09IHIgfHwgXCJtdXRhdGlvblwiID09PSByKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gYihlKTtcbiAgICAgIHZhciB1ID0gRCgoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgaSA9IGUua2V5O1xuICAgICAgICB2YXIgdSA9IE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gXCJ0ZWFyZG93blwiID09PSBlLmtpbmQgJiYgZS5rZXkgPT09IGk7XG4gICAgICAgIH0pKSh0KTtcbiAgICAgICAgcmV0dXJuIF8odSkoZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uU291cmNlKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHIoe1xuICAgICAgICAgICAga2V5OiBlLmtleS50b1N0cmluZygzNiksXG4gICAgICAgICAgICBxdWVyeTogbihlLnF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogZS52YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiBvKHt9LCBlLmNvbnRleHQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIFMoKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHZhciBuID0gci5uZXh0O1xuICAgICAgICAgICAgdmFyIG8gPSByLmNvbXBsZXRlO1xuICAgICAgICAgICAgdmFyIGkgPSAhMTtcbiAgICAgICAgICAgIHZhciB1O1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHUgPSB0LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ocyhlLCByKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ocChlLCByKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdWJzY3JpcHRpb25cIiA9PT0gZS5raW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYS5yZWV4ZWN1dGVPcGVyYXRpb24obWFrZU9wZXJhdGlvbihcInRlYXJkb3duXCIsIGUsIGUuY29udGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG8oKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpID0gITA7XG4gICAgICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICAgICAgdS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfShlKSk7XG4gICAgICB9KSkoTyhpc1N1YnNjcmlwdGlvbk9wZXJhdGlvbikodCkpO1xuICAgICAgdmFyIGMgPSBpKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuICFpc1N1YnNjcmlwdGlvbk9wZXJhdGlvbihlKTtcbiAgICAgIH0pKSh0KSk7XG4gICAgICByZXR1cm4gTihbIHUsIGMgXSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVidWdFeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5mb3J3YXJkO1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgPT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiByKGUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBxKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIltFeGNoYW5nZSBkZWJ1Z106IENvbXBsZXRlZCBvcGVyYXRpb246IFwiLCBlKTtcbiAgICAgIH0pKShyKHEoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiW0V4Y2hhbmdlIGRlYnVnXTogSW5jb21pbmcgb3BlcmF0aW9uOiBcIiwgZSk7XG4gICAgICB9KSkoZSkpKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZHVwRXhjaGFuZ2UoZSkge1xuICB2YXIgciA9IGUuZm9yd2FyZDtcbiAgdmFyIG4gPSBlLmRpc3BhdGNoRGVidWc7XG4gIHZhciB0ID0gbmV3IFNldDtcbiAgZnVuY3Rpb24gZmlsdGVySW5jb21pbmdPcGVyYXRpb24oZSkge1xuICAgIHZhciByID0gZS5rZXk7XG4gICAgdmFyIGEgPSBlLmtpbmQ7XG4gICAgaWYgKFwidGVhcmRvd25cIiA9PT0gYSkge1xuICAgICAgdC5kZWxldGUocik7XG4gICAgICByZXR1cm4gITA7XG4gICAgfVxuICAgIGlmIChcInF1ZXJ5XCIgIT09IGEgJiYgXCJzdWJzY3JpcHRpb25cIiAhPT0gYSkge1xuICAgICAgcmV0dXJuICEwO1xuICAgIH1cbiAgICB2YXIgbyA9IHQuaGFzKHIpO1xuICAgIHQuYWRkKHIpO1xuICAgIGlmIChvKSB7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgbih7XG4gICAgICAgIHR5cGU6IFwiZGVkdXBcIixcbiAgICAgICAgbWVzc2FnZTogXCJBbiBvcGVyYXRpb24gaGFzIGJlZW4gZGVkdXBlZC5cIixcbiAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICBzb3VyY2U6IFwiZGVkdXBFeGNoYW5nZVwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICFvO1xuICB9XG4gIGZ1bmN0aW9uIGFmdGVyT3BlcmF0aW9uUmVzdWx0KGUpIHtcbiAgICBpZiAoIWUuaGFzTmV4dCkge1xuICAgICAgdC5kZWxldGUoZS5vcGVyYXRpb24ua2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbiA9IE8oZmlsdGVySW5jb21pbmdPcGVyYXRpb24pKGUpO1xuICAgIHJldHVybiBxKGFmdGVyT3BlcmF0aW9uUmVzdWx0KShyKG4pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hFeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5mb3J3YXJkO1xuICB2YXIgbiA9IGUuZGlzcGF0Y2hEZWJ1ZztcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IGIoZSk7XG4gICAgdmFyIGEgPSBEKChmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgciA9IGUua2V5O1xuICAgICAgdmFyIGEgPSBPKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGUua2luZCAmJiBlLmtleSA9PT0gcjtcbiAgICAgIH0pKSh0KTtcbiAgICAgIHZhciBvID0gbChlKTtcbiAgICAgIHZhciBpID0gZChlLCBvKTtcbiAgICAgIHZhciB1ID0gdihlLCBvKTtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBuKHtcbiAgICAgICAgdHlwZTogXCJmZXRjaFJlcXVlc3RcIixcbiAgICAgICAgbWVzc2FnZTogXCJBIGZldGNoIHJlcXVlc3QgaXMgYmVpbmcgZXhlY3V0ZWQuXCIsXG4gICAgICAgIG9wZXJhdGlvbjogZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVybDogaSxcbiAgICAgICAgICBmZXRjaE9wdGlvbnM6IHVcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlOiBcImZldGNoRXhjaGFuZ2VcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUigoZnVuY3Rpb24ocikge1xuICAgICAgICB2YXIgdCA9ICFyLmRhdGEgPyByLmVycm9yIDogdm9pZCAwO1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgbih7XG4gICAgICAgICAgdHlwZTogdCA/IFwiZmV0Y2hFcnJvclwiIDogXCJmZXRjaFN1Y2Nlc3NcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkEgXCIgKyAodCA/IFwiZmFpbGVkXCIgOiBcInN1Y2Nlc3NmdWxcIikgKyBcIiBmZXRjaCByZXNwb25zZSBoYXMgYmVlbiByZXR1cm5lZC5cIixcbiAgICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXJsOiBpLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiB1LFxuICAgICAgICAgICAgdmFsdWU6IHQgfHwgclxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlOiBcImZldGNoRXhjaGFuZ2VcIlxuICAgICAgICB9KTtcbiAgICAgIH0pKShfKGEpKHkoZSwgaSwgdSkpKTtcbiAgICB9KSkoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFwicXVlcnlcIiA9PT0gZS5raW5kIHx8IFwibXV0YXRpb25cIiA9PT0gZS5raW5kO1xuICAgIH0pKSh0KSk7XG4gICAgdmFyIG8gPSByKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBcInF1ZXJ5XCIgIT09IGUua2luZCAmJiBcIm11dGF0aW9uXCIgIT09IGUua2luZDtcbiAgICB9KSkodCkpO1xuICAgIHJldHVybiBOKFsgYSwgbyBdKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFsbGJhY2tFeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBPKChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhMTtcbiAgICB9KSkocSgoZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKFwidGVhcmRvd25cIiAhPT0gZS5raW5kICYmIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICB2YXIgbiA9ICdObyBleGNoYW5nZSBoYXMgaGFuZGxlZCBvcGVyYXRpb25zIG9mIGtpbmQgXCInICsgZS5raW5kICsgXCJcXFwiLiBDaGVjayB3aGV0aGVyIHlvdSd2ZSBhZGRlZCBhbiBleGNoYW5nZSByZXNwb25zaWJsZSBmb3IgdGhlc2Ugb3BlcmF0aW9ucy5cIjtcbiAgICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHIoe1xuICAgICAgICAgIHR5cGU6IFwiZmFsbGJhY2tDYXRjaFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IG4sXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICAgIHNvdXJjZTogXCJmYWxsYmFja0V4Y2hhbmdlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUud2FybihuKTtcbiAgICAgIH1cbiAgICB9KSkoZSkpO1xuICB9O1xufVxuXG52YXIgTCA9IGZhbGxiYWNrRXhjaGFuZ2Uoe1xuICBkaXNwYXRjaERlYnVnOiBub29wXG59KTtcblxuZnVuY3Rpb24gY29tcG9zZUV4Y2hhbmdlcyhlKSB7XG4gIHJldHVybiBmdW5jdGlvbihyKSB7XG4gICAgdmFyIG4gPSByLmNsaWVudDtcbiAgICB2YXIgdCA9IHIuZGlzcGF0Y2hEZWJ1ZztcbiAgICByZXR1cm4gZS5yZWR1Y2VSaWdodCgoZnVuY3Rpb24oZSwgcikge1xuICAgICAgcmV0dXJuIHIoe1xuICAgICAgICBjbGllbnQ6IG4sXG4gICAgICAgIGZvcndhcmQ6IGUsXG4gICAgICAgIGRpc3BhdGNoRGVidWc6IGZ1bmN0aW9uIGRpc3BhdGNoRGVidWckMShlKSB7XG4gICAgICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHQobyh7fSwge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgc291cmNlOiByLm5hbWVcbiAgICAgICAgICB9LCBlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pLCByLmZvcndhcmQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlcnJvckV4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLm9uRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG4gPSBlLmZvcndhcmQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBxKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBuID0gZS5lcnJvcjtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICByKG4sIGUub3BlcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSkpKG4oZSkpO1xuICAgIH07XG4gIH07XG59XG5cbnZhciBKID0gWyBkZWR1cEV4Y2hhbmdlLCBjYWNoZUV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIF07XG5cbnZhciBXID0gZnVuY3Rpb24gQ2xpZW50KGUpIHtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiAhZS51cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGNyZWF0aW5nIGFuIHVycWwtY2xpZW50IHdpdGhvdXQgYSB1cmwuXCIpO1xuICB9XG4gIHZhciByID0gbmV3IE1hcDtcbiAgdmFyIG4gPSBuZXcgTWFwO1xuICB2YXIgdCA9IFtdO1xuICB2YXIgYSA9IFQoKTtcbiAgdmFyIGkgPSBhLnNvdXJjZTtcbiAgdmFyIHUgPSBhLm5leHQ7XG4gIHZhciBjID0gITE7XG4gIGZ1bmN0aW9uIGRpc3BhdGNoT3BlcmF0aW9uKGUpIHtcbiAgICBjID0gITA7XG4gICAgaWYgKGUpIHtcbiAgICAgIHUoZSk7XG4gICAgfVxuICAgIHdoaWxlIChlID0gdC5zaGlmdCgpKSB7XG4gICAgICB1KGUpO1xuICAgIH1cbiAgICBjID0gITE7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZVJlc3VsdFNvdXJjZShlKSB7XG4gICAgdmFyIGEgPSBPKChmdW5jdGlvbihyKSB7XG4gICAgICByZXR1cm4gci5vcGVyYXRpb24ua2luZCA9PT0gZS5raW5kICYmIHIub3BlcmF0aW9uLmtleSA9PT0gZS5rZXk7XG4gICAgfSkpKHkpO1xuICAgIGlmIChmLm1hc2tUeXBlbmFtZSkge1xuICAgICAgYSA9IHcoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIG8oe30sIGUsIHtcbiAgICAgICAgICBkYXRhOiBtYXNrVHlwZW5hbWUoZS5kYXRhKVxuICAgICAgICB9KTtcbiAgICAgIH0pKShhKTtcbiAgICB9XG4gICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5raW5kKSB7XG4gICAgICByZXR1cm4gRSgxKShBKChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoT3BlcmF0aW9uKGUpO1xuICAgICAgfSkpKGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIGIoTSgoZnVuY3Rpb24oKSB7XG4gICAgICByLmRlbGV0ZShlLmtleSk7XG4gICAgICBuLmRlbGV0ZShlLmtleSk7XG4gICAgICBmb3IgKHZhciBhID0gdC5sZW5ndGggLSAxOyBhID49IDA7IGEtLSkge1xuICAgICAgICBpZiAodFthXS5rZXkgPT09IGUua2V5KSB7XG4gICAgICAgICAgdC5zcGxpY2UoYSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoT3BlcmF0aW9uKG1ha2VPcGVyYXRpb24oXCJ0ZWFyZG93blwiLCBlLCBlLmNvbnRleHQpKTtcbiAgICB9KSkoUigoZnVuY3Rpb24obikge1xuICAgICAgci5zZXQoZS5rZXksIG4pO1xuICAgIH0pKShJKChmdW5jdGlvbihyKSB7XG4gICAgICBpZiAoXCJxdWVyeVwiICE9PSBlLmtpbmQgfHwgci5zdGFsZSkge1xuICAgICAgICByZXR1cm4gRihyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBOKFsgRihyKSwgdygoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvKHt9LCByLCB7XG4gICAgICAgICAgc3RhbGU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgfSkpKEUoMSkoTygoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gXCJxdWVyeVwiID09PSByLmtpbmQgJiYgci5rZXkgPT09IGUua2V5ICYmIFwiY2FjaGUtb25seVwiICE9PSByLmNvbnRleHQucmVxdWVzdFBvbGljeTtcbiAgICAgIH0pKShpKSkpIF0pO1xuICAgIH0pKShfKE8oKGZ1bmN0aW9uKHIpIHtcbiAgICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IHIua2luZCAmJiByLmtleSA9PT0gZS5rZXk7XG4gICAgfSkpKGkpKShhKSkpKSk7XG4gIH1cbiAgdmFyIHMgPSB0aGlzIGluc3RhbmNlb2YgQ2xpZW50ID8gdGhpcyA6IE9iamVjdC5jcmVhdGUoQ2xpZW50LnByb3RvdHlwZSk7XG4gIHZhciBmID0gbyhzLCB7XG4gICAgdXJsOiBlLnVybCxcbiAgICBmZXRjaE9wdGlvbnM6IGUuZmV0Y2hPcHRpb25zLFxuICAgIGZldGNoOiBlLmZldGNoLFxuICAgIHN1c3BlbnNlOiAhIWUuc3VzcGVuc2UsXG4gICAgcmVxdWVzdFBvbGljeTogZS5yZXF1ZXN0UG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIixcbiAgICBwcmVmZXJHZXRNZXRob2Q6ICEhZS5wcmVmZXJHZXRNZXRob2QsXG4gICAgbWFza1R5cGVuYW1lOiAhIWUubWFza1R5cGVuYW1lLFxuICAgIG9wZXJhdGlvbnMkOiBpLFxuICAgIHJlZXhlY3V0ZU9wZXJhdGlvbjogZnVuY3Rpb24gcmVleGVjdXRlT3BlcmF0aW9uKGUpIHtcbiAgICAgIGlmIChcIm11dGF0aW9uXCIgPT09IGUua2luZCB8fCBuLmhhcyhlLmtleSkpIHtcbiAgICAgICAgdC5wdXNoKGUpO1xuICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGRpc3BhdGNoT3BlcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlT3BlcmF0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uQ29udGV4dChlKSB7XG4gICAgICBpZiAoIWUpIHtcbiAgICAgICAgZSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG8oe30sIHtcbiAgICAgICAgdXJsOiBmLnVybCxcbiAgICAgICAgZmV0Y2hPcHRpb25zOiBmLmZldGNoT3B0aW9ucyxcbiAgICAgICAgZmV0Y2g6IGYuZmV0Y2gsXG4gICAgICAgIHByZWZlckdldE1ldGhvZDogZi5wcmVmZXJHZXRNZXRob2RcbiAgICAgIH0sIGUsIHtcbiAgICAgICAgc3VzcGVuc2U6IGUuc3VzcGVuc2UgfHwgITEgIT09IGUuc3VzcGVuc2UgJiYgZi5zdXNwZW5zZSxcbiAgICAgICAgcmVxdWVzdFBvbGljeTogZS5yZXF1ZXN0UG9saWN5IHx8IGYucmVxdWVzdFBvbGljeVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVSZXF1ZXN0T3BlcmF0aW9uOiBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0T3BlcmF0aW9uKGUsIHIsIG4pIHtcbiAgICAgIHZhciB0ID0gayhyLnF1ZXJ5KTtcbiAgICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgXCJ0ZWFyZG93blwiICE9PSBlICYmIHQgIT09IGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBvcGVyYXRpb24gb2YgdHlwZSBcIicgKyBlICsgJ1wiIGJ1dCBmb3VuZCBcIicgKyB0ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU9wZXJhdGlvbihlLCByLCBmLmNyZWF0ZU9wZXJhdGlvbkNvbnRleHQobikpO1xuICAgIH0sXG4gICAgZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb246IGZ1bmN0aW9uIGV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKGUpIHtcbiAgICAgIGlmIChcIm11dGF0aW9uXCIgPT09IGUua2luZCkge1xuICAgICAgICByZXR1cm4gbWFrZVJlc3VsdFNvdXJjZShlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTKChmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBhID0gbi5nZXQoZS5rZXkpO1xuICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICBuLnNldChlLmtleSwgYSA9IG1ha2VSZXN1bHRTb3VyY2UoZSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gXCJjYWNoZS1hbmQtbmV0d29ya1wiID09PSBlLmNvbnRleHQucmVxdWVzdFBvbGljeSB8fCBcIm5ldHdvcmstb25seVwiID09PSBlLmNvbnRleHQucmVxdWVzdFBvbGljeTtcbiAgICAgICAgcmV0dXJuIFAodC5uZXh0KShNKHQuY29tcGxldGUpKEEoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBuID0gci5nZXQoZS5rZXkpO1xuICAgICAgICAgIGlmIChcInN1YnNjcmlwdGlvblwiID09PSBlLmtpbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaE9wZXJhdGlvbihlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoT3BlcmF0aW9uKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobnVsbCAhPSBuICYmIG4gPT09IHIuZ2V0KGUua2V5KSkge1xuICAgICAgICAgICAgdC5uZXh0KGkgPyBvKHt9LCBuLCB7XG4gICAgICAgICAgICAgIHN0YWxlOiAhMFxuICAgICAgICAgICAgfSkgOiBuKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFpKSB7XG4gICAgICAgICAgICBkaXNwYXRjaE9wZXJhdGlvbihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKShhKSkpLnVuc3Vic2NyaWJlO1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgZXhlY3V0ZVF1ZXJ5OiBmdW5jdGlvbiBleGVjdXRlUXVlcnkoZSwgcikge1xuICAgICAgdmFyIG4gPSBmLmNyZWF0ZVJlcXVlc3RPcGVyYXRpb24oXCJxdWVyeVwiLCBlLCByKTtcbiAgICAgIHJldHVybiBmLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKG4pO1xuICAgIH0sXG4gICAgZXhlY3V0ZVN1YnNjcmlwdGlvbjogZnVuY3Rpb24gZXhlY3V0ZVN1YnNjcmlwdGlvbihlLCByKSB7XG4gICAgICB2YXIgbiA9IGYuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInN1YnNjcmlwdGlvblwiLCBlLCByKTtcbiAgICAgIHJldHVybiBmLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKG4pO1xuICAgIH0sXG4gICAgZXhlY3V0ZU11dGF0aW9uOiBmdW5jdGlvbiBleGVjdXRlTXV0YXRpb24oZSwgcikge1xuICAgICAgdmFyIG4gPSBmLmNyZWF0ZVJlcXVlc3RPcGVyYXRpb24oXCJtdXRhdGlvblwiLCBlLCByKTtcbiAgICAgIHJldHVybiBmLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKG4pO1xuICAgIH0sXG4gICAgcXVlcnk6IGZ1bmN0aW9uIHF1ZXJ5KGUsIHIsIG4pIHtcbiAgICAgIGlmICghbiB8fCBcImJvb2xlYW5cIiAhPSB0eXBlb2Ygbi5zdXNwZW5zZSkge1xuICAgICAgICBuID0gbyh7fSwgbiwge1xuICAgICAgICAgIHN1c3BlbnNlOiAhMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3aXRoUHJvbWlzZShmLmV4ZWN1dGVRdWVyeShnKGUsIHIpLCBuKSk7XG4gICAgfSxcbiAgICByZWFkUXVlcnk6IGZ1bmN0aW9uIHJlYWRRdWVyeShlLCByLCBuKSB7XG4gICAgICB2YXIgdCA9IG51bGw7XG4gICAgICBQKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHQgPSBlO1xuICAgICAgfSkpKGYucXVlcnkoZSwgciwgbikpLnVuc3Vic2NyaWJlKCk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuICAgIHN1YnNjcmlwdGlvbjogZnVuY3Rpb24gc3Vic2NyaXB0aW9uKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiBmLmV4ZWN1dGVTdWJzY3JpcHRpb24oZyhlLCByKSwgbik7XG4gICAgfSxcbiAgICBtdXRhdGlvbjogZnVuY3Rpb24gbXV0YXRpb24oZSwgciwgbikge1xuICAgICAgcmV0dXJuIHdpdGhQcm9taXNlKGYuZXhlY3V0ZU11dGF0aW9uKGcoZSwgciksIG4pKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgcCA9IG5vb3A7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICB2YXIgbCA9IFQoKTtcbiAgICB2YXIgZCA9IGwubmV4dDtcbiAgICB2YXIgaCA9IGwuc291cmNlO1xuICAgIGYuc3Vic2NyaWJlVG9EZWJ1Z1RhcmdldCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBQKGUpKGgpO1xuICAgIH07XG4gICAgcCA9IGQ7XG4gIH1cbiAgdmFyIHYgPSBjb21wb3NlRXhjaGFuZ2VzKHZvaWQgMCAhPT0gZS5leGNoYW5nZXMgPyBlLmV4Y2hhbmdlcyA6IEopO1xuICB2YXIgeSA9IGIodih7XG4gICAgY2xpZW50OiBmLFxuICAgIGRpc3BhdGNoRGVidWc6IHAsXG4gICAgZm9yd2FyZDogZmFsbGJhY2tFeGNoYW5nZSh7XG4gICAgICBkaXNwYXRjaERlYnVnOiBwXG4gICAgfSlcbiAgfSkoaSkpO1xuICBWKHkpO1xuICByZXR1cm4gZjtcbn07XG5cbnZhciB6ID0gVztcblxuZXhwb3J0IHsgVyBhcyBDbGllbnQsIGNhY2hlRXhjaGFuZ2UsIGNvbXBvc2VFeGNoYW5nZXMsIHogYXMgY3JlYXRlQ2xpZW50LCBkZWJ1Z0V4Y2hhbmdlLCBkZWR1cEV4Y2hhbmdlLCBKIGFzIGRlZmF1bHRFeGNoYW5nZXMsIGVycm9yRXhjaGFuZ2UsIEwgYXMgZmFsbGJhY2tFeGNoYW5nZUlPLCBmZXRjaEV4Y2hhbmdlLCBmb3JtYXREb2N1bWVudCwgZ3FsLCBtYWtlT3BlcmF0aW9uLCBtYXNrVHlwZW5hbWUsIHNzckV4Y2hhbmdlLCBzdWJzY3JpcHRpb25FeGNoYW5nZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJxbC1jb3JlLm1qcy5tYXBcbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9ub2RlTG9jYXRpb25zLCBfbm9kZUxvY2F0aW9uczIsIF9ub2RlTG9jYXRpb25zMztcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTtcbiAgICBfdGhpcy5uYW1lID0gJ0dyYXBoUUxFcnJvcic7XG4gICAgX3RoaXMub3JpZ2luYWxFcnJvciA9IG9yaWdpbmFsRXJyb3IgIT09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPT0gdm9pZCAwID8gb3JpZ2luYWxFcnJvciA6IHVuZGVmaW5lZDsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgX3RoaXMubm9kZXMgPSB1bmRlZmluZWRJZkVtcHR5KEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQpO1xuICAgIHZhciBub2RlTG9jYXRpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfcmVmMyA9IChfdGhpcyRub2RlcyA9IF90aGlzLm5vZGVzKSAhPT0gbnVsbCAmJiBfdGhpcyRub2RlcyAhPT0gdm9pZCAwID8gX3RoaXMkbm9kZXMgOiBbXTsgX2kyIDwgX3JlZjMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIF90aGlzJG5vZGVzO1xuXG4gICAgICB2YXIgX3JlZjQgPSBfcmVmM1tfaTJdO1xuICAgICAgdmFyIGxvYyA9IF9yZWY0LmxvYztcblxuICAgICAgaWYgKGxvYyAhPSBudWxsKSB7XG4gICAgICAgIG5vZGVMb2NhdGlvbnMucHVzaChsb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVMb2NhdGlvbnMgPSB1bmRlZmluZWRJZkVtcHR5KG5vZGVMb2NhdGlvbnMpOyAvLyBDb21wdXRlIGxvY2F0aW9ucyBpbiB0aGUgc291cmNlIGZvciB0aGUgZ2l2ZW4gbm9kZXMvcG9zaXRpb25zLlxuXG4gICAgX3RoaXMuc291cmNlID0gc291cmNlICE9PSBudWxsICYmIHNvdXJjZSAhPT0gdm9pZCAwID8gc291cmNlIDogKF9ub2RlTG9jYXRpb25zID0gbm9kZUxvY2F0aW9ucykgPT09IG51bGwgfHwgX25vZGVMb2NhdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlTG9jYXRpb25zWzBdLnNvdXJjZTtcbiAgICBfdGhpcy5wb3NpdGlvbnMgPSBwb3NpdGlvbnMgIT09IG51bGwgJiYgcG9zaXRpb25zICE9PSB2b2lkIDAgPyBwb3NpdGlvbnMgOiAoX25vZGVMb2NhdGlvbnMyID0gbm9kZUxvY2F0aW9ucykgPT09IG51bGwgfHwgX25vZGVMb2NhdGlvbnMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZUxvY2F0aW9uczIubWFwKGZ1bmN0aW9uIChsb2MpIHtcbiAgICAgIHJldHVybiBsb2Muc3RhcnQ7XG4gICAgfSk7XG4gICAgX3RoaXMubG9jYXRpb25zID0gcG9zaXRpb25zICYmIHNvdXJjZSA/IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIGdldExvY2F0aW9uKHNvdXJjZSwgcG9zKTtcbiAgICB9KSA6IChfbm9kZUxvY2F0aW9uczMgPSBub2RlTG9jYXRpb25zKSA9PT0gbnVsbCB8fCBfbm9kZUxvY2F0aW9uczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlTG9jYXRpb25zMy5tYXAoZnVuY3Rpb24gKGxvYykge1xuICAgICAgcmV0dXJuIGdldExvY2F0aW9uKGxvYy5zb3VyY2UsIGxvYy5zdGFydCk7XG4gICAgfSk7XG4gICAgX3RoaXMucGF0aCA9IHBhdGggIT09IG51bGwgJiYgcGF0aCAhPT0gdm9pZCAwID8gcGF0aCA6IHVuZGVmaW5lZDtcbiAgICBfdGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucyAhPT0gbnVsbCAmJiBleHRlbnNpb25zICE9PSB2b2lkIDAgPyBleHRlbnNpb25zIDoge307XG4gICAgdmFyIG9yaWdpbmFsRXh0ZW5zaW9ucyA9IG9yaWdpbmFsRXJyb3IgPT09IG51bGwgfHwgb3JpZ2luYWxFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgaWYgKGlzT2JqZWN0TGlrZShvcmlnaW5hbEV4dGVuc2lvbnMpKSB7XG4gICAgICBfdGhpcy5leHRlbnNpb25zID0gX29iamVjdFNwcmVhZCh7fSwgb3JpZ2luYWxFeHRlbnNpb25zKTtcbiAgICB9IC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBiZWxsb3cgcHJvcGVydGllcyBpbiB0aGUgcmVzdWx0aW5nIG91dHB1dC5cbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTCBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB7XG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbnM6IHtcbiAgICAgICAgZW51bWVyYWJsZTogX3RoaXMubG9jYXRpb25zICE9IG51bGxcbiAgICAgIH0sXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGVudW1lcmFibGU6IF90aGlzLnBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgZW51bWVyYWJsZTogX3RoaXMuZXh0ZW5zaW9ucyAhPSBudWxsICYmIE9iamVjdC5rZXlzKF90aGlzLmV4dGVuc2lvbnMpLmxlbmd0aCA+IDBcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9kZXM6IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbnM6IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBvcmlnaW5hbEVycm9yOiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSk7IC8vIEluY2x1ZGUgKG5vbi1lbnVtZXJhYmxlKSBzdGFjayB0cmFjZS5cblxuICAgIGlmIChvcmlnaW5hbEVycm9yICE9PSBudWxsICYmIG9yaWdpbmFsRXJyb3IgIT09IHZvaWQgMCAmJiBvcmlnaW5hbEVycm9yLnN0YWNrKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzdGFjaycsIHtcbiAgICAgICAgdmFsdWU6IG9yaWdpbmFsRXJyb3Iuc3RhY2ssXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgICB9IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgR3JhcGhRTEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBFcnJvcigpLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JhcGhRTEVycm9yLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBwcmludEVycm9yKHRoaXMpO1xuICAgIH0gLy8gRklYTUU6IHdvcmthcm91bmQgdG8gbm90IGJyZWFrIGNoYWkgY29tcGFyaXNvbnMsIHNob3VsZCBiZSByZW1vdmUgaW4gdjE2XG4gICAgLy8gJEZsb3dGaXhNZVt1bnN1cHBvcnRlZC1zeW50YXhdIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cbiAgfSwge1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyYXBoUUxFcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZElmRW1wdHkoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5ID09PSB1bmRlZmluZWQgfHwgYXJyYXkubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogYXJyYXk7XG59XG4vKipcbiAqIFByaW50cyBhIEdyYXBoUUxFcnJvciB0byBhIHN0cmluZywgcmVwcmVzZW50aW5nIHVzZWZ1bCBsb2NhdGlvbiBpbmZvcm1hdGlvblxuICogYWJvdXQgdGhlIGVycm9yJ3MgcG9zaXRpb24gaW4gdGhlIHNvdXJjZS5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEVycm9yKGVycm9yKSB7XG4gIHZhciBvdXRwdXQgPSBlcnJvci5tZXNzYWdlO1xuXG4gIGlmIChlcnJvci5ub2Rlcykge1xuICAgIGZvciAodmFyIF9pNCA9IDAsIF9lcnJvciRub2RlczIgPSBlcnJvci5ub2RlczsgX2k0IDwgX2Vycm9yJG5vZGVzMi5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICB2YXIgbm9kZSA9IF9lcnJvciRub2RlczJbX2k0XTtcblxuICAgICAgaWYgKG5vZGUubG9jKSB7XG4gICAgICAgIG91dHB1dCArPSAnXFxuXFxuJyArIHByaW50TG9jYXRpb24obm9kZS5sb2MpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlcnJvci5zb3VyY2UgJiYgZXJyb3IubG9jYXRpb25zKSB7XG4gICAgZm9yICh2YXIgX2k2ID0gMCwgX2Vycm9yJGxvY2F0aW9uczIgPSBlcnJvci5sb2NhdGlvbnM7IF9pNiA8IF9lcnJvciRsb2NhdGlvbnMyLmxlbmd0aDsgX2k2KyspIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9lcnJvciRsb2NhdGlvbnMyW19pNl07XG4gICAgICBvdXRwdXQgKz0gJ1xcblxcbicgKyBwcmludFNvdXJjZUxvY2F0aW9uKGVycm9yLnNvdXJjZSwgbG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4iLCJpbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tIFwiLi9HcmFwaFFMRXJyb3IubWpzXCI7XG4vKipcbiAqIFByb2R1Y2VzIGEgR3JhcGhRTEVycm9yIHJlcHJlc2VudGluZyBhIHN5bnRheCBlcnJvciwgY29udGFpbmluZyB1c2VmdWxcbiAqIGRlc2NyaXB0aXZlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzeW50YXggZXJyb3IncyBwb3NpdGlvbiBpbiB0aGUgc291cmNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IEdyYXBoUUxFcnJvcihcIlN5bnRheCBFcnJvcjogXCIuY29uY2F0KGRlc2NyaXB0aW9uKSwgdW5kZWZpbmVkLCBzb3VyY2UsIFtwb3NpdGlvbl0pO1xufVxuIiwiaW1wb3J0IGludmFyaWFudCBmcm9tIFwiLi9pbnZhcmlhbnQubWpzXCI7XG5pbXBvcnQgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCBmcm9tIFwiLi9ub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sLm1qc1wiO1xuLyoqXG4gKiBUaGUgYGRlZmluZUluc3BlY3QoKWAgZnVuY3Rpb24gZGVmaW5lcyBgaW5zcGVjdCgpYCBwcm90b3R5cGUgbWV0aG9kIGFzIGFsaWFzIG9mIGB0b0pTT05gXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lSW5zcGVjdChjbGFzc09iamVjdCkge1xuICB2YXIgZm4gPSBjbGFzc09iamVjdC5wcm90b3R5cGUudG9KU09OO1xuICB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgaW52YXJpYW50KDApO1xuICBjbGFzc09iamVjdC5wcm90b3R5cGUuaW5zcGVjdCA9IGZuOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbiAgaWYgKG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wpIHtcbiAgICBjbGFzc09iamVjdC5wcm90b3R5cGVbbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBmbjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV2QXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICB2YXIgYm9vbGVhbkNvbmRpdGlvbiA9IEJvb2xlYW4oY29uZGl0aW9uKTsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZSB0cmFuc2Zvcm1hdGlvbiBkb25lIGluICcuL3Jlc291cmNlcy9pbmxpbmVJbnZhcmlhbnQuanMnKVxuXG4gIGlmICghYm9vbGVhbkNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzICovXG5pbXBvcnQgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCBmcm9tIFwiLi9ub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sLm1qc1wiO1xudmFyIE1BWF9BUlJBWV9MRU5HVEggPSAxMDtcbnZhciBNQVhfUkVDVVJTSVZFX0RFUFRIID0gMjtcbi8qKlxuICogVXNlZCB0byBwcmludCB2YWx1ZXMgaW4gZXJyb3IgbWVzc2FnZXMuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zcGVjdCh2YWx1ZSkge1xuICByZXR1cm4gZm9ybWF0VmFsdWUodmFsdWUsIFtdKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUsIHNlZW5WYWx1ZXMpIHtcbiAgc3dpdGNoIChfdHlwZW9mKHZhbHVlKSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIHZhbHVlLm5hbWUgPyBcIltmdW5jdGlvbiBcIi5jb25jYXQodmFsdWUubmFtZSwgXCJdXCIpIDogJ1tmdW5jdGlvbl0nO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0T2JqZWN0VmFsdWUodmFsdWUsIHNlZW5WYWx1ZXMpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE9iamVjdFZhbHVlKHZhbHVlLCBwcmV2aW91c2x5U2VlblZhbHVlcykge1xuICBpZiAocHJldmlvdXNseVNlZW5WYWx1ZXMuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgfVxuXG4gIHZhciBzZWVuVmFsdWVzID0gW10uY29uY2F0KHByZXZpb3VzbHlTZWVuVmFsdWVzLCBbdmFsdWVdKTtcbiAgdmFyIGN1c3RvbUluc3BlY3RGbiA9IGdldEN1c3RvbUZuKHZhbHVlKTtcblxuICBpZiAoY3VzdG9tSW5zcGVjdEZuICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VzdG9tVmFsdWUgPSBjdXN0b21JbnNwZWN0Rm4uY2FsbCh2YWx1ZSk7IC8vIGNoZWNrIGZvciBpbmZpbml0ZSByZWN1cnNpb25cblxuICAgIGlmIChjdXN0b21WYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VzdG9tVmFsdWUgPT09ICdzdHJpbmcnID8gY3VzdG9tVmFsdWUgOiBmb3JtYXRWYWx1ZShjdXN0b21WYWx1ZSwgc2VlblZhbHVlcyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZvcm1hdEFycmF5KHZhbHVlLCBzZWVuVmFsdWVzKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRPYmplY3QodmFsdWUsIHNlZW5WYWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRPYmplY3Qob2JqZWN0LCBzZWVuVmFsdWVzKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ3t9JztcbiAgfVxuXG4gIGlmIChzZWVuVmFsdWVzLmxlbmd0aCA+IE1BWF9SRUNVUlNJVkVfREVQVEgpIHtcbiAgICByZXR1cm4gJ1snICsgZ2V0T2JqZWN0VGFnKG9iamVjdCkgKyAnXSc7XG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBmb3JtYXRWYWx1ZShvYmplY3Rba2V5XSwgc2VlblZhbHVlcyk7XG4gICAgcmV0dXJuIGtleSArICc6ICcgKyB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiAneyAnICsgcHJvcGVydGllcy5qb2luKCcsICcpICsgJyB9Jztcbn1cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoYXJyYXksIHNlZW5WYWx1ZXMpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnW10nO1xuICB9XG5cbiAgaWYgKHNlZW5WYWx1ZXMubGVuZ3RoID4gTUFYX1JFQ1VSU0lWRV9ERVBUSCkge1xuICAgIHJldHVybiAnW0FycmF5XSc7XG4gIH1cblxuICB2YXIgbGVuID0gTWF0aC5taW4oTUFYX0FSUkFZX0xFTkdUSCwgYXJyYXkubGVuZ3RoKTtcbiAgdmFyIHJlbWFpbmluZyA9IGFycmF5Lmxlbmd0aCAtIGxlbjtcbiAgdmFyIGl0ZW1zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGl0ZW1zLnB1c2goZm9ybWF0VmFsdWUoYXJyYXlbaV0sIHNlZW5WYWx1ZXMpKTtcbiAgfVxuXG4gIGlmIChyZW1haW5pbmcgPT09IDEpIHtcbiAgICBpdGVtcy5wdXNoKCcuLi4gMSBtb3JlIGl0ZW0nKTtcbiAgfSBlbHNlIGlmIChyZW1haW5pbmcgPiAxKSB7XG4gICAgaXRlbXMucHVzaChcIi4uLiBcIi5jb25jYXQocmVtYWluaW5nLCBcIiBtb3JlIGl0ZW1zXCIpKTtcbiAgfVxuXG4gIHJldHVybiAnWycgKyBpdGVtcy5qb2luKCcsICcpICsgJ10nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXN0b21GbihvYmplY3QpIHtcbiAgdmFyIGN1c3RvbUluc3BlY3RGbiA9IG9iamVjdFtTdHJpbmcobm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCldO1xuXG4gIGlmICh0eXBlb2YgY3VzdG9tSW5zcGVjdEZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGN1c3RvbUluc3BlY3RGbjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0Lmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb2JqZWN0Lmluc3BlY3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0VGFnKG9iamVjdCkge1xuICB2YXIgdGFnID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkucmVwbGFjZSgvXlxcW29iamVjdCAvLCAnJykucmVwbGFjZSgvXSQvLCAnJyk7XG5cbiAgaWYgKHRhZyA9PT0gJ09iamVjdCcgJiYgdHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBuYW1lID0gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIG5hbWUgIT09ICcnKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFnO1xufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi9pbnNwZWN0Lm1qc1wiO1xuLyoqXG4gKiBBIHJlcGxhY2VtZW50IGZvciBpbnN0YW5jZW9mIHdoaWNoIGluY2x1ZGVzIGFuIGVycm9yIHdhcm5pbmcgd2hlbiBtdWx0aS1yZWFsbVxuICogY29uc3RydWN0b3JzIGFyZSBkZXRlY3RlZC5cbiAqL1xuXG4vLyBTZWU6IGh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXBlcmZvcm1hbmNlLmh0bWwjc2V0LW5vZGVfZW52LXRvLXByb2R1Y3Rpb25cbi8vIFNlZTogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvcHJvZHVjdGlvbi9cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn0gOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHZhciBfdmFsdWUkY29uc3RydWN0b3I7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gY29uc3RydWN0b3IucHJvdG90eXBlW1N5bWJvbC50b1N0cmluZ1RhZ107XG4gICAgdmFyIHZhbHVlQ2xhc3NOYW1lID0gLy8gV2Ugc3RpbGwgbmVlZCB0byBzdXBwb3J0IGNvbnN0cnVjdG9yJ3MgbmFtZSB0byBkZXRlY3QgY29uZmxpY3RzIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgdGhpcyBsaWJyYXJ5LlxuICAgIFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWx1ZSA/IHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gOiAoX3ZhbHVlJGNvbnN0cnVjdG9yID0gdmFsdWUuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF92YWx1ZSRjb25zdHJ1Y3RvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ZhbHVlJGNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoY2xhc3NOYW1lID09PSB2YWx1ZUNsYXNzTmFtZSkge1xuICAgICAgdmFyIHN0cmluZ2lmaWVkVmFsdWUgPSBpbnNwZWN0KHZhbHVlKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXFxcIlwiKS5jb25jYXQoc3RyaW5naWZpZWRWYWx1ZSwgXCJcXFwiIGZyb20gYW5vdGhlciBtb2R1bGUgb3IgcmVhbG0uXFxuXFxuRW5zdXJlIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgaW5zdGFuY2Ugb2YgXFxcImdyYXBocWxcXFwiIGluIHRoZSBub2RlX21vZHVsZXNcXG5kaXJlY3RvcnkuIElmIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBcXFwiZ3JhcGhxbFxcXCIgYXJlIHRoZSBkZXBlbmRlbmNpZXMgb2Ygb3RoZXJcXG5yZWxpZWQgb24gbW9kdWxlcywgdXNlIFxcXCJyZXNvbHV0aW9uc1xcXCIgdG8gZW5zdXJlIG9ubHkgb25lIHZlcnNpb24gaXMgaW5zdGFsbGVkLlxcblxcbmh0dHBzOi8veWFybnBrZy5jb20vZW4vZG9jcy9zZWxlY3RpdmUtdmVyc2lvbi1yZXNvbHV0aW9uc1xcblxcbkR1cGxpY2F0ZSBcXFwiZ3JhcGhxbFxcXCIgbW9kdWxlcyBjYW5ub3QgYmUgdXNlZCBhdCB0aGUgc2FtZSB0aW1lIHNpbmNlIGRpZmZlcmVudFxcbnZlcnNpb25zIG1heSBoYXZlIGRpZmZlcmVudCBjYXBhYmlsaXRpZXMgYW5kIGJlaGF2aW9yLiBUaGUgZGF0YSBmcm9tIG9uZVxcbnZlcnNpb24gdXNlZCBpbiB0aGUgZnVuY3Rpb24gZnJvbSBhbm90aGVyIGNvdWxkIHByb2R1Y2UgY29uZnVzaW5nIGFuZFxcbnNwdXJpb3VzIHJlc3VsdHMuXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICB2YXIgYm9vbGVhbkNvbmRpdGlvbiA9IEJvb2xlYW4oY29uZGl0aW9uKTsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZSB0cmFuc2Zvcm1hdGlvbiBkb25lIGluICcuL3Jlc291cmNlcy9pbmxpbmVJbnZhcmlhbnQuanMnKVxuXG4gIGlmICghYm9vbGVhbkNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICE9IG51bGwgPyBtZXNzYWdlIDogJ1VuZXhwZWN0ZWQgaW52YXJpYW50IHRyaWdnZXJlZC4nKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3RcbiAqIGBudWxsYCBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG4iLCIvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG52YXIgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuZXhwb3J0IGRlZmF1bHQgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbDtcbiIsImltcG9ydCBkZWZpbmVJbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzXCI7XG5cbi8qKlxuICogQ29udGFpbnMgYSByYW5nZSBvZiBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0cyBhbmQgdG9rZW4gcmVmZXJlbmNlcyB0aGF0XG4gKiBpZGVudGlmeSB0aGUgcmVnaW9uIG9mIHRoZSBzb3VyY2UgZnJvbSB3aGljaCB0aGUgQVNUIGRlcml2ZWQuXG4gKi9cbmV4cG9ydCB2YXIgTG9jYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIFRva2VuIGF0IHdoaWNoIHRoaXMgTm9kZSBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgU291cmNlIGRvY3VtZW50IHRoZSBBU1QgcmVwcmVzZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIExvY2F0aW9uKHN0YXJ0VG9rZW4sIGVuZFRva2VuLCBzb3VyY2UpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnRUb2tlbi5zdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZFRva2VuLmVuZDtcbiAgICB0aGlzLnN0YXJ0VG9rZW4gPSBzdGFydFRva2VuO1xuICAgIHRoaXMuZW5kVG9rZW4gPSBlbmRUb2tlbjtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2NhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICBlbmQ6IHRoaXMuZW5kXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gTG9jYXRpb247XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoTG9jYXRpb24pO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmFuZ2Ugb2YgY2hhcmFjdGVycyByZXByZXNlbnRlZCBieSBhIGxleGljYWwgdG9rZW5cbiAqIHdpdGhpbiBhIFNvdXJjZS5cbiAqL1xuXG5leHBvcnQgdmFyIFRva2VuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoZSBraW5kIG9mIFRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIDEtaW5kZXhlZCBsaW5lIG51bWJlciBvbiB3aGljaCB0aGlzIFRva2VuIGFwcGVhcnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGNvbHVtbiBudW1iZXIgYXQgd2hpY2ggdGhpcyBUb2tlbiBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGb3Igbm9uLXB1bmN0dWF0aW9uIHRva2VucywgcmVwcmVzZW50cyB0aGUgaW50ZXJwcmV0ZWQgdmFsdWUgb2YgdGhlIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVG9rZW5zIGV4aXN0IGFzIG5vZGVzIGluIGEgZG91YmxlLWxpbmtlZC1saXN0IGFtb25nc3QgYWxsIHRva2Vuc1xuICAgKiBpbmNsdWRpbmcgaWdub3JlZCB0b2tlbnMuIDxTT0Y+IGlzIGFsd2F5cyB0aGUgZmlyc3Qgbm9kZSBhbmQgPEVPRj5cbiAgICogdGhlIGxhc3QuXG4gICAqL1xuICBmdW5jdGlvbiBUb2tlbihraW5kLCBzdGFydCwgZW5kLCBsaW5lLCBjb2x1bW4sIHByZXYsIHZhbHVlKSB7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUb2tlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtblxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuO1xufSgpOyAvLyBQcmludCBhIHNpbXBsaWZpZWQgZm9ybSB3aGVuIGFwcGVhcmluZyBpbiBgaW5zcGVjdGAgYW5kIGB1dGlsLmluc3BlY3RgLlxuXG5kZWZpbmVJbnNwZWN0KFRva2VuKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZShtYXliZU5vZGUpIHtcbiAgcmV0dXJuIG1heWJlTm9kZSAhPSBudWxsICYmIHR5cGVvZiBtYXliZU5vZGUua2luZCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIFRoZSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBBU1Qgbm9kZSB0eXBlcy5cbiAqL1xuIiwiLyoqXG4gKiBQcm9kdWNlcyB0aGUgdmFsdWUgb2YgYSBibG9jayBzdHJpbmcgZnJvbSBpdHMgcGFyc2VkIHJhdyB2YWx1ZSwgc2ltaWxhciB0b1xuICogQ29mZmVlU2NyaXB0J3MgYmxvY2sgc3RyaW5nLCBQeXRob24ncyBkb2NzdHJpbmcgdHJpbSBvciBSdWJ5J3Mgc3RyaXBfaGVyZWRvYy5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgdGhlIEdyYXBoUUwgc3BlYydzIEJsb2NrU3RyaW5nVmFsdWUoKSBzdGF0aWMgYWxnb3JpdGhtLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdTdHJpbmcpIHtcbiAgLy8gRXhwYW5kIGEgYmxvY2sgc3RyaW5nJ3MgcmF3IHZhbHVlIGludG8gaW5kZXBlbmRlbnQgbGluZXMuXG4gIHZhciBsaW5lcyA9IHJhd1N0cmluZy5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpOyAvLyBSZW1vdmUgY29tbW9uIGluZGVudGF0aW9uIGZyb20gYWxsIGxpbmVzIGJ1dCBmaXJzdC5cblxuICB2YXIgY29tbW9uSW5kZW50ID0gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbihyYXdTdHJpbmcpO1xuXG4gIGlmIChjb21tb25JbmRlbnQgIT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldLnNsaWNlKGNvbW1vbkluZGVudCk7XG4gICAgfVxuICB9IC8vIFJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBibGFuayBsaW5lcy5cblxuXG4gIHZhciBzdGFydExpbmUgPSAwO1xuXG4gIHdoaWxlIChzdGFydExpbmUgPCBsaW5lcy5sZW5ndGggJiYgaXNCbGFuayhsaW5lc1tzdGFydExpbmVdKSkge1xuICAgICsrc3RhcnRMaW5lO1xuICB9XG5cbiAgdmFyIGVuZExpbmUgPSBsaW5lcy5sZW5ndGg7XG5cbiAgd2hpbGUgKGVuZExpbmUgPiBzdGFydExpbmUgJiYgaXNCbGFuayhsaW5lc1tlbmRMaW5lIC0gMV0pKSB7XG4gICAgLS1lbmRMaW5lO1xuICB9IC8vIFJldHVybiBhIHN0cmluZyBvZiB0aGUgbGluZXMgam9pbmVkIHdpdGggVSswMDBBLlxuXG5cbiAgcmV0dXJuIGxpbmVzLnNsaWNlKHN0YXJ0TGluZSwgZW5kTGluZSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmsoc3RyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0cltpXSAhPT0gJyAnICYmIHN0cltpXSAhPT0gJ1xcdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgX2NvbW1vbkluZGVudDtcblxuICB2YXIgaXNGaXJzdExpbmUgPSB0cnVlO1xuICB2YXIgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICB2YXIgaW5kZW50ID0gMDtcbiAgdmFyIGNvbW1vbkluZGVudCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgLy8gIFxcclxuICAgICAgICBpZiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgKytpOyAvLyBza2lwIFxcclxcbiBhcyBvbmUgc3ltYm9sXG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgIGlzRmlyc3RMaW5lID0gZmFsc2U7XG4gICAgICAgIGlzRW1wdHlMaW5lID0gdHJ1ZTtcbiAgICAgICAgaW5kZW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gIDxzcGFjZT5cbiAgICAgICAgKytpbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoaXNFbXB0eUxpbmUgJiYgIWlzRmlyc3RMaW5lICYmIChjb21tb25JbmRlbnQgPT09IG51bGwgfHwgaW5kZW50IDwgY29tbW9uSW5kZW50KSkge1xuICAgICAgICAgIGNvbW1vbkluZGVudCA9IGluZGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzRW1wdHlMaW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChfY29tbW9uSW5kZW50ID0gY29tbW9uSW5kZW50KSAhPT0gbnVsbCAmJiBfY29tbW9uSW5kZW50ICE9PSB2b2lkIDAgPyBfY29tbW9uSW5kZW50IDogMDtcbn1cbi8qKlxuICogUHJpbnQgYSBibG9jayBzdHJpbmcgaW4gdGhlIGluZGVudGVkIGJsb2NrIGZvcm0gYnkgYWRkaW5nIGEgbGVhZGluZyBhbmRcbiAqIHRyYWlsaW5nIGJsYW5rIGxpbmUuIEhvd2V2ZXIsIGlmIGEgYmxvY2sgc3RyaW5nIHN0YXJ0cyB3aXRoIHdoaXRlc3BhY2UgYW5kIGlzXG4gKiBhIHNpbmdsZS1saW5lLCBhZGRpbmcgYSBsZWFkaW5nIGJsYW5rIGxpbmUgd291bGQgc3RyaXAgdGhhdCB3aGl0ZXNwYWNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEJsb2NrU3RyaW5nKHZhbHVlKSB7XG4gIHZhciBpbmRlbnRhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gIHZhciBwcmVmZXJNdWx0aXBsZUxpbmVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGlzU2luZ2xlTGluZSA9IHZhbHVlLmluZGV4T2YoJ1xcbicpID09PSAtMTtcbiAgdmFyIGhhc0xlYWRpbmdTcGFjZSA9IHZhbHVlWzBdID09PSAnICcgfHwgdmFsdWVbMF0gPT09ICdcXHQnO1xuICB2YXIgaGFzVHJhaWxpbmdRdW90ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXCInO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXFxcXCc7XG4gIHZhciBwcmludEFzTXVsdGlwbGVMaW5lcyA9ICFpc1NpbmdsZUxpbmUgfHwgaGFzVHJhaWxpbmdRdW90ZSB8fCBoYXNUcmFpbGluZ1NsYXNoIHx8IHByZWZlck11bHRpcGxlTGluZXM7XG4gIHZhciByZXN1bHQgPSAnJzsgLy8gRm9ybWF0IGEgbXVsdGktbGluZSBibG9jayBxdW90ZSB0byBhY2NvdW50IGZvciBsZWFkaW5nIHNwYWNlLlxuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcyAmJiAhKGlzU2luZ2xlTGluZSAmJiBoYXNMZWFkaW5nU3BhY2UpKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nICsgaW5kZW50YXRpb247XG4gIH1cblxuICByZXN1bHQgKz0gaW5kZW50YXRpb24gPyB2YWx1ZS5yZXBsYWNlKC9cXG4vZywgJ1xcbicgKyBpbmRlbnRhdGlvbikgOiB2YWx1ZTtcblxuICBpZiAocHJpbnRBc011bHRpcGxlTGluZXMpIHtcbiAgICByZXN1bHQgKz0gJ1xcbic7XG4gIH1cblxuICByZXR1cm4gJ1wiXCJcIicgKyByZXN1bHQucmVwbGFjZSgvXCJcIlwiL2csICdcXFxcXCJcIlwiJykgKyAnXCJcIlwiJztcbn1cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCB2YXIgRGlyZWN0aXZlTG9jYXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgLy8gUmVxdWVzdCBEZWZpbml0aW9uc1xuICBRVUVSWTogJ1FVRVJZJyxcbiAgTVVUQVRJT046ICdNVVRBVElPTicsXG4gIFNVQlNDUklQVElPTjogJ1NVQlNDUklQVElPTicsXG4gIEZJRUxEOiAnRklFTEQnLFxuICBGUkFHTUVOVF9ERUZJTklUSU9OOiAnRlJBR01FTlRfREVGSU5JVElPTicsXG4gIEZSQUdNRU5UX1NQUkVBRDogJ0ZSQUdNRU5UX1NQUkVBRCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lOTElORV9GUkFHTUVOVCcsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWQVJJQUJMRV9ERUZJTklUSU9OJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BOiAnU0NIRU1BJyxcbiAgU0NBTEFSOiAnU0NBTEFSJyxcbiAgT0JKRUNUOiAnT0JKRUNUJyxcbiAgRklFTERfREVGSU5JVElPTjogJ0ZJRUxEX0RFRklOSVRJT04nLFxuICBBUkdVTUVOVF9ERUZJTklUSU9OOiAnQVJHVU1FTlRfREVGSU5JVElPTicsXG4gIElOVEVSRkFDRTogJ0lOVEVSRkFDRScsXG4gIFVOSU9OOiAnVU5JT04nLFxuICBFTlVNOiAnRU5VTScsXG4gIEVOVU1fVkFMVUU6ICdFTlVNX1ZBTFVFJyxcbiAgSU5QVVRfT0JKRUNUOiAnSU5QVVRfT0JKRUNUJyxcbiAgSU5QVVRfRklFTERfREVGSU5JVElPTjogJ0lOUFVUX0ZJRUxEX0RFRklOSVRJT04nXG59KTtcbi8qKlxuICogVGhlIGVudW0gdHlwZSByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGtpbmQgdmFsdWVzIGZvciBBU1Qgbm9kZXMuXG4gKi9cbmV4cG9ydCB2YXIgS2luZCA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBOYW1lXG4gIE5BTUU6ICdOYW1lJyxcbiAgLy8gRG9jdW1lbnRcbiAgRE9DVU1FTlQ6ICdEb2N1bWVudCcsXG4gIE9QRVJBVElPTl9ERUZJTklUSU9OOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWYXJpYWJsZURlZmluaXRpb24nLFxuICBTRUxFQ1RJT05fU0VUOiAnU2VsZWN0aW9uU2V0JyxcbiAgRklFTEQ6ICdGaWVsZCcsXG4gIEFSR1VNRU5UOiAnQXJndW1lbnQnLFxuICAvLyBGcmFnbWVudHNcbiAgRlJBR01FTlRfU1BSRUFEOiAnRnJhZ21lbnRTcHJlYWQnLFxuICBJTkxJTkVfRlJBR01FTlQ6ICdJbmxpbmVGcmFnbWVudCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGcmFnbWVudERlZmluaXRpb24nLFxuICAvLyBWYWx1ZXNcbiAgVkFSSUFCTEU6ICdWYXJpYWJsZScsXG4gIElOVDogJ0ludFZhbHVlJyxcbiAgRkxPQVQ6ICdGbG9hdFZhbHVlJyxcbiAgU1RSSU5HOiAnU3RyaW5nVmFsdWUnLFxuICBCT09MRUFOOiAnQm9vbGVhblZhbHVlJyxcbiAgTlVMTDogJ051bGxWYWx1ZScsXG4gIEVOVU06ICdFbnVtVmFsdWUnLFxuICBMSVNUOiAnTGlzdFZhbHVlJyxcbiAgT0JKRUNUOiAnT2JqZWN0VmFsdWUnLFxuICBPQkpFQ1RfRklFTEQ6ICdPYmplY3RGaWVsZCcsXG4gIC8vIERpcmVjdGl2ZXNcbiAgRElSRUNUSVZFOiAnRGlyZWN0aXZlJyxcbiAgLy8gVHlwZXNcbiAgTkFNRURfVFlQRTogJ05hbWVkVHlwZScsXG4gIExJU1RfVFlQRTogJ0xpc3RUeXBlJyxcbiAgTk9OX05VTExfVFlQRTogJ05vbk51bGxUeXBlJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BX0RFRklOSVRJT046ICdTY2hlbWFEZWZpbml0aW9uJyxcbiAgT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTjogJ09wZXJhdGlvblR5cGVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBEZWZpbml0aW9uc1xuICBTQ0FMQVJfVFlQRV9ERUZJTklUSU9OOiAnU2NhbGFyVHlwZURlZmluaXRpb24nLFxuICBPQkpFQ1RfVFlQRV9ERUZJTklUSU9OOiAnT2JqZWN0VHlwZURlZmluaXRpb24nLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRmllbGREZWZpbml0aW9uJyxcbiAgSU5QVVRfVkFMVUVfREVGSU5JVElPTjogJ0lucHV0VmFsdWVEZWZpbml0aW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfREVGSU5JVElPTjogJ0ludGVyZmFjZVR5cGVEZWZpbml0aW9uJyxcbiAgVU5JT05fVFlQRV9ERUZJTklUSU9OOiAnVW5pb25UeXBlRGVmaW5pdGlvbicsXG4gIEVOVU1fVFlQRV9ERUZJTklUSU9OOiAnRW51bVR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9WQUxVRV9ERUZJTklUSU9OOiAnRW51bVZhbHVlRGVmaW5pdGlvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT046ICdJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uJyxcbiAgLy8gRGlyZWN0aXZlIERlZmluaXRpb25zXG4gIERJUkVDVElWRV9ERUZJTklUSU9OOiAnRGlyZWN0aXZlRGVmaW5pdGlvbicsXG4gIC8vIFR5cGUgU3lzdGVtIEV4dGVuc2lvbnNcbiAgU0NIRU1BX0VYVEVOU0lPTjogJ1NjaGVtYUV4dGVuc2lvbicsXG4gIC8vIFR5cGUgRXh0ZW5zaW9uc1xuICBTQ0FMQVJfVFlQRV9FWFRFTlNJT046ICdTY2FsYXJUeXBlRXh0ZW5zaW9uJyxcbiAgT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnT2JqZWN0VHlwZUV4dGVuc2lvbicsXG4gIElOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTjogJ0ludGVyZmFjZVR5cGVFeHRlbnNpb24nLFxuICBVTklPTl9UWVBFX0VYVEVOU0lPTjogJ1VuaW9uVHlwZUV4dGVuc2lvbicsXG4gIEVOVU1fVFlQRV9FWFRFTlNJT046ICdFbnVtVHlwZUV4dGVuc2lvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTjogJ0lucHV0T2JqZWN0VHlwZUV4dGVuc2lvbidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgcG9zc2libGUga2luZCB2YWx1ZXMgb2YgQVNUIG5vZGVzLlxuICovXG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZSB9IGZyb20gXCIuL2Jsb2NrU3RyaW5nLm1qc1wiO1xuLyoqXG4gKiBHaXZlbiBhIFNvdXJjZSBvYmplY3QsIGNyZWF0ZXMgYSBMZXhlciBmb3IgdGhhdCBzb3VyY2UuXG4gKiBBIExleGVyIGlzIGEgc3RhdGVmdWwgc3RyZWFtIGdlbmVyYXRvciBpbiB0aGF0IGV2ZXJ5IHRpbWVcbiAqIGl0IGlzIGFkdmFuY2VkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHRva2VuIGluIHRoZSBTb3VyY2UuIEFzc3VtaW5nIHRoZVxuICogc291cmNlIGxleGVzLCB0aGUgZmluYWwgVG9rZW4gZW1pdHRlZCBieSB0aGUgbGV4ZXIgd2lsbCBiZSBvZiBraW5kXG4gKiBFT0YsIGFmdGVyIHdoaWNoIHRoZSBsZXhlciB3aWxsIHJlcGVhdGVkbHkgcmV0dXJuIHRoZSBzYW1lIEVPRiB0b2tlblxuICogd2hlbmV2ZXIgY2FsbGVkLlxuICovXG5cbmV4cG9ydCB2YXIgTGV4ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIHByZXZpb3VzbHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAoMS1pbmRleGVkKSBsaW5lIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGUgY3VycmVudCBsaW5lIGJlZ2lucy5cbiAgICovXG4gIGZ1bmN0aW9uIExleGVyKHNvdXJjZSkge1xuICAgIHZhciBzdGFydE9mRmlsZVRva2VuID0gbmV3IFRva2VuKFRva2VuS2luZC5TT0YsIDAsIDAsIDAsIDAsIG51bGwpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMubGFzdFRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLnRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSAxO1xuICAgIHRoaXMubGluZVN0YXJ0ID0gMDtcbiAgfVxuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIHRva2VuIHN0cmVhbSB0byB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gTGV4ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZHZhbmNlID0gZnVuY3Rpb24gYWR2YW5jZSgpIHtcbiAgICB0aGlzLmxhc3RUb2tlbiA9IHRoaXMudG9rZW47XG4gICAgdmFyIHRva2VuID0gdGhpcy50b2tlbiA9IHRoaXMubG9va2FoZWFkKCk7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG4gIC8qKlxuICAgKiBMb29rcyBhaGVhZCBhbmQgcmV0dXJucyB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbiwgYnV0IGRvZXMgbm90IGNoYW5nZVxuICAgKiB0aGUgc3RhdGUgb2YgTGV4ZXIuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmxvb2thaGVhZCA9IGZ1bmN0aW9uIGxvb2thaGVhZCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgIT09IFRva2VuS2luZC5FT0YpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIF90b2tlbiRuZXh0O1xuXG4gICAgICAgIC8vIE5vdGU6IG5leHQgaXMgb25seSBtdXRhYmxlIGR1cmluZyBwYXJzaW5nLCBzbyB3ZSBjYXN0IHRvIGFsbG93IHRoaXMuXG4gICAgICAgIHRva2VuID0gKF90b2tlbiRuZXh0ID0gdG9rZW4ubmV4dCkgIT09IG51bGwgJiYgX3Rva2VuJG5leHQgIT09IHZvaWQgMCA/IF90b2tlbiRuZXh0IDogdG9rZW4ubmV4dCA9IHJlYWRUb2tlbih0aGlzLCB0b2tlbik7XG4gICAgICB9IHdoaWxlICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQ09NTUVOVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9O1xuXG4gIHJldHVybiBMZXhlcjtcbn0oKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSB7XG4gIHJldHVybiBraW5kID09PSBUb2tlbktpbmQuQkFORyB8fCBraW5kID09PSBUb2tlbktpbmQuRE9MTEFSIHx8IGtpbmQgPT09IFRva2VuS2luZC5BTVAgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLlNQUkVBRCB8fCBraW5kID09PSBUb2tlbktpbmQuQ09MT04gfHwga2luZCA9PT0gVG9rZW5LaW5kLkVRVUFMUyB8fCBraW5kID09PSBUb2tlbktpbmQuQVQgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNLRVRfTCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9SIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5QSVBFIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SO1xufVxuXG5mdW5jdGlvbiBwcmludENoYXJDb2RlKGNvZGUpIHtcbiAgcmV0dXJuICgvLyBOYU4vdW5kZWZpbmVkIHJlcHJlc2VudHMgYWNjZXNzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAgIGlzTmFOKGNvZGUpID8gVG9rZW5LaW5kLkVPRiA6IC8vIFRydXN0IEpTT04gZm9yIEFTQ0lJLlxuICAgIGNvZGUgPCAweDAwN2YgPyBKU09OLnN0cmluZ2lmeShTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKSA6IC8vIE90aGVyd2lzZSBwcmludCB0aGUgZXNjYXBlZCBmb3JtLlxuICAgIFwiXFxcIlxcXFx1XCIuY29uY2F0KCgnMDAnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTQpLCBcIlxcXCJcIilcbiAgKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbmV4dCB0b2tlbiBmcm9tIHRoZSBzb3VyY2Ugc3RhcnRpbmcgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIFRoaXMgc2tpcHMgb3ZlciB3aGl0ZXNwYWNlIHVudGlsIGl0IGZpbmRzIHRoZSBuZXh0IGxleGFibGUgdG9rZW4sIHRoZW4gbGV4ZXNcbiAqIHB1bmN0dWF0b3JzIGltbWVkaWF0ZWx5IG9yIGNhbGxzIHRoZSBhcHByb3ByaWF0ZSBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vcmVcbiAqIGNvbXBsaWNhdGVkIHRva2Vucy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRUb2tlbihsZXhlciwgcHJldikge1xuICB2YXIgc291cmNlID0gbGV4ZXIuc291cmNlO1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zID0gcHJldi5lbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGJvZHlMZW5ndGgpIHtcbiAgICB2YXIgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3MpO1xuICAgIHZhciBfbGluZSA9IGxleGVyLmxpbmU7XG5cbiAgICB2YXIgX2NvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7IC8vIFNvdXJjZUNoYXJhY3RlclxuXG5cbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgMHhmZWZmOiAvLyA8Qk9NPlxuXG4gICAgICBjYXNlIDk6IC8vICAgXFx0XG5cbiAgICAgIGNhc2UgMzI6IC8vICA8c3BhY2U+XG5cbiAgICAgIGNhc2UgNDQ6XG4gICAgICAgIC8vICAsXG4gICAgICAgICsrcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAxMDpcbiAgICAgICAgLy8gIFxcblxuICAgICAgICArK3BvcztcbiAgICAgICAgKytsZXhlci5saW5lO1xuICAgICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKytwb3M7XG4gICAgICAgIH1cblxuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMzM6XG4gICAgICAgIC8vICAhXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJBTkcsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM1OlxuICAgICAgICAvLyAgI1xuICAgICAgICByZXR1cm4gcmVhZENvbW1lbnQoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNjpcbiAgICAgICAgLy8gICRcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRE9MTEFSLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gICZcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQU1QLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgLy8gIChcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDE6XG4gICAgICAgIC8vICApXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBBUkVOX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ2OlxuICAgICAgICAvLyAgLlxuICAgICAgICBpZiAoYm9keS5jaGFyQ29kZUF0KHBvcyArIDEpID09PSA0NiAmJiBib2R5LmNoYXJDb2RlQXQocG9zICsgMikgPT09IDQ2KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuU1BSRUFELCBwb3MsIHBvcyArIDMsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICAvLyAgOlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT0xPTiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjE6XG4gICAgICAgIC8vICA9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVRVUFMUywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjQ6XG4gICAgICAgIC8vICBAXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkFULCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MTpcbiAgICAgICAgLy8gIFtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MzpcbiAgICAgICAgLy8gIF1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjM6XG4gICAgICAgIC8vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0VfTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI0OlxuICAgICAgICAvLyB8XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBJUEUsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyNTpcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNDpcbiAgICAgICAgLy8gIFwiXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gMzQpIHtcbiAgICAgICAgICByZXR1cm4gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldiwgbGV4ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0NTogLy8gIC1cblxuICAgICAgY2FzZSA0ODogLy8gIDBcblxuICAgICAgY2FzZSA0OTogLy8gIDFcblxuICAgICAgY2FzZSA1MDogLy8gIDJcblxuICAgICAgY2FzZSA1MTogLy8gIDNcblxuICAgICAgY2FzZSA1MjogLy8gIDRcblxuICAgICAgY2FzZSA1MzogLy8gIDVcblxuICAgICAgY2FzZSA1NDogLy8gIDZcblxuICAgICAgY2FzZSA1NTogLy8gIDdcblxuICAgICAgY2FzZSA1NjogLy8gIDhcblxuICAgICAgY2FzZSA1NzpcbiAgICAgICAgLy8gIDlcbiAgICAgICAgcmV0dXJuIHJlYWROdW1iZXIoc291cmNlLCBwb3MsIGNvZGUsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NTogLy8gIEFcblxuICAgICAgY2FzZSA2NjogLy8gIEJcblxuICAgICAgY2FzZSA2NzogLy8gIENcblxuICAgICAgY2FzZSA2ODogLy8gIERcblxuICAgICAgY2FzZSA2OTogLy8gIEVcblxuICAgICAgY2FzZSA3MDogLy8gIEZcblxuICAgICAgY2FzZSA3MTogLy8gIEdcblxuICAgICAgY2FzZSA3MjogLy8gIEhcblxuICAgICAgY2FzZSA3MzogLy8gIElcblxuICAgICAgY2FzZSA3NDogLy8gIEpcblxuICAgICAgY2FzZSA3NTogLy8gIEtcblxuICAgICAgY2FzZSA3NjogLy8gIExcblxuICAgICAgY2FzZSA3NzogLy8gIE1cblxuICAgICAgY2FzZSA3ODogLy8gIE5cblxuICAgICAgY2FzZSA3OTogLy8gIE9cblxuICAgICAgY2FzZSA4MDogLy8gIFBcblxuICAgICAgY2FzZSA4MTogLy8gIFFcblxuICAgICAgY2FzZSA4MjogLy8gIFJcblxuICAgICAgY2FzZSA4MzogLy8gIFNcblxuICAgICAgY2FzZSA4NDogLy8gIFRcblxuICAgICAgY2FzZSA4NTogLy8gIFVcblxuICAgICAgY2FzZSA4NjogLy8gIFZcblxuICAgICAgY2FzZSA4NzogLy8gIFdcblxuICAgICAgY2FzZSA4ODogLy8gIFhcblxuICAgICAgY2FzZSA4OTogLy8gIFlcblxuICAgICAgY2FzZSA5MDogLy8gIFpcblxuICAgICAgY2FzZSA5NTogLy8gIF9cblxuICAgICAgY2FzZSA5NzogLy8gIGFcblxuICAgICAgY2FzZSA5ODogLy8gIGJcblxuICAgICAgY2FzZSA5OTogLy8gIGNcblxuICAgICAgY2FzZSAxMDA6IC8vIGRcblxuICAgICAgY2FzZSAxMDE6IC8vIGVcblxuICAgICAgY2FzZSAxMDI6IC8vIGZcblxuICAgICAgY2FzZSAxMDM6IC8vIGdcblxuICAgICAgY2FzZSAxMDQ6IC8vIGhcblxuICAgICAgY2FzZSAxMDU6IC8vIGlcblxuICAgICAgY2FzZSAxMDY6IC8vIGpcblxuICAgICAgY2FzZSAxMDc6IC8vIGtcblxuICAgICAgY2FzZSAxMDg6IC8vIGxcblxuICAgICAgY2FzZSAxMDk6IC8vIG1cblxuICAgICAgY2FzZSAxMTA6IC8vIG5cblxuICAgICAgY2FzZSAxMTE6IC8vIG9cblxuICAgICAgY2FzZSAxMTI6IC8vIHBcblxuICAgICAgY2FzZSAxMTM6IC8vIHFcblxuICAgICAgY2FzZSAxMTQ6IC8vIHJcblxuICAgICAgY2FzZSAxMTU6IC8vIHNcblxuICAgICAgY2FzZSAxMTY6IC8vIHRcblxuICAgICAgY2FzZSAxMTc6IC8vIHVcblxuICAgICAgY2FzZSAxMTg6IC8vIHZcblxuICAgICAgY2FzZSAxMTk6IC8vIHdcblxuICAgICAgY2FzZSAxMjA6IC8vIHhcblxuICAgICAgY2FzZSAxMjE6IC8vIHlcblxuICAgICAgY2FzZSAxMjI6XG4gICAgICAgIC8vIHpcbiAgICAgICAgcmV0dXJuIHJlYWROYW1lKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldik7XG4gICAgfVxuXG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3MsIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpKTtcbiAgfVxuXG4gIHZhciBsaW5lID0gbGV4ZXIubGluZTtcbiAgdmFyIGNvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7XG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVPRiwgYm9keUxlbmd0aCwgYm9keUxlbmd0aCwgbGluZSwgY29sLCBwcmV2KTtcbn1cbi8qKlxuICogUmVwb3J0IGEgbWVzc2FnZSB0aGF0IGFuIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIHdhcyBlbmNvdW50ZXJlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpIHtcbiAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgY29udGFpbiB0aGUgaW52YWxpZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSAzOSkge1xuICAgIC8vICdcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgc2luZ2xlIHF1b3RlIGNoYXJhY3RlciAoXFwnKSwgZGlkIHlvdSBtZWFuIHRvIHVzZSBhIGRvdWJsZSBxdW90ZSAoXCIpPyc7XG4gIH1cblxuICByZXR1cm4gXCJDYW5ub3QgcGFyc2UgdGhlIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIik7XG59XG4vKipcbiAqIFJlYWRzIGEgY29tbWVudCB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiAjW1xcdTAwMDlcXHUwMDIwLVxcdUZGRkZdKlxuICovXG5cblxuZnVuY3Rpb24gcmVhZENvbW1lbnQoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBjb2RlO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcblxuICBkbyB7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgfSB3aGlsZSAoIWlzTmFOKGNvZGUpICYmICggLy8gU291cmNlQ2hhcmFjdGVyIGJ1dCBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSA+IDB4MDAxZiB8fCBjb2RlID09PSAweDAwMDkpKTtcblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT01NRU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCArIDEsIHBvc2l0aW9uKSk7XG59XG4vKipcbiAqIFJlYWRzIGEgbnVtYmVyIHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLCBlaXRoZXIgYSBmbG9hdFxuICogb3IgYW4gaW50IGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgZGVjaW1hbCBwb2ludCBhcHBlYXJzLlxuICpcbiAqIEludDogICAtPygwfFsxLTldWzAtOV0qKVxuICogRmxvYXQ6IC0/KDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KChFfGUpKCt8LSk/WzAtOV0rKT9cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROdW1iZXIoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlLCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgaXNGbG9hdCA9IGZhbHNlO1xuXG4gIGlmIChjb2RlID09PSA0NSkge1xuICAgIC8vIC1cbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDQ4KSB7XG4gICAgLy8gMFxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cbiAgICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCB1bmV4cGVjdGVkIGRpZ2l0IGFmdGVyIDA6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAvLyAuXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNjkgfHwgY29kZSA9PT0gMTAxKSB7XG4gICAgLy8gRSBlXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSkge1xuICAgICAgLy8gKyAtXG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfSAvLyBOdW1iZXJzIGNhbm5vdCBiZSBmb2xsb3dlZCBieSAuIG9yIE5hbWVTdGFydFxuXG5cbiAgaWYgKGNvZGUgPT09IDQ2IHx8IGlzTmFtZVN0YXJ0KGNvZGUpKSB7XG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIG51bWJlciwgZXhwZWN0ZWQgZGlnaXQgYnV0IGdvdDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKGlzRmxvYXQgPyBUb2tlbktpbmQuRkxPQVQgOiBUb2tlbktpbmQuSU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV3IHBvc2l0aW9uIGluIHRoZSBzb3VyY2UgYWZ0ZXIgcmVhZGluZyBkaWdpdHMuXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkRGlnaXRzKHNvdXJjZSwgc3RhcnQsIGZpcnN0Q29kZSkge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG5cbiAgaWYgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nykge1xuICAgIC8vIDAgLSA5XG4gICAgZG8ge1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICB9IHdoaWxlIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpOyAvLyAwIC0gOVxuXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbn1cbi8qKlxuICogUmVhZHMgYSBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCIoW15cIlxcXFxcXHUwMDBBXFx1MDAwRF18KFxcXFwodVswLTlhLWZBLUZdezR9fFtcIlxcXFwvYmZucnRdKSkpKlwiXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjaHVua1N0YXJ0ID0gcG9zaXRpb247XG4gIHZhciBjb2RlID0gMDtcbiAgdmFyIHZhbHVlID0gJyc7XG5cbiAgd2hpbGUgKHBvc2l0aW9uIDwgYm9keS5sZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAvLyBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIC8vIENsb3NpbmcgUXVvdGUgKFwiKVxuICAgIGlmIChjb2RlID09PSAzNCkge1xuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDEsIGxpbmUsIGNvbCwgcHJldiwgdmFsdWUpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSkge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gU3RyaW5nOiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICB9XG5cbiAgICArK3Bvc2l0aW9uO1xuXG4gICAgaWYgKGNvZGUgPT09IDkyKSB7XG4gICAgICAvLyBcXFxuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbiAtIDEpO1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHZhbHVlICs9ICdcIic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICB2YWx1ZSArPSAnLyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxcXCc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxmJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxuJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxyJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFx0JztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB1WFhYWFxuICAgICAgICAgICAgdmFyIGNoYXJDb2RlID0gdW5pQ2hhckNvZGUoYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgNCkpO1xuXG4gICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAwKSB7XG4gICAgICAgICAgICAgIHZhciBpbnZhbGlkU2VxdWVuY2UgPSBib2R5LnNsaWNlKHBvc2l0aW9uICsgMSwgcG9zaXRpb24gKyA1KTtcbiAgICAgICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFx1XCIuY29uY2F0KGludmFsaWRTZXF1ZW5jZSwgXCIuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFxcIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogUmVhZHMgYSBibG9jayBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCJcIlwiKFwiP1wiPyhcXFxcXCJcIlwifFxcXFwoPyE9XCJcIlwiKXxbXlwiXFxcXF0pKSpcIlwiXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRCbG9ja1N0cmluZyhzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYsIGxleGVyKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMztcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgcmF3VmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpKSB7XG4gICAgLy8gQ2xvc2luZyBUcmlwbGUtUXVvdGUgKFwiXCJcIilcbiAgICBpZiAoY29kZSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCkge1xuICAgICAgcmF3VmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CTE9DS19TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDMsIGxpbmUsIGNvbCwgcHJldiwgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdWYWx1ZSkpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSAmJiBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAxMCkge1xuICAgICAgLy8gbmV3IGxpbmVcbiAgICAgICsrcG9zaXRpb247XG4gICAgICArK2xleGVyLmxpbmU7XG4gICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDEzKSB7XG4gICAgICAvLyBjYXJyaWFnZSByZXR1cm5cbiAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMTApIHtcbiAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICsrcG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoIC8vIEVzY2FwZSBUcmlwbGUtUXVvdGUgKFxcXCJcIlwiKVxuICAgIGNvZGUgPT09IDkyICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAyKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMykgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKSArICdcIlwiXCInO1xuICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgKytwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogQ29udmVydHMgZm91ciBoZXhhZGVjaW1hbCBjaGFycyB0byB0aGUgaW50ZWdlciB0aGF0IHRoZVxuICogc3RyaW5nIHJlcHJlc2VudHMuIEZvciBleGFtcGxlLCB1bmlDaGFyQ29kZSgnMCcsJzAnLCcwJywnZicpXG4gKiB3aWxsIHJldHVybiAxNSwgYW5kIHVuaUNoYXJDb2RlKCcwJywnMCcsJ2YnLCdmJykgcmV0dXJucyAyNTUuXG4gKlxuICogUmV0dXJucyBhIG5lZ2F0aXZlIG51bWJlciBvbiBlcnJvciwgaWYgYSBjaGFyIHdhcyBpbnZhbGlkLlxuICpcbiAqIFRoaXMgaXMgaW1wbGVtZW50ZWQgYnkgbm90aW5nIHRoYXQgY2hhcjJoZXgoKSByZXR1cm5zIC0xIG9uIGVycm9yLFxuICogd2hpY2ggbWVhbnMgdGhlIHJlc3VsdCBvZiBPUmluZyB0aGUgY2hhcjJoZXgoKSB3aWxsIGFsc28gYmUgbmVnYXRpdmUuXG4gKi9cblxuXG5mdW5jdGlvbiB1bmlDaGFyQ29kZShhLCBiLCBjLCBkKSB7XG4gIHJldHVybiBjaGFyMmhleChhKSA8PCAxMiB8IGNoYXIyaGV4KGIpIDw8IDggfCBjaGFyMmhleChjKSA8PCA0IHwgY2hhcjJoZXgoZCk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgaGV4IGNoYXJhY3RlciB0byBpdHMgaW50ZWdlciB2YWx1ZS5cbiAqICcwJyBiZWNvbWVzIDAsICc5JyBiZWNvbWVzIDlcbiAqICdBJyBiZWNvbWVzIDEwLCAnRicgYmVjb21lcyAxNVxuICogJ2EnIGJlY29tZXMgMTAsICdmJyBiZWNvbWVzIDE1XG4gKlxuICogUmV0dXJucyAtMSBvbiBlcnJvci5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNoYXIyaGV4KGEpIHtcbiAgcmV0dXJuIGEgPj0gNDggJiYgYSA8PSA1NyA/IGEgLSA0OCAvLyAwLTlcbiAgOiBhID49IDY1ICYmIGEgPD0gNzAgPyBhIC0gNTUgLy8gQS1GXG4gIDogYSA+PSA5NyAmJiBhIDw9IDEwMiA/IGEgLSA4NyAvLyBhLWZcbiAgOiAtMTtcbn1cbi8qKlxuICogUmVhZHMgYW4gYWxwaGFudW1lcmljICsgdW5kZXJzY29yZSBuYW1lIGZyb20gdGhlIHNvdXJjZS5cbiAqXG4gKiBbX0EtWmEtel1bXzAtOUEtWmEtel0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkTmFtZShzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGJvZHlMZW5ndGggPSBib2R5Lmxlbmd0aDtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAxO1xuICB2YXIgY29kZSA9IDA7XG5cbiAgd2hpbGUgKHBvc2l0aW9uICE9PSBib2R5TGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkgJiYgKGNvZGUgPT09IDk1IHx8IC8vIF9cbiAgY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IHx8IC8vIDAtOVxuICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHwgLy8gQS1aXG4gIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIC8vIGEtelxuICApIHtcbiAgICArK3Bvc2l0aW9uO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuTkFNRSwgc3RhcnQsIHBvc2l0aW9uLCBsaW5lLCBjb2wsIHByZXYsIGJvZHkuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKSk7XG59IC8vIF8gQS1aIGEtelxuXG5cbmZ1bmN0aW9uIGlzTmFtZVN0YXJ0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IDk1IHx8IGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCBjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyO1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgbG9jYXRpb24gaW4gYSBTb3VyY2UuXG4gKi9cblxuLyoqXG4gKiBUYWtlcyBhIFNvdXJjZSBhbmQgYSBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0LCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICogbGluZSBhbmQgY29sdW1uIGFzIGEgU291cmNlTG9jYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbihzb3VyY2UsIHBvc2l0aW9uKSB7XG4gIHZhciBsaW5lUmVnZXhwID0gL1xcclxcbnxbXFxuXFxyXS9nO1xuICB2YXIgbGluZSA9IDE7XG4gIHZhciBjb2x1bW4gPSBwb3NpdGlvbiArIDE7XG4gIHZhciBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlZ2V4cC5leGVjKHNvdXJjZS5ib2R5KSkgJiYgbWF0Y2guaW5kZXggPCBwb3NpdGlvbikge1xuICAgIGxpbmUgKz0gMTtcbiAgICBjb2x1bW4gPSBwb3NpdGlvbiArIDEgLSAobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaW5lOiBsaW5lLFxuICAgIGNvbHVtbjogY29sdW1uXG4gIH07XG59XG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiLi9raW5kcy5tanNcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgU291cmNlLCBpc1NvdXJjZSB9IGZyb20gXCIuL3NvdXJjZS5tanNcIjtcbmltcG9ydCB7IERpcmVjdGl2ZUxvY2F0aW9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlTG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBMZXhlciwgaXNQdW5jdHVhdG9yVG9rZW5LaW5kIH0gZnJvbSBcIi4vbGV4ZXIubWpzXCI7XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byBjb250cm9sIHBhcnNlciBiZWhhdmlvclxuICovXG5cbi8qKlxuICogR2l2ZW4gYSBHcmFwaFFMIHNvdXJjZSwgcGFyc2VzIGl0IGludG8gYSBEb2N1bWVudC5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZURvY3VtZW50KCk7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIHZhbHVlIChleC4gYFs0Ml1gKSwgcGFyc2UgdGhlIEFTVCBmb3JcbiAqIHRoYXQgdmFsdWUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFZhbHVlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHZhbHVlRnJvbUFTVCgpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhbHVlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB2YWx1ZSA9IHBhcnNlci5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuRU9GKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBHaXZlbiBhIHN0cmluZyBjb250YWluaW5nIGEgR3JhcGhRTCBUeXBlIChleC4gYFtJbnQhXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB0eXBlLlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aXRoaW4gdG9vbHMgdGhhdCBvcGVyYXRlIHVwb24gR3JhcGhRTCBUeXBlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHR5cGVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5TT0YpO1xuICB2YXIgdHlwZSA9IHBhcnNlci5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdHlwZTtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBleHBvcnRlZCBvbmx5IHRvIGFzc2lzdCBwZW9wbGUgaW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biBwYXJzZXJzXG4gKiB3aXRob3V0IGR1cGxpY2F0aW5nIHRvbyBtdWNoIGNvZGUgYW5kIHNob3VsZCBiZSB1c2VkIG9ubHkgYXMgbGFzdCByZXNvcnQgZm9yIGNhc2VzXG4gKiBzdWNoIGFzIGV4cGVyaW1lbnRhbCBzeW50YXggb3IgaWYgY2VydGFpbiBmZWF0dXJlcyBjb3VsZCBub3QgYmUgY29udHJpYnV0ZWQgdXBzdHJlYW0uXG4gKlxuICogSXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgaW50ZXJuYWwgQVBJIGFuZCBpcyB2ZXJzaW9uZWQsIHNvIGFueSBjaGFuZ2VzIHRvIGl0IGFyZSBuZXZlclxuICogY29uc2lkZXJlZCBicmVha2luZyBjaGFuZ2VzLiBJZiB5b3Ugc3RpbGwgbmVlZCB0byBzdXBwb3J0IG11bHRpcGxlIHZlcnNpb25zIG9mIHRoZVxuICogbGlicmFyeSwgcGxlYXNlIHVzZSB0aGUgYHZlcnNpb25JbmZvYCB2YXJpYWJsZSBmb3IgdmVyc2lvbiBkZXRlY3Rpb24uXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IHZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNvdXJjZU9iaiA9IGlzU291cmNlKHNvdXJjZSkgPyBzb3VyY2UgOiBuZXcgU291cmNlKHNvdXJjZSk7XG4gICAgdGhpcy5fbGV4ZXIgPSBuZXcgTGV4ZXIoc291cmNlT2JqKTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogQ29udmVydHMgYSBuYW1lIGxleCB0b2tlbiBpbnRvIGEgbmFtZSBwYXJzZSBub2RlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZU5hbWUgPSBmdW5jdGlvbiBwYXJzZU5hbWUoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRSxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEb2N1bWVudCBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBEb2N1bWVudCA6IERlZmluaXRpb24rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRG9jdW1lbnQgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRPQ1VNRU5ULFxuICAgICAgZGVmaW5pdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuU09GLCB0aGlzLnBhcnNlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkVPRiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERlZmluaXRpb24gOlxuICAgKiAgIC0gRXhlY3V0YWJsZURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EZWZpbml0aW9uXG4gICAqICAgLSBUeXBlU3lzdGVtRXh0ZW5zaW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEZWZpbml0aW9uIDpcbiAgICogICAtIE9wZXJhdGlvbkRlZmluaXRpb25cbiAgICogICAtIEZyYWdtZW50RGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZURlZmluaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAncXVlcnknOlxuICAgICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZnJhZ21lbnQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgY2FzZSAnc2NhbGFyJzpcbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgIGNhc2UgJ3VuaW9uJzpcbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZXh0ZW5kJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIE9wZXJhdGlvbnMgc2VjdGlvbi5cblxuICAvKipcbiAgICogT3BlcmF0aW9uRGVmaW5pdGlvbiA6XG4gICAqICAtIFNlbGVjdGlvblNldFxuICAgKiAgLSBPcGVyYXRpb25UeXBlIE5hbWU/IFZhcmlhYmxlRGVmaW5pdGlvbnM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5PUEVSQVRJT05fREVGSU5JVElPTixcbiAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHZhcmlhYmxlRGVmaW5pdGlvbnM6IFtdLFxuICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBvcGVyYXRpb24gPSB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZSgpO1xuICAgIHZhciBuYW1lO1xuXG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlIDogb25lIG9mIHF1ZXJ5IG11dGF0aW9uIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGUgPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvblR5cGUoKSB7XG4gICAgdmFyIG9wZXJhdGlvblRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdGlvblRva2VuLnZhbHVlKSB7XG4gICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIHJldHVybiAncXVlcnknO1xuXG4gICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIHJldHVybiAnbXV0YXRpb24nO1xuXG4gICAgICBjYXNlICdzdWJzY3JpcHRpb24nOlxuICAgICAgICByZXR1cm4gJ3N1YnNjcmlwdGlvbic7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKG9wZXJhdGlvblRva2VuKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9ucyA6ICggVmFyaWFibGVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucyA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VWYXJpYWJsZURlZmluaXRpb24sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9uIDogVmFyaWFibGUgOiBUeXBlIERlZmF1bHRWYWx1ZT8gRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEVfREVGSU5JVElPTixcbiAgICAgIHZhcmlhYmxlOiB0aGlzLnBhcnNlVmFyaWFibGUoKSxcbiAgICAgIHR5cGU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCkpLFxuICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZhcmlhYmxlIDogJCBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGUgPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkRPTExBUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb25TZXQgOiB7IFNlbGVjdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uU2V0KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNFTEVDVElPTl9TRVQsXG4gICAgICBzZWxlY3Rpb25zOiB0aGlzLm1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VTZWxlY3Rpb24sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2VsZWN0aW9uIDpcbiAgICogICAtIEZpZWxkXG4gICAqICAgLSBGcmFnbWVudFNwcmVhZFxuICAgKiAgIC0gSW5saW5lRnJhZ21lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTZWxlY3Rpb24gPSBmdW5jdGlvbiBwYXJzZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TUFJFQUQpID8gdGhpcy5wYXJzZUZyYWdtZW50KCkgOiB0aGlzLnBhcnNlRmllbGQoKTtcbiAgfVxuICAvKipcbiAgICogRmllbGQgOiBBbGlhcz8gTmFtZSBBcmd1bWVudHM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldD9cbiAgICpcbiAgICogQWxpYXMgOiBOYW1lIDpcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlRmllbGQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWVPckFsaWFzID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYWxpYXM7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5DT0xPTikpIHtcbiAgICAgIGFsaWFzID0gbmFtZU9yQWxpYXM7XG4gICAgICBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWVPckFsaWFzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxELFxuICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhmYWxzZSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkgPyB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c1tDb25zdF0gOiAoIEFyZ3VtZW50Wz9Db25zdF0rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSB7XG4gICAgdmFyIGl0ZW0gPSBpc0NvbnN0ID8gdGhpcy5wYXJzZUNvbnN0QXJndW1lbnQgOiB0aGlzLnBhcnNlQXJndW1lbnQ7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCBpdGVtLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50W0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFsdWU6IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwoZmFsc2UpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wYXJzZUNvbnN0QXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnN0QXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgdmFsdWU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIEZyYWdtZW50cyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBDb3JyZXNwb25kcyB0byBib3RoIEZyYWdtZW50U3ByZWFkIGFuZCBJbmxpbmVGcmFnbWVudCBpbiB0aGUgc3BlYy5cbiAgICpcbiAgICogRnJhZ21lbnRTcHJlYWQgOiAuLi4gRnJhZ21lbnROYW1lIERpcmVjdGl2ZXM/XG4gICAqXG4gICAqIElubGluZUZyYWdtZW50IDogLi4uIFR5cGVDb25kaXRpb24/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50ID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5TUFJFQUQpO1xuICAgIHZhciBoYXNUeXBlQ29uZGl0aW9uID0gdGhpcy5leHBlY3RPcHRpb25hbEtleXdvcmQoJ29uJyk7XG5cbiAgICBpZiAoIWhhc1R5cGVDb25kaXRpb24gJiYgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5GUkFHTUVOVF9TUFJFQUQsXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTkxJTkVfRlJBR01FTlQsXG4gICAgICB0eXBlQ29uZGl0aW9uOiBoYXNUeXBlQ29uZGl0aW9uID8gdGhpcy5wYXJzZU5hbWVkVHlwZSgpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEZyYWdtZW50RGVmaW5pdGlvbiA6XG4gICAqICAgLSBmcmFnbWVudCBGcmFnbWVudE5hbWUgb24gVHlwZUNvbmRpdGlvbiBEaXJlY3RpdmVzPyBTZWxlY3Rpb25TZXRcbiAgICpcbiAgICogVHlwZUNvbmRpdGlvbiA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50RGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9ucztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZnJhZ21lbnQnKTsgLy8gRXhwZXJpbWVudGFsIHN1cHBvcnQgZm9yIGRlZmluaW5nIHZhcmlhYmxlcyB3aXRoaW4gZnJhZ21lbnRzIGNoYW5nZXNcbiAgICAvLyB0aGUgZ3JhbW1hciBvZiBGcmFnbWVudERlZmluaXRpb246XG4gICAgLy8gICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBWYXJpYWJsZURlZmluaXRpb25zPyBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX29wdGlvbnMuZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX0RFRklOSVRJT04sXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgIHR5cGVDb25kaXRpb246ICh0aGlzLmV4cGVjdEtleXdvcmQoJ29uJyksIHRoaXMucGFyc2VOYW1lZFR5cGUoKSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnROYW1lIDogTmFtZSBidXQgbm90IGBvbmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGcmFnbWVudE5hbWUgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50TmFtZSgpIHtcbiAgICBpZiAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUgPT09ICdvbicpIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcnNlTmFtZSgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFZhbHVlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBWYWx1ZVtDb25zdF0gOlxuICAgKiAgIC0gW35Db25zdF0gVmFyaWFibGVcbiAgICogICAtIEludFZhbHVlXG4gICAqICAgLSBGbG9hdFZhbHVlXG4gICAqICAgLSBTdHJpbmdWYWx1ZVxuICAgKiAgIC0gQm9vbGVhblZhbHVlXG4gICAqICAgLSBOdWxsVmFsdWVcbiAgICogICAtIEVudW1WYWx1ZVxuICAgKiAgIC0gTGlzdFZhbHVlWz9Db25zdF1cbiAgICogICAtIE9iamVjdFZhbHVlWz9Db25zdF1cbiAgICpcbiAgICogQm9vbGVhblZhbHVlIDogb25lIG9mIGB0cnVlYCBgZmFsc2VgXG4gICAqXG4gICAqIE51bGxWYWx1ZSA6IGBudWxsYFxuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lIGJ1dCBub3QgYHRydWVgLCBgZmFsc2VgIG9yIGBudWxsYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVZhbHVlTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHN3aXRjaCAodG9rZW4ua2luZCkge1xuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0tFVF9MOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxpc3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkJSQUNFX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0KGlzQ29uc3QpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5JTlQ6XG4gICAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IEtpbmQuSU5ULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5GTE9BVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5GTE9BVCxcbiAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuU1RSSU5HOlxuICAgICAgY2FzZSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuTkFNRTpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcbiAgICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuQk9PTEVBTixcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLk5VTEwsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuRU5VTSxcbiAgICAgICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFRva2VuS2luZC5ET0xMQVI6XG4gICAgICAgIGlmICghaXNDb25zdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFyaWFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9O1xuXG4gIF9wcm90by5wYXJzZVN0cmluZ0xpdGVyYWwgPSBmdW5jdGlvbiBwYXJzZVN0cmluZ0xpdGVyYWwoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TVFJJTkcsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICBibG9jazogdG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLkJMT0NLX1NUUklORyxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogTGlzdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbIF1cbiAgICogICAtIFsgVmFsdWVbP0NvbnN0XSsgXVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUxpc3QgPSBmdW5jdGlvbiBwYXJzZUxpc3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHZhciBpdGVtID0gZnVuY3Rpb24gaXRlbSgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTElTVCxcbiAgICAgIHZhbHVlczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNLRVRfTCwgaXRlbSwgVG9rZW5LaW5kLkJSQUNLRVRfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSB7IH1cbiAgICogICAtIHsgT2JqZWN0RmllbGRbP0NvbnN0XSsgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0KGlzQ29uc3QpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1QsXG4gICAgICBmaWVsZHM6IHRoaXMuYW55KFRva2VuS2luZC5CUkFDRV9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0VfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdEZpZWxkW0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0RmllbGQgPSBmdW5jdGlvbiBwYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVF9GSUVMRCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEaXJlY3RpdmVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERpcmVjdGl2ZXNbQ29uc3RdIDogRGlyZWN0aXZlWz9Db25zdF0rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhpc0NvbnN0KSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsoVG9rZW5LaW5kLkFUKSkge1xuICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMucGFyc2VEaXJlY3RpdmUoaXNDb25zdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVbQ29uc3RdIDogQCBOYW1lIEFyZ3VtZW50c1s/Q29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5BVCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZU5hbWUoKSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBUeXBlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlIDpcbiAgICogICAtIE5hbWVkVHlwZVxuICAgKiAgIC0gTGlzdFR5cGVcbiAgICogICAtIE5vbk51bGxUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVHlwZVJlZmVyZW5jZSA9IGZ1bmN0aW9uIHBhcnNlVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgdHlwZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJSQUNLRVRfTCkpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SKTtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgIGtpbmQ6IEtpbmQuTElTVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VOYW1lZFR5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5CQU5HKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5OT05fTlVMTF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICAvKipcbiAgICogTmFtZWRUeXBlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU5hbWVkVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZWRUeXBlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk5BTUVEX1RZUEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGUgRGVmaW5pdGlvbiBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2hlbWFEZWZpbml0aW9uXG4gICAqICAgLSBUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlRGVmaW5pdGlvblxuICAgKlxuICAgKiBUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2FsYXJUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gT2JqZWN0VHlwZURlZmluaXRpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBVbmlvblR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBFbnVtVHlwZURlZmluaXRpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKSB7XG4gICAgLy8gTWFueSBkZWZpbml0aW9ucyBiZWdpbiB3aXRoIGEgZGVzY3JpcHRpb24gYW5kIHJlcXVpcmUgYSBsb29rYWhlYWQuXG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMucGVla0Rlc2NyaXB0aW9uKCkgPyB0aGlzLl9sZXhlci5sb29rYWhlYWQoKSA6IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2RpcmVjdGl2ZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLnBlZWtEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIHBlZWtEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TVFJJTkcpIHx8IHRoaXMucGVlayhUb2tlbktpbmQuQkxPQ0tfU1RSSU5HKTtcbiAgfVxuICAvKipcbiAgICogRGVzY3JpcHRpb24gOiBTdHJpbmdWYWx1ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJpbmdMaXRlcmFsKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XT8geyBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NIRU1BX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA6IE9wZXJhdGlvblR5cGUgOiBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNjYWxhclR5cGVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjYWxhciBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDQUxBUl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIERlc2NyaXB0aW9uP1xuICAgKiAgIHR5cGUgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzSW50ZXJmYWNlcyA6XG4gICAqICAgLSBpbXBsZW1lbnRzIGAmYD8gTmFtZWRUeXBlXG4gICAqICAgLSBJbXBsZW1lbnRzSW50ZXJmYWNlcyAmIE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzID0gZnVuY3Rpb24gcGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMyO1xuXG4gICAgaWYgKCF0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnaW1wbGVtZW50cycpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMyID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczIuYWxsb3dMZWdhY3lTRExJbXBsZW1lbnRzSW50ZXJmYWNlcykgPT09IHRydWUpIHtcbiAgICAgIHZhciB0eXBlcyA9IFtdOyAvLyBPcHRpb25hbCBsZWFkaW5nIGFtcGVyc2FuZFxuXG4gICAgICB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCk7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdHlwZXMucHVzaCh0aGlzLnBhcnNlTmFtZWRUeXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5BTVApIHx8IHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpO1xuXG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuQU1QLCB0aGlzLnBhcnNlTmFtZWRUeXBlKTtcbiAgfVxuICAvKipcbiAgICogRmllbGRzRGVmaW5pdGlvbiA6IHsgRmllbGREZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRmllbGRzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMzO1xuXG4gICAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHRoZSBTREw/XG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMzID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczMuYWxsb3dMZWdhY3lTRExFbXB0eUZpZWxkcykgPT09IHRydWUgJiYgdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSAmJiB0aGlzLl9sZXhlci5sb29rYWhlYWQoKS5raW5kID09PSBUb2tlbktpbmQuQlJBQ0VfUikge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VGaWVsZERlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgfVxuICAvKipcbiAgICogRmllbGREZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IDogVHlwZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZERlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUZpZWxkRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxEX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c0RlZmluaXRpb24gOiAoIElucHV0VmFsdWVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnREZWZzID0gZnVuY3Rpb24gcGFyc2VBcmd1bWVudERlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dFZhbHVlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gTmFtZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dFZhbHVlRGVmID0gZnVuY3Rpb24gcGFyc2VJbnB1dFZhbHVlRGVmKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfVkFMVUVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW50ZXJmYWNlIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFVuaW9uVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXM/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25NZW1iZXJUeXBlcyA6XG4gICAqICAgLSA9IGB8YD8gTmFtZWRUeXBlXG4gICAqICAgLSBVbmlvbk1lbWJlclR5cGVzIHwgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25NZW1iZXJUeXBlcyA9IGZ1bmN0aW9uIHBhcnNlVW5pb25NZW1iZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpID8gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlTmFtZWRUeXBlKSA6IFtdO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRW51bVZhbHVlc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRW51bVZhbHVlc0RlZmluaXRpb24gOiB7IEVudW1WYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IEVudW1WYWx1ZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICpcbiAgICogRW51bVZhbHVlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1WYWx1ZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0T2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dEZpZWxkc0RlZmluaXRpb24gOiB7IElucHV0VmFsdWVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjaGVtYUV4dGVuc2lvblxuICAgKiAgIC0gVHlwZUV4dGVuc2lvblxuICAgKlxuICAgKiBUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVFeHRlbnNpb25cbiAgICogICAtIE9iamVjdFR5cGVFeHRlbnNpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVFeHRlbnNpb25cbiAgICogICAtIFVuaW9uVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gRW51bVR5cGVFeHRlbnNpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uKCkge1xuICAgIHZhciBrZXl3b3JkVG9rZW4gPSB0aGlzLl9sZXhlci5sb29rYWhlYWQoKTtcblxuICAgIGlmIChrZXl3b3JkVG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUpIHtcbiAgICAgIHN3aXRjaCAoa2V5d29yZFRva2VuLnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3NjaGVtYSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2hlbWFFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChrZXl3b3JkVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2hlbWFFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NoZW1hJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgb3BlcmF0aW9uVHlwZXMgPSB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgb3BlcmF0aW9uVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfRVhURU5TSU9OLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIG9wZXJhdGlvblR5cGVzOiBvcGVyYXRpb25UeXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2FsYXInKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvblxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG5cbiAgICBpZiAoaW50ZXJmYWNlcy5sZW5ndGggPT09IDAgJiYgZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgZmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF1cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBVbmlvbk1lbWJlclR5cGVzXG4gICAqICAgLSBleHRlbmQgdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVVuaW9uVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd1bmlvbicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB0eXBlcyA9IHRoaXMucGFyc2VVbmlvbk1lbWJlclR5cGVzKCk7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgdHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZW51bScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLnBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBJbnB1dEZpZWxkc0RlZmluaXRpb25cbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2lucHV0Jyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBkaXJlY3RpdmUgQCBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IGByZXBlYXRhYmxlYD8gb24gRGlyZWN0aXZlTG9jYXRpb25zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2RpcmVjdGl2ZScpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdmFyIHJlcGVhdGFibGUgPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgncmVwZWF0YWJsZScpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKTtcbiAgICB2YXIgbG9jYXRpb25zID0gdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRJUkVDVElWRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogYXJncyxcbiAgICAgIHJlcGVhdGFibGU6IHJlcGVhdGFibGUsXG4gICAgICBsb2NhdGlvbnM6IGxvY2F0aW9ucyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlyZWN0aXZlTG9jYXRpb25zIDpcbiAgICogICAtIGB8YD8gRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIERpcmVjdGl2ZUxvY2F0aW9ucyB8IERpcmVjdGl2ZUxvY2F0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuUElQRSwgdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uKTtcbiAgfVxuICAvKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EaXJlY3RpdmVMb2NhdGlvblxuICAgKlxuICAgKiBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgUVVFUllgXG4gICAqICAgYE1VVEFUSU9OYFxuICAgKiAgIGBTVUJTQ1JJUFRJT05gXG4gICAqICAgYEZJRUxEYFxuICAgKiAgIGBGUkFHTUVOVF9ERUZJTklUSU9OYFxuICAgKiAgIGBGUkFHTUVOVF9TUFJFQURgXG4gICAqICAgYElOTElORV9GUkFHTUVOVGBcbiAgICpcbiAgICogVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uIDogb25lIG9mXG4gICAqICAgYFNDSEVNQWBcbiAgICogICBgU0NBTEFSYFxuICAgKiAgIGBPQkpFQ1RgXG4gICAqICAgYEZJRUxEX0RFRklOSVRJT05gXG4gICAqICAgYEFSR1VNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYElOVEVSRkFDRWBcbiAgICogICBgVU5JT05gXG4gICAqICAgYEVOVU1gXG4gICAqICAgYEVOVU1fVkFMVUVgXG4gICAqICAgYElOUFVUX09CSkVDVGBcbiAgICogICBgSU5QVVRfRklFTERfREVGSU5JVElPTmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlTG9jYXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuXG4gICAgaWYgKERpcmVjdGl2ZUxvY2F0aW9uW25hbWUudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChzdGFydCk7XG4gIH0gLy8gQ29yZSBwYXJzaW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhdGlvbiBvYmplY3QsIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHBsYWNlIGluIHRoZSBzb3VyY2UgdGhhdCBjcmVhdGVkIGEgZ2l2ZW4gcGFyc2VkIG9iamVjdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9jID0gZnVuY3Rpb24gbG9jKHN0YXJ0VG9rZW4pIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnM0O1xuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnM0ID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczQubm9Mb2NhdGlvbikgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oc3RhcnRUb2tlbiwgdGhpcy5fbGV4ZXIubGFzdFRva2VuLCB0aGlzLl9sZXhlci5zb3VyY2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiBhIGdpdmVuIGtpbmRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGVlayA9IGZ1bmN0aW9uIHBlZWsoa2luZCkge1xuICAgIHJldHVybiB0aGlzLl9sZXhlci50b2tlbi5raW5kID09PSBraW5kO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93IGFuIGVycm9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIkV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbktpbmREZXNjKGtpbmQpLCBcIiwgZm91bmQgXCIpLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdE9wdGlvbmFsVG9rZW4gPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIGFkdmFuY2UgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXFxcIlwiLmNvbmNhdCh2YWx1ZSwgXCJcXFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIHJldHVybiBcInRydWVcIiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIFwiZmFsc2VcIi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxLZXl3b3JkID0gZnVuY3Rpb24gZXhwZWN0T3B0aW9uYWxLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhbiBlcnJvciB3aGVuIGFuIHVuZXhwZWN0ZWQgbGV4ZWQgdG9rZW4gaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuZXhwZWN0ZWQgPSBmdW5jdGlvbiB1bmV4cGVjdGVkKGF0VG9rZW4pIHtcbiAgICB2YXIgdG9rZW4gPSBhdFRva2VuICE9PSBudWxsICYmIGF0VG9rZW4gIT09IHZvaWQgMCA/IGF0VG9rZW4gOiB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4gc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJVbmV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcG9zc2libHkgZW1wdHkgbGlzdCBvZiBwYXJzZSBub2RlcywgZGV0ZXJtaW5lZCBieSB0aGUgcGFyc2VGbi5cbiAgICogVGhpcyBsaXN0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYW55ID0gZnVuY3Rpb24gYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBJdCBjYW4gYmUgZW1wdHkgb25seSBpZiBvcGVuIHRva2VuIGlzIG1pc3Npbmcgb3RoZXJ3aXNlIGl0IHdpbGwgYWx3YXlzIHJldHVybiBub24tZW1wdHkgbGlzdFxuICAgKiB0aGF0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub3B0aW9uYWxNYW55ID0gZnVuY3Rpb24gb3B0aW9uYWxNYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG9wZW5LaW5kKSkge1xuICAgICAgdmFyIG5vZGVzID0gW107XG5cbiAgICAgIGRvIHtcbiAgICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYW55ID0gZnVuY3Rpb24gbWFueShvcGVuS2luZCwgcGFyc2VGbiwgY2xvc2VLaW5kKSB7XG4gICAgdGhpcy5leHBlY3RUb2tlbihvcGVuS2luZCk7XG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICBkbyB7XG4gICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgbWF5IGJlZ2luIHdpdGggYSBsZXggdG9rZW4gb2YgZGVsaW1pdGVyS2luZCBmb2xsb3dlZCBieSBpdGVtcyBzZXBhcmF0ZWQgYnkgbGV4IHRva2VucyBvZiB0b2tlbktpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsaW1pdGVkTWFueSA9IGZ1bmN0aW9uIGRlbGltaXRlZE1hbnkoZGVsaW1pdGVyS2luZCwgcGFyc2VGbikge1xuICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oZGVsaW1pdGVyS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG59KCk7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4gYXMgYSBzdHJpbmcgZm9yIGRlYnVnZ2luZy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRUb2tlbkRlc2ModG9rZW4pIHtcbiAgdmFyIHZhbHVlID0gdG9rZW4udmFsdWU7XG4gIHJldHVybiBnZXRUb2tlbktpbmREZXNjKHRva2VuLmtpbmQpICsgKHZhbHVlICE9IG51bGwgPyBcIiBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCJcIikgOiAnJyk7XG59XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4ga2luZCBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0VG9rZW5LaW5kRGVzYyhraW5kKSB7XG4gIHJldHVybiBpc1B1bmN0dWF0b3JUb2tlbktpbmQoa2luZCkgPyBcIlxcXCJcIi5jb25jYXQoa2luZCwgXCJcXFwiXCIpIDoga2luZDtcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIFJlbmRlciBhIGhlbHBmdWwgZGVzY3JpcHRpb24gb2YgdGhlIGxvY2F0aW9uIGluIHRoZSBHcmFwaFFMIFNvdXJjZSBkb2N1bWVudC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gcHJpbnRTb3VyY2VMb2NhdGlvbihsb2NhdGlvbi5zb3VyY2UsIGdldExvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgbG9jYXRpb24uc3RhcnQpKTtcbn1cbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgc291cmNlTG9jYXRpb24pIHtcbiAgdmFyIGZpcnN0TGluZUNvbHVtbk9mZnNldCA9IHNvdXJjZS5sb2NhdGlvbk9mZnNldC5jb2x1bW4gLSAxO1xuICB2YXIgYm9keSA9IHdoaXRlc3BhY2UoZmlyc3RMaW5lQ29sdW1uT2Zmc2V0KSArIHNvdXJjZS5ib2R5O1xuICB2YXIgbGluZUluZGV4ID0gc291cmNlTG9jYXRpb24ubGluZSAtIDE7XG4gIHZhciBsaW5lT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmxpbmUgLSAxO1xuICB2YXIgbGluZU51bSA9IHNvdXJjZUxvY2F0aW9uLmxpbmUgKyBsaW5lT2Zmc2V0O1xuICB2YXIgY29sdW1uT2Zmc2V0ID0gc291cmNlTG9jYXRpb24ubGluZSA9PT0gMSA/IGZpcnN0TGluZUNvbHVtbk9mZnNldCA6IDA7XG4gIHZhciBjb2x1bW5OdW0gPSBzb3VyY2VMb2NhdGlvbi5jb2x1bW4gKyBjb2x1bW5PZmZzZXQ7XG4gIHZhciBsb2NhdGlvblN0ciA9IFwiXCIuY29uY2F0KHNvdXJjZS5uYW1lLCBcIjpcIikuY29uY2F0KGxpbmVOdW0sIFwiOlwiKS5jb25jYXQoY29sdW1uTnVtLCBcIlxcblwiKTtcbiAgdmFyIGxpbmVzID0gYm9keS5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpO1xuICB2YXIgbG9jYXRpb25MaW5lID0gbGluZXNbbGluZUluZGV4XTsgLy8gU3BlY2lhbCBjYXNlIGZvciBtaW5pZmllZCBkb2N1bWVudHNcblxuICBpZiAobG9jYXRpb25MaW5lLmxlbmd0aCA+IDEyMCkge1xuICAgIHZhciBzdWJMaW5lSW5kZXggPSBNYXRoLmZsb29yKGNvbHVtbk51bSAvIDgwKTtcbiAgICB2YXIgc3ViTGluZUNvbHVtbk51bSA9IGNvbHVtbk51bSAlIDgwO1xuICAgIHZhciBzdWJMaW5lcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkxpbmUubGVuZ3RoOyBpICs9IDgwKSB7XG4gICAgICBzdWJMaW5lcy5wdXNoKGxvY2F0aW9uTGluZS5zbGljZShpLCBpICsgODApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoW1tcIlwiLmNvbmNhdChsaW5lTnVtKSwgc3ViTGluZXNbMF1dXS5jb25jYXQoc3ViTGluZXMuc2xpY2UoMSwgc3ViTGluZUluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChzdWJMaW5lKSB7XG4gICAgICByZXR1cm4gWycnLCBzdWJMaW5lXTtcbiAgICB9KSwgW1snICcsIHdoaXRlc3BhY2Uoc3ViTGluZUNvbHVtbk51bSAtIDEpICsgJ14nXSwgWycnLCBzdWJMaW5lc1tzdWJMaW5lSW5kZXggKyAxXV1dKSk7XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoWy8vIExpbmVzIHNwZWNpZmllZCBsaWtlIHRoaXM6IFtcInByZWZpeFwiLCBcInN0cmluZ1wiXSxcbiAgW1wiXCIuY29uY2F0KGxpbmVOdW0gLSAxKSwgbGluZXNbbGluZUluZGV4IC0gMV1dLCBbXCJcIi5jb25jYXQobGluZU51bSksIGxvY2F0aW9uTGluZV0sIFsnJywgd2hpdGVzcGFjZShjb2x1bW5OdW0gLSAxKSArICdeJ10sIFtcIlwiLmNvbmNhdChsaW5lTnVtICsgMSksIGxpbmVzW2xpbmVJbmRleCArIDFdXV0pO1xufVxuXG5mdW5jdGlvbiBwcmludFByZWZpeGVkTGluZXMobGluZXMpIHtcbiAgdmFyIGV4aXN0aW5nTGluZXMgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgXyA9IF9yZWZbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmWzFdO1xuICAgIHJldHVybiBsaW5lICE9PSB1bmRlZmluZWQ7XG4gIH0pO1xuICB2YXIgcGFkTGVuID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZXhpc3RpbmdMaW5lcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHByZWZpeCA9IF9yZWYyWzBdO1xuICAgIHJldHVybiBwcmVmaXgubGVuZ3RoO1xuICB9KSk7XG4gIHJldHVybiBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjNbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmM1sxXTtcbiAgICByZXR1cm4gbGVmdFBhZChwYWRMZW4sIHByZWZpeCkgKyAobGluZSA/ICcgfCAnICsgbGluZSA6ICcgfCcpO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZShsZW4pIHtcbiAgcmV0dXJuIEFycmF5KGxlbiArIDEpLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gbGVmdFBhZChsZW4sIHN0cikge1xuICByZXR1cm4gd2hpdGVzcGFjZShsZW4gLSBzdHIubGVuZ3RoKSArIHN0cjtcbn1cbiIsImltcG9ydCB7IHZpc2l0IH0gZnJvbSBcIi4vdmlzaXRvci5tanNcIjtcbmltcG9ydCB7IHByaW50QmxvY2tTdHJpbmcgfSBmcm9tIFwiLi9ibG9ja1N0cmluZy5tanNcIjtcbi8qKlxuICogQ29udmVydHMgYW4gQVNUIGludG8gYSBzdHJpbmcsIHVzaW5nIG9uZSBzZXQgb2YgcmVhc29uYWJsZVxuICogZm9ybWF0dGluZyBydWxlcy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQoYXN0KSB7XG4gIHJldHVybiB2aXNpdChhc3QsIHtcbiAgICBsZWF2ZTogcHJpbnREb2NBU1RSZWR1Y2VyXG4gIH0pO1xufVxudmFyIE1BWF9MSU5FX0xFTkdUSCA9IDgwOyAvLyBUT0RPOiBwcm92aWRlIGJldHRlciB0eXBlIGNvdmVyYWdlIGluIGZ1dHVyZVxuXG52YXIgcHJpbnREb2NBU1RSZWR1Y2VyID0ge1xuICBOYW1lOiBmdW5jdGlvbiBOYW1lKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgfSxcbiAgVmFyaWFibGU6IGZ1bmN0aW9uIFZhcmlhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gJyQnICsgbm9kZS5uYW1lO1xuICB9LFxuICAvLyBEb2N1bWVudFxuICBEb2N1bWVudDogZnVuY3Rpb24gRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBqb2luKG5vZGUuZGVmaW5pdGlvbnMsICdcXG5cXG4nKSArICdcXG4nO1xuICB9LFxuICBPcGVyYXRpb25EZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25EZWZpbml0aW9uKG5vZGUpIHtcbiAgICB2YXIgb3AgPSBub2RlLm9wZXJhdGlvbjtcbiAgICB2YXIgbmFtZSA9IG5vZGUubmFtZTtcbiAgICB2YXIgdmFyRGVmcyA9IHdyYXAoJygnLCBqb2luKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucywgJywgJyksICcpJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBqb2luKG5vZGUuZGlyZWN0aXZlcywgJyAnKTtcbiAgICB2YXIgc2VsZWN0aW9uU2V0ID0gbm9kZS5zZWxlY3Rpb25TZXQ7IC8vIEFub255bW91cyBxdWVyaWVzIHdpdGggbm8gZGlyZWN0aXZlcyBvciB2YXJpYWJsZSBkZWZpbml0aW9ucyBjYW4gdXNlXG4gICAgLy8gdGhlIHF1ZXJ5IHNob3J0IGZvcm0uXG5cbiAgICByZXR1cm4gIW5hbWUgJiYgIWRpcmVjdGl2ZXMgJiYgIXZhckRlZnMgJiYgb3AgPT09ICdxdWVyeScgPyBzZWxlY3Rpb25TZXQgOiBqb2luKFtvcCwgam9pbihbbmFtZSwgdmFyRGVmc10pLCBkaXJlY3RpdmVzLCBzZWxlY3Rpb25TZXRdLCAnICcpO1xuICB9LFxuICBWYXJpYWJsZURlZmluaXRpb246IGZ1bmN0aW9uIFZhcmlhYmxlRGVmaW5pdGlvbihfcmVmKSB7XG4gICAgdmFyIHZhcmlhYmxlID0gX3JlZi52YXJpYWJsZSxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIHZhcmlhYmxlICsgJzogJyArIHR5cGUgKyB3cmFwKCcgPSAnLCBkZWZhdWx0VmFsdWUpICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIFNlbGVjdGlvblNldDogZnVuY3Rpb24gU2VsZWN0aW9uU2V0KF9yZWYyKSB7XG4gICAgdmFyIHNlbGVjdGlvbnMgPSBfcmVmMi5zZWxlY3Rpb25zO1xuICAgIHJldHVybiBibG9jayhzZWxlY3Rpb25zKTtcbiAgfSxcbiAgRmllbGQ6IGZ1bmN0aW9uIEZpZWxkKF9yZWYzKSB7XG4gICAgdmFyIGFsaWFzID0gX3JlZjMuYWxpYXMsXG4gICAgICAgIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjMuYXJndW1lbnRzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjMuc2VsZWN0aW9uU2V0O1xuICAgIHZhciBwcmVmaXggPSB3cmFwKCcnLCBhbGlhcywgJzogJykgKyBuYW1lO1xuICAgIHZhciBhcmdzTGluZSA9IHByZWZpeCArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpO1xuXG4gICAgaWYgKGFyZ3NMaW5lLmxlbmd0aCA+IE1BWF9MSU5FX0xFTkdUSCkge1xuICAgICAgYXJnc0xpbmUgPSBwcmVmaXggKyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gam9pbihbYXJnc0xpbmUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcbiAgQXJndW1lbnQ6IGZ1bmN0aW9uIEFyZ3VtZW50KF9yZWY0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNC5uYW1lLFxuICAgICAgICB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBGcmFnbWVudHNcbiAgRnJhZ21lbnRTcHJlYWQ6IGZ1bmN0aW9uIEZyYWdtZW50U3ByZWFkKF9yZWY1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNS5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjUuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gJy4uLicgKyBuYW1lICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIElubGluZUZyYWdtZW50OiBmdW5jdGlvbiBJbmxpbmVGcmFnbWVudChfcmVmNikge1xuICAgIHZhciB0eXBlQ29uZGl0aW9uID0gX3JlZjYudHlwZUNvbmRpdGlvbixcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY2LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gam9pbihbJy4uLicsIHdyYXAoJ29uICcsIHR5cGVDb25kaXRpb24pLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogZnVuY3Rpb24gRnJhZ21lbnREZWZpbml0aW9uKF9yZWY3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNy5uYW1lLFxuICAgICAgICB0eXBlQ29uZGl0aW9uID0gX3JlZjcudHlwZUNvbmRpdGlvbixcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9ucyA9IF9yZWY3LnZhcmlhYmxlRGVmaW5pdGlvbnMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmNy5kaXJlY3RpdmVzLFxuICAgICAgICBzZWxlY3Rpb25TZXQgPSBfcmVmNy5zZWxlY3Rpb25TZXQ7XG4gICAgcmV0dXJuICgvLyBOb3RlOiBmcmFnbWVudCB2YXJpYWJsZSBkZWZpbml0aW9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZCBtYXkgYmUgY2hhbmdlZFxuICAgICAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgXCJmcmFnbWVudCBcIi5jb25jYXQobmFtZSkuY29uY2F0KHdyYXAoJygnLCBqb2luKHZhcmlhYmxlRGVmaW5pdGlvbnMsICcsICcpLCAnKScpLCBcIiBcIikgKyBcIm9uIFwiLmNvbmNhdCh0eXBlQ29uZGl0aW9uLCBcIiBcIikuY29uY2F0KHdyYXAoJycsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgJyAnKSkgKyBzZWxlY3Rpb25TZXRcbiAgICApO1xuICB9LFxuICAvLyBWYWx1ZVxuICBJbnRWYWx1ZTogZnVuY3Rpb24gSW50VmFsdWUoX3JlZjgpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOC52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIEZsb2F0VmFsdWU6IGZ1bmN0aW9uIEZsb2F0VmFsdWUoX3JlZjkpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIFN0cmluZ1ZhbHVlOiBmdW5jdGlvbiBTdHJpbmdWYWx1ZShfcmVmMTAsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMC52YWx1ZSxcbiAgICAgICAgaXNCbG9ja1N0cmluZyA9IF9yZWYxMC5ibG9jaztcbiAgICByZXR1cm4gaXNCbG9ja1N0cmluZyA/IHByaW50QmxvY2tTdHJpbmcodmFsdWUsIGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICcnIDogJyAgJykgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIH0sXG4gIEJvb2xlYW5WYWx1ZTogZnVuY3Rpb24gQm9vbGVhblZhbHVlKF9yZWYxMSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9LFxuICBOdWxsVmFsdWU6IGZ1bmN0aW9uIE51bGxWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9LFxuICBFbnVtVmFsdWU6IGZ1bmN0aW9uIEVudW1WYWx1ZShfcmVmMTIpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTIudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBMaXN0VmFsdWU6IGZ1bmN0aW9uIExpc3RWYWx1ZShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZjEzLnZhbHVlcztcbiAgICByZXR1cm4gJ1snICsgam9pbih2YWx1ZXMsICcsICcpICsgJ10nO1xuICB9LFxuICBPYmplY3RWYWx1ZTogZnVuY3Rpb24gT2JqZWN0VmFsdWUoX3JlZjE0KSB7XG4gICAgdmFyIGZpZWxkcyA9IF9yZWYxNC5maWVsZHM7XG4gICAgcmV0dXJuICd7JyArIGpvaW4oZmllbGRzLCAnLCAnKSArICd9JztcbiAgfSxcbiAgT2JqZWN0RmllbGQ6IGZ1bmN0aW9uIE9iamVjdEZpZWxkKF9yZWYxNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjE1Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBEaXJlY3RpdmVcbiAgRGlyZWN0aXZlOiBmdW5jdGlvbiBEaXJlY3RpdmUoX3JlZjE2KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMTYubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYxNi5hcmd1bWVudHM7XG4gICAgcmV0dXJuICdAJyArIG5hbWUgKyB3cmFwKCcoJywgam9pbihhcmdzLCAnLCAnKSwgJyknKTtcbiAgfSxcbiAgLy8gVHlwZVxuICBOYW1lZFR5cGU6IGZ1bmN0aW9uIE5hbWVkVHlwZShfcmVmMTcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYxNy5uYW1lO1xuICAgIHJldHVybiBuYW1lO1xuICB9LFxuICBMaXN0VHlwZTogZnVuY3Rpb24gTGlzdFR5cGUoX3JlZjE4KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTgudHlwZTtcbiAgICByZXR1cm4gJ1snICsgdHlwZSArICddJztcbiAgfSxcbiAgTm9uTnVsbFR5cGU6IGZ1bmN0aW9uIE5vbk51bGxUeXBlKF9yZWYxOSkge1xuICAgIHZhciB0eXBlID0gX3JlZjE5LnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgKyAnISc7XG4gIH0sXG4gIC8vIFR5cGUgU3lzdGVtIERlZmluaXRpb25zXG4gIFNjaGVtYURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjApIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYyMC5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYyMC5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ3NjaGVtYScsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sob3BlcmF0aW9uVHlwZXMpXSwgJyAnKTtcbiAgfSksXG4gIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbihfcmVmMjEpIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gX3JlZjIxLm9wZXJhdGlvbixcbiAgICAgICAgdHlwZSA9IF9yZWYyMS50eXBlO1xuICAgIHJldHVybiBvcGVyYXRpb24gKyAnOiAnICsgdHlwZTtcbiAgfSxcbiAgU2NhbGFyVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjIyLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydzY2FsYXInLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgT2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMy5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjIzLmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjMuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjIzLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ3R5cGUnLCBuYW1lLCB3cmFwKCdpbXBsZW1lbnRzICcsIGpvaW4oaW50ZXJmYWNlcywgJyAmICcpKSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSksXG4gIEZpZWxkRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI0Lm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMjQuYXJndW1lbnRzLFxuICAgICAgICB0eXBlID0gX3JlZjI0LnR5cGUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjQuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gbmFtZSArIChoYXNNdWx0aWxpbmVJdGVtcyhhcmdzKSA/IHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpIDogd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJykpICsgJzogJyArIHR5cGUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSksXG4gIElucHV0VmFsdWVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjUubmFtZSxcbiAgICAgICAgdHlwZSA9IF9yZWYyNS50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmMjUuZGVmYXVsdFZhbHVlLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI1LmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oW25hbWUgKyAnOiAnICsgdHlwZSwgd3JhcCgnPSAnLCBkZWZhdWx0VmFsdWUpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNi5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjI2LmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjYuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjI2LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2ludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9KSxcbiAgVW5pb25UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNykge1xuICAgIHZhciBuYW1lID0gX3JlZjI3Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjcuZGlyZWN0aXZlcyxcbiAgICAgICAgdHlwZXMgPSBfcmVmMjcudHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWyd1bmlvbicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgdHlwZXMgJiYgdHlwZXMubGVuZ3RoICE9PSAwID8gJz0gJyArIGpvaW4odHlwZXMsICcgfCAnKSA6ICcnXSwgJyAnKTtcbiAgfSksXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI4Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjguZGlyZWN0aXZlcyxcbiAgICAgICAgdmFsdWVzID0gX3JlZjI4LnZhbHVlcztcbiAgICByZXR1cm4gam9pbihbJ2VudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9KSxcbiAgRW51bVZhbHVlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOSkge1xuICAgIHZhciBuYW1lID0gX3JlZjI5Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjkuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSksXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMzApIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMwLmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzMC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydpbnB1dCcsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0pLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjMxKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzEubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYzMS5hcmd1bWVudHMsXG4gICAgICAgIHJlcGVhdGFibGUgPSBfcmVmMzEucmVwZWF0YWJsZSxcbiAgICAgICAgbG9jYXRpb25zID0gX3JlZjMxLmxvY2F0aW9ucztcbiAgICByZXR1cm4gJ2RpcmVjdGl2ZSBAJyArIG5hbWUgKyAoaGFzTXVsdGlsaW5lSXRlbXMoYXJncykgPyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKSA6IHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpKSArIChyZXBlYXRhYmxlID8gJyByZXBlYXRhYmxlJyA6ICcnKSArICcgb24gJyArIGpvaW4obG9jYXRpb25zLCAnIHwgJyk7XG4gIH0pLFxuICBTY2hlbWFFeHRlbnNpb246IGZ1bmN0aW9uIFNjaGVtYUV4dGVuc2lvbihfcmVmMzIpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYzMi5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYzMi5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCBzY2hlbWEnLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKG9wZXJhdGlvblR5cGVzKV0sICcgJyk7XG4gIH0sXG4gIFNjYWxhclR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFNjYWxhclR5cGVFeHRlbnNpb24oX3JlZjMzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzMubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzMy5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHNjYWxhcicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0sXG4gIE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIE9iamVjdFR5cGVFeHRlbnNpb24oX3JlZjM0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzQubmFtZSxcbiAgICAgICAgaW50ZXJmYWNlcyA9IF9yZWYzNC5pbnRlcmZhY2VzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM0LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzNC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgdHlwZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBmdW5jdGlvbiBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKF9yZWYzNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjM1Lm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMzUuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNS5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMzUuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBVbmlvblR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFVuaW9uVHlwZUV4dGVuc2lvbihfcmVmMzYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHR5cGVzID0gX3JlZjM2LnR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHVuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCB0eXBlcyAmJiB0eXBlcy5sZW5ndGggIT09IDAgPyAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpIDogJyddLCAnICcpO1xuICB9LFxuICBFbnVtVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gRW51bVR5cGVFeHRlbnNpb24oX3JlZjM3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNy5kaXJlY3RpdmVzLFxuICAgICAgICB2YWx1ZXMgPSBfcmVmMzcudmFsdWVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGVudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9LFxuICBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIElucHV0T2JqZWN0VHlwZUV4dGVuc2lvbihfcmVmMzgpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzOC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM4LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzOC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgaW5wdXQnLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhZGREZXNjcmlwdGlvbihjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gam9pbihbbm9kZS5kZXNjcmlwdGlvbiwgY2Iobm9kZSldLCAnXFxuJyk7XG4gIH07XG59XG4vKipcbiAqIEdpdmVuIG1heWJlQXJyYXksIHByaW50IGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBudWxsIG9yIGVtcHR5LCBvdGhlcndpc2VcbiAqIHByaW50IGFsbCBpdGVtcyB0b2dldGhlciBzZXBhcmF0ZWQgYnkgc2VwYXJhdG9yIGlmIHByb3ZpZGVkXG4gKi9cblxuXG5mdW5jdGlvbiBqb2luKG1heWJlQXJyYXkpIHtcbiAgdmFyIF9tYXliZUFycmF5JGZpbHRlciRqbztcblxuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgcmV0dXJuIChfbWF5YmVBcnJheSRmaWx0ZXIkam8gPSBtYXliZUFycmF5ID09PSBudWxsIHx8IG1heWJlQXJyYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heWJlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0pLmpvaW4oc2VwYXJhdG9yKSkgIT09IG51bGwgJiYgX21heWJlQXJyYXkkZmlsdGVyJGpvICE9PSB2b2lkIDAgPyBfbWF5YmVBcnJheSRmaWx0ZXIkam8gOiAnJztcbn1cbi8qKlxuICogR2l2ZW4gYXJyYXksIHByaW50IGVhY2ggaXRlbSBvbiBpdHMgb3duIGxpbmUsIHdyYXBwZWQgaW4gYW5cbiAqIGluZGVudGVkIFwieyB9XCIgYmxvY2suXG4gKi9cblxuXG5mdW5jdGlvbiBibG9jayhhcnJheSkge1xuICByZXR1cm4gd3JhcCgne1xcbicsIGluZGVudChqb2luKGFycmF5LCAnXFxuJykpLCAnXFxufScpO1xufVxuLyoqXG4gKiBJZiBtYXliZVN0cmluZyBpcyBub3QgbnVsbCBvciBlbXB0eSwgdGhlbiB3cmFwIHdpdGggc3RhcnQgYW5kIGVuZCwgb3RoZXJ3aXNlIHByaW50IGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdyYXAoc3RhcnQsIG1heWJlU3RyaW5nKSB7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICByZXR1cm4gbWF5YmVTdHJpbmcgIT0gbnVsbCAmJiBtYXliZVN0cmluZyAhPT0gJycgPyBzdGFydCArIG1heWJlU3RyaW5nICsgZW5kIDogJyc7XG59XG5cbmZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgcmV0dXJuIHdyYXAoJyAgJywgc3RyLnJlcGxhY2UoL1xcbi9nLCAnXFxuICAnKSk7XG59XG5cbmZ1bmN0aW9uIGlzTXVsdGlsaW5lKHN0cikge1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1xcbicpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaGFzTXVsdGlsaW5lSXRlbXMobWF5YmVBcnJheSkge1xuICByZXR1cm4gbWF5YmVBcnJheSAhPSBudWxsICYmIG1heWJlQXJyYXkuc29tZShpc011bHRpbGluZSk7XG59XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IGluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvaW5zcGVjdC5tanNcIjtcbmltcG9ydCBkZXZBc3NlcnQgZnJvbSBcIi4uL2pzdXRpbHMvZGV2QXNzZXJ0Lm1qc1wiO1xuaW1wb3J0IGluc3RhbmNlT2YgZnJvbSBcIi4uL2pzdXRpbHMvaW5zdGFuY2VPZi5tanNcIjtcblxuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIHNvdXJjZSBpbnB1dCB0byBHcmFwaFFMLiBUaGUgYG5hbWVgIGFuZCBgbG9jYXRpb25PZmZzZXRgIHBhcmFtZXRlcnMgYXJlXG4gKiBvcHRpb25hbCwgYnV0IHRoZXkgYXJlIHVzZWZ1bCBmb3IgY2xpZW50cyB3aG8gc3RvcmUgR3JhcGhRTCBkb2N1bWVudHMgaW4gc291cmNlIGZpbGVzLlxuICogRm9yIGV4YW1wbGUsIGlmIHRoZSBHcmFwaFFMIGlucHV0IHN0YXJ0cyBhdCBsaW5lIDQwIGluIGEgZmlsZSBuYW1lZCBgRm9vLmdyYXBocWxgLCBpdCBtaWdodFxuICogYmUgdXNlZnVsIGZvciBgbmFtZWAgdG8gYmUgYFwiRm9vLmdyYXBocWxcImAgYW5kIGxvY2F0aW9uIHRvIGJlIGB7IGxpbmU6IDQwLCBjb2x1bW46IDEgfWAuXG4gKiBUaGUgYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIGluIGBsb2NhdGlvbk9mZnNldGAgYXJlIDEtaW5kZXhlZC5cbiAqL1xuZXhwb3J0IHZhciBTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2UoYm9keSkge1xuICAgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnR3JhcGhRTCByZXF1ZXN0JztcbiAgICB2YXIgbG9jYXRpb25PZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHtcbiAgICAgIGxpbmU6IDEsXG4gICAgICBjb2x1bW46IDFcbiAgICB9O1xuICAgIHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJyB8fCBkZXZBc3NlcnQoMCwgXCJCb2R5IG11c3QgYmUgYSBzdHJpbmcuIFJlY2VpdmVkOiBcIi5jb25jYXQoaW5zcGVjdChib2R5KSwgXCIuXCIpKTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldCA9IGxvY2F0aW9uT2Zmc2V0O1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQubGluZSA+IDAgfHwgZGV2QXNzZXJ0KDAsICdsaW5lIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS4nKTtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiA+IDAgfHwgZGV2QXNzZXJ0KDAsICdjb2x1bW4gaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLicpO1xuICB9IC8vICRGbG93Rml4TWVbdW5zdXBwb3J0ZWQtc3ludGF4XSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG5cbiAgX2NyZWF0ZUNsYXNzKFNvdXJjZSwgW3tcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdTb3VyY2UnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb3VyY2U7XG59KCk7XG4vKipcbiAqIFRlc3QgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgU291cmNlIG9iamVjdC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5leHBvcnQgZnVuY3Rpb24gaXNTb3VyY2Uoc291cmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZU9mKHNvdXJjZSwgU291cmNlKTtcbn1cbiIsIi8qKlxuICogQW4gZXhwb3J0ZWQgZW51bSBkZXNjcmliaW5nIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgdG9rZW5zIHRoYXQgdGhlXG4gKiBsZXhlciBlbWl0cy5cbiAqL1xuZXhwb3J0IHZhciBUb2tlbktpbmQgPSBPYmplY3QuZnJlZXplKHtcbiAgU09GOiAnPFNPRj4nLFxuICBFT0Y6ICc8RU9GPicsXG4gIEJBTkc6ICchJyxcbiAgRE9MTEFSOiAnJCcsXG4gIEFNUDogJyYnLFxuICBQQVJFTl9MOiAnKCcsXG4gIFBBUkVOX1I6ICcpJyxcbiAgU1BSRUFEOiAnLi4uJyxcbiAgQ09MT046ICc6JyxcbiAgRVFVQUxTOiAnPScsXG4gIEFUOiAnQCcsXG4gIEJSQUNLRVRfTDogJ1snLFxuICBCUkFDS0VUX1I6ICddJyxcbiAgQlJBQ0VfTDogJ3snLFxuICBQSVBFOiAnfCcsXG4gIEJSQUNFX1I6ICd9JyxcbiAgTkFNRTogJ05hbWUnLFxuICBJTlQ6ICdJbnQnLFxuICBGTE9BVDogJ0Zsb2F0JyxcbiAgU1RSSU5HOiAnU3RyaW5nJyxcbiAgQkxPQ0tfU1RSSU5HOiAnQmxvY2tTdHJpbmcnLFxuICBDT01NRU5UOiAnQ29tbWVudCdcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgdG9rZW4ga2luZHMgdmFsdWVzLlxuICovXG4iLCJpbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuLyoqXG4gKiBBIHZpc2l0b3IgaXMgcHJvdmlkZWQgdG8gdmlzaXQsIGl0IGNvbnRhaW5zIHRoZSBjb2xsZWN0aW9uIG9mXG4gKiByZWxldmFudCBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdmlzaXRvcidzIHRyYXZlcnNhbC5cbiAqL1xuXG5leHBvcnQgdmFyIFF1ZXJ5RG9jdW1lbnRLZXlzID0ge1xuICBOYW1lOiBbXSxcbiAgRG9jdW1lbnQ6IFsnZGVmaW5pdGlvbnMnXSxcbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogWyduYW1lJywgJ3ZhcmlhYmxlRGVmaW5pdGlvbnMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgVmFyaWFibGVEZWZpbml0aW9uOiBbJ3ZhcmlhYmxlJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgVmFyaWFibGU6IFsnbmFtZSddLFxuICBTZWxlY3Rpb25TZXQ6IFsnc2VsZWN0aW9ucyddLFxuICBGaWVsZDogWydhbGlhcycsICduYW1lJywgJ2FyZ3VtZW50cycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBBcmd1bWVudDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIEZyYWdtZW50U3ByZWFkOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbmxpbmVGcmFnbWVudDogWyd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogWyduYW1lJywgLy8gTm90ZTogZnJhZ21lbnQgdmFyaWFibGUgZGVmaW5pdGlvbnMgYXJlIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGJlIGNoYW5nZWRcbiAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAndmFyaWFibGVEZWZpbml0aW9ucycsICd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEludFZhbHVlOiBbXSxcbiAgRmxvYXRWYWx1ZTogW10sXG4gIFN0cmluZ1ZhbHVlOiBbXSxcbiAgQm9vbGVhblZhbHVlOiBbXSxcbiAgTnVsbFZhbHVlOiBbXSxcbiAgRW51bVZhbHVlOiBbXSxcbiAgTGlzdFZhbHVlOiBbJ3ZhbHVlcyddLFxuICBPYmplY3RWYWx1ZTogWydmaWVsZHMnXSxcbiAgT2JqZWN0RmllbGQ6IFsnbmFtZScsICd2YWx1ZSddLFxuICBEaXJlY3RpdmU6IFsnbmFtZScsICdhcmd1bWVudHMnXSxcbiAgTmFtZWRUeXBlOiBbJ25hbWUnXSxcbiAgTGlzdFR5cGU6IFsndHlwZSddLFxuICBOb25OdWxsVHlwZTogWyd0eXBlJ10sXG4gIFNjaGVtYURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbjogWyd0eXBlJ10sXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgRmllbGREZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ3R5cGUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndmFsdWVzJ10sXG4gIEVudW1WYWx1ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2xvY2F0aW9ucyddLFxuICBTY2hlbWFFeHRlbnNpb246IFsnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBTY2FsYXJUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBVbmlvblR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXVxufTtcbmV4cG9ydCB2YXIgQlJFQUsgPSBPYmplY3QuZnJlZXplKHt9KTtcbi8qKlxuICogdmlzaXQoKSB3aWxsIHdhbGsgdGhyb3VnaCBhbiBBU1QgdXNpbmcgYSBkZXB0aC1maXJzdCB0cmF2ZXJzYWwsIGNhbGxpbmdcbiAqIHRoZSB2aXNpdG9yJ3MgZW50ZXIgZnVuY3Rpb24gYXQgZWFjaCBub2RlIGluIHRoZSB0cmF2ZXJzYWwsIGFuZCBjYWxsaW5nIHRoZVxuICogbGVhdmUgZnVuY3Rpb24gYWZ0ZXIgdmlzaXRpbmcgdGhhdCBub2RlIGFuZCBhbGwgb2YgaXRzIGNoaWxkIG5vZGVzLlxuICpcbiAqIEJ5IHJldHVybmluZyBkaWZmZXJlbnQgdmFsdWVzIGZyb20gdGhlIGVudGVyIGFuZCBsZWF2ZSBmdW5jdGlvbnMsIHRoZVxuICogYmVoYXZpb3Igb2YgdGhlIHZpc2l0b3IgY2FuIGJlIGFsdGVyZWQsIGluY2x1ZGluZyBza2lwcGluZyBvdmVyIGEgc3ViLXRyZWUgb2ZcbiAqIHRoZSBBU1QgKGJ5IHJldHVybmluZyBmYWxzZSksIGVkaXRpbmcgdGhlIEFTVCBieSByZXR1cm5pbmcgYSB2YWx1ZSBvciBudWxsXG4gKiB0byByZW1vdmUgdGhlIHZhbHVlLCBvciB0byBzdG9wIHRoZSB3aG9sZSB0cmF2ZXJzYWwgYnkgcmV0dXJuaW5nIEJSRUFLLlxuICpcbiAqIFdoZW4gdXNpbmcgdmlzaXQoKSB0byBlZGl0IGFuIEFTVCwgdGhlIG9yaWdpbmFsIEFTVCB3aWxsIG5vdCBiZSBtb2RpZmllZCwgYW5kXG4gKiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBBU1Qgd2l0aCB0aGUgY2hhbmdlcyBhcHBsaWVkIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGVcbiAqIHZpc2l0IGZ1bmN0aW9uLlxuICpcbiAqICAgICBjb25zdCBlZGl0ZWRBU1QgPSB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IHNraXAgdmlzaXRpbmcgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgdmlzaXRvci5CUkVBSzogc3RvcCB2aXNpdGluZyBhbHRvZ2V0aGVyXG4gKiAgICAgICAgIC8vICAgbnVsbDogZGVsZXRlIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIGFueSB2YWx1ZTogcmVwbGFjZSB0aGlzIG5vZGUgd2l0aCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gKiAgICAgICAgIC8vIEByZXR1cm5cbiAqICAgICAgICAgLy8gICB1bmRlZmluZWQ6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIGZhbHNlOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIEFsdGVybmF0aXZlbHkgdG8gcHJvdmlkaW5nIGVudGVyKCkgYW5kIGxlYXZlKCkgZnVuY3Rpb25zLCBhIHZpc2l0b3IgY2FuXG4gKiBpbnN0ZWFkIHByb3ZpZGUgZnVuY3Rpb25zIG5hbWVkIHRoZSBzYW1lIGFzIHRoZSBraW5kcyBvZiBBU1Qgbm9kZXMsIG9yXG4gKiBlbnRlci9sZWF2ZSB2aXNpdG9ycyBhdCBhIG5hbWVkIGtleSwgbGVhZGluZyB0byBmb3VyIHBlcm11dGF0aW9ucyBvZiB0aGVcbiAqIHZpc2l0b3IgQVBJOlxuICpcbiAqIDEpIE5hbWVkIHZpc2l0b3JzIHRyaWdnZXJlZCB3aGVuIGVudGVyaW5nIGEgbm9kZSBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAyKSBOYW1lZCB2aXNpdG9ycyB0aGF0IHRyaWdnZXIgdXBvbiBlbnRlcmluZyBhbmQgbGVhdmluZyBhIG5vZGUgb2ZcbiAqICAgIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kOiB7XG4gKiAgICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBlbnRlciB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAzKSBHZW5lcmljIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGFueSBub2RlLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgYW55IG5vZGVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlKSB7XG4gKiAgICAgICAgIC8vIGxlYXZlIGFueSBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiA0KSBQYXJhbGxlbCB2aXNpdG9ycyBmb3IgZW50ZXJpbmcgYW5kIGxlYXZpbmcgbm9kZXMgb2YgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZToge1xuICogICAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQocm9vdCwgdmlzaXRvcikge1xuICB2YXIgdmlzaXRvcktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFF1ZXJ5RG9jdW1lbnRLZXlzO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLWluaXQgKi9cbiAgdmFyIHN0YWNrID0gdW5kZWZpbmVkO1xuICB2YXIgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkocm9vdCk7XG4gIHZhciBrZXlzID0gW3Jvb3RdO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGVkaXRzID0gW107XG4gIHZhciBub2RlID0gdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuICB2YXIgcGFyZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgcGF0aCA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG4gIHZhciBuZXdSb290ID0gcm9vdDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZi1pbml0ICovXG5cbiAgZG8ge1xuICAgIGluZGV4Kys7XG4gICAgdmFyIGlzTGVhdmluZyA9IGluZGV4ID09PSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNFZGl0ZWQgPSBpc0xlYXZpbmcgJiYgZWRpdHMubGVuZ3RoICE9PSAwO1xuXG4gICAgaWYgKGlzTGVhdmluZykge1xuICAgICAga2V5ID0gYW5jZXN0b3JzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBhbmNlc3RvcnMucG9wKCk7XG5cbiAgICAgIGlmIChpc0VkaXRlZCkge1xuICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNsb25lID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMobm9kZSk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICBjbG9uZVtrXSA9IG5vZGVba107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZSA9IGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVkaXRPZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlZGl0cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICB2YXIgZWRpdEtleSA9IGVkaXRzW2lpXVswXTtcbiAgICAgICAgICB2YXIgZWRpdFZhbHVlID0gZWRpdHNbaWldWzFdO1xuXG4gICAgICAgICAgaWYgKGluQXJyYXkpIHtcbiAgICAgICAgICAgIGVkaXRLZXkgLT0gZWRpdE9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSAmJiBlZGl0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3BsaWNlKGVkaXRLZXksIDEpO1xuICAgICAgICAgICAgZWRpdE9mZnNldCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlW2VkaXRLZXldID0gZWRpdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHN0YWNrLmluZGV4O1xuICAgICAga2V5cyA9IHN0YWNrLmtleXM7XG4gICAgICBlZGl0cyA9IHN0YWNrLmVkaXRzO1xuICAgICAgaW5BcnJheSA9IHN0YWNrLmluQXJyYXk7XG4gICAgICBzdGFjayA9IHN0YWNrLnByZXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IHBhcmVudCA/IGluQXJyYXkgPyBpbmRleCA6IGtleXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgbm9kZSA9IHBhcmVudCA/IHBhcmVudFtrZXldIDogbmV3Um9vdDtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGlmICghaXNOb2RlKG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQVNUIE5vZGU6IFwiLmNvbmNhdChpbnNwZWN0KG5vZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaXRGbiA9IGdldFZpc2l0Rm4odmlzaXRvciwgbm9kZS5raW5kLCBpc0xlYXZpbmcpO1xuXG4gICAgICBpZiAodmlzaXRGbikge1xuICAgICAgICByZXN1bHQgPSB2aXNpdEZuLmNhbGwodmlzaXRvciwgbm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlZGl0cy5wdXNoKFtrZXksIHJlc3VsdF0pO1xuXG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICBub2RlID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIGlzRWRpdGVkKSB7XG4gICAgICBlZGl0cy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Zpc2l0b3JLZXlzJG5vZGUka2luO1xuXG4gICAgICBzdGFjayA9IHtcbiAgICAgICAgaW5BcnJheTogaW5BcnJheSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICBlZGl0czogZWRpdHMsXG4gICAgICAgIHByZXY6IHN0YWNrXG4gICAgICB9O1xuICAgICAgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkobm9kZSk7XG4gICAgICBrZXlzID0gaW5BcnJheSA/IG5vZGUgOiAoX3Zpc2l0b3JLZXlzJG5vZGUka2luID0gdmlzaXRvcktleXNbbm9kZS5raW5kXSkgIT09IG51bGwgJiYgX3Zpc2l0b3JLZXlzJG5vZGUka2luICE9PSB2b2lkIDAgPyBfdmlzaXRvcktleXMkbm9kZSRraW4gOiBbXTtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICBlZGl0cyA9IFtdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgfVxuICB9IHdoaWxlIChzdGFjayAhPT0gdW5kZWZpbmVkKTtcblxuICBpZiAoZWRpdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgbmV3Um9vdCA9IGVkaXRzW2VkaXRzLmxlbmd0aCAtIDFdWzFdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmlzaXRvciBpbnN0YW5jZSB3aGljaCBkZWxlZ2F0ZXMgdG8gbWFueSB2aXNpdG9ycyB0byBydW4gaW5cbiAqIHBhcmFsbGVsLiBFYWNoIHZpc2l0b3Igd2lsbCBiZSB2aXNpdGVkIGZvciBlYWNoIG5vZGUgYmVmb3JlIG1vdmluZyBvbi5cbiAqXG4gKiBJZiBhIHByaW9yIHZpc2l0b3IgZWRpdHMgYSBub2RlLCBubyBmb2xsb3dpbmcgdmlzaXRvcnMgd2lsbCBzZWUgdGhhdCBub2RlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEluUGFyYWxsZWwodmlzaXRvcnMpIHtcbiAgdmFyIHNraXBwaW5nID0gbmV3IEFycmF5KHZpc2l0b3JzLmxlbmd0aCk7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgZmFsc2UpO1xuXG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvcnNbaV0sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uIGxlYXZlKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBCUkVBSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChza2lwcGluZ1tpXSA9PT0gbm9kZSkge1xuICAgICAgICAgIHNraXBwaW5nW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gYSB2aXNpdG9yIGluc3RhbmNlLCBpZiBpdCBpcyBsZWF2aW5nIG9yIG5vdCwgYW5kIGEgbm9kZSBraW5kLCByZXR1cm5cbiAqIHRoZSBmdW5jdGlvbiB0aGUgdmlzaXRvciBydW50aW1lIHNob3VsZCBjYWxsLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpdEZuKHZpc2l0b3IsIGtpbmQsIGlzTGVhdmluZykge1xuICB2YXIga2luZFZpc2l0b3IgPSB2aXNpdG9yW2tpbmRdO1xuXG4gIGlmIChraW5kVmlzaXRvcikge1xuICAgIGlmICghaXNMZWF2aW5nICYmIHR5cGVvZiBraW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kKCkge30gfVxuICAgICAgcmV0dXJuIGtpbmRWaXNpdG9yO1xuICAgIH1cblxuICAgIHZhciBraW5kU3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8ga2luZFZpc2l0b3IubGVhdmUgOiBraW5kVmlzaXRvci5lbnRlcjtcblxuICAgIGlmICh0eXBlb2Yga2luZFNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kOiB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfSB9XG4gICAgICByZXR1cm4ga2luZFNwZWNpZmljVmlzaXRvcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNwZWNpZmljVmlzaXRvciA9IGlzTGVhdmluZyA/IHZpc2l0b3IubGVhdmUgOiB2aXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHNwZWNpZmljVmlzaXRvcikge1xuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY1Zpc2l0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8geyBlbnRlcigpIHt9LCBsZWF2ZSgpIHt9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljVmlzaXRvcjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwZWNpZmljS2luZFZpc2l0b3IgPSBzcGVjaWZpY1Zpc2l0b3Jba2luZF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNLaW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyOiB7IEtpbmQoKSB7fSB9LCBsZWF2ZTogeyBLaW5kKCkge30gfSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY0tpbmRWaXNpdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW4gRVMyMDE1IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLml0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5leHBvcnQgdmFyIFNZTUJPTF9JVEVSQVRPUiA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7IC8vIEluIEVTMjAxNyAob3IgYSBwb2x5ZmlsbGVkKSBlbnZpcm9ubWVudCwgdGhpcyB3aWxsIGJlIFN5bWJvbC5hc3luY0l0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX0FTWU5DX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciAhPSBudWxsID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJzsgLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5leHBvcnQgdmFyIFNZTUJPTF9UT19TVFJJTkdfVEFHID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgIT0gbnVsbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6ICdAQHRvU3RyaW5nVGFnJztcbiIsImZ1bmN0aW9uIGwoYSwgYikge1xuICBiLnRhZyA9IGE7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBtKCkge31cblxuZnVuY3Rpb24gcChhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHZhciBjID0gYS5sZW5ndGg7XG4gICAgbGV0IGQgPSAhMSxcbiAgICAgIGUgPSAhMSxcbiAgICAgIGYgPSAhMSxcbiAgICAgIGcgPSAwO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgZCA9ICEwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZSkge1xuICAgICAgICAgICAgZiA9ICEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGUgPSBmID0gITA7IGYgJiYgIWQ7ICkge1xuICAgICAgICAgICAgICBnIDwgYyA/ICgoaCA9IGFbZ10pLCAoZyA9IChnICsgMSkgfCAwKSwgKGYgPSAhMSksIGIobCgxLCBbaF0pKSkgOiAoKGQgPSAhMCksIGIoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZSA9ICExO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcigpIHt9XG5cbmZ1bmN0aW9uIHQoYSkge1xuICBhKDApO1xufVxuXG5mdW5jdGlvbiB1KGEpIHtcbiAgbGV0IGIgPSAhMTtcbiAgYShcbiAgICBsKDAsIFtcbiAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMgPyAoYiA9ICEwKSA6IGIgfHwgYSgwKTtcbiAgICAgIH0sXG4gICAgXSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdyhhKSB7XG4gIGlmICh2b2lkIDAgPT09IGEpIHtcbiAgICByZXR1cm4gKChhID0gW3YsIDBdKS50YWcgPSAyNTYpLCBhO1xuICB9XG4gIGlmIChudWxsID09PSBhIHx8IGFbMF0gIT09IHYpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICAoYSA9IFt2LCAoYVsxXSArIDEpIHwgMF0pLnRhZyA9IDI1NjtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHgoYSkge1xuICBpZiAobnVsbCA9PT0gYSB8fCBhWzBdICE9PSB2KSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaWYgKDAgIT09IChhID0gYVsxXSkpIHtcbiAgICByZXR1cm4gW3YsIChhIC0gMSkgfCAwXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB6KGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGsgJiZcbiAgICAgICAgICAgICgoayA9ICExKSxcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gKGIgPSBlLnNoaWZ0KCkpXG4gICAgICAgICAgICAgID8gKChiID0gYSh4KGIpKSksIChrID0gITApLCBiKGQpKVxuICAgICAgICAgICAgICA6IHFcbiAgICAgICAgICAgICAgPyBjKDApXG4gICAgICAgICAgICAgIDogZyB8fCAoKGcgPSAhMCksIGYoMCkpKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGsgJiYgKGMoYiksIG4gPyAobiA9ICExKSA6IGgoMCkpXG4gICAgICAgICAgOiAoKGggPSBiID0gYlswXSksIChuID0gITEpLCBiKDApKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gW10sXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gITEsXG4gICAgICAgIGggPSBtLFxuICAgICAgICBrID0gITEsXG4gICAgICAgIG4gPSAhMSxcbiAgICAgICAgcSA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gcSB8fCAoKHEgPSAhMCksIGsgfHwgMCAhPT0gZS5sZW5ndGggfHwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBxIHx8ICgoYiA9IGJbMF0pLCAoZyA9ICExKSwgayA/IGUucHVzaChiKSA6ICgoYiA9IGEoYikpLCAoayA9ICEwKSwgYihkKSkpXG4gICAgICAgICAgOiAoZiA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgaWYgKChxIHx8ICgocSA9ICEwKSwgZigxKSksIGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChrID0gITEpLCBoKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBxIHx8IGcgfHwgKChnID0gITApLCBmKDApKSwgayAmJiAhbiAmJiAoKG4gPSAhMCksIGgoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEEoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gQihhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBDKGEpIHtcbiAgcmV0dXJuIGEoMCk7XG59XG5cbmZ1bmN0aW9uIEQoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBlID0gbSxcbiAgICAgICAgZiA9ICExLFxuICAgICAgICBnID0gW10sXG4gICAgICAgIGggPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGggfHwgKChoID0gITApLCAwID09PSBnLmxlbmd0aCAmJiBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGggfHxcbiAgICAgICAgICAgICgoZiA9ICExKSxcbiAgICAgICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgICAgICAgICAgPyAwICE9PSBnLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAoKGcgPSBnLmZpbHRlcihkKSksXG4gICAgICAgICAgICAgICAgICAgIChhID0gMCA9PT0gZy5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICBoICYmIGEgPyBjKDApIDogIWYgJiYgYSAmJiAoKGYgPSAhMCksIGUoMCkpKVxuICAgICAgICAgICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgICAgICAgICAgPyAwICE9PSBnLmxlbmd0aCAmJiAoYyhsKDEsIFthWzBdXSkpLCBrKDApKVxuICAgICAgICAgICAgICAgICAgOiAoKGsgPSBhID0gYVswXSksIChnID0gZy5jb25jYXQoYSkpLCBhKDApKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgayA9IG07XG4gICAgICAgICAgICAgIDEgPT09IGEubGVuZ3RoID8gYShiKSA6IGEuYmluZChudWxsLCBiKTtcbiAgICAgICAgICAgIH0pKGEoYlswXSkpLFxuICAgICAgICAgICAgZiB8fCAoKGYgPSAhMCksIGUoMCkpKVxuICAgICAgICAgIDogKGUgPSBiWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGFcbiAgICAgICAgICAgICAgPyAoaCB8fCAoKGggPSAhMCksIGUoYSkpLFxuICAgICAgICAgICAgICAgIGcuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGMoYSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKGcgPSBbXSkpXG4gICAgICAgICAgICAgIDogKGYgfHwgaCA/IChmID0gITEpIDogKChmID0gITApLCBlKDApKSwgZy5mb3JFYWNoKEMpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBFKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEYoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gRyhhKSB7XG4gIHJldHVybiBEKEYpKGEpO1xufVxuXG5mdW5jdGlvbiBIKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgZCB8fCAoKGQgPSAhMCksIGMoZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFnKSB7XG4gICAgICAgICAgZCB8fCAoYShlWzBdKSwgYyhlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGcgPSBlWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhICYmIChkID0gITApLCBnKGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gSihhKSB7XG4gIGEoMCk7XG59XG5cbmZ1bmN0aW9uIEsoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICBoICYmXG4gICAgICAgICAgKCdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgICA/ICgoaCA9ICExKSwgbiA/IGMoYSkgOiBmIHx8ICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgICA/IChjKGEpLCBrID8gKGsgPSAhMSkgOiBnKDApKVxuICAgICAgICAgICAgOiAoKGcgPSBhID0gYVswXSksIChrID0gITEpLCBhKDApKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IG0sXG4gICAgICAgIGYgPSAhMSxcbiAgICAgICAgZyA9IG0sXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExLFxuICAgICAgICBuID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBuIHx8ICgobiA9ICEwKSwgaCB8fCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IG4gfHxcbiAgICAgICAgICAgIChoICYmIChnKDEpLCAoZyA9IG0pKSwgZiA/IChmID0gITEpIDogKChmID0gITApLCBlKDApKSwgKGIgPSBhKGJbMF0pKSwgKGggPSAhMCksIGIoZCkpXG4gICAgICAgICAgOiAoZSA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgaWYgKChuIHx8ICgobiA9ICEwKSwgZSgxKSksIGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoID0gITEpLCBnKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuIHx8IGYgfHwgKChmID0gITApLCBlKDApKSwgaCAmJiAhayAmJiAoKGsgPSAhMCksIGcoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEwoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gTShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBbXSxcbiAgICAgICAgZSA9IG07XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gcChkKShjKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IChkLmxlbmd0aCA+PSBhICYmIDAgPCBhICYmIGQuc2hpZnQoKSwgZC5wdXNoKGJbMF0pLCBlKDApKVxuICAgICAgICAgIDogKChiID0gYlswXSksIDAgPj0gYSA/IChiKDEpLCB1KGMpKSA6ICgoZSA9IGIpLCBiKDApKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBOKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSBtLFxuICAgICAgZCA9ICExO1xuICAgIGIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICdudW1iZXInID09IHR5cGVvZiBlID8gKGQgPSAhMCkgOiBlLnRhZyA/IGQgfHwgKGEoZVswXSksIGMoMCkpIDogKChjID0gZSA9IGVbMF0pLCBlKDApKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgcmV0dXJuIChkID0gITApLCBjKDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIE8oKSB7fVxuXG5mdW5jdGlvbiBRKCkge31cblxuZnVuY3Rpb24gUigpIHt9XG5cbmZ1bmN0aW9uIFMoKSB7fVxuXG5mdW5jdGlvbiBidWZmZXIkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBrIHx8ICgoayA9ICEwKSwgZigxKSwgMCA8IGUubGVuZ3RoICYmIGMobCgxLCBbZV0pKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAhayAmJiAwIDwgZS5sZW5ndGggJiYgKChhID0gZSksIChlID0gW10pLCBjKGwoMSwgW2FdKSkpXG4gICAgICAgICAgOiAoZyA9IGFbMF0pO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBbXSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSBtLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGsgfHwgKChrID0gITApLCBnKDEpLCAwIDwgZS5sZW5ndGggJiYgYyhsKDEsIFtlXSkpLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGsgfHwgKGUucHVzaChiWzBdKSwgaCA/IChoID0gITEpIDogKChoID0gITApLCBmKDApLCBnKDApKSlcbiAgICAgICAgICA6ICgoZiA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoayA9ICEwKSwgZigxKSwgZygxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGYoMCksIGcoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lJDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSBtLFxuICAgICAgICBmID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAwLFxuICAgICAgICBuID0gITE7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBiID0gZztcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IDEgPiBrXG4gICAgICAgICAgICA/IChrID0gKGsgKyAxKSB8IDApXG4gICAgICAgICAgICA6IG4gfHwgKChuID0gITApLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoYSA9IGFbMF0pLFxuICAgICAgICAgICAgdm9pZCAwICE9PSBiXG4gICAgICAgICAgICAgID8gbiB8fCAoKGYgPSB3KGEpKSwgKGggPSAhMSksIGMobCgxLCBbW2EsIHgoYildXSkpKVxuICAgICAgICAgICAgICA6ICgoZiA9IHcoYSkpLCBoID8gKGggPSAhMSkgOiBlKDApKSlcbiAgICAgICAgICA6IChkID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBmO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gMSA+IGtcbiAgICAgICAgICAgID8gKGsgPSAoayArIDEpIHwgMClcbiAgICAgICAgICAgIDogbiB8fCAoKG4gPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChhID0gYVswXSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IGJcbiAgICAgICAgICAgICAgPyBuIHx8ICgoZyA9IHcoYSkpLCAoaCA9ICExKSwgYyhsKDEsIFtbeChiKSwgYV1dKSkpXG4gICAgICAgICAgICAgIDogKChnID0gdyhhKSksIGggPyAoaCA9ICExKSA6IGQoMCkpKVxuICAgICAgICAgIDogKGUgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiAobiA9ICEwKSwgZCgxKSwgZSgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGQoYyksIGUoYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gY29uY2F0JDEoYSkge1xuICByZXR1cm4geihCKShwKGEpKTtcbn1cblxuZnVuY3Rpb24gY29uY2F0QWxsJDEoYSkge1xuICByZXR1cm4geihBKShhKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgdmFyIGEgPSBlO1xuICAgICAgICB2b2lkIDAgIT09IGEgJiYgKChlID0gdm9pZCAwKSwgY2xlYXJUaW1lb3V0KHgoYSkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gdm9pZCAwLFxuICAgICAgICBmID0gITEsXG4gICAgICAgIGcgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGcgfHwgKChnID0gITApLCB2b2lkIDAgIT09IGUgPyAoZiA9ICEwKSA6IGMoMCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZyB8fFxuICAgICAgICAgICAgKGQoKSxcbiAgICAgICAgICAgIChlID0gdyhcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBjKGIpO1xuICAgICAgICAgICAgICAgIGYgJiYgYygwKTtcbiAgICAgICAgICAgICAgfSwgYShiWzBdKSlcbiAgICAgICAgICAgICkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbiA9IGJbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICghZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPyAoKGcgPSAhMCksIChmID0gITEpLCBkKCksIG4oMSkpIDogbigwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5JDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiIHx8IGIudGFnXG4gICAgICAgICAgPyAoKGQgPSAoZCArIDEpIHwgMCksXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgMCAhPT0gZCAmJiAoKGQgPSAoZCAtIDEpIHwgMCksIGMoYikpO1xuICAgICAgICAgICAgfSwgYSkpXG4gICAgICAgICAgOiBjKGIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiID8gYyhiKSA6IGIudGFnID8gKGEoYlswXSkgPyBjKGIpIDogZCgwKSkgOiAoKGQgPSBiWzBdKSwgYyhiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBOKGEpKGIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQ2FsbGJhZyQyKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgZnVuY3Rpb24gYyhhLCBjKSB7XG4gICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGIoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA/IGMoMikgOiBjKDEpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBiKGwoMSwgW2NdKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGIoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAyID09PSBhLmxlbmd0aCA/IGEoMCwgYykgOiBhLmJpbmQobnVsbCwgMCwgYyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21Eb21FdmVudCQxKGEsIGIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgIGMobCgxLCBbYV0pKTtcbiAgICAgIH1cbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBjICYmIGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLCBkKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihiLCBkKTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gZnJvbUxpc3QkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITEsXG4gICAgICBkID0gITEsXG4gICAgICBlID0gITEsXG4gICAgICBmID0gYTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGQpIHtcbiAgICAgICAgICAgIGUgPSAhMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkID0gZSA9ICEwOyBlICYmICFjOyApIHtcbiAgICAgICAgICAgICAgKGEgPSBmKSA/ICgoZiA9IGFbMV0pLCAoZSA9ICExKSwgYihsKDEsIFthWzBdXSkpKSA6ICgoYyA9ICEwKSwgYigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkID0gITE7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tT2JzZXJ2YWJsZSQyKGEpIHtcbiAgdmFyIGIgPSB2b2lkIDAgIT09IGFbUF0gPyBhW1BdKCkgOiBhO1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYyA9IGIuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGEobCgxLCBbY10pKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBhKDApO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBRLFxuICAgIH0pO1xuICAgIGEoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9ICExO1xuICAgIGEudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgYyB8fCAoYihsKDEsIFthXSkpLCBiKDApKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodm9pZCAwKTtcbiAgICB9KTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgYSAmJiAoYyA9ICEwKTtcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbVZhbHVlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9ICExO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBkID8gKGMgPSAhMCkgOiBjIHx8ICgoYyA9ICEwKSwgYihsKDEsIFthXSkpLCBiKDApKTtcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJ2YWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gMDtcbiAgICB2YXIgZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhID0gYztcbiAgICAgIGMgPSAoYyArIDEpIHwgMDtcbiAgICAgIGIobCgxLCBbYV0pKTtcbiAgICB9LCBhKTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgYSAmJiBjbGVhckludGVydmFsKGQpO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9IHIsXG4gICAgICBkID0gITE7XG4gICAgYyA9IGEoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgZCB8fCBiKGwoMSwgW2FdKSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZCB8fCAoKGQgPSAhMCksIGIoMCkpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEgJiYgIWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoZCA9ICEwKSwgYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVN1YmplY3QkMSgpIHtcbiAgbGV0IGEgPSBbXSxcbiAgICBiID0gITE7XG4gIHJldHVybiB7XG4gICAgc291cmNlOiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gYihhKSB7XG4gICAgICAgIHJldHVybiBhICE9PSBjO1xuICAgICAgfVxuICAgICAgYSA9IGEuY29uY2F0KGMpO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGMgJiYgKGEgPSBhLmZpbHRlcihiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiAoYykge1xuICAgICAgYiB8fFxuICAgICAgICBhLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhKGwoMSwgW2NdKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGIgfHwgKChiID0gITApLCBhLmZvckVhY2godCkpO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBiID0gJ251bWJlcicgPT0gdHlwZW9mIGIgPyAwIDogYi50YWcgPyBsKDEsIFthKGJbMF0pXSkgOiBsKDAsIFtiWzBdXSk7XG4gICAgICAgIGMoYik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZSQxKGEpIHtcbiAgcmV0dXJuIEQoRSkocChhKSk7XG59XG5cbmZ1bmN0aW9uIG5ldmVyJDEoYSkge1xuICBhKGwoMCwgW21dKSk7XG59XG5cbmZ1bmN0aW9uIG9uRW5kJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkID0gITA7XG4gICAgICAgICAgYyhiKTtcbiAgICAgICAgICByZXR1cm4gYSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnRhZykge1xuICAgICAgICAgIGQgfHwgYyhiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZSA9IGJbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGMgPyAoKGQgPSAhMCksIGUoYyksIGEoKSkgOiBlKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25TdGFydCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IGMoYikgOiBiLnRhZyA/IGMoYikgOiAoYyhiKSwgYSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIGEgPSBhcmd1bWVudHMsIGIgPSBhcmd1bWVudHNbMF0sIGMgPSAxLCBkID0gYXJndW1lbnRzLmxlbmd0aDsgYyA8IGQ7IGMrKykge1xuICAgIGIgPSBhW2NdKGIpO1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoJDEoYSkge1xuICByZXR1cm4gTihPKShhKTtcbn1cblxuZnVuY3Rpb24gc2FtcGxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9IG0sXG4gICAgICAgIGYgPSB2b2lkIDAsXG4gICAgICAgIGcgPSAhMSxcbiAgICAgICAgaCA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYSkge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIGUoMSksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChmID0gdyhhWzBdKSksIGcgPyAoZyA9ICExKSA6ICgoZyA9ICEwKSwgZSgwKSwgZCgwKSkpXG4gICAgICAgICAgOiAoZCA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBiID0gZjtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGggfHwgKChoID0gITApLCBkKDEpLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/IHZvaWQgMCA9PT0gYiB8fCBoIHx8ICgoZiA9IHZvaWQgMCksIGMobCgxLCBbeChiKV0pKSlcbiAgICAgICAgICA6IChlID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGQoMSksIGUoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChnID0gITApLCBkKDApLCBlKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2NhbiQxKGEsIGIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGxldCBlID0gYjtcbiAgICAgICAgcmV0dXJuIGMoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgY1xuICAgICAgICAgICAgPyAoYyA9IDApXG4gICAgICAgICAgICA6IGMudGFnXG4gICAgICAgICAgICA/ICgoZSA9IGEoZSwgY1swXSkpLCAoYyA9IGwoMSwgW2VdKSkpXG4gICAgICAgICAgICA6IChjID0gbCgwLCBbY1swXV0pKTtcbiAgICAgICAgICBkKGMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSkoYSwgYik7XG59XG5cbmZ1bmN0aW9uIHNoYXJlJDEoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgPyAoYy5mb3JFYWNoKEopLCAoYyA9IFtdKSlcbiAgICAgIDogYS50YWdcbiAgICAgID8gKChlID0gITEpLFxuICAgICAgICBjLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICBiKGEpO1xuICAgICAgICB9KSlcbiAgICAgIDogKGQgPSBhWzBdKTtcbiAgfVxuICBsZXQgYyA9IFtdLFxuICAgIGQgPSBtLFxuICAgIGUgPSAhMTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7XG4gICAgZnVuY3Rpb24gZyhhKSB7XG4gICAgICByZXR1cm4gYSAhPT0gZjtcbiAgICB9XG4gICAgYyA9IGMuY29uY2F0KGYpO1xuICAgIDEgPT09IGMubGVuZ3RoICYmIGEoYik7XG4gICAgZihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBpZiAoKChjID0gYy5maWx0ZXIoZykpLCAwID09PSBjLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgfHwgKChlID0gITApLCBkKGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXAkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gYTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBjKGEpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gMCA8IGVcbiAgICAgICAgICAgID8gKChlID0gKGUgLSAxKSB8IDApLCBkKDApKVxuICAgICAgICAgICAgOiBjKGEpXG4gICAgICAgICAgOiAoKGQgPSBhWzBdKSwgYyhhKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBza2lwVW50aWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBnICYmICgoayA9ICEwKSwgZSgxKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGcgPSAhMSksIGYoMSkpXG4gICAgICAgICAgOiAoKGYgPSBhID0gYVswXSksIGEoMCkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBtLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9ICEwLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IChnICYmIGYoMSksIChrID0gITApLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGcgfHwga1xuICAgICAgICAgICAgPyBoXG4gICAgICAgICAgICAgID8gKGggPSAhMSlcbiAgICAgICAgICAgICAgOiAoKGggPSAhMCksIGUoMCksIGYoMCkpXG4gICAgICAgICAgICA6ICgoaCA9ICExKSwgYyhiKSlcbiAgICAgICAgICA6ICgoZSA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICgoKGsgPSAhMCksIGUoMSksIGcpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZigxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaCB8fCAoKGggPSAhMCksIGcgJiYgZigwKSwgZSgwKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBza2lwV2hpbGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gITA7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gYyhiKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGVcbiAgICAgICAgICAgID8gYShiWzBdKVxuICAgICAgICAgICAgICA/IGQoMClcbiAgICAgICAgICAgICAgOiAoKGUgPSAhMSksIGMoYikpXG4gICAgICAgICAgICA6IGMoYilcbiAgICAgICAgICA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFsbCQxKGEpIHtcbiAgcmV0dXJuIEsoTCkoYSk7XG59XG5cbmZ1bmN0aW9uIHRha2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAhMSxcbiAgICAgICAgZSA9IDAsXG4gICAgICAgIGYgPSBtO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gZCB8fCAoKGQgPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZSA8IGEgJiYgIWQgJiYgKChlID0gKGUgKyAxKSB8IDApLCBjKGIpLCAhZCAmJiBlID49IGEgJiYgKChkID0gITApLCBjKDApLCBmKDEpKSlcbiAgICAgICAgICA6ICgoYiA9IGJbMF0pLCAwID49IGEgPyAoKGQgPSAhMCksIGMoMCksIGIoMSkpIDogKGYgPSBiKSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGQgPSAhMCksIGYoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGUgPCBhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWtlVW50aWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInICE9IHR5cGVvZiBhICYmIChhLnRhZyA/ICgoZSA9ICEwKSwgZigxKSwgYygwKSkgOiAoKGcgPSBhID0gYVswXSksIGEoMCkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gITEsXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gbTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgPyBlIHx8ICgoZSA9ICEwKSwgZygxKSwgYygwKSkgOiBiLnRhZyA/IGUgfHwgYyhiKSA6ICgoZiA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYSA/ICgoZSA9ICEwKSwgZigxKSwgZygxKSkgOiBmKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBlIHx8ICgoZSA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBlIHx8IChhKGJbMF0pID8gYyhiKSA6ICgoZSA9ICEwKSwgYygwKSwgZCgxKSkpXG4gICAgICAgICAgOiAoKGQgPSBiWzBdKSwgYyhiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKCkge1xuICAgICAgICB2b2lkIDAgIT09IGcgJiYgY2xlYXJUaW1lb3V0KHgoZykpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgZyA9IHZvaWQgMDtcbiAgICAgICAgZiA9ICExO1xuICAgICAgfVxuICAgICAgbGV0IGYgPSAhMSxcbiAgICAgICAgZyA9IHZvaWQgMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGQoKSwgYygwKTtcbiAgICAgICAgfSBlbHNlIGlmIChiLnRhZykge1xuICAgICAgICAgIGYgfHwgKChmID0gITApLCBkKCksIChnID0gdyhzZXRUaW1lb3V0KGUsIGEoYlswXSkpKSksIGMoYikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBoID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPyAoZCgpLCBoKDEpKSA6IGgoYSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkkMShhKSB7XG4gIGxldCBiID0gW10sXG4gICAgYyA9IG0sXG4gICAgZCA9ICExO1xuICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgJ251bWJlcicgPT0gdHlwZW9mIGEgPyAoZCA9ICEwKSA6IGEudGFnID8gKGIucHVzaChhWzBdKSwgYygwKSkgOiAoKGMgPSBhID0gYVswXSksIGEoMCkpO1xuICB9KTtcbiAgZCB8fCBjKDEpO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gdG9DYWxsYmFnJDIoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIsIGMpIHtcbiAgICBpZiAoMCA9PT0gYikge1xuICAgICAgcmV0dXJuIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgZnVuY3Rpb24gYihhKSB7XG4gICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGQoMCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGQoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYSkge1xuICAgICAgICAgIHJldHVybiAyID09PSBjLmxlbmd0aCA/IGMoMiwgdm9pZCAwKSA6IGMuYmluZChudWxsLCAyLCB2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIHJldHVybiAoYSA9IGFbMF0pLCAyID09PSBjLmxlbmd0aCA/IGMoMSwgYSkgOiBjLmJpbmQobnVsbCwgMSwgYSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSBhWzBdO1xuICAgICAgICByZXR1cm4gMiA9PT0gYy5sZW5ndGggPyBjKDAsIGIpIDogYy5iaW5kKG51bGwsIDAsIGIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b09ic2VydmFibGUkMihhKSB7XG4gIHZhciBiID0ge1xuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGIsIGQsIGUpIHtcbiAgICAgIHZhciBjID0gKCdvYmplY3QnID09IHR5cGVvZiBiID8gYi5uZXh0LmJpbmQoYikgOiBiKSB8fCBSLFxuICAgICAgICBnID0gKCdvYmplY3QnID09IHR5cGVvZiBiID8gYi5jb21wbGV0ZS5iaW5kKGIpIDogZSkgfHwgUztcbiAgICAgIGxldCBoID0gbSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYShmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGEpIHtcbiAgICAgICAgICByZXR1cm4gKGsgPSAhMCksIGcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50YWcpIHtcbiAgICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjKGFbMF0pO1xuICAgICAgICAgIHJldHVybiBoKDApO1xuICAgICAgICB9XG4gICAgICAgIGggPSBhID0gYVswXTtcbiAgICAgICAgYSgwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWspIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jbG9zZWQgPSAhMSksIChrID0gITApLCBoKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VkOiAhMSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbiAgYltQXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZSQxKGEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChiKSB7XG4gICAgTSgxKShhKShmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKCdudW1iZXInICE9IHR5cGVvZiBhKSB7XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIGIoYVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYVswXSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHYgPSBbXSxcbiAgUCA9XG4gICAgJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgU3ltYm9sXG4gICAgICA/IFN5bWJvbC5vYnNlcnZhYmxlIHx8IChTeW1ib2wub2JzZXJ2YWJsZSA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpKVxuICAgICAgOiAnQEBvYnNlcnZhYmxlJztcblxuZXhwb3J0IHtcbiAgYnVmZmVyJDEgYXMgYnVmZmVyLFxuICBjb21iaW5lJDEgYXMgY29tYmluZSxcbiAgY29uY2F0JDEgYXMgY29uY2F0LFxuICBjb25jYXRBbGwkMSBhcyBjb25jYXRBbGwsXG4gIHogYXMgY29uY2F0TWFwLFxuICBkZWJvdW5jZSQxIGFzIGRlYm91bmNlLFxuICBkZWxheSQxIGFzIGRlbGF5LFxuICB1IGFzIGVtcHR5LFxuICBmaWx0ZXIkMSBhcyBmaWx0ZXIsXG4gIEcgYXMgZmxhdHRlbixcbiAgZm9yRWFjaCQxIGFzIGZvckVhY2gsXG4gIHAgYXMgZnJvbUFycmF5LFxuICBmcm9tQ2FsbGJhZyQyIGFzIGZyb21DYWxsYmFnLFxuICBmcm9tRG9tRXZlbnQkMSBhcyBmcm9tRG9tRXZlbnQsXG4gIGZyb21MaXN0JDEgYXMgZnJvbUxpc3QsXG4gIGZyb21PYnNlcnZhYmxlJDIgYXMgZnJvbU9ic2VydmFibGUsXG4gIGZyb21Qcm9taXNlJDEgYXMgZnJvbVByb21pc2UsXG4gIGZyb21WYWx1ZSQxIGFzIGZyb21WYWx1ZSxcbiAgaW50ZXJ2YWwkMSBhcyBpbnRlcnZhbCxcbiAgbWFrZSQxIGFzIG1ha2UsXG4gIG1ha2VTdWJqZWN0JDEgYXMgbWFrZVN1YmplY3QsXG4gIG1hcCQxIGFzIG1hcCxcbiAgbWVyZ2UkMSBhcyBtZXJnZSxcbiAgRyBhcyBtZXJnZUFsbCxcbiAgRCBhcyBtZXJnZU1hcCxcbiAgbmV2ZXIkMSBhcyBuZXZlcixcbiAgb25FbmQkMSBhcyBvbkVuZCxcbiAgSCBhcyBvblB1c2gsXG4gIG9uU3RhcnQkMSBhcyBvblN0YXJ0LFxuICBwaXBlLFxuICBwdWJsaXNoJDEgYXMgcHVibGlzaCxcbiAgc2FtcGxlJDEgYXMgc2FtcGxlLFxuICBzY2FuJDEgYXMgc2NhbixcbiAgc2hhcmUkMSBhcyBzaGFyZSxcbiAgc2tpcCQxIGFzIHNraXAsXG4gIHNraXBVbnRpbCQxIGFzIHNraXBVbnRpbCxcbiAgc2tpcFdoaWxlJDEgYXMgc2tpcFdoaWxlLFxuICBOIGFzIHN1YnNjcmliZSxcbiAgc3dpdGNoQWxsJDEgYXMgc3dpdGNoQWxsLFxuICBLIGFzIHN3aXRjaE1hcCxcbiAgdGFrZSQxIGFzIHRha2UsXG4gIE0gYXMgdGFrZUxhc3QsXG4gIHRha2VVbnRpbCQxIGFzIHRha2VVbnRpbCxcbiAgdGFrZVdoaWxlJDEgYXMgdGFrZVdoaWxlLFxuICBIIGFzIHRhcCxcbiAgdGhyb3R0bGUkMSBhcyB0aHJvdHRsZSxcbiAgdG9BcnJheSQxIGFzIHRvQXJyYXksXG4gIHRvQ2FsbGJhZyQyIGFzIHRvQ2FsbGJhZyxcbiAgdG9PYnNlcnZhYmxlJDIgYXMgdG9PYnNlcnZhYmxlLFxuICB0b1Byb21pc2UkMSBhcyB0b1Byb21pc2UsXG59O1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJ1cmwiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=