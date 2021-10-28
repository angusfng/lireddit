self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_reactprojects_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Documents\\reactprojects\\lireddit\\web\\src\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var REGISTER_MUT = "\nmutation register($username: String!, $password: String!) {\n  register(options: { username : $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}\n";

var register = function register() {
  _s();

  var _useMutation = (0,urql__WEBPACK_IMPORTED_MODULE_5__.useMutation)(REGISTER_MUT),
      _useMutation2 = (0,C_Users_User_Documents_reactprojects_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation);

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: function onSubmit(values) {
      console.log(values);
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "small",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
        id: "username",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
          value: formik.values.username,
          onChange: formik.handleChange,
          placeholder: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
        id: "password",
        mt: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
          value: formik.values.password,
          onChange: formik.handleChange,
          placeholder: "Password",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
        mt: 4,
        isLoading: formik.isSubmitting,
        colorScheme: "teal",
        type: "submit",
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(register, "kQabkXS9m6YorzxTZELTf/hz1s4=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_5__.useMutation, formik__WEBPACK_IMPORTED_MODULE_1__.useFormik];
});

/* harmony default export */ __webpack_exports__["default"] = (register);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNmZhOGRkYjY1NjUxMWVlMmZhNDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsWUFBWSxpUkFBbEI7O0FBaUJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIscUJBQVdGLGlEQUFXLENBQUNDLFlBQUQsQ0FBdEI7QUFBQTs7QUFFQSxNQUFNRSxNQUFNLEdBQUdWLGlEQUFTLENBQUM7QUFDdkJXLElBQUFBLGFBQWEsRUFBRTtBQUNiQyxNQUFBQSxRQUFRLEVBQUUsRUFERztBQUViQyxNQUFBQSxRQUFRLEVBQUU7QUFGRyxLQURRO0FBS3ZCQyxJQUFBQSxRQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDRDtBQVBzQixHQUFELENBQXhCO0FBVUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUwsTUFBTSxDQUFDUSxZQUF2QjtBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQWEsVUFBRSxFQUFDLFVBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUNFLGVBQUssRUFBRVIsTUFBTSxDQUFDSyxNQUFQLENBQWNILFFBRHZCO0FBRUUsa0JBQVEsRUFBRUYsTUFBTSxDQUFDUyxZQUZuQjtBQUdFLHFCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0UsOERBQUMseURBQUQ7QUFBYSxVQUFFLEVBQUMsVUFBaEI7QUFBMkIsVUFBRSxFQUFFLENBQS9C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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZEQUFpQixxQ0FBcUMsNkRBQWlCOztBQUVsSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDZEQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrRUFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrRUFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkscUVBQTZCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksaUVBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGdFQUF3QjtBQUNwQztBQUNBO0FB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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1osNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlFQUF5RSxPQUFPO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcURFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJxbC9kaXN0L3VycWwuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdXJxbC9jb3JlL2Rpc3QvMThlZTBkNWMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHVycWwvY29yZS9kaXN0L3VycWwtY29yZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2Vycm9yL0dyYXBoUUxFcnJvci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2Vycm9yL3N5bnRheEVycm9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZWZpbmVJbnNwZWN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZXZBc3NlcnQubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2luc3BlY3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2luc3RhbmNlT2YubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2ludmFyaWFudC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaXNPYmplY3RMaWtlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9ub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvYXN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvYmxvY2tTdHJpbmcubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9kaXJlY3RpdmVMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvbGV4ZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uvc291cmNlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdG9rZW5LaW5kLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL3BvbHlmaWxscy9zeW1ib2xzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvbmthL2Rpc3Qvd29ua2EubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJ1cnFsXCI7XHJcblxyXG5jb25zdCBSRUdJU1RFUl9NVVQgPSBgXHJcbm11dGF0aW9uIHJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XHJcbiAgcmVnaXN0ZXIob3B0aW9uczogeyB1c2VybmFtZSA6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcclxuICAgIGVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICAgIHVzZXIge1xyXG4gICAgICBpZFxyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBjcmVhdGVkQXRcclxuICAgICAgdXBkYXRlZEF0XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5jb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbXSA9IHVzZU11dGF0aW9uKFJFR0lTVEVSX01VVCk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIGlkPVwidXNlcm5hbWVcIj5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBpZD1cInBhc3N3b3JkXCIgbXQ9ezR9PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2Zvcm1pay5pc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjtcclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKVxuICAgID8gU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKVxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbnZhciBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICB2YXIgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2UodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgdmFyIHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHZhciBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShcbiAgICAgIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGhcbiAgICApXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICB2YXIgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgIH1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKHZhciBpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxudmFyIGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgdmFyIHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgdmFyIGkxNiA9IGkgKiAxNlxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuIiwiLyohIGllZWU3NTQuIEJTRC0zLUNsYXVzZSBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNsaWVudCBhcyBlLCBjcmVhdGVSZXF1ZXN0IGFzIHQgfSBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IGFzIG4sIHVzZUNvbnRleHQgYXMgciwgdXNlUmVmIGFzIHUsIHVzZVN0YXRlIGFzIGksIHVzZUNhbGxiYWNrIGFzIGEsIHVzZUVmZmVjdCBhcyBvLCB1c2VNZW1vIGFzIGMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdG9Qcm9taXNlIGFzIHMsIHN1YnNjcmliZSBhcyBmLCBvblB1c2ggYXMgbCwgdGFrZVdoaWxlIGFzIHYsIG9uRW5kIGFzIHAgfSBmcm9tIFwid29ua2FcIjtcblxudmFyIGQgPSBlKHtcbiAgdXJsOiBcIi9ncmFwaHFsXCJcbn0pO1xuXG52YXIgeCA9IG4oZCk7XG5cbnZhciBoID0geC5Qcm92aWRlcjtcblxudmFyIHkgPSB4LkNvbnN1bWVyO1xuXG54LmRpc3BsYXlOYW1lID0gXCJVcnFsQ29udGV4dFwiO1xuXG52YXIgZyA9ICExO1xuXG5mdW5jdGlvbiB1c2VDbGllbnQoKSB7XG4gIHZhciBlID0gcih4KTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBlID09PSBkICYmICFnKSB7XG4gICAgZyA9ICEwO1xuICAgIGNvbnNvbGUud2FybihcIkRlZmF1bHQgQ2xpZW50OiBObyBjbGllbnQgaGFzIGJlZW4gc3BlY2lmaWVkIHVzaW5nIHVycWwncyBQcm92aWRlci5UaGlzIG1lYW5zIHRoYXQgdXJxbCB3aWxsIGJlIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0cyBpbmNsdWRpbmcgbWFraW5nIHJlcXVlc3RzIHRvIGAvZ3JhcGhxbGAuXFxuSWYgdGhhdCdzIG5vdCB3aGF0IHlvdSB3YW50LCBwbGVhc2UgY3JlYXRlIGEgY2xpZW50IGFuZCBhZGQgYSBQcm92aWRlci5cIik7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gKF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbihlKSB7XG4gICAgZm9yICh2YXIgdCA9IDE7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBuID0gYXJndW1lbnRzW3RdO1xuICAgICAgZm9yICh2YXIgciBpbiBuKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobiwgcikpIHtcbiAgICAgICAgICBlW3JdID0gbltyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxudmFyIGIgPSB7XG4gIGZldGNoaW5nOiAhMSxcbiAgc3RhbGU6ICExLFxuICBlcnJvcjogdm9pZCAwLFxuICBkYXRhOiB2b2lkIDAsXG4gIGV4dGVuc2lvbnM6IHZvaWQgMCxcbiAgb3BlcmF0aW9uOiB2b2lkIDBcbn07XG5cbmZ1bmN0aW9uIGNvbXB1dGVOZXh0U3RhdGUoZSwgdCkge1xuICB2YXIgbiA9IF9leHRlbmRzKHt9LCBlLCB0LCB7XG4gICAgZmV0Y2hpbmc6ICEhdC5mZXRjaGluZyxcbiAgICBzdGFsZTogISF0LnN0YWxlXG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gaXNTaGFsbG93RGlmZmVyZW50KGUsIHQpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiB0KSB7XG4gICAgICByZXR1cm4gZSAhPT0gdDtcbiAgICB9XG4gICAgZm9yICh2YXIgbiBpbiBlKSB7XG4gICAgICBpZiAoIShuIGluIHQpKSB7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgciBpbiB0KSB7XG4gICAgICBpZiAoZVtyXSAhPT0gdFtyXSkge1xuICAgICAgICByZXR1cm4gITA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAhMTtcbiAgfShlLCBuKSA/IG4gOiBlO1xufVxuXG5mdW5jdGlvbiBoYXNEZXBzQ2hhbmdlZChlLCB0KSB7XG4gIGZvciAodmFyIG4gPSAwLCByID0gdC5sZW5ndGg7IG4gPCByOyBuKyspIHtcbiAgICBpZiAoZVtuXSAhPT0gdFtuXSkge1xuICAgICAgcmV0dXJuICEwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gITE7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKGUpIHtcbiAgdmFyIG4gPSB1KCEwKTtcbiAgdmFyIHIgPSB1c2VDbGllbnQoKTtcbiAgdmFyIGMgPSBpKGIpO1xuICB2YXIgZiA9IGNbMF07XG4gIHZhciBsID0gY1sxXTtcbiAgdmFyIHYgPSBhKChmdW5jdGlvbih1LCBpKSB7XG4gICAgbChfZXh0ZW5kcyh7fSwgYiwge1xuICAgICAgZmV0Y2hpbmc6ICEwXG4gICAgfSkpO1xuICAgIHJldHVybiBzKHIuZXhlY3V0ZU11dGF0aW9uKHQoZSwgdSksIGkgfHwge30pKS50aGVuKChmdW5jdGlvbihlKSB7XG4gICAgICBpZiAobi5jdXJyZW50KSB7XG4gICAgICAgIGwoe1xuICAgICAgICAgIGZldGNoaW5nOiAhMSxcbiAgICAgICAgICBzdGFsZTogISFlLnN0YWxlLFxuICAgICAgICAgIGRhdGE6IGUuZGF0YSxcbiAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICBleHRlbnNpb25zOiBlLmV4dGVuc2lvbnMsXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLm9wZXJhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH0pKTtcbiAgfSksIFsgciwgZSwgbCBdKTtcbiAgbygoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbi5jdXJyZW50ID0gITE7XG4gICAgfTtcbiAgfSksIFtdKTtcbiAgcmV0dXJuIFsgZiwgdiBdO1xufVxuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0KGUsIG4pIHtcbiAgdmFyIHIgPSB1KHZvaWQgMCk7XG4gIHJldHVybiBjKChmdW5jdGlvbigpIHtcbiAgICB2YXIgdSA9IHQoZSwgbik7XG4gICAgaWYgKHZvaWQgMCAhPT0gci5jdXJyZW50ICYmIHIuY3VycmVudC5rZXkgPT09IHUua2V5KSB7XG4gICAgICByZXR1cm4gci5jdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByLmN1cnJlbnQgPSB1O1xuICAgICAgcmV0dXJuIHU7XG4gICAgfVxuICB9KSwgWyBlLCBuIF0pO1xufVxuXG52YXIgcSA9ICExO1xuXG5mdW5jdGlvbiB1c2VRdWVyeShlKSB7XG4gIHZhciB0ID0gdXNlQ2xpZW50KCk7XG4gIHZhciBuID0gZnVuY3Rpb24gZ2V0Q2FjaGVGb3JDbGllbnQoZSkge1xuICAgIGlmICghZS5fcmVhY3QpIHtcbiAgICAgIHZhciB0ID0gbmV3IFNldDtcbiAgICAgIHZhciBuID0gbmV3IE1hcDtcbiAgICAgIGlmIChlLm9wZXJhdGlvbnMkKSB7XG4gICAgICAgIGYoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoXCJ0ZWFyZG93blwiID09PSBlLmtpbmQgJiYgdC5oYXMoZS5rZXkpKSB7XG4gICAgICAgICAgICB0LmRlbGV0ZShlLmtleSk7XG4gICAgICAgICAgICBuLmRlbGV0ZShlLmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSkoZS5vcGVyYXRpb25zJCk7XG4gICAgICB9XG4gICAgICBlLl9yZWFjdCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoZSkge1xuICAgICAgICAgIHJldHVybiBuLmdldChlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoZSwgcikge1xuICAgICAgICAgIHQuZGVsZXRlKGUpO1xuICAgICAgICAgIG4uc2V0KGUsIHIpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGUpIHtcbiAgICAgICAgICB0LmFkZChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGUuX3JlYWN0O1xuICB9KHQpO1xuICB2YXIgciA9IGZ1bmN0aW9uIGlzU3VzcGVuc2UoZSwgdCkge1xuICAgIHJldHVybiBlLnN1c3BlbnNlICYmICghdCB8fCAhMSAhPT0gdC5zdXNwZW5zZSk7XG4gIH0odCwgZS5jb250ZXh0KTtcbiAgdmFyIHUgPSB1c2VSZXF1ZXN0KGUucXVlcnksIGUudmFyaWFibGVzKTtcbiAgdmFyIHMgPSBjKChmdW5jdGlvbigpIHtcbiAgICBpZiAoZS5wYXVzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBpID0gdC5leGVjdXRlUXVlcnkodSwgX2V4dGVuZHMoe30sIHtcbiAgICAgIHJlcXVlc3RQb2xpY3k6IGUucmVxdWVzdFBvbGljeVxuICAgIH0sIGUuY29udGV4dCkpO1xuICAgIHJldHVybiByID8gbCgoZnVuY3Rpb24oZSkge1xuICAgICAgbi5zZXQodS5rZXksIGUpO1xuICAgIH0pKShpKSA6IGk7XG4gIH0pLCBbIG4sIHQsIHUsIHIsIGUucGF1c2UsIGUucmVxdWVzdFBvbGljeSwgZS5jb250ZXh0IF0pO1xuICB2YXIgZCA9IGEoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoaW5nOiAhMVxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHIgPSBuLmdldCh1LmtleSk7XG4gICAgaWYgKCFyKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBhID0gZigoZnVuY3Rpb24oZSkge1xuICAgICAgICByID0gZTtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICBpKHIpO1xuICAgICAgICB9XG4gICAgICB9KSkodigoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ICYmICFpIHx8ICFyO1xuICAgICAgfSkpKGUpKTtcbiAgICAgIGlmIChudWxsID09IHIgJiYgdCkge1xuICAgICAgICB2YXIgbyA9IG5ldyBQcm9taXNlKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaSA9IGU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgbi5zZXQodS5rZXksIG8pO1xuICAgICAgICB0aHJvdyBvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYS51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodCAmJiBudWxsICE9IHIgJiYgXCJ0aGVuXCIgaW4gcikge1xuICAgICAgdGhyb3cgcjtcbiAgICB9XG4gICAgcmV0dXJuIHIgfHwge1xuICAgICAgZmV0Y2hpbmc6ICEwXG4gICAgfTtcbiAgfSksIFsgbiwgdSBdKTtcbiAgdmFyIHggPSBbIHQsIHUsIGUucmVxdWVzdFBvbGljeSwgZS5jb250ZXh0LCBlLnBhdXNlIF07XG4gIHZhciBoID0gaSgoZnVuY3Rpb24oKSB7XG4gICAgcSA9ICEwO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gWyBzLCBjb21wdXRlTmV4dFN0YXRlKGIsIGQocywgcikpLCB4IF07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHEgPSAhMTtcbiAgICB9XG4gIH0pKTtcbiAgdmFyIHkgPSBoWzBdO1xuICB2YXIgZyA9IGhbMV07XG4gIHZhciBtID0geVsxXTtcbiAgaWYgKHMgIT09IHlbMF0gJiYgaGFzRGVwc0NoYW5nZWQoeVsyXSwgeCkpIHtcbiAgICBnKFsgcywgbSA9IGNvbXB1dGVOZXh0U3RhdGUoeVsxXSwgZChzLCByKSksIHggXSk7XG4gIH1cbiAgbygoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSB5WzBdO1xuICAgIHZhciB0ID0geVsyXVsxXTtcbiAgICB2YXIgciA9ICExO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdChlKSB7XG4gICAgICByID0gITA7XG4gICAgICBpZiAoIXEpIHtcbiAgICAgICAgZygoZnVuY3Rpb24odCkge1xuICAgICAgICAgIHZhciBuID0gY29tcHV0ZU5leHRTdGF0ZSh0WzFdLCBlKTtcbiAgICAgICAgICByZXR1cm4gdFsxXSAhPT0gbiA/IFsgdFswXSwgbiwgdFsyXSBdIDogdDtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHUgPSBmKHVwZGF0ZVJlc3VsdCkocCgoZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICAgIH0pO1xuICAgICAgfSkpKGUpKTtcbiAgICAgIGlmICghcikge1xuICAgICAgICB1cGRhdGVSZXN1bHQoe1xuICAgICAgICAgIGZldGNoaW5nOiAhMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbi5kaXNwb3NlKHQua2V5KTtcbiAgICAgICAgdS51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCBbIG4sIHlbMF0sIHlbMl1bMV0gXSk7XG4gIHJldHVybiBbIG0sIGEoKGZ1bmN0aW9uKGkpIHtcbiAgICB2YXIgYSA9IF9leHRlbmRzKHt9LCB7XG4gICAgICByZXF1ZXN0UG9saWN5OiBlLnJlcXVlc3RQb2xpY3lcbiAgICB9LCBlLmNvbnRleHQsIGkpO1xuICAgIGcoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBbIHIgPyBsKChmdW5jdGlvbihlKSB7XG4gICAgICAgIG4uc2V0KHUua2V5LCBlKTtcbiAgICAgIH0pKSh0LmV4ZWN1dGVRdWVyeSh1LCBhKSkgOiB0LmV4ZWN1dGVRdWVyeSh1LCBhKSwgZVsxXSwgeCBdO1xuICAgIH0pKTtcbiAgfSksIFsgdCwgbiwgdSwgciwgZCwgZS5yZXF1ZXN0UG9saWN5LCBlLmNvbnRleHQgXSkgXTtcbn1cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKGUsIHQpIHtcbiAgdmFyIG4gPSB1c2VDbGllbnQoKTtcbiAgdmFyIHIgPSB1c2VSZXF1ZXN0KGUucXVlcnksIGUudmFyaWFibGVzKTtcbiAgdmFyIHMgPSB1KHQpO1xuICBzLmN1cnJlbnQgPSB0O1xuICB2YXIgbCA9IGMoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhZS5wYXVzZSA/IG4uZXhlY3V0ZVN1YnNjcmlwdGlvbihyLCBlLmNvbnRleHQpIDogbnVsbDtcbiAgfSksIFsgbiwgciwgZS5wYXVzZSwgZS5jb250ZXh0IF0pO1xuICB2YXIgdiA9IFsgbiwgciwgZS5jb250ZXh0LCBlLnBhdXNlIF07XG4gIHZhciBkID0gaSgoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFsgbCwgX2V4dGVuZHMoe30sIGIsIHtcbiAgICAgIGZldGNoaW5nOiAhIWxcbiAgICB9KSwgdiBdO1xuICB9KSk7XG4gIHZhciB4ID0gZFswXTtcbiAgdmFyIGggPSBkWzFdO1xuICB2YXIgeSA9IHhbMV07XG4gIGlmIChsICE9PSB4WzBdICYmIGhhc0RlcHNDaGFuZ2VkKHhbMl0sIHYpKSB7XG4gICAgaChbIGwsIHkgPSBjb21wdXRlTmV4dFN0YXRlKHhbMV0sIHtcbiAgICAgIGZldGNoaW5nOiAhIWxcbiAgICB9KSwgdiBdKTtcbiAgfVxuICBvKChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoZSkge1xuICAgICAgaCgoZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgbiA9IGNvbXB1dGVOZXh0U3RhdGUodFsxXSwgZSk7XG4gICAgICAgIGlmICh0WzFdID09PSBuKSB7XG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuY3VycmVudCAmJiB0WzFdLmRhdGEgIT09IG4uZGF0YSkge1xuICAgICAgICAgIG4uZGF0YSA9IHMuY3VycmVudCh0WzFdLmRhdGEsIG4uZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsgdFswXSwgbiwgdFsyXSBdO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoeFswXSkge1xuICAgICAgcmV0dXJuIGYodXBkYXRlUmVzdWx0KShwKChmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICBmZXRjaGluZzogITFcbiAgICAgICAgfSk7XG4gICAgICB9KSkoeFswXSkpLnVuc3Vic2NyaWJlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVSZXN1bHQoe1xuICAgICAgICBmZXRjaGluZzogITFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksIFsgeFswXSBdKTtcbiAgcmV0dXJuIFsgeSwgYSgoZnVuY3Rpb24odCkge1xuICAgIHZhciB1ID0gbi5leGVjdXRlU3Vic2NyaXB0aW9uKHIsIF9leHRlbmRzKHt9LCBlLmNvbnRleHQsIHQpKTtcbiAgICBoKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gWyB1LCBlWzFdLCBlWzJdIF07XG4gICAgfSkpO1xuICB9KSwgWyBuLCBlLmNvbnRleHQsIHIgXSkgXTtcbn1cblxuZnVuY3Rpb24gTXV0YXRpb24oZSkge1xuICB2YXIgdCA9IHVzZU11dGF0aW9uKGUucXVlcnkpO1xuICByZXR1cm4gZS5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgdFswXSwge1xuICAgIGV4ZWN1dGVNdXRhdGlvbjogdFsxXVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIFF1ZXJ5KGUpIHtcbiAgdmFyIHQgPSB1c2VRdWVyeShlKTtcbiAgcmV0dXJuIGUuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRbMF0sIHtcbiAgICBleGVjdXRlUXVlcnk6IHRbMV1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBTdWJzY3JpcHRpb24oZSkge1xuICB2YXIgdCA9IHVzZVN1YnNjcmlwdGlvbihlLCBlLmhhbmRsZXIpO1xuICByZXR1cm4gZS5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgdFswXSwge1xuICAgIGV4ZWN1dGVTdWJzY3JpcHRpb246IHRbMV1cbiAgfSkpO1xufVxuXG5leHBvcnQgeyB5IGFzIENvbnN1bWVyLCB4IGFzIENvbnRleHQsIE11dGF0aW9uLCBoIGFzIFByb3ZpZGVyLCBRdWVyeSwgU3Vic2NyaXB0aW9uLCB1c2VDbGllbnQsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlU3Vic2NyaXB0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cnFsLmVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgR3JhcGhRTEVycm9yIGFzIGUgfSBmcm9tIFwiZ3JhcGhxbC9lcnJvci9HcmFwaFFMRXJyb3IubWpzXCI7XG5cbmltcG9ydCB7IEtpbmQgYXMgciB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qc1wiO1xuXG5pbXBvcnQgeyBwYXJzZSBhcyB0IH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyLm1qc1wiO1xuXG5pbXBvcnQgeyBwcmludCBhcyBuIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvcHJpbnRlci5tanNcIjtcblxuaW1wb3J0IHsgbWFrZSBhcyBvIH0gZnJvbSBcIndvbmthXCI7XG5cbmZ1bmN0aW9uIHJlaHlkcmF0ZUdyYXBoUWxFcnJvcihyKSB7XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSB7XG4gICAgcmV0dXJuIG5ldyBlKHIpO1xuICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIHIgJiYgci5tZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBlKHIubWVzc2FnZSwgci5ub2Rlcywgci5zb3VyY2UsIHIucG9zaXRpb25zLCByLnBhdGgsIHIsIHIuZXh0ZW5zaW9ucyB8fCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHI7XG4gIH1cbn1cblxudmFyIGEgPSBmdW5jdGlvbihlKSB7XG4gIGZ1bmN0aW9uIENvbWJpbmVkRXJyb3Iocikge1xuICAgIHZhciB0ID0gci5uZXR3b3JrRXJyb3I7XG4gICAgdmFyIG4gPSByLnJlc3BvbnNlO1xuICAgIHZhciBvID0gKHIuZ3JhcGhRTEVycm9ycyB8fCBbXSkubWFwKHJlaHlkcmF0ZUdyYXBoUWxFcnJvcik7XG4gICAgdmFyIGEgPSBmdW5jdGlvbiBnZW5lcmF0ZUVycm9yTWVzc2FnZShlLCByKSB7XG4gICAgICB2YXIgdCA9IFwiXCI7XG4gICAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICAgIHJldHVybiB0ID0gXCJbTmV0d29ya10gXCIgKyBlLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgICBpZiAodm9pZCAwICE9PSByKSB7XG4gICAgICAgIHIuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHQgKz0gXCJbR3JhcGhRTF0gXCIgKyBlLm1lc3NhZ2UgKyBcIlxcblwiO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdC50cmltKCk7XG4gICAgfSh0LCBvKTtcbiAgICBlLmNhbGwodGhpcywgYSk7XG4gICAgdGhpcy5uYW1lID0gXCJDb21iaW5lZEVycm9yXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gYTtcbiAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSBvO1xuICAgIHRoaXMubmV0d29ya0Vycm9yID0gdDtcbiAgICB0aGlzLnJlc3BvbnNlID0gbjtcbiAgfVxuICBpZiAoZSkge1xuICAgIENvbWJpbmVkRXJyb3IuX19wcm90b19fID0gZTtcbiAgfVxuICAoQ29tYmluZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IENvbWJpbmVkRXJyb3I7XG4gIENvbWJpbmVkRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfTtcbiAgcmV0dXJuIENvbWJpbmVkRXJyb3I7XG59KEVycm9yKTtcblxuZnVuY3Rpb24gcGhhc2goZSwgcikge1xuICBlIHw9IDA7XG4gIGZvciAodmFyIHQgPSAwLCBuID0gMCB8IHIubGVuZ3RoOyB0IDwgbjsgdCsrKSB7XG4gICAgZSA9IChlIDw8IDUpICsgZSArIHIuY2hhckNvZGVBdCh0KTtcbiAgfVxuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gaGFzaChlKSB7XG4gIHJldHVybiBwaGFzaCg1MzgxLCBlKSA+Pj4gMDtcbn1cblxudmFyIGkgPSBuZXcgU2V0O1xuXG52YXIgcyA9IG5ldyBXZWFrTWFwO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkoZSkge1xuICBpZiAobnVsbCA9PT0gZSB8fCBpLmhhcyhlKSkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfSBlbHNlIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpIHx8IFwiXCI7XG4gIH0gZWxzZSBpZiAoZS50b0pTT04pIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5KGUudG9KU09OKCkpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICB2YXIgciA9IFwiW1wiO1xuICAgIGZvciAodmFyIHQgPSAwLCBuID0gZS5sZW5ndGg7IHQgPCBuOyB0KyspIHtcbiAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICByICs9IFwiLFwiO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSBzdHJpbmdpZnkoZVt0XSk7XG4gICAgICByICs9IG8ubGVuZ3RoID4gMCA/IG8gOiBcIm51bGxcIjtcbiAgICB9XG4gICAgcmV0dXJuIHIgKz0gXCJdXCI7XG4gIH1cbiAgdmFyIGEgPSBPYmplY3Qua2V5cyhlKS5zb3J0KCk7XG4gIGlmICghYS5sZW5ndGggJiYgZS5jb25zdHJ1Y3RvciAmJiBlLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICB2YXIgZiA9IHMuZ2V0KGUpIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuICAgIHMuc2V0KGUsIGYpO1xuICAgIHJldHVybiAne1wiX19rZXlcIjpcIicgKyBmICsgJ1wifSc7XG4gIH1cbiAgaS5hZGQoZSk7XG4gIHZhciB1ID0gXCJ7XCI7XG4gIGZvciAodmFyIGMgPSAwLCBsID0gYS5sZW5ndGg7IGMgPCBsOyBjKyspIHtcbiAgICB2YXIgaCA9IGFbY107XG4gICAgdmFyIHAgPSBzdHJpbmdpZnkoZVtoXSk7XG4gICAgaWYgKHApIHtcbiAgICAgIGlmICh1Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdSArPSBcIixcIjtcbiAgICAgIH1cbiAgICAgIHUgKz0gc3RyaW5naWZ5KGgpICsgXCI6XCIgKyBwO1xuICAgIH1cbiAgfVxuICBpLmRlbGV0ZShlKTtcbiAgcmV0dXJuIHUgKz0gXCJ9XCI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVZhcmlhYmxlcyhlKSB7XG4gIGkuY2xlYXIoKTtcbiAgcmV0dXJuIHN0cmluZ2lmeShlKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5RG9jdW1lbnQoZSkge1xuICB2YXIgciA9IChcInN0cmluZ1wiICE9IHR5cGVvZiBlID8gZS5sb2MgJiYgZS5sb2Muc291cmNlLmJvZHkgfHwgbihlKSA6IGUpLnJlcGxhY2UoLyhbXFxzLF18I1teXFxuXFxyXSspKy9nLCBcIiBcIikudHJpbSgpO1xuICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkge1xuICAgIHZhciB0ID0gXCJkZWZpbml0aW9uc1wiIGluIGUgJiYgZ2V0T3BlcmF0aW9uTmFtZShlKTtcbiAgICBpZiAodCkge1xuICAgICAgciA9IFwiIyBcIiArIHQgKyBcIlxcblwiICsgcjtcbiAgICB9XG4gICAgaWYgKCFlLmxvYykge1xuICAgICAgZS5sb2MgPSB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHIubGVuZ3RoLFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICBib2R5OiByLFxuICAgICAgICAgIG5hbWU6IFwiZ3FsXCIsXG4gICAgICAgICAgbG9jYXRpb25PZmZzZXQ6IHtcbiAgICAgICAgICAgIGxpbmU6IDEsXG4gICAgICAgICAgICBjb2x1bW46IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufVxuXG52YXIgZiA9IG5ldyBNYXA7XG5cbmZ1bmN0aW9uIGtleURvY3VtZW50KGUpIHtcbiAgdmFyIHI7XG4gIHZhciBuO1xuICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xuICAgIHIgPSBoYXNoKHN0cmluZ2lmeURvY3VtZW50KGUpKTtcbiAgICBuID0gZi5nZXQocikgfHwgdChlLCB7XG4gICAgICBub0xvY2F0aW9uOiAhMFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHIgPSBlLl9fa2V5IHx8IGhhc2goc3RyaW5naWZ5RG9jdW1lbnQoZSkpO1xuICAgIG4gPSBmLmdldChyKSB8fCBlO1xuICB9XG4gIGlmICghbi5sb2MpIHtcbiAgICBzdHJpbmdpZnlEb2N1bWVudChuKTtcbiAgfVxuICBuLl9fa2V5ID0gcjtcbiAgZi5zZXQociwgbik7XG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KGUsIHIpIHtcbiAgaWYgKCFyKSB7XG4gICAgciA9IHt9O1xuICB9XG4gIHZhciB0ID0ga2V5RG9jdW1lbnQoZSk7XG4gIHJldHVybiB7XG4gICAga2V5OiBwaGFzaCh0Ll9fa2V5LCBzdHJpbmdpZnlWYXJpYWJsZXMocikpID4+PiAwLFxuICAgIHF1ZXJ5OiB0LFxuICAgIHZhcmlhYmxlczogclxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGUpIHtcbiAgZm9yICh2YXIgdCA9IDAsIG4gPSBlLmRlZmluaXRpb25zLmxlbmd0aDsgdCA8IG47IHQrKykge1xuICAgIHZhciBvID0gZS5kZWZpbml0aW9uc1t0XTtcbiAgICBpZiAoby5raW5kID09PSByLk9QRVJBVElPTl9ERUZJTklUSU9OICYmIG8ubmFtZSkge1xuICAgICAgcmV0dXJuIG8ubmFtZS52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uVHlwZShlKSB7XG4gIGZvciAodmFyIHQgPSAwLCBuID0gZS5kZWZpbml0aW9ucy5sZW5ndGg7IHQgPCBuOyB0KyspIHtcbiAgICB2YXIgbyA9IGUuZGVmaW5pdGlvbnNbdF07XG4gICAgaWYgKG8ua2luZCA9PT0gci5PUEVSQVRJT05fREVGSU5JVElPTikge1xuICAgICAgcmV0dXJuIG8ub3BlcmF0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIChfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24oZSkge1xuICAgIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tyXTtcbiAgICAgIGZvciAodmFyIG4gaW4gdCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG4pKSB7XG4gICAgICAgICAgZVtuXSA9IHRbbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXN1bHQoZSwgciwgdCkge1xuICBpZiAoIShcImRhdGFcIiBpbiByKSAmJiAhKFwiZXJyb3JzXCIgaW4gcikgfHwgXCJwYXRoXCIgaW4gcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIENvbnRlbnRcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcGVyYXRpb246IGUsXG4gICAgZGF0YTogci5kYXRhLFxuICAgIGVycm9yOiBBcnJheS5pc0FycmF5KHIuZXJyb3JzKSA/IG5ldyBhKHtcbiAgICAgIGdyYXBoUUxFcnJvcnM6IHIuZXJyb3JzLFxuICAgICAgcmVzcG9uc2U6IHRcbiAgICB9KSA6IHZvaWQgMCxcbiAgICBleHRlbnNpb25zOiBcIm9iamVjdFwiID09IHR5cGVvZiByLmV4dGVuc2lvbnMgJiYgci5leHRlbnNpb25zIHx8IHZvaWQgMCxcbiAgICBoYXNOZXh0OiAhIXIuaGFzTmV4dFxuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZVJlc3VsdFBhdGNoKGUsIHIsIHQpIHtcbiAgdmFyIG4gPSBfZXh0ZW5kcyh7fSwgZSk7XG4gIG4uaGFzTmV4dCA9ICEhci5oYXNOZXh0O1xuICBpZiAoIShcInBhdGhcIiBpbiByKSkge1xuICAgIGlmIChcImRhdGFcIiBpbiByKSB7XG4gICAgICBuLmRhdGEgPSByLmRhdGE7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHIuZXJyb3JzKSkge1xuICAgIG4uZXJyb3IgPSBuZXcgYSh7XG4gICAgICBncmFwaFFMRXJyb3JzOiBuLmVycm9yID8gbi5lcnJvci5ncmFwaFFMRXJyb3JzLmNvbmNhdChyLmVycm9ycykgOiByLmVycm9ycyxcbiAgICAgIHJlc3BvbnNlOiB0XG4gICAgfSk7XG4gIH1cbiAgdmFyIG8gPSBuLmRhdGEgPSBfZXh0ZW5kcyh7fSwgbi5kYXRhKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcztcbiAgd2hpbGUgKGkgPCByLnBhdGgubGVuZ3RoKSB7XG4gICAgbyA9IG9bcyA9IHIucGF0aFtpKytdXSA9IEFycmF5LmlzQXJyYXkob1tzXSkgPyBbXS5jb25jYXQob1tzXSkgOiBfZXh0ZW5kcyh7fSwgb1tzXSk7XG4gIH1cbiAgX2V4dGVuZHMobywgci5kYXRhKTtcbiAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIG1ha2VFcnJvclJlc3VsdChlLCByLCB0KSB7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uOiBlLFxuICAgIGRhdGE6IHZvaWQgMCxcbiAgICBlcnJvcjogbmV3IGEoe1xuICAgICAgbmV0d29ya0Vycm9yOiByLFxuICAgICAgcmVzcG9uc2U6IHRcbiAgICB9KSxcbiAgICBleHRlbnNpb25zOiB2b2lkIDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlR2V0KGUpIHtcbiAgcmV0dXJuIFwicXVlcnlcIiA9PT0gZS5raW5kICYmICEhZS5jb250ZXh0LnByZWZlckdldE1ldGhvZDtcbn1cblxuZnVuY3Rpb24gbWFrZUZldGNoQm9keShlKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IG4oZS5xdWVyeSksXG4gICAgb3BlcmF0aW9uTmFtZTogZ2V0T3BlcmF0aW9uTmFtZShlLnF1ZXJ5KSxcbiAgICB2YXJpYWJsZXM6IGUudmFyaWFibGVzIHx8IHZvaWQgMCxcbiAgICBleHRlbnNpb25zOiB2b2lkIDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUZldGNoVVJMKGUsIHIpIHtcbiAgdmFyIHQgPSBzaG91bGRVc2VHZXQoZSk7XG4gIHZhciBuID0gZS5jb250ZXh0LnVybDtcbiAgaWYgKCF0IHx8ICFyKSB7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgdmFyIG8gPSBbXTtcbiAgaWYgKHIub3BlcmF0aW9uTmFtZSkge1xuICAgIG8ucHVzaChcIm9wZXJhdGlvbk5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoci5vcGVyYXRpb25OYW1lKSk7XG4gIH1cbiAgaWYgKHIucXVlcnkpIHtcbiAgICBvLnB1c2goXCJxdWVyeT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChyLnF1ZXJ5LnJlcGxhY2UoLyNbXlxcblxccl0rL2csIFwiIFwiKS50cmltKCkpKTtcbiAgfVxuICBpZiAoci52YXJpYWJsZXMpIHtcbiAgICBvLnB1c2goXCJ2YXJpYWJsZXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5VmFyaWFibGVzKHIudmFyaWFibGVzKSkpO1xuICB9XG4gIGlmIChyLmV4dGVuc2lvbnMpIHtcbiAgICBvLnB1c2goXCJleHRlbnNpb25zPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVZhcmlhYmxlcyhyLmV4dGVuc2lvbnMpKSk7XG4gIH1cbiAgcmV0dXJuIG4gKyBcIj9cIiArIG8uam9pbihcIiZcIik7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaE9wdGlvbnMoZSwgcikge1xuICB2YXIgdCA9IHNob3VsZFVzZUdldChlKTtcbiAgdmFyIG4gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY29udGV4dC5mZXRjaE9wdGlvbnMgPyBlLmNvbnRleHQuZmV0Y2hPcHRpb25zKCkgOiBlLmNvbnRleHQuZmV0Y2hPcHRpb25zIHx8IHt9O1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG4sIHtcbiAgICBib2R5OiAhdCAmJiByID8gSlNPTi5zdHJpbmdpZnkocikgOiB2b2lkIDAsXG4gICAgbWV0aG9kOiB0ID8gXCJHRVRcIiA6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHQgPyBuLmhlYWRlcnMgOiBfZXh0ZW5kcyh7fSwge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LCBuLmhlYWRlcnMpXG4gIH0pO1xufVxuXG52YXIgdSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbC5hc3luY0l0ZXJhdG9yIDogbnVsbDtcblxudmFyIGMgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBUZXh0RGVjb2RlciA/IG5ldyBUZXh0RGVjb2RlciA6IG51bGw7XG5cbnZhciBsID0gL2NvbnRlbnQtdHlwZTpbXlxcclxcbl0qYXBwbGljYXRpb25cXC9qc29uL2k7XG5cbnZhciBoID0gL2JvdW5kYXJ5PVwiPyhbXj1cIjtdKylcIj8vaTtcblxuZnVuY3Rpb24gZXhlY3V0ZUluY3JlbWVudGFsRmV0Y2goZSwgciwgdCkge1xuICB2YXIgbiA9IHQuaGVhZGVycyAmJiB0LmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpIHx8IFwiXCI7XG4gIGlmICghL211bHRpcGFydFxcL21peGVkL2kudGVzdChuKSkge1xuICAgIHJldHVybiB0Lmpzb24oKS50aGVuKChmdW5jdGlvbihuKSB7XG4gICAgICBlKG1ha2VSZXN1bHQociwgbiwgdCkpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgbyA9IFwiLS0tXCI7XG4gIHZhciBhID0gbi5tYXRjaChoKTtcbiAgaWYgKGEpIHtcbiAgICBvID0gXCItLVwiICsgYVsxXTtcbiAgfVxuICB2YXIgaTtcbiAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uKCkge307XG4gIGlmICh1ICYmIHRbdV0pIHtcbiAgICB2YXIgcyA9IHRbdV0oKTtcbiAgICBpID0gcy5uZXh0LmJpbmQocyk7XG4gIH0gZWxzZSBpZiAoXCJib2R5XCIgaW4gdCAmJiB0LmJvZHkpIHtcbiAgICB2YXIgZiA9IHQuYm9keS5nZXRSZWFkZXIoKTtcbiAgICBjYW5jZWwgPSBmLmNhbmNlbC5iaW5kKGYpO1xuICAgIGkgPSBmLnJlYWQuYmluZChmKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3RyZWFtaW5nIHJlcXVlc3RzIHVuc3VwcG9ydGVkXCIpO1xuICB9XG4gIHZhciBwID0gXCJcIjtcbiAgdmFyIGQgPSAhMDtcbiAgdmFyIHYgPSBudWxsO1xuICB2YXIgbSA9IG51bGw7XG4gIHJldHVybiBpKCkudGhlbigoZnVuY3Rpb24gbmV4dChuKSB7XG4gICAgaWYgKCFuLmRvbmUpIHtcbiAgICAgIHZhciBhID0gZnVuY3Rpb24gdG9TdHJpbmcoZSkge1xuICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihlKSA/IGUudG9TdHJpbmcoKSA6IGMuZGVjb2RlKGUpO1xuICAgICAgfShuLnZhbHVlKTtcbiAgICAgIHZhciBzID0gYS5pbmRleE9mKG8pO1xuICAgICAgaWYgKHMgPiAtMSkge1xuICAgICAgICBzICs9IHAubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcyA9IHAuaW5kZXhPZihvKTtcbiAgICAgIH1cbiAgICAgIHAgKz0gYTtcbiAgICAgIHdoaWxlIChzID4gLTEpIHtcbiAgICAgICAgdmFyIGYgPSBwLnNsaWNlKDAsIHMpO1xuICAgICAgICB2YXIgdSA9IHAuc2xpY2UocyArIG8ubGVuZ3RoKTtcbiAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICBkID0gITE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGggPSBmLmluZGV4T2YoXCJcXHJcXG5cXHJcXG5cIikgKyA0O1xuICAgICAgICAgIHZhciBnID0gZi5zbGljZSgwLCBoKTtcbiAgICAgICAgICB2YXIgeSA9IGYuc2xpY2UoaCwgZi5sYXN0SW5kZXhPZihcIlxcclxcblwiKSk7XG4gICAgICAgICAgdmFyIHggPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKGwudGVzdChnKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgeCA9IEpTT04ucGFyc2UoeSk7XG4gICAgICAgICAgICAgIHYgPSBtID0gbSA/IG1lcmdlUmVzdWx0UGF0Y2gobSwgeCwgdCkgOiBtYWtlUmVzdWx0KHIsIHgsIHQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFwiLS1cIiA9PT0gdS5zbGljZSgwLCAyKSB8fCB4ICYmICF4Lmhhc05leHQpIHtcbiAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICByZXR1cm4gZShtYWtlUmVzdWx0KHIsIHt9LCB0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcyA9IChwID0gdSkuaW5kZXhPZihvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHYpIHtcbiAgICAgIGUodik7XG4gICAgICB2ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFuLmRvbmUgJiYgKCFtIHx8IG0uaGFzTmV4dCkpIHtcbiAgICAgIHJldHVybiBpKCkudGhlbihuZXh0KTtcbiAgICB9XG4gIH0pKS5maW5hbGx5KGNhbmNlbCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaFNvdXJjZShlLCByLCB0KSB7XG4gIHZhciBuID0gXCJtYW51YWxcIiA9PT0gdC5yZWRpcmVjdCA/IDQwMCA6IDMwMDtcbiAgdmFyIGEgPSBlLmNvbnRleHQuZmV0Y2g7XG4gIHJldHVybiBvKChmdW5jdGlvbihvKSB7XG4gICAgdmFyIGkgPSBvLm5leHQ7XG4gICAgdmFyIHMgPSBvLmNvbXBsZXRlO1xuICAgIHZhciBmID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgQWJvcnRDb250cm9sbGVyID8gbmV3IEFib3J0Q29udHJvbGxlciA6IG51bGw7XG4gICAgaWYgKGYpIHtcbiAgICAgIHQuc2lnbmFsID0gZi5zaWduYWw7XG4gICAgfVxuICAgIHZhciB1ID0gITE7XG4gICAgdmFyIGMgPSAhMTtcbiAgICB2YXIgbDtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh1KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoYSB8fCBmZXRjaCkociwgdCk7XG4gICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHIpIHtcbiAgICAgIGlmICghcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjID0gKGwgPSByKS5zdGF0dXMgPCAyMDAgfHwgbC5zdGF0dXMgPj0gbjtcbiAgICAgIHJldHVybiBleGVjdXRlSW5jcmVtZW50YWxGZXRjaChpLCBlLCBsKTtcbiAgICB9KSkudGhlbihzKS5jYXRjaCgoZnVuY3Rpb24ocikge1xuICAgICAgaWYgKFwiQWJvcnRFcnJvclwiICE9PSByLm5hbWUpIHtcbiAgICAgICAgdmFyIHQgPSBtYWtlRXJyb3JSZXN1bHQoZSwgYyA/IG5ldyBFcnJvcihsLnN0YXR1c1RleHQpIDogciwgbCk7XG4gICAgICAgIGkodCk7XG4gICAgICAgIHMoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdSA9ICEwO1xuICAgICAgaWYgKGYpIHtcbiAgICAgICAgZi5hYm9ydCgpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKTtcbn1cblxuZXhwb3J0IHsgYSBhcyBDLCBfZXh0ZW5kcyBhcyBfLCBtYWtlRXJyb3JSZXN1bHQgYXMgYSwgbWFrZUZldGNoQm9keSBhcyBiLCBtYWtlRmV0Y2hVUkwgYXMgYywgbWFrZUZldGNoT3B0aW9ucyBhcyBkLCBtYWtlRmV0Y2hTb3VyY2UgYXMgZSwgY3JlYXRlUmVxdWVzdCBhcyBmLCBnZXRPcGVyYXRpb25UeXBlIGFzIGcsIHN0cmluZ2lmeVZhcmlhYmxlcyBhcyBoLCBtZXJnZVJlc3VsdFBhdGNoIGFzIGksIGdldE9wZXJhdGlvbk5hbWUgYXMgaiwga2V5RG9jdW1lbnQgYXMgaywgbWFrZVJlc3VsdCBhcyBtLCBzdHJpbmdpZnlEb2N1bWVudCBhcyBzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD0xOGVlMGQ1Yy5tanMubWFwXG4iLCJpbXBvcnQgeyB2aXNpdCBhcyBlIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5tanNcIjtcblxuaW1wb3J0IHsgS2luZCBhcyByIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzXCI7XG5cbmltcG9ydCB7IHByaW50IGFzIG4gfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qc1wiO1xuXG5pbXBvcnQgeyBrIGFzIHQsIF8gYXMgbywgcyBhcyB1LCBDIGFzIGMsIG0gYXMgcywgYSBhcyBwLCBiIGFzIGwsIGMgYXMgZCwgZCBhcyB2LCBlIGFzIHksIGcgYXMgaywgZiBhcyBnIH0gZnJvbSBcIi4vMThlZTBkNWMubWpzXCI7XG5cbmV4cG9ydCB7IEMgYXMgQ29tYmluZWRFcnJvciwgZiBhcyBjcmVhdGVSZXF1ZXN0LCBqIGFzIGdldE9wZXJhdGlvbk5hbWUsIGEgYXMgbWFrZUVycm9yUmVzdWx0LCBtIGFzIG1ha2VSZXN1bHQsIGkgYXMgbWVyZ2VSZXN1bHRQYXRjaCwgaCBhcyBzdHJpbmdpZnlWYXJpYWJsZXMgfSBmcm9tIFwiLi8xOGVlMGQ1Yy5tanNcIjtcblxuaW1wb3J0IHsgdG9Qcm9taXNlIGFzIHgsIHRha2UgYXMgRSwgZmlsdGVyIGFzIE8sIHNoYXJlIGFzIGIsIG1hcCBhcyB3LCB0YXAgYXMgcSwgbWVyZ2UgYXMgTiwgbWVyZ2VNYXAgYXMgRCwgdGFrZVVudGlsIGFzIF8sIG1ha2UgYXMgUywgb25QdXNoIGFzIFIsIG1ha2VTdWJqZWN0IGFzIFQsIHN1YnNjcmliZSBhcyBQLCBvbkVuZCBhcyBNLCBvblN0YXJ0IGFzIEEsIHB1Ymxpc2ggYXMgViwgc3dpdGNoTWFwIGFzIEksIGZyb21WYWx1ZSBhcyBGIH0gZnJvbSBcIndvbmthXCI7XG5cbmZ1bmN0aW9uIGNvbGxlY3RUeXBlcyhlLCByKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICBjb2xsZWN0VHlwZXMoZVtuXSwgcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgbnVsbCAhPT0gZSkge1xuICAgIGZvciAodmFyIHQgaW4gZSkge1xuICAgICAgaWYgKFwiX190eXBlbmFtZVwiID09PSB0ICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGVbdF0pIHtcbiAgICAgICAgcltlW3RdXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0VHlwZXMoZVt0XSwgcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0VHlwZXNGcm9tUmVzcG9uc2UoZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29sbGVjdFR5cGVzKGUsIHt9KSk7XG59XG5cbnZhciBmb3JtYXROb2RlID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5zZWxlY3Rpb25TZXQgJiYgIWUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuc29tZSgoZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBlLmtpbmQgPT09IHIuRklFTEQgJiYgXCJfX3R5cGVuYW1lXCIgPT09IGUubmFtZS52YWx1ZSAmJiAhZS5hbGlhcztcbiAgfSkpKSB7XG4gICAgcmV0dXJuIG8oe30sIGUsIHtcbiAgICAgIHNlbGVjdGlvblNldDogbyh7fSwgZS5zZWxlY3Rpb25TZXQsIHtcbiAgICAgICAgc2VsZWN0aW9uczogZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5jb25jYXQoWyB7XG4gICAgICAgICAga2luZDogci5GSUVMRCxcbiAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBraW5kOiByLk5BTUUsXG4gICAgICAgICAgICB2YWx1ZTogXCJfX3R5cGVuYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gXSlcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBRID0gbmV3IE1hcDtcblxuZnVuY3Rpb24gZm9ybWF0RG9jdW1lbnQocikge1xuICB2YXIgbiA9IHQocik7XG4gIHZhciBhID0gUS5nZXQobi5fX2tleSk7XG4gIGlmICghYSkge1xuICAgIGEgPSBlKG4sIHtcbiAgICAgIEZpZWxkOiBmb3JtYXROb2RlLFxuICAgICAgSW5saW5lRnJhZ21lbnQ6IGZvcm1hdE5vZGVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJfX2tleVwiLCB7XG4gICAgICB2YWx1ZTogbi5fX2tleSxcbiAgICAgIGVudW1lcmFibGU6ICExXG4gICAgfSk7XG4gICAgUS5zZXQobi5fX2tleSwgYSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIG1hc2tUeXBlbmFtZShlKSB7XG4gIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGUpLnJlZHVjZSgoZnVuY3Rpb24ociwgbikge1xuICAgIHZhciB0ID0gZVtuXTtcbiAgICBpZiAoXCJfX3R5cGVuYW1lXCIgPT09IG4pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcIl9fdHlwZW5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgdmFsdWU6IHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgcltuXSA9IHQubWFwKG1hc2tUeXBlbmFtZSk7XG4gICAgfSBlbHNlIGlmICh0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIHQgJiYgXCJfX3R5cGVuYW1lXCIgaW4gdCkge1xuICAgICAgcltuXSA9IG1hc2tUeXBlbmFtZSh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcltuXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9KSwge30pO1xufVxuXG5mdW5jdGlvbiB3aXRoUHJvbWlzZShlKSB7XG4gIGUudG9Qcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHgoRSgxKShPKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gIWUuc3RhbGUgJiYgIWUuaGFzTmV4dDtcbiAgICB9KSkoZSkpKTtcbiAgfTtcbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VPcGVyYXRpb24oZSwgciwgbikge1xuICBpZiAoIW4pIHtcbiAgICBuID0gci5jb250ZXh0O1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiByLmtleSxcbiAgICBxdWVyeTogci5xdWVyeSxcbiAgICB2YXJpYWJsZXM6IHIudmFyaWFibGVzLFxuICAgIGtpbmQ6IGUsXG4gICAgY29udGV4dDogblxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRNZXRhZGF0YShlLCByKSB7XG4gIHJldHVybiBtYWtlT3BlcmF0aW9uKGUua2luZCwgZSwgbyh7fSwgZS5jb250ZXh0LCB7XG4gICAgbWV0YTogbyh7fSwgZS5jb250ZXh0Lm1ldGEsIHIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFwcGx5RGVmaW5pdGlvbnMoZSwgbiwgdCkge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICBpZiAodFthXS5raW5kID09PSByLkZSQUdNRU5UX0RFRklOSVRJT04pIHtcbiAgICAgIHZhciBvID0gdFthXS5uYW1lLnZhbHVlO1xuICAgICAgdmFyIGkgPSB1KHRbYV0pO1xuICAgICAgaWYgKCFlLmhhcyhvKSkge1xuICAgICAgICBlLnNldChvLCBpKTtcbiAgICAgICAgbi5wdXNoKHRbYV0pO1xuICAgICAgfSBlbHNlIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgZS5nZXQobykgIT09IGkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW1dBUk5JTkc6IER1cGxpY2F0ZSBGcmFnbWVudF0gQSBmcmFnbWVudCB3aXRoIG5hbWUgYFwiICsgbyArIFwiYCBhbHJlYWR5IGV4aXN0cyBpbiB0aGlzIGRvY3VtZW50LlxcbldoaWxlIGZyYWdtZW50IG5hbWVzIG1heSBub3QgYmUgdW5pcXVlIGFjcm9zcyB5b3VyIHNvdXJjZSwgZWFjaCBuYW1lIG11c3QgYmUgdW5pcXVlIHBlciBkb2N1bWVudC5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG4ucHVzaCh0W2FdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3FsKCkge1xuICB2YXIgZSA9IGFyZ3VtZW50cztcbiAgdmFyIG4gPSBuZXcgTWFwO1xuICB2YXIgYSA9IFtdO1xuICB2YXIgbyA9IFtdO1xuICB2YXIgaSA9IEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXVswXSA6IGFyZ3VtZW50c1swXSB8fCBcIlwiO1xuICBmb3IgKHZhciB1ID0gMTsgdSA8IGFyZ3VtZW50cy5sZW5ndGg7IHUrKykge1xuICAgIHZhciBjID0gZVt1XTtcbiAgICBpZiAoYyAmJiBjLmRlZmluaXRpb25zKSB7XG4gICAgICBvLnB1c2guYXBwbHkobywgYy5kZWZpbml0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgKz0gYztcbiAgICB9XG4gICAgaSArPSBlWzBdW3VdO1xuICB9XG4gIGFwcGx5RGVmaW5pdGlvbnMobiwgYSwgdChpKS5kZWZpbml0aW9ucyk7XG4gIGFwcGx5RGVmaW5pdGlvbnMobiwgYSwgbyk7XG4gIHJldHVybiB0KHtcbiAgICBraW5kOiByLkRPQ1VNRU5ULFxuICAgIGRlZmluaXRpb25zOiBhXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTa2lwKGUpIHtcbiAgdmFyIHIgPSBlLmtpbmQ7XG4gIHJldHVybiBcIm11dGF0aW9uXCIgIT09IHIgJiYgXCJxdWVyeVwiICE9PSByO1xufVxuXG5mdW5jdGlvbiBjYWNoZUV4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLmZvcndhcmQ7XG4gIHZhciBuID0gZS5jbGllbnQ7XG4gIHZhciB0ID0gZS5kaXNwYXRjaERlYnVnO1xuICB2YXIgYSA9IG5ldyBNYXA7XG4gIHZhciBpID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gbWFwVHlwZU5hbWVzKGUpIHtcbiAgICB2YXIgciA9IG1ha2VPcGVyYXRpb24oZS5raW5kLCBlKTtcbiAgICByLnF1ZXJ5ID0gZm9ybWF0RG9jdW1lbnQoZS5xdWVyeSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gaXNPcGVyYXRpb25DYWNoZWQoZSkge1xuICAgIHZhciByID0gZS5jb250ZXh0LnJlcXVlc3RQb2xpY3k7XG4gICAgcmV0dXJuIFwicXVlcnlcIiA9PT0gZS5raW5kICYmIFwibmV0d29yay1vbmx5XCIgIT09IHIgJiYgKFwiY2FjaGUtb25seVwiID09PSByIHx8IGEuaGFzKGUua2V5KSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdSA9IGIoZSk7XG4gICAgdmFyIGMgPSB3KChmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgciA9IGEuZ2V0KGUua2V5KTtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB0KG8oe30sIHtcbiAgICAgICAgb3BlcmF0aW9uOiBlXG4gICAgICB9LCByID8ge1xuICAgICAgICB0eXBlOiBcImNhY2hlSGl0XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVGhlIHJlc3VsdCB3YXMgc3VjY2Vzc2Z1bGx5IHJldHJpZWQgZnJvbSB0aGUgY2FjaGVcIlxuICAgICAgfSA6IHtcbiAgICAgICAgdHlwZTogXCJjYWNoZU1pc3NcIixcbiAgICAgICAgbWVzc2FnZTogXCJUaGUgcmVzdWx0IGNvdWxkIG5vdCBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgY2FjaGVcIlxuICAgICAgfSkpO1xuICAgICAgdmFyIGkgPSBvKHt9LCByLCB7XG4gICAgICAgIG9wZXJhdGlvbjogYWRkTWV0YWRhdGEoZSwge1xuICAgICAgICAgIGNhY2hlT3V0Y29tZTogciA/IFwiaGl0XCIgOiBcIm1pc3NcIlxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICBpZiAoXCJjYWNoZS1hbmQtbmV0d29ya1wiID09PSBlLmNvbnRleHQucmVxdWVzdFBvbGljeSkge1xuICAgICAgICBpLnN0YWxlID0gITA7XG4gICAgICAgIHJlZXhlY3V0ZU9wZXJhdGlvbihuLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0pKShPKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gIXNob3VsZFNraXAoZSkgJiYgaXNPcGVyYXRpb25DYWNoZWQoZSk7XG4gICAgfSkpKHUpKTtcbiAgICB2YXIgcyA9IHEoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciByID0gZS5vcGVyYXRpb247XG4gICAgICBpZiAoIXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSBjb2xsZWN0VHlwZXNGcm9tUmVzcG9uc2UoZS5kYXRhKS5jb25jYXQoci5jb250ZXh0LmFkZGl0aW9uYWxUeXBlbmFtZXMgfHwgW10pO1xuICAgICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5vcGVyYXRpb24ua2luZCkge1xuICAgICAgICB2YXIgdSA9IG5ldyBTZXQ7XG4gICAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB0KHtcbiAgICAgICAgICB0eXBlOiBcImNhY2hlSW52YWxpZGF0aW9uXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJUaGUgZm9sbG93aW5nIHR5cGVuYW1lcyBoYXZlIGJlZW4gaW52YWxpZGF0ZWQ6IFwiICsgbyxcbiAgICAgICAgICBvcGVyYXRpb246IHIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZW5hbWVzOiBvLFxuICAgICAgICAgICAgcmVzcG9uc2U6IGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvdXJjZTogXCJjYWNoZUV4Y2hhbmdlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgby5sZW5ndGg7IGMrKykge1xuICAgICAgICAgIHZhciBzID0gb1tjXTtcbiAgICAgICAgICB2YXIgZiA9IGlbc10gfHwgKGlbc10gPSBuZXcgU2V0KTtcbiAgICAgICAgICBmLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHUuYWRkKGUpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBmLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGEuaGFzKGUpKSB7XG4gICAgICAgICAgICByID0gYS5nZXQoZSkub3BlcmF0aW9uO1xuICAgICAgICAgICAgYS5kZWxldGUoZSk7XG4gICAgICAgICAgICByZWV4ZWN1dGVPcGVyYXRpb24obiwgcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKFwicXVlcnlcIiA9PT0gci5raW5kICYmIGUuZGF0YSkge1xuICAgICAgICBhLnNldChyLmtleSwgZSk7XG4gICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgby5sZW5ndGg7IHArKykge1xuICAgICAgICAgIHZhciBsID0gb1twXTtcbiAgICAgICAgICAoaVtsXSB8fCAoaVtsXSA9IG5ldyBTZXQpKS5hZGQoci5rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpKHIoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFwicXVlcnlcIiAhPT0gZS5raW5kIHx8IFwiY2FjaGUtb25seVwiICE9PSBlLmNvbnRleHQucmVxdWVzdFBvbGljeTtcbiAgICB9KSkodygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGFkZE1ldGFkYXRhKGUsIHtcbiAgICAgICAgY2FjaGVPdXRjb21lOiBcIm1pc3NcIlxuICAgICAgfSk7XG4gICAgfSkpKE4oWyB3KG1hcFR5cGVOYW1lcykoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuICFzaG91bGRTa2lwKGUpICYmICFpc09wZXJhdGlvbkNhY2hlZChlKTtcbiAgICB9KSkodSkpLCBPKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gc2hvdWxkU2tpcChlKTtcbiAgICB9KSkodSkgXSkpKSkpO1xuICAgIHJldHVybiBOKFsgYywgcyBdKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVleGVjdXRlT3BlcmF0aW9uKGUsIHIpIHtcbiAgcmV0dXJuIGUucmVleGVjdXRlT3BlcmF0aW9uKG1ha2VPcGVyYXRpb24oci5raW5kLCByLCBvKHt9LCByLmNvbnRleHQsIHtcbiAgICByZXF1ZXN0UG9saWN5OiBcIm5ldHdvcmstb25seVwiXG4gIH0pKSk7XG59XG5cbnZhciBHID0gbmV3IFNldDtcblxuZnVuY3Rpb24gc3NyRXhjaGFuZ2UoZSkge1xuICB2YXIgciA9ICEoIWUgfHwgIWUuc3RhbGVXaGlsZVJldmFsaWRhdGUpO1xuICB2YXIgbiA9ICEoIWUgfHwgIWUuaW5jbHVkZUV4dGVuc2lvbnMpO1xuICB2YXIgdCA9IHt9O1xuICB2YXIgYSA9IFtdO1xuICBmdW5jdGlvbiBpbnZhbGlkYXRlKGUpIHtcbiAgICBhLnB1c2goZS5vcGVyYXRpb24ua2V5KTtcbiAgICBpZiAoMSA9PT0gYS5sZW5ndGgpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgd2hpbGUgKGUgPSBhLnNoaWZ0KCkpIHtcbiAgICAgICAgICB0W2VdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICB2YXIgc3NyID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBvID0gYS5jbGllbnQ7XG4gICAgdmFyIGkgPSBhLmZvcndhcmQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICAgIHZhciB1ID0gZSAmJiBcImJvb2xlYW5cIiA9PSB0eXBlb2YgZS5pc0NsaWVudCA/ICEhZS5pc0NsaWVudCA6ICFvLnN1c3BlbnNlO1xuICAgICAgdmFyIHMgPSBiKGEpO1xuICAgICAgdmFyIGYgPSBpKE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuICF0W2Uua2V5XSB8fCAhIXRbZS5rZXldLmhhc05leHQ7XG4gICAgICB9KSkocykpO1xuICAgICAgdmFyIHAgPSB3KChmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gZGVzZXJpYWxpemVSZXN1bHQoZSwgciwgbikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgICAgICBkYXRhOiByLmRhdGEgPyBKU09OLnBhcnNlKHIuZGF0YSkgOiB2b2lkIDAsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBuICYmIHIuZXh0ZW5zaW9ucyA/IEpTT04ucGFyc2Uoci5leHRlbnNpb25zKSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiByLmVycm9yID8gbmV3IGMoe1xuICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IHIuZXJyb3IubmV0d29ya0Vycm9yID8gbmV3IEVycm9yKHIuZXJyb3IubmV0d29ya0Vycm9yKSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogci5lcnJvci5ncmFwaFFMRXJyb3JzXG4gICAgICAgICAgICB9KSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGhhc05leHQ6IHIuaGFzTmV4dFxuICAgICAgICAgIH07XG4gICAgICAgIH0oZSwgdFtlLmtleV0sIG4pO1xuICAgICAgICBpZiAociAmJiAhRy5oYXMoZS5rZXkpKSB7XG4gICAgICAgICAgYS5zdGFsZSA9ICEwO1xuICAgICAgICAgIEcuYWRkKGUua2V5KTtcbiAgICAgICAgICByZWV4ZWN1dGVPcGVyYXRpb24obywgZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KSkoTygoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gISF0W2Uua2V5XTtcbiAgICAgIH0pKShzKSk7XG4gICAgICBpZiAoIXUpIHtcbiAgICAgICAgZiA9IHEoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB2YXIgciA9IGUub3BlcmF0aW9uO1xuICAgICAgICAgIGlmIChcIm11dGF0aW9uXCIgIT09IHIua2luZCkge1xuICAgICAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiBzZXJpYWxpemVSZXN1bHQoZSwgcikge1xuICAgICAgICAgICAgICB2YXIgbiA9IGUuaGFzTmV4dDtcbiAgICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGE7XG4gICAgICAgICAgICAgIHZhciBhID0gZS5leHRlbnNpb25zO1xuICAgICAgICAgICAgICB2YXIgbyA9IGUuZXJyb3I7XG4gICAgICAgICAgICAgIHZhciBpID0ge307XG4gICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHtcbiAgICAgICAgICAgICAgICBpLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAociAmJiB2b2lkIDAgIT09IGEpIHtcbiAgICAgICAgICAgICAgICBpLmV4dGVuc2lvbnMgPSBKU09OLnN0cmluZ2lmeShhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIGkuaGFzTmV4dCA9ICEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgaS5lcnJvciA9IHtcbiAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IG8uZ3JhcGhRTEVycm9ycy5tYXAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnBhdGggJiYgIWUuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IGUuZXh0ZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoby5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGkuZXJyb3IubmV0d29ya0Vycm9yID0gXCJcIiArIG8ubmV0d29ya0Vycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0oZSwgbik7XG4gICAgICAgICAgICB0W3Iua2V5XSA9IGE7XG4gICAgICAgICAgfVxuICAgICAgICB9KSkoZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwID0gcShpbnZhbGlkYXRlKShwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBOKFsgZiwgcCBdKTtcbiAgICB9O1xuICB9O1xuICBzc3IucmVzdG9yZURhdGEgPSBmdW5jdGlvbihlKSB7XG4gICAgZm9yICh2YXIgciBpbiBlKSB7XG4gICAgICBpZiAobnVsbCAhPT0gdFtyXSkge1xuICAgICAgICB0W3JdID0gZVtyXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNzci5leHRyYWN0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0ge307XG4gICAgZm9yICh2YXIgciBpbiB0KSB7XG4gICAgICBpZiAobnVsbCAhPSB0W3JdKSB7XG4gICAgICAgIGVbcl0gPSB0W3JdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfTtcbiAgaWYgKGUgJiYgZS5pbml0aWFsU3RhdGUpIHtcbiAgICBzc3IucmVzdG9yZURhdGEoZS5pbml0aWFsU3RhdGUpO1xuICB9XG4gIHJldHVybiBzc3I7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmlwdGlvbkV4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLmZvcndhcmRTdWJzY3JpcHRpb247XG4gIHZhciB0ID0gZS5lbmFibGVBbGxPcGVyYXRpb25zO1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHZhciBhID0gZS5jbGllbnQ7XG4gICAgdmFyIGkgPSBlLmZvcndhcmQ7XG4gICAgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb25PcGVyYXRpb24oZSkge1xuICAgICAgdmFyIHIgPSBlLmtpbmQ7XG4gICAgICByZXR1cm4gXCJzdWJzY3JpcHRpb25cIiA9PT0gciB8fCAhIXQgJiYgKFwicXVlcnlcIiA9PT0gciB8fCBcIm11dGF0aW9uXCIgPT09IHIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSBiKGUpO1xuICAgICAgdmFyIHUgPSBEKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBpID0gZS5rZXk7XG4gICAgICAgIHZhciB1ID0gTygoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGUua2luZCAmJiBlLmtleSA9PT0gaTtcbiAgICAgICAgfSkpKHQpO1xuICAgICAgICByZXR1cm4gXyh1KShmdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb25Tb3VyY2UoZSkge1xuICAgICAgICAgIHZhciB0ID0gcih7XG4gICAgICAgICAgICBrZXk6IGUua2V5LnRvU3RyaW5nKDM2KSxcbiAgICAgICAgICAgIHF1ZXJ5OiBuKGUucXVlcnkpLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBlLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IG8oe30sIGUuY29udGV4dClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gUygoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgdmFyIG4gPSByLm5leHQ7XG4gICAgICAgICAgICB2YXIgbyA9IHIuY29tcGxldGU7XG4gICAgICAgICAgICB2YXIgaSA9ICExO1xuICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdSA9IHQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbihzKGUsIHIpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbihwKGUsIHIpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghaSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInN1YnNjcmlwdGlvblwiID09PSBlLmtpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhLnJlZXhlY3V0ZU9wZXJhdGlvbihtYWtlT3BlcmF0aW9uKFwidGVhcmRvd25cIiwgZSwgZS5jb250ZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGkgPSAhMDtcbiAgICAgICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgICAgICB1LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KGUpKTtcbiAgICAgIH0pKShPKGlzU3Vic2NyaXB0aW9uT3BlcmF0aW9uKSh0KSk7XG4gICAgICB2YXIgYyA9IGkoTygoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gIWlzU3Vic2NyaXB0aW9uT3BlcmF0aW9uKGUpO1xuICAgICAgfSkpKHQpKTtcbiAgICAgIHJldHVybiBOKFsgdSwgYyBdKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0V4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLmZvcndhcmQ7XG4gIGlmIChcInByb2R1Y3Rpb25cIiA9PT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHIoZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHEoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiW0V4Y2hhbmdlIGRlYnVnXTogQ29tcGxldGVkIG9wZXJhdGlvbjogXCIsIGUpO1xuICAgICAgfSkpKHIocSgoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJbRXhjaGFuZ2UgZGVidWddOiBJbmNvbWluZyBvcGVyYXRpb246IFwiLCBlKTtcbiAgICAgIH0pKShlKSkpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVkdXBFeGNoYW5nZShlKSB7XG4gIHZhciByID0gZS5mb3J3YXJkO1xuICB2YXIgbiA9IGUuZGlzcGF0Y2hEZWJ1ZztcbiAgdmFyIHQgPSBuZXcgU2V0O1xuICBmdW5jdGlvbiBmaWx0ZXJJbmNvbWluZ09wZXJhdGlvbihlKSB7XG4gICAgdmFyIHIgPSBlLmtleTtcbiAgICB2YXIgYSA9IGUua2luZDtcbiAgICBpZiAoXCJ0ZWFyZG93blwiID09PSBhKSB7XG4gICAgICB0LmRlbGV0ZShyKTtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gICAgaWYgKFwicXVlcnlcIiAhPT0gYSAmJiBcInN1YnNjcmlwdGlvblwiICE9PSBhKSB7XG4gICAgICByZXR1cm4gITA7XG4gICAgfVxuICAgIHZhciBvID0gdC5oYXMocik7XG4gICAgdC5hZGQocik7XG4gICAgaWYgKG8pIHtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBuKHtcbiAgICAgICAgdHlwZTogXCJkZWR1cFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkFuIG9wZXJhdGlvbiBoYXMgYmVlbiBkZWR1cGVkLlwiLFxuICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgIHNvdXJjZTogXCJkZWR1cEV4Y2hhbmdlXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gIW87XG4gIH1cbiAgZnVuY3Rpb24gYWZ0ZXJPcGVyYXRpb25SZXN1bHQoZSkge1xuICAgIGlmICghZS5oYXNOZXh0KSB7XG4gICAgICB0LmRlbGV0ZShlLm9wZXJhdGlvbi5rZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHZhciBuID0gTyhmaWx0ZXJJbmNvbWluZ09wZXJhdGlvbikoZSk7XG4gICAgcmV0dXJuIHEoYWZ0ZXJPcGVyYXRpb25SZXN1bHQpKHIobikpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmZXRjaEV4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLmZvcndhcmQ7XG4gIHZhciBuID0gZS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gYihlKTtcbiAgICB2YXIgYSA9IEQoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciByID0gZS5rZXk7XG4gICAgICB2YXIgYSA9IE8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFwidGVhcmRvd25cIiA9PT0gZS5raW5kICYmIGUua2V5ID09PSByO1xuICAgICAgfSkpKHQpO1xuICAgICAgdmFyIG8gPSBsKGUpO1xuICAgICAgdmFyIGkgPSBkKGUsIG8pO1xuICAgICAgdmFyIHUgPSB2KGUsIG8pO1xuICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIG4oe1xuICAgICAgICB0eXBlOiBcImZldGNoUmVxdWVzdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkEgZmV0Y2ggcmVxdWVzdCBpcyBiZWluZyBleGVjdXRlZC5cIixcbiAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiBpLFxuICAgICAgICAgIGZldGNoT3B0aW9uczogdVxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IFwiZmV0Y2hFeGNoYW5nZVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSKChmdW5jdGlvbihyKSB7XG4gICAgICAgIHZhciB0ID0gIXIuZGF0YSA/IHIuZXJyb3IgOiB2b2lkIDA7XG4gICAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBuKHtcbiAgICAgICAgICB0eXBlOiB0ID8gXCJmZXRjaEVycm9yXCIgOiBcImZldGNoU3VjY2Vzc1wiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiQSBcIiArICh0ID8gXCJmYWlsZWRcIiA6IFwic3VjY2Vzc2Z1bFwiKSArIFwiIGZldGNoIHJlc3BvbnNlIGhhcyBiZWVuIHJldHVybmVkLlwiLFxuICAgICAgICAgIG9wZXJhdGlvbjogZSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1cmw6IGksXG4gICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHUsXG4gICAgICAgICAgICB2YWx1ZTogdCB8fCByXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IFwiZmV0Y2hFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgfSkpKF8oYSkoeShlLCBpLCB1KSkpO1xuICAgIH0pKShPKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gXCJxdWVyeVwiID09PSBlLmtpbmQgfHwgXCJtdXRhdGlvblwiID09PSBlLmtpbmQ7XG4gICAgfSkpKHQpKTtcbiAgICB2YXIgbyA9IHIoTygoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFwicXVlcnlcIiAhPT0gZS5raW5kICYmIFwibXV0YXRpb25cIiAhPT0gZS5raW5kO1xuICAgIH0pKSh0KSk7XG4gICAgcmV0dXJuIE4oWyBhLCBvIF0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWxsYmFja0V4Y2hhbmdlKGUpIHtcbiAgdmFyIHIgPSBlLmRpc3BhdGNoRGVidWc7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIE8oKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICExO1xuICAgIH0pKShxKChmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoXCJ0ZWFyZG93blwiICE9PSBlLmtpbmQgJiYgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHZhciBuID0gJ05vIGV4Y2hhbmdlIGhhcyBoYW5kbGVkIG9wZXJhdGlvbnMgb2Yga2luZCBcIicgKyBlLmtpbmQgKyBcIlxcXCIuIENoZWNrIHdoZXRoZXIgeW91J3ZlIGFkZGVkIGFuIGV4Y2hhbmdlIHJlc3BvbnNpYmxlIGZvciB0aGVzZSBvcGVyYXRpb25zLlwiO1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgcih7XG4gICAgICAgICAgdHlwZTogXCJmYWxsYmFja0NhdGNoXCIsXG4gICAgICAgICAgbWVzc2FnZTogbixcbiAgICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgICAgc291cmNlOiBcImZhbGxiYWNrRXhjaGFuZ2VcIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS53YXJuKG4pO1xuICAgICAgfVxuICAgIH0pKShlKSk7XG4gIH07XG59XG5cbnZhciBMID0gZmFsbGJhY2tFeGNoYW5nZSh7XG4gIGRpc3BhdGNoRGVidWc6IG5vb3Bcbn0pO1xuXG5mdW5jdGlvbiBjb21wb3NlRXhjaGFuZ2VzKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgbiA9IHIuY2xpZW50O1xuICAgIHZhciB0ID0gci5kaXNwYXRjaERlYnVnO1xuICAgIHJldHVybiBlLnJlZHVjZVJpZ2h0KChmdW5jdGlvbihlLCByKSB7XG4gICAgICByZXR1cm4gcih7XG4gICAgICAgIGNsaWVudDogbixcbiAgICAgICAgZm9yd2FyZDogZSxcbiAgICAgICAgZGlzcGF0Y2hEZWJ1ZzogZnVuY3Rpb24gZGlzcGF0Y2hEZWJ1ZyQxKGUpIHtcbiAgICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgdChvKHt9LCB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBzb3VyY2U6IHIubmFtZVxuICAgICAgICAgIH0sIGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSksIHIuZm9yd2FyZCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVycm9yRXhjaGFuZ2UoZSkge1xuICB2YXIgciA9IGUub25FcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbiA9IGUuZm9yd2FyZDtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHEoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIG4gPSBlLmVycm9yO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgIHIobiwgZS5vcGVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KSkobihlKSk7XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIEogPSBbIGRlZHVwRXhjaGFuZ2UsIGNhY2hlRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgXTtcblxudmFyIFcgPSBmdW5jdGlvbiBDbGllbnQoZSkge1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmICFlLnVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgY3JlYXRpbmcgYW4gdXJxbC1jbGllbnQgd2l0aG91dCBhIHVybC5cIik7XG4gIH1cbiAgdmFyIHIgPSBuZXcgTWFwO1xuICB2YXIgbiA9IG5ldyBNYXA7XG4gIHZhciB0ID0gW107XG4gIHZhciBhID0gVCgpO1xuICB2YXIgaSA9IGEuc291cmNlO1xuICB2YXIgdSA9IGEubmV4dDtcbiAgdmFyIGMgPSAhMTtcbiAgZnVuY3Rpb24gZGlzcGF0Y2hPcGVyYXRpb24oZSkge1xuICAgIGMgPSAhMDtcbiAgICBpZiAoZSkge1xuICAgICAgdShlKTtcbiAgICB9XG4gICAgd2hpbGUgKGUgPSB0LnNoaWZ0KCkpIHtcbiAgICAgIHUoZSk7XG4gICAgfVxuICAgIGMgPSAhMTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlUmVzdWx0U291cmNlKGUpIHtcbiAgICB2YXIgYSA9IE8oKGZ1bmN0aW9uKHIpIHtcbiAgICAgIHJldHVybiByLm9wZXJhdGlvbi5raW5kID09PSBlLmtpbmQgJiYgci5vcGVyYXRpb24ua2V5ID09PSBlLmtleTtcbiAgICB9KSkoeSk7XG4gICAgaWYgKGYubWFza1R5cGVuYW1lKSB7XG4gICAgICBhID0gdygoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gbyh7fSwgZSwge1xuICAgICAgICAgIGRhdGE6IG1hc2tUeXBlbmFtZShlLmRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgfSkpKGEpO1xuICAgIH1cbiAgICBpZiAoXCJtdXRhdGlvblwiID09PSBlLmtpbmQpIHtcbiAgICAgIHJldHVybiBFKDEpKEEoKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2hPcGVyYXRpb24oZSk7XG4gICAgICB9KSkoYSkpO1xuICAgIH1cbiAgICByZXR1cm4gYihNKChmdW5jdGlvbigpIHtcbiAgICAgIHIuZGVsZXRlKGUua2V5KTtcbiAgICAgIG4uZGVsZXRlKGUua2V5KTtcbiAgICAgIGZvciAodmFyIGEgPSB0Lmxlbmd0aCAtIDE7IGEgPj0gMDsgYS0tKSB7XG4gICAgICAgIGlmICh0W2FdLmtleSA9PT0gZS5rZXkpIHtcbiAgICAgICAgICB0LnNwbGljZShhLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGF0Y2hPcGVyYXRpb24obWFrZU9wZXJhdGlvbihcInRlYXJkb3duXCIsIGUsIGUuY29udGV4dCkpO1xuICAgIH0pKShSKChmdW5jdGlvbihuKSB7XG4gICAgICByLnNldChlLmtleSwgbik7XG4gICAgfSkpKEkoKGZ1bmN0aW9uKHIpIHtcbiAgICAgIGlmIChcInF1ZXJ5XCIgIT09IGUua2luZCB8fCByLnN0YWxlKSB7XG4gICAgICAgIHJldHVybiBGKHIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE4oWyBGKHIpLCB3KChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG8oe30sIHIsIHtcbiAgICAgICAgICBzdGFsZTogITBcbiAgICAgICAgfSk7XG4gICAgICB9KSkoRSgxKShPKChmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IHIua2luZCAmJiByLmtleSA9PT0gZS5rZXkgJiYgXCJjYWNoZS1vbmx5XCIgIT09IHIuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgICAgfSkpKGkpKSkgXSk7XG4gICAgfSkpKF8oTygoZnVuY3Rpb24ocikge1xuICAgICAgcmV0dXJuIFwidGVhcmRvd25cIiA9PT0gci5raW5kICYmIHIua2V5ID09PSBlLmtleTtcbiAgICB9KSkoaSkpKGEpKSkpKTtcbiAgfVxuICB2YXIgcyA9IHRoaXMgaW5zdGFuY2VvZiBDbGllbnQgPyB0aGlzIDogT2JqZWN0LmNyZWF0ZShDbGllbnQucHJvdG90eXBlKTtcbiAgdmFyIGYgPSBvKHMsIHtcbiAgICB1cmw6IGUudXJsLFxuICAgIGZldGNoT3B0aW9uczogZS5mZXRjaE9wdGlvbnMsXG4gICAgZmV0Y2g6IGUuZmV0Y2gsXG4gICAgc3VzcGVuc2U6ICEhZS5zdXNwZW5zZSxcbiAgICByZXF1ZXN0UG9saWN5OiBlLnJlcXVlc3RQb2xpY3kgfHwgXCJjYWNoZS1maXJzdFwiLFxuICAgIHByZWZlckdldE1ldGhvZDogISFlLnByZWZlckdldE1ldGhvZCxcbiAgICBtYXNrVHlwZW5hbWU6ICEhZS5tYXNrVHlwZW5hbWUsXG4gICAgb3BlcmF0aW9ucyQ6IGksXG4gICAgcmVleGVjdXRlT3BlcmF0aW9uOiBmdW5jdGlvbiByZWV4ZWN1dGVPcGVyYXRpb24oZSkge1xuICAgICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5raW5kIHx8IG4uaGFzKGUua2V5KSkge1xuICAgICAgICB0LnB1c2goZSk7XG4gICAgICAgIGlmICghYykge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZGlzcGF0Y2hPcGVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVPcGVyYXRpb25Db250ZXh0OiBmdW5jdGlvbiBjcmVhdGVPcGVyYXRpb25Db250ZXh0KGUpIHtcbiAgICAgIGlmICghZSkge1xuICAgICAgICBlID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gbyh7fSwge1xuICAgICAgICB1cmw6IGYudXJsLFxuICAgICAgICBmZXRjaE9wdGlvbnM6IGYuZmV0Y2hPcHRpb25zLFxuICAgICAgICBmZXRjaDogZi5mZXRjaCxcbiAgICAgICAgcHJlZmVyR2V0TWV0aG9kOiBmLnByZWZlckdldE1ldGhvZFxuICAgICAgfSwgZSwge1xuICAgICAgICBzdXNwZW5zZTogZS5zdXNwZW5zZSB8fCAhMSAhPT0gZS5zdXNwZW5zZSAmJiBmLnN1c3BlbnNlLFxuICAgICAgICByZXF1ZXN0UG9saWN5OiBlLnJlcXVlc3RQb2xpY3kgfHwgZi5yZXF1ZXN0UG9saWN5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZVJlcXVlc3RPcGVyYXRpb246IGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RPcGVyYXRpb24oZSwgciwgbikge1xuICAgICAgdmFyIHQgPSBrKHIucXVlcnkpO1xuICAgICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBcInRlYXJkb3duXCIgIT09IGUgJiYgdCAhPT0gZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG9wZXJhdGlvbiBvZiB0eXBlIFwiJyArIGUgKyAnXCIgYnV0IGZvdW5kIFwiJyArIHQgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlT3BlcmF0aW9uKGUsIHIsIGYuY3JlYXRlT3BlcmF0aW9uQ29udGV4dChuKSk7XG4gICAgfSxcbiAgICBleGVjdXRlUmVxdWVzdE9wZXJhdGlvbjogZnVuY3Rpb24gZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24oZSkge1xuICAgICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5raW5kKSB7XG4gICAgICAgIHJldHVybiBtYWtlUmVzdWx0U291cmNlKGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFMoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGEgPSBuLmdldChlLmtleSk7XG4gICAgICAgIGlmICghYSkge1xuICAgICAgICAgIG4uc2V0KGUua2V5LCBhID0gbWFrZVJlc3VsdFNvdXJjZShlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBcImNhY2hlLWFuZC1uZXR3b3JrXCIgPT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5IHx8IFwibmV0d29yay1vbmx5XCIgPT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgICAgICByZXR1cm4gUCh0Lm5leHQpKE0odC5jb21wbGV0ZSkoQSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG4gPSByLmdldChlLmtleSk7XG4gICAgICAgICAgaWYgKFwic3Vic2NyaXB0aW9uXCIgPT09IGUua2luZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoT3BlcmF0aW9uKGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hPcGVyYXRpb24oZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudWxsICE9IG4gJiYgbiA9PT0gci5nZXQoZS5rZXkpKSB7XG4gICAgICAgICAgICB0Lm5leHQoaSA/IG8oe30sIG4sIHtcbiAgICAgICAgICAgICAgc3RhbGU6ICEwXG4gICAgICAgICAgICB9KSA6IG4pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoT3BlcmF0aW9uKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpKGEpKSkudW5zdWJzY3JpYmU7XG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBleGVjdXRlUXVlcnk6IGZ1bmN0aW9uIGV4ZWN1dGVRdWVyeShlLCByKSB7XG4gICAgICB2YXIgbiA9IGYuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInF1ZXJ5XCIsIGUsIHIpO1xuICAgICAgcmV0dXJuIGYuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24obik7XG4gICAgfSxcbiAgICBleGVjdXRlU3Vic2NyaXB0aW9uOiBmdW5jdGlvbiBleGVjdXRlU3Vic2NyaXB0aW9uKGUsIHIpIHtcbiAgICAgIHZhciBuID0gZi5jcmVhdGVSZXF1ZXN0T3BlcmF0aW9uKFwic3Vic2NyaXB0aW9uXCIsIGUsIHIpO1xuICAgICAgcmV0dXJuIGYuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24obik7XG4gICAgfSxcbiAgICBleGVjdXRlTXV0YXRpb246IGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbihlLCByKSB7XG4gICAgICB2YXIgbiA9IGYuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcIm11dGF0aW9uXCIsIGUsIHIpO1xuICAgICAgcmV0dXJuIGYuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24obik7XG4gICAgfSxcbiAgICBxdWVyeTogZnVuY3Rpb24gcXVlcnkoZSwgciwgbikge1xuICAgICAgaWYgKCFuIHx8IFwiYm9vbGVhblwiICE9IHR5cGVvZiBuLnN1c3BlbnNlKSB7XG4gICAgICAgIG4gPSBvKHt9LCBuLCB7XG4gICAgICAgICAgc3VzcGVuc2U6ICExXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdpdGhQcm9taXNlKGYuZXhlY3V0ZVF1ZXJ5KGcoZSwgciksIG4pKTtcbiAgICB9LFxuICAgIHJlYWRRdWVyeTogZnVuY3Rpb24gcmVhZFF1ZXJ5KGUsIHIsIG4pIHtcbiAgICAgIHZhciB0ID0gbnVsbDtcbiAgICAgIFAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdCA9IGU7XG4gICAgICB9KSkoZi5xdWVyeShlLCByLCBuKSkudW5zdWJzY3JpYmUoKTtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sXG4gICAgc3Vic2NyaXB0aW9uOiBmdW5jdGlvbiBzdWJzY3JpcHRpb24oZSwgciwgbikge1xuICAgICAgcmV0dXJuIGYuZXhlY3V0ZVN1YnNjcmlwdGlvbihnKGUsIHIpLCBuKTtcbiAgICB9LFxuICAgIG11dGF0aW9uOiBmdW5jdGlvbiBtdXRhdGlvbihlLCByLCBuKSB7XG4gICAgICByZXR1cm4gd2l0aFByb21pc2UoZi5leGVjdXRlTXV0YXRpb24oZyhlLCByKSwgbikpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBwID0gbm9vcDtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIHZhciBsID0gVCgpO1xuICAgIHZhciBkID0gbC5uZXh0O1xuICAgIHZhciBoID0gbC5zb3VyY2U7XG4gICAgZi5zdWJzY3JpYmVUb0RlYnVnVGFyZ2V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFAoZSkoaCk7XG4gICAgfTtcbiAgICBwID0gZDtcbiAgfVxuICB2YXIgdiA9IGNvbXBvc2VFeGNoYW5nZXModm9pZCAwICE9PSBlLmV4Y2hhbmdlcyA/IGUuZXhjaGFuZ2VzIDogSik7XG4gIHZhciB5ID0gYih2KHtcbiAgICBjbGllbnQ6IGYsXG4gICAgZGlzcGF0Y2hEZWJ1ZzogcCxcbiAgICBmb3J3YXJkOiBmYWxsYmFja0V4Y2hhbmdlKHtcbiAgICAgIGRpc3BhdGNoRGVidWc6IHBcbiAgICB9KVxuICB9KShpKSk7XG4gIFYoeSk7XG4gIHJldHVybiBmO1xufTtcblxudmFyIHogPSBXO1xuXG5leHBvcnQgeyBXIGFzIENsaWVudCwgY2FjaGVFeGNoYW5nZSwgY29tcG9zZUV4Y2hhbmdlcywgeiBhcyBjcmVhdGVDbGllbnQsIGRlYnVnRXhjaGFuZ2UsIGRlZHVwRXhjaGFuZ2UsIEogYXMgZGVmYXVsdEV4Y2hhbmdlcywgZXJyb3JFeGNoYW5nZSwgTCBhcyBmYWxsYmFja0V4Y2hhbmdlSU8sIGZldGNoRXhjaGFuZ2UsIGZvcm1hdERvY3VtZW50LCBncWwsIG1ha2VPcGVyYXRpb24sIG1hc2tUeXBlbmFtZSwgc3NyRXhjaGFuZ2UsIHN1YnNjcmlwdGlvbkV4Y2hhbmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cnFsLWNvcmUubWpzLm1hcFxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7IGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHsgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7IF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpOyB9IGZ1bmN0aW9uIFdyYXBwZXIoKSB7IHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7IH07IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTsgfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7IH0gZWxzZSB7IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgdmFyIGEgPSBbbnVsbF07IGEucHVzaC5hcHBseShhLCBhcmdzKTsgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpOyB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTsgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7IHJldHVybiBpbnN0YW5jZTsgfTsgfSByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSBcIi4uL2pzdXRpbHMvaXNPYmplY3RMaWtlLm1qc1wiO1xuaW1wb3J0IHsgU1lNQk9MX1RPX1NUUklOR19UQUcgfSBmcm9tIFwiLi4vcG9seWZpbGxzL3N5bWJvbHMubWpzXCI7XG5pbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gXCIuLi9sYW5ndWFnZS9sb2NhdGlvbi5tanNcIjtcbmltcG9ydCB7IHByaW50TG9jYXRpb24sIHByaW50U291cmNlTG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanNcIjtcbi8qKlxuICogQSBHcmFwaFFMRXJyb3IgZGVzY3JpYmVzIGFuIEVycm9yIGZvdW5kIGR1cmluZyB0aGUgcGFyc2UsIHZhbGlkYXRlLCBvclxuICogZXhlY3V0ZSBwaGFzZXMgb2YgcGVyZm9ybWluZyBhIEdyYXBoUUwgb3BlcmF0aW9uLiBJbiBhZGRpdGlvbiB0byBhIG1lc3NhZ2VcbiAqIGFuZCBzdGFjayB0cmFjZSwgaXQgYWxzbyBpbmNsdWRlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYXRpb25zIGluIGFcbiAqIEdyYXBoUUwgZG9jdW1lbnQgYW5kL29yIGV4ZWN1dGlvbiByZXN1bHQgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBFcnJvci5cbiAqL1xuXG5leHBvcnQgdmFyIEdyYXBoUUxFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhHcmFwaFFMRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHcmFwaFFMRXJyb3IpO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiB7IGxpbmUsIGNvbHVtbiB9IGxvY2F0aW9ucyB3aXRoaW4gdGhlIHNvdXJjZSBHcmFwaFFMIGRvY3VtZW50XG4gICAqIHdoaWNoIGNvcnJlc3BvbmQgdG8gdGhpcyBlcnJvci5cbiAgICpcbiAgICogRXJyb3JzIGR1cmluZyB2YWxpZGF0aW9uIG9mdGVuIGNvbnRhaW4gbXVsdGlwbGUgbG9jYXRpb25zLCBmb3IgZXhhbXBsZSB0b1xuICAgKiBwb2ludCBvdXQgdHdvIHRoaW5ncyB3aXRoIHRoZSBzYW1lIG5hbWUuIEVycm9ycyBkdXJpbmcgZXhlY3V0aW9uIGluY2x1ZGUgYVxuICAgKiBzaW5nbGUgbG9jYXRpb24sIHRoZSBmaWVsZCB3aGljaCBwcm9kdWNlZCB0aGUgZXJyb3IuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IGRlc2NyaWJpbmcgdGhlIEpTT04tcGF0aCBpbnRvIHRoZSBleGVjdXRpb24gcmVzcG9uc2Ugd2hpY2hcbiAgICogY29ycmVzcG9uZHMgdG8gdGhpcyBlcnJvci4gT25seSBpbmNsdWRlZCBmb3IgZXJyb3JzIGR1cmluZyBleGVjdXRpb24uXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIEdyYXBoUUwgQVNUIE5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBlcnJvci5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudCBmb3IgdGhlIGZpcnN0IGxvY2F0aW9uIG9mIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB0aGlzIEVycm9yIHJlcHJlc2VudHMgbW9yZSB0aGFuIG9uZSBub2RlLCB0aGUgc291cmNlIG1heSBub3RcbiAgICogcmVwcmVzZW50IG5vZGVzIGFmdGVyIHRoZSBmaXJzdCBub2RlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgY2hhcmFjdGVyIG9mZnNldHMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgb3JpZ2luYWwgZXJyb3IgdGhyb3duIGZyb20gYSBmaWVsZCByZXNvbHZlciBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKi9cblxuICAvKipcbiAgICogRXh0ZW5zaW9uIGZpZWxkcyB0byBhZGQgdG8gdGhlIGZvcm1hdHRlZCBlcnJvci5cbiAgICovXG4gIGZ1bmN0aW9uIEdyYXBoUUxFcnJvcihtZXNzYWdlLCBub2Rlcywgc291cmNlLCBwb3NpdGlvbnMsIHBhdGgsIG9yaWdpbmFsRXJyb3IsIGV4dGVuc2lvbnMpIHtcbiAgICB2YXIgX25vZGVMb2NhdGlvbnMsIF9ub2RlTG9jYXRpb25zMiwgX25vZGVMb2NhdGlvbnMzO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyYXBoUUxFcnJvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuICAgIF90aGlzLm5hbWUgPSAnR3JhcGhRTEVycm9yJztcbiAgICBfdGhpcy5vcmlnaW5hbEVycm9yID0gb3JpZ2luYWxFcnJvciAhPT0gbnVsbCAmJiBvcmlnaW5hbEVycm9yICE9PSB2b2lkIDAgPyBvcmlnaW5hbEVycm9yIDogdW5kZWZpbmVkOyAvLyBDb21wdXRlIGxpc3Qgb2YgYmxhbWUgbm9kZXMuXG5cbiAgICBfdGhpcy5ub2RlcyA9IHVuZGVmaW5lZElmRW1wdHkoQXJyYXkuaXNBcnJheShub2RlcykgPyBub2RlcyA6IG5vZGVzID8gW25vZGVzXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyIG5vZGVMb2NhdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pMiA9IDAsIF9yZWYzID0gKF90aGlzJG5vZGVzID0gX3RoaXMubm9kZXMpICE9PSBudWxsICYmIF90aGlzJG5vZGVzICE9PSB2b2lkIDAgPyBfdGhpcyRub2RlcyA6IFtdOyBfaTIgPCBfcmVmMy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgX3RoaXMkbm9kZXM7XG5cbiAgICAgIHZhciBfcmVmNCA9IF9yZWYzW19pMl07XG4gICAgICB2YXIgbG9jID0gX3JlZjQubG9jO1xuXG4gICAgICBpZiAobG9jICE9IG51bGwpIHtcbiAgICAgICAgbm9kZUxvY2F0aW9ucy5wdXNoKGxvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZUxvY2F0aW9ucyA9IHVuZGVmaW5lZElmRW1wdHkobm9kZUxvY2F0aW9ucyk7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cbiAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2UgIT09IG51bGwgJiYgc291cmNlICE9PSB2b2lkIDAgPyBzb3VyY2UgOiAoX25vZGVMb2NhdGlvbnMgPSBub2RlTG9jYXRpb25zKSA9PT0gbnVsbCB8fCBfbm9kZUxvY2F0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVMb2NhdGlvbnNbMF0uc291cmNlO1xuICAgIF90aGlzLnBvc2l0aW9ucyA9IHBvc2l0aW9ucyAhPT0gbnVsbCAmJiBwb3NpdGlvbnMgIT09IHZvaWQgMCA/IHBvc2l0aW9ucyA6IChfbm9kZUxvY2F0aW9uczIgPSBub2RlTG9jYXRpb25zKSA9PT0gbnVsbCB8fCBfbm9kZUxvY2F0aW9uczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlTG9jYXRpb25zMi5tYXAoZnVuY3Rpb24gKGxvYykge1xuICAgICAgcmV0dXJuIGxvYy5zdGFydDtcbiAgICB9KTtcbiAgICBfdGhpcy5sb2NhdGlvbnMgPSBwb3NpdGlvbnMgJiYgc291cmNlID8gcG9zaXRpb25zLm1hcChmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgIH0pIDogKF9ub2RlTG9jYXRpb25zMyA9IG5vZGVMb2NhdGlvbnMpID09PSBudWxsIHx8IF9ub2RlTG9jYXRpb25zMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVMb2NhdGlvbnMzLm1hcChmdW5jdGlvbiAobG9jKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYXRpb24obG9jLnNvdXJjZSwgbG9jLnN0YXJ0KTtcbiAgICB9KTtcbiAgICBfdGhpcy5wYXRoID0gcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkO1xuICAgIF90aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zICE9PSBudWxsICYmIGV4dGVuc2lvbnMgIT09IHZvaWQgMCA/IGV4dGVuc2lvbnMgOiB7fTtcbiAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvciA9PT0gbnVsbCB8fCBvcmlnaW5hbEVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbEVycm9yLmV4dGVuc2lvbnM7XG5cbiAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgIF90aGlzLmV4dGVuc2lvbnMgPSBfb2JqZWN0U3ByZWFkKHt9LCBvcmlnaW5hbEV4dGVuc2lvbnMpO1xuICAgIH0gLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGJlbGxvdyBwcm9wZXJ0aWVzIGluIHRoZSByZXN1bHRpbmcgb3V0cHV0LlxuICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICBlbnVtZXJhYmxlOiBfdGhpcy5sb2NhdGlvbnMgIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgZW51bWVyYWJsZTogX3RoaXMucGF0aCAhPSBudWxsXG4gICAgICB9LFxuICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICBlbnVtZXJhYmxlOiBfdGhpcy5leHRlbnNpb25zICE9IG51bGwgJiYgT2JqZWN0LmtleXMoX3RoaXMuZXh0ZW5zaW9ucykubGVuZ3RoID4gMFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub2Rlczoge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9yaWdpbmFsRXJyb3I6IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9KTsgLy8gSW5jbHVkZSAobm9uLWVudW1lcmFibGUpIHN0YWNrIHRyYWNlLlxuXG4gICAgaWYgKG9yaWdpbmFsRXJyb3IgIT09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPT0gdm9pZCAwICYmIG9yaWdpbmFsRXJyb3Iuc3RhY2spIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3N0YWNrJywge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvci5zdGFjayxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuICAgIH0gLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBHcmFwaFFMRXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzdGFjaycsIHtcbiAgICAgICAgdmFsdWU6IEVycm9yKCkuc3RhY2ssXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmFwaFFMRXJyb3IsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHByaW50RXJyb3IodGhpcyk7XG4gICAgfSAvLyBGSVhNRTogd29ya2Fyb3VuZCB0byBub3QgYnJlYWsgY2hhaSBjb21wYXJpc29ucywgc2hvdWxkIGJlIHJlbW92ZSBpbiB2MTZcbiAgICAvLyAkRmxvd0ZpeE1lW3Vuc3VwcG9ydGVkLXN5bnRheF0gRmxvdyBkb2Vzbid0IHN1cHBvcnQgY29tcHV0ZWQgcHJvcGVydGllcyB5ZXRcblxuICB9LCB7XG4gICAga2V5OiBTWU1CT0xfVE9fU1RSSU5HX1RBRyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JhcGhRTEVycm9yO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxuZnVuY3Rpb24gdW5kZWZpbmVkSWZFbXB0eShhcnJheSkge1xuICByZXR1cm4gYXJyYXkgPT09IHVuZGVmaW5lZCB8fCBhcnJheS5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiBhcnJheTtcbn1cbi8qKlxuICogUHJpbnRzIGEgR3JhcGhRTEVycm9yIHRvIGEgc3RyaW5nLCByZXByZXNlbnRpbmcgdXNlZnVsIGxvY2F0aW9uIGluZm9ybWF0aW9uXG4gKiBhYm91dCB0aGUgZXJyb3IncyBwb3NpdGlvbiBpbiB0aGUgc291cmNlLlxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3IpIHtcbiAgdmFyIG91dHB1dCA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgaWYgKGVycm9yLm5vZGVzKSB7XG4gICAgZm9yICh2YXIgX2k0ID0gMCwgX2Vycm9yJG5vZGVzMiA9IGVycm9yLm5vZGVzOyBfaTQgPCBfZXJyb3Ikbm9kZXMyLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgIHZhciBub2RlID0gX2Vycm9yJG5vZGVzMltfaTRdO1xuXG4gICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRMb2NhdGlvbihub2RlLmxvYyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVycm9yLnNvdXJjZSAmJiBlcnJvci5sb2NhdGlvbnMpIHtcbiAgICBmb3IgKHZhciBfaTYgPSAwLCBfZXJyb3IkbG9jYXRpb25zMiA9IGVycm9yLmxvY2F0aW9uczsgX2k2IDwgX2Vycm9yJGxvY2F0aW9uczIubGVuZ3RoOyBfaTYrKykge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX2Vycm9yJGxvY2F0aW9uczJbX2k2XTtcbiAgICAgIG91dHB1dCArPSAnXFxuXFxuJyArIHByaW50U291cmNlTG9jYXRpb24oZXJyb3Iuc291cmNlLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCIuL0dyYXBoUUxFcnJvci5tanNcIjtcbi8qKlxuICogUHJvZHVjZXMgYSBHcmFwaFFMRXJyb3IgcmVwcmVzZW50aW5nIGEgc3ludGF4IGVycm9yLCBjb250YWluaW5nIHVzZWZ1bFxuICogZGVzY3JpcHRpdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bnRheCBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgR3JhcGhRTEVycm9yKFwiU3ludGF4IEVycm9yOiBcIi5jb25jYXQoZGVzY3JpcHRpb24pLCB1bmRlZmluZWQsIHNvdXJjZSwgW3Bvc2l0aW9uXSk7XG59XG4iLCJpbXBvcnQgaW52YXJpYW50IGZyb20gXCIuL2ludmFyaWFudC5tanNcIjtcbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG4vKipcbiAqIFRoZSBgZGVmaW5lSW5zcGVjdCgpYCBmdW5jdGlvbiBkZWZpbmVzIGBpbnNwZWN0KClgIHByb3RvdHlwZSBtZXRob2QgYXMgYWxpYXMgb2YgYHRvSlNPTmBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVJbnNwZWN0KGNsYXNzT2JqZWN0KSB7XG4gIHZhciBmbiA9IGNsYXNzT2JqZWN0LnByb3RvdHlwZS50b0pTT047XG4gIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCBpbnZhcmlhbnQoMCk7XG4gIGNsYXNzT2JqZWN0LnByb3RvdHlwZS5pbnNwZWN0ID0gZm47IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuICBpZiAobm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICAgIGNsYXNzT2JqZWN0LnByb3RvdHlwZVtub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sXSA9IGZuO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZBc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIGZsb3d0eXBlL25vLXdlYWstdHlwZXMgKi9cbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDEwO1xudmFyIE1BWF9SRUNVUlNJVkVfREVQVEggPSAyO1xuLyoqXG4gKiBVc2VkIHRvIHByaW50IHZhbHVlcyBpbiBlcnJvciBtZXNzYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlKSB7XG4gIHJldHVybiBmb3JtYXRWYWx1ZSh2YWx1ZSwgW10pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcykge1xuICBzd2l0Y2ggKF90eXBlb2YodmFsdWUpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gdmFsdWUubmFtZSA/IFwiW2Z1bmN0aW9uIFwiLmNvbmNhdCh2YWx1ZS5uYW1lLCBcIl1cIikgOiAnW2Z1bmN0aW9uXSc7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0VmFsdWUodmFsdWUsIHByZXZpb3VzbHlTZWVuVmFsdWVzKSB7XG4gIGlmIChwcmV2aW91c2x5U2VlblZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICB9XG5cbiAgdmFyIHNlZW5WYWx1ZXMgPSBbXS5jb25jYXQocHJldmlvdXNseVNlZW5WYWx1ZXMsIFt2YWx1ZV0pO1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gZ2V0Q3VzdG9tRm4odmFsdWUpO1xuXG4gIGlmIChjdXN0b21JbnNwZWN0Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXN0b21WYWx1ZSA9IGN1c3RvbUluc3BlY3RGbi5jYWxsKHZhbHVlKTsgLy8gY2hlY2sgZm9yIGluZmluaXRlIHJlY3Vyc2lvblxuXG4gICAgaWYgKGN1c3RvbVZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXN0b21WYWx1ZSA9PT0gJ3N0cmluZycgPyBjdXN0b21WYWx1ZSA6IGZvcm1hdFZhbHVlKGN1c3RvbVZhbHVlLCBzZWVuVmFsdWVzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZm9ybWF0QXJyYXkodmFsdWUsIHNlZW5WYWx1ZXMpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdE9iamVjdCh2YWx1ZSwgc2VlblZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE9iamVjdChvYmplY3QsIHNlZW5WYWx1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAne30nO1xuICB9XG5cbiAgaWYgKHNlZW5WYWx1ZXMubGVuZ3RoID4gTUFYX1JFQ1VSU0lWRV9ERVBUSCkge1xuICAgIHJldHVybiAnWycgKyBnZXRPYmplY3RUYWcob2JqZWN0KSArICddJztcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IGZvcm1hdFZhbHVlKG9iamVjdFtrZXldLCBzZWVuVmFsdWVzKTtcbiAgICByZXR1cm4ga2V5ICsgJzogJyArIHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuICd7ICcgKyBwcm9wZXJ0aWVzLmpvaW4oJywgJykgKyAnIH0nO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShhcnJheSwgc2VlblZhbHVlcykge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdbXSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbQXJyYXldJztcbiAgfVxuXG4gIHZhciBsZW4gPSBNYXRoLm1pbihNQVhfQVJSQVlfTEVOR1RILCBhcnJheS5sZW5ndGgpO1xuICB2YXIgcmVtYWluaW5nID0gYXJyYXkubGVuZ3RoIC0gbGVuO1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaXRlbXMucHVzaChmb3JtYXRWYWx1ZShhcnJheVtpXSwgc2VlblZhbHVlcykpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmluZyA9PT0gMSkge1xuICAgIGl0ZW1zLnB1c2goJy4uLiAxIG1vcmUgaXRlbScpO1xuICB9IGVsc2UgaWYgKHJlbWFpbmluZyA+IDEpIHtcbiAgICBpdGVtcy5wdXNoKFwiLi4uIFwiLmNvbmNhdChyZW1haW5pbmcsIFwiIG1vcmUgaXRlbXNcIikpO1xuICB9XG5cbiAgcmV0dXJuICdbJyArIGl0ZW1zLmpvaW4oJywgJykgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIGdldEN1c3RvbUZuKG9iamVjdCkge1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gb2JqZWN0W1N0cmluZyhub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sKV07XG5cbiAgaWYgKHR5cGVvZiBjdXN0b21JbnNwZWN0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3VzdG9tSW5zcGVjdEZuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvYmplY3QuaW5zcGVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RUYWcob2JqZWN0KSB7XG4gIHZhciB0YWcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5yZXBsYWNlKC9eXFxbb2JqZWN0IC8sICcnKS5yZXBsYWNlKC9dJC8sICcnKTtcblxuICBpZiAodGFnID09PSAnT2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG5hbWUgPSBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgbmFtZSAhPT0gJycpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBpbnNwZWN0IGZyb20gXCIuL2luc3BlY3QubWpzXCI7XG4vKipcbiAqIEEgcmVwbGFjZW1lbnQgZm9yIGluc3RhbmNlb2Ygd2hpY2ggaW5jbHVkZXMgYW4gZXJyb3Igd2FybmluZyB3aGVuIG11bHRpLXJlYWxtXG4gKiBjb25zdHJ1Y3RvcnMgYXJlIGRldGVjdGVkLlxuICovXG5cbi8vIFNlZTogaHR0cHM6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2UtcGVyZm9ybWFuY2UuaHRtbCNzZXQtbm9kZV9lbnYtdG8tcHJvZHVjdGlvblxuLy8gU2VlOiBodHRwczovL3dlYnBhY2suanMub3JnL2d1aWRlcy9wcm9kdWN0aW9uL1xuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3Jylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xufSA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgdmFyIF92YWx1ZSRjb25zdHJ1Y3RvcjtcblxuICAgIHZhciBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGVbU3ltYm9sLnRvU3RyaW5nVGFnXTtcbiAgICB2YXIgdmFsdWVDbGFzc05hbWUgPSAvLyBXZSBzdGlsbCBuZWVkIHRvIHN1cHBvcnQgY29uc3RydWN0b3IncyBuYW1lIHRvIGRldGVjdCBjb25mbGljdHMgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiB0aGlzIGxpYnJhcnkuXG4gICAgU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlID8gdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA6IChfdmFsdWUkY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX3ZhbHVlJGNvbnN0cnVjdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChjbGFzc05hbWUgPT09IHZhbHVlQ2xhc3NOYW1lKSB7XG4gICAgICB2YXIgc3RyaW5naWZpZWRWYWx1ZSA9IGluc3BlY3QodmFsdWUpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBcIi5jb25jYXQoY2xhc3NOYW1lLCBcIiBcXFwiXCIpLmNvbmNhdChzdHJpbmdpZmllZFZhbHVlLCBcIlxcXCIgZnJvbSBhbm90aGVyIG1vZHVsZSBvciByZWFsbS5cXG5cXG5FbnN1cmUgdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBpbnN0YW5jZSBvZiBcXFwiZ3JhcGhxbFxcXCIgaW4gdGhlIG5vZGVfbW9kdWxlc1xcbmRpcmVjdG9yeS4gSWYgZGlmZmVyZW50IHZlcnNpb25zIG9mIFxcXCJncmFwaHFsXFxcIiBhcmUgdGhlIGRlcGVuZGVuY2llcyBvZiBvdGhlclxcbnJlbGllZCBvbiBtb2R1bGVzLCB1c2UgXFxcInJlc29sdXRpb25zXFxcIiB0byBlbnN1cmUgb25seSBvbmUgdmVyc2lvbiBpcyBpbnN0YWxsZWQuXFxuXFxuaHR0cHM6Ly95YXJucGtnLmNvbS9lbi9kb2NzL3NlbGVjdGl2ZS12ZXJzaW9uLXJlc29sdXRpb25zXFxuXFxuRHVwbGljYXRlIFxcXCJncmFwaHFsXFxcIiBtb2R1bGVzIGNhbm5vdCBiZSB1c2VkIGF0IHRoZSBzYW1lIHRpbWUgc2luY2UgZGlmZmVyZW50XFxudmVyc2lvbnMgbWF5IGhhdmUgZGlmZmVyZW50IGNhcGFiaWxpdGllcyBhbmQgYmVoYXZpb3IuIFRoZSBkYXRhIGZyb20gb25lXFxudmVyc2lvbiB1c2VkIGluIHRoZSBmdW5jdGlvbiBmcm9tIGFub3RoZXIgY291bGQgcHJvZHVjZSBjb25mdXNpbmcgYW5kXFxuc3B1cmlvdXMgcmVzdWx0cy5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiAnVW5leHBlY3RlZCBpbnZhcmlhbnQgdHJpZ2dlcmVkLicpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdFxuICogYG51bGxgIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbiIsIi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcbnZhciBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5leHBvcnQgZGVmYXVsdCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sO1xuIiwiaW1wb3J0IGRlZmluZUluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvZGVmaW5lSW5zcGVjdC5tanNcIjtcblxuLyoqXG4gKiBDb250YWlucyBhIHJhbmdlIG9mIFVURi04IGNoYXJhY3RlciBvZmZzZXRzIGFuZCB0b2tlbiByZWZlcmVuY2VzIHRoYXRcbiAqIGlkZW50aWZ5IHRoZSByZWdpb24gb2YgdGhlIHNvdXJjZSBmcm9tIHdoaWNoIHRoZSBBU1QgZGVyaXZlZC5cbiAqL1xuZXhwb3J0IHZhciBMb2NhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBUb2tlbiBhdCB3aGljaCB0aGlzIE5vZGUgZW5kcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBTb3VyY2UgZG9jdW1lbnQgdGhlIEFTVCByZXByZXNlbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gTG9jYXRpb24oc3RhcnRUb2tlbiwgZW5kVG9rZW4sIHNvdXJjZSkge1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydFRva2VuLnN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kVG9rZW4uZW5kO1xuICAgIHRoaXMuc3RhcnRUb2tlbiA9IHN0YXJ0VG9rZW47XG4gICAgdGhpcy5lbmRUb2tlbiA9IGVuZFRva2VuO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvY2F0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgIGVuZDogdGhpcy5lbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBMb2NhdGlvbjtcbn0oKTsgLy8gUHJpbnQgYSBzaW1wbGlmaWVkIGZvcm0gd2hlbiBhcHBlYXJpbmcgaW4gYGluc3BlY3RgIGFuZCBgdXRpbC5pbnNwZWN0YC5cblxuZGVmaW5lSW5zcGVjdChMb2NhdGlvbik7XG4vKipcbiAqIFJlcHJlc2VudHMgYSByYW5nZSBvZiBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGEgbGV4aWNhbCB0b2tlblxuICogd2l0aGluIGEgU291cmNlLlxuICovXG5cbmV4cG9ydCB2YXIgVG9rZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGtpbmQgb2YgVG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGxpbmUgbnVtYmVyIG9uIHdoaWNoIHRoaXMgVG9rZW4gYXBwZWFycy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAxLWluZGV4ZWQgY29sdW1uIG51bWJlciBhdCB3aGljaCB0aGlzIFRva2VuIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEZvciBub24tcHVuY3R1YXRpb24gdG9rZW5zLCByZXByZXNlbnRzIHRoZSBpbnRlcnByZXRlZCB2YWx1ZSBvZiB0aGUgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUb2tlbnMgZXhpc3QgYXMgbm9kZXMgaW4gYSBkb3VibGUtbGlua2VkLWxpc3QgYW1vbmdzdCBhbGwgdG9rZW5zXG4gICAqIGluY2x1ZGluZyBpZ25vcmVkIHRva2Vucy4gPFNPRj4gaXMgYWx3YXlzIHRoZSBmaXJzdCBub2RlIGFuZCA8RU9GPlxuICAgKiB0aGUgbGFzdC5cbiAgICovXG4gIGZ1bmN0aW9uIFRva2VuKGtpbmQsIHN0YXJ0LCBlbmQsIGxpbmUsIGNvbHVtbiwgcHJldiwgdmFsdWUpIHtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByZXYgPSBwcmV2O1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRva2VuLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogdGhpcy5raW5kLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW47XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoVG9rZW4pO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG1heWJlTm9kZSkge1xuICByZXR1cm4gbWF5YmVOb2RlICE9IG51bGwgJiYgdHlwZW9mIG1heWJlTm9kZS5raW5kID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogVGhlIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIEFTVCBub2RlIHR5cGVzLlxuICovXG4iLCIvKipcbiAqIFByb2R1Y2VzIHRoZSB2YWx1ZSBvZiBhIGJsb2NrIHN0cmluZyBmcm9tIGl0cyBwYXJzZWQgcmF3IHZhbHVlLCBzaW1pbGFyIHRvXG4gKiBDb2ZmZWVTY3JpcHQncyBibG9jayBzdHJpbmcsIFB5dGhvbidzIGRvY3N0cmluZyB0cmltIG9yIFJ1YnkncyBzdHJpcF9oZXJlZG9jLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50cyB0aGUgR3JhcGhRTCBzcGVjJ3MgQmxvY2tTdHJpbmdWYWx1ZSgpIHN0YXRpYyBhbGdvcml0aG0uXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1N0cmluZykge1xuICAvLyBFeHBhbmQgYSBibG9jayBzdHJpbmcncyByYXcgdmFsdWUgaW50byBpbmRlcGVuZGVudCBsaW5lcy5cbiAgdmFyIGxpbmVzID0gcmF3U3RyaW5nLnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7IC8vIFJlbW92ZSBjb21tb24gaW5kZW50YXRpb24gZnJvbSBhbGwgbGluZXMgYnV0IGZpcnN0LlxuXG4gIHZhciBjb21tb25JbmRlbnQgPSBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHJhd1N0cmluZyk7XG5cbiAgaWYgKGNvbW1vbkluZGVudCAhPT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmVzW2ldID0gbGluZXNbaV0uc2xpY2UoY29tbW9uSW5kZW50KTtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGJsYW5rIGxpbmVzLlxuXG5cbiAgdmFyIHN0YXJ0TGluZSA9IDA7XG5cbiAgd2hpbGUgKHN0YXJ0TGluZSA8IGxpbmVzLmxlbmd0aCAmJiBpc0JsYW5rKGxpbmVzW3N0YXJ0TGluZV0pKSB7XG4gICAgKytzdGFydExpbmU7XG4gIH1cblxuICB2YXIgZW5kTGluZSA9IGxpbmVzLmxlbmd0aDtcblxuICB3aGlsZSAoZW5kTGluZSA+IHN0YXJ0TGluZSAmJiBpc0JsYW5rKGxpbmVzW2VuZExpbmUgLSAxXSkpIHtcbiAgICAtLWVuZExpbmU7XG4gIH0gLy8gUmV0dXJuIGEgc3RyaW5nIG9mIHRoZSBsaW5lcyBqb2luZWQgd2l0aCBVKzAwMEEuXG5cblxuICByZXR1cm4gbGluZXMuc2xpY2Uoc3RhcnRMaW5lLCBlbmRMaW5lKS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gaXNCbGFuayhzdHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoc3RyW2ldICE9PSAnICcgJiYgc3RyW2ldICE9PSAnXFx0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBfY29tbW9uSW5kZW50O1xuXG4gIHZhciBpc0ZpcnN0TGluZSA9IHRydWU7XG4gIHZhciBpc0VtcHR5TGluZSA9IHRydWU7XG4gIHZhciBpbmRlbnQgPSAwO1xuICB2YXIgY29tbW9uSW5kZW50ID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgc3dpdGNoICh2YWx1ZS5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICArK2k7IC8vIHNraXAgXFxyXFxuIGFzIG9uZSBzeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIC8vICBcXG5cbiAgICAgICAgaXNGaXJzdExpbmUgPSBmYWxzZTtcbiAgICAgICAgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICAgICAgICBpbmRlbnQgPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5OiAvLyAgIFxcdFxuXG4gICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgPHNwYWNlPlxuICAgICAgICArK2luZGVudDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChpc0VtcHR5TGluZSAmJiAhaXNGaXJzdExpbmUgJiYgKGNvbW1vbkluZGVudCA9PT0gbnVsbCB8fCBpbmRlbnQgPCBjb21tb25JbmRlbnQpKSB7XG4gICAgICAgICAgY29tbW9uSW5kZW50ID0gaW5kZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaXNFbXB0eUxpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKF9jb21tb25JbmRlbnQgPSBjb21tb25JbmRlbnQpICE9PSBudWxsICYmIF9jb21tb25JbmRlbnQgIT09IHZvaWQgMCA/IF9jb21tb25JbmRlbnQgOiAwO1xufVxuLyoqXG4gKiBQcmludCBhIGJsb2NrIHN0cmluZyBpbiB0aGUgaW5kZW50ZWQgYmxvY2sgZm9ybSBieSBhZGRpbmcgYSBsZWFkaW5nIGFuZFxuICogdHJhaWxpbmcgYmxhbmsgbGluZS4gSG93ZXZlciwgaWYgYSBibG9jayBzdHJpbmcgc3RhcnRzIHdpdGggd2hpdGVzcGFjZSBhbmQgaXNcbiAqIGEgc2luZ2xlLWxpbmUsIGFkZGluZyBhIGxlYWRpbmcgYmxhbmsgbGluZSB3b3VsZCBzdHJpcCB0aGF0IHdoaXRlc3BhY2UuXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50QmxvY2tTdHJpbmcodmFsdWUpIHtcbiAgdmFyIGluZGVudGF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgdmFyIHByZWZlck11bHRpcGxlTGluZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgaXNTaW5nbGVMaW5lID0gdmFsdWUuaW5kZXhPZignXFxuJykgPT09IC0xO1xuICB2YXIgaGFzTGVhZGluZ1NwYWNlID0gdmFsdWVbMF0gPT09ICcgJyB8fCB2YWx1ZVswXSA9PT0gJ1xcdCc7XG4gIHZhciBoYXNUcmFpbGluZ1F1b3RlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIic7XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcXFxcJztcbiAgdmFyIHByaW50QXNNdWx0aXBsZUxpbmVzID0gIWlzU2luZ2xlTGluZSB8fCBoYXNUcmFpbGluZ1F1b3RlIHx8IGhhc1RyYWlsaW5nU2xhc2ggfHwgcHJlZmVyTXVsdGlwbGVMaW5lcztcbiAgdmFyIHJlc3VsdCA9ICcnOyAvLyBGb3JtYXQgYSBtdWx0aS1saW5lIGJsb2NrIHF1b3RlIHRvIGFjY291bnQgZm9yIGxlYWRpbmcgc3BhY2UuXG5cbiAgaWYgKHByaW50QXNNdWx0aXBsZUxpbmVzICYmICEoaXNTaW5nbGVMaW5lICYmIGhhc0xlYWRpbmdTcGFjZSkpIHtcbiAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRhdGlvbjtcbiAgfVxuXG4gIHJlc3VsdCArPSBpbmRlbnRhdGlvbiA/IHZhbHVlLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyArIGluZGVudGF0aW9uKSA6IHZhbHVlO1xuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcykge1xuICAgIHJlc3VsdCArPSAnXFxuJztcbiAgfVxuXG4gIHJldHVybiAnXCJcIlwiJyArIHJlc3VsdC5yZXBsYWNlKC9cIlwiXCIvZywgJ1xcXFxcIlwiXCInKSArICdcIlwiXCInO1xufVxuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHZhciBEaXJlY3RpdmVMb2NhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBSZXF1ZXN0IERlZmluaXRpb25zXG4gIFFVRVJZOiAnUVVFUlknLFxuICBNVVRBVElPTjogJ01VVEFUSU9OJyxcbiAgU1VCU0NSSVBUSU9OOiAnU1VCU0NSSVBUSU9OJyxcbiAgRklFTEQ6ICdGSUVMRCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGUkFHTUVOVF9ERUZJTklUSU9OJyxcbiAgRlJBR01FTlRfU1BSRUFEOiAnRlJBR01FTlRfU1BSRUFEJyxcbiAgSU5MSU5FX0ZSQUdNRU5UOiAnSU5MSU5FX0ZSQUdNRU5UJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUE6ICdTQ0hFTUEnLFxuICBTQ0FMQVI6ICdTQ0FMQVInLFxuICBPQkpFQ1Q6ICdPQkpFQ1QnLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRklFTERfREVGSU5JVElPTicsXG4gIEFSR1VNRU5UX0RFRklOSVRJT046ICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcbiAgSU5URVJGQUNFOiAnSU5URVJGQUNFJyxcbiAgVU5JT046ICdVTklPTicsXG4gIEVOVU06ICdFTlVNJyxcbiAgRU5VTV9WQUxVRTogJ0VOVU1fVkFMVUUnLFxuICBJTlBVVF9PQkpFQ1Q6ICdJTlBVVF9PQkpFQ1QnLFxuICBJTlBVVF9GSUVMRF9ERUZJTklUSU9OOiAnSU5QVVRfRklFTERfREVGSU5JVElPTidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQga2luZCB2YWx1ZXMgZm9yIEFTVCBub2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBLaW5kID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC8vIE5hbWVcbiAgTkFNRTogJ05hbWUnLFxuICAvLyBEb2N1bWVudFxuICBET0NVTUVOVDogJ0RvY3VtZW50JyxcbiAgT1BFUkFUSU9OX0RFRklOSVRJT046ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZhcmlhYmxlRGVmaW5pdGlvbicsXG4gIFNFTEVDVElPTl9TRVQ6ICdTZWxlY3Rpb25TZXQnLFxuICBGSUVMRDogJ0ZpZWxkJyxcbiAgQVJHVU1FTlQ6ICdBcmd1bWVudCcsXG4gIC8vIEZyYWdtZW50c1xuICBGUkFHTUVOVF9TUFJFQUQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lubGluZUZyYWdtZW50JyxcbiAgRlJBR01FTlRfREVGSU5JVElPTjogJ0ZyYWdtZW50RGVmaW5pdGlvbicsXG4gIC8vIFZhbHVlc1xuICBWQVJJQUJMRTogJ1ZhcmlhYmxlJyxcbiAgSU5UOiAnSW50VmFsdWUnLFxuICBGTE9BVDogJ0Zsb2F0VmFsdWUnLFxuICBTVFJJTkc6ICdTdHJpbmdWYWx1ZScsXG4gIEJPT0xFQU46ICdCb29sZWFuVmFsdWUnLFxuICBOVUxMOiAnTnVsbFZhbHVlJyxcbiAgRU5VTTogJ0VudW1WYWx1ZScsXG4gIExJU1Q6ICdMaXN0VmFsdWUnLFxuICBPQkpFQ1Q6ICdPYmplY3RWYWx1ZScsXG4gIE9CSkVDVF9GSUVMRDogJ09iamVjdEZpZWxkJyxcbiAgLy8gRGlyZWN0aXZlc1xuICBESVJFQ1RJVkU6ICdEaXJlY3RpdmUnLFxuICAvLyBUeXBlc1xuICBOQU1FRF9UWVBFOiAnTmFtZWRUeXBlJyxcbiAgTElTVF9UWVBFOiAnTGlzdFR5cGUnLFxuICBOT05fTlVMTF9UWVBFOiAnTm9uTnVsbFR5cGUnLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUFfREVGSU5JVElPTjogJ1NjaGVtYURlZmluaXRpb24nLFxuICBPUEVSQVRJT05fVFlQRV9ERUZJTklUSU9OOiAnT3BlcmF0aW9uVHlwZURlZmluaXRpb24nLFxuICAvLyBUeXBlIERlZmluaXRpb25zXG4gIFNDQUxBUl9UWVBFX0RFRklOSVRJT046ICdTY2FsYXJUeXBlRGVmaW5pdGlvbicsXG4gIE9CSkVDVF9UWVBFX0RFRklOSVRJT046ICdPYmplY3RUeXBlRGVmaW5pdGlvbicsXG4gIEZJRUxEX0RFRklOSVRJT046ICdGaWVsZERlZmluaXRpb24nLFxuICBJTlBVVF9WQUxVRV9ERUZJTklUSU9OOiAnSW5wdXRWYWx1ZURlZmluaXRpb24nLFxuICBJTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OOiAnSW50ZXJmYWNlVHlwZURlZmluaXRpb24nLFxuICBVTklPTl9UWVBFX0RFRklOSVRJT046ICdVbmlvblR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9UWVBFX0RFRklOSVRJT046ICdFbnVtVHlwZURlZmluaXRpb24nLFxuICBFTlVNX1ZBTFVFX0RFRklOSVRJT046ICdFbnVtVmFsdWVEZWZpbml0aW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTjogJ0lucHV0T2JqZWN0VHlwZURlZmluaXRpb24nLFxuICAvLyBEaXJlY3RpdmUgRGVmaW5pdGlvbnNcbiAgRElSRUNUSVZFX0RFRklOSVRJT046ICdEaXJlY3RpdmVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRXh0ZW5zaW9uc1xuICBTQ0hFTUFfRVhURU5TSU9OOiAnU2NoZW1hRXh0ZW5zaW9uJyxcbiAgLy8gVHlwZSBFeHRlbnNpb25zXG4gIFNDQUxBUl9UWVBFX0VYVEVOU0lPTjogJ1NjYWxhclR5cGVFeHRlbnNpb24nLFxuICBPQkpFQ1RfVFlQRV9FWFRFTlNJT046ICdPYmplY3RUeXBlRXh0ZW5zaW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfRVhURU5TSU9OOiAnSW50ZXJmYWNlVHlwZUV4dGVuc2lvbicsXG4gIFVOSU9OX1RZUEVfRVhURU5TSU9OOiAnVW5pb25UeXBlRXh0ZW5zaW9uJyxcbiAgRU5VTV9UWVBFX0VYVEVOU0lPTjogJ0VudW1UeXBlRXh0ZW5zaW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uJ1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBraW5kIHZhbHVlcyBvZiBBU1Qgbm9kZXMuXG4gKi9cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vYmxvY2tTdHJpbmcubWpzXCI7XG4vKipcbiAqIEdpdmVuIGEgU291cmNlIG9iamVjdCwgY3JlYXRlcyBhIExleGVyIGZvciB0aGF0IHNvdXJjZS5cbiAqIEEgTGV4ZXIgaXMgYSBzdGF0ZWZ1bCBzdHJlYW0gZ2VuZXJhdG9yIGluIHRoYXQgZXZlcnkgdGltZVxuICogaXQgaXMgYWR2YW5jZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIFNvdXJjZS4gQXNzdW1pbmcgdGhlXG4gKiBzb3VyY2UgbGV4ZXMsIHRoZSBmaW5hbCBUb2tlbiBlbWl0dGVkIGJ5IHRoZSBsZXhlciB3aWxsIGJlIG9mIGtpbmRcbiAqIEVPRiwgYWZ0ZXIgd2hpY2ggdGhlIGxleGVyIHdpbGwgcmVwZWF0ZWRseSByZXR1cm4gdGhlIHNhbWUgRU9GIHRva2VuXG4gKiB3aGVuZXZlciBjYWxsZWQuXG4gKi9cblxuZXhwb3J0IHZhciBMZXhlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXNseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlICgxLWluZGV4ZWQpIGxpbmUgY29udGFpbmluZyB0aGUgY3VycmVudCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoZSBjdXJyZW50IGxpbmUgYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gTGV4ZXIoc291cmNlKSB7XG4gICAgdmFyIHN0YXJ0T2ZGaWxlVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5LaW5kLlNPRiwgMCwgMCwgMCwgMCwgbnVsbCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sYXN0VG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMudG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMubGluZSA9IDE7XG4gICAgdGhpcy5saW5lU3RhcnQgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdG9rZW4gc3RyZWFtIHRvIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBMZXhlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkdmFuY2UgPSBmdW5jdGlvbiBhZHZhbmNlKCkge1xuICAgIHRoaXMubGFzdFRva2VuID0gdGhpcy50b2tlbjtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuID0gdGhpcy5sb29rYWhlYWQoKTtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgLyoqXG4gICAqIExvb2tzIGFoZWFkIGFuZCByZXR1cm5zIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLCBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIHRoZSBzdGF0ZSBvZiBMZXhlci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9va2FoZWFkID0gZnVuY3Rpb24gbG9va2FoZWFkKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCAhPT0gVG9rZW5LaW5kLkVPRikge1xuICAgICAgZG8ge1xuICAgICAgICB2YXIgX3Rva2VuJG5leHQ7XG5cbiAgICAgICAgLy8gTm90ZTogbmV4dCBpcyBvbmx5IG11dGFibGUgZHVyaW5nIHBhcnNpbmcsIHNvIHdlIGNhc3QgdG8gYWxsb3cgdGhpcy5cbiAgICAgICAgdG9rZW4gPSAoX3Rva2VuJG5leHQgPSB0b2tlbi5uZXh0KSAhPT0gbnVsbCAmJiBfdG9rZW4kbmV4dCAhPT0gdm9pZCAwID8gX3Rva2VuJG5leHQgOiB0b2tlbi5uZXh0ID0gcmVhZFRva2VuKHRoaXMsIHRva2VuKTtcbiAgICAgIH0gd2hpbGUgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5DT01NRU5UKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH07XG5cbiAgcmV0dXJuIExleGVyO1xufSgpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQdW5jdHVhdG9yVG9rZW5LaW5kKGtpbmQpIHtcbiAgcmV0dXJuIGtpbmQgPT09IFRva2VuS2luZC5CQU5HIHx8IGtpbmQgPT09IFRva2VuS2luZC5ET0xMQVIgfHwga2luZCA9PT0gVG9rZW5LaW5kLkFNUCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fTCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fUiB8fCBraW5kID09PSBUb2tlbktpbmQuU1BSRUFEIHx8IGtpbmQgPT09IFRva2VuS2luZC5DT0xPTiB8fCBraW5kID09PSBUb2tlbktpbmQuRVFVQUxTIHx8IGtpbmQgPT09IFRva2VuS2luZC5BVCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDS0VUX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBJUEUgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX1I7XG59XG5cbmZ1bmN0aW9uIHByaW50Q2hhckNvZGUoY29kZSkge1xuICByZXR1cm4gKC8vIE5hTi91bmRlZmluZWQgcmVwcmVzZW50cyBhY2Nlc3MgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgaXNOYU4oY29kZSkgPyBUb2tlbktpbmQuRU9GIDogLy8gVHJ1c3QgSlNPTiBmb3IgQVNDSUkuXG4gICAgY29kZSA8IDB4MDA3ZiA/IEpTT04uc3RyaW5naWZ5KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIDogLy8gT3RoZXJ3aXNlIHByaW50IHRoZSBlc2NhcGVkIGZvcm0uXG4gICAgXCJcXFwiXFxcXHVcIi5jb25jYXQoKCcwMCcgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtNCksIFwiXFxcIlwiKVxuICApO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBuZXh0IHRva2VuIGZyb20gdGhlIHNvdXJjZSBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gKlxuICogVGhpcyBza2lwcyBvdmVyIHdoaXRlc3BhY2UgdW50aWwgaXQgZmluZHMgdGhlIG5leHQgbGV4YWJsZSB0b2tlbiwgdGhlbiBsZXhlc1xuICogcHVuY3R1YXRvcnMgaW1tZWRpYXRlbHkgb3IgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9yZVxuICogY29tcGxpY2F0ZWQgdG9rZW5zLlxuICovXG5cblxuZnVuY3Rpb24gcmVhZFRva2VuKGxleGVyLCBwcmV2KSB7XG4gIHZhciBzb3VyY2UgPSBsZXhlci5zb3VyY2U7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG4gIHZhciBwb3MgPSBwcmV2LmVuZDtcblxuICB3aGlsZSAocG9zIDwgYm9keUxlbmd0aCkge1xuICAgIHZhciBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvcyk7XG4gICAgdmFyIF9saW5lID0gbGV4ZXIubGluZTtcblxuICAgIHZhciBfY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDsgLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSAweGZlZmY6IC8vIDxCT00+XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjogLy8gIDxzcGFjZT5cblxuICAgICAgY2FzZSA0NDpcbiAgICAgICAgLy8gICxcbiAgICAgICAgKytwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgICsrcG9zO1xuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIC8vICBcXHJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuXG4gICAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAzMzpcbiAgICAgICAgLy8gICFcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQkFORywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMzU6XG4gICAgICAgIC8vICAjXG4gICAgICAgIHJldHVybiByZWFkQ29tbWVudChzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM2OlxuICAgICAgICAvLyAgJFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5ET0xMQVIsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM4OlxuICAgICAgICAvLyAgJlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5BTVAsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQwOlxuICAgICAgICAvLyAgKFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5QQVJFTl9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MTpcbiAgICAgICAgLy8gIClcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fUiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDY6XG4gICAgICAgIC8vICAuXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQ2ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gNDYpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TUFJFQUQsIHBvcywgcG9zICsgMywgX2xpbmUsIF9jb2wsIHByZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIC8vICA6XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTE9OLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2MTpcbiAgICAgICAgLy8gID1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRVFVQUxTLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NDpcbiAgICAgICAgLy8gIEBcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQVQsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkxOlxuICAgICAgICAvLyAgW1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX0wsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkzOlxuICAgICAgICAvLyAgXVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyMzpcbiAgICAgICAgLy8ge1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjQ6XG4gICAgICAgIC8vIHxcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUElQRSwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI1OlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJSQUNFX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyAgXCJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvcyArIDIpID09PSAzNCkge1xuICAgICAgICAgIHJldHVybiByZWFkQmxvY2tTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2LCBsZXhlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVhZFN0cmluZyhzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ1OiAvLyAgLVxuXG4gICAgICBjYXNlIDQ4OiAvLyAgMFxuXG4gICAgICBjYXNlIDQ5OiAvLyAgMVxuXG4gICAgICBjYXNlIDUwOiAvLyAgMlxuXG4gICAgICBjYXNlIDUxOiAvLyAgM1xuXG4gICAgICBjYXNlIDUyOiAvLyAgNFxuXG4gICAgICBjYXNlIDUzOiAvLyAgNVxuXG4gICAgICBjYXNlIDU0OiAvLyAgNlxuXG4gICAgICBjYXNlIDU1OiAvLyAgN1xuXG4gICAgICBjYXNlIDU2OiAvLyAgOFxuXG4gICAgICBjYXNlIDU3OlxuICAgICAgICAvLyAgOVxuICAgICAgICByZXR1cm4gcmVhZE51bWJlcihzb3VyY2UsIHBvcywgY29kZSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDY1OiAvLyAgQVxuXG4gICAgICBjYXNlIDY2OiAvLyAgQlxuXG4gICAgICBjYXNlIDY3OiAvLyAgQ1xuXG4gICAgICBjYXNlIDY4OiAvLyAgRFxuXG4gICAgICBjYXNlIDY5OiAvLyAgRVxuXG4gICAgICBjYXNlIDcwOiAvLyAgRlxuXG4gICAgICBjYXNlIDcxOiAvLyAgR1xuXG4gICAgICBjYXNlIDcyOiAvLyAgSFxuXG4gICAgICBjYXNlIDczOiAvLyAgSVxuXG4gICAgICBjYXNlIDc0OiAvLyAgSlxuXG4gICAgICBjYXNlIDc1OiAvLyAgS1xuXG4gICAgICBjYXNlIDc2OiAvLyAgTFxuXG4gICAgICBjYXNlIDc3OiAvLyAgTVxuXG4gICAgICBjYXNlIDc4OiAvLyAgTlxuXG4gICAgICBjYXNlIDc5OiAvLyAgT1xuXG4gICAgICBjYXNlIDgwOiAvLyAgUFxuXG4gICAgICBjYXNlIDgxOiAvLyAgUVxuXG4gICAgICBjYXNlIDgyOiAvLyAgUlxuXG4gICAgICBjYXNlIDgzOiAvLyAgU1xuXG4gICAgICBjYXNlIDg0OiAvLyAgVFxuXG4gICAgICBjYXNlIDg1OiAvLyAgVVxuXG4gICAgICBjYXNlIDg2OiAvLyAgVlxuXG4gICAgICBjYXNlIDg3OiAvLyAgV1xuXG4gICAgICBjYXNlIDg4OiAvLyAgWFxuXG4gICAgICBjYXNlIDg5OiAvLyAgWVxuXG4gICAgICBjYXNlIDkwOiAvLyAgWlxuXG4gICAgICBjYXNlIDk1OiAvLyAgX1xuXG4gICAgICBjYXNlIDk3OiAvLyAgYVxuXG4gICAgICBjYXNlIDk4OiAvLyAgYlxuXG4gICAgICBjYXNlIDk5OiAvLyAgY1xuXG4gICAgICBjYXNlIDEwMDogLy8gZFxuXG4gICAgICBjYXNlIDEwMTogLy8gZVxuXG4gICAgICBjYXNlIDEwMjogLy8gZlxuXG4gICAgICBjYXNlIDEwMzogLy8gZ1xuXG4gICAgICBjYXNlIDEwNDogLy8gaFxuXG4gICAgICBjYXNlIDEwNTogLy8gaVxuXG4gICAgICBjYXNlIDEwNjogLy8galxuXG4gICAgICBjYXNlIDEwNzogLy8ga1xuXG4gICAgICBjYXNlIDEwODogLy8gbFxuXG4gICAgICBjYXNlIDEwOTogLy8gbVxuXG4gICAgICBjYXNlIDExMDogLy8gblxuXG4gICAgICBjYXNlIDExMTogLy8gb1xuXG4gICAgICBjYXNlIDExMjogLy8gcFxuXG4gICAgICBjYXNlIDExMzogLy8gcVxuXG4gICAgICBjYXNlIDExNDogLy8gclxuXG4gICAgICBjYXNlIDExNTogLy8gc1xuXG4gICAgICBjYXNlIDExNjogLy8gdFxuXG4gICAgICBjYXNlIDExNzogLy8gdVxuXG4gICAgICBjYXNlIDExODogLy8gdlxuXG4gICAgICBjYXNlIDExOTogLy8gd1xuXG4gICAgICBjYXNlIDEyMDogLy8geFxuXG4gICAgICBjYXNlIDEyMTogLy8geVxuXG4gICAgICBjYXNlIDEyMjpcbiAgICAgICAgLy8gelxuICAgICAgICByZXR1cm4gcmVhZE5hbWUoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvcywgdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkpO1xuICB9XG5cbiAgdmFyIGxpbmUgPSBsZXhlci5saW5lO1xuICB2YXIgY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDtcbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRU9GLCBib2R5TGVuZ3RoLCBib2R5TGVuZ3RoLCBsaW5lLCBjb2wsIHByZXYpO1xufVxuLyoqXG4gKiBSZXBvcnQgYSBtZXNzYWdlIHRoYXQgYW4gdW5leHBlY3RlZCBjaGFyYWN0ZXIgd2FzIGVuY291bnRlcmVkLlxuICovXG5cblxuZnVuY3Rpb24gdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkge1xuICBpZiAoY29kZSA8IDB4MDAyMCAmJiBjb2RlICE9PSAweDAwMDkgJiYgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBjb250YWluIHRoZSBpbnZhbGlkIGNoYXJhY3RlciBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDM5KSB7XG4gICAgLy8gJ1xuICAgIHJldHVybiAnVW5leHBlY3RlZCBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyIChcXCcpLCBkaWQgeW91IG1lYW4gdG8gdXNlIGEgZG91YmxlIHF1b3RlIChcIik/JztcbiAgfVxuXG4gIHJldHVybiBcIkNhbm5vdCBwYXJzZSB0aGUgdW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbn1cbi8qKlxuICogUmVhZHMgYSBjb21tZW50IHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLlxuICpcbiAqICNbXFx1MDAwOVxcdTAwMjAtXFx1RkZGRl0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkQ29tbWVudChzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuXG4gIGRvIHtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9IHdoaWxlICghaXNOYU4oY29kZSkgJiYgKCAvLyBTb3VyY2VDaGFyYWN0ZXIgYnV0IG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlID4gMHgwMDFmIHx8IGNvZGUgPT09IDB4MDAwOSkpO1xuXG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTU1FTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0ICsgMSwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmVhZHMgYSBudW1iZXIgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUsIGVpdGhlciBhIGZsb2F0XG4gKiBvciBhbiBpbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBkZWNpbWFsIHBvaW50IGFwcGVhcnMuXG4gKlxuICogSW50OiAgIC0/KDB8WzEtOV1bMC05XSopXG4gKiBGbG9hdDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oKEV8ZSkoK3wtKT9bMC05XSspP1xuICovXG5cblxuZnVuY3Rpb24gcmVhZE51bWJlcihzb3VyY2UsIHN0YXJ0LCBmaXJzdENvZGUsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQ7XG4gIHZhciBpc0Zsb2F0ID0gZmFsc2U7XG5cbiAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgLy8gLVxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDgpIHtcbiAgICAvLyAwXG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIHVuZXhwZWN0ZWQgZGlnaXQgYWZ0ZXIgMDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA0Nikge1xuICAgIC8vIC5cbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA2OSB8fCBjb2RlID09PSAxMDEpIHtcbiAgICAvLyBFIGVcbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXG4gICAgaWYgKGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1KSB7XG4gICAgICAvLyArIC1cbiAgICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSByZWFkRGlnaXRzKHNvdXJjZSwgcG9zaXRpb24sIGNvZGUpO1xuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICB9IC8vIE51bWJlcnMgY2Fubm90IGJlIGZvbGxvd2VkIGJ5IC4gb3IgTmFtZVN0YXJ0XG5cblxuICBpZiAoY29kZSA9PT0gNDYgfHwgaXNOYW1lU3RhcnQoY29kZSkpIHtcbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVG9rZW4oaXNGbG9hdCA/IFRva2VuS2luZC5GTE9BVCA6IFRva2VuS2luZC5JTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXcgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSBhZnRlciByZWFkaW5nIGRpZ2l0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWREaWdpdHMoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcblxuICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgLy8gMCAtIDlcbiAgICBkbyB7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH0gd2hpbGUgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nyk7IC8vIDAgLSA5XG5cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIGV4cGVjdGVkIGRpZ2l0IGJ1dCBnb3Q6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xufVxuLyoqXG4gKiBSZWFkcyBhIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIihbXlwiXFxcXFxcdTAwMEFcXHUwMDBEXXwoXFxcXCh1WzAtOWEtZkEtRl17NH18W1wiXFxcXC9iZm5ydF0pKSkqXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRTdHJpbmcoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMTtcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgdmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpICYmIC8vIG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgLy8gQ2xvc2luZyBRdW90ZSAoXCIpXG4gICAgaWYgKGNvZGUgPT09IDM0KSB7XG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlNUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMSwgbGluZSwgY29sLCBwcmV2LCB2YWx1ZSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgICsrcG9zaXRpb247XG5cbiAgICBpZiAoY29kZSA9PT0gOTIpIHtcbiAgICAgIC8vIFxcXG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uIC0gMSk7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblxuICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgdmFsdWUgKz0gJ1wiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHZhbHVlICs9ICcvJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgIHZhbHVlICs9ICdcXGInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXGYnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgIHZhbHVlICs9ICdcXG4nO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHQnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHVYWFhYXG4gICAgICAgICAgICB2YXIgY2hhckNvZGUgPSB1bmlDaGFyQ29kZShib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMiksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDMpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyA0KSk7XG5cbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDApIHtcbiAgICAgICAgICAgICAgdmFyIGludmFsaWRTZXF1ZW5jZSA9IGJvZHkuc2xpY2UocG9zaXRpb24gKyAxLCBwb3NpdGlvbiArIDUpO1xuICAgICAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXHVcIi5jb25jYXQoaW52YWxpZFNlcXVlbmNlLCBcIi5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXFwiLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICArK3Bvc2l0aW9uO1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBSZWFkcyBhIGJsb2NrIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIlwiXCIoXCI/XCI/KFxcXFxcIlwiXCJ8XFxcXCg/IT1cIlwiXCIpfFteXCJcXFxcXSkpKlwiXCJcIlxuICovXG5cblxuZnVuY3Rpb24gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldiwgbGV4ZXIpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAzO1xuICB2YXIgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICB2YXIgY29kZSA9IDA7XG4gIHZhciByYXdWYWx1ZSA9ICcnO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGJvZHkubGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkpIHtcbiAgICAvLyBDbG9zaW5nIFRyaXBsZS1RdW90ZSAoXCJcIlwiKVxuICAgIGlmIChjb2RlID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMikgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJMT0NLX1NUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMywgbGluZSwgY29sLCBwcmV2LCBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1ZhbHVlKSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIFN0cmluZzogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAvLyBuZXcgbGluZVxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAxMCkge1xuICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgKytsZXhlci5saW5lO1xuICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zaXRpb247XG4gICAgfSBlbHNlIGlmICggLy8gRXNjYXBlIFRyaXBsZS1RdW90ZSAoXFxcIlwiXCIpXG4gICAgY29kZSA9PT0gOTIgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSA9PT0gMzQpIHtcbiAgICAgIHJhd1ZhbHVlICs9IGJvZHkuc2xpY2UoY2h1bmtTdGFydCwgcG9zaXRpb24pICsgJ1wiXCJcIic7XG4gICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICArK3Bvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmb3VyIGhleGFkZWNpbWFsIGNoYXJzIHRvIHRoZSBpbnRlZ2VyIHRoYXQgdGhlXG4gKiBzdHJpbmcgcmVwcmVzZW50cy4gRm9yIGV4YW1wbGUsIHVuaUNoYXJDb2RlKCcwJywnMCcsJzAnLCdmJylcbiAqIHdpbGwgcmV0dXJuIDE1LCBhbmQgdW5pQ2hhckNvZGUoJzAnLCcwJywnZicsJ2YnKSByZXR1cm5zIDI1NS5cbiAqXG4gKiBSZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyIG9uIGVycm9yLCBpZiBhIGNoYXIgd2FzIGludmFsaWQuXG4gKlxuICogVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBub3RpbmcgdGhhdCBjaGFyMmhleCgpIHJldHVybnMgLTEgb24gZXJyb3IsXG4gKiB3aGljaCBtZWFucyB0aGUgcmVzdWx0IG9mIE9SaW5nIHRoZSBjaGFyMmhleCgpIHdpbGwgYWxzbyBiZSBuZWdhdGl2ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuaUNoYXJDb2RlKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGNoYXIyaGV4KGEpIDw8IDEyIHwgY2hhcjJoZXgoYikgPDwgOCB8IGNoYXIyaGV4KGMpIDw8IDQgfCBjaGFyMmhleChkKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBoZXggY2hhcmFjdGVyIHRvIGl0cyBpbnRlZ2VyIHZhbHVlLlxuICogJzAnIGJlY29tZXMgMCwgJzknIGJlY29tZXMgOVxuICogJ0EnIGJlY29tZXMgMTAsICdGJyBiZWNvbWVzIDE1XG4gKiAnYScgYmVjb21lcyAxMCwgJ2YnIGJlY29tZXMgMTVcbiAqXG4gKiBSZXR1cm5zIC0xIG9uIGVycm9yLlxuICovXG5cblxuZnVuY3Rpb24gY2hhcjJoZXgoYSkge1xuICByZXR1cm4gYSA+PSA0OCAmJiBhIDw9IDU3ID8gYSAtIDQ4IC8vIDAtOVxuICA6IGEgPj0gNjUgJiYgYSA8PSA3MCA/IGEgLSA1NSAvLyBBLUZcbiAgOiBhID49IDk3ICYmIGEgPD0gMTAyID8gYSAtIDg3IC8vIGEtZlxuICA6IC0xO1xufVxuLyoqXG4gKiBSZWFkcyBhbiBhbHBoYW51bWVyaWMgKyB1bmRlcnNjb3JlIG5hbWUgZnJvbSB0aGUgc291cmNlLlxuICpcbiAqIFtfQS1aYS16XVtfMC05QS1aYS16XSpcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROYW1lKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjb2RlID0gMDtcblxuICB3aGlsZSAocG9zaXRpb24gIT09IGJvZHlMZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAoY29kZSA9PT0gOTUgfHwgLy8gX1xuICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHwgLy8gMC05XG4gIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCAvLyBBLVpcbiAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLy8gYS16XG4gICkge1xuICAgICsrcG9zaXRpb247XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5OQU1FLCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn0gLy8gXyBBLVogYS16XG5cblxuZnVuY3Rpb24gaXNOYW1lU3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gOTUgfHwgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8IGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjI7XG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBsb2NhdGlvbiBpbiBhIFNvdXJjZS5cbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgU291cmNlIGFuZCBhIFVURi04IGNoYXJhY3RlciBvZmZzZXQsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBsaW5lIGFuZCBjb2x1bW4gYXMgYSBTb3VyY2VMb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKHNvdXJjZSwgcG9zaXRpb24pIHtcbiAgdmFyIGxpbmVSZWdleHAgPSAvXFxyXFxufFtcXG5cXHJdL2c7XG4gIHZhciBsaW5lID0gMTtcbiAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICsgMTtcbiAgdmFyIG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSBsaW5lUmVnZXhwLmV4ZWMoc291cmNlLmJvZHkpKSAmJiBtYXRjaC5pbmRleCA8IHBvc2l0aW9uKSB7XG4gICAgbGluZSArPSAxO1xuICAgIGNvbHVtbiA9IHBvc2l0aW9uICsgMSAtIChtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbmU6IGxpbmUsXG4gICAgY29sdW1uOiBjb2x1bW5cbiAgfTtcbn1cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gXCIuL2tpbmRzLm1qc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBTb3VyY2UsIGlzU291cmNlIH0gZnJvbSBcIi4vc291cmNlLm1qc1wiO1xuaW1wb3J0IHsgRGlyZWN0aXZlTG9jYXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVMb2NhdGlvbi5tanNcIjtcbmltcG9ydCB7IExleGVyLCBpc1B1bmN0dWF0b3JUb2tlbktpbmQgfSBmcm9tIFwiLi9sZXhlci5tanNcIjtcbi8qKlxuICogQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIGNvbnRyb2wgcGFyc2VyIGJlaGF2aW9yXG4gKi9cblxuLyoqXG4gKiBHaXZlbiBhIEdyYXBoUUwgc291cmNlLCBwYXJzZXMgaXQgaW50byBhIERvY3VtZW50LlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRG9jdW1lbnQoKTtcbn1cbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcgY29udGFpbmluZyBhIEdyYXBoUUwgdmFsdWUgKGV4LiBgWzQyXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB2YWx1ZS5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgd2l0aGluIHRvb2xzIHRoYXQgb3BlcmF0ZSB1cG9uIEdyYXBoUUwgVmFsdWVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdmFsdWVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFsdWUoc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHNvdXJjZSwgb3B0aW9ucyk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuU09GKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VyLnBhcnNlVmFsdWVMaXRlcmFsKGZhbHNlKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIFR5cGUgKGV4LiBgW0ludCFdYCksIHBhcnNlIHRoZSBBU1QgZm9yXG4gKiB0aGF0IHR5cGUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFR5cGVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdHlwZUZyb21BU1QoKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB0eXBlID0gcGFyc2VyLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkVPRik7XG4gIHJldHVybiB0eXBlO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGV4cG9ydGVkIG9ubHkgdG8gYXNzaXN0IHBlb3BsZSBpbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHBhcnNlcnNcbiAqIHdpdGhvdXQgZHVwbGljYXRpbmcgdG9vIG11Y2ggY29kZSBhbmQgc2hvdWxkIGJlIHVzZWQgb25seSBhcyBsYXN0IHJlc29ydCBmb3IgY2FzZXNcbiAqIHN1Y2ggYXMgZXhwZXJpbWVudGFsIHN5bnRheCBvciBpZiBjZXJ0YWluIGZlYXR1cmVzIGNvdWxkIG5vdCBiZSBjb250cmlidXRlZCB1cHN0cmVhbS5cbiAqXG4gKiBJdCBpcyBzdGlsbCBwYXJ0IG9mIHRoZSBpbnRlcm5hbCBBUEkgYW5kIGlzIHZlcnNpb25lZCwgc28gYW55IGNoYW5nZXMgdG8gaXQgYXJlIG5ldmVyXG4gKiBjb25zaWRlcmVkIGJyZWFraW5nIGNoYW5nZXMuIElmIHlvdSBzdGlsbCBuZWVkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdmVyc2lvbnMgb2YgdGhlXG4gKiBsaWJyYXJ5LCBwbGVhc2UgdXNlIHRoZSBgdmVyc2lvbkluZm9gIHZhcmlhYmxlIGZvciB2ZXJzaW9uIGRldGVjdGlvbi5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgdmFyIFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgc291cmNlT2JqID0gaXNTb3VyY2Uoc291cmNlKSA/IHNvdXJjZSA6IG5ldyBTb3VyY2Uoc291cmNlKTtcbiAgICB0aGlzLl9sZXhlciA9IG5ldyBMZXhlcihzb3VyY2VPYmopO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG5hbWUgbGV4IHRva2VuIGludG8gYSBuYW1lIHBhcnNlIG5vZGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFBhcnNlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZSgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5OQU1FLFxuICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERvY3VtZW50IHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERvY3VtZW50IDogRGVmaW5pdGlvbitcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEb2N1bWVudCA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRE9DVU1FTlQsXG4gICAgICBkZWZpbml0aW9uczogdGhpcy5tYW55KFRva2VuS2luZC5TT0YsIHRoaXMucGFyc2VEZWZpbml0aW9uLCBUb2tlbktpbmQuRU9GKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGVmaW5pdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGVmaW5pdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1FeHRlbnNpb25cbiAgICpcbiAgICogRXhlY3V0YWJsZURlZmluaXRpb24gOlxuICAgKiAgIC0gT3BlcmF0aW9uRGVmaW5pdGlvblxuICAgKiAgIC0gRnJhZ21lbnREZWZpbml0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGVmaW5pdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgc3dpdGNoICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgY2FzZSAnc3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdmcmFnbWVudCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGcmFnbWVudERlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdkaXJlY3RpdmUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdleHRlbmQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgT3BlcmF0aW9ucyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBPcGVyYXRpb25EZWZpbml0aW9uIDpcbiAgICogIC0gU2VsZWN0aW9uU2V0XG4gICAqICAtIE9wZXJhdGlvblR5cGUgTmFtZT8gVmFyaWFibGVEZWZpbml0aW9ucz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogW10sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGUgOiBvbmUgb2YgcXVlcnkgbXV0YXRpb24gc3Vic2NyaXB0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uVHlwZSA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZSgpIHtcbiAgICB2YXIgb3BlcmF0aW9uVG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcblxuICAgIHN3aXRjaCAob3BlcmF0aW9uVG9rZW4udmFsdWUpIHtcbiAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgcmV0dXJuICdxdWVyeSc7XG5cbiAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgcmV0dXJuICdtdXRhdGlvbic7XG5cbiAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgIHJldHVybiAnc3Vic2NyaXB0aW9uJztcbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQob3BlcmF0aW9uVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb25zIDogKCBWYXJpYWJsZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb25zID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuUEFSRU5fTCwgdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb24gOiBWYXJpYWJsZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRV9ERUZJTklUSU9OLFxuICAgICAgdmFyaWFibGU6IHRoaXMucGFyc2VWYXJpYWJsZSgpLFxuICAgICAgdHlwZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKSksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuRVFVQUxTKSA/IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGUgOiAkIE5hbWVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZSA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuRE9MTEFSKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNlbGVjdGlvblNldCA6IHsgU2VsZWN0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gcGFyc2VTZWxlY3Rpb25TZXQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0VMRUNUSU9OX1NFVCxcbiAgICAgIHNlbGVjdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZVNlbGVjdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb24gOlxuICAgKiAgIC0gRmllbGRcbiAgICogICAtIEZyYWdtZW50U3ByZWFkXG4gICAqICAgLSBJbmxpbmVGcmFnbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNQUkVBRCkgPyB0aGlzLnBhcnNlRnJhZ21lbnQoKSA6IHRoaXMucGFyc2VGaWVsZCgpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZCA6IEFsaWFzPyBOYW1lIEFyZ3VtZW50cz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0P1xuICAgKlxuICAgKiBBbGlhcyA6IE5hbWUgOlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkID0gZnVuY3Rpb24gcGFyc2VGaWVsZCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZU9yQWxpYXMgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBhbGlhcztcbiAgICB2YXIgbmFtZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkNPTE9OKSkge1xuICAgICAgYWxpYXMgPSBuYW1lT3JBbGlhcztcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZU9yQWxpYXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTEQsXG4gICAgICBhbGlhczogYWxpYXMsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGZhbHNlKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSA/IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzW0NvbnN0XSA6ICggQXJndW1lbnRbP0NvbnN0XSsgKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGlzQ29uc3QpIHtcbiAgICB2YXIgaXRlbSA9IGlzQ29uc3QgPyB0aGlzLnBhcnNlQ29uc3RBcmd1bWVudCA6IHRoaXMucGFyc2VBcmd1bWVudDtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIGl0ZW0sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlQ29uc3RBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQ29uc3RBcmd1bWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICB2YWx1ZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0cnVlKSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgRnJhZ21lbnRzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIENvcnJlc3BvbmRzIHRvIGJvdGggRnJhZ21lbnRTcHJlYWQgYW5kIElubGluZUZyYWdtZW50IGluIHRoZSBzcGVjLlxuICAgKlxuICAgKiBGcmFnbWVudFNwcmVhZCA6IC4uLiBGcmFnbWVudE5hbWUgRGlyZWN0aXZlcz9cbiAgICpcbiAgICogSW5saW5lRnJhZ21lbnQgOiAuLi4gVHlwZUNvbmRpdGlvbj8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnQgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNQUkVBRCk7XG4gICAgdmFyIGhhc1R5cGVDb25kaXRpb24gPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnb24nKTtcblxuICAgIGlmICghaGFzVHlwZUNvbmRpdGlvbiAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLk5BTUUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX1NQUkVBRCxcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOTElORV9GUkFHTUVOVCxcbiAgICAgIHR5cGVDb25kaXRpb246IGhhc1R5cGVDb25kaXRpb24gPyB0aGlzLnBhcnNlTmFtZWRUeXBlKCkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnREZWZpbml0aW9uIDpcbiAgICogICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKlxuICAgKiBUeXBlQ29uZGl0aW9uIDogTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudERlZmluaXRpb24oKSB7XG4gICAgdmFyIF90aGlzJF9vcHRpb25zO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdmcmFnbWVudCcpOyAvLyBFeHBlcmltZW50YWwgc3VwcG9ydCBmb3IgZGVmaW5pbmcgdmFyaWFibGVzIHdpdGhpbiBmcmFnbWVudHMgY2hhbmdlc1xuICAgIC8vIHRoZSBncmFtbWFyIG9mIEZyYWdtZW50RGVmaW5pdGlvbjpcbiAgICAvLyAgIC0gZnJhZ21lbnQgRnJhZ21lbnROYW1lIFZhcmlhYmxlRGVmaW5pdGlvbnM/IG9uIFR5cGVDb25kaXRpb24gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9ucy5leHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgICB0eXBlQ29uZGl0aW9uOiAodGhpcy5leHBlY3RLZXl3b3JkKCdvbicpLCB0aGlzLnBhcnNlTmFtZWRUeXBlKCkpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5GUkFHTUVOVF9ERUZJTklUSU9OLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBGcmFnbWVudE5hbWUgOiBOYW1lIGJ1dCBub3QgYG9uYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50TmFtZSA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnROYW1lKCkge1xuICAgIGlmICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSA9PT0gJ29uJykge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyc2VOYW1lKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVmFsdWVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbfkNvbnN0XSBWYXJpYWJsZVxuICAgKiAgIC0gSW50VmFsdWVcbiAgICogICAtIEZsb2F0VmFsdWVcbiAgICogICAtIFN0cmluZ1ZhbHVlXG4gICAqICAgLSBCb29sZWFuVmFsdWVcbiAgICogICAtIE51bGxWYWx1ZVxuICAgKiAgIC0gRW51bVZhbHVlXG4gICAqICAgLSBMaXN0VmFsdWVbP0NvbnN0XVxuICAgKiAgIC0gT2JqZWN0VmFsdWVbP0NvbnN0XVxuICAgKlxuICAgKiBCb29sZWFuVmFsdWUgOiBvbmUgb2YgYHRydWVgIGBmYWxzZWBcbiAgICpcbiAgICogTnVsbFZhbHVlIDogYG51bGxgXG4gICAqXG4gICAqIEVudW1WYWx1ZSA6IE5hbWUgYnV0IG5vdCBgdHJ1ZWAsIGBmYWxzZWAgb3IgYG51bGxgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFsdWVMaXRlcmFsID0gZnVuY3Rpb24gcGFyc2VWYWx1ZUxpdGVyYWwoaXNDb25zdCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgc3dpdGNoICh0b2tlbi5raW5kKSB7XG4gICAgICBjYXNlIFRva2VuS2luZC5CUkFDS0VUX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGlzdChpc0NvbnN0KTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0VfTDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLklOVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5JTlQsXG4gICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkZMT0FUOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBLaW5kLkZMT0FULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5TVFJJTkc6XG4gICAgICBjYXNlIFRva2VuS2luZC5CTE9DS19TVFJJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5OQU1FOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLkJPT0xFQU4sXG4gICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuTlVMTCxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5FTlVNLFxuICAgICAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkRPTExBUjpcbiAgICAgICAgaWYgKCFpc0NvbnN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYXJpYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlU3RyaW5nTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlU3RyaW5nTGl0ZXJhbCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNUUklORyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGJsb2NrOiB0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBMaXN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIFsgXVxuICAgKiAgIC0gWyBWYWx1ZVs/Q29uc3RdKyBdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTGlzdCA9IGZ1bmN0aW9uIHBhcnNlTGlzdChpc0NvbnN0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5MSVNULFxuICAgICAgdmFsdWVzOiB0aGlzLmFueShUb2tlbktpbmQuQlJBQ0tFVF9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0tFVF9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIHsgfVxuICAgKiAgIC0geyBPYmplY3RGaWVsZFs/Q29uc3RdKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VPYmplY3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uIGl0ZW0oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVCxcbiAgICAgIGZpZWxkczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIGl0ZW0sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0RmllbGRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX0ZJRUxELFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERpcmVjdGl2ZXMgc2VjdGlvbi5cblxuICAvKipcbiAgICogRGlyZWN0aXZlc1tDb25zdF0gOiBEaXJlY3RpdmVbP0NvbnN0XStcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVzID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGlzQ29uc3QpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayhUb2tlbktpbmQuQVQpKSB7XG4gICAgICBkaXJlY3RpdmVzLnB1c2godGhpcy5wYXJzZURpcmVjdGl2ZShpc0NvbnN0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZVtDb25zdF0gOiBAIE5hbWUgQXJndW1lbnRzWz9Db25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5ESVJFQ1RJVkUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGUgOlxuICAgKiAgIC0gTmFtZWRUeXBlXG4gICAqICAgLSBMaXN0VHlwZVxuICAgKiAgIC0gTm9uTnVsbFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlUmVmZXJlbmNlID0gZnVuY3Rpb24gcGFyc2VUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciB0eXBlO1xuXG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MKSkge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IpO1xuICAgICAgdHlwZSA9IHtcbiAgICAgICAga2luZDogS2luZC5MSVNUX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJBTkcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk5PTl9OVUxMX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIC8qKlxuICAgKiBOYW1lZFR5cGUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZWRUeXBlID0gZnVuY3Rpb24gcGFyc2VOYW1lZFR5cGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRURfVFlQRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVHlwZSBEZWZpbml0aW9uIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1EZWZpbml0aW9uIDpcbiAgICogICAtIFNjaGVtYURlZmluaXRpb25cbiAgICogICAtIFR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBEaXJlY3RpdmVEZWZpbml0aW9uXG4gICAqXG4gICAqIFR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZURlZmluaXRpb25cbiAgICogICAtIFVuaW9uVHlwZURlZmluaXRpb25cbiAgICogICAtIEVudW1UeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpIHtcbiAgICAvLyBNYW55IGRlZmluaXRpb25zIGJlZ2luIHdpdGggYSBkZXNjcmlwdGlvbiBhbmQgcmVxdWlyZSBhIGxvb2thaGVhZC5cbiAgICB2YXIga2V5d29yZFRva2VuID0gdGhpcy5wZWVrRGVzY3JpcHRpb24oKSA/IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpIDogdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAoa2V5d29yZFRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FKSB7XG4gICAgICBzd2l0Y2ggKGtleXdvcmRUb2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NoZW1hRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnRlcmZhY2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURpcmVjdGl2ZURlZmluaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoa2V5d29yZFRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ucGVla0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGVla0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNUUklORykgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5CTE9DS19TVFJJTkcpO1xuICB9XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiA6IFN0cmluZ1ZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiBwYXJzZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NoZW1hRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjaGVtYScpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIG9wZXJhdGlvblR5cGVzID0gdGhpcy5tYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBvcGVyYXRpb25UeXBlczogb3BlcmF0aW9uVHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uIDogT3BlcmF0aW9uVHlwZSA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgb3BlcmF0aW9uID0gdGhpcy5wYXJzZU9wZXJhdGlvblR5cGUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlTmFtZWRUeXBlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NhbGFyJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgRGVzY3JpcHRpb24/XG4gICAqICAgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEltcGxlbWVudHNJbnRlcmZhY2VzIDpcbiAgICogICAtIGltcGxlbWVudHMgYCZgPyBOYW1lZFR5cGVcbiAgICogICAtIEltcGxlbWVudHNJbnRlcmZhY2VzICYgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMgPSBmdW5jdGlvbiBwYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczI7XG5cbiAgICBpZiAoIXRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdpbXBsZW1lbnRzJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczIgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMi5hbGxvd0xlZ2FjeVNETEltcGxlbWVudHNJbnRlcmZhY2VzKSA9PT0gdHJ1ZSkge1xuICAgICAgdmFyIHR5cGVzID0gW107IC8vIE9wdGlvbmFsIGxlYWRpbmcgYW1wZXJzYW5kXG5cbiAgICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQU1QKTtcblxuICAgICAgZG8ge1xuICAgICAgICB0eXBlcy5wdXNoKHRoaXMucGFyc2VOYW1lZFR5cGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCkgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSk7XG5cbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5BTVAsIHRoaXMucGFyc2VOYW1lZFR5cGUpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZHNEZWZpbml0aW9uIDogeyBGaWVsZERlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGaWVsZHNEZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczM7XG5cbiAgICAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgdGhlIFNETD9cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMy5hbGxvd0xlZ2FjeVNETEVtcHR5RmllbGRzKSA9PT0gdHJ1ZSAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpICYmIHRoaXMuX2xleGVyLmxvb2thaGVhZCgpLmtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZUZpZWxkRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZERlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gOiBUeXBlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGREZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTERfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBhcmd1bWVudHM6IGFyZ3MsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzRGVmaW5pdGlvbiA6ICggSW5wdXRWYWx1ZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudERlZnMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50RGVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIElucHV0VmFsdWVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIDogVHlwZSBEZWZhdWx0VmFsdWU/IERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0VmFsdWVEZWYgPSBmdW5jdGlvbiBwYXJzZUlucHV0VmFsdWVEZWYoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICB2YXIgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBpbnRlcmZhY2UgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gVW5pb25NZW1iZXJUeXBlcz9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndW5pb24nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdHlwZXMgPSB0aGlzLnBhcnNlVW5pb25NZW1iZXJUeXBlcygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvbk1lbWJlclR5cGVzIDpcbiAgICogICAtID0gYHxgPyBOYW1lZFR5cGVcbiAgICogICAtIFVuaW9uTWVtYmVyVHlwZXMgfCBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvbk1lbWJlclR5cGVzID0gZnVuY3Rpb24gcGFyc2VVbmlvbk1lbWJlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLmRlbGltaXRlZE1hbnkoVG9rZW5LaW5kLlBJUEUsIHRoaXMucGFyc2VOYW1lZFR5cGUpIDogW107XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2VudW0nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVzRGVmaW5pdGlvbiA6IHsgRW51bVZhbHVlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIEVudW1WYWx1ZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gRW51bVZhbHVlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1ZBTFVFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW5wdXQgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gSW5wdXRGaWVsZHNEZWZpbml0aW9uP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnB1dCcpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0RmllbGRzRGVmaW5pdGlvbiA6IHsgSW5wdXRWYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1FeHRlbnNpb24gOlxuICAgKiAgIC0gU2NoZW1hRXh0ZW5zaW9uXG4gICAqICAgLSBUeXBlRXh0ZW5zaW9uXG4gICAqXG4gICAqIFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gU2NhbGFyVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gT2JqZWN0VHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gVW5pb25UeXBlRXh0ZW5zaW9uXG4gICAqICAgLSBFbnVtVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKSB7XG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF0/IHsgT3BlcmF0aW9uVHlwZURlZmluaXRpb24rIH1cbiAgICogIC0gZXh0ZW5kIHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBvcGVyYXRpb25UeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDSEVNQV9FWFRFTlNJT04sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTY2FsYXJUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBzY2FsYXIgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0FMQVJfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb25cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGludGVyZmFjZXMubGVuZ3RoID09PSAwICYmIGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvblR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXNcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB0eXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB0eXBlczogdHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBlbnVtIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEVudW1WYWx1ZXNEZWZpbml0aW9uXG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGRpcmVjdGl2ZSBAIE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gYHJlcGVhdGFibGVgPyBvbiBEaXJlY3RpdmVMb2NhdGlvbnNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZGlyZWN0aXZlJyk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQVQpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB2YXIgcmVwZWF0YWJsZSA9IHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdyZXBlYXRhYmxlJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdvbicpO1xuICAgIHZhciBsb2NhdGlvbnMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgcmVwZWF0YWJsZTogcmVwZWF0YWJsZSxcbiAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbnMgOlxuICAgKiAgIC0gYHxgPyBEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlTG9jYXRpb25zIHwgRGlyZWN0aXZlTG9jYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMgPSBmdW5jdGlvbiBwYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb24pO1xuICB9XG4gIC8qXG4gICAqIERpcmVjdGl2ZUxvY2F0aW9uIDpcbiAgICogICAtIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvbiA6IG9uZSBvZlxuICAgKiAgIGBRVUVSWWBcbiAgICogICBgTVVUQVRJT05gXG4gICAqICAgYFNVQlNDUklQVElPTmBcbiAgICogICBgRklFTERgXG4gICAqICAgYEZSQUdNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYEZSQUdNRU5UX1NQUkVBRGBcbiAgICogICBgSU5MSU5FX0ZSQUdNRU5UYFxuICAgKlxuICAgKiBUeXBlU3lzdGVtRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgU0NIRU1BYFxuICAgKiAgIGBTQ0FMQVJgXG4gICAqICAgYE9CSkVDVGBcbiAgICogICBgRklFTERfREVGSU5JVElPTmBcbiAgICogICBgQVJHVU1FTlRfREVGSU5JVElPTmBcbiAgICogICBgSU5URVJGQUNFYFxuICAgKiAgIGBVTklPTmBcbiAgICogICBgRU5VTWBcbiAgICogICBgRU5VTV9WQUxVRWBcbiAgICogICBgSU5QVVRfT0JKRUNUYFxuICAgKiAgIGBJTlBVVF9GSUVMRF9ERUZJTklUSU9OYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG5cbiAgICBpZiAoRGlyZWN0aXZlTG9jYXRpb25bbmFtZS52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKHN0YXJ0KTtcbiAgfSAvLyBDb3JlIHBhcnNpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2F0aW9uIG9iamVjdCwgdXNlZCB0byBpZGVudGlmeSB0aGUgcGxhY2UgaW4gdGhlIHNvdXJjZSB0aGF0IGNyZWF0ZWQgYSBnaXZlbiBwYXJzZWQgb2JqZWN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5sb2MgPSBmdW5jdGlvbiBsb2Moc3RhcnRUb2tlbikge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczQ7XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczQgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zNC5ub0xvY2F0aW9uKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihzdGFydFRva2VuLCB0aGlzLl9sZXhlci5sYXN0VG9rZW4sIHRoaXMuX2xleGVyLnNvdXJjZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBuZXh0IHRva2VuIGlzIG9mIGEgZ2l2ZW4ga2luZFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wZWVrID0gZnVuY3Rpb24gcGVlayhraW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xleGVyLnRva2VuLmtpbmQgPT09IGtpbmQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdFRva2VuID0gZnVuY3Rpb24gZXhwZWN0VG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuS2luZERlc2Moa2luZCksIFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdE9wdGlvbmFsVG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgYWR2YW5jZSB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0S2V5d29yZCA9IGZ1bmN0aW9uIGV4cGVjdEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJFeHBlY3RlZCBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCIsIGZvdW5kIFwiKS5jb25jYXQoZ2V0VG9rZW5EZXNjKHRva2VuKSwgXCIuXCIpKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgcmV0dXJuIFwidHJ1ZVwiIGFmdGVyIGFkdmFuY2luZyB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCByZXR1cm4gXCJmYWxzZVwiLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RPcHRpb25hbEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFuIGVycm9yIHdoZW4gYW4gdW5leHBlY3RlZCBsZXhlZCB0b2tlbiBpcyBlbmNvdW50ZXJlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5leHBlY3RlZCA9IGZ1bmN0aW9uIHVuZXhwZWN0ZWQoYXRUb2tlbikge1xuICAgIHZhciB0b2tlbiA9IGF0VG9rZW4gIT09IG51bGwgJiYgYXRUb2tlbiAhPT0gdm9pZCAwID8gYXRUb2tlbiA6IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIlVuZXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwb3NzaWJseSBlbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hbnkgPSBmdW5jdGlvbiBhbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIHRoaXMuZXhwZWN0VG9rZW4ob3BlbktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgd2hpbGUgKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oY2xvc2VLaW5kKSkge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIEl0IGNhbiBiZSBlbXB0eSBvbmx5IGlmIG9wZW4gdG9rZW4gaXMgbWlzc2luZyBvdGhlcndpc2UgaXQgd2lsbCBhbHdheXMgcmV0dXJuIG5vbi1lbXB0eSBsaXN0XG4gICAqIHRoYXQgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vcHRpb25hbE1hbnkgPSBmdW5jdGlvbiBvcHRpb25hbE1hbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4ob3BlbktpbmQpKSB7XG4gICAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgICAgZG8ge1xuICAgICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBiZWdpbnMgd2l0aCBhIGxleCB0b2tlbiBvZiBvcGVuS2luZCBhbmQgZW5kcyB3aXRoIGEgbGV4IHRva2VuIG9mIGNsb3NlS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgdGhlIGNsb3NpbmcgdG9rZW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1hbnkgPSBmdW5jdGlvbiBtYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBtYXkgYmVnaW4gd2l0aCBhIGxleCB0b2tlbiBvZiBkZWxpbWl0ZXJLaW5kIGZvbGxvd2VkIGJ5IGl0ZW1zIHNlcGFyYXRlZCBieSBsZXggdG9rZW5zIG9mIHRva2VuS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxpbWl0ZWRNYW55ID0gZnVuY3Rpb24gZGVsaW1pdGVkTWFueShkZWxpbWl0ZXJLaW5kLCBwYXJzZUZuKSB7XG4gICAgdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGRlbGltaXRlcktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcbn0oKTtcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cbmZ1bmN0aW9uIGdldFRva2VuRGVzYyh0b2tlbikge1xuICB2YXIgdmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgcmV0dXJuIGdldFRva2VuS2luZERlc2ModG9rZW4ua2luZCkgKyAodmFsdWUgIT0gbnVsbCA/IFwiIFxcXCJcIi5jb25jYXQodmFsdWUsIFwiXFxcIlwiKSA6ICcnKTtcbn1cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBraW5kIGFzIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2tlbktpbmREZXNjKGtpbmQpIHtcbiAgcmV0dXJuIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSA/IFwiXFxcIlwiLmNvbmNhdChraW5kLCBcIlxcXCJcIikgOiBraW5kO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbi5tanNcIjtcbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiBwcmludFNvdXJjZUxvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgZ2V0TG9jYXRpb24obG9jYXRpb24uc291cmNlLCBsb2NhdGlvbi5zdGFydCkpO1xufVxuLyoqXG4gKiBSZW5kZXIgYSBoZWxwZnVsIGRlc2NyaXB0aW9uIG9mIHRoZSBsb2NhdGlvbiBpbiB0aGUgR3JhcGhRTCBTb3VyY2UgZG9jdW1lbnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U291cmNlTG9jYXRpb24oc291cmNlLCBzb3VyY2VMb2NhdGlvbikge1xuICB2YXIgZmlyc3RMaW5lQ29sdW1uT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiAtIDE7XG4gIHZhciBib2R5ID0gd2hpdGVzcGFjZShmaXJzdExpbmVDb2x1bW5PZmZzZXQpICsgc291cmNlLmJvZHk7XG4gIHZhciBsaW5lSW5kZXggPSBzb3VyY2VMb2NhdGlvbi5saW5lIC0gMTtcbiAgdmFyIGxpbmVPZmZzZXQgPSBzb3VyY2UubG9jYXRpb25PZmZzZXQubGluZSAtIDE7XG4gIHZhciBsaW5lTnVtID0gc291cmNlTG9jYXRpb24ubGluZSArIGxpbmVPZmZzZXQ7XG4gIHZhciBjb2x1bW5PZmZzZXQgPSBzb3VyY2VMb2NhdGlvbi5saW5lID09PSAxID8gZmlyc3RMaW5lQ29sdW1uT2Zmc2V0IDogMDtcbiAgdmFyIGNvbHVtbk51bSA9IHNvdXJjZUxvY2F0aW9uLmNvbHVtbiArIGNvbHVtbk9mZnNldDtcbiAgdmFyIGxvY2F0aW9uU3RyID0gXCJcIi5jb25jYXQoc291cmNlLm5hbWUsIFwiOlwiKS5jb25jYXQobGluZU51bSwgXCI6XCIpLmNvbmNhdChjb2x1bW5OdW0sIFwiXFxuXCIpO1xuICB2YXIgbGluZXMgPSBib2R5LnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7XG4gIHZhciBsb2NhdGlvbkxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdOyAvLyBTcGVjaWFsIGNhc2UgZm9yIG1pbmlmaWVkIGRvY3VtZW50c1xuXG4gIGlmIChsb2NhdGlvbkxpbmUubGVuZ3RoID4gMTIwKSB7XG4gICAgdmFyIHN1YkxpbmVJbmRleCA9IE1hdGguZmxvb3IoY29sdW1uTnVtIC8gODApO1xuICAgIHZhciBzdWJMaW5lQ29sdW1uTnVtID0gY29sdW1uTnVtICUgODA7XG4gICAgdmFyIHN1YkxpbmVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uTGluZS5sZW5ndGg7IGkgKz0gODApIHtcbiAgICAgIHN1YkxpbmVzLnB1c2gobG9jYXRpb25MaW5lLnNsaWNlKGksIGkgKyA4MCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbW1wiXCIuY29uY2F0KGxpbmVOdW0pLCBzdWJMaW5lc1swXV1dLmNvbmNhdChzdWJMaW5lcy5zbGljZSgxLCBzdWJMaW5lSW5kZXggKyAxKS5tYXAoZnVuY3Rpb24gKHN1YkxpbmUpIHtcbiAgICAgIHJldHVybiBbJycsIHN1YkxpbmVdO1xuICAgIH0pLCBbWycgJywgd2hpdGVzcGFjZShzdWJMaW5lQ29sdW1uTnVtIC0gMSkgKyAnXiddLCBbJycsIHN1YkxpbmVzW3N1YkxpbmVJbmRleCArIDFdXV0pKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbLy8gTGluZXMgc3BlY2lmaWVkIGxpa2UgdGhpczogW1wicHJlZml4XCIsIFwic3RyaW5nXCJdLFxuICBbXCJcIi5jb25jYXQobGluZU51bSAtIDEpLCBsaW5lc1tsaW5lSW5kZXggLSAxXV0sIFtcIlwiLmNvbmNhdChsaW5lTnVtKSwgbG9jYXRpb25MaW5lXSwgWycnLCB3aGl0ZXNwYWNlKGNvbHVtbk51bSAtIDEpICsgJ14nXSwgW1wiXCIuY29uY2F0KGxpbmVOdW0gKyAxKSwgbGluZXNbbGluZUluZGV4ICsgMV1dXSk7XG59XG5cbmZ1bmN0aW9uIHByaW50UHJlZml4ZWRMaW5lcyhsaW5lcykge1xuICB2YXIgZXhpc3RpbmdMaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfID0gX3JlZlswXSxcbiAgICAgICAgbGluZSA9IF9yZWZbMV07XG4gICAgcmV0dXJuIGxpbmUgIT09IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHZhciBwYWRMZW4gPSBNYXRoLm1heC5hcHBseShNYXRoLCBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuIHByZWZpeC5sZW5ndGg7XG4gIH0pKTtcbiAgcmV0dXJuIGV4aXN0aW5nTGluZXMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBwcmVmaXggPSBfcmVmM1swXSxcbiAgICAgICAgbGluZSA9IF9yZWYzWzFdO1xuICAgIHJldHVybiBsZWZ0UGFkKHBhZExlbiwgcHJlZml4KSArIChsaW5lID8gJyB8ICcgKyBsaW5lIDogJyB8Jyk7XG4gIH0pLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGxlbikge1xuICByZXR1cm4gQXJyYXkobGVuICsgMSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKGxlbiwgc3RyKSB7XG4gIHJldHVybiB3aGl0ZXNwYWNlKGxlbiAtIHN0ci5sZW5ndGgpICsgc3RyO1xufVxuIiwiaW1wb3J0IHsgdmlzaXQgfSBmcm9tIFwiLi92aXNpdG9yLm1qc1wiO1xuaW1wb3J0IHsgcHJpbnRCbG9ja1N0cmluZyB9IGZyb20gXCIuL2Jsb2NrU3RyaW5nLm1qc1wiO1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU1QgaW50byBhIHN0cmluZywgdXNpbmcgb25lIHNldCBvZiByZWFzb25hYmxlXG4gKiBmb3JtYXR0aW5nIHJ1bGVzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludChhc3QpIHtcbiAgcmV0dXJuIHZpc2l0KGFzdCwge1xuICAgIGxlYXZlOiBwcmludERvY0FTVFJlZHVjZXJcbiAgfSk7XG59XG52YXIgTUFYX0xJTkVfTEVOR1RIID0gODA7IC8vIFRPRE86IHByb3ZpZGUgYmV0dGVyIHR5cGUgY292ZXJhZ2UgaW4gZnV0dXJlXG5cbnZhciBwcmludERvY0FTVFJlZHVjZXIgPSB7XG4gIE5hbWU6IGZ1bmN0aW9uIE5hbWUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnZhbHVlO1xuICB9LFxuICBWYXJpYWJsZTogZnVuY3Rpb24gVmFyaWFibGUobm9kZSkge1xuICAgIHJldHVybiAnJCcgKyBub2RlLm5hbWU7XG4gIH0sXG4gIC8vIERvY3VtZW50XG4gIERvY3VtZW50OiBmdW5jdGlvbiBEb2N1bWVudChub2RlKSB7XG4gICAgcmV0dXJuIGpvaW4obm9kZS5kZWZpbml0aW9ucywgJ1xcblxcbicpICsgJ1xcbic7XG4gIH0sXG4gIE9wZXJhdGlvbkRlZmluaXRpb246IGZ1bmN0aW9uIE9wZXJhdGlvbkRlZmluaXRpb24obm9kZSkge1xuICAgIHZhciBvcCA9IG5vZGUub3BlcmF0aW9uO1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHZhciB2YXJEZWZzID0gd3JhcCgnKCcsIGpvaW4obm9kZS52YXJpYWJsZURlZmluaXRpb25zLCAnLCAnKSwgJyknKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IGpvaW4obm9kZS5kaXJlY3RpdmVzLCAnICcpO1xuICAgIHZhciBzZWxlY3Rpb25TZXQgPSBub2RlLnNlbGVjdGlvblNldDsgLy8gQW5vbnltb3VzIHF1ZXJpZXMgd2l0aCBubyBkaXJlY3RpdmVzIG9yIHZhcmlhYmxlIGRlZmluaXRpb25zIGNhbiB1c2VcbiAgICAvLyB0aGUgcXVlcnkgc2hvcnQgZm9ybS5cblxuICAgIHJldHVybiAhbmFtZSAmJiAhZGlyZWN0aXZlcyAmJiAhdmFyRGVmcyAmJiBvcCA9PT0gJ3F1ZXJ5JyA/IHNlbGVjdGlvblNldCA6IGpvaW4oW29wLCBqb2luKFtuYW1lLCB2YXJEZWZzXSksIGRpcmVjdGl2ZXMsIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG4gIFZhcmlhYmxlRGVmaW5pdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWZpbml0aW9uKF9yZWYpIHtcbiAgICB2YXIgdmFyaWFibGUgPSBfcmVmLnZhcmlhYmxlLFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gdmFyaWFibGUgKyAnOiAnICsgdHlwZSArIHdyYXAoJyA9ICcsIGRlZmF1bHRWYWx1ZSkgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSxcbiAgU2VsZWN0aW9uU2V0OiBmdW5jdGlvbiBTZWxlY3Rpb25TZXQoX3JlZjIpIHtcbiAgICB2YXIgc2VsZWN0aW9ucyA9IF9yZWYyLnNlbGVjdGlvbnM7XG4gICAgcmV0dXJuIGJsb2NrKHNlbGVjdGlvbnMpO1xuICB9LFxuICBGaWVsZDogZnVuY3Rpb24gRmllbGQoX3JlZjMpIHtcbiAgICB2YXIgYWxpYXMgPSBfcmVmMy5hbGlhcyxcbiAgICAgICAgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMy5hcmd1bWVudHMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMy5kaXJlY3RpdmVzLFxuICAgICAgICBzZWxlY3Rpb25TZXQgPSBfcmVmMy5zZWxlY3Rpb25TZXQ7XG4gICAgdmFyIHByZWZpeCA9IHdyYXAoJycsIGFsaWFzLCAnOiAnKSArIG5hbWU7XG4gICAgdmFyIGFyZ3NMaW5lID0gcHJlZml4ICsgd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJyk7XG5cbiAgICBpZiAoYXJnc0xpbmUubGVuZ3RoID4gTUFYX0xJTkVfTEVOR1RIKSB7XG4gICAgICBhcmdzTGluZSA9IHByZWZpeCArIHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpO1xuICAgIH1cblxuICAgIHJldHVybiBqb2luKFthcmdzTGluZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBzZWxlY3Rpb25TZXRdLCAnICcpO1xuICB9LFxuICBBcmd1bWVudDogZnVuY3Rpb24gQXJndW1lbnQoX3JlZjQpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY0Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjQudmFsdWU7XG4gICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgdmFsdWU7XG4gIH0sXG4gIC8vIEZyYWdtZW50c1xuICBGcmFnbWVudFNwcmVhZDogZnVuY3Rpb24gRnJhZ21lbnRTcHJlYWQoX3JlZjUpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY1Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmNS5kaXJlY3RpdmVzO1xuICAgIHJldHVybiAnLi4uJyArIG5hbWUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSxcbiAgSW5saW5lRnJhZ21lbnQ6IGZ1bmN0aW9uIElubGluZUZyYWdtZW50KF9yZWY2KSB7XG4gICAgdmFyIHR5cGVDb25kaXRpb24gPSBfcmVmNi50eXBlQ29uZGl0aW9uLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjYuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjYuc2VsZWN0aW9uU2V0O1xuICAgIHJldHVybiBqb2luKFsnLi4uJywgd3JhcCgnb24gJywgdHlwZUNvbmRpdGlvbiksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcbiAgRnJhZ21lbnREZWZpbml0aW9uOiBmdW5jdGlvbiBGcmFnbWVudERlZmluaXRpb24oX3JlZjcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY3Lm5hbWUsXG4gICAgICAgIHR5cGVDb25kaXRpb24gPSBfcmVmNy50eXBlQ29uZGl0aW9uLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zID0gX3JlZjcudmFyaWFibGVEZWZpbml0aW9ucyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY3LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY3LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gKC8vIE5vdGU6IGZyYWdtZW50IHZhcmlhYmxlIGRlZmluaXRpb25zIGFyZSBleHBlcmltZW50YWwgYW5kIG1heSBiZSBjaGFuZ2VkXG4gICAgICAvLyBvciByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICBcImZyYWdtZW50IFwiLmNvbmNhdChuYW1lKS5jb25jYXQod3JhcCgnKCcsIGpvaW4odmFyaWFibGVEZWZpbml0aW9ucywgJywgJyksICcpJyksIFwiIFwiKSArIFwib24gXCIuY29uY2F0KHR5cGVDb25kaXRpb24sIFwiIFwiKS5jb25jYXQod3JhcCgnJywgam9pbihkaXJlY3RpdmVzLCAnICcpLCAnICcpKSArIHNlbGVjdGlvblNldFxuICAgICk7XG4gIH0sXG4gIC8vIFZhbHVlXG4gIEludFZhbHVlOiBmdW5jdGlvbiBJbnRWYWx1ZShfcmVmOCkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWY4LnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgRmxvYXRWYWx1ZTogZnVuY3Rpb24gRmxvYXRWYWx1ZShfcmVmOSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWY5LnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgU3RyaW5nVmFsdWU6IGZ1bmN0aW9uIFN0cmluZ1ZhbHVlKF9yZWYxMCwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjEwLnZhbHVlLFxuICAgICAgICBpc0Jsb2NrU3RyaW5nID0gX3JlZjEwLmJsb2NrO1xuICAgIHJldHVybiBpc0Jsb2NrU3RyaW5nID8gcHJpbnRCbG9ja1N0cmluZyh2YWx1ZSwga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJycgOiAnICAnKSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgfSxcbiAgQm9vbGVhblZhbHVlOiBmdW5jdGlvbiBCb29sZWFuVmFsdWUoX3JlZjExKSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjExLnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH0sXG4gIE51bGxWYWx1ZTogZnVuY3Rpb24gTnVsbFZhbHVlKCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0sXG4gIEVudW1WYWx1ZTogZnVuY3Rpb24gRW51bVZhbHVlKF9yZWYxMikge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMi52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIExpc3RWYWx1ZTogZnVuY3Rpb24gTGlzdFZhbHVlKF9yZWYxMykge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmMTMudmFsdWVzO1xuICAgIHJldHVybiAnWycgKyBqb2luKHZhbHVlcywgJywgJykgKyAnXSc7XG4gIH0sXG4gIE9iamVjdFZhbHVlOiBmdW5jdGlvbiBPYmplY3RWYWx1ZShfcmVmMTQpIHtcbiAgICB2YXIgZmllbGRzID0gX3JlZjE0LmZpZWxkcztcbiAgICByZXR1cm4gJ3snICsgam9pbihmaWVsZHMsICcsICcpICsgJ30nO1xuICB9LFxuICBPYmplY3RGaWVsZDogZnVuY3Rpb24gT2JqZWN0RmllbGQoX3JlZjE1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMTUubmFtZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmMTUudmFsdWU7XG4gICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgdmFsdWU7XG4gIH0sXG4gIC8vIERpcmVjdGl2ZVxuICBEaXJlY3RpdmU6IGZ1bmN0aW9uIERpcmVjdGl2ZShfcmVmMTYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYxNi5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjE2LmFyZ3VtZW50cztcbiAgICByZXR1cm4gJ0AnICsgbmFtZSArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpO1xuICB9LFxuICAvLyBUeXBlXG4gIE5hbWVkVHlwZTogZnVuY3Rpb24gTmFtZWRUeXBlKF9yZWYxNykge1xuICAgIHZhciBuYW1lID0gX3JlZjE3Lm5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH0sXG4gIExpc3RUeXBlOiBmdW5jdGlvbiBMaXN0VHlwZShfcmVmMTgpIHtcbiAgICB2YXIgdHlwZSA9IF9yZWYxOC50eXBlO1xuICAgIHJldHVybiAnWycgKyB0eXBlICsgJ10nO1xuICB9LFxuICBOb25OdWxsVHlwZTogZnVuY3Rpb24gTm9uTnVsbFR5cGUoX3JlZjE5KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTkudHlwZTtcbiAgICByZXR1cm4gdHlwZSArICchJztcbiAgfSxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU2NoZW1hRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMCkge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX3JlZjIwLmRpcmVjdGl2ZXMsXG4gICAgICAgIG9wZXJhdGlvblR5cGVzID0gX3JlZjIwLm9wZXJhdGlvblR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnc2NoZW1hJywgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhvcGVyYXRpb25UeXBlcyldLCAnICcpO1xuICB9KSxcbiAgT3BlcmF0aW9uVHlwZURlZmluaXRpb246IGZ1bmN0aW9uIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKF9yZWYyMSkge1xuICAgIHZhciBvcGVyYXRpb24gPSBfcmVmMjEub3BlcmF0aW9uLFxuICAgICAgICB0eXBlID0gX3JlZjIxLnR5cGU7XG4gICAgcmV0dXJuIG9wZXJhdGlvbiArICc6ICcgKyB0eXBlO1xuICB9LFxuICBTY2FsYXJUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMikge1xuICAgIHZhciBuYW1lID0gX3JlZjIyLm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjIuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbJ3NjYWxhcicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0pLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMykge1xuICAgIHZhciBuYW1lID0gX3JlZjIzLm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMjMuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyMy5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMjMuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsndHlwZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9KSxcbiAgRmllbGREZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjQubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYyNC5hcmd1bWVudHMsXG4gICAgICAgIHR5cGUgPSBfcmVmMjQudHlwZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNC5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBuYW1lICsgKGhhc011bHRpbGluZUl0ZW1zKGFyZ3MpID8gd3JhcCgnKFxcbicsIGluZGVudChqb2luKGFyZ3MsICdcXG4nKSksICdcXG4pJykgOiB3cmFwKCcoJywgam9pbihhcmdzLCAnLCAnKSwgJyknKSkgKyAnOiAnICsgdHlwZSArIHdyYXAoJyAnLCBqb2luKGRpcmVjdGl2ZXMsICcgJykpO1xuICB9KSxcbiAgSW5wdXRWYWx1ZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjUpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNS5uYW1lLFxuICAgICAgICB0eXBlID0gX3JlZjI1LnR5cGUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWYyNS5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjUuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSArICc6ICcgKyB0eXBlLCB3cmFwKCc9ICcsIGRlZmF1bHRWYWx1ZSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0pLFxuICBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNikge1xuICAgIHZhciBuYW1lID0gX3JlZjI2Lm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMjYuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNi5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMjYuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsnaW50ZXJmYWNlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0pLFxuICBVbmlvblR5cGVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNy5kaXJlY3RpdmVzLFxuICAgICAgICB0eXBlcyA9IF9yZWYyNy50eXBlcztcbiAgICByZXR1cm4gam9pbihbJ3VuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCB0eXBlcyAmJiB0eXBlcy5sZW5ndGggIT09IDAgPyAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpIDogJyddLCAnICcpO1xuICB9KSxcbiAgRW51bVR5cGVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI4KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjgubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyOC5kaXJlY3RpdmVzLFxuICAgICAgICB2YWx1ZXMgPSBfcmVmMjgudmFsdWVzO1xuICAgIHJldHVybiBqb2luKFsnZW51bScsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sodmFsdWVzKV0sICcgJyk7XG4gIH0pLFxuICBFbnVtVmFsdWVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI5KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjkubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyOS5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBqb2luKFtuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYzMCkge1xuICAgIHZhciBuYW1lID0gX3JlZjMwLm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzAuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjMwLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2lucHV0JywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSksXG4gIERpcmVjdGl2ZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMzEpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMS5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjMxLmFyZ3VtZW50cyxcbiAgICAgICAgcmVwZWF0YWJsZSA9IF9yZWYzMS5yZXBlYXRhYmxlLFxuICAgICAgICBsb2NhdGlvbnMgPSBfcmVmMzEubG9jYXRpb25zO1xuICAgIHJldHVybiAnZGlyZWN0aXZlIEAnICsgbmFtZSArIChoYXNNdWx0aWxpbmVJdGVtcyhhcmdzKSA/IHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpIDogd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJykpICsgKHJlcGVhdGFibGUgPyAnIHJlcGVhdGFibGUnIDogJycpICsgJyBvbiAnICsgam9pbihsb2NhdGlvbnMsICcgfCAnKTtcbiAgfSksXG4gIFNjaGVtYUV4dGVuc2lvbjogZnVuY3Rpb24gU2NoZW1hRXh0ZW5zaW9uKF9yZWYzMikge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX3JlZjMyLmRpcmVjdGl2ZXMsXG4gICAgICAgIG9wZXJhdGlvblR5cGVzID0gX3JlZjMyLm9wZXJhdGlvblR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHNjaGVtYScsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sob3BlcmF0aW9uVHlwZXMpXSwgJyAnKTtcbiAgfSxcbiAgU2NhbGFyVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gU2NhbGFyVHlwZUV4dGVuc2lvbihfcmVmMzMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMy5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMzLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgc2NhbGFyJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSxcbiAgT2JqZWN0VHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gT2JqZWN0VHlwZUV4dGVuc2lvbihfcmVmMzQpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNC5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjM0LmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzQuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjM0LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCB0eXBlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0sXG4gIEludGVyZmFjZVR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIEludGVyZmFjZVR5cGVFeHRlbnNpb24oX3JlZjM1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzUubmFtZSxcbiAgICAgICAgaW50ZXJmYWNlcyA9IF9yZWYzNS5pbnRlcmZhY2VzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM1LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzNS5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgaW50ZXJmYWNlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0sXG4gIFVuaW9uVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gVW5pb25UeXBlRXh0ZW5zaW9uKF9yZWYzNikge1xuICAgIHZhciBuYW1lID0gX3JlZjM2Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzYuZGlyZWN0aXZlcyxcbiAgICAgICAgdHlwZXMgPSBfcmVmMzYudHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgdW5pb24nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHR5cGVzICYmIHR5cGVzLmxlbmd0aCAhPT0gMCA/ICc9ICcgKyBqb2luKHR5cGVzLCAnIHwgJykgOiAnJ10sICcgJyk7XG4gIH0sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBmdW5jdGlvbiBFbnVtVHlwZUV4dGVuc2lvbihfcmVmMzcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNy5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM3LmRpcmVjdGl2ZXMsXG4gICAgICAgIHZhbHVlcyA9IF9yZWYzNy52YWx1ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgZW51bScsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sodmFsdWVzKV0sICcgJyk7XG4gIH0sXG4gIElucHV0T2JqZWN0VHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKF9yZWYzOCkge1xuICAgIHZhciBuYW1lID0gX3JlZjM4Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzguZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjM4LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCBpbnB1dCcsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBqb2luKFtub2RlLmRlc2NyaXB0aW9uLCBjYihub2RlKV0sICdcXG4nKTtcbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gbWF5YmVBcnJheSwgcHJpbnQgYW4gZW1wdHkgc3RyaW5nIGlmIGl0IGlzIG51bGwgb3IgZW1wdHksIG90aGVyd2lzZVxuICogcHJpbnQgYWxsIGl0ZW1zIHRvZ2V0aGVyIHNlcGFyYXRlZCBieSBzZXBhcmF0b3IgaWYgcHJvdmlkZWRcbiAqL1xuXG5cbmZ1bmN0aW9uIGpvaW4obWF5YmVBcnJheSkge1xuICB2YXIgX21heWJlQXJyYXkkZmlsdGVyJGpvO1xuXG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICByZXR1cm4gKF9tYXliZUFycmF5JGZpbHRlciRqbyA9IG1heWJlQXJyYXkgPT09IG51bGwgfHwgbWF5YmVBcnJheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF5YmVBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSkuam9pbihzZXBhcmF0b3IpKSAhPT0gbnVsbCAmJiBfbWF5YmVBcnJheSRmaWx0ZXIkam8gIT09IHZvaWQgMCA/IF9tYXliZUFycmF5JGZpbHRlciRqbyA6ICcnO1xufVxuLyoqXG4gKiBHaXZlbiBhcnJheSwgcHJpbnQgZWFjaCBpdGVtIG9uIGl0cyBvd24gbGluZSwgd3JhcHBlZCBpbiBhblxuICogaW5kZW50ZWQgXCJ7IH1cIiBibG9jay5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJsb2NrKGFycmF5KSB7XG4gIHJldHVybiB3cmFwKCd7XFxuJywgaW5kZW50KGpvaW4oYXJyYXksICdcXG4nKSksICdcXG59Jyk7XG59XG4vKipcbiAqIElmIG1heWJlU3RyaW5nIGlzIG5vdCBudWxsIG9yIGVtcHR5LCB0aGVuIHdyYXAgd2l0aCBzdGFydCBhbmQgZW5kLCBvdGhlcndpc2UgcHJpbnQgYW4gZW1wdHkgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gd3JhcChzdGFydCwgbWF5YmVTdHJpbmcpIHtcbiAgdmFyIGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHJldHVybiBtYXliZVN0cmluZyAhPSBudWxsICYmIG1heWJlU3RyaW5nICE9PSAnJyA/IHN0YXJ0ICsgbWF5YmVTdHJpbmcgKyBlbmQgOiAnJztcbn1cblxuZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICByZXR1cm4gd3JhcCgnICAnLCBzdHIucmVwbGFjZSgvXFxuL2csICdcXG4gICcpKTtcbn1cblxuZnVuY3Rpb24gaXNNdWx0aWxpbmUoc3RyKSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZignXFxuJykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBoYXNNdWx0aWxpbmVJdGVtcyhtYXliZUFycmF5KSB7XG4gIHJldHVybiBtYXliZUFycmF5ICE9IG51bGwgJiYgbWF5YmVBcnJheS5zb21lKGlzTXVsdGlsaW5lKTtcbn1cbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgU1lNQk9MX1RPX1NUUklOR19UQUcgfSBmcm9tIFwiLi4vcG9seWZpbGxzL3N5bWJvbHMubWpzXCI7XG5pbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IGRldkFzc2VydCBmcm9tIFwiLi4vanN1dGlscy9kZXZBc3NlcnQubWpzXCI7XG5pbXBvcnQgaW5zdGFuY2VPZiBmcm9tIFwiLi4vanN1dGlscy9pbnN0YW5jZU9mLm1qc1wiO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2Ygc291cmNlIGlucHV0IHRvIEdyYXBoUUwuIFRoZSBgbmFtZWAgYW5kIGBsb2NhdGlvbk9mZnNldGAgcGFyYW1ldGVycyBhcmVcbiAqIG9wdGlvbmFsLCBidXQgdGhleSBhcmUgdXNlZnVsIGZvciBjbGllbnRzIHdobyBzdG9yZSBHcmFwaFFMIGRvY3VtZW50cyBpbiBzb3VyY2UgZmlsZXMuXG4gKiBGb3IgZXhhbXBsZSwgaWYgdGhlIEdyYXBoUUwgaW5wdXQgc3RhcnRzIGF0IGxpbmUgNDAgaW4gYSBmaWxlIG5hbWVkIGBGb28uZ3JhcGhxbGAsIGl0IG1pZ2h0XG4gKiBiZSB1c2VmdWwgZm9yIGBuYW1lYCB0byBiZSBgXCJGb28uZ3JhcGhxbFwiYCBhbmQgbG9jYXRpb24gdG8gYmUgYHsgbGluZTogNDAsIGNvbHVtbjogMSB9YC5cbiAqIFRoZSBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgaW4gYGxvY2F0aW9uT2Zmc2V0YCBhcmUgMS1pbmRleGVkLlxuICovXG5leHBvcnQgdmFyIFNvdXJjZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNvdXJjZShib2R5KSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdHcmFwaFFMIHJlcXVlc3QnO1xuICAgIHZhciBsb2NhdGlvbk9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge1xuICAgICAgbGluZTogMSxcbiAgICAgIGNvbHVtbjogMVxuICAgIH07XG4gICAgdHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnIHx8IGRldkFzc2VydCgwLCBcIkJvZHkgbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQ6IFwiLmNvbmNhdChpbnNwZWN0KGJvZHkpLCBcIi5cIikpO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0ID0gbG9jYXRpb25PZmZzZXQ7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldC5saW5lID4gMCB8fCBkZXZBc3NlcnQoMCwgJ2xpbmUgaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLicpO1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQuY29sdW1uID4gMCB8fCBkZXZBc3NlcnQoMCwgJ2NvbHVtbiBpbiBsb2NhdGlvbk9mZnNldCBpcyAxLWluZGV4ZWQgYW5kIG11c3QgYmUgcG9zaXRpdmUuJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVt1bnN1cHBvcnRlZC1zeW50YXhdIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cblxuICBfY3JlYXRlQ2xhc3MoU291cmNlLCBbe1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ1NvdXJjZSc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvdXJjZTtcbn0oKTtcbi8qKlxuICogVGVzdCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBTb3VyY2Ugb2JqZWN0LlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmV4cG9ydCBmdW5jdGlvbiBpc1NvdXJjZShzb3VyY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlT2Yoc291cmNlLCBTb3VyY2UpO1xufVxuIiwiLyoqXG4gKiBBbiBleHBvcnRlZCBlbnVtIGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVudCBraW5kcyBvZiB0b2tlbnMgdGhhdCB0aGVcbiAqIGxleGVyIGVtaXRzLlxuICovXG5leHBvcnQgdmFyIFRva2VuS2luZCA9IE9iamVjdC5mcmVlemUoe1xuICBTT0Y6ICc8U09GPicsXG4gIEVPRjogJzxFT0Y+JyxcbiAgQkFORzogJyEnLFxuICBET0xMQVI6ICckJyxcbiAgQU1QOiAnJicsXG4gIFBBUkVOX0w6ICcoJyxcbiAgUEFSRU5fUjogJyknLFxuICBTUFJFQUQ6ICcuLi4nLFxuICBDT0xPTjogJzonLFxuICBFUVVBTFM6ICc9JyxcbiAgQVQ6ICdAJyxcbiAgQlJBQ0tFVF9MOiAnWycsXG4gIEJSQUNLRVRfUjogJ10nLFxuICBCUkFDRV9MOiAneycsXG4gIFBJUEU6ICd8JyxcbiAgQlJBQ0VfUjogJ30nLFxuICBOQU1FOiAnTmFtZScsXG4gIElOVDogJ0ludCcsXG4gIEZMT0FUOiAnRmxvYXQnLFxuICBTVFJJTkc6ICdTdHJpbmcnLFxuICBCTE9DS19TVFJJTkc6ICdCbG9ja1N0cmluZycsXG4gIENPTU1FTlQ6ICdDb21tZW50J1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSB0b2tlbiBraW5kcyB2YWx1ZXMuXG4gKi9cbiIsImltcG9ydCBpbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2luc3BlY3QubWpzXCI7XG5pbXBvcnQgeyBpc05vZGUgfSBmcm9tIFwiLi9hc3QubWpzXCI7XG4vKipcbiAqIEEgdmlzaXRvciBpcyBwcm92aWRlZCB0byB2aXNpdCwgaXQgY29udGFpbnMgdGhlIGNvbGxlY3Rpb24gb2ZcbiAqIHJlbGV2YW50IGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQgZHVyaW5nIHRoZSB2aXNpdG9yJ3MgdHJhdmVyc2FsLlxuICovXG5cbmV4cG9ydCB2YXIgUXVlcnlEb2N1bWVudEtleXMgPSB7XG4gIE5hbWU6IFtdLFxuICBEb2N1bWVudDogWydkZWZpbml0aW9ucyddLFxuICBPcGVyYXRpb25EZWZpbml0aW9uOiBbJ25hbWUnLCAndmFyaWFibGVEZWZpbml0aW9ucycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBWYXJpYWJsZURlZmluaXRpb246IFsndmFyaWFibGUnLCAndHlwZScsICdkZWZhdWx0VmFsdWUnLCAnZGlyZWN0aXZlcyddLFxuICBWYXJpYWJsZTogWyduYW1lJ10sXG4gIFNlbGVjdGlvblNldDogWydzZWxlY3Rpb25zJ10sXG4gIEZpZWxkOiBbJ2FsaWFzJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEFyZ3VtZW50OiBbJ25hbWUnLCAndmFsdWUnXSxcbiAgRnJhZ21lbnRTcHJlYWQ6IFsnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElubGluZUZyYWdtZW50OiBbJ3R5cGVDb25kaXRpb24nLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgRnJhZ21lbnREZWZpbml0aW9uOiBbJ25hbWUnLCAvLyBOb3RlOiBmcmFnbWVudCB2YXJpYWJsZSBkZWZpbml0aW9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZCBtYXkgYmUgY2hhbmdlZFxuICAvLyBvciByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICd2YXJpYWJsZURlZmluaXRpb25zJywgJ3R5cGVDb25kaXRpb24nLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgSW50VmFsdWU6IFtdLFxuICBGbG9hdFZhbHVlOiBbXSxcbiAgU3RyaW5nVmFsdWU6IFtdLFxuICBCb29sZWFuVmFsdWU6IFtdLFxuICBOdWxsVmFsdWU6IFtdLFxuICBFbnVtVmFsdWU6IFtdLFxuICBMaXN0VmFsdWU6IFsndmFsdWVzJ10sXG4gIE9iamVjdFZhbHVlOiBbJ2ZpZWxkcyddLFxuICBPYmplY3RGaWVsZDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIERpcmVjdGl2ZTogWyduYW1lJywgJ2FyZ3VtZW50cyddLFxuICBOYW1lZFR5cGU6IFsnbmFtZSddLFxuICBMaXN0VHlwZTogWyd0eXBlJ10sXG4gIE5vbk51bGxUeXBlOiBbJ3R5cGUnXSxcbiAgU2NoZW1hRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICdkaXJlY3RpdmVzJywgJ29wZXJhdGlvblR5cGVzJ10sXG4gIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uOiBbJ3R5cGUnXSxcbiAgU2NhbGFyVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIE9iamVjdFR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBGaWVsZERlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdhcmd1bWVudHMnLCAndHlwZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0VmFsdWVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAndHlwZScsICdkZWZhdWx0VmFsdWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgVW5pb25UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndHlwZXMnXSxcbiAgRW51bVR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgRW51bVZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIERpcmVjdGl2ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdhcmd1bWVudHMnLCAnbG9jYXRpb25zJ10sXG4gIFNjaGVtYUV4dGVuc2lvbjogWydkaXJlY3RpdmVzJywgJ29wZXJhdGlvblR5cGVzJ10sXG4gIFNjYWxhclR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIE9iamVjdFR5cGVFeHRlbnNpb246IFsnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIEludGVyZmFjZVR5cGVFeHRlbnNpb246IFsnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZUV4dGVuc2lvbjogWyduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndHlwZXMnXSxcbiAgRW51bVR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3ZhbHVlcyddLFxuICBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddXG59O1xuZXhwb3J0IHZhciBCUkVBSyA9IE9iamVjdC5mcmVlemUoe30pO1xuLyoqXG4gKiB2aXNpdCgpIHdpbGwgd2FsayB0aHJvdWdoIGFuIEFTVCB1c2luZyBhIGRlcHRoLWZpcnN0IHRyYXZlcnNhbCwgY2FsbGluZ1xuICogdGhlIHZpc2l0b3IncyBlbnRlciBmdW5jdGlvbiBhdCBlYWNoIG5vZGUgaW4gdGhlIHRyYXZlcnNhbCwgYW5kIGNhbGxpbmcgdGhlXG4gKiBsZWF2ZSBmdW5jdGlvbiBhZnRlciB2aXNpdGluZyB0aGF0IG5vZGUgYW5kIGFsbCBvZiBpdHMgY2hpbGQgbm9kZXMuXG4gKlxuICogQnkgcmV0dXJuaW5nIGRpZmZlcmVudCB2YWx1ZXMgZnJvbSB0aGUgZW50ZXIgYW5kIGxlYXZlIGZ1bmN0aW9ucywgdGhlXG4gKiBiZWhhdmlvciBvZiB0aGUgdmlzaXRvciBjYW4gYmUgYWx0ZXJlZCwgaW5jbHVkaW5nIHNraXBwaW5nIG92ZXIgYSBzdWItdHJlZSBvZlxuICogdGhlIEFTVCAoYnkgcmV0dXJuaW5nIGZhbHNlKSwgZWRpdGluZyB0aGUgQVNUIGJ5IHJldHVybmluZyBhIHZhbHVlIG9yIG51bGxcbiAqIHRvIHJlbW92ZSB0aGUgdmFsdWUsIG9yIHRvIHN0b3AgdGhlIHdob2xlIHRyYXZlcnNhbCBieSByZXR1cm5pbmcgQlJFQUsuXG4gKlxuICogV2hlbiB1c2luZyB2aXNpdCgpIHRvIGVkaXQgYW4gQVNULCB0aGUgb3JpZ2luYWwgQVNUIHdpbGwgbm90IGJlIG1vZGlmaWVkLCBhbmRcbiAqIGEgbmV3IHZlcnNpb24gb2YgdGhlIEFTVCB3aXRoIHRoZSBjaGFuZ2VzIGFwcGxpZWQgd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoZVxuICogdmlzaXQgZnVuY3Rpb24uXG4gKlxuICogICAgIGNvbnN0IGVkaXRlZEFTVCA9IHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXIobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycykge1xuICogICAgICAgICAvLyBAcmV0dXJuXG4gKiAgICAgICAgIC8vICAgdW5kZWZpbmVkOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICBmYWxzZTogc2tpcCB2aXNpdGluZyB0aGlzIG5vZGVcbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIHZpc2l0b3IuQlJFQUs6IHN0b3AgdmlzaXRpbmcgYWx0b2dldGhlclxuICogICAgICAgICAvLyAgIG51bGw6IGRlbGV0ZSB0aGlzIG5vZGVcbiAqICAgICAgICAgLy8gICBhbnkgdmFsdWU6IHJlcGxhY2UgdGhpcyBub2RlIHdpdGggdGhlIHJldHVybmVkIHZhbHVlXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogQWx0ZXJuYXRpdmVseSB0byBwcm92aWRpbmcgZW50ZXIoKSBhbmQgbGVhdmUoKSBmdW5jdGlvbnMsIGEgdmlzaXRvciBjYW5cbiAqIGluc3RlYWQgcHJvdmlkZSBmdW5jdGlvbnMgbmFtZWQgdGhlIHNhbWUgYXMgdGhlIGtpbmRzIG9mIEFTVCBub2Rlcywgb3JcbiAqIGVudGVyL2xlYXZlIHZpc2l0b3JzIGF0IGEgbmFtZWQga2V5LCBsZWFkaW5nIHRvIGZvdXIgcGVybXV0YXRpb25zIG9mIHRoZVxuICogdmlzaXRvciBBUEk6XG4gKlxuICogMSkgTmFtZWQgdmlzaXRvcnMgdHJpZ2dlcmVkIHdoZW4gZW50ZXJpbmcgYSBub2RlIG9mIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgdGhlIFwiS2luZFwiIG5vZGVcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDIpIE5hbWVkIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGEgbm9kZSBvZlxuICogICAgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIEtpbmQ6IHtcbiAqICAgICAgICAgZW50ZXIobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgICAgbGVhdmUobm9kZSkge1xuICogICAgICAgICAgIC8vIGxlYXZlIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDMpIEdlbmVyaWMgdmlzaXRvcnMgdGhhdCB0cmlnZ2VyIHVwb24gZW50ZXJpbmcgYW5kIGxlYXZpbmcgYW55IG5vZGUuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXIobm9kZSkge1xuICogICAgICAgICAvLyBlbnRlciBhbnkgbm9kZVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgLy8gbGVhdmUgYW55IG5vZGVcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDQpIFBhcmFsbGVsIHZpc2l0b3JzIGZvciBlbnRlcmluZyBhbmQgbGVhdmluZyBub2RlcyBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXI6IHtcbiAqICAgICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgICAgLy8gZW50ZXIgdGhlIFwiS2luZFwiIG5vZGVcbiAqICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGxlYXZlIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9KVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdChyb290LCB2aXNpdG9yKSB7XG4gIHZhciB2aXNpdG9yS2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUXVlcnlEb2N1bWVudEtleXM7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYtaW5pdCAqL1xuICB2YXIgc3RhY2sgPSB1bmRlZmluZWQ7XG4gIHZhciBpbkFycmF5ID0gQXJyYXkuaXNBcnJheShyb290KTtcbiAgdmFyIGtleXMgPSBbcm9vdF07XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgZWRpdHMgPSBbXTtcbiAgdmFyIG5vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBrZXkgPSB1bmRlZmluZWQ7XG4gIHZhciBwYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBwYXRoID0gW107XG4gIHZhciBhbmNlc3RvcnMgPSBbXTtcbiAgdmFyIG5ld1Jvb3QgPSByb290O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmLWluaXQgKi9cblxuICBkbyB7XG4gICAgaW5kZXgrKztcbiAgICB2YXIgaXNMZWF2aW5nID0gaW5kZXggPT09IGtleXMubGVuZ3RoO1xuICAgIHZhciBpc0VkaXRlZCA9IGlzTGVhdmluZyAmJiBlZGl0cy5sZW5ndGggIT09IDA7XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBrZXkgPSBhbmNlc3RvcnMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGFuY2VzdG9ycy5wb3AoKTtcblxuICAgICAgaWYgKGlzRWRpdGVkKSB7XG4gICAgICAgIGlmIChpbkFycmF5KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY2xvbmUgPSB7fTtcblxuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhub2RlKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICB2YXIgayA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgICAgICAgIGNsb25lW2tdID0gbm9kZVtrXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBub2RlID0gY2xvbmU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWRpdE9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGVkaXRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHZhciBlZGl0S2V5ID0gZWRpdHNbaWldWzBdO1xuICAgICAgICAgIHZhciBlZGl0VmFsdWUgPSBlZGl0c1tpaV1bMV07XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgICAgZWRpdEtleSAtPSBlZGl0T2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbkFycmF5ICYmIGVkaXRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zcGxpY2UoZWRpdEtleSwgMSk7XG4gICAgICAgICAgICBlZGl0T2Zmc2V0Kys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVbZWRpdEtleV0gPSBlZGl0VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gc3RhY2suaW5kZXg7XG4gICAgICBrZXlzID0gc3RhY2sua2V5cztcbiAgICAgIGVkaXRzID0gc3RhY2suZWRpdHM7XG4gICAgICBpbkFycmF5ID0gc3RhY2suaW5BcnJheTtcbiAgICAgIHN0YWNrID0gc3RhY2sucHJldjtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gcGFyZW50ID8gaW5BcnJheSA/IGluZGV4IDoga2V5c1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBub2RlID0gcGFyZW50ID8gcGFyZW50W2tleV0gOiBuZXdSb290O1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgaWYgKCFpc05vZGUobm9kZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBBU1QgTm9kZTogXCIuY29uY2F0KGluc3BlY3Qobm9kZSksIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aXNpdEZuID0gZ2V0VmlzaXRGbih2aXNpdG9yLCBub2RlLmtpbmQsIGlzTGVhdmluZyk7XG5cbiAgICAgIGlmICh2aXNpdEZuKSB7XG4gICAgICAgIHJlc3VsdCA9IHZpc2l0Rm4uY2FsbCh2aXNpdG9yLCBub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVkaXRzLnB1c2goW2tleSwgcmVzdWx0XSk7XG5cbiAgICAgICAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgJiYgaXNFZGl0ZWQpIHtcbiAgICAgIGVkaXRzLnB1c2goW2tleSwgbm9kZV0pO1xuICAgIH1cblxuICAgIGlmIChpc0xlYXZpbmcpIHtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdmlzaXRvcktleXMkbm9kZSRraW47XG5cbiAgICAgIHN0YWNrID0ge1xuICAgICAgICBpbkFycmF5OiBpbkFycmF5LFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGtleXM6IGtleXMsXG4gICAgICAgIGVkaXRzOiBlZGl0cyxcbiAgICAgICAgcHJldjogc3RhY2tcbiAgICAgIH07XG4gICAgICBpbkFycmF5ID0gQXJyYXkuaXNBcnJheShub2RlKTtcbiAgICAgIGtleXMgPSBpbkFycmF5ID8gbm9kZSA6IChfdmlzaXRvcktleXMkbm9kZSRraW4gPSB2aXNpdG9yS2V5c1tub2RlLmtpbmRdKSAhPT0gbnVsbCAmJiBfdmlzaXRvcktleXMkbm9kZSRraW4gIT09IHZvaWQgMCA/IF92aXNpdG9yS2V5cyRub2RlJGtpbiA6IFtdO1xuICAgICAgaW5kZXggPSAtMTtcbiAgICAgIGVkaXRzID0gW107XG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgYW5jZXN0b3JzLnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICB9XG4gIH0gd2hpbGUgKHN0YWNrICE9PSB1bmRlZmluZWQpO1xuXG4gIGlmIChlZGl0cy5sZW5ndGggIT09IDApIHtcbiAgICBuZXdSb290ID0gZWRpdHNbZWRpdHMubGVuZ3RoIC0gMV1bMV07XG4gIH1cblxuICByZXR1cm4gbmV3Um9vdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2aXNpdG9yIGluc3RhbmNlIHdoaWNoIGRlbGVnYXRlcyB0byBtYW55IHZpc2l0b3JzIHRvIHJ1biBpblxuICogcGFyYWxsZWwuIEVhY2ggdmlzaXRvciB3aWxsIGJlIHZpc2l0ZWQgZm9yIGVhY2ggbm9kZSBiZWZvcmUgbW92aW5nIG9uLlxuICpcbiAqIElmIGEgcHJpb3IgdmlzaXRvciBlZGl0cyBhIG5vZGUsIG5vIGZvbGxvd2luZyB2aXNpdG9ycyB3aWxsIHNlZSB0aGF0IG5vZGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0SW5QYXJhbGxlbCh2aXNpdG9ycykge1xuICB2YXIgc2tpcHBpbmcgPSBuZXcgQXJyYXkodmlzaXRvcnMubGVuZ3RoKTtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNpdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2tpcHBpbmdbaV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvcnNbaV0sIG5vZGUua2luZCxcbiAgICAgICAgICAvKiBpc0xlYXZpbmcgKi9cbiAgICAgICAgICBmYWxzZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBub2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IEJSRUFLKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gQlJFQUs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsZWF2ZTogZnVuY3Rpb24gbGVhdmUobm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNpdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2tpcHBpbmdbaV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvcnNbaV0sIG5vZGUua2luZCxcbiAgICAgICAgICAvKiBpc0xlYXZpbmcgKi9cbiAgICAgICAgICB0cnVlKTtcblxuICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHZpc2l0b3JzW2ldLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNraXBwaW5nW2ldID09PSBub2RlKSB7XG4gICAgICAgICAgc2tpcHBpbmdbaV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLyoqXG4gKiBHaXZlbiBhIHZpc2l0b3IgaW5zdGFuY2UsIGlmIGl0IGlzIGxlYXZpbmcgb3Igbm90LCBhbmQgYSBub2RlIGtpbmQsIHJldHVyblxuICogdGhlIGZ1bmN0aW9uIHRoZSB2aXNpdG9yIHJ1bnRpbWUgc2hvdWxkIGNhbGwuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2l0Rm4odmlzaXRvciwga2luZCwgaXNMZWF2aW5nKSB7XG4gIHZhciBraW5kVmlzaXRvciA9IHZpc2l0b3Jba2luZF07XG5cbiAgaWYgKGtpbmRWaXNpdG9yKSB7XG4gICAgaWYgKCFpc0xlYXZpbmcgJiYgdHlwZW9mIGtpbmRWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB7IEtpbmQoKSB7fSB9XG4gICAgICByZXR1cm4ga2luZFZpc2l0b3I7XG4gICAgfVxuXG4gICAgdmFyIGtpbmRTcGVjaWZpY1Zpc2l0b3IgPSBpc0xlYXZpbmcgPyBraW5kVmlzaXRvci5sZWF2ZSA6IGtpbmRWaXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHR5cGVvZiBraW5kU3BlY2lmaWNWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB7IEtpbmQ6IHsgZW50ZXIoKSB7fSwgbGVhdmUoKSB7fSB9IH1cbiAgICAgIHJldHVybiBraW5kU3BlY2lmaWNWaXNpdG9yO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8gdmlzaXRvci5sZWF2ZSA6IHZpc2l0b3IuZW50ZXI7XG5cbiAgICBpZiAoc3BlY2lmaWNWaXNpdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfVxuICAgICAgICByZXR1cm4gc3BlY2lmaWNWaXNpdG9yO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BlY2lmaWNLaW5kVmlzaXRvciA9IHNwZWNpZmljVmlzaXRvcltraW5kXTtcblxuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY0tpbmRWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIHsgZW50ZXI6IHsgS2luZCgpIHt9IH0sIGxlYXZlOiB7IEtpbmQoKSB7fSB9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljS2luZFZpc2l0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbiBFUzIwMTUgKG9yIGEgcG9seWZpbGxlZCkgZW52aXJvbm1lbnQsIHRoaXMgd2lsbCBiZSBTeW1ib2wuaXRlcmF0b3Jcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcbmV4cG9ydCB2YXIgU1lNQk9MX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3IgIT0gbnVsbCA/IFN5bWJvbC5pdGVyYXRvciA6ICdAQGl0ZXJhdG9yJzsgLy8gSW4gRVMyMDE3IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLmFzeW5jSXRlcmF0b3Jcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuZXhwb3J0IHZhciBTWU1CT0xfQVNZTkNfSVRFUkFUT1IgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciA6ICdAQGFzeW5jSXRlcmF0b3InOyAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX1RPX1NUUklOR19UQUcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZyAhPSBudWxsID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogJ0BAdG9TdHJpbmdUYWcnO1xuIiwiZnVuY3Rpb24gbChhLCBiKSB7XG4gIGIudGFnID0gYTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG0oKSB7fVxuXG5mdW5jdGlvbiBwKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgdmFyIGMgPSBhLmxlbmd0aDtcbiAgICBsZXQgZCA9ICExLFxuICAgICAgZSA9ICExLFxuICAgICAgZiA9ICExLFxuICAgICAgZyA9IDA7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgICBkID0gITA7XG4gICAgICAgICAgfSBlbHNlIGlmIChlKSB7XG4gICAgICAgICAgICBmID0gITA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZSA9IGYgPSAhMDsgZiAmJiAhZDsgKSB7XG4gICAgICAgICAgICAgIGcgPCBjID8gKChoID0gYVtnXSksIChnID0gKGcgKyAxKSB8IDApLCAoZiA9ICExKSwgYihsKDEsIFtoXSkpKSA6ICgoZCA9ICEwKSwgYigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiByKCkge31cblxuZnVuY3Rpb24gdChhKSB7XG4gIGEoMCk7XG59XG5cbmZ1bmN0aW9uIHUoYSkge1xuICBsZXQgYiA9ICExO1xuICBhKFxuICAgIGwoMCwgW1xuICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYyA/IChiID0gITApIDogYiB8fCBhKDApO1xuICAgICAgfSxcbiAgICBdKVxuICApO1xufVxuXG5mdW5jdGlvbiB3KGEpIHtcbiAgaWYgKHZvaWQgMCA9PT0gYSkge1xuICAgIHJldHVybiAoKGEgPSBbdiwgMF0pLnRhZyA9IDI1NiksIGE7XG4gIH1cbiAgaWYgKG51bGwgPT09IGEgfHwgYVswXSAhPT0gdikge1xuICAgIHJldHVybiBhO1xuICB9XG4gIChhID0gW3YsIChhWzFdICsgMSkgfCAwXSkudGFnID0gMjU2O1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24geChhKSB7XG4gIGlmIChudWxsID09PSBhIHx8IGFbMF0gIT09IHYpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBpZiAoMCAhPT0gKGEgPSBhWzFdKSkge1xuICAgIHJldHVybiBbdiwgKGEgLSAxKSB8IDBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHooYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gayAmJlxuICAgICAgICAgICAgKChrID0gITEpLFxuICAgICAgICAgICAgdm9pZCAwICE9PSAoYiA9IGUuc2hpZnQoKSlcbiAgICAgICAgICAgICAgPyAoKGIgPSBhKHgoYikpKSwgKGsgPSAhMCksIGIoZCkpXG4gICAgICAgICAgICAgIDogcVxuICAgICAgICAgICAgICA/IGMoMClcbiAgICAgICAgICAgICAgOiBnIHx8ICgoZyA9ICEwKSwgZigwKSkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gayAmJiAoYyhiKSwgbiA/IChuID0gITEpIDogaCgwKSlcbiAgICAgICAgICA6ICgoaCA9IGIgPSBiWzBdKSwgKG4gPSAhMSksIGIoMCkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBbXSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSAhMSxcbiAgICAgICAgaCA9IG0sXG4gICAgICAgIGsgPSAhMSxcbiAgICAgICAgbiA9ICExLFxuICAgICAgICBxID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBxIHx8ICgocSA9ICEwKSwgayB8fCAwICE9PSBlLmxlbmd0aCB8fCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IHEgfHwgKChiID0gYlswXSksIChnID0gITEpLCBrID8gZS5wdXNoKGIpIDogKChiID0gYShiKSksIChrID0gITApLCBiKGQpKSlcbiAgICAgICAgICA6IChmID0gYlswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICBpZiAoKHEgfHwgKChxID0gITApLCBmKDEpKSwgaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGsgPSAhMSksIGgoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHEgfHwgZyB8fCAoKGcgPSAhMCksIGYoMCkpLCBrICYmICFuICYmICgobiA9ICEwKSwgaCgwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gQShhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBCKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEMoYSkge1xuICByZXR1cm4gYSgwKTtcbn1cblxuZnVuY3Rpb24gRChhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGUgPSBtLFxuICAgICAgICBmID0gITEsXG4gICAgICAgIGcgPSBbXSxcbiAgICAgICAgaCA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIDAgPT09IGcubGVuZ3RoICYmIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gaCB8fFxuICAgICAgICAgICAgKChmID0gITEpLFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGIoYSkge1xuICAgICAgICAgICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgICAgICAgICA/IDAgIT09IGcubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICgoZyA9IGcuZmlsdGVyKGQpKSxcbiAgICAgICAgICAgICAgICAgICAgKGEgPSAwID09PSBnLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGggJiYgYSA/IGMoMCkgOiAhZiAmJiBhICYmICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgICAgICAgICA/IDAgIT09IGcubGVuZ3RoICYmIChjKGwoMSwgW2FbMF1dKSksIGsoMCkpXG4gICAgICAgICAgICAgICAgICA6ICgoayA9IGEgPSBhWzBdKSwgKGcgPSBnLmNvbmNhdChhKSksIGEoMCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBrID0gbTtcbiAgICAgICAgICAgICAgMSA9PT0gYS5sZW5ndGggPyBhKGIpIDogYS5iaW5kKG51bGwsIGIpO1xuICAgICAgICAgICAgfSkoYShiWzBdKSksXG4gICAgICAgICAgICBmIHx8ICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgOiAoZSA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgYVxuICAgICAgICAgICAgICA/IChoIHx8ICgoaCA9ICEwKSwgZShhKSksXG4gICAgICAgICAgICAgICAgZy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyhhKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAoZyA9IFtdKSlcbiAgICAgICAgICAgICAgOiAoZiB8fCBoID8gKGYgPSAhMSkgOiAoKGYgPSAhMCksIGUoMCkpLCBnLmZvckVhY2goQykpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEUoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gRihhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBHKGEpIHtcbiAgcmV0dXJuIEQoRikoYSk7XG59XG5cbmZ1bmN0aW9uIEgoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgICBkIHx8ICgoZCA9ICEwKSwgYyhlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YWcpIHtcbiAgICAgICAgICBkIHx8IChhKGVbMF0pLCBjKGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZyA9IGVbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgKGQgPSAhMCksIGcoYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBKKGEpIHtcbiAgYSgwKTtcbn1cblxuZnVuY3Rpb24gSyhhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgIGggJiZcbiAgICAgICAgICAoJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICAgID8gKChoID0gITEpLCBuID8gYyhhKSA6IGYgfHwgKChmID0gITApLCBlKDApKSlcbiAgICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICAgID8gKGMoYSksIGsgPyAoayA9ICExKSA6IGcoMCkpXG4gICAgICAgICAgICA6ICgoZyA9IGEgPSBhWzBdKSwgKGsgPSAhMSksIGEoMCkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gbSxcbiAgICAgICAgZiA9ICExLFxuICAgICAgICBnID0gbSxcbiAgICAgICAgaCA9ICExLFxuICAgICAgICBrID0gITEsXG4gICAgICAgIG4gPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IG4gfHwgKChuID0gITApLCBoIHx8IGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gbiB8fFxuICAgICAgICAgICAgKGggJiYgKGcoMSksIChnID0gbSkpLCBmID8gKGYgPSAhMSkgOiAoKGYgPSAhMCksIGUoMCkpLCAoYiA9IGEoYlswXSkpLCAoaCA9ICEwKSwgYihkKSlcbiAgICAgICAgICA6IChlID0gYlswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICBpZiAoKG4gfHwgKChuID0gITApLCBlKDEpKSwgaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMSksIGcoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG4gfHwgZiB8fCAoKGYgPSAhMCksIGUoMCkpLCBoICYmICFrICYmICgoayA9ICEwKSwgZygwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTChhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBNKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IFtdLFxuICAgICAgICBlID0gbTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBwKGQpKGMpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gKGQubGVuZ3RoID49IGEgJiYgMCA8IGEgJiYgZC5zaGlmdCgpLCBkLnB1c2goYlswXSksIGUoMCkpXG4gICAgICAgICAgOiAoKGIgPSBiWzBdKSwgMCA+PSBhID8gKGIoMSksIHUoYykpIDogKChlID0gYiksIGIoMCkpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIE4oYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9IG0sXG4gICAgICBkID0gITE7XG4gICAgYihmdW5jdGlvbiAoZSkge1xuICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGUgPyAoZCA9ICEwKSA6IGUudGFnID8gZCB8fCAoYShlWzBdKSwgYygwKSkgOiAoKGMgPSBlID0gZVswXSksIGUoMCkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICByZXR1cm4gKGQgPSAhMCksIGMoMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTygpIHt9XG5cbmZ1bmN0aW9uIFEoKSB7fVxuXG5mdW5jdGlvbiBSKCkge31cblxuZnVuY3Rpb24gUygpIHt9XG5cbmZ1bmN0aW9uIGJ1ZmZlciQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGsgfHwgKChrID0gITApLCBmKDEpLCAwIDwgZS5sZW5ndGggJiYgYyhsKDEsIFtlXSkpLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICFrICYmIDAgPCBlLmxlbmd0aCAmJiAoKGEgPSBlKSwgKGUgPSBbXSksIGMobCgxLCBbYV0pKSlcbiAgICAgICAgICA6IChnID0gYVswXSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IFtdLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9IG0sXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gayB8fCAoKGsgPSAhMCksIGcoMSksIDAgPCBlLmxlbmd0aCAmJiBjKGwoMSwgW2VdKSksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gayB8fCAoZS5wdXNoKGJbMF0pLCBoID8gKGggPSAhMSkgOiAoKGggPSAhMCksIGYoMCksIGcoMCkpKVxuICAgICAgICAgIDogKChmID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFrKSB7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChrID0gITApLCBmKDEpLCBnKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZigwKSwgZygwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmUkMShhLCBiKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9IG0sXG4gICAgICAgIGYgPSB2b2lkIDAsXG4gICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9IDAsXG4gICAgICAgIG4gPSAhMTtcbiAgICAgIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBnO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gMSA+IGtcbiAgICAgICAgICAgID8gKGsgPSAoayArIDEpIHwgMClcbiAgICAgICAgICAgIDogbiB8fCAoKG4gPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChhID0gYVswXSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IGJcbiAgICAgICAgICAgICAgPyBuIHx8ICgoZiA9IHcoYSkpLCAoaCA9ICExKSwgYyhsKDEsIFtbYSwgeChiKV1dKSkpXG4gICAgICAgICAgICAgIDogKChmID0gdyhhKSksIGggPyAoaCA9ICExKSA6IGUoMCkpKVxuICAgICAgICAgIDogKGQgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYihmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYiA9IGY7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyAxID4ga1xuICAgICAgICAgICAgPyAoayA9IChrICsgMSkgfCAwKVxuICAgICAgICAgICAgOiBuIHx8ICgobiA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGEgPSBhWzBdKSxcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gYlxuICAgICAgICAgICAgICA/IG4gfHwgKChnID0gdyhhKSksIChoID0gITEpLCBjKGwoMSwgW1t4KGIpLCBhXV0pKSlcbiAgICAgICAgICAgICAgOiAoKGcgPSB3KGEpKSwgaCA/IChoID0gITEpIDogZCgwKSkpXG4gICAgICAgICAgOiAoZSA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuID0gITApLCBkKDEpLCBlKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZChjKSwgZShjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH0pKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBjb25jYXQkMShhKSB7XG4gIHJldHVybiB6KEIpKHAoYSkpO1xufVxuXG5mdW5jdGlvbiBjb25jYXRBbGwkMShhKSB7XG4gIHJldHVybiB6KEEpKGEpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKCkge1xuICAgICAgICB2YXIgYSA9IGU7XG4gICAgICAgIHZvaWQgMCAhPT0gYSAmJiAoKGUgPSB2b2lkIDApLCBjbGVhclRpbWVvdXQoeChhKSkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSB2b2lkIDAsXG4gICAgICAgIGYgPSAhMSxcbiAgICAgICAgZyA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgZyB8fCAoKGcgPSAhMCksIHZvaWQgMCAhPT0gZSA/IChmID0gITApIDogYygwKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYi50YWcpIHtcbiAgICAgICAgICBnIHx8XG4gICAgICAgICAgICAoZCgpLFxuICAgICAgICAgICAgKGUgPSB3KFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGMoYik7XG4gICAgICAgICAgICAgICAgZiAmJiBjKDApO1xuICAgICAgICAgICAgICB9LCBhKGJbMF0pKVxuICAgICAgICAgICAgKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYSA/ICgoZyA9ICEwKSwgKGYgPSAhMSksIGQoKSwgbigxKSkgOiBuKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXkkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAwO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgfHwgYi50YWdcbiAgICAgICAgICA/ICgoZCA9IChkICsgMSkgfCAwKSxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAwICE9PSBkICYmICgoZCA9IChkIC0gMSkgfCAwKSwgYyhiKSk7XG4gICAgICAgICAgICB9LCBhKSlcbiAgICAgICAgICA6IGMoYik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgPyBjKGIpIDogYi50YWcgPyAoYShiWzBdKSA/IGMoYikgOiBkKDApKSA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIE4oYSkoYik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21DYWxsYmFnJDIoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBmdW5jdGlvbiBjKGEsIGMpIHtcbiAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYihcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhID8gYygyKSA6IGMoMSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGIobCgxLCBbY10pKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgYigwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDIgPT09IGEubGVuZ3RoID8gYSgwLCBjKSA6IGEuYmluZChudWxsLCAwLCBjKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbURvbUV2ZW50JDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgYyhsKDEsIFthXSkpO1xuICAgICAgfVxuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGMgJiYgYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsIGQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKGIsIGQpO1xuICAgIH07XG4gIH0pKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBmcm9tTGlzdCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAhMSxcbiAgICAgIGQgPSAhMSxcbiAgICAgIGUgPSAhMSxcbiAgICAgIGYgPSBhO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgYyA9ICEwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZCkge1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGQgPSBlID0gITA7IGUgJiYgIWM7ICkge1xuICAgICAgICAgICAgICAoYSA9IGYpID8gKChmID0gYVsxXSksIChlID0gITEpLCBiKGwoMSwgW2FbMF1dKSkpIDogKChjID0gITApLCBiKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQgPSAhMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21PYnNlcnZhYmxlJDIoYSkge1xuICB2YXIgYiA9IHZvaWQgMCAhPT0gYVtQXSA/IGFbUF0oKSA6IGE7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBjID0gYi5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYShsKDEsIFtjXSkpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGEoMCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IFEsXG4gICAgfSk7XG4gICAgYShcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gYy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITE7XG4gICAgYS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICBjIHx8IChiKGwoMSwgW2FdKSksIGIoMCkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2b2lkIDApO1xuICAgIH0pO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhICYmIChjID0gITApO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tVmFsdWUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITE7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGQgPyAoYyA9ICEwKSA6IGMgfHwgKChjID0gITApLCBiKGwoMSwgW2FdKSksIGIoMCkpO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnZhbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAwO1xuICAgIHZhciBkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSBjO1xuICAgICAgYyA9IChjICsgMSkgfCAwO1xuICAgICAgYihsKDEsIFthXSkpO1xuICAgIH0sIGEpO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhICYmIGNsZWFySW50ZXJ2YWwoZCk7XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gcixcbiAgICAgIGQgPSAhMTtcbiAgICBjID0gYSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgICBkIHx8IGIobCgxLCBbYV0pKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBkIHx8ICgoZCA9ICEwKSwgYigwKSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSAmJiAhZCkge1xuICAgICAgICAgICAgcmV0dXJuIChkID0gITApLCBjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlU3ViamVjdCQxKCkge1xuICBsZXQgYSA9IFtdLFxuICAgIGIgPSAhMTtcbiAgcmV0dXJuIHtcbiAgICBzb3VyY2U6IGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IGM7XG4gICAgICB9XG4gICAgICBhID0gYS5jb25jYXQoYyk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgYyAmJiAoYSA9IGEuZmlsdGVyKGIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uIChjKSB7XG4gICAgICBiIHx8XG4gICAgICAgIGEuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGEobCgxLCBbY10pKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgYiB8fCAoKGIgPSAhMCksIGEuZm9yRWFjaCh0KSk7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGIgPSAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IDAgOiBiLnRhZyA/IGwoMSwgW2EoYlswXSldKSA6IGwoMCwgW2JbMF1dKTtcbiAgICAgICAgYyhiKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlJDEoYSkge1xuICByZXR1cm4gRChFKShwKGEpKTtcbn1cblxuZnVuY3Rpb24gbmV2ZXIkMShhKSB7XG4gIGEobCgwLCBbbV0pKTtcbn1cblxuZnVuY3Rpb24gb25FbmQkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGQgPSAhMDtcbiAgICAgICAgICBjKGIpO1xuICAgICAgICAgIHJldHVybiBhKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZCB8fCBjKGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyA/ICgoZCA9ICEwKSwgZShjKSwgYSgpKSA6IGUoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBvblN0YXJ0JDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiID8gYyhiKSA6IGIudGFnID8gYyhiKSA6IChjKGIpLCBhKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgYSA9IGFyZ3VtZW50cywgYiA9IGFyZ3VtZW50c1swXSwgYyA9IDEsIGQgPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgZDsgYysrKSB7XG4gICAgYiA9IGFbY10oYik7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gkMShhKSB7XG4gIHJldHVybiBOKE8pKGEpO1xufVxuXG5mdW5jdGlvbiBzYW1wbGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gbSxcbiAgICAgICAgZiA9IHZvaWQgMCxcbiAgICAgICAgZyA9ICExLFxuICAgICAgICBoID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBoIHx8ICgoaCA9ICEwKSwgZSgxKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGYgPSB3KGFbMF0pKSwgZyA/IChnID0gITEpIDogKChnID0gITApLCBlKDApLCBkKDApKSlcbiAgICAgICAgICA6IChkID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBmO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIGQoMSksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gdm9pZCAwID09PSBiIHx8IGggfHwgKChmID0gdm9pZCAwKSwgYyhsKDEsIFt4KGIpXSkpKVxuICAgICAgICAgIDogKGUgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZCgxKSwgZSgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGcgPSAhMCksIGQoMCksIGUoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuJDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IGUgPSBiO1xuICAgICAgICByZXR1cm4gYyhmdW5jdGlvbiAoYykge1xuICAgICAgICAgICdudW1iZXInID09IHR5cGVvZiBjXG4gICAgICAgICAgICA/IChjID0gMClcbiAgICAgICAgICAgIDogYy50YWdcbiAgICAgICAgICAgID8gKChlID0gYShlLCBjWzBdKSksIChjID0gbCgxLCBbZV0pKSlcbiAgICAgICAgICAgIDogKGMgPSBsKDAsIFtjWzBdXSkpO1xuICAgICAgICAgIGQoYyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gc2hhcmUkMShhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICA/IChjLmZvckVhY2goSiksIChjID0gW10pKVxuICAgICAgOiBhLnRhZ1xuICAgICAgPyAoKGUgPSAhMSksXG4gICAgICAgIGMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIGIoYSk7XG4gICAgICAgIH0pKVxuICAgICAgOiAoZCA9IGFbMF0pO1xuICB9XG4gIGxldCBjID0gW10sXG4gICAgZCA9IG0sXG4gICAgZSA9ICExO1xuICByZXR1cm4gZnVuY3Rpb24gKGYpIHtcbiAgICBmdW5jdGlvbiBnKGEpIHtcbiAgICAgIHJldHVybiBhICE9PSBmO1xuICAgIH1cbiAgICBjID0gYy5jb25jYXQoZik7XG4gICAgMSA9PT0gYy5sZW5ndGggJiYgYShiKTtcbiAgICBmKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGlmICgoKGMgPSBjLmZpbHRlcihnKSksIDAgPT09IGMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSB8fCAoKGUgPSAhMCksIGQoYSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2tpcCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSBhO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGMoYSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAwIDwgZVxuICAgICAgICAgICAgPyAoKGUgPSAoZSAtIDEpIHwgMCksIGQoMCkpXG4gICAgICAgICAgICA6IGMoYSlcbiAgICAgICAgICA6ICgoZCA9IGFbMF0pLCBjKGEpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXBVbnRpbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGcgJiYgKChrID0gITApLCBlKDEpKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoZyA9ICExKSwgZigxKSlcbiAgICAgICAgICA6ICgoZiA9IGEgPSBhWzBdKSwgYSgwKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IG0sXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gITAsXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gKGcgJiYgZigxKSwgKGsgPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZyB8fCBrXG4gICAgICAgICAgICA/IGhcbiAgICAgICAgICAgICAgPyAoaCA9ICExKVxuICAgICAgICAgICAgICA6ICgoaCA9ICEwKSwgZSgwKSwgZigwKSlcbiAgICAgICAgICAgIDogKChoID0gITEpLCBjKGIpKVxuICAgICAgICAgIDogKChlID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFrKSB7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgoayA9ICEwKSwgZSgxKSwgZykpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoIHx8ICgoaCA9ICEwKSwgZyAmJiBmKDApLCBlKDApKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXBXaGlsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSAhMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBjKGIpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZVxuICAgICAgICAgICAgPyBhKGJbMF0pXG4gICAgICAgICAgICAgID8gZCgwKVxuICAgICAgICAgICAgICA6ICgoZSA9ICExKSwgYyhiKSlcbiAgICAgICAgICAgIDogYyhiKVxuICAgICAgICAgIDogKChkID0gYlswXSksIGMoYikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQWxsJDEoYSkge1xuICByZXR1cm4gSyhMKShhKTtcbn1cblxuZnVuY3Rpb24gdGFrZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9ICExLFxuICAgICAgICBlID0gMCxcbiAgICAgICAgZiA9IG07XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBkIHx8ICgoZCA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBlIDwgYSAmJiAhZCAmJiAoKGUgPSAoZSArIDEpIHwgMCksIGMoYiksICFkICYmIGUgPj0gYSAmJiAoKGQgPSAhMCksIGMoMCksIGYoMSkpKVxuICAgICAgICAgIDogKChiID0gYlswXSksIDAgPj0gYSA/ICgoZCA9ICEwKSwgYygwKSwgYigxKSkgOiAoZiA9IGIpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZCA9ICEwKSwgZigxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZSA8IGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZigwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VVbnRpbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgIT0gdHlwZW9mIGEgJiYgKGEudGFnID8gKChlID0gITApLCBmKDEpLCBjKDApKSA6ICgoZyA9IGEgPSBhWzBdKSwgYSgwKSkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSAhMSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSBtO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IGUgfHwgKChlID0gITApLCBnKDEpLCBjKDApKSA6IGIudGFnID8gZSB8fCBjKGIpIDogKChmID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhID8gKChlID0gITApLCBmKDEpLCBnKDEpKSA6IGYoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZVdoaWxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGUgfHwgKChlID0gITApLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGUgfHwgKGEoYlswXSkgPyBjKGIpIDogKChlID0gITApLCBjKDApLCBkKDEpKSlcbiAgICAgICAgICA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoKSB7XG4gICAgICAgIHZvaWQgMCAhPT0gZyAmJiBjbGVhclRpbWVvdXQoeChnKSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICBnID0gdm9pZCAwO1xuICAgICAgICBmID0gITE7XG4gICAgICB9XG4gICAgICBsZXQgZiA9ICExLFxuICAgICAgICBnID0gdm9pZCAwO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgZCgpLCBjKDApO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZiB8fCAoKGYgPSAhMCksIGQoKSwgKGcgPSB3KHNldFRpbWVvdXQoZSwgYShiWzBdKSkpKSwgYyhiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGggPSBiWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA/IChkKCksIGgoMSkpIDogaChhKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSQxKGEpIHtcbiAgbGV0IGIgPSBbXSxcbiAgICBjID0gbSxcbiAgICBkID0gITE7XG4gIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYSA/IChkID0gITApIDogYS50YWcgPyAoYi5wdXNoKGFbMF0pLCBjKDApKSA6ICgoYyA9IGEgPSBhWzBdKSwgYSgwKSk7XG4gIH0pO1xuICBkIHx8IGMoMSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiB0b0NhbGxiYWckMihhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYiwgYykge1xuICAgIGlmICgwID09PSBiKSB7XG4gICAgICByZXR1cm4gYShmdW5jdGlvbiAoYSkge1xuICAgICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgZCgwKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgZCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBhKSB7XG4gICAgICAgICAgcmV0dXJuIDIgPT09IGMubGVuZ3RoID8gYygyLCB2b2lkIDApIDogYy5iaW5kKG51bGwsIDIsIHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudGFnKSB7XG4gICAgICAgICAgcmV0dXJuIChhID0gYVswXSksIDIgPT09IGMubGVuZ3RoID8gYygxLCBhKSA6IGMuYmluZChudWxsLCAxLCBhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IGFbMF07XG4gICAgICAgIHJldHVybiAyID09PSBjLmxlbmd0aCA/IGMoMCwgYikgOiBjLmJpbmQobnVsbCwgMCwgYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvT2JzZXJ2YWJsZSQyKGEpIHtcbiAgdmFyIGIgPSB7XG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoYiwgZCwgZSkge1xuICAgICAgdmFyIGMgPSAoJ29iamVjdCcgPT0gdHlwZW9mIGIgPyBiLm5leHQuYmluZChiKSA6IGIpIHx8IFIsXG4gICAgICAgIGcgPSAoJ29iamVjdCcgPT0gdHlwZW9mIGIgPyBiLmNvbXBsZXRlLmJpbmQoYikgOiBlKSB8fCBTO1xuICAgICAgbGV0IGggPSBtLFxuICAgICAgICBrID0gITE7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYSkge1xuICAgICAgICAgIHJldHVybiAoayA9ICEwKSwgZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGMoYVswXSk7XG4gICAgICAgICAgcmV0dXJuIGgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IGEgPSBhWzBdO1xuICAgICAgICBhKDApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNsb3NlZCA9ICExKSwgKGsgPSAhMCksIGgoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZWQ6ICExLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuICBiW1BdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gdG9Qcm9taXNlJDEoYSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGIpIHtcbiAgICBNKDEpKGEpKGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoJ251bWJlcicgIT0gdHlwZW9mIGEpIHtcbiAgICAgICAgaWYgKGEudGFnKSB7XG4gICAgICAgICAgYihhWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhWzBdKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdiA9IFtdLFxuICBQID1cbiAgICAnZnVuY3Rpb24nID09IHR5cGVvZiBTeW1ib2xcbiAgICAgID8gU3ltYm9sLm9ic2VydmFibGUgfHwgKFN5bWJvbC5vYnNlcnZhYmxlID0gU3ltYm9sKCdvYnNlcnZhYmxlJykpXG4gICAgICA6ICdAQG9ic2VydmFibGUnO1xuXG5leHBvcnQge1xuICBidWZmZXIkMSBhcyBidWZmZXIsXG4gIGNvbWJpbmUkMSBhcyBjb21iaW5lLFxuICBjb25jYXQkMSBhcyBjb25jYXQsXG4gIGNvbmNhdEFsbCQxIGFzIGNvbmNhdEFsbCxcbiAgeiBhcyBjb25jYXRNYXAsXG4gIGRlYm91bmNlJDEgYXMgZGVib3VuY2UsXG4gIGRlbGF5JDEgYXMgZGVsYXksXG4gIHUgYXMgZW1wdHksXG4gIGZpbHRlciQxIGFzIGZpbHRlcixcbiAgRyBhcyBmbGF0dGVuLFxuICBmb3JFYWNoJDEgYXMgZm9yRWFjaCxcbiAgcCBhcyBmcm9tQXJyYXksXG4gIGZyb21DYWxsYmFnJDIgYXMgZnJvbUNhbGxiYWcsXG4gIGZyb21Eb21FdmVudCQxIGFzIGZyb21Eb21FdmVudCxcbiAgZnJvbUxpc3QkMSBhcyBmcm9tTGlzdCxcbiAgZnJvbU9ic2VydmFibGUkMiBhcyBmcm9tT2JzZXJ2YWJsZSxcbiAgZnJvbVByb21pc2UkMSBhcyBmcm9tUHJvbWlzZSxcbiAgZnJvbVZhbHVlJDEgYXMgZnJvbVZhbHVlLFxuICBpbnRlcnZhbCQxIGFzIGludGVydmFsLFxuICBtYWtlJDEgYXMgbWFrZSxcbiAgbWFrZVN1YmplY3QkMSBhcyBtYWtlU3ViamVjdCxcbiAgbWFwJDEgYXMgbWFwLFxuICBtZXJnZSQxIGFzIG1lcmdlLFxuICBHIGFzIG1lcmdlQWxsLFxuICBEIGFzIG1lcmdlTWFwLFxuICBuZXZlciQxIGFzIG5ldmVyLFxuICBvbkVuZCQxIGFzIG9uRW5kLFxuICBIIGFzIG9uUHVzaCxcbiAgb25TdGFydCQxIGFzIG9uU3RhcnQsXG4gIHBpcGUsXG4gIHB1Ymxpc2gkMSBhcyBwdWJsaXNoLFxuICBzYW1wbGUkMSBhcyBzYW1wbGUsXG4gIHNjYW4kMSBhcyBzY2FuLFxuICBzaGFyZSQxIGFzIHNoYXJlLFxuICBza2lwJDEgYXMgc2tpcCxcbiAgc2tpcFVudGlsJDEgYXMgc2tpcFVudGlsLFxuICBza2lwV2hpbGUkMSBhcyBza2lwV2hpbGUsXG4gIE4gYXMgc3Vic2NyaWJlLFxuICBzd2l0Y2hBbGwkMSBhcyBzd2l0Y2hBbGwsXG4gIEsgYXMgc3dpdGNoTWFwLFxuICB0YWtlJDEgYXMgdGFrZSxcbiAgTSBhcyB0YWtlTGFzdCxcbiAgdGFrZVVudGlsJDEgYXMgdGFrZVVudGlsLFxuICB0YWtlV2hpbGUkMSBhcyB0YWtlV2hpbGUsXG4gIEggYXMgdGFwLFxuICB0aHJvdHRsZSQxIGFzIHRocm90dGxlLFxuICB0b0FycmF5JDEgYXMgdG9BcnJheSxcbiAgdG9DYWxsYmFnJDIgYXMgdG9DYWxsYmFnLFxuICB0b09ic2VydmFibGUkMiBhcyB0b09ic2VydmFibGUsXG4gIHRvUHJvbWlzZSQxIGFzIHRvUHJvbWlzZSxcbn07XG4iXSwibmFtZXMiOlsidXNlRm9ybWlrIiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIldyYXBwZXIiLCJSZWFjdCIsInVzZU11dGF0aW9uIiwiUkVHSVNURVJfTVVUIiwicmVnaXN0ZXIiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImlzU3VibWl0dGluZyJdLCJzb3VyY2VSb290IjoiIn0=