let recept={
    naam: 'Soep',
    porties: 4,
    ingrediënten:['pompoen', 'wortel', 'water', 'bouillon'], //hier ook komma
};
    
console.log(recept.naam); // naam[0] neemt 1ste letter
console.log('porties: ' + recept.porties);
console.log('ingrediënten: ');
// console.log(recept.ingrediënten[0]);
// console.log(recept.ingrediënten[1]);
// console.log(recept.ingrediënten[2]);
// console.log(recept.ingrediënten[3]);
for(let i=0; i<recept.ingrediënten.length; i++){
    console.log(recept.ingrediënten[i]);
}

let recept2 = {
    naam: 'Chocomouse',
    porties: 4,
    ingrediënten: ['eieren', 'chocolade', 'room', 'suiker', 'boter'],
}

console.log(recept2.naam); // naam[0] neemt 1ste letter
console.log('porties: ' + recept2.porties);
console.log('ingrediënten: ');
for(let i=0; i<recept2.ingrediënten.length; i++){
    console.log(recept2.ingrediënten[i]);
}

// Klasse van maken
function recepi(naam, porties, ingrediënten){
    this.naam= naam;
    this.porties= porties;
    this.ingrediënten= ingrediënten;
};

let recept3 = new recepi('Fruitsla', 5, ['banaan', 'appel', 'aardbei']);

console.log(recept3.naam); // naam[0] neemt 1ste letter
console.log('porties: ' + recept3.porties);
console.log('ingrediënten: ');
for(let i=0; i<recept3.ingrediënten.length; i++){
    console.log(recept3.ingrediënten[i]);
}