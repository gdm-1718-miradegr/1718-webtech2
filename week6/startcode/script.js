// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

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
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    
    // show error
    if(error) {
        
        // do something here

        return false;
    }

    console.log(data);

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        // Aanmaken hoofd card - div
        let parkingCard =document.createElement('div');
        // Klasse toevoegen aan div
        parkingCard.className = 'parking';
        // H2 aanamken
        let parkingCardTitle=document.createElement('h2');
        parkingCard.innerHTML= parking.name;
        // Toevoegen aan hoofd-div met ID parking
        parkingOverview.appendChild(parkingCardTitle);

        // Lijst aaanmaken
        let parkingCardList = document.createElement( 'ul');
        // 2 listItemes aanmaken
        let parkingStatus = document.createElement('li');
        let parkingStatusTotal = document.createElement( 'li');
        // content van de listitemes toevoegen
        parkingCard.innerHTML= 'Free spots:' + parking.parkingStatus.availableCapacity;
        parkingStatusTotal.innerHTML= 'Capaciteit' + parking.parkingStatus.toatalCapacity;
        
        // Elementen toevoegen aan het DOM
        parkingCardList.appendChild(parkingStatus);
        parkingCardList.appendChild(parkingStatusTotal);
        parkingCard.appendChild(parkingCardList);
        parkingOverview.appendChild(parkingCard);
        // do magic here
    }
});




