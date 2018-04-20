open Webapi.Dom;

module S = Js.String;
module V = Verb;
module U = WebUtils;
module Arr = Belt.Array;
module Set = Belt.Set;

let reflexPronoun = [|"me", "te", "se", "nos", "vos", "se"|];

type verbTypeSet = Set.t(V.verbType, V.VerbTypeComparator.identity);
type conjugationSet = Set.t(V.conjugation, V.ConjComparator.identity);

let getStem = (s: string) : string => {
  S.substring(~from=0, ~to_ = (S.length(s) - 2), s);
};

let conjugate = (v: Verb.verb, tense: Verb.tense, person: int, number: Verb.number) : string => {
  let stemParts = Js.String.split("/", getStem(v.spanish));
  let n = (person - 1) + switch (number) { | Singular => 0 | Plural => 3 };
  let ending = Arr.getExn(switch(tense) {
    | Present => v.pattern.present
    | Imperfect => v.pattern.imperfect
    | Preterite => v.pattern.preterite
    | Future => v.pattern.future
    | Conditional => v.pattern.conditional
  }, n);
  let endParts = Js.String.split("/", ending);
  let base = switch (Arr.length(stemParts), Arr.length(endParts)) {
    | (1, 1) => stemParts[0] ++ endParts[0]
    | (3, 1) => stemParts[0] ++ stemParts[1] ++ stemParts[2] ++ endParts[0]
    | (3, 2) => stemParts[0] ++ endParts[0] ++ stemParts[2] ++ endParts[1]
    | _ => stemParts[0] ++ endParts[0]
  };
  v.reflexive ? reflexPronoun[n] ++ " " ++ base : base;
};

let keeper = (f: (string => option('a))) : (Dom.node => option('a)) => {
  fun(n: Dom.node) => {
    switch (HtmlElement.ofNode(n)) {
      | Some(element) => {
          if (HtmlElement.checked(element)) {
            f(HtmlElement.value(element))
          } else {
            None;
          }
        }
      | None => None
    }
  }
};

let requestedConjugations = (htmlDoc: Dom.htmlDocument) : conjugationSet =>  {
  let conjInput = NodeList.toArray(HtmlDocument.getElementsByName("conj", htmlDoc));
  Arr.keepMap(conjInput, keeper(V.conjugationOfString)) |.
    Set.fromArray(~id=(module V.ConjComparator));
};

let requestedVerbTypes = (htmlDoc: Dom.htmlDocument) : verbTypeSet =>  {
  let typeInput = NodeList.toArray(HtmlDocument.getElementsByName("verbType", htmlDoc));
  Arr.keepMap(typeInput, keeper(V.verbTypeOfString)) |.
    Set.fromArray(~id=(module V.VerbTypeComparator));
};

let createMenuItem = (content: string, value: int) : Dom.element => {
  let el = Document.createElement("option", document);
  Element.setAttribute("value", string_of_int(value), el);
  Element.setTextContent(el, content);
  el;
};

let infinitive = (v: Verb.verb) : string => {
  Js.String.replaceByRe([%re "/\\//g"], "", v.spanish) ++ ((v.reflexive) ? "se" : "")
};

let filterVerbs = (_evt: Dom.event) : unit => {
  let htmlDoc = DocumentRe.asHtmlDocument(document);
  switch (htmlDoc) {
    | Some(htmlDoc) => {
        let conjSet = requestedConjugations(htmlDoc);
        let typeSet = requestedVerbTypes(htmlDoc);
        let isReflexive = switch (Document.getElementById("reflexive", document)) {
          | Some (element) => HtmlElement.checked(Element.unsafeAsHtmlElement(element))
          | None => false
        };
        U.clearChildrenById("verbList");
        let verbListMenu = Document.getElementById("verbList", document);
        switch (verbListMenu) {
          | Some(menu) => {
              let matching = U.keepMapWithIndex(VerbList.verbList,
                fun(idx, item) => {
                  if (Set.has(conjSet, item.conj) && Set.has(typeSet, item.type_) &&
                  (isReflexive == item.reflexive)) {
                    Some(((idx + 1), item))
                  } else {
                    None;
                  }
                });
              Element.appendChild(createMenuItem(
                (Arr.length(matching) == 0) ? "No verbs meet your criteria" :
                  "Choose a verb", 0), menu);
              Arr.forEach(matching, fun(item: (int, V.verb)) => {
                let (idx, verb) = item;
                Element.appendChild(createMenuItem(infinitive(verb), idx), menu)
              })
            }
          | None => ()
        }
      }
    | None => ();
  }
};

let conjugateVerb = (_evt: Dom.event) : unit => {
  let verbOption = U.getIntValue("verbList");
  let tenseOption = Belt.Option.flatMap(U.getStringValue("tense"), V.tenseOfString);
  switch (verbOption, tenseOption) {
    | (Some(verbNumber), Some(tense)) => {
        let verb = VerbList.verbList[verbNumber - 1];
        U.setText(Some(infinitive(verb) ++ " (" ++ verb.english ++ ")"),
          Document.getElementById("verbTitle", document), " ");
        Arr.forEach(Arr.range(0, 5), fun(n: int) => {
          U.setText(Some(conjugate(verb, tense, (n mod 3) + 1, 
            (n < 3) ? Singular : Plural)),
            Document.getElementById("v" ++ string_of_int(n), document), "");
        });
      }
    | _ => ()
  }
};

/*
  Set the `onchange` function; there does not seem to be a good way to do this
  with `bs-webapi`, so I am using `raw`
*/
let setOnChange: (Dom.element, ((Dom.event) => unit)) => unit = [%bs.raw {|
  function(element, fcn) {
    element.onchange = fcn
  }
|}];

let setOnChangeId = (id: string, f: ((Dom.event) => unit)) : unit => {
  switch (Document.getElementById(id, document)) {
    | Some(element) => setOnChange(element, f)
    | None => ()
  }
};

/*
  Set `onchange` for every element in the array
*/
let setArrayChange = (arr: array(Dom.node), fcn: ((Dom.event) => unit)) : unit => {
  Arr.forEach(arr, (item) => {
    switch (Element.ofNode(item)) {
      | Some(el) => setOnChange(el, fcn)
      | None => ()
    }
  })
};

let htmlDoc = DocumentRe.asHtmlDocument(document);
switch (htmlDoc) {
  | Some(htmlDoc) => {
      setArrayChange(NodeList.toArray(HtmlDocument.getElementsByName("conj", htmlDoc)), filterVerbs);
      setArrayChange(NodeList.toArray(HtmlDocument.getElementsByName("verbType", htmlDoc)), filterVerbs);
      setArrayChange(NodeList.toArray(HtmlDocument.getElementsByName("reflexive", htmlDoc)), filterVerbs);
      setOnChangeId("verbList", conjugateVerb);
      setOnChangeId("tense", conjugateVerb);
    }
  | None => ()
};

/*
switch (Document.getElementById("conjugate", document)) {
  | Some(element) => EventTarget.addClickEventListener(eraser, Element.asEventTarget(element))
  | None => ()
};
*/

/*
switch (Document.getElementById("verbList", document)) {
  | Some (el) => EventTarget.addChangeEventListener(chooseVerb, Element.asEventTarget(el))
  | None => ()
};
*/
