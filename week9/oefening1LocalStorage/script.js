var molNaam = document.getElementById('mol');
var knop = document.getElementById('knopp');

molNaam.value = localStorage.getItem('mol'); // Elements populated
knop.value = localStorage.getItem('knopp'); // by localStorage data

molNaam.addEventListener('input', function() { // Data saved on keyup
    localStorage.setItem('mol', molNaam.value);
    console.log(mol)
}, false);

knop.addEventListener('input', function() { // Data saved on keyup
    localStorage.setItem('knopp', knop.value);
}, false);