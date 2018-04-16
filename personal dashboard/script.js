// WEER ESSENE

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
getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=548140ccdc7dd4f8b901f91fde69fdc2&q=Essene', function(error, data) {
    // show error
    if(error) {  
        // do something here
        return false;
    }
    else{
        console.log(data);
        let divEssene = document.getElementById('weatherEs');
        
        divEssene.innerHTML=
            'Algemeen: ' +data.weather[0].description + '<br>' +
            'Vochtigheid: ' + data.main.humidity + ' %'+'<br>' + 
            'Luchtdruk: ' + data.main.pressure + ' hPa' +'<br>' + 
            'Temperatuur: '+ (parseFloat(data.main.temp)-273.15) +' °C' + '<br>'+ 
            'Maximum temperatuur: '+ (parseFloat(data.main.temp_max)-273.15) +' °C'+'<br>'+
            'Minimum temperatuur: '+ (parseFloat(data.main.temp_min)-273.15) +' °C'  ;

        let icon = data.weather[0].icon;
        console.log(icon);
        let iconurl = 'http://openweathermap.org/img/w/'+icon+".png";

        let image = document.createElement("img");
        image.setAttribute("src", iconurl);

        let first = document.getElementById('1');
        first.appendChild(image);
     }
 });

// WEER MARIAKERKE

getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=548140ccdc7dd4f8b901f91fde69fdc2&q=Mariakerke', function(error, data) {
    // show error
    if(error) {  
        // do something here
        return false;
    }
    else{
        console.log(data);
        let divMariakerke = document.getElementById('weatherMa');
        
        divMariakerke.innerHTML=
            'Algemeen: ' +data.weather[0].description + '<br>' +
            'Vochtigheid: ' + data.main.humidity + ' %'+ '<br>' + 
            'Luchtdruk: ' + data.main.pressure + ' hPa' + '<br>' + 
            'Temperatuur: '+ (parseFloat(data.main.temp)-273.15) +' °C' + '<br>'+ 
            'Maximum temperatuur: '+ (parseFloat(data.main.temp_max)-273.15) +' °C'+'<br>'+
            'Minimum temperatuur: '+ (parseFloat(data.main.temp_min)-273.15) +' °C'  ;

        let icon2 = data.weather[0].icon;
        console.log(icon2);
        let iconurl2 = 'http://openweathermap.org/img/w/'+icon2+".png";

        let image2 = document.createElement("img");
        image2.setAttribute("src", iconurl2);

        let second = document.getElementById('2');
        second.appendChild(image2);
     }
 });

// NIEUWS

const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=national-geographic&' +
          'apiKey=2a01932539f0474ab84d2129b36cc932';
const req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());        
    });


// get json data
getJSON('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=2a01932539f0474ab84d2129b36cc932', function(error, data) {
    // show error
    if(error) {  
        // do something here
        return false;
    }

    console.log(data);
    // for(i=0; i<data.articles.length;i++){
    //     console.log([i]);
    // }
    
    for(i=0; i<5; i++){
        
        let createArticle = function(i){

            // AFBEELDINGEN WERKEN NOG NIET

            // let foto = data.articles[i].urlToImage;
            // let fotoUrl = '';
    
            // let image = document.createElement("img");
            // image.setAttribute("src", fotoUrl);
    
            let heading ='<strong>' +data.articles[i].title +'</strong>';
        
            let artikel = heading + '<br>' + data.articles[i].description + '<br>'+data.articles[0].url;
            console.log('artikel: '+ artikel);
            let inHTML = document.getElementById('nieuws');
            let p = document.createElement('p');
            p.setAttribute('class', 'paragraaf');
    
            p.innerHTML = artikel;
        
            inHTML.appendChild(p);
            // inHTML.appendChild(image);
        };
    
    createArticle(i)  
    }

});

