/********************************************************************
* @author Mira De Greve
* @created 15/02/2018
* @modified 15/02/2018
* @copyright Copyright © 2016-2017 Artevelde University College Ghent
* @function oefening
********************************************************************/
//"use strict"; //optioneel

// altijd enkel 'aanhalingstekens'
// behalve bij een variabele in een string dan ` backquotes ,
// wanneerd dit niet werkt: begin van script: "use strict";
// datatype moet niet gedeclareerd worden (string, numerique, boolian)
/* - */


let number = prompt('Give a number');

document.write(number.length); // nu undefined omdat het geen strings meer zijn

// integer = geheel getal --> parseInt (21ee wordt gewoon 21)
// number = geheel getal (21ee kan niet worden gebruikt)
// float = kommagetal
