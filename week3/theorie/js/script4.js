let fruits = ['apple', 'orange', 'plum'];
console.log(fruits);

fruits.push('peer');
fruits.pop(); // verwijdert element achteraan
fruits.unshift('banaan'); // alles wordt hernummerd waardoor het trager werkt
fruits.shift(); // verwijdert element vooraan

// for each ... minder gebruikt
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
};

// for of ... meer gebruikt
for (let fruits of fruits) {
    console.log (fruits);
};