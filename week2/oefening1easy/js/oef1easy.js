let number = prompt('Geef een nummer in');

let rest= number % 2;

console.log(number);
if (rest === 0) {
    result = 'Een even getal';}
else {
    result = 'Een onveven getal'
};

document.write(result);

// let checkEvenOrOdd = function (number){
//     let number = document.getElementById('someNumber').value;
//     let rest= number % 2;
    
//     console.log(number);
//     if(rest === 0){
//     result = 'Een even getal';
    
//     }else{
//     result = 'Een oneven getal';
//     }
//     return result;
// }
// document.getElementById('checkInput').addEventListener('click', checkEvenOrOdd);

//let resultEvenOrOdd = document.getElementById('checkInput').addEventListener
//('click', function() {
  //  document.getElementById('result').innerHTML = checkEvenOrOddArgs
   // (document.getElementById('someNumber').value)
//}

// )

//if( rest === 0){
    //document.write('Even getal');}
//else{
    //document.write('Oneven getal');}
