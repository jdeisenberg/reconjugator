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

var reflexPronoun = /* array */[
  "me",
  "te",
  "se",
  "nos",
  "vos",
  "se"
];

function getStem(s) {
  return s.substring(0, s.length - 2 | 0);
}

function conjugate(v, tense, person, number) {
  var stemParts = getStem(v[/* spanish */0]).split("/");
  var n = (person - 1 | 0) + (
    number ? 3 : 0
  ) | 0;
  var tmp;
  switch (tense) {
    case 0 : 
        tmp = v[/* pattern */5][/* present */2];
        break;
    case 1 : 
        tmp = v[/* pattern */5][/* imperfect */3];
        break;
    case 2 : 
        tmp = v[/* pattern */5][/* preterite */4];
        break;
    case 3 : 
        tmp = v[/* pattern */5][/* future */5];
        break;
    case 4 : 
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
      case 0 : 
          if (match$1 !== 1) {
            exit = 1;
          } else {
            base = Caml_array.caml_array_get(stemParts, 0) + Caml_array.caml_array_get(endParts, 0);
          }
          break;
      case 1 : 
          exit = 1;
          break;
      case 2 : 
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
      return /* None */0;
    }
  } else {
    return /* None */0;
  }
}

function requestedConjugations(htmlDoc) {
  var conjInput = Array.prototype.slice.call(htmlDoc.getElementsByName("conj"));
  return Belt_Set.fromArray(Belt_Array.keepMap(conjInput, (function (param) {
                    return keeper(Verb$Spanishverb.conjugationOfString, param);
                  })), Verb$Spanishverb.ConjComparator);
}

function requestedVerbTypes(htmlDoc) {
  var typeInput = Array.prototype.slice.call(htmlDoc.getElementsByName("verbType"));
  return Belt_Set.fromArray(Belt_Array.keepMap(typeInput, (function (param) {
                    return keeper(Verb$Spanishverb.verbTypeOfString, param);
                  })), Verb$Spanishverb.VerbTypeComparator);
}

function createMenuItem(content, value) {
  var el = document.createElement("option");
  el.setAttribute("value", String(value));
  el.textContent = content;
  return el;
}

function infinitive(v) {
  var match = v[/* reflexive */4];
  return v[/* spanish */0].replace((/\//g), "") + (
          match ? "se" : ""
        );
}

function filterVerbs() {
  var htmlDoc = DocumentRe.asHtmlDocument(document);
  if (htmlDoc) {
    var htmlDoc$1 = htmlDoc[0];
    var conjSet = requestedConjugations(htmlDoc$1);
    var typeSet = requestedVerbTypes(htmlDoc$1);
    var match = document.getElementById("reflexive");
    var isReflexive = (match == null) ? false : match.checked;
    WebUtils$Spanishverb.clearChildrenById("verbList");
    var verbListMenu = document.getElementById("verbList");
    if (verbListMenu == null) {
      return /* () */0;
    } else {
      var matching = WebUtils$Spanishverb.keepMapWithIndex(VerbList$Spanishverb.verbList, (function (idx, item) {
              if (Belt_Set.has(conjSet, item[/* conj */2]) && Belt_Set.has(typeSet, item[/* type_ */3]) && isReflexive === item[/* reflexive */4]) {
                return /* Some */[/* tuple */[
                          idx + 1 | 0,
                          item
                        ]];
              } else {
                return /* None */0;
              }
            }));
      var match$1 = matching.length === 0;
      verbListMenu.appendChild(createMenuItem(match$1 ? "No verbs meet your criteria" : "Choose a verb", 0));
      return Belt_Array.forEach(matching, (function (item) {
                    verbListMenu.appendChild(createMenuItem(infinitive(item[1]), item[0]));
                    return /* () */0;
                  }));
    }
  } else {
    return /* () */0;
  }
}

function conjugateVerb() {
  var verbOption = WebUtils$Spanishverb.getIntValue("verbList");
  var tenseOption = Belt_Option.flatMap(WebUtils$Spanishverb.getStringValue("tense"), Verb$Spanishverb.tenseOfString);
  if (verbOption && tenseOption) {
    var tense = tenseOption[0];
    var verb = Caml_array.caml_array_get(VerbList$Spanishverb.verbList, verbOption[0] - 1 | 0);
    WebUtils$Spanishverb.setText(/* Some */[infinitive(verb) + (" (" + (verb[/* english */1] + ")"))], Js_primitive.null_undefined_to_opt(document.getElementById("verbTitle")), " ");
    return Belt_Array.forEach(Belt_Array.range(0, 5), (function (n) {
                  var match = n < 3;
                  return WebUtils$Spanishverb.setText(/* Some */[conjugate(verb, tense, n % 3 + 1 | 0, match ? /* Singular */0 : /* Plural */1)], Js_primitive.null_undefined_to_opt(document.getElementById("v" + String(n))), "");
                }));
  } else {
    return /* () */0;
  }
}

var setOnChange = (
  function(element, fcn) {
    element.onchange = fcn
  }
);

function setOnChangeId(id, f) {
  var match = document.getElementById(id);
  if (match == null) {
    return /* () */0;
  } else {
    return Curry._2(setOnChange, match, f);
  }
}

function setArrayChange(arr, fcn) {
  return Belt_Array.forEach(arr, (function (item) {
                var match = ElementRe.ofNode(item);
                if (match) {
                  return Curry._2(setOnChange, match[0], fcn);
                } else {
                  return /* () */0;
                }
              }));
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
