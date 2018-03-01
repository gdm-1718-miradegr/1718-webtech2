// "use strict"; //optioneel

// altijd enkel 'aanhalingstekens'
// behalve bij een variabele in een string dan ` backquotes ,
// wanneerd dit niet werkt: begin van script: "use strict";
// datatype moet niet gedeclareerd worden (string, numerique, boolian)
/* - */


let number = parseInt (prompt('Give a number'));
let text = 'Het getal dat u invoerde was: ' + number + '. Is dit correct?';
//let textNew =`<br> Het getal dat u invoerde was: ${number}`; 
// hier dus geen gewone aanhalingstekens
// br !

document.write(text);
//document.write(textNew);


// COMMENTS IN ENGLISH !


// integer = geheel getal --> parseInt (21ee wordt gewoon 21)
// number = geheel getal (21ee kan niet worden gebruikt)
// float = kommagetal
