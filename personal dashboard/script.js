var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=KEY';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })