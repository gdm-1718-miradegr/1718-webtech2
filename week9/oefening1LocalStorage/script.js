// 2 elementen uit DOM tree ophalen
let molNaam = document.getElementById('mol');
let knop = document.getElementById('knopp');

// 2 elementen ophalen uit localStorage
molNaam.value = localStorage.getItem('mol');
knop.value = localStorage.getItem('knopp');

// let molNaam koppelen aan EventListener + opslaan in localStorage
molNaam.addEventListener('input', function() {
    localStorage.setItem('mol', molNaam.value);
}, false);

// let knop koppelen aan EventListener + opslaan in localStorage
knop.addEventListener('click', function() { // Data saved on keyup
    localStorage.setItem('knopp', knop.value);
}, false);