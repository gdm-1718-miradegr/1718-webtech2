let waardeDollarTovEuro= 1.24;
let waardeYenTovEuro = 129.44;

let buttonEuro = document.getElementById('bEuro');
let buttonDollar = document.getElementById('bDollar');
let buttonYen = document.getElementById('bYen');



let resultaten = function (){
    let euro= document.getElementById('Euro').value;
    let euroNaarDollar = euro*waardeDollarTovEuro;
    let dollar= document.getElementById('Dollar');
    dollar.value = euroNaarDollar;
    let euroNaarYen = euro*waardeYenTovEuro;
    let yen= document.getElementById('Yen');
    yen.value = euroNaarYen;
};

buttonEuro.addEventListener('click', resultaten());

// buttonEuro.addEventListener('click', function(){
//     let euro= document.getElementById('Euro').value;
//     let euroNaarDollar = euro*waardeDollarTovEuro;
//     let dollar= document.getElementById('Dollar');
//     dollar.value = euroNaarDollar;
//     let euroNaarYen = euro*waardeYenTovEuro;
//     let yen= document.getElementById('Yen');
//     yen.value = euroNaarYen;
// });

