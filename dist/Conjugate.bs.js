// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({20:[function(require,module,exports) {
'use strict';


var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory = out_of_memory;
exports.sys_error = sys_error;
exports.failure = failure;
exports.invalid_argument = invalid_argument;
exports.end_of_file = end_of_file;
exports.division_by_zero = division_by_zero;
exports.not_found = not_found;
exports.match_failure = match_failure;
exports.stack_overflow = stack_overflow;
exports.sys_blocked_io = sys_blocked_io;
exports.assert_failure = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */

},{}],11:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = 0;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}

exports.caml_array_dup = caml_array_dup;
exports.caml_array_sub = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect = caml_make_vect;
exports.caml_make_float_vect = caml_make_float_vect;
exports.caml_array_blit = caml_array_blit;
exports.caml_array_get = caml_array_get;
exports.caml_array_set = caml_array_set;
/* No side effect */

},{"./caml_builtin_exceptions.js":20}],7:[function(require,module,exports) {
'use strict';

var Caml_array = require("./caml_array.js");

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity === 0 ? 1 : arity;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
      _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app = app;
exports.curry_1 = curry_1;
exports._1 = _1;
exports.__1 = __1;
exports.curry_2 = curry_2;
exports._2 = _2;
exports.__2 = __2;
exports.curry_3 = curry_3;
exports._3 = _3;
exports.__3 = __3;
exports.curry_4 = curry_4;
exports._4 = _4;
exports.__4 = __4;
exports.curry_5 = curry_5;
exports._5 = _5;
exports.__5 = __5;
exports.curry_6 = curry_6;
exports._6 = _6;
exports.__6 = __6;
exports.curry_7 = curry_7;
exports._7 = _7;
exports.__7 = __7;
exports.curry_8 = curry_8;
exports._8 = _8;
exports.__8 = __8;
/* No side effect */

},{"./caml_array.js":11}],39:[function(require,module,exports) {
'use strict';


function equal(x, y) {
  return x === y;
}

var max = 2147483647;

var min = -2147483648;

exports.equal = equal;
exports.max = max;
exports.min = min;
/* No side effect */

},{}],22:[function(require,module,exports) {
'use strict';

var Js_int = require("./js_int.js");

function unsafe_ceil(prim) {
  return Math.ceil(prim);
}

function ceil_int(f) {
  if (f > Js_int.max) {
    return Js_int.max;
  } else if (f < Js_int.min) {
    return Js_int.min;
  } else {
    return Math.ceil(f);
  }
}

function unsafe_floor(prim) {
  return Math.floor(prim);
}

function floor_int(f) {
  if (f > Js_int.max) {
    return Js_int.max;
  } else if (f < Js_int.min) {
    return Js_int.min;
  } else {
    return Math.floor(f);
  }
}

function random_int(min, max) {
  return floor_int(Math.random() * (max - min | 0)) + min | 0;
}

var ceil = ceil_int;

var floor = floor_int;

exports.unsafe_ceil = unsafe_ceil;
exports.ceil_int = ceil_int;
exports.ceil = ceil;
exports.unsafe_floor = unsafe_floor;
exports.floor_int = floor_int;
exports.floor = floor;
exports.random_int = random_int;
/* No side effect */

},{"./js_int.js":39}],23:[function(require,module,exports) {
'use strict';


function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;

var caml_int32_compare = caml_int_compare;

exports.caml_int_compare = caml_int_compare;
exports.caml_bool_compare = caml_bool_compare;
exports.caml_float_compare = caml_float_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_string_compare = caml_string_compare;
exports.caml_int32_compare = caml_int32_compare;
exports.caml_bool_min = caml_bool_min;
exports.caml_int_min = caml_int_min;
exports.caml_float_min = caml_float_min;
exports.caml_string_min = caml_string_min;
exports.caml_nativeint_min = caml_nativeint_min;
exports.caml_int32_min = caml_int32_min;
exports.caml_bool_max = caml_bool_max;
exports.caml_int_max = caml_int_max;
exports.caml_float_max = caml_float_max;
exports.caml_string_max = caml_string_max;
exports.caml_nativeint_max = caml_nativeint_max;
exports.caml_int32_max = caml_int32_max;
/* No side effect */

},{}],10:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");
var Js_math = require("./js_math.js");
var Caml_primitive = require("./caml_primitive.js");

function get(arr, i) {
  if (i >= 0 && i < arr.length) {
    return /* Some */[arr[i]];
  } else {
    return /* None */0;
  }
}

function getExn(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw new Error("File \"belt_Array.ml\", line 25, characters 6-12");
  }
  return arr[i];
}

function set(arr, i, v) {
  if (i >= 0 && i < arr.length) {
    arr[i] = v;
    return true;
  } else {
    return false;
  }
}

function setExn(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw new Error("File \"belt_Array.ml\", line 31, characters 4-10");
  }
  arr[i] = v;
  return /* () */0;
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
  return /* () */0;
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    swapUnsafe(xs, i, Js_math.random_int(i, len));
  }
  return /* () */0;
}

function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}

function reverseInPlace(xs) {
  var len = xs.length;
  var xs$1 = xs;
  var ofs = 0;
  var len$1 = len;
  for(var i = 0 ,i_finish = (len$1 / 2 | 0) - 1 | 0; i <= i_finish; ++i){
    swapUnsafe(xs$1, ofs + i | 0, ((ofs + len$1 | 0) - i | 0) - 1 | 0);
  }
  return /* () */0;
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function make(l, f) {
  if (l <= 0) {
    return /* array */[];
  } else {
    var res = new Array(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = f;
    }
    return res;
  }
}

function makeByU(l, f) {
  if (l <= 0) {
    return /* array */[];
  } else {
    var res = new Array(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = f(i);
    }
    return res;
  }
}

function makeBy(l, f) {
  return makeByU(l, Curry.__1(f));
}

function makeByAndShuffleU(l, f) {
  var u = makeByU(l, f);
  shuffleInPlace(u);
  return u;
}

function makeByAndShuffle(l, f) {
  return makeByAndShuffleU(l, Curry.__1(f));
}

function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return /* array */[];
  } else {
    var arr = new Array(cut + 1 | 0);
    for(var i = 0; i <= cut; ++i){
      arr[i] = start + i | 0;
    }
    return arr;
  }
}

function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return /* array */[];
  } else {
    var nb = (cut / step | 0) + 1 | 0;
    var arr = new Array(nb);
    var cur = start;
    for(var i = 0 ,i_finish = nb - 1 | 0; i <= i_finish; ++i){
      arr[i] = cur;
      cur = cur + step | 0;
    }
    return arr;
  }
}

function zip(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    s[i] = /* tuple */[
      xs[i],
      ys[i]
    ];
  }
  return s;
}

function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}

function zipBy(xs, ys, f) {
  return zipByU(xs, ys, Curry.__2(f));
}

function concat(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for(var i = 0 ,i_finish = l1 - 1 | 0; i <= i_finish; ++i){
    a1a2[i] = a1[i];
  }
  for(var i$1 = 0 ,i_finish$1 = l2 - 1 | 0; i$1 <= i_finish$1; ++i$1){
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}

function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for(var i = 0 ,i_finish = lenArrs - 1 | 0; i <= i_finish; ++i){
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for(var j = 0 ,j_finish = lenArrs - 1 | 0; j <= j_finish; ++j){
    var cur = arrs[j];
    for(var k = 0 ,k_finish = cur.length - 1 | 0; k <= k_finish; ++k){
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

function slice(a, offset, len) {
  if (len <= 0) {
    return /* array */[];
  } else {
    var lena = a.length;
    var ofs = offset < 0 ? Caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;
    var hasLen = lena - ofs | 0;
    var copyLength = hasLen < len ? hasLen : len;
    if (copyLength <= 0) {
      return /* array */[];
    } else {
      var result = new Array(copyLength);
      for(var i = 0 ,i_finish = copyLength - 1 | 0; i <= i_finish; ++i){
        result[i] = a[ofs + i | 0];
      }
      return result;
    }
  }
}

function fill(a, offset, len, v) {
  if (len > 0) {
    var lena = a.length;
    var ofs = offset < 0 ? Caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;
    var hasLen = lena - ofs | 0;
    var fillLength = hasLen < len ? hasLen : len;
    if (fillLength > 0) {
      for(var i = ofs ,i_finish = (ofs + fillLength | 0) - 1 | 0; i <= i_finish; ++i){
        a[i] = v;
      }
      return /* () */0;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for(var j = 0 ,j_finish = blitLength - 1 | 0; j <= j_finish; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
    }
    return /* () */0;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  var lena1 = a1.length;
  var lena2 = a2.length;
  var srcofs1 = ofs1 < 0 ? Caml_primitive.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;
  var srcofs2 = ofs2 < 0 ? Caml_primitive.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;
  var blitLength = Caml_primitive.caml_int_min(len, Caml_primitive.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for(var j = 0 ,j_finish = blitLength - 1 | 0; j <= j_finish; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
    }
    return /* () */0;
  }
}

function forEachU(a, f) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    f(a[i]);
  }
  return /* () */0;
}

function forEach(a, f) {
  return forEachU(a, Curry.__1(f));
}

function mapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function map(a, f) {
  return mapU(a, Curry.__1(f));
}

function keepU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keep(a, f) {
  return keepU(a, Curry.__1(f));
}

function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var v = a[i];
    var match = f(v);
    if (match) {
      r[j] = match[0];
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepMap(a, f) {
  return keepMapU(a, Curry.__1(f));
}

function forEachWithIndexU(a, f) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    f(i, a[i]);
  }
  return /* () */0;
}

function forEachWithIndex(a, f) {
  return forEachWithIndexU(a, Curry.__2(f));
}

function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function mapWithIndex(a, f) {
  return mapWithIndexU(a, Curry.__2(f));
}

function reduceU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function reduce(a, x, f) {
  return reduceU(a, x, Curry.__2(f));
}

function reduceReverseU(a, x, f) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(r, a[i]);
  }
  return r;
}

function reduceReverse(a, x, f) {
  return reduceReverseU(a, x, Curry.__2(f));
}

function reduceReverse2U(a, b, x, f) {
  var r = x;
  var len = Caml_primitive.caml_int_min(a.length, b.length);
  for(var i = len - 1 | 0; i >= 0; --i){
    r = f(r, a[i], b[i]);
  }
  return r;
}

function reduceReverse2(a, b, x, f) {
  return reduceReverse2U(a, b, x, Curry.__3(f));
}

function everyU(arr, b) {
  var len = arr.length;
  var arr$1 = arr;
  var _i = 0;
  var b$1 = b;
  var len$1 = len;
  while(true) {
    var i = _i;
    if (i === len$1) {
      return true;
    } else if (b$1(arr$1[i])) {
      _i = i + 1 | 0;
      continue ;
    } else {
      return false;
    }
  };
}

function every(arr, f) {
  return everyU(arr, Curry.__1(f));
}

function someU(arr, b) {
  var len = arr.length;
  var arr$1 = arr;
  var _i = 0;
  var b$1 = b;
  var len$1 = len;
  while(true) {
    var i = _i;
    if (i === len$1) {
      return false;
    } else if (b$1(arr$1[i])) {
      return true;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  };
}

function some(arr, f) {
  return someU(arr, Curry.__1(f));
}

function everyAux2(arr1, arr2, _i, b, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    } else if (b(arr1[i], arr2[i])) {
      _i = i + 1 | 0;
      continue ;
    } else {
      return false;
    }
  };
}

function every2U(a, b, p) {
  return everyAux2(a, b, 0, p, Caml_primitive.caml_int_min(a.length, b.length));
}

function every2(a, b, p) {
  return every2U(a, b, Curry.__2(p));
}

function some2U(a, b, p) {
  var arr1 = a;
  var arr2 = b;
  var _i = 0;
  var b$1 = p;
  var len = Caml_primitive.caml_int_min(a.length, b.length);
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    } else if (b$1(arr1[i], arr2[i])) {
      return true;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  };
}

function some2(a, b, p) {
  return some2U(a, b, Curry.__2(p));
}

function eqU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}

function eq(a, b, p) {
  return eqU(a, b, Curry.__2(p));
}

function cmpU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    var arr1 = a;
    var arr2 = b;
    var _i = 0;
    var b$1 = p;
    var len = lena;
    while(true) {
      var i = _i;
      if (i === len) {
        return 0;
      } else {
        var c = b$1(arr1[i], arr2[i]);
        if (c === 0) {
          _i = i + 1 | 0;
          continue ;
        } else {
          return c;
        }
      }
    };
  }
}

function cmp(a, b, p) {
  return cmpU(a, b, Curry.__2(p));
}

exports.get = get;
exports.getExn = getExn;
exports.set = set;
exports.setExn = setExn;
exports.shuffleInPlace = shuffleInPlace;
exports.shuffle = shuffle;
exports.reverseInPlace = reverseInPlace;
exports.reverse = reverse;
exports.make = make;
exports.range = range;
exports.rangeBy = rangeBy;
exports.makeByU = makeByU;
exports.makeBy = makeBy;
exports.makeByAndShuffleU = makeByAndShuffleU;
exports.makeByAndShuffle = makeByAndShuffle;
exports.zip = zip;
exports.zipByU = zipByU;
exports.zipBy = zipBy;
exports.concat = concat;
exports.concatMany = concatMany;
exports.slice = slice;
exports.fill = fill;
exports.blit = blit;
exports.blitUnsafe = blitUnsafe;
exports.forEachU = forEachU;
exports.forEach = forEach;
exports.mapU = mapU;
exports.map = map;
exports.keepU = keepU;
exports.keep = keep;
exports.keepMapU = keepMapU;
exports.keepMap = keepMap;
exports.forEachWithIndexU = forEachWithIndexU;
exports.forEachWithIndex = forEachWithIndex;
exports.mapWithIndexU = mapWithIndexU;
exports.mapWithIndex = mapWithIndex;
exports.reduceU = reduceU;
exports.reduce = reduce;
exports.reduceReverseU = reduceReverseU;
exports.reduceReverse = reduceReverse;
exports.reduceReverse2U = reduceReverse2U;
exports.reduceReverse2 = reduceReverse2;
exports.someU = someU;
exports.some = some;
exports.everyU = everyU;
exports.every = every;
exports.every2U = every2U;
exports.every2 = every2;
exports.some2U = some2U;
exports.some2 = some2;
exports.cmpU = cmpU;
exports.cmp = cmp;
exports.eqU = eqU;
exports.eq = eq;
/* No side effect */

},{"./curry.js":7,"./js_math.js":22,"./caml_primitive.js":23}],40:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");
var Belt_Array = require("./belt_Array.js");

function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
  while(true) {
    var acc = _acc;
    var prec = _prec;
    if (acc >= len) {
      return acc;
    } else {
      var v = xs[acc];
      if (lt(v, prec)) {
        _acc = acc + 1 | 0;
        _prec = v;
        continue ;
      } else {
        return acc;
      }
    }
  };
}

