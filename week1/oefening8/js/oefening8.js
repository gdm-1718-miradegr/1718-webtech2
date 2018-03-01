
let seconds = prompt('How many seconds?');
let hours = parseInt((seconds)/ 3600 );
seconds %= 3600;
let minutes = parseInt(parseInt(seconds)/60);
let restSeconds = seconds % 60;

//let minutes = parseInt(parseInt(seconds)/60) ; // Math.floor met hoofdletter ! om af te ronden
//let restSeconds = seconds / 60;

document.write( `<br> ${seconds} seconden is ${hours} uur ${minutes} minuten ${restSeconds} seconden`);

