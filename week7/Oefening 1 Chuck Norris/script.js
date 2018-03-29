// let voornaam= prompt('Wat is je voornaam?');
// let achternaam= prompt('Wat is je achternaam?');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

knop.addEventListener('click',function(){
// get json data
let firstN= document.getElementById('voornaam').value;
let lastN= document.getElementById('achternaam').value;
let knop= document.getElementById('knop').value;

getJSON('http://api.icndb.com/jokes/random?firstName='+firstN+'&amp&lastName='+lastN, function(error, data) {
    // show error
    if(error) {  
    // do something
    return false;
    }
    console.log(data.value.joke);

    let lijst= document.getElementById('ul');
    let item= document.createElement('li');
    let mijnTextNode = document.createTextNode(data.value.joke);
    console.log(mijnTextNode);
    lijst.appendChild(mijnTextNode);

    // document.write(data.value.joke)
    });

    // %20 = spatie in http    
});