function strictlySortedLengthU(xs, lt) {
  var len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  } else {
    var x0 = xs[0];
    var x1 = xs[1];
    if (lt(x0, x1)) {
      var xs$1 = xs;
      var _prec = x1;
      var _acc = 2;
      var len$1 = len;
      var lt$1 = lt;
      while(true) {
        var acc = _acc;
        var prec = _prec;
        if (acc >= len$1) {
          return acc;
        } else {
          var v = xs$1[acc];
          if (lt$1(prec, v)) {
            _acc = acc + 1 | 0;
            _prec = v;
            continue ;
          } else {
            return acc;
          }
        }
      };
    } else if (lt(x1, x0)) {
      return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
    } else {
      return 1;
    }
  }
}

function strictlySortedLength(xs, lt) {
  return strictlySortedLengthU(xs, Curry.__2(lt));
}

function isSortedU(a, cmp) {
  var len = a.length;
  if (len === 0) {
    return true;
  } else {
    var a$1 = a;
    var _i = 0;
    var cmp$1 = cmp;
    var last_bound = len - 1 | 0;
    while(true) {
      var i = _i;
      if (i === last_bound) {
        return true;
      } else if (cmp$1(a$1[i], a$1[i + 1 | 0]) <= 0) {
        _i = i + 1 | 0;
        continue ;
      } else {
        return false;
      }
    };
  }
}

function isSorted(a, cmp) {
  return isSortedU(a, Curry.__2(cmp));
}

function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    if (cmp(s1, s2) <= 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _d = d + 1 | 0;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return Belt_Array.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
    } else {
      dst[d] = s2;
      var i2$1 = i2 + 1 | 0;
      if (i2$1 < src2r) {
        _d = d + 1 | 0;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        continue ;
      } else {
        return Belt_Array.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
      }
    }
  };
}

function unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        Belt_Array.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
        return (d$1 + src2r | 0) - i2 | 0;
      }
    } else if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$2 = d + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _d = d$2;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else if (i1$2 === src1r) {
        Belt_Array.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
        return (d$2 + src2r | 0) - i2$1 | 0;
      } else {
        Belt_Array.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
        return (d$2 + src1r | 0) - i1$2 | 0;
      }
    } else {
      dst[d] = s2;
      var i2$2 = i2 + 1 | 0;
      var d$3 = d + 1 | 0;
      if (i2$2 < src2r) {
        _d = d$3;
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        Belt_Array.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
        return (d$3 + src1r | 0) - i1 | 0;
      }
    }
  };
}

function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
}

function intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return d;
      }
    } else if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _d = d$1;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else {
        return d$1;
      }
    } else {
      var i2$2 = i2 + 1 | 0;
      if (i2$2 < src2r) {
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        return d;
      }
    }
  };
}

function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
}

function diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var d$1 = d + 1 | 0;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return d$1;
      }
    } else if (c === 0) {
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else if (i1$2 === src1r) {
        return d;
      } else {
        Belt_Array.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
        return (d + src1r | 0) - i1$2 | 0;
      }
    } else {
      var i2$2 = i2 + 1 | 0;
      if (i2$2 < src2r) {
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        Belt_Array.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
        return (d + src1r | 0) - i1 | 0;
      }
    }
  };
}

function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
}

function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    var e = src[srcofs + i | 0];
    var j = (dstofs + i | 0) - 1 | 0;
    while(j >= dstofs && cmp(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    };
    dst[j + 1 | 0] = e;
  }
  return /* () */0;
}

function sortTo(src, srcofs, dst, dstofs, len, cmp) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp);
  } else {
    var l1 = len / 2 | 0;
    var l2 = len - l1 | 0;
    sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
    sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
    return merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
  }
}

function stableSortInPlaceByU(a, cmp) {
  var l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = new Array(l2);
    sortTo(a, l1, t, 0, l2, cmp);
    sortTo(a, 0, a, l2, l1, cmp);
    return merge(a, l2, l1, t, 0, l2, a, 0, cmp);
  }
}

function stableSortInPlaceBy(a, cmp) {
  return stableSortInPlaceByU(a, Curry.__2(cmp));
}

function stableSortByU(a, cmp) {
  var b = a.slice(0);
  stableSortInPlaceByU(b, cmp);
  return b;
}

function stableSortBy(a, cmp) {
  return stableSortByU(a, Curry.__2(cmp));
}

function binarySearchByU(sorted, key, cmp) {
  var len = sorted.length;
  if (len === 0) {
    return -1;
  } else {
    var lo = sorted[0];
    var c = cmp(key, lo);
    if (c < 0) {
      return -1;
    } else {
      var hi = sorted[len - 1 | 0];
      var c2 = cmp(key, hi);
      if (c2 > 0) {
        return -(len + 1 | 0) | 0;
      } else {
        var arr = sorted;
        var _lo = 0;
        var _hi = len - 1 | 0;
        var key$1 = key;
        var cmp$1 = cmp;
        while(true) {
          var hi$1 = _hi;
          var lo$1 = _lo;
          var mid = (lo$1 + hi$1 | 0) / 2 | 0;
          var midVal = arr[mid];
          var c$1 = cmp$1(key$1, midVal);
          if (c$1 === 0) {
            return mid;
          } else if (c$1 < 0) {
            if (hi$1 === mid) {
              if (cmp$1(arr[lo$1], key$1) === 0) {
                return lo$1;
              } else {
                return -(hi$1 + 1 | 0) | 0;
              }
            } else {
              _hi = mid;
              continue ;
            }
          } else if (lo$1 === mid) {
            if (cmp$1(arr[hi$1], key$1) === 0) {
              return hi$1;
            } else {
              return -(hi$1 + 1 | 0) | 0;
            }
          } else {
            _lo = mid;
            continue ;
          }
        };
      }
    }
  }
}

function binarySearchBy(sorted, key, cmp) {
  return binarySearchByU(sorted, key, Curry.__2(cmp));
}

var Int = 0;

var $$String = 0;

exports.Int = Int;
exports.$$String = $$String;
exports.strictlySortedLengthU = strictlySortedLengthU;
exports.strictlySortedLength = strictlySortedLength;
exports.isSortedU = isSortedU;
exports.isSorted = isSorted;
exports.stableSortInPlaceByU = stableSortInPlaceByU;
exports.stableSortInPlaceBy = stableSortInPlaceBy;
exports.stableSortByU = stableSortByU;
exports.stableSortBy = stableSortBy;
exports.binarySearchByU = binarySearchByU;
exports.binarySearchBy = binarySearchBy;
exports.unionU = unionU;
exports.union = union;
exports.intersectU = intersectU;
exports.intersect = intersect;
exports.diffU = diffU;
exports.diff = diff;
/* No side effect */

},{"./curry.js":7,"./belt_Array.js":10}],38:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");
var Belt_SortArray = require("./belt_SortArray.js");

function treeHeight(n) {
  if (n !== null) {
    return n.height;
  } else {
    return 0;
  }
}

function copy(n) {
  if (n !== null) {
    var l = n.left;
    var r = n.right;
    return {
            value: n.value,
            height: n.height,
            left: copy(l),
            right: copy(r)
          };
  } else {
    return n;
  }
}

function create(l, v, r) {
  var hl = l !== null ? l.height : 0;
  var hr = r !== null ? r.height : 0;
  return {
          value: v,
          height: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
          left: l,
          right: r
        };
}

function singleton(x) {
  return {
          value: x,
          height: 1,
          left: null,
          right: null
        };
}

