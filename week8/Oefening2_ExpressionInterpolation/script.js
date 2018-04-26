// let bla= document.getElementById('blauw');
// console.log(bla);

// bla.addEventListener('click', function(){
//     let classe= document.getElementById('blauw').className;
//     console.log(classe);
//     let knop= document.getElementById('button');
//     console.log(knop);

//     knop.addEventListener('click', function(){
//         knop.className=classe;
//     })
// })

let bla= document.getElementById('blauw');
let roo= document.getElementById('rood');
let wit= document.getElementById('wit');
let gro= document.getElementById('groen');
console.log(bla);

let kleurClasse = function(kleur){
    let classe= kleur.className;
    console.log(classe);
    let knop= document.getElementById('button');
    console.log(knop);

    knop.addEventListener('click', function(){
        knop.className=classe;
        console.log(knop);
    })
};

bla.addEventListener('click', kleurClasse(bla));
roo.addEventListener('click', kleurClasse(roo));
