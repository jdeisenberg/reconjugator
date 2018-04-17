type pattern = {
  number: int,
  model: string,
  present: array(string),
  imperfect: array(string),
  preterite: array(string),
  future: array(string),
  conditional: array(string),
  participle: string,
  gerund: string
};

type tense = 
  | Present
  | Imperfect
  | Preterite
  | Future
  | Conditional;

type number = 
  | Singular
  | Plural;

type conjugation =
  | AR
  | ER
  | IR;
  
type verbType = 
  | Regular
  | StemChanging
  | Irregular;

module VerbTypeComparator = 
  Belt.Id.MakeComparable(
    {
      type t = verbType;
      let cmp = compare;
    },
  );

module ConjComparator =
  Belt.Id.MakeComparable(
    {
      type t = conjugation;
      let cmp = compare;
    },
  );

type verb = {
  spanish: string,
  english: string,
  conj: conjugation,
  type_: verbType,
  reflexive: bool,
  pattern: pattern,
};

let joinArray = (delimiter: string, items: array(string)): string => {
  Js.String.substr(~from=Js.String.length(delimiter),
    Belt.Array.reduce(items, "", (acc: string, item: string) : string => 
    acc ++ delimiter ++ item));
};

let stringOfArray = (items : array(string)) : string => {
  "[|" ++ joinArray(",", Belt.Array.map(items, (item) => "{js|" ++ item ++ "|js}"))
    ++ "|]";
};

let stringOfPattern = (p: pattern) : string => {
  let number = p.number;
  let model = p.model;
  let present = stringOfArray(p.present);
  let imperfect = stringOfArray(p.imperfect);
  let preterite = stringOfArray(p.preterite);
  let future = stringOfArray(p.future);
  let conditional = stringOfArray(p.conditional);
  let participle = p.participle;
  let gerund = p.gerund;
  {j|{
  number: $number,
  model: {js|$model|js},
  present: $present,
  imperfect: $imperfect,
  preterite: $preterite,
  future: $future,
  conditional: $conditional,
  participle: {js|$participle|js},
  gerund: {js|$gerund|js}
  }|j}
};

let conjugationOfString = (s: string) : option(conjugation) => {
  switch (s) {
    | "AR" => Some(AR)
    | "ER" => Some(ER)
    | "IR" => Some(IR)
    | _ => None
  }
};

let verbTypeOfString = (s:string) : option(verbType) => {
  switch(s) {
    | "Regular" => Some(Regular)
    | "Irregular" => Some(Irregular)
    | "StemChanging" => Some(StemChanging)
    | _ => None
  }
};