function heightGe(l, r) {
  if (r !== null) {
    if (l !== null) {
      return l.height >= r.height;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function bal(l, v, r) {
  var hl = l !== null ? l.height : 0;
  var hr = r !== null ? r.height : 0;
  if (hl > (hr + 2 | 0)) {
    var ll = l.left;
    var lv = l.value;
    var lr = l.right;
    if (heightGe(ll, lr)) {
      return create(ll, lv, create(lr, v, r));
    } else {
      var lrl = lr.left;
      var lrv = lr.value;
      var lrr = lr.right;
      return create(create(ll, lv, lrl), lrv, create(lrr, v, r));
    }
  } else if (hr > (hl + 2 | 0)) {
    var rl = r.left;
    var rv = r.value;
    var rr = r.right;
    if (heightGe(rr, rl)) {
      return create(create(l, v, rl), rv, rr);
    } else {
      var rll = rl.left;
      var rlv = rl.value;
      var rlr = rl.right;
      return create(create(l, v, rll), rlv, create(rlr, rv, rr));
    }
  } else {
    return {
            value: v,
            height: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
            left: l,
            right: r
          };
  }
}

function min0Aux(_n) {
  while(true) {
    var n = _n;
    var match = n.left;
    if (match !== null) {
      _n = match;
      continue ;
    } else {
      return n.value;
    }
  };
}

function minimum(n) {
  if (n !== null) {
    return /* Some */[min0Aux(n)];
  } else {
    return /* None */0;
  }
}

function minUndefined(n) {
  if (n !== null) {
    return min0Aux(n);
  } else {
    return undefined;
  }
}

function max0Aux(_n) {
  while(true) {
    var n = _n;
    var match = n.right;
    if (match !== null) {
      _n = match;
      continue ;
    } else {
      return n.value;
    }
  };
}

function maximum(n) {
  if (n !== null) {
    return /* Some */[max0Aux(n)];
  } else {
    return /* None */0;
  }
}

function maxUndefined(n) {
  if (n !== null) {
    return max0Aux(n);
  } else {
    return undefined;
  }
}

function removeMinAuxWithRef(n, v) {
  var ln = n.left;
  var rn = n.right;
  var kn = n.value;
  if (ln !== null) {
    return bal(removeMinAuxWithRef(ln, v), kn, rn);
  } else {
    v[0] = kn;
    return rn;
  }
}

function isEmpty(n) {
  if (n !== null) {
    return false;
  } else {
    return true;
  }
}

function stackAllLeft(_v, _s) {
  while(true) {
    var s = _s;
    var v = _v;
    if (v !== null) {
      _s = /* :: */[
        v,
        s
      ];
      _v = v.left;
      continue ;
    } else {
      return s;
    }
  };
}

function forEachU(_n, f) {
  while(true) {
    var n = _n;
    if (n !== null) {
      forEachU(n.left, f);
      f(n.value);
      _n = n.right;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function forEach(n, f) {
  return forEachU(n, Curry.__1(f));
}

function reduceU(_s, _accu, f) {
  while(true) {
    var accu = _accu;
    var s = _s;
    if (s !== null) {
      var l = s.left;
      var k = s.value;
      var r = s.right;
      _accu = f(reduceU(l, accu, f), k);
      _s = r;
      continue ;
    } else {
      return accu;
    }
  };
}

function reduce(s, accu, f) {
  return reduceU(s, accu, Curry.__2(f));
}

function everyU(_n, p) {
  while(true) {
    var n = _n;
    if (n !== null) {
      if (p(n.value) && everyU(n.left, p)) {
        _n = n.right;
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function every(n, p) {
  return everyU(n, Curry.__1(p));
}

function someU(_n, p) {
  while(true) {
    var n = _n;
    if (n !== null) {
      if (p(n.value) || someU(n.left, p)) {
        return true;
      } else {
        _n = n.right;
        continue ;
      }
    } else {
      return false;
    }
  };
}

function some(n, p) {
  return someU(n, Curry.__1(p));
}

function addMinElement(n, v) {
  if (n !== null) {
    return bal(addMinElement(n.left, v), n.value, n.right);
  } else {
    return singleton(v);
  }
}

function addMaxElement(n, v) {
  if (n !== null) {
    return bal(n.left, n.value, addMaxElement(n.right, v));
  } else {
    return singleton(v);
  }
}

function joinShared(ln, v, rn) {
  if (ln !== null) {
    if (rn !== null) {
      var lh = ln.height;
      var rh = rn.height;
      if (lh > (rh + 2 | 0)) {
        return bal(ln.left, ln.value, joinShared(ln.right, v, rn));
      } else if (rh > (lh + 2 | 0)) {
        return bal(joinShared(ln, v, rn.left), rn.value, rn.right);
      } else {
        return create(ln, v, rn);
      }
    } else {
      return addMaxElement(ln, v);
    }
  } else {
    return addMinElement(rn, v);
  }
}

function concatShared(t1, t2) {
  if (t1 !== null) {
    if (t2 !== null) {
      var v = [t2.value];
      var t2r = removeMinAuxWithRef(t2, v);
      return joinShared(t1, v[0], t2r);
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function partitionSharedU(n, p) {
  if (n !== null) {
    var value = n.value;
    var match = partitionSharedU(n.left, p);
    var lf = match[1];
    var lt = match[0];
    var pv = p(value);
    var match$1 = partitionSharedU(n.right, p);
    var rf = match$1[1];
    var rt = match$1[0];
    if (pv) {
      return /* tuple */[
              joinShared(lt, value, rt),
              concatShared(lf, rf)
            ];
    } else {
      return /* tuple */[
              concatShared(lt, rt),
              joinShared(lf, value, rf)
            ];
    }
  } else {
    return /* tuple */[
            null,
            null
          ];
  }
}

function partitionShared(n, p) {
  return partitionSharedU(n, Curry.__1(p));
}

function lengthNode(n) {
  var l = n.left;
  var r = n.right;
  var sizeL = l !== null ? lengthNode(l) : 0;
  var sizeR = r !== null ? lengthNode(r) : 0;
  return (1 + sizeL | 0) + sizeR | 0;
}

function size(n) {
  if (n !== null) {
    return lengthNode(n);
  } else {
    return 0;
  }
}

function toListAux(_n, _accu) {
  while(true) {
    var accu = _accu;
    var n = _n;
    if (n !== null) {
      _accu = /* :: */[
        n.value,
        toListAux(n.right, accu)
      ];
      _n = n.left;
      continue ;
    } else {
      return accu;
    }
  };
}

function toList(s) {
  return toListAux(s, /* [] */0);
}

function checkInvariantInternal(_v) {
  while(true) {
    var v = _v;
    if (v !== null) {
      var l = v.left;
      var r = v.right;
      var diff = treeHeight(l) - treeHeight(r) | 0;
      if (!(diff <= 2 && diff >= -2)) {
        throw new Error("File \"belt_internalAVLset.ml\", line 302, characters 6-12");
      }
      checkInvariantInternal(l);
      _v = r;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function fillArray(_n, _i, arr) {
  while(true) {
    var i = _i;
    var n = _n;
    var l = n.left;
    var v = n.value;
    var r = n.right;
    var next = l !== null ? fillArray(l, i, arr) : i;
    arr[next] = v;
    var rnext = next + 1 | 0;
    if (r !== null) {
      _i = rnext;
      _n = r;
      continue ;
    } else {
      return rnext;
    }
  };
}

function fillArrayWithPartition(_n, cursor, arr, p) {
  while(true) {
    var n = _n;
    var l = n.left;
    var v = n.value;
    var r = n.right;
    if (l !== null) {
      fillArrayWithPartition(l, cursor, arr, p);
    }
    if (p(v)) {
      var c = cursor.forward;
      arr[c] = v;
      cursor.forward = c + 1 | 0;
    } else {
      var c$1 = cursor.backward;
      arr[c$1] = v;
      cursor.backward = c$1 - 1 | 0;
    }
    if (r !== null) {
      _n = r;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function fillArrayWithFilter(_n, _i, arr, p) {
  while(true) {
    var i = _i;
    var n = _n;
    var l = n.left;
    var v = n.value;
    var r = n.right;
    var next = l !== null ? fillArrayWithFilter(l, i, arr, p) : i;
    var rnext = p(v) ? (arr[next] = v, next + 1 | 0) : next;
    if (r !== null) {
      _i = rnext;
      _n = r;
      continue ;
    } else {
      return rnext;
    }
  };
}

function toArray(n) {
  if (n !== null) {
    var size = lengthNode(n);
    var v = new Array(size);
    fillArray(n, 0, v);
    return v;
  } else {
    return /* array */[];
  }
}

function fromSortedArrayRevAux(arr, off, len) {
  if (len > 3 || len < 0) {
    var nl = len / 2 | 0;
    var left = fromSortedArrayRevAux(arr, off, nl);
    var mid = arr[off - nl | 0];
    var right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
    return create(left, mid, right);
  } else {
    switch (len) {
      case 0 : 
          return null;
      case 1 : 
          return singleton(arr[off]);
      case 2 : 
          var x0 = arr[off];
          var x1 = arr[off - 1 | 0];
          return {
                  value: x1,
                  height: 2,
                  left: singleton(x0),
                  right: null
                };
      case 3 : 
          var x0$1 = arr[off];
          var x1$1 = arr[off - 1 | 0];
          var x2 = arr[off - 2 | 0];
          return {
                  value: x1$1,
                  height: 2,
                  left: singleton(x0$1),
                  right: singleton(x2)
                };
      
    }
  }
}

function fromSortedArrayAux(arr, off, len) {
  if (len > 3 || len < 0) {
    var nl = len / 2 | 0;
    var left = fromSortedArrayAux(arr, off, nl);
    var mid = arr[off + nl | 0];
    var right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
    return create(left, mid, right);
  } else {
    switch (len) {
      case 0 : 
          return null;
      case 1 : 
          return singleton(arr[off]);
      case 2 : 
          var x0 = arr[off];
          var x1 = arr[off + 1 | 0];
          return {
                  value: x1,
                  height: 2,
                  left: singleton(x0),
                  right: null
                };
      case 3 : 
          var x0$1 = arr[off];
          var x1$1 = arr[off + 1 | 0];
          var x2 = arr[off + 2 | 0];
          return {
                  value: x1$1,
                  height: 2,
                  left: singleton(x0$1),
                  right: singleton(x2)
                };
      
    }
  }
}

function fromSortedArrayUnsafe(arr) {
  return fromSortedArrayAux(arr, 0, arr.length);
}

function keepSharedU(n, p) {
  if (n !== null) {
    var l = n.left;
    var v = n.value;
    var r = n.right;
    var newL = keepSharedU(l, p);
    var pv = p(v);
    var newR = keepSharedU(r, p);
    if (pv) {
      if (l === newL && r === newR) {
        return n;
      } else {
        return joinShared(newL, v, newR);
      }
    } else {
      return concatShared(newL, newR);
    }
  } else {
    return null;
  }
}

function keepShared(n, p) {
  return keepSharedU(n, Curry.__1(p));
}

function keepCopyU(n, p) {
  if (n !== null) {
    var size = lengthNode(n);
    var v = new Array(size);
    var last = fillArrayWithFilter(n, 0, v, p);
    return fromSortedArrayAux(v, 0, last);
  } else {
    return null;
  }
}

function keepCopy(n, p) {
  return keepCopyU(n, Curry.__1(p));
}

function partitionCopyU(n, p) {
  if (n !== null) {
    var size = lengthNode(n);
    var v = new Array(size);
    var backward = size - 1 | 0;
    var cursor = {
      forward: 0,
      backward: backward
    };
    fillArrayWithPartition(n, cursor, v, p);
    var forwardLen = cursor.forward;
    return /* tuple */[
            fromSortedArrayAux(v, 0, forwardLen),
            fromSortedArrayRevAux(v, backward, size - forwardLen | 0)
          ];
  } else {
    return /* tuple */[
            null,
            null
          ];
  }
}

function partitionCopy(n, p) {
  return partitionCopyU(n, Curry.__1(p));
}

function has(_t, x, cmp) {
  while(true) {
    var t = _t;
    if (t !== null) {
      var v = t.value;
      var c = cmp(x, v);
      if (c === 0) {
        return true;
      } else {
        _t = c < 0 ? t.left : t.right;
        continue ;
      }
    } else {
      return false;
    }
  };
}

function cmp(s1, s2, cmp$1) {
  var len1 = size(s1);
  var len2 = size(s2);
  if (len1 === len2) {
    var _e1 = stackAllLeft(s1, /* [] */0);
    var _e2 = stackAllLeft(s2, /* [] */0);
    var cmp$2 = cmp$1;
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1 && e2) {
        var h2 = e2[0];
        var h1 = e1[0];
        var c = cmp$2(h1.value, h2.value);
        if (c === 0) {
          _e2 = stackAllLeft(h2.right, e2[1]);
          _e1 = stackAllLeft(h1.right, e1[1]);
          continue ;
        } else {
          return c;
        }
      } else {
        return 0;
      }
    };
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}

function eq(s1, s2, c) {
  return cmp(s1, s2, c) === 0;
}

function subset(_s1, _s2, cmp) {
  while(true) {
    var s2 = _s2;
    var s1 = _s1;
    if (s1 !== null) {
      if (s2 !== null) {
        var l1 = s1.left;
        var v1 = s1.value;
        var r1 = s1.right;
        var l2 = s2.left;
        var v2 = s2.value;
        var r2 = s2.right;
        var c = cmp(v1, v2);
        if (c === 0) {
          if (subset(l1, l2, cmp)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
          } else {
            return false;
          }
        } else if (c < 0) {
          if (subset(create(l1, v1, null), l2, cmp)) {
            _s1 = r1;
            continue ;
          } else {
            return false;
          }
        } else if (subset(create(null, v1, r1), r2, cmp)) {
          _s1 = l1;
          continue ;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function get(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n !== null) {
      var v = n.value;
      var c = cmp(x, v);
      if (c === 0) {
        return /* Some */[v];
      } else {
        _n = c < 0 ? n.left : n.right;
        continue ;
      }
    } else {
      return /* None */0;
    }
  };
}

function getUndefined(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n !== null) {
      var v = n.value;
      var c = cmp(x, v);
      if (c === 0) {
        return v;
      } else {
        _n = c < 0 ? n.left : n.right;
        continue ;
      }
    } else {
      return undefined;
    }
  };
}

function getExn(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n !== null) {
      var v = n.value;
      var c = cmp(x, v);
      if (c === 0) {
        return v;
      } else {
        _n = c < 0 ? n.left : n.right;
        continue ;
      }
    } else {
      throw new Error("getExn0");
    }
  };
}

function rotateWithLeftChild(k2) {
  var k1 = k2.left;
  k2.left = k1.right;
  k1.right = k2;
  var hlk2 = treeHeight(k2.left);
  var hrk2 = treeHeight(k2.right);
  k2.height = (
    hlk2 > hrk2 ? hlk2 : hrk2
  ) + 1 | 0;
  var hlk1 = treeHeight(k1.left);
  var hk2 = k2.height;
  k1.height = (
    hlk1 > hk2 ? hlk1 : hk2
  ) + 1 | 0;
  return k1;
}

function rotateWithRightChild(k1) {
  var k2 = k1.right;
  k1.right = k2.left;
  k2.left = k1;
  var hlk1 = treeHeight(k1.left);
  var hrk1 = treeHeight(k1.right);
  k1.height = (
    hlk1 > hrk1 ? hlk1 : hrk1
  ) + 1 | 0;
  var hrk2 = treeHeight(k2.right);
  var hk1 = k1.height;
  k2.height = (
    hrk2 > hk1 ? hrk2 : hk1
  ) + 1 | 0;
  return k2;
}

function doubleWithLeftChild(k3) {
  var v = rotateWithRightChild(k3.left);
  k3.left = v;
  return rotateWithLeftChild(k3);
}

function doubleWithRightChild(k2) {
  var v = rotateWithLeftChild(k2.right);
  k2.right = v;
  return rotateWithRightChild(k2);
}

function heightUpdateMutate(t) {
  var hlt = treeHeight(t.left);
  var hrt = treeHeight(t.right);
  t.height = (
    hlt > hrt ? hlt : hrt
  ) + 1 | 0;
  return t;
}

function balMutate(nt) {
  var l = nt.left;
  var r = nt.right;
  var hl = treeHeight(l);
  var hr = treeHeight(r);
  if (hl > (2 + hr | 0)) {
    var ll = l.left;
    var lr = l.right;
    if (heightGe(ll, lr)) {
      return heightUpdateMutate(rotateWithLeftChild(nt));
    } else {
      return heightUpdateMutate(doubleWithLeftChild(nt));
    }
  } else if (hr > (2 + hl | 0)) {
    var rl = r.left;
    var rr = r.right;
    if (heightGe(rr, rl)) {
      return heightUpdateMutate(rotateWithRightChild(nt));
    } else {
      return heightUpdateMutate(doubleWithRightChild(nt));
    }
  } else {
    nt.height = (
      hl > hr ? hl : hr
    ) + 1 | 0;
    return nt;
  }
}

function addMutate(cmp, t, x) {
  if (t !== null) {
    var k = t.value;
    var c = cmp(x, k);
    if (c === 0) {
      return t;
    } else {
      var l = t.left;
      var r = t.right;
      if (c < 0) {
        var ll = addMutate(cmp, l, x);
        t.left = ll;
      } else {
        t.right = addMutate(cmp, r, x);
      }
      return balMutate(t);
    }
  } else {
    return singleton(x);
  }
}

function fromArray(xs, cmp) {
  var len = xs.length;
  if (len === 0) {
    return null;
  } else {
    var next = Belt_SortArray.strictlySortedLengthU(xs, (function (x, y) {
            return cmp(x, y) < 0;
          }));
    var result;
    if (next >= 0) {
      result = fromSortedArrayAux(xs, 0, next);
    } else {
      next = -next | 0;
      result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
    }
    for(var i = next ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      result = addMutate(cmp, result, xs[i]);
    }
    return result;
  }
}

function removeMinAuxWithRootMutate(nt, n) {
  var rn = n.right;
  var ln = n.left;
  if (ln !== null) {
    n.left = removeMinAuxWithRootMutate(nt, ln);
    return balMutate(n);
  } else {
    nt.value = n.value;
    return rn;
  }
}

var empty = null;

exports.copy = copy;
exports.create = create;
exports.bal = bal;
exports.singleton = singleton;
exports.minimum = minimum;
exports.minUndefined = minUndefined;
exports.maximum = maximum;
exports.maxUndefined = maxUndefined;
exports.removeMinAuxWithRef = removeMinAuxWithRef;
exports.empty = empty;
exports.isEmpty = isEmpty;
exports.stackAllLeft = stackAllLeft;
exports.forEachU = forEachU;
exports.forEach = forEach;
exports.reduceU = reduceU;
exports.reduce = reduce;
exports.everyU = everyU;
exports.every = every;
exports.someU = someU;
exports.some = some;
exports.joinShared = joinShared;
exports.concatShared = concatShared;
exports.keepSharedU = keepSharedU;
exports.keepShared = keepShared;
exports.keepCopyU = keepCopyU;
exports.keepCopy = keepCopy;
exports.partitionSharedU = partitionSharedU;
exports.partitionShared = partitionShared;
exports.partitionCopyU = partitionCopyU;
exports.partitionCopy = partitionCopy;
exports.lengthNode = lengthNode;
exports.size = size;
exports.toList = toList;
exports.checkInvariantInternal = checkInvariantInternal;
exports.fillArray = fillArray;
exports.toArray = toArray;
exports.fromSortedArrayAux = fromSortedArrayAux;
exports.fromSortedArrayRevAux = fromSortedArrayRevAux;
exports.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
exports.has = has;
exports.cmp = cmp;
exports.eq = eq;
exports.subset = subset;
exports.get = get;
exports.getUndefined = getUndefined;
exports.getExn = getExn;
exports.fromArray = fromArray;
exports.addMutate = addMutate;
exports.balMutate = balMutate;
exports.removeMinAuxWithRootMutate = removeMinAuxWithRootMutate;
/* No side effect */

},{"./curry.js":7,"./belt_SortArray.js":40}],21:[function(require,module,exports) {
'use strict';

var Belt_internalAVLset = require("./belt_internalAVLset.js");

function add(t, x, cmp) {
  if (t !== null) {
    var k = t.value;
    var c = cmp(x, k);
    if (c === 0) {
      return t;
    } else {
      var l = t.left;
      var r = t.right;
      if (c < 0) {
        var ll = add(l, x, cmp);
        if (ll === l) {
          return t;
        } else {
          return Belt_internalAVLset.bal(ll, k, r);
        }
      } else {
        var rr = add(r, x, cmp);
        if (rr === r) {
          return t;
        } else {
          return Belt_internalAVLset.bal(l, k, rr);
        }
      }
    }
  } else {
    return Belt_internalAVLset.singleton(x);
  }
}

function remove(t, x, cmp) {
  if (t !== null) {
    var l = t.left;
    var v = t.value;
    var r = t.right;
    var c = cmp(x, v);
    if (c === 0) {
      if (l !== null) {
        if (r !== null) {
          var v$1 = [r.value];
          var r$1 = Belt_internalAVLset.removeMinAuxWithRef(r, v$1);
          return Belt_internalAVLset.bal(l, v$1[0], r$1);
        } else {
          return l;
        }
      } else {
        return r;
      }
    } else if (c < 0) {
      var ll = remove(l, x, cmp);
      if (ll === l) {
        return t;
      } else {
        return Belt_internalAVLset.bal(ll, v, r);
      }
    } else {
      var rr = remove(r, x, cmp);
      if (rr === r) {
        return t;
      } else {
        return Belt_internalAVLset.bal(l, v, rr);
      }
    }
  } else {
    return t;
  }
}

function mergeMany(h, arr, cmp) {
  var len = arr.length;
  var v = h;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    var key = arr[i];
    v = add(v, key, cmp);
  }
  return v;
}

function removeMany(h, arr, cmp) {
  var len = arr.length;
  var v = h;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    var key = arr[i];
    v = remove(v, key, cmp);
  }
  return v;
}

function splitAuxNoPivot(cmp, n, x) {
  var l = n.left;
  var v = n.value;
  var r = n.right;
  var c = cmp(x, v);
  if (c === 0) {
    return /* tuple */[
            l,
            r
          ];
  } else if (c < 0) {
    if (l !== null) {
      var match = splitAuxNoPivot(cmp, l, x);
      return /* tuple */[
              match[0],
              Belt_internalAVLset.joinShared(match[1], v, r)
            ];
    } else {
      return /* tuple */[
              Belt_internalAVLset.empty,
              n
            ];
    }
  } else if (r !== null) {
    var match$1 = splitAuxNoPivot(cmp, r, x);
    return /* tuple */[
            Belt_internalAVLset.joinShared(l, v, match$1[0]),
            match$1[1]
          ];
  } else {
    return /* tuple */[
            n,
            Belt_internalAVLset.empty
          ];
  }
}

function splitAuxPivot(cmp, n, x, pres) {
  var l = n.left;
  var v = n.value;
  var r = n.right;
  var c = cmp(x, v);
  if (c === 0) {
    pres[0] = true;
    return /* tuple */[
            l,
            r
          ];
  } else if (c < 0) {
    if (l !== null) {
      var match = splitAuxPivot(cmp, l, x, pres);
      return /* tuple */[
              match[0],
              Belt_internalAVLset.joinShared(match[1], v, r)
            ];
    } else {
      return /* tuple */[
              Belt_internalAVLset.empty,
              n
            ];
    }
  } else if (r !== null) {
    var match$1 = splitAuxPivot(cmp, r, x, pres);
    return /* tuple */[
            Belt_internalAVLset.joinShared(l, v, match$1[0]),
            match$1[1]
          ];
  } else {
    return /* tuple */[
            n,
            Belt_internalAVLset.empty
          ];
  }
}

function split(t, x, cmp) {
  if (t !== null) {
    var pres = [false];
    var v = splitAuxPivot(cmp, t, x, pres);
    return /* tuple */[
            v,
            pres[0]
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              Belt_internalAVLset.empty,
              Belt_internalAVLset.empty
            ],
            false
          ];
  }
}

function union(s1, s2, cmp) {
  if (s1 !== null) {
    if (s2 !== null) {
      var h1 = s1.height;
      var h2 = s2.height;
      if (h1 >= h2) {
        if (h2 === 1) {
          return add(s1, s2.value, cmp);
        } else {
          var l1 = s1.left;
          var v1 = s1.value;
          var r1 = s1.right;
          var match = splitAuxNoPivot(cmp, s2, v1);
          return Belt_internalAVLset.joinShared(union(l1, match[0], cmp), v1, union(r1, match[1], cmp));
        }
      } else if (h1 === 1) {
        return add(s2, s1.value, cmp);
      } else {
        var l2 = s2.left;
        var v2 = s2.value;
        var r2 = s2.right;
        var match$1 = splitAuxNoPivot(cmp, s1, v2);
        return Belt_internalAVLset.joinShared(union(match$1[0], l2, cmp), v2, union(match$1[1], r2, cmp));
      }
    } else {
      return s1;
    }
  } else {
    return s2;
  }
}

function intersect(s1, s2, cmp) {
  if (s1 !== null && s2 !== null) {
    var l1 = s1.left;
    var v1 = s1.value;
    var r1 = s1.right;
    var pres = [false];
    var match = splitAuxPivot(cmp, s2, v1, pres);
    var ll = intersect(l1, match[0], cmp);
    var rr = intersect(r1, match[1], cmp);
    if (pres[0]) {
      return Belt_internalAVLset.joinShared(ll, v1, rr);
    } else {
      return Belt_internalAVLset.concatShared(ll, rr);
    }
  } else {
    return Belt_internalAVLset.empty;
  }
}

function diff(s1, s2, cmp) {
  if (s1 !== null && s2 !== null) {
    var l1 = s1.left;
    var v1 = s1.value;
    var r1 = s1.right;
    var pres = [false];
    var match = splitAuxPivot(cmp, s2, v1, pres);
    var ll = diff(l1, match[0], cmp);
    var rr = diff(r1, match[1], cmp);
    if (pres[0]) {
      return Belt_internalAVLset.concatShared(ll, rr);
    } else {
      return Belt_internalAVLset.joinShared(ll, v1, rr);
    }
  } else {
    return s1;
  }
}

var empty = Belt_internalAVLset.empty;

var ofArray = Belt_internalAVLset.fromArray;

var ofSortedArrayUnsafe = Belt_internalAVLset.fromSortedArrayUnsafe;

var fromArray = Belt_internalAVLset.fromArray;

var fromSortedArrayUnsafe = Belt_internalAVLset.fromSortedArrayUnsafe;

var isEmpty = Belt_internalAVLset.isEmpty;

var has = Belt_internalAVLset.has;

var subset = Belt_internalAVLset.subset;

var cmp = Belt_internalAVLset.cmp;

var eq = Belt_internalAVLset.eq;

var forEachU = Belt_internalAVLset.forEachU;

var forEach = Belt_internalAVLset.forEach;

var reduceU = Belt_internalAVLset.reduceU;

var reduce = Belt_internalAVLset.reduce;

var everyU = Belt_internalAVLset.everyU;

var every = Belt_internalAVLset.every;

var someU = Belt_internalAVLset.someU;

var some = Belt_internalAVLset.some;

var keepU = Belt_internalAVLset.keepSharedU;

var keep = Belt_internalAVLset.keepShared;

var partitionU = Belt_internalAVLset.partitionSharedU;

var partition = Belt_internalAVLset.partitionShared;

var size = Belt_internalAVLset.size;

var toList = Belt_internalAVLset.toList;

var toArray = Belt_internalAVLset.toArray;

var minimum = Belt_internalAVLset.minimum;

var minUndefined = Belt_internalAVLset.minUndefined;

var maximum = Belt_internalAVLset.maximum;

var maxUndefined = Belt_internalAVLset.maxUndefined;

var get = Belt_internalAVLset.get;

var getUndefined = Belt_internalAVLset.getUndefined;

var getExn = Belt_internalAVLset.getExn;

var checkInvariantInternal = Belt_internalAVLset.checkInvariantInternal;

exports.empty = empty;
exports.ofArray = ofArray;
exports.ofSortedArrayUnsafe = ofSortedArrayUnsafe;
exports.fromArray = fromArray;
exports.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
exports.isEmpty = isEmpty;
exports.has = has;
exports.add = add;
exports.mergeMany = mergeMany;
exports.remove = remove;
exports.removeMany = removeMany;
exports.union = union;
exports.intersect = intersect;
exports.diff = diff;
exports.subset = subset;
exports.cmp = cmp;
exports.eq = eq;
exports.forEachU = forEachU;
exports.forEach = forEach;
exports.reduceU = reduceU;
exports.reduce = reduce;
exports.everyU = everyU;
exports.every = every;
exports.someU = someU;
exports.some = some;
exports.keepU = keepU;
exports.keep = keep;
exports.partitionU = partitionU;
exports.partition = partition;
exports.size = size;
exports.toList = toList;
exports.toArray = toArray;
exports.minimum = minimum;
exports.minUndefined = minUndefined;
exports.maximum = maximum;
exports.maxUndefined = maxUndefined;
exports.get = get;
exports.getUndefined = getUndefined;
exports.getExn = getExn;
exports.split = split;
exports.checkInvariantInternal = checkInvariantInternal;
/* No side effect */

},{"./belt_internalAVLset.js":38}],8:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");
var Belt_SetDict = require("./belt_SetDict.js");

function fromArray(data, id) {
  var cmp = id[/* cmp */0];
  return {
          cmp: cmp,
          data: Belt_SetDict.fromArray(data, cmp)
        };
}

function remove(m, e) {
  var cmp = m.cmp;
  var data = m.data;
  var newData = Belt_SetDict.remove(data, e, cmp);
  if (newData === data) {
    return m;
  } else {
    return {
            cmp: cmp,
            data: newData
          };
  }
}

function add(m, e) {
  var cmp = m.cmp;
  var data = m.data;
  var newData = Belt_SetDict.add(data, e, cmp);
  if (newData === data) {
    return m;
  } else {
    return {
            cmp: cmp,
            data: newData
          };
  }
}

function mergeMany(m, e) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: Belt_SetDict.mergeMany(m.data, e, cmp)
        };
}

function removeMany(m, e) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: Belt_SetDict.removeMany(m.data, e, cmp)
        };
}

function union(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: Belt_SetDict.union(m.data, n.data, cmp)
        };
}

function intersect(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: Belt_SetDict.intersect(m.data, n.data, cmp)
        };
}

function diff(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: Belt_SetDict.diff(m.data, n.data, cmp)
        };
}

function subset(m, n) {
  var cmp = m.cmp;
  return Belt_SetDict.subset(m.data, n.data, cmp);
}

function split(m, e) {
  var cmp = m.cmp;
  var match = Belt_SetDict.split(m.data, e, cmp);
  var match$1 = match[0];
  return /* tuple */[
          /* tuple */[
            {
              cmp: cmp,
              data: match$1[0]
            },
            {
              cmp: cmp,
              data: match$1[1]
            }
          ],
          match[1]
        ];
}

function make(id) {
  return {
          cmp: id[/* cmp */0],
          data: Belt_SetDict.empty
        };
}

function isEmpty(m) {
  return Belt_SetDict.isEmpty(m.data);
}

function cmp(m, n) {
  var cmp$1 = m.cmp;
  return Belt_SetDict.cmp(m.data, n.data, cmp$1);
}

function eq(m, n) {
  return Belt_SetDict.eq(m.data, n.data, m.cmp);
}

function forEachU(m, f) {
  return Belt_SetDict.forEachU(m.data, f);
}

function forEach(m, f) {
  return Belt_SetDict.forEachU(m.data, Curry.__1(f));
}

function reduceU(m, acc, f) {
  return Belt_SetDict.reduceU(m.data, acc, f);
}

function reduce(m, acc, f) {
  return reduceU(m, acc, Curry.__2(f));
}

function everyU(m, f) {
  return Belt_SetDict.everyU(m.data, f);
}

function every(m, f) {
  return Belt_SetDict.everyU(m.data, Curry.__1(f));
}

function someU(m, f) {
  return Belt_SetDict.someU(m.data, f);
}

function some(m, f) {
  return Belt_SetDict.someU(m.data, Curry.__1(f));
}

function keepU(m, f) {
  return {
          cmp: m.cmp,
          data: Belt_SetDict.keepU(m.data, f)
        };
}

function keep(m, f) {
  return keepU(m, Curry.__1(f));
}

function partitionU(m, f) {
  var match = Belt_SetDict.partitionU(m.data, f);
  var cmp = m.cmp;
  return /* tuple */[
          {
            cmp: cmp,
            data: match[0]
          },
          {
            cmp: cmp,
            data: match[1]
          }
        ];
}

function partition(m, f) {
  return partitionU(m, Curry.__1(f));
}

function size(m) {
  return Belt_SetDict.size(m.data);
}

function toList(m) {
  return Belt_SetDict.toList(m.data);
}

function toArray(m) {
  return Belt_SetDict.toArray(m.data);
}

function minimum(m) {
  return Belt_SetDict.minimum(m.data);
}

function minUndefined(m) {
  return Belt_SetDict.minUndefined(m.data);
}

function maximum(m) {
  return Belt_SetDict.maximum(m.data);
}

function maxUndefined(m) {
  return Belt_SetDict.maxUndefined(m.data);
}

function get(m, e) {
  return Belt_SetDict.get(m.data, e, m.cmp);
}

function getUndefined(m, e) {
  return Belt_SetDict.getUndefined(m.data, e, m.cmp);
}

function getExn(m, e) {
  return Belt_SetDict.getExn(m.data, e, m.cmp);
}

function has(m, e) {
  return Belt_SetDict.has(m.data, e, m.cmp);
}

function fromSortedArrayUnsafe(xs, id) {
  return {
          cmp: id[/* cmp */0],
          data: Belt_SetDict.fromSortedArrayUnsafe(xs)
        };
}

function getData(prim) {
  return prim.data;
}

function getId(m) {
  var cmp = m.cmp;
  return /* module */[/* cmp */cmp];
}

function packIdData(id, data) {
  return {
          cmp: id[/* cmp */0],
          data: data
        };
}

function checkInvariantInternal(d) {
  return Belt_SetDict.checkInvariantInternal(d.data);
}

var Int = 0;

var $$String = 0;

var Dict = 0;

var ofArray = fromArray;

var ofSortedArrayUnsafe = fromSortedArrayUnsafe;

exports.Int = Int;
exports.$$String = $$String;
exports.Dict = Dict;
exports.make = make;
exports.ofArray = ofArray;
exports.fromArray = fromArray;
exports.ofSortedArrayUnsafe = ofSortedArrayUnsafe;
exports.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
exports.isEmpty = isEmpty;
exports.has = has;
exports.add = add;
exports.mergeMany = mergeMany;
exports.remove = remove;
exports.removeMany = removeMany;
exports.union = union;
exports.intersect = intersect;
exports.diff = diff;
exports.subset = subset;
exports.cmp = cmp;
exports.eq = eq;
exports.forEachU = forEachU;
exports.forEach = forEach;
exports.reduceU = reduceU;
exports.reduce = reduce;
exports.everyU = everyU;
exports.every = every;
exports.someU = someU;
exports.some = some;
exports.keepU = keepU;
exports.keep = keep;
exports.partitionU = partitionU;
exports.partition = partition;
exports.size = size;
exports.toArray = toArray;
exports.toList = toList;
exports.minimum = minimum;
exports.minUndefined = minUndefined;
exports.maximum = maximum;
exports.maxUndefined = maxUndefined;
exports.get = get;
exports.getUndefined = getUndefined;
exports.getExn = getExn;
exports.split = split;
exports.checkInvariantInternal = checkInvariantInternal;
exports.getData = getData;
exports.getId = getId;
exports.packIdData = packIdData;
/* No side effect */

},{"./curry.js":7,"./belt_SetDict.js":21}],24:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function encodeCompareHow(param) {
  return param;
}

function decodeCompareResult(param) {
  var switcher = param + 1 | 0;
  if (switcher > 2 || switcher < 0) {
    return /* Unknown */3;
  } else {
    return switcher;
  }
}

function decodeCompatMode(param) {
  switch (param) {
    case "BackCompat" : 
        return /* BackCompat */0;
    case "CSS1Compat" : 
        return /* CSS1Compat */1;
    default:
      return /* Unknown */2;
  }
}

function encodeContentEditable(param) {
  switch (param) {
    case 0 : 
        return "true";
    case 1 : 
        return "false";
    case 2 : 
        return "inherit";
    case 3 : 
        return "";
    
  }
}

function decodeContentEditable(param) {
  switch (param) {
    case "false" : 
        return /* False */1;
    case "inherit" : 
        return /* Inherit */2;
    case "true" : 
        return /* True */0;
    default:
      return /* Unknown */3;
  }
}

function decodeDeltaMode(param) {
  if (param > 2 || param < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "invalid deltaMode"
        ];
  } else {
    return param;
  }
}

function encodeDesignMode(param) {
  switch (param) {
    case 0 : 
        return "on";
    case 1 : 
        return "off";
    case 2 : 
        return "";
    
  }
}

function decodeDesignMode(param) {
  switch (param) {
    case "off" : 
        return /* Off */1;
    case "on" : 
        return /* On */0;
    default:
      return /* Unknown */2;
  }
}

function encodeDir(param) {
  switch (param) {
    case 0 : 
        return "ltr";
    case 1 : 
        return "rtl";
    case 2 : 
        return "";
    
  }
}

function decodeDir(param) {
  switch (param) {
    case "ltr" : 
        return /* Ltr */0;
    case "rtl" : 
        return /* Rtl */1;
    default:
      return /* Unknown */2;
  }
}

function decodeEventPhase(param) {
  if (param > 3 || param < 0) {
    return /* Unknown */4;
  } else {
    return param;
  }
}

function encodeFilterAction(param) {
  return param + 1 | 0;
}

function encodeInsertPosition(param) {
  switch (param) {
    case 0 : 
        return "beforebegin";
    case 1 : 
        return "afterbegin";
    case 2 : 
        return "beforeend";
    case 3 : 
        return "afterend";
    
  }
}

function encodeModifierKey(param) {
  switch (param) {
    case 0 : 
        return "Alt";
    case 1 : 
        return "AltGraph";
    case 2 : 
        return "CapsLock";
    case 3 : 
        return "Control";
    case 4 : 
        return "Fn";
    case 5 : 
        return "FnLock";
    case 6 : 
        return "Hyper";
    case 7 : 
        return "Meta";
    case 8 : 
        return "NumLock";
    case 9 : 
        return "ScrollLock";
    case 10 : 
        return "Shift";
    case 11 : 
        return "Super";
    case 12 : 
        return "Symbol";
    case 13 : 
        return "SymbolLock";
    
  }
}

function decodeNodeType(param) {
  var switcher = param - 1 | 0;
  if (switcher > 11 || switcher < 0) {
    return /* Unknown */12;
  } else {
    return switcher;
  }
}

function decodePointerType(param) {
  switch (param) {
    case "mouse" : 
        return /* Mouse */0;
    case "pen" : 
        return /* Pen */1;
    case "touch|" : 
        return /* Touch */2;
    default:
      return /* Unknown */3;
  }
}

function decodeReadyState(param) {
  switch (param) {
    case "complete" : 
        return /* Complete */2;
    case "interactive" : 
        return /* Interactive */1;
    case "loading" : 
        return /* Loading */0;
    default:
      return /* Unknown */3;
  }
}

function decodeShadowRootMode(param) {
  switch (param) {
    case "closed" : 
        return /* Closed */1;
    case "open" : 
        return /* Open */0;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Unknown shadowRootMode"
          ];
  }
}

function decodeVisibilityState(param) {
  switch (param) {
    case "hidden" : 
        return /* Hidden */1;
    case "prerender" : 
        return /* Prerender */2;
    case "unloaded" : 
        return /* Unloaded */3;
    case "visible" : 
        return /* Visible */0;
    default:
      return /* Unknown */4;
  }
}

function many(param) {
  if (param) {
    return param[0] | many(param[1]);
  } else {
    return 0;
  }
}

var WhatToShow = /* module */[
  /* _All */-1,
  /* _Element */1,
  /* _Attribute */2,
  /* _Text */4,
  /* _CDATASection */8,
  /* _EntityReference */16,
  /* _Entity */32,
  /* _ProcessingInstruction */64,
  /* _Comment */128,
  /* _Document */256,
  /* _DocumentType */512,
  /* _DocumentFragment */1024,
  /* _Notation */2048,
  /* many */many
];

exports.encodeCompareHow = encodeCompareHow;
exports.decodeCompareResult = decodeCompareResult;
exports.decodeCompatMode = decodeCompatMode;
exports.encodeContentEditable = encodeContentEditable;
exports.decodeContentEditable = decodeContentEditable;
exports.decodeDeltaMode = decodeDeltaMode;
exports.encodeDesignMode = encodeDesignMode;
exports.decodeDesignMode = decodeDesignMode;
exports.encodeDir = encodeDir;
exports.decodeDir = decodeDir;
exports.decodeEventPhase = decodeEventPhase;
exports.encodeFilterAction = encodeFilterAction;
exports.encodeInsertPosition = encodeInsertPosition;
exports.encodeModifierKey = encodeModifierKey;
exports.decodeNodeType = decodeNodeType;
exports.decodePointerType = decodePointerType;
exports.decodeReadyState = decodeReadyState;
exports.decodeShadowRootMode = decodeShadowRootMode;
exports.decodeVisibilityState = decodeVisibilityState;
exports.WhatToShow = WhatToShow;
/* No side effect */

},{"bs-platform/lib/js/caml_builtin_exceptions.js":20}],29:[function(require,module,exports) {
'use strict';


function Impl() {
  return /* module */[];
}

exports.Impl = Impl;
/* No side effect */

},{}],25:[function(require,module,exports) {
'use strict';

var DomTypesRe = require("../DomTypesRe.js");
var EventTargetRe = require("../events/EventTargetRe.js");

function Impl() {
  var nodeType = function (self) {
    return DomTypesRe.decodeNodeType(self.nodeType);
  };
  return /* module */[/* nodeType */nodeType];
}

EventTargetRe.Impl(/* module */[]);

function nodeType(self) {
  return DomTypesRe.decodeNodeType(self.nodeType);
}

exports.Impl = Impl;
exports.nodeType = nodeType;
/*  Not a pure module */

},{"../DomTypesRe.js":24,"../events/EventTargetRe.js":29}],14:[function(require,module,exports) {
'use strict';


function is_nil_undef(x) {
  if (x === null) {
    return true;
  } else {
    return x === undefined;
  }
}

function null_undefined_to_opt(x) {
  if (x === null || x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function null_to_opt(x) {
  if (x === null) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function option_get(x) {
  if (x) {
    return x[0];
  } else {
    return undefined;
  }
}

function option_get_unwrap(x) {
  if (x) {
    return x[0][1];
  } else {
    return undefined;
  }
}

exports.is_nil_undef = is_nil_undef;
exports.null_undefined_to_opt = null_undefined_to_opt;
exports.undefined_to_opt = undefined_to_opt;
exports.null_to_opt = null_to_opt;
exports.option_get = option_get;
exports.option_get_unwrap = option_get_unwrap;
/* No side effect */

},{}],9:[function(require,module,exports) {
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var NodeRe = require("./NodeRe.js");
var DomTypesRe = require("../DomTypesRe.js");
var SlotableRe = require("./SlotableRe.js");
var ChildNodeRe = require("./ChildNodeRe.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ParentNodeRe = require("./ParentNodeRe.js");
var EventTargetRe = require("../events/EventTargetRe.js");
var NonDocumentTypeChildNodeRe = require("./NonDocumentTypeChildNodeRe.js");

function ofNode(node) {
  var match = NodeRe.nodeType(node) === /* Element */0;
  if (match) {
    return /* Some */[node];
  } else {
    return /* None */0;
  }
}

function Impl() {
  var asHtmlElement = (
    function (element) {
      // BEWARE: Assumes "contentEditable" uniquely identifies an HTMLELement
      return element.contentEditable !== undefined ?  element : null;
    }
  );
  var asHtmlElement$1 = function (self) {
    return Js_primitive.null_to_opt(Curry._1(asHtmlElement, self));
  };
  var insertAdjacentElement = function (position, element, self) {
    self.insertAdjacentElement(DomTypesRe.encodeInsertPosition(position), element);
    return /* () */0;
  };
  var insertAdjacentHTML = function (position, text, self) {
    self.insertAdjacentHTML(DomTypesRe.encodeInsertPosition(position), text);
    return /* () */0;
  };
  var insertAdjacentText = function (position, text, self) {
    self.insertAdjacentText(DomTypesRe.encodeInsertPosition(position), text);
    return /* () */0;
  };
  return /* module */[
          /* asHtmlElement */asHtmlElement$1,
          /* ofNode */ofNode,
          /* insertAdjacentElement */insertAdjacentElement,
          /* insertAdjacentHTML */insertAdjacentHTML,
          /* insertAdjacentText */insertAdjacentText
        ];
}

var include = NodeRe.Impl(/* module */[]);

EventTargetRe.Impl(/* module */[]);

ParentNodeRe.Impl(/* module */[]);

NonDocumentTypeChildNodeRe.Impl(/* module */[]);

ChildNodeRe.Impl(/* module */[]);

SlotableRe.Impl(/* module */[]);

var asHtmlElement = (
    function (element) {
      // BEWARE: Assumes "contentEditable" uniquely identifies an HTMLELement
      return element.contentEditable !== undefined ?  element : null;
    }
  );

function asHtmlElement$1(self) {
  return Js_primitive.null_to_opt(Curry._1(asHtmlElement, self));
}

function insertAdjacentElement(position, element, self) {
  self.insertAdjacentElement(DomTypesRe.encodeInsertPosition(position), element);
  return /* () */0;
}

function insertAdjacentHTML(position, text, self) {
  self.insertAdjacentHTML(DomTypesRe.encodeInsertPosition(position), text);
  return /* () */0;
}

function insertAdjacentText(position, text, self) {
  self.insertAdjacentText(DomTypesRe.encodeInsertPosition(position), text);
  return /* () */0;
}

var nodeType = include[0];

exports.Impl = Impl;
exports.nodeType = nodeType;
exports.asHtmlElement = asHtmlElement$1;
exports.ofNode = ofNode;
exports.insertAdjacentElement = insertAdjacentElement;
exports.insertAdjacentHTML = insertAdjacentHTML;
exports.insertAdjacentText = insertAdjacentText;
/* include Not a pure module */

},{"bs-platform/lib/js/curry.js":7,"./NodeRe.js":25,"../DomTypesRe.js":24,"./SlotableRe.js":29,"./ChildNodeRe.js":29,"bs-platform/lib/js/js_primitive.js":14,"./ParentNodeRe.js":29,"../events/EventTargetRe.js":29,"./NonDocumentTypeChildNodeRe.js":29}],12:[function(require,module,exports) {
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var NodeRe = require("./NodeRe.js");
var DomTypesRe = require("../DomTypesRe.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ParentNodeRe = require("./ParentNodeRe.js");
var EventTargetRe = require("../events/EventTargetRe.js");
var DocumentOrShadowRootRe = require("./DocumentOrShadowRootRe.js");
var NonElementParentNodeRe = require("./NonElementParentNodeRe.js");

function Impl() {
  var asHtmlDocument = (
    function (document) {
      return document.doctype.name === "html" ?  document : null;
    }
  );
  var asHtmlDocument$1 = function (self) {
    return Js_primitive.null_to_opt(Curry._1(asHtmlDocument, self));
  };
  var ofNode = function (node) {
    var match = NodeRe.nodeType(node) === /* Document */8;
    if (match) {
      return /* Some */[node];
    } else {
      return /* None */0;
    }
  };
  var compatMode = function (self) {
    return DomTypesRe.decodeCompatMode(self.compatMode);
  };
  var visibilityState = function (self) {
    return DomTypesRe.decodeVisibilityState(self.visibilityState);
  };
  return /* module */[
          /* asHtmlDocument */asHtmlDocument$1,
          /* ofNode */ofNode,
          /* compatMode */compatMode,
          /* visibilityState */visibilityState
        ];
}

var include = NodeRe.Impl(/* module */[]);

EventTargetRe.Impl(/* module */[]);

NonElementParentNodeRe.Impl(/* module */[]);

DocumentOrShadowRootRe.Impl(/* module */[]);

ParentNodeRe.Impl(/* module */[]);

var asHtmlDocument = (
    function (document) {
      return document.doctype.name === "html" ?  document : null;
    }
  );

function asHtmlDocument$1(self) {
  return Js_primitive.null_to_opt(Curry._1(asHtmlDocument, self));
}

function ofNode(node) {
  var match = NodeRe.nodeType(node) === /* Document */8;
  if (match) {
    return /* Some */[node];
  } else {
    return /* None */0;
  }
}

function compatMode(self) {
  return DomTypesRe.decodeCompatMode(self.compatMode);
}

function visibilityState(self) {
  return DomTypesRe.decodeVisibilityState(self.visibilityState);
}

var nodeType = include[0];

exports.Impl = Impl;
exports.nodeType = nodeType;
exports.asHtmlDocument = asHtmlDocument$1;
exports.ofNode = ofNode;
exports.compatMode = compatMode;
exports.visibilityState = visibilityState;
/* include Not a pure module */

},{"bs-platform/lib/js/curry.js":7,"./NodeRe.js":25,"../DomTypesRe.js":24,"bs-platform/lib/js/js_primitive.js":14,"./ParentNodeRe.js":29,"../events/EventTargetRe.js":29,"./DocumentOrShadowRootRe.js":29,"./NonElementParentNodeRe.js":29}],13:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");

function getExn(param) {
  if (param) {
    return param[0];
  } else {
    throw new Error("getExn");
  }
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt) {
    return f(opt[0]);
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, Curry.__1(f));
}

function mapU(opt, f) {
  if (opt) {
    return /* Some */[f(opt[0])];
  } else {
    return /* None */0;
  }
}

function map(opt, f) {
  return mapU(opt, Curry.__1(f));
}

function flatMapU(opt, f) {
  if (opt) {
    return f(opt[0]);
  } else {
    return /* None */0;
  }
}

function flatMap(opt, f) {
  return flatMapU(opt, Curry.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt) {
    return opt[0];
  } else {
    return $$default;
  }
}

function isSome(param) {
  if (param) {
    return true;
  } else {
    return false;
  }
}

function isNone(param) {
  if (param) {
    return false;
  } else {
    return true;
  }
}

function eqU(a, b, f) {
  if (a) {
    if (b) {
      return f(a[0], b[0]);
    } else {
      return false;
    }
  } else if (b) {
    return false;
  } else {
    return true;
  }
}

function eq(a, b, f) {
  return eqU(a, b, Curry.__2(f));
}

function cmpU(a, b, f) {
  if (a) {
    if (b) {
      return f(a[0], b[0]);
    } else {
      return 1;
    }
  } else if (b) {
    return -1;
  } else {
    return 0;
  }
}

function cmp(a, b, f) {
  return cmpU(a, b, Curry.__2(f));
}

exports.getExn = getExn;
exports.mapWithDefaultU = mapWithDefaultU;
exports.mapWithDefault = mapWithDefault;
exports.mapU = mapU;
exports.map = map;
exports.flatMapU = flatMapU;
exports.flatMap = flatMap;
exports.getWithDefault = getWithDefault;
exports.isSome = isSome;
exports.isNone = isNone;
exports.eqU = eqU;
exports.eq = eq;
exports.cmpU = cmpU;
exports.cmp = cmp;
/* No side effect */

},{"./curry.js":7}],15:[function(require,module,exports) {
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var NodeRe = require("../nodes/NodeRe.js");
var ElementRe = require("../nodes/ElementRe.js");
var DomTypesRe = require("../DomTypesRe.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var EventTargetRe = require("../events/EventTargetRe.js");

function Impl() {
  var ofElement = (
    function (element) {
      // BEWARE: Assumes "contentEditable" uniquely identifies an HTMLELement
      return element.contentEditable !== undefined ?  element : null;
    }
  );
  var ofElement$1 = function (self) {
    return Js_primitive.null_to_opt(Curry._1(ofElement, self));
  };
  var contentEditable = function (self) {
    return DomTypesRe.decodeContentEditable(self.contentEditable);
  };
  var setContentEditable = function (self, value) {
    self.contentEditable = DomTypesRe.encodeContentEditable(value);
    return /* () */0;
  };
  var dir = function (self) {
    return DomTypesRe.decodeDir(self.dir);
  };
  var setDir = function (self, value) {
    self.dir = DomTypesRe.encodeDir(value);
    return /* () */0;
  };
  return /* module */[
          /* ofElement */ofElement$1,
          /* contentEditable */contentEditable,
          /* setContentEditable */setContentEditable,
          /* dir */dir,
          /* setDir */setDir
        ];
}

var include = NodeRe.Impl(/* module */[]);

EventTargetRe.Impl(/* module */[]);

var include$1 = ElementRe.Impl(/* module */[]);

var ofElement = (
    function (element) {
      // BEWARE: Assumes "contentEditable" uniquely identifies an HTMLELement
      return element.contentEditable !== undefined ?  element : null;
    }
  );

function ofElement$1(self) {
  return Js_primitive.null_to_opt(Curry._1(ofElement, self));
}

function contentEditable(self) {
  return DomTypesRe.decodeContentEditable(self.contentEditable);
}

function setContentEditable(self, value) {
  self.contentEditable = DomTypesRe.encodeContentEditable(value);
  return /* () */0;
}

function dir(self) {
  return DomTypesRe.decodeDir(self.dir);
}

function setDir(self, value) {
  self.dir = DomTypesRe.encodeDir(value);
  return /* () */0;
}

var nodeType = include[0];

var asHtmlElement = include$1[0];

var ofNode = include$1[1];

var insertAdjacentElement = include$1[2];

var insertAdjacentHTML = include$1[3];

var insertAdjacentText = include$1[4];

exports.Impl = Impl;
exports.nodeType = nodeType;
exports.asHtmlElement = asHtmlElement;
exports.ofNode = ofNode;
exports.insertAdjacentElement = insertAdjacentElement;
exports.insertAdjacentHTML = insertAdjacentHTML;
exports.insertAdjacentText = insertAdjacentText;
exports.ofElement = ofElement$1;
exports.contentEditable = contentEditable;
exports.setContentEditable = setContentEditable;
exports.dir = dir;
exports.setDir = setDir;
/* include Not a pure module */

},{"bs-platform/lib/js/curry.js":7,"../nodes/NodeRe.js":25,"../nodes/ElementRe.js":9,"../DomTypesRe.js":24,"bs-platform/lib/js/js_primitive.js":14,"../events/EventTargetRe.js":29}],16:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");

function MakeComparableU(M) {
  var cmp = M[/* cmp */0];
  return /* module */[/* cmp */cmp];
}

function MakeComparable(M) {
  var cmp = M[/* cmp */0];
  var cmp$1 = Curry.__2(cmp);
  return /* module */[/* cmp */cmp$1];
}

function comparableU(cmp) {
  return /* module */[/* cmp */cmp];
}

function comparable(cmp) {
  var cmp$1 = Curry.__2(cmp);
  return /* module */[/* cmp */cmp$1];
}

function MakeHashableU(M) {
  var hash = M[/* hash */0];
  var eq = M[/* eq */1];
  return /* module */[
          /* hash */hash,
          /* eq */eq
        ];
}

function MakeHashable(M) {
  var hash = M[/* hash */0];
  var hash$1 = Curry.__1(hash);
  var eq = M[/* eq */1];
  var eq$1 = Curry.__2(eq);
  return /* module */[
          /* hash */hash$1,
          /* eq */eq$1
        ];
}

function hashableU(hash, eq) {
  return /* module */[
          /* hash */hash,
          /* eq */eq
        ];
}

function hashable(hash, eq) {
  var hash$1 = Curry.__1(hash);
  var eq$1 = Curry.__2(eq);
  return /* module */[
          /* hash */hash$1,
          /* eq */eq$1
        ];
}

exports.MakeComparableU = MakeComparableU;
exports.MakeComparable = MakeComparable;
exports.comparableU = comparableU;
exports.comparable = comparable;
exports.MakeHashableU = MakeHashableU;
exports.MakeHashable = MakeHashable;
exports.hashableU = hashableU;
exports.hashable = hashable;
/* No side effect */

},{"./curry.js":7}],33:[function(require,module,exports) {
'use strict';


function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */

},{}],17:[function(require,module,exports) {
'use strict';

var Block = require("./block.js");
var Caml_primitive = require("./caml_primitive.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

var for_in = function (o,foo){
        for (var x in o) { foo(x) }
      };

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        return Caml_primitive.caml_string_compare(a, b);
      } else {
        var is_a_number = a_type === "number";
        var is_b_number = b_type === "number";
        if (is_a_number) {
          if (is_b_number) {
            return Caml_primitive.caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x = a;
          var y = b;
          if (x === y) {
            return 0;
          } else if (x < y) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return Caml_primitive.caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                var a$1 = a;
                var b$1 = b;
                var _i = 0;
                var same_length = len_a;
                while(true) {
                  var i = _i;
                  if (i === same_length) {
                    return 0;
                  } else {
                    var res = caml_compare(a$1[i], b$1[i]);
                    if (res !== 0) {
                      return res;
                    } else {
                      _i = i + 1 | 0;
                      continue ;
                    }
                  }
                };
              } else {
                var a$2 = a;
                var b$2 = b;
                var min_key_lhs = [/* None */0];
                var min_key_rhs = [/* None */0];
                var do_key = function (param, key) {
                  var min_key = param[2];
                  var b = param[1];
                  if (!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0) {
                    var match = min_key[0];
                    if (match) {
                      if (key < match[0]) {
                        min_key[0] = /* Some */[key];
                        return /* () */0;
                      } else {
                        return 0;
                      }
                    } else {
                      min_key[0] = /* Some */[key];
                      return /* () */0;
                    }
                  } else {
                    return 0;
                  }
                };
                var partial_arg = /* tuple */[
                  a$2,
                  b$2,
                  min_key_rhs
                ];
                var do_key_a = (function(partial_arg){
                return function do_key_a(param) {
                  return do_key(partial_arg, param);
                }
                }(partial_arg));
                var partial_arg$1 = /* tuple */[
                  b$2,
                  a$2,
                  min_key_lhs
                ];
                var do_key_b = (function(partial_arg$1){
                return function do_key_b(param) {
                  return do_key(partial_arg$1, param);
                }
                }(partial_arg$1));
                for_in(a$2, do_key_a);
                for_in(b$2, do_key_b);
                var match = min_key_lhs[0];
                var match$1 = min_key_rhs[0];
                if (match) {
                  if (match$1) {
                    return Caml_primitive.caml_string_compare(match[0], match$1[0]);
                  } else {
                    return -1;
                  }
                } else if (match$1) {
                  return 1;
                } else {
                  return 0;
                }
              }
            } else if (len_a < len_b) {
              var a$3 = a;
              var b$3 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$3[i$1], b$3[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                  }
                }
              };
            } else {
              var a$4 = a;
              var b$4 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$4[i$2], b$4[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return true;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return false;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return a[1] === b[1];
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return false;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                var a$1 = a;
                var b$1 = b;
                var _i = 0;
                var same_length = len_a;
                while(true) {
                  var i = _i;
                  if (i === same_length) {
                    return true;
                  } else if (caml_equal(a$1[i], b$1[i])) {
                    _i = i + 1 | 0;
                    continue ;
                  } else {
                    return false;
                  }
                };
              } else {
                var a$2 = a;
                var b$2 = b;
                var result = [true];
                var do_key_a = (function(b$2,result){
                return function do_key_a(key) {
                  if (b$2.hasOwnProperty(key)) {
                    return 0;
                  } else {
                    result[0] = false;
                    return /* () */0;
                  }
                }
                }(b$2,result));
                var do_key_b = (function(a$2,b$2,result){
                return function do_key_b(key) {
                  if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                    result[0] = false;
                    return /* () */0;
                  } else {
                    return 0;
                  }
                }
                }(a$2,b$2,result));
                for_in(a$2, do_key_a);
                if (result[0]) {
                  for_in(b$2, do_key_b);
                }
                return result[0];
              }
            } else {
              return false;
            }
          }
        }
      }
    }
  };
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

