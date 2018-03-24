function showResult(){
    let nrOne = document.getElementById('nrOne');
    let nrTwo = document.getElementById('nrTwo');
    let button = document.getElementById('button');

    if(nrOne > nrTwo){
        document.write(nrOne + ' ' + "is het grootste getal.");
    }
    else{
        document.write(nrTwo + ' ' + "is het grootste getal.");
    };
};

button.addEventListener('click', showResult());

