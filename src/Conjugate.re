open Webapi.Dom;

module S = Js.String;
module V = Verb;

let getStem = (s: string) : string => {
  S.substring(~from=0, ~to_ = (S.length(s) - 2), s);
};

let conjugate = (v: Verb.verb, tense: Verb.tense, person: int, number: Verb.number) : string => {
  let stemParts = S.split("/", getStem(v.spanish));
  let n = (person - 1) + switch (number) { | Singular => 0 | Plural => 3 };
  let ending = Belt.Array.getExn(switch(tense) {
    | Present => v.pattern.present
    | Imperfect => v.pattern.imperfect
    | Preterite => v.pattern.preterite
    | Future => v.pattern.future
    | Conditional => v.pattern.conditional
  }, n);
  let endParts = S.split("/", ending);
  switch (Belt.Array.length(stemParts), Belt.Array.length(endParts)) {
    | (1, 1) => stemParts[0] ++ endParts[0]
    | (3, 1) => stemParts[0] ++ stemParts[1] ++ stemParts[2] ++ endParts[0]
    | (3, 2) => stemParts[0] ++ endParts[0] ++ stemParts[2] ++ endParts[1]
    | _ => stemParts[0] ++ endParts[0]
  };
};


let formRead = (_evt: Dom.mouseEvent) : unit => {
  let resultElement = Document.getElementById("result", document);
  Js.log2("result element", resultElement);
  let result = Document.getElementById("tense", document) |> WebUtils.andThen(WebUtils.getStringValue);
  Js.log2("String value from tense is:", result);
  switch (result) {
    | Some(result) => WebUtils.andThen(WebUtils.setText(result),resultElement)
    | None => WebUtils.setText("", resultElement)
  };
  ();
};

/*
switch (Document.getElementById("conjugate", document)) {
  | Some (el) => EventTarget.addClickEventListener(formRead, Element.asEventTarget(el))
  | None => ()
};
*/

/*


=================
let andThen = (f: 'a => option('b)) =>
  (item) => {
    switch (item) {
  | Some(v) => f(v)
  | None => None
    }
};

->->->->
function andThen(f, item) {
  if (item) {
    return Curry._1(f, item[0]);
  } else {
    return /* None */0;
  }
}

==================
let andThen = (f: 'a => option('b)) =>
  fun
  | Some(v) => f(v)
  | None => None
;


*/
