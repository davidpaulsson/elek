'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_slicedToArray=function(){function a(b,c){var d=[],e=!0,f=!1,g=void 0;try{for(var j,h=b[Symbol.iterator]();!(e=(j=h.next()).done)&&(d.push(j.value),!(c&&d.length===c));e=!0);}catch(k){f=!0,g=k}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw g}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),_object=require('object.entries'),_object2=_interopRequireDefault(_object),_deepEqual=require('deep-equal'),_deepEqual2=_interopRequireDefault(_deepEqual);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var elek=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,d=[],e=[],f=function(g){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var j,h=(0,_object2.default)(g)[Symbol.iterator]();!(_iteratorNormalCompletion=(j=h.next()).done);_iteratorNormalCompletion=!0){var _step$value=_slicedToArray(j.value,2),k=_step$value[0],l=_step$value[1];'object'==('undefined'==typeof b?'undefined':_typeof(b))?'object'!=('undefined'==typeof l?'undefined':_typeof(l))||(0,_deepEqual2.default)(b,l)?d.push(c?_defineProperty({},k,l):l):f(l):l&&!b.match(new RegExp(k))?'string'!=typeof l&&(e.push(c?_defineProperty({},k,l):l),f(l)):d.push(e.pop())}}catch(k){_didIteratorError=!0,_iteratorError=k}finally{try{!_iteratorNormalCompletion&&h.return&&h.return()}finally{if(_didIteratorError)throw _iteratorError}}};return f(a),'object'==('undefined'==typeof b?'undefined':_typeof(b))?[].concat(_toConsumableArray(new Set(d.filter(function(g){return'object'===('undefined'==typeof g?'undefined':_typeof(g))})))):[].concat(_toConsumableArray(new Set(d)))};exports.default=elek;
