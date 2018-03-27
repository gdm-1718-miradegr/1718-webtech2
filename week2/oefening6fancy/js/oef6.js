let button = document.getElementById('button');

button.addEventListener('click', function(){
    let nrOne = parseInt(document.getElementById('nrOne'));
    let nrTwo = parseInt(document.getElementById('nrTwo'));
    let plaats = document.getElementById('place');

    if(nrOne > nrTwo){
        console.log(parseInt(nrOne) + ' ' + "is het grootste getal.");
    }
    else{
        console.log(parseInt(nrTwo) + ' ' + "is het grootste getal.");
    }
})