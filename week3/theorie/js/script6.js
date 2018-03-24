let now= new Date();
document.write(now); // show current date / time

let date = new Date ("2018-01-26");
console.log(date);

date = new Date (2018, 0, 1, 0, 0, 0, 0); // year, month, date, hours, minutes, seconds
console.log (date);
//year: 4digits
// month: 0-11
// date: optioneel, indien afwezig 1
// hours, minutes, seconds, ms: optioneel, indien afwezig 0
date = new Date(2014,5,9);
console.log(date);

date = new Date(1999,9,20);
console.log(date);

console.log('month:'+ date.getMonth());

console.log('hours:'+ date.getHours());
console.log(date.getUTCHours());

date.setHours(0, 0, 0, 0);