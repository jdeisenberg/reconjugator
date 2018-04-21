let verbList: array(Verb.verb) = [|
  {
    spanish: "hablar",
    english: "to speak",
    conj: AR,
    type_: Regular,
    reflexive: false,
    pattern: Patterns.templates[0]
  },
  
  {spanish: "estudiar", english: "to study", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: "escuchar", english: "to listen to", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: "visitar", english: "to visit", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: "viajar", english: "to travel", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: {js|enseñar|js}, english: "to teach", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: {js|llegar|js}, english: "to arrive", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: {js|llevar|js}, english: "to take, carry, wear", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: {js|bailar|js}, english: "to dance", conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: "lavar", english: {js|to wash|js}, conj: AR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[0]},
  {spanish: "lavar", english: {js|to wash one’s self|js}, conj: AR, type_: Regular,
    reflexive: true, pattern: Patterns.templates[0]},
  {spanish: {js|leer|js}, english: "to read", conj: ER, type_: Regular,
    reflexive: false, pattern: Patterns.templates[38]},
  {spanish: {js|comer|js}, english: "to eat", conj: ER, type_: Regular,
    reflexive: false, pattern: Patterns.templates[1]},
  {spanish: {js|beber|js}, english: "to drink", conj: ER, type_: Regular,
    reflexive: false, pattern: Patterns.templates[1]},
  {spanish: {js|ent/e/nder|js}, english: "to understand", conj: ER, type_: StemChanging,
    reflexive: false, pattern: Patterns.templates[30]},
  {spanish: {js|vivir|js}, english: "to live", conj: IR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[2]},
  {spanish: {js|d/o/rmir|js}, english: "to sleep", conj: IR, type_: StemChanging,
    reflexive: false, pattern: Patterns.templates[29]},
  {spanish: {js|d/o/rmir|js}, english: "to go to sleep / fall asleep", conj: IR, type_: StemChanging,
    reflexive: true, pattern: Patterns.templates[29]},
  {spanish: {js|decidir|js}, english: "to decide", conj: IR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[2]},
  {spanish: {js|escribir|js}, english: "to write", conj: IR, type_: Regular,
    reflexive: false, pattern: Patterns.templates[2]},
  {spanish: {js|estar|js}, english: "to be", conj: AR, type_: Irregular,
    reflexive: false, pattern: Patterns.templates[33]},
  {spanish: {js|/s/er|js}, english: "to be", conj: ER, type_: Irregular,
    reflexive: false, pattern: Patterns.templates[53]},
  {spanish: {js|ir|js}, english: "to go", conj: IR, type_: Irregular,
    reflexive: false, pattern: Patterns.templates[36]},
  {spanish: {js|t/en/er|js}, english: "to have", conj: ER, type_: Irregular,
    reflexive: false, pattern: Patterns.templates[56]},
  {spanish: {js|p/o/der|js}, english: "to be able [to]", conj: ER, type_: Irregular,
    reflexive: false, pattern: Patterns.templates[45]},

|];
