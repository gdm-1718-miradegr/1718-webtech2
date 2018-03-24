let animal;
let amount;

// document.getElementById('div').innerHTML = "Hello";

function pluralizer(animal,amount){
    let result = amount + ' '+ animal +'s';
    console.log(result);
    document.getElementById('div').innerHTML += result + '<br/>';
};

let result = pluralizer('chicken',3);
result = pluralizer('dog',2);
result = pluralizer('cat',6);
result = pluralizer('parrot',0);
