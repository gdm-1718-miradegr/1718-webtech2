let checkResult = function(){

let sumPopcorn= document.getElementById('result1').value;
let sumBurger= document.getElementById('result2').value;
let sumDonut= document.getElementById('result3').value;
let inputResult = document.getElementById('result4').value;

console.log(sumPopcorn);
console.log(sumBurger);
console.log(sumDonut);

let popcorn= sumPopcorn/3;
let hamburger= (sumBurger - popcorn) /2;
let donut=(sumDonut- hamburger)/4;

console.log(popcorn);
console.log(hamburger);
console.log(donut);

let result= hamburger + donut * popcorn;
console.log(result);

// let tekst // div in html aanmaken !!!
if (result == inputResult){
    document.getElementById('message').innerHTML="Well done";
    }
else {
    document.getElementById('message').innerHTML="Try again";
    }
}

document.getElementById('check').addEventListener('click', checkResult);
