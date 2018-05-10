verify(/.../,
    ["my car", "bad cats"],
    ["camper", "high art"]);

 verify(/.../,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

 verify(/.../,
     ["ferret", "ferry", "ferrari"],
     ["ferrum", "transfer A"]);

 verify(/.../,
     ["how delicious", "spacious room"],
     ["ruinous", "consciousness"]);

 verify(/.../,
     ["bad punctuation ."],
     ["escape the period"]);

 verify(/.../,
     ["hottentottententen"],
     ["no", "hotten totten tenten"]);

 verify(/.../,
     ["red platypus", "wobbling nest"],
     ["earth bed", "learning ape", "BEET"]);


 function verify(regexp, yes, no) {
     // de niet-ingevulde oefeningen met drie puntjes negeren
     if (regexp.source == "...") return;

     // deze woorden moeten overeen komen
     for (let str of yes) if (!regexp.test(str)) {
         console.log(`Geen match voor '${str}'`);
     }

     // deze woorden mogen niet overeen komen
     for (let str of no) if (regexp.test(str)) {
         console.log(`Onverwachte match voor '${str}'`);
     }
 }
 