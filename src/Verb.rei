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

module VerbTypeComparator: Belt.Id.Comparable with type t = verbType;

module ConjComparator: Belt.Id.Comparable with type t = conjugation;

type verb = {
  spanish: string,
  english: string,
  conj: conjugation,
  type_: verbType,
  reflexive: bool,
  pattern: pattern,
};

let joinArray: (string, array(string)) => string;
let stringOfPattern : (pattern) => string;
let conjugationOfString : string => option(conjugation);
let verbTypeOfString : string => option(verbType);
let tenseOfString : string => option(tense);

