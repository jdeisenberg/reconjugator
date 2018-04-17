let templates: array(Verb.pattern) = [|
{
  number: 1,
  model: {js|amar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 2,
  model: {js|temer|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 3,
  model: {js|partir|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 4,
  model: {js|anunciar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 5,
  model: {js|env/i/ar|js},
  present: [|{js|í/o|js},{js|í/as|js},{js|í/a|js},{js|amos|js},{js|áis|js},{js|env/í/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 6,
  model: {js|averig/u/ar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|ü/é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 7,
  model: {js|act/u/ar|js},
  present: [|{js|ú/o|js},{js|ú/as|js},{js|ú/a|js},{js|amos|js},{js|áis|js},{js|ú/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 8,
  model: {js|bailar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 9,
  model: {js|a/i/slar|js},
  present: [|{js|í/o|js},{js|í/as|js},{js|í/a|js},{js|amos|js},{js|áis|js},{js|í/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 10,
  model: {js|causar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 11,
  model: {js|a/u/nar|js},
  present: [|{js|ú/o|js},{js|ú/as|js},{js|ú/a|js},{js|amos|js},{js|áis|js},{js|ú/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 12,
  model: {js|peinar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 13,
  model: {js|descafe/i/nar|js},
  present: [|{js|í/o|js},{js|í/as|js},{js|í/a|js},{js|amos|js},{js|áis|js},{js|í/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 14,
  model: {js|adeudar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 15,
  model: {js|reh/u/sar|js},
  present: [|{js|ú/o|js},{js|ú/as|js},{js|ú/a|js},{js|amos|js},{js|áis|js},{js|ú/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 16,
  model: {js|ac/e/rtar|js},
  present: [|{js|ie/o|js},{js|ie/as|js},{js|ie/a|js},{js|amos|js},{js|áis|js},{js|ie/an	|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 17,
  model: {js|adqu/i/rir|js},
  present: [|{js|ie/o|js},{js|ie/es|js},{js|ie/e|js},{js|imos|js},{js|ís|js},{js|ie/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 18,
  model: {js|agrade/c/er|js},
  present: [|{js|zc/o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 19,
  model: {js|andar|js},
  present: [|{js|o|js},{js|as|js},{js|a|js},{js|amos|js},{js|áis|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|uve|js},{js|uviste|js},{js|uvo|js},{js|uvimos|js},{js|uvisteis|js},{js|uvieron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 20,
  model: {js|asir|js},
  present: [|{js|go|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 21,
  model: {js|/cab/er|js},
  present: [|{js|quep/o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|cup/e|js},{js|cup/iste|js},{js|cup/o|js},{js|cup/imos|js},{js|cup/isteis|js},{js|cup/ieron|js}|],
  future: [|{js|ré|js},{js|rás|js},{js|rá|js},{js|remos|js},{js|réis|js},{js|rán|js}|],
  conditional: [|{js|ría|js},{js|rías|js},{js|ría|js},{js|ríamos|js},{js|ríais|js},{js|rían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 22,
  model: {js|caer|js},
  present: [|{js|igo|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|íste|js},{js|yó|js},{js|ímos|js},{js|ísteis|js},{js|yeron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 23,
  model: {js|c/e/ñir|js},
  present: [|{js|i/o|js},{js|i/es|js},{js|i/e|js},{js|imos|js},{js|ís|js},{js|i/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|i/ó|js},{js|imos|js},{js|isteis|js},{js|i/eron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|i/iendo|js}
  },

{
  number: 24,
  model: {js|condu/c/ir|js},
  present: [|{js|zc/o|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|j/e|js},{js|j/iste|js},{js|j/o|js},{js|j/imos|js},{js|j/isteis|js},{js|j/eron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 25,
  model: {js|construir|js},
  present: [|{js|yo|js},{js|yes|js},{js|ye|js},{js|imos|js},{js|ís|js},{js|yen|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|yó|js},{js|imos|js},{js|isteis|js},{js|yeron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 26,
  model: {js|c/o/ntar|js},
  present: [|{js|ue/o|js},{js|ue/as|js},{js|ue/a|js},{js|amos|js},{js|áis|js},{js|ue/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 27,
  model: {js|dar|js},
  present: [|{js|oy|js},{js|as|js},{js|a|js},{js|amos|js},{js|ais|js},{js|an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|i|js},{js|iste|js},{js|io|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 28,
  model: {js|d/ec/ir|js},
  present: [|{js|ig/o|js},{js|ic/es|js},{js|ic/e|js},{js|imos|js},{js|ís|js},{js|ic/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|ij/e|js},{js|ij/iste|js},{js|ij/o|js},{js|ij/imos|js},{js|ij/isteis|js},{js|ij/eron|js}|],
  future: [|{js|iré|js},{js|/irás|js},{js|/irá|js},{js|/iremos|js},{js|/iréis|js},{js|/irán|js}|],
  conditional: [|{js|iría|js},{js|/irías|js},{js|/iría|js},{js|/iríamos|js},{js|/iríais|js},{js|/irían|js}|],
  participle: {js|icho|js},
  gerund: {js|iciendo|js}
  },

{
  number: 29,
  model: {js|disc/e/rnir|js},
  present: [|{js|ie/o|js},{js|ie/es|js},{js|ie/e|js},{js|imos|js},{js|ís|js},{js|ie/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 30,
  model: {js|d/o/rmir|js},
  present: [|{js|ue/o|js},{js|ue/es|js},{js|ue/e|js},{js|imos|js},{js|ís|js},{js|ue/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|u/ió|js},{js|imos|js},{js|isteis|js},{js|u/ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|u/iendo|js}
  },

{
  number: 31,
  model: {js|ent/e/nder|js},
  present: [|{js|ie/o|js},{js|ie/es|js},{js|ie/e|js},{js|emos|js},{js|éis|js},{js|ie/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 32,
  model: {js|/ergu/ir|js},
  present: [|{js|yerg/o|js},{js|yergu/es|js},{js|yergu/e|js},{js|imos|js},{js|ís|js},{js|yergu/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|irgu/ió|js},{js|imos|js},{js|isteis|js},{js|irgu/ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|irgu/iendo|js}
  },

{
  number: 33,
  model: {js|/e/rrar|js},
  present: [|{js|ye/o|js},{js|ye/as|js},{js|ye/a|js},{js|amos|js},{js|áis|js},{js|ye/an|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|é|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 34,
  model: {js|estar|js},
  present: [|{js|oy|js},{js|ás|js},{js|á|js},{js|amos|js},{js|áis|js},{js|án|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|uve|js},{js|uviste|js},{js|uvo|js},{js|uvimos|js},{js|uvisteis|js},{js|uvieron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 35,
  model: {js|h/ab/er|js},
  present: [|{js|e|js},{js|/as|js},{js|/a|js},{js|/emos|js},{js|éis|js},{js|/an|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|ub/e|js},{js|ub/iste|js},{js|ub/o|js},{js|ub/imos|js},{js|ub/isteis|js},{js|ub/ieron|js}|],
  future: [|{js|ré|js},{js|rás|js},{js|rá|js},{js|remos|js},{js|réis|js},{js|rán|js}|],
  conditional: [|{js|ría|js},{js|rías|js},{js|ría|js},{js|ríamos|js},{js|ríais|js},{js|rían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 36,
  model: {js|/hac/er|js},
  present: [|{js|hag/o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|hic/e|js},{js|hic/iste|js},{js|hiz/o|js},{js|hic/imos|js},{js|hic/isteis|js},{js|hic/ieron|js}|],
  future: [|{js|har/é|js},{js|har/ás|js},{js|har/á|js},{js|har/emos|js},{js|har/éis|js},{js|har/án|js}|],
  conditional: [|{js|har/ía|js},{js|har/ías|js},{js|har/ía|js},{js|har/íamos|js},{js|har/íais|js},{js|har/ían|js}|],
  participle: {js|hecho/|js},
  gerund: {js|iendo|js}
  },

{
  number: 37,
  model: {js|ir|js},
  present: [|{js|voy|js},{js|vas|js},{js|va|js},{js|vamos|js},{js|vais|js},{js|van|js}|],
  imperfect: [|{js|iba|js},{js|ibas|js},{js|iba|js},{js|íbamos|js},{js|ibais|js},{js|iban|js}|],
  preterite: [|{js|fui|js},{js|fuiste|js},{js|fue|js},{js|fuimos|js},{js|fuisteis|js},{js|fueron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 38,
  model: {js|j/u/gar|js},
  present: [|{js|ue/go|js},{js|ue/gas|js},{js|ue/ga|js},{js|amos|js},{js|áis|js},{js|ue/gan|js}|],
  imperfect: [|{js|aba|js},{js|abas|js},{js|aba|js},{js|ábamos|js},{js|abais|js},{js|aban|js}|],
  preterite: [|{js|ué|js},{js|aste|js},{js|ó|js},{js|amos|js},{js|asteis|js},{js|aron|js}|],
  future: [|{js|aré|js},{js|arás|js},{js|ará|js},{js|aremos|js},{js|aréis|js},{js|arán|js}|],
  conditional: [|{js|aría|js},{js|arías|js},{js|aría|js},{js|aríamos|js},{js|aríais|js},{js|arían|js}|],
  participle: {js|ado|js},
  gerund: {js|ando|js}
  },

{
  number: 39,
  model: {js|leer|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|íste|js},{js|yó|js},{js|ímos|js},{js|ísteis|js},{js|yeron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 40,
  model: {js|lu/c/ir|js},
  present: [|{js|zc/o|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 41,
  model: {js|m/o/ver|js},
  present: [|{js|ue/o|js},{js|ue/es|js},{js|ue/e|js},{js|emos|js},{js|éis|js},{js|ue/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 42,
  model: {js|mullir|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ó|js},{js|imos|js},{js|isteis|js},{js|eron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|endo|js}
  },

{
  number: 43,
  model: {js|oir|js},
  present: [|{js|igo|js},{js|yes|js},{js|ye|js},{js|ímos|js},{js|ís|js},{js|yen|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|íste|js},{js|yó|js},{js|ímos|js},{js|ísteis|js},{js|yeron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 44,
  model: {js|/o/ler|js},
  present: [|{js|hue/o|js},{js|hue/es|js},{js|hue/e|js},{js|emos|js},{js|éis|js},{js|hue/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 45,
  model: {js|p/e/dir|js},
  present: [|{js|i/o|js},{js|i/es|js},{js|i/e|js},{js|imos|js},{js|ís|js},{js|i/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|i/ió|js},{js|imos|js},{js|isteis|js},{js|i/ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|i/iendo|js}
  },

{
  number: 46,
  model: {js|p/o/der|js},
  present: [|{js|ue/o|js},{js|ue/es|js},{js|ue/e|js},{js|emos|js},{js|éis|js},{js|ue/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|u/e|js},{js|u/iste|js},{js|u/o|js},{js|u/imos|js},{js|u/isteis|js},{js|u/ieron|js}|],
  future: [|{js|ré|js},{js|rás|js},{js|rá|js},{js|remos|js},{js|réis|js},{js|rán|js}|],
  conditional: [|{js|ría|js},{js|rías|js},{js|ría|js},{js|ríamos|js},{js|ríais|js},{js|rían|js}|],
  participle: {js|ido|js},
  gerund: {js|u/iendo|js}
  },

{
  number: 47,
  model: {js|p/on/er|js},
  present: [|{js|go|js},{js|es (és)|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|u/se|js},{js|u/siste|js},{js|u/so|js},{js|u/simos|js},{js|u/sisteis|js},{js|u/sieron|js}|],
  future: [|{js|dré|js},{js|drás|js},{js|drá|js},{js|dremos|js},{js|dréis|js},{js|drán|js}|],
  conditional: [|{js|dría|js},{js|drías|js},{js|dría|js},{js|dríamos|js},{js|dríais|js},{js|drían|js}|],
  participle: {js|u/esto|js},
  gerund: {js|iendo|js}
  },

{
  number: 48,
  model: {js|p/u/drir|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|imos|js},{js|podrimos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|podríamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js},{js|podrieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|podriremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|podriríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|o/ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 49,
  model: {js|qu/er/er|js},
  present: [|{js|ier/o|js},{js|ier/es|js},{js|ier/e|js},{js|emos|js},{js|éis|js},{js|ier/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|is/e|js},{js|is/iste|js},{js|is/o|js},{js|is/imos|js},{js|is/isteis|js},{js|is/ieron|js}|],
  future: [|{js|ré|js},{js|rás|js},{js|rá|js},{js|remos|js},{js|réis|js},{js|rán|js}|],
  conditional: [|{js|ría|js},{js|rías|js},{js|ría|js},{js|ríamos|js},{js|ríais|js},{js|rían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 50,
  model: {js|roer|js},
  present: [|{js|igo|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|íste|js},{js|yó|js},{js|ímos|js},{js|ísteis|js},{js|yen|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 51,
  model: {js|s/ab/er|js},
  present: [|{js|é|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|up/e|js},{js|up/iste|js},{js|up/o|js},{js|up/imos|js},{js|up/isteis|js},{js|up/ieron|js}|],
  future: [|{js|ré|js},{js|rás|js},{js|rá|js},{js|remos|js},{js|réis|js},{js|rán|js}|],
  conditional: [|{js|ría|js},{js|rías|js},{js|ría|js},{js|ríamos|js},{js|ríais|js},{js|rían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 52,
  model: {js|salir|js},
  present: [|{js|go|js},{js|es|js},{js|e|js},{js|imos|js},{js|ís|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|dré|js},{js|drás|js},{js|drá|js},{js|dremos|js},{js|dréis|js},{js|drán|js}|],
  conditional: [|{js|dría|js},{js|drías|js},{js|dría|js},{js|dríamos|js},{js|dríais|js},{js|drían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 53,
  model: {js|s/e/ntir|js},
  present: [|{js|ie/o|js},{js|ie/es|js},{js|ie/e|js},{js|imos|js},{js|ís|js},{js|ie/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|sintió|js},{js|imos|js},{js|isteis|js},{js|sinie/ron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ido|js},
  gerund: {js|i/iendo|js}
  },

{
  number: 54,
  model: {js|/s/er|js},
  present: [|{js|/soy|js},{js|/eres|js},{js|/es|js},{js|/somos|js},{js|/sois|js},{js|/son|js}|],
  imperfect: [|{js|/era|js},{js|/eras|js},{js|/era|js},{js|/éramos|js},{js|/erais|js},{js|/eran|js}|],
  preterite: [|{js|/fui|js},{js|/fuiste|js},{js|/fue|js},{js|/fuimos|js},{js|/fuisteis|js},{js|/fueron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 55,
  model: {js|sonr/e/ir|js},
  present: [|{js|/ío|js},{js|/íes|js},{js|/íe|js},{js|ímos|js},{js|ís|js},{js|/íen|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|íste|js},{js|/ió|js},{js|ímos|js},{js|ísteis|js},{js|/ieron|js}|],
  future: [|{js|iré|js},{js|irás|js},{js|irá|js},{js|iremos|js},{js|iréis|js},{js|irán|js}|],
  conditional: [|{js|iría|js},{js|irías|js},{js|iría|js},{js|iríamos|js},{js|iríais|js},{js|irían|js}|],
  participle: {js|ído|js},
  gerund: {js|iendo|js}
  },

{
  number: 56,
  model: {js|tañer|js},
  present: [|{js|o|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ó|js},{js|imos|js},{js|isteis|js},{js|eron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|endo|js}
  },

{
  number: 57,
  model: {js|t/en/er|js},
  present: [|{js|go|js},{js|ien/es|js},{js|ien/e|js},{js|emos|js},{js|éis|js},{js|ien/en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|uv/e|js},{js|uv/iste|js},{js|uv/o|js},{js|uv/imos|js},{js|uv/isteis|js},{js|uv/ieron|js}|],
  future: [|{js|dré|js},{js|drás|js},{js|drá|js},{js|dremos|js},{js|dréis|js},{js|drán|js}|],
  conditional: [|{js|dría|js},{js|drías|js},{js|dría|js},{js|dríamos|js},{js|dríais|js},{js|drían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 58,
  model: {js|traer|js},
  present: [|{js|igo|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|je|js},{js|jiste|js},{js|jo|js},{js|jimos|js},{js|jisteis|js},{js|jeron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|yendo|js}
  },

{
  number: 59,
  model: {js|valer|js},
  present: [|{js|go|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|dré|js},{js|drás|js},{js|drá|js},{js|dremos|js},{js|dréis|js},{js|drán|js}|],
  conditional: [|{js|dría|js},{js|drías|js},{js|dría|js},{js|dríamos|js},{js|dríais|js},{js|drían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  },

{
  number: 60,
  model: {js|v/e/nir|js},
  present: [|{js|go|js},{js|ie/ne|js},{js|ie/ne|js},{js|imos|js},{js|ís|js},{js|ie/nen|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|i/e|js},{js|i/iste|js},{js|i/o|js},{js|i/imos|js},{js|i/isteis|js},{js|i/ieron|js}|],
  future: [|{js|dré|js},{js|drás|js},{js|drá|js},{js|dremos|js},{js|dréis|js},{js|drán|js}|],
  conditional: [|{js|dría|js},{js|drías|js},{js|dría|js},{js|dríamos|js},{js|dríais|js},{js|drían|js}|],
  participle: {js|ido|js},
  gerund: {js|i/iendo|js}
  },

{
  number: 61,
  model: {js|ver|js},
  present: [|{js|eo|js},{js|es|js},{js|e|js},{js|emos|js},{js|eis|js},{js|en|js}|],
  imperfect: [|{js|eía|js},{js|eías|js},{js|eía|js},{js|eíamos|js},{js|eíais|js},{js|eían|js}|],
  preterite: [|{js|i|js},{js|iste|js},{js|io|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|isto|js},
  gerund: {js|iendo|js}
  },

{
  number: 62,
  model: {js|ya/c/er|js},
  present: [|{js|zc/|js},{js|es|js},{js|e|js},{js|emos|js},{js|éis|js},{js|en|js}|],
  imperfect: [|{js|ía|js},{js|ías|js},{js|ía|js},{js|íamos|js},{js|íais|js},{js|ían|js}|],
  preterite: [|{js|í|js},{js|iste|js},{js|ió|js},{js|imos|js},{js|isteis|js},{js|ieron|js}|],
  future: [|{js|eré|js},{js|erás|js},{js|erá|js},{js|eremos|js},{js|eréis|js},{js|erán|js}|],
  conditional: [|{js|ería|js},{js|erías|js},{js|ería|js},{js|eríamos|js},{js|eríais|js},{js|erían|js}|],
  participle: {js|ido|js},
  gerund: {js|iendo|js}
  }|];