exports.caml_obj_block = caml_obj_block;
exports.caml_obj_dup = caml_obj_dup;
exports.caml_obj_truncate = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy = caml_update_dummy;
exports.caml_compare = caml_compare;
exports.caml_equal = caml_equal;
exports.caml_equal_null = caml_equal_null;
exports.caml_equal_undefined = caml_equal_undefined;
exports.caml_equal_nullable = caml_equal_nullable;
exports.caml_notequal = caml_notequal;
exports.caml_greaterequal = caml_greaterequal;
exports.caml_greaterthan = caml_greaterthan;
exports.caml_lessthan = caml_lessthan;
exports.caml_lessequal = caml_lessequal;
exports.caml_min = caml_min;
exports.caml_max = caml_max;
/* No side effect */

},{"./block.js":33,"./caml_primitive.js":23,"./caml_builtin_exceptions.js":20}],3:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

var cmp = Caml_obj.caml_compare;

var VerbTypeComparator = Belt_Id.MakeComparable( /* module */[/* cmp */cmp]);

var cmp$1 = Caml_obj.caml_compare;

var ConjComparator = Belt_Id.MakeComparable( /* module */[/* cmp */cmp$1]);

function joinArray(delimiter, items) {
    return Belt_Array.reduce(items, "", function (acc, item) {
        return acc + (delimiter + item);
    }).substr(delimiter.length);
}

