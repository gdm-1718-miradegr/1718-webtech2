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

// get json data
getJSON('https://evelienrutsaert.github.io/recourses/recipes.json', function(error, data) {
    // show error
    if(error) {  
    // do something here
    return false;
    }
    console.log(data);

// recept = function(){

// uit html
  let titel= document.getElementsByClassName('card-title');
  let afb= document.getElementsByClassName('card-img-top');
  let ingr= document.getElementsByClassName('card-ingredients');
  // directions

// uit json
  let naam= data.name;
  let afbeelding= data.image;
  for (i=0; i<4; i++) {
    let ingredienten; // = data.ingredients[0];
    ingredienten += data.ingredients[i];
    console.log(ingredienten);
}
  
  titel[0].innerHTML =data[0].name; 
  afb[0].src=data[0].image; 
  ingr[0].innerHTML=data[0].ingredienten;
// };
// recept()

});