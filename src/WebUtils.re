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

let getStringValue  = (el: Dom.element) : option(string) => {
  Some(HtmlElement.value(Element.unsafeAsHtmlElement(el)))
};

let setText = (text: string, el: Dom.element) : unit => {
  Element.setTextContent(el, text)
};

let getFloatValue = (id : string) : option(float) => {
  Document.getElementById(id, document)
  |> andThen(getStringValue)
  |> andThen(optFloat)
};
  