function stringOfArray(items) {
    return "[|" + (joinArray(",", Belt_Array.map(items, function (item) {
        return "{js|" + (item + "|js}");
    })) + "|]");
}

function stringOfPattern(p) {
    var number = p[/* number */0];
    var model = p[/* model */1];
    var present = stringOfArray(p[/* present */2]);
    var imperfect = stringOfArray(p[/* imperfect */3]);
    var preterite = stringOfArray(p[/* preterite */4]);
    var future = stringOfArray(p[/* future */5]);
    var conditional = stringOfArray(p[/* conditional */6]);
    var participle = p[/* participle */7];
    var gerund = p[/* gerund */8];
    return "{\n  number: " + (String(number) + (",\n  model: {js|" + (String(model) + ("|js},\n  present: " + (String(present) + (",\n  imperfect: " + (String(imperfect) + (",\n  preterite: " + (String(preterite) + (",\n  future: " + (String(future) + (",\n  conditional: " + (String(conditional) + (",\n  participle: {js|" + (String(participle) + ("|js},\n  gerund: {js|" + (String(gerund) + "|js}\n  }")))))))))))))))));
}

function conjugationOfString(s) {
    switch (s) {
        case "AR":
            return (/* Some */[/* AR */0]
            );
        case "ER":
            return (/* Some */[/* ER */1]
            );
        case "IR":
            return (/* Some */[/* IR */2]
            );
        default:
            return (/* None */0
            );
    }
}

