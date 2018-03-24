let fruitsoorten=['appel','peer', 'banaan','perzik','mandarijn'];

const showItems = function ( arrayName ){
    for(let i=0;i<fruitsoorten.length;i++){
        document.write(fruitsoorten[i] + "<br>");
    };
};

showItems(fruitsoorten);