open Webapi.Dom;

let optFloat = (str : option(string)) : option(float) =>
  switch (str) {
    | Some(s) =>
      switch (float_of_string(s)) {
        | fNum => Some(fNum)
        | exception (Failure("float_of_string")) => None
      };
    | None => None
  };

let optInt = (str : option(string)) : option(int) =>
  switch (str) {
    | Some(s) =>
      switch (int_of_string(s)) {
        | anInt => Some(anInt)
        | exception (Failure("int_of_string")) => None
      };
    | None => None
  };

let getStringValue  = (el: option(Dom.element)) : option(string) => {
  switch (el) {
    | Some(inputElement) => Some(HtmlElement.value(Element.unsafeAsHtmlElement(inputElement)))
    | None => None
  };
};

let setText = (text: string, el: option(Dom.element)) : unit => {
  switch (el) {
    | Some (element) => Element.setTextContent(element, text)
    | None => ()
  };
};

let getNumValue = (id : string) : option(float) => {
  Document.getElementById(id, document)
  |> getStringValue
  |> optFloat
};
  
let andThen = (f: 'a => option('b)) =>
  fun (item) => {
    switch (item) {
  | Some(v) => f(v)
  | None => None
    }
};