function verbTypeOfString(s) {
    switch (s) {
        case "Irregular":
            return (/* Some */[/* Irregular */2]
            );
        case "Regular":
            return (/* Some */[/* Regular */0]
            );
        case "StemChanging":
            return (/* Some */[/* StemChanging */1]
            );
        default:
            return (/* None */0
            );
    }
}

function tenseOfString(s) {
    switch (s) {
        case "Conditional":
            return (/* Some */[/* Conditional */4]
            );
        case "Future":
            return (/* Some */[/* Future */3]
            );
        case "Imperfect":
            return (/* Some */[/* Imperfect */1]
            );
        case "Present":
            return (/* Some */[/* Present */0]
            );
        case "Preterite":
            return (/* Some */[/* Preterite */2]
            );
        default:
            return (/* None */0
            );
    }
}

exports.VerbTypeComparator = VerbTypeComparator;
exports.ConjComparator = ConjComparator;
exports.joinArray = joinArray;
exports.stringOfPattern = stringOfPattern;
exports.conjugationOfString = conjugationOfString;
exports.verbTypeOfString = verbTypeOfString;
exports.tenseOfString = tenseOfString;
/* VerbTypeComparator Not a pure module */
},{"bs-platform/lib/js/belt_Id.js":16,"bs-platform/lib/js/caml_obj.js":17,"bs-platform/lib/js/belt_Array.js":10}],41:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var templates = /* array */[
/* record */[
/* number */1,
/* model */"amar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */2,
/* model */"temer",
/* present : array */["o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */3,
/* model */"partir",
/* present : array */["o", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */4,
/* model */"anunciar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */5,
/* model */"env/i/ar",
/* present : array */["í/o", "í/as", "í/a", "amos", "áis", "env/í/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */6,
/* model */"averig/u/ar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["ü/é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */7,
/* model */"act/u/ar",
/* present : array */["ú/o", "ú/as", "ú/a", "amos", "áis", "ú/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */8,
/* model */"bailar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */9,
/* model */"a/i/slar",
/* present : array */["í/o", "í/as", "í/a", "amos", "áis", "í/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */10,
/* model */"causar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */11,
/* model */"a/u/nar",
/* present : array */["ú/o", "ú/as", "ú/a", "amos", "áis", "ú/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */12,
/* model */"peinar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */13,
/* model */"descafe/i/nar",
/* present : array */["í/o", "í/as", "í/a", "amos", "áis", "í/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */14,
/* model */"adeudar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */15,
/* model */"reh/u/sar",
/* present : array */["ú/o", "ú/as", "ú/a", "amos", "áis", "ú/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */16,
/* model */"ac/e/rtar",
/* present : array */["ie/o", "ie/as", "ie/a", "amos", "áis", "ie/an	"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */17,
/* model */"adqu/i/rir",
/* present : array */["ie/o", "ie/es", "ie/e", "imos", "ís", "ie/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */18,
/* model */"agrade/c/er",
/* present : array */["zc/o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */19,
/* model */"andar",
/* present : array */["o", "as", "a", "amos", "áis", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["uve", "uviste", "uvo", "uvimos", "uvisteis", "uvieron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */20,
/* model */"asir",
/* present : array */["go", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */21,
/* model */"/cab/er",
/* present : array */["quep/o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["cup/e", "cup/iste", "cup/o", "cup/imos", "cup/isteis", "cup/ieron"],
/* future : array */["ré", "rás", "rá", "remos", "réis", "rán"],
/* conditional : array */["ría", "rías", "ría", "ríamos", "ríais", "rían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */22,
/* model */"caer",
/* present : array */["igo", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "íste", "yó", "ímos", "ísteis", "yeron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */23,
/* model */"c/e/ñir",
/* present : array */["i/o", "i/es", "i/e", "imos", "ís", "i/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "i/ó", "imos", "isteis", "i/eron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"i/iendo"],
/* record */[
/* number */24,
/* model */"condu/c/ir",
/* present : array */["zc/o", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["j/e", "j/iste", "j/o", "j/imos", "j/isteis", "j/eron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */25,
/* model */"construir",
/* present : array */["yo", "yes", "ye", "imos", "ís", "yen"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "yó", "imos", "isteis", "yeron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */26,
/* model */"c/o/ntar",
/* present : array */["ue/o", "ue/as", "ue/a", "amos", "áis", "ue/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */27,
/* model */"dar",
/* present : array */["oy", "as", "a", "amos", "ais", "an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["i", "iste", "io", "imos", "isteis", "ieron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */28,
/* model */"d/ec/ir",
/* present : array */["ig/o", "ic/es", "ic/e", "imos", "ís", "ic/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["ij/e", "ij/iste", "ij/o", "ij/imos", "ij/isteis", "ij/eron"],
/* future : array */["iré", "/irás", "/irá", "/iremos", "/iréis", "/irán"],
/* conditional : array */["iría", "/irías", "/iría", "/iríamos", "/iríais", "/irían"],
/* participle */"icho",
/* gerund */"iciendo"],
/* record */[
/* number */29,
/* model */"disc/e/rnir",
/* present : array */["ie/o", "ie/es", "ie/e", "imos", "ís", "ie/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */30,
/* model */"d/o/rmir",
/* present : array */["ue/o", "ue/es", "ue/e", "imos", "ís", "ue/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "u/ió", "imos", "isteis", "u/ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"u/iendo"],
/* record */[
/* number */31,
/* model */"ent/e/nder",
/* present : array */["ie/o", "ie/es", "ie/e", "emos", "éis", "ie/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */32,
/* model */"/ergu/ir",
/* present : array */["yerg/o", "yergu/es", "yergu/e", "imos", "ís", "yergu/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "irgu/ió", "imos", "isteis", "irgu/ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"irgu/iendo"],
/* record */[
/* number */33,
/* model */"/e/rrar",
/* present : array */["ye/o", "ye/as", "ye/a", "amos", "áis", "ye/an"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["é", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */34,
/* model */"estar",
/* present : array */["oy", "ás", "á", "amos", "áis", "án"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["uve", "uviste", "uvo", "uvimos", "uvisteis", "uvieron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */35,
/* model */"h/ab/er",
/* present : array */["e", "/as", "/a", "/emos", "éis", "/an"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["ub/e", "ub/iste", "ub/o", "ub/imos", "ub/isteis", "ub/ieron"],
/* future : array */["ré", "rás", "rá", "remos", "réis", "rán"],
/* conditional : array */["ría", "rías", "ría", "ríamos", "ríais", "rían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */36,
/* model */"/hac/er",
/* present : array */["hag/o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["hic/e", "hic/iste", "hiz/o", "hic/imos", "hic/isteis", "hic/ieron"],
/* future : array */["har/é", "har/ás", "har/á", "har/emos", "har/éis", "har/án"],
/* conditional : array */["har/ía", "har/ías", "har/ía", "har/íamos", "har/íais", "har/ían"],
/* participle */"hecho/",
/* gerund */"iendo"],
/* record */[
/* number */37,
/* model */"ir",
/* present : array */["voy", "vas", "va", "vamos", "vais", "van"],
/* imperfect : array */["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
/* preterite : array */["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */38,
/* model */"j/u/gar",
/* present : array */["ue/go", "ue/gas", "ue/ga", "amos", "áis", "ue/gan"],
/* imperfect : array */["aba", "abas", "aba", "ábamos", "abais", "aban"],
/* preterite : array */["ué", "aste", "ó", "amos", "asteis", "aron"],
/* future : array */["aré", "arás", "ará", "aremos", "aréis", "arán"],
/* conditional : array */["aría", "arías", "aría", "aríamos", "aríais", "arían"],
/* participle */"ado",
/* gerund */"ando"],
/* record */[
/* number */39,
/* model */"leer",
/* present : array */["o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "íste", "yó", "ímos", "ísteis", "yeron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */40,
/* model */"lu/c/ir",
/* present : array */["zc/o", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */41,
/* model */"m/o/ver",
/* present : array */["ue/o", "ue/es", "ue/e", "emos", "éis", "ue/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */42,
/* model */"mullir",
/* present : array */["o", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ó", "imos", "isteis", "eron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"endo"],
/* record */[
/* number */43,
/* model */"oir",
/* present : array */["igo", "yes", "ye", "ímos", "ís", "yen"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "íste", "yó", "ímos", "ísteis", "yeron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */44,
/* model */"/o/ler",
/* present : array */["hue/o", "hue/es", "hue/e", "emos", "éis", "hue/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */45,
/* model */"p/e/dir",
/* present : array */["i/o", "i/es", "i/e", "imos", "ís", "i/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "i/ió", "imos", "isteis", "i/ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"i/iendo"],
/* record */[
/* number */46,
/* model */"p/o/der",
/* present : array */["ue/o", "ue/es", "ue/e", "emos", "éis", "ue/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["u/e", "u/iste", "u/o", "u/imos", "u/isteis", "u/ieron"],
/* future : array */["ré", "rás", "rá", "remos", "réis", "rán"],
/* conditional : array */["ría", "rías", "ría", "ríamos", "ríais", "rían"],
/* participle */"ido",
/* gerund */"u/iendo"],
/* record */[
/* number */47,
/* model */"p/on/er",
/* present : array */["go", "es (és)", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["u/se", "u/siste", "u/so", "u/simos", "u/sisteis", "u/sieron"],
/* future : array */["dré", "drás", "drá", "dremos", "dréis", "drán"],
/* conditional : array */["dría", "drías", "dría", "dríamos", "dríais", "drían"],
/* participle */"u/esto",
/* gerund */"iendo"],
/* record */[
/* number */48,
/* model */"p/u/drir",
/* present : array */["o", "es", "e", "imos", "podrimos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "podríamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron", "podrieron"],
/* future : array */["iré", "irás", "irá", "iremos", "podriremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "podriríamos", "iríais", "irían"],
/* participle */"o/ido",
/* gerund */"iendo"],
/* record */[
/* number */49,
/* model */"qu/er/er",
/* present : array */["ier/o", "ier/es", "ier/e", "emos", "éis", "ier/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["is/e", "is/iste", "is/o", "is/imos", "is/isteis", "is/ieron"],
/* future : array */["ré", "rás", "rá", "remos", "réis", "rán"],
/* conditional : array */["ría", "rías", "ría", "ríamos", "ríais", "rían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */50,
/* model */"roer",
/* present : array */["igo", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "íste", "yó", "ímos", "ísteis", "yen"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */51,
/* model */"s/ab/er",
/* present : array */["é", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["up/e", "up/iste", "up/o", "up/imos", "up/isteis", "up/ieron"],
/* future : array */["ré", "rás", "rá", "remos", "réis", "rán"],
/* conditional : array */["ría", "rías", "ría", "ríamos", "ríais", "rían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */52,
/* model */"salir",
/* present : array */["go", "es", "e", "imos", "ís", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["dré", "drás", "drá", "dremos", "dréis", "drán"],
/* conditional : array */["dría", "drías", "dría", "dríamos", "dríais", "drían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */53,
/* model */"s/e/ntir",
/* present : array */["ie/o", "ie/es", "ie/e", "imos", "ís", "ie/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "sintió", "imos", "isteis", "sinie/ron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ido",
/* gerund */"i/iendo"],
/* record */[
/* number */54,
/* model */"/s/er",
/* present : array */["/soy", "/eres", "/es", "/somos", "/sois", "/son"],
/* imperfect : array */["/era", "/eras", "/era", "/éramos", "/erais", "/eran"],
/* preterite : array */["/fui", "/fuiste", "/fue", "/fuimos", "/fuisteis", "/fueron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */55,
/* model */"sonr/e/ir",
/* present : array */["/ío", "/íes", "/íe", "ímos", "ís", "/íen"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "íste", "/ió", "ímos", "ísteis", "/ieron"],
/* future : array */["iré", "irás", "irá", "iremos", "iréis", "irán"],
/* conditional : array */["iría", "irías", "iría", "iríamos", "iríais", "irían"],
/* participle */"ído",
/* gerund */"iendo"],
/* record */[
/* number */56,
/* model */"tañer",
/* present : array */["o", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ó", "imos", "isteis", "eron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"endo"],
/* record */[
/* number */57,
/* model */"t/en/er",
/* present : array */["go", "ien/es", "ien/e", "emos", "éis", "ien/en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["uv/e", "uv/iste", "uv/o", "uv/imos", "uv/isteis", "uv/ieron"],
/* future : array */["dré", "drás", "drá", "dremos", "dréis", "drán"],
/* conditional : array */["dría", "drías", "dría", "dríamos", "dríais", "drían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */58,
/* model */"traer",
/* present : array */["igo", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["je", "jiste", "jo", "jimos", "jisteis", "jeron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"yendo"],
/* record */[
/* number */59,
/* model */"valer",
/* present : array */["go", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["dré", "drás", "drá", "dremos", "dréis", "drán"],
/* conditional : array */["dría", "drías", "dría", "dríamos", "dríais", "drían"],
/* participle */"ido",
/* gerund */"iendo"],
/* record */[
/* number */60,
/* model */"v/e/nir",
/* present : array */["go", "ie/ne", "ie/ne", "imos", "ís", "ie/nen"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["i/e", "i/iste", "i/o", "i/imos", "i/isteis", "i/ieron"],
/* future : array */["dré", "drás", "drá", "dremos", "dréis", "drán"],
/* conditional : array */["dría", "drías", "dría", "dríamos", "dríais", "drían"],
/* participle */"ido",
/* gerund */"i/iendo"],
/* record */[
/* number */61,
/* model */"ver",
/* present : array */["eo", "es", "e", "emos", "eis", "en"],
/* imperfect : array */["eía", "eías", "eía", "eíamos", "eíais", "eían"],
/* preterite : array */["i", "iste", "io", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"isto",
/* gerund */"iendo"],
/* record */[
/* number */62,
/* model */"ya/c/er",
/* present : array */["zc/", "es", "e", "emos", "éis", "en"],
/* imperfect : array */["ía", "ías", "ía", "íamos", "íais", "ían"],
/* preterite : array */["í", "iste", "ió", "imos", "isteis", "ieron"],
/* future : array */["eré", "erás", "erá", "eremos", "eréis", "erán"],
/* conditional : array */["ería", "erías", "ería", "eríamos", "eríais", "erían"],
/* participle */"ido",
/* gerund */"iendo"]];

exports.templates = templates;
/* No side effect */
},{}],4:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Patterns$Spanishverb = require("./Patterns.bs.js");

var verbList = /* array */[
/* record */[
/* spanish */"hablar",
/* english */"to speak",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"gustar",
/* english */"to like",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */true,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"estudiar",
/* english */"to study",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"escuchar",
/* english */"to listen to",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"visitar",
/* english */"to visit",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"viajar",
/* english */"to travel",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"enseñar",
/* english */"to teach",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"llegar",
/* english */"to arrive",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"llevar",
/* english */"to take, carry, wear",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"bailar",
/* english */"to dance",
/* conj : AR */0,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 0)],
/* record */[
/* spanish */"leer",
/* english */"to read",
/* conj : ER */1,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 38)],
/* record */[
/* spanish */"comer",
/* english */"to eat",
/* conj : ER */1,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 1)],
/* record */[
/* spanish */"beber",
/* english */"to drink",
/* conj : ER */1,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 1)],
/* record */[
/* spanish */"ent/e/nder",
/* english */"to understand",
/* conj : ER */1,
/* type_ : StemChanging */1,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 30)],
/* record */[
/* spanish */"vivir",
/* english */"to live",
/* conj : IR */2,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 2)],
/* record */[
/* spanish */"d/o/rmir",
/* english */"to sleep",
/* conj : IR */2,
/* type_ : StemChanging */1,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 29)],
/* record */[
/* spanish */"decidir",
/* english */"to decide",
/* conj : IR */2,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 2)],
/* record */[
/* spanish */"escribir",
/* english */"to write",
/* conj : IR */2,
/* type_ : Regular */0,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 2)],
/* record */[
/* spanish */"estar",
/* english */"to be",
/* conj : AR */0,
/* type_ : Irregular */2,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 33)],
/* record */[
/* spanish */"/s/er",
/* english */"to be",
/* conj : ER */1,
/* type_ : Irregular */2,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 53)],
/* record */[
/* spanish */"ir",
/* english */"to go",
/* conj : IR */2,
/* type_ : Irregular */2,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 36)],
/* record */[
/* spanish */"t/en/er",
/* english */"to have",
/* conj : ER */1,
/* type_ : Irregular */2,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 56)],
/* record */[
/* spanish */"p/o/der",
/* english */"to be able (to)",
/* conj : ER */1,
/* type_ : Irregular */2,
/* reflexive */false,
/* pattern */Caml_array.caml_array_get(Patterns$Spanishverb.templates, 45)]];

exports.verbList = verbList;
/* No side effect */
},{"bs-platform/lib/js/caml_array.js":11,"./Patterns.bs.js":41}],34:[function(require,module,exports) {
'use strict';


var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}

exports.caml_set_oo_id = caml_set_oo_id;
exports.get_id = get_id;
exports.create = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */

},{}],18:[function(require,module,exports) {
'use strict';

var Caml_exceptions = require("./caml_exceptions.js");

var $$Error = Caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

exports.$$Error = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.raiseError = raiseError;
exports.raiseEvalError = raiseEvalError;
exports.raiseRangeError = raiseRangeError;
exports.raiseReferenceError = raiseReferenceError;
exports.raiseSyntaxError = raiseSyntaxError;
exports.raiseTypeError = raiseTypeError;
exports.raiseUriError = raiseUriError;
/* No side effect */

},{"./caml_exceptions.js":34}],35:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div = div;
exports.mod_ = mod_;
exports.caml_bswap16 = caml_bswap16;
exports.caml_int32_bswap = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul = imul;
/* imul Not a pure module */

},{"./caml_builtin_exceptions.js":20}],37:[function(require,module,exports) {
'use strict';


var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

exports.repeat = repeat;
/* repeat Not a pure module */

},{}],36:[function(require,module,exports) {
'use strict';

var Caml_int32 = require("./caml_int32.js");
var Caml_utils = require("./caml_utils.js");
var Caml_primitive = require("./caml_primitive.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */2147483647,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return (x & 2147483648) !== 0;
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return x[/* lo */1] === y[/* lo */1];
  } else {
    return false;
  }
}

function equal_null(x, y) {
  if (y !== null) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_undefined(x, y) {
  if (y !== undefined) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_nullable(x, y) {
  if (y == null) {
    return false;
  } else {
    return eq(x, y);
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  }
}

function lsr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset === 0) {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    } else if (offset > 0) {
      var lo = (hi >>> offset);
      return /* record */[
              /* hi */0,
              /* lo */(lo >>> 0)
            ];
    } else {
      var hi$1 = (hi >>> numBits);
      var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return false;
  } else {
    return true;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[/* lo */1] >= param$1[/* lo */1];
  }
}

function neq(x, y) {
  return !eq(x, y);
}

function lt(x, y) {
  return !ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return true;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return false;
  } else {
    return x[/* lo */1] > y[/* lo */1];
  }
}

function le(x, y) {
  return !gt(x, y);
}

function min(x, y) {
  if (ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max(x, y) {
  if (gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Caml_primitive.caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v === 0) {
    return Caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  } else {
    return v;
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0 || match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array(/* array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int = min_int;
exports.max_int = max_int;
exports.one = one;
exports.zero = zero;
exports.not = not;
exports.of_int32 = of_int32;
exports.to_int32 = to_int32;
exports.add = add;
exports.neg = neg;
exports.sub = sub;
exports.lsl_ = lsl_;
exports.lsr_ = lsr_;
exports.asr_ = asr_;
exports.is_zero = is_zero;
exports.mul = mul;
exports.xor = xor;
exports.or_ = or_;
exports.and_ = and_;
exports.swap = swap;
exports.ge = ge;
exports.eq = eq;
exports.neq = neq;
exports.lt = lt;
exports.gt = gt;
exports.le = le;
exports.equal_null = equal_null;
exports.equal_undefined = equal_undefined;
exports.equal_nullable = equal_nullable;
exports.min = min;
exports.max = max;
exports.to_float = to_float;
exports.of_float = of_float;
exports.div = div;
exports.mod_ = mod_;
exports.div_mod = div_mod;
exports.compare = compare;
exports.to_hex = to_hex;
exports.discard_sign = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64 = get64;
/* two_ptr_32_dbl Not a pure module */

},{"./caml_int32.js":35,"./caml_utils.js":37,"./caml_primitive.js":23,"./caml_builtin_exceptions.js":20}],19:[function(require,module,exports) {
'use strict';

var Curry = require("./curry.js");
var Caml_int32 = require("./caml_int32.js");
var Caml_int64 = require("./caml_int64.js");
var Caml_utils = require("./caml_utils.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate */false,
    /* base : Dec */2,
    /* signedconv */false,
    /* width */0,
    /* uppercase */false,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = true;
                  _i = i + 1 | 0;
                  continue ;
              case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
              case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
              case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
              
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = true;
          f[/* uppercase */7] = true;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = true;
                _i = i + 1 | 0;
                continue ;
            case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
            case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return w >= 0 && w <= 9;
                    }
                    }(j))()) {
                  f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
            case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
            case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
        case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return w >= 0 && w <= 9;
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
        case 4 : 
            f[/* signedconv */5] = true;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
        case 5 : 
            f[/* signedconv */5] = true;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        
      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return s.length > (prec$1 + 1 | 0);
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float = caml_format_float;
exports.caml_format_int = caml_format_int;
exports.caml_nativeint_format = caml_nativeint_format;
exports.caml_int32_format = caml_int32_format;
exports.caml_float_of_string = caml_float_of_string;
exports.caml_int64_format = caml_int64_format;
exports.caml_int_of_string = caml_int_of_string;
exports.caml_int32_of_string = caml_int32_of_string;
exports.caml_int64_of_string = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */

},{"./curry.js":7,"./caml_int32.js":35,"./caml_int64.js":36,"./caml_utils.js":37,"./caml_builtin_exceptions.js":20}],5:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function map(f, param) {
  if (param) {
    return (/* Some */[Curry._1(f, param[0])]
    );
  } else {
    return (/* None */0
    );
  }
}

function andThen(f, item) {
  if (item) {
    return Curry._1(f, item[0]);
  } else {
    return (/* None */0
    );
  }
}

function optFloat(str) {
  var exit = 0;
  var fNum;
  try {
    fNum = Caml_format.caml_float_of_string(str);
    exit = 1;
  } catch (raw_exn) {
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      if (exn[1] === "float_of_string") {
        return (/* None */0
        );
      } else {
        throw exn;
      }
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return (/* Some */[fNum]
    );
  }
}

function optInt(str) {
  var exit = 0;
  var anInt;
  try {
    anInt = Caml_format.caml_int_of_string(str);
    exit = 1;
  } catch (raw_exn) {
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      if (exn[1] === "int_of_string") {
        return (/* None */0
        );
      } else {
        throw exn;
      }
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return (/* Some */[anInt]
    );
  }
}

function getStringVal(el) {
  return (/* Some */[el.value]
  );
}

function setText(text, el, $$default) {
  if (text) {
    if (el) {
      el[0].textContent = text[0];
      return (/* () */0
      );
    } else {
      return (/* () */0
      );
    }
  } else if (el) {
    el[0].textContent = $$default;
    return (/* () */0
    );
  } else {
    return (/* () */0
    );
  }
}

function getFloatValue(id) {
  return andThen(optFloat, andThen(getStringVal, Js_primitive.null_undefined_to_opt(document.getElementById(id))));
}

function getIntValue(id) {
  return andThen(optInt, andThen(getStringVal, Js_primitive.null_undefined_to_opt(document.getElementById(id))));
}

function getStringValue(id) {
  return andThen(getStringVal, Js_primitive.null_undefined_to_opt(document.getElementById(id)));
}

function clearChildren(el) {
  while (true) {
    var match = el.lastChild;
    if (match == null) {
      return (/* () */0
      );
    } else {
      el.removeChild(match);
      continue;
    }
  };
}

function clearChildrenById(id) {
  var match = document.getElementById(id);
  if (match == null) {
    return (/* () */0
    );
  } else {
    return clearChildren(match);
  }
}

function keepWithIndex(arr, predicate) {
  var _acc = /* array */[];
  var _index = 0;
  while (true) {
    var index = _index;
    var acc = _acc;
    if (index < arr.length) {
      if (Curry._2(predicate, index, Caml_array.caml_array_get(arr, index))) {
        _index = index + 1 | 0;
        _acc = Belt_Array.concat(acc, /* array */[Caml_array.caml_array_get(arr, index)]);
        continue;
      } else {
        _index = index + 1 | 0;
        continue;
      }
    } else {
      return acc;
    }
  };
}

function keepMapWithIndex(arr, mapFcn) {
  var _acc = /* array */[];
  var _index = 0;
  while (true) {
    var index = _index;
    var acc = _acc;
    if (index < arr.length) {
      var match = Curry._2(mapFcn, index, Caml_array.caml_array_get(arr, index));
      _index = index + 1 | 0;
      if (match) {
        _acc = Belt_Array.concat(acc, /* array */[match[0]]);
        continue;
      } else {
        continue;
      }
    } else {
      return acc;
    }
  };
}

exports.map = map;
exports.andThen = andThen;
exports.optFloat = optFloat;
exports.optInt = optInt;
exports.getStringVal = getStringVal;
exports.setText = setText;
exports.getFloatValue = getFloatValue;
exports.getIntValue = getIntValue;
exports.getStringValue = getStringValue;
exports.clearChildren = clearChildren;
exports.clearChildrenById = clearChildrenById;
exports.keepWithIndex = keepWithIndex;
exports.keepMapWithIndex = keepMapWithIndex;
/* No side effect */
},{"bs-platform/lib/js/curry.js":7,"bs-platform/lib/js/js_exn.js":18,"bs-platform/lib/js/belt_Array.js":10,"bs-platform/lib/js/caml_array.js":11,"bs-platform/lib/js/caml_format.js":19,"bs-platform/lib/js/js_primitive.js":14,"bs-platform/lib/js/caml_builtin_exceptions.js":20}],1:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var ElementRe = require("bs-webapi/src/dom/nodes/ElementRe.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var DocumentRe = require("bs-webapi/src/dom/nodes/DocumentRe.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var HtmlElementRe = require("bs-webapi/src/dom/html/HtmlElementRe.js");
var Verb$Spanishverb = require("./Verb.bs.js");
var VerbList$Spanishverb = require("./VerbList.bs.js");
var WebUtils$Spanishverb = require("./WebUtils.bs.js");

var reflexPronoun = /* array */["me", "te", "se", "nos", "vos", "se"];

function getStem(s) {
  return s.substring(0, s.length - 2 | 0);
}

function conjugate(v, tense, person, number) {
  var stemParts = getStem(v[/* spanish */0]).split("/");
  var n = (person - 1 | 0) + (number ? 3 : 0) | 0;
  var tmp;
  switch (tense) {
    case 0:
      tmp = v[/* pattern */5][/* present */2];
      break;
    case 1:
      tmp = v[/* pattern */5][/* imperfect */3];
      break;
    case 2:
      tmp = v[/* pattern */5][/* preterite */4];
      break;
    case 3:
      tmp = v[/* pattern */5][/* future */5];
      break;
    case 4:
      tmp = v[/* pattern */5][/* conditional */6];
      break;

  }
  var ending = Belt_Array.getExn(tmp, n);
  var endParts = ending.split("/");
  var match = stemParts.length;
  var match$1 = endParts.length;
  var base;
  var exit = 0;
  var switcher = match - 1 | 0;
  if (switcher > 2 || switcher < 0) {
    exit = 1;
  } else {
    switch (switcher) {
      case 0:
        if (match$1 !== 1) {
          exit = 1;
        } else {
          base = Caml_array.caml_array_get(stemParts, 0) + Caml_array.caml_array_get(endParts, 0);
        }
        break;
      case 1:
        exit = 1;
        break;
      case 2:
        if (match$1 !== 1) {
          if (match$1 !== 2) {
            exit = 1;
          } else {
            base = Caml_array.caml_array_get(stemParts, 0) + (Caml_array.caml_array_get(endParts, 0) + (Caml_array.caml_array_get(stemParts, 2) + Caml_array.caml_array_get(endParts, 1)));
          }
        } else {
          base = Caml_array.caml_array_get(stemParts, 0) + (Caml_array.caml_array_get(stemParts, 1) + (Caml_array.caml_array_get(stemParts, 2) + Caml_array.caml_array_get(endParts, 0)));
        }
        break;

    }
  }
  if (exit === 1) {
    base = Caml_array.caml_array_get(stemParts, 0) + Caml_array.caml_array_get(endParts, 0);
  }
  var match$2 = v[/* reflexive */4];
  if (match$2) {
    return Caml_array.caml_array_get(reflexPronoun, n) + (" " + base);
  } else {
    return base;
  }
}

function keeper(f, n) {
  var match = Curry._1(HtmlElementRe.ofNode, n);
  if (match) {
    var element = match[0];
    if (element.checked) {
      return Curry._1(f, element.value);
    } else {
      return (/* None */0
      );
    }
  } else {
    return (/* None */0
    );
  }
}

function requestedConjugations(htmlDoc) {
  var conjInput = Array.prototype.slice.call(htmlDoc.getElementsByName("conj"));
  return Belt_Set.fromArray(Belt_Array.keepMap(conjInput, function (param) {
    return keeper(Verb$Spanishverb.conjugationOfString, param);
  }), Verb$Spanishverb.ConjComparator);
}

function requestedVerbTypes(htmlDoc) {
  var typeInput = Array.prototype.slice.call(htmlDoc.getElementsByName("verbType"));
  return Belt_Set.fromArray(Belt_Array.keepMap(typeInput, function (param) {
    return keeper(Verb$Spanishverb.verbTypeOfString, param);
  }), Verb$Spanishverb.VerbTypeComparator);
}

function createMenuItem(content, value) {
  var el = document.createElement("option");
  el.setAttribute("value", String(value));
  el.textContent = content;
  return el;
}

function infinitive(v) {
  var match = v[/* reflexive */4];
  return v[/* spanish */0].replace(/\//g, "") + (match ? "se" : "");
}

function filterVerbs() {
  var htmlDoc = DocumentRe.asHtmlDocument(document);
  if (htmlDoc) {
    var htmlDoc$1 = htmlDoc[0];
    var conjSet = requestedConjugations(htmlDoc$1);
    var typeSet = requestedVerbTypes(htmlDoc$1);
    var match = document.getElementById("reflexive");
    var isReflexive = match == null ? false : match.checked;
    WebUtils$Spanishverb.clearChildrenById("verbList");
    var verbListMenu = document.getElementById("verbList");
    if (verbListMenu == null) {
      return (/* () */0
      );
    } else {
      var matching = WebUtils$Spanishverb.keepMapWithIndex(VerbList$Spanishverb.verbList, function (idx, item) {
        if (Belt_Set.has(conjSet, item[/* conj */2]) && Belt_Set.has(typeSet, item[/* type_ */3]) && isReflexive === item[/* reflexive */4]) {
          return (/* Some */[/* tuple */[idx + 1 | 0, item]]
          );
        } else {
          return (/* None */0
          );
        }
      });
      var match$1 = matching.length === 0;
      verbListMenu.appendChild(createMenuItem(match$1 ? "No verbs meet your criteria" : "Choose a verb", 0));
      return Belt_Array.forEach(matching, function (item) {
        verbListMenu.appendChild(createMenuItem(infinitive(item[1]), item[0]));
        return (/* () */0
        );
      });
    }
  } else {
    return (/* () */0
    );
  }
}

function conjugateVerb() {
  var verbOption = WebUtils$Spanishverb.getIntValue("verbList");
  var tenseOption = Belt_Option.flatMap(WebUtils$Spanishverb.getStringValue("tense"), Verb$Spanishverb.tenseOfString);
  if (verbOption && tenseOption) {
    var tense = tenseOption[0];
    var verb = Caml_array.caml_array_get(VerbList$Spanishverb.verbList, verbOption[0] - 1 | 0);
    WebUtils$Spanishverb.setText( /* Some */[infinitive(verb) + (" (" + (verb[/* english */1] + ")"))], Js_primitive.null_undefined_to_opt(document.getElementById("verbTitle")), " ");
    return Belt_Array.forEach(Belt_Array.range(0, 5), function (n) {
      var match = n < 3;
      return WebUtils$Spanishverb.setText( /* Some */[conjugate(verb, tense, n % 3 + 1 | 0, match ? /* Singular */0 : /* Plural */1)], Js_primitive.null_undefined_to_opt(document.getElementById("v" + String(n))), "");
    });
  } else {
    return (/* () */0
    );
  }
}

var setOnChange = function setOnChange(element, fcn) {
  element.onchange = fcn;
};

function setOnChangeId(id, f) {
  var match = document.getElementById(id);
  if (match == null) {
    return (/* () */0
    );
  } else {
    return Curry._2(setOnChange, match, f);
  }
}

function setArrayChange(arr, fcn) {
  return Belt_Array.forEach(arr, function (item) {
    var match = ElementRe.ofNode(item);
    if (match) {
      return Curry._2(setOnChange, match[0], fcn);
    } else {
      return (/* () */0
      );
    }
  });
}

var htmlDoc = DocumentRe.asHtmlDocument(document);

if (htmlDoc) {
  var htmlDoc$1 = htmlDoc[0];
  setArrayChange(Array.prototype.slice.call(htmlDoc$1.getElementsByName("conj")), filterVerbs);
  setArrayChange(Array.prototype.slice.call(htmlDoc$1.getElementsByName("verbType")), filterVerbs);
  setArrayChange(Array.prototype.slice.call(htmlDoc$1.getElementsByName("reflexive")), filterVerbs);
  setOnChangeId("verbList", conjugateVerb);
  setOnChangeId("tense", conjugateVerb);
}

var S = 0;

var V = 0;

var U = 0;

var Arr = 0;

var $$Set = 0;

exports.S = S;
exports.V = V;
exports.U = U;
exports.Arr = Arr;
exports.$$Set = $$Set;
exports.reflexPronoun = reflexPronoun;
exports.getStem = getStem;
exports.conjugate = conjugate;
exports.keeper = keeper;
exports.requestedConjugations = requestedConjugations;
exports.requestedVerbTypes = requestedVerbTypes;
exports.createMenuItem = createMenuItem;
exports.infinitive = infinitive;
exports.filterVerbs = filterVerbs;
exports.conjugateVerb = conjugateVerb;
exports.setOnChange = setOnChange;
exports.setOnChangeId = setOnChangeId;
exports.setArrayChange = setArrayChange;
exports.htmlDoc = htmlDoc;
/* setOnChange Not a pure module */
},{"bs-platform/lib/js/curry.js":7,"bs-platform/lib/js/belt_Set.js":8,"bs-webapi/src/dom/nodes/ElementRe.js":9,"bs-platform/lib/js/belt_Array.js":10,"bs-platform/lib/js/caml_array.js":11,"bs-webapi/src/dom/nodes/DocumentRe.js":12,"bs-platform/lib/js/belt_Option.js":13,"bs-platform/lib/js/js_primitive.js":14,"bs-webapi/src/dom/html/HtmlElementRe.js":15,"./Verb.bs.js":3,"./VerbList.bs.js":4,"./WebUtils.bs.js":5}]},{},[1])