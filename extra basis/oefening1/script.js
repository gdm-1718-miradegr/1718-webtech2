let name='Mira';
let lastname='De Greve';

console.log('Welkom'+' ' + name +' '+ lastname+'!');
document.write('Welkom'+' ' + name +' '+ lastname+'!'); // wel haken

document.getElementById('user').innerHTML = 'Welkom'+' ' + name +' '+ lastname+'!'; // geen haken
document.getElementById('user').textContent = 'Welkom'+' ' + name +' '+ lastname+'!';