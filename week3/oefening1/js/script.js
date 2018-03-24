let beginwaarde= parseInt(prompt('Wat is de beginwaarde?'));
let eindwaarde= parseInt(prompt('Wat is de eindwaarde?'));
// let getal= parseInt(prompt('Kies een getal tussen deze waarden.'));
// let deelbaarDoorDrie= parseInt(getal%3);
// console.log(deelbaarDoorDrie);

for (i=beginwaarde; i<=eindwaarde; i++ ){ //alle getallen afgaan tussen de waarden 7 tot 100
    console.log(i);
    let result; // !!!
    if(i%3 === 0 && i%5 === 0){
        //Deelbaar door 3 en 5
        result='Bitterbal <br>';
    }
    else if(i%3 ===0){
        //Deelbaar door 3
        result='Bitter <br>';
    }
    else if(i%5 === 0){
        //Deelbaar door 5
        result='bal <br>';
    }
    else{
        //Niet deelbaar door 3 of 5
        result=i + '<br>'; // let op aanhalingstekens
    }
    document.getElementById('result').innerHTML += result; // += toevoegen
};