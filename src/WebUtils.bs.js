// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function map(f, param) {
  if (param !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(param)));
  }
  
}

function andThen(f, item) {
  if (item !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(item));
  }
  
}

function optFloat(str) {
  var fNum;
  try {
    fNum = Caml_format.caml_float_of_string(str);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      if (exn[1] === "float_of_string") {
        return ;
      } else {
        throw exn;
      }
    } else {
      throw exn;
    }
  }
  return fNum;
}

function optInt(str) {
  var anInt;
  try {
    anInt = Caml_format.caml_int_of_string(str);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      if (exn[1] === "int_of_string") {
        return ;
      } else {
        throw exn;
      }
    } else {
      throw exn;
    }
  }
  return anInt;
}

function getStringVal(el) {
  return el.value;
}

function setText(text, el, $$default) {
  if (text !== undefined) {
    if (el !== undefined) {
      Caml_option.valFromOption(el).textContent = text;
      return /* () */0;
    } else {
      return /* () */0;
    }
  } else if (el !== undefined) {
    Caml_option.valFromOption(el).textContent = $$default;
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function getFloatValue(id) {
  return andThen(optFloat, andThen(getStringVal, Caml_option.nullable_to_opt(document.getElementById(id))));
}

function getIntValue(id) {
  return andThen(optInt, andThen(getStringVal, Caml_option.nullable_to_opt(document.getElementById(id))));
}

function getStringValue(id) {
  return andThen(getStringVal, Caml_option.nullable_to_opt(document.getElementById(id)));
}

function clearChildren(el) {
  while(true) {
    var match = el.lastChild;
    if (match == null) {
      return /* () */0;
    } else {
      el.removeChild(match);
      continue ;
    }
  };
}

function clearChildrenById(id) {
  var match = document.getElementById(id);
  if (match == null) {
    return /* () */0;
  } else {
    return clearChildren(match);
  }
}

function keepWithIndex(arr, predicate) {
  var _acc = /* array */[];
  var _index = 0;
  while(true) {
    var index = _index;
    var acc = _acc;
    if (index < arr.length) {
      if (Curry._2(predicate, index, Caml_array.caml_array_get(arr, index))) {
        _index = index + 1 | 0;
        _acc = Belt_Array.concat(acc, /* array */[Caml_array.caml_array_get(arr, index)]);
        continue ;
      } else {
        _index = index + 1 | 0;
        continue ;
      }
    } else {
      return acc;
    }
  };
}

function keepMapWithIndex(arr, mapFcn) {
  var _acc = /* array */[];
  var _index = 0;
  while(true) {
    var index = _index;
    var acc = _acc;
    if (index < arr.length) {
      var match = Curry._2(mapFcn, index, Caml_array.caml_array_get(arr, index));
      _index = index + 1 | 0;
      if (match !== undefined) {
        _acc = Belt_Array.concat(acc, /* array */[Caml_option.valFromOption(match)]);
        continue ;
      } else {
        continue ;
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
