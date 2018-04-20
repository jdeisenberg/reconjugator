open Webapi.Dom;

let map = (f) =>
  fun
  | Some(v) => Some(f(v))
  | None => None;

let andThen = (f: 'a => option('b)) =>
  fun (item) => {
    switch (item) {
  | Some(v) => f(v)
  | None => None
    }
};

let optFloat = (str : string) : option(float) => {
  switch (float_of_string(str)) {
    | fNum => Some(fNum)
    | exception (Failure("float_of_string")) => None
  }
};

let optInt = (str : string) : option(int) => {
  switch (int_of_string(str)) {
    | anInt => Some(anInt)
    | exception (Failure("int_of_string")) => None
  }
};

let getStringVal  = (el: Dom.element) : option(string) => {
  Some(HtmlElement.value(Element.unsafeAsHtmlElement(el)))
};

let setText = (text: option(string), el: option(Dom.element), default: string) : unit => {
  switch (text, el) {
    | (Some(t), Some(e)) => { Element.setTextContent(e, t); () }
    | (None, Some(e)) => { Element.setTextContent(e, default); () }
    | _ => ()
  }
};

let getFloatValue = (id : string) : option(float) => {
  Document.getElementById(id, document)
  |> andThen(getStringVal)
  |> andThen(optFloat)
};

let getIntValue = (id : string) : option(int) => {
  Document.getElementById(id, document)
  |> andThen(getStringVal)
  |> andThen(optInt)
};

let getStringValue = (id: string) : option(string) => {
  Document.getElementById(id, document)
  |> andThen(getStringVal)
};

  
let rec clearChildren = (el: Dom.element) : unit => {
  switch (Element.lastChild(el)) {
    | Some(child) => {
        Element.removeChild(child, el) |> ignore;
        clearChildren(el)
      }
    | None => ()
  }
};

let clearChildrenById = (id: string) : unit => {
  switch (Document.getElementById(id, document)) {
    | Some(element) => clearChildren(element)
    | None => ()
  }
};

let keepWithIndex = (arr: array('a), predicate: ((int, 'a) => bool)) : array('a) => {
  let rec helper = (acc: array('a), index: int) => {
    if (index < Belt.Array.length(arr)) {
      if (predicate(index, arr[index])) {
        helper(Belt.Array.concat(acc, [|arr[index]|]), index + 1)
      } else {
        helper(acc, index + 1)
      }
    } else {
      acc
    }
  };
  helper([| |]: array('a), 0);
};

let keepMapWithIndex = (arr: array('a), mapFcn: ((int, 'a) => option('b))) : array('b) => {
  let rec helper = (acc: array('b), index: int) => {
    if (index < Belt.Array.length(arr)) {
      switch (mapFcn(index, arr[index])) {
        | Some(result) => helper(Belt.Array.concat(acc, [|result|]), index + 1)
        | None => helper(acc, index + 1)
      }
    } else {
      acc
    }
  };
  helper([| |]: array('b), 0);
};
