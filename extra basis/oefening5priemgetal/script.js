let getal= parseInt(prompt('Geef een getal in'));


let primeNumber=function(getal){

    console.log('Start primeNumber');
    console.log('getal:' +getal);

    let alleRest;
    let rest;
    
    for(i=2; i<getal; i++){
        rest=getal%i;
        alleRest += rest;
        console.log('alleRest:' + alleRest);
        console.log(' i : ' + i);
    }
    if(alleRest != 0){
       document.write('Dit is GEEN priemgetal') 
    }
    else{
        document.write('Dit is een priemgetal')
    }    
       
    console.log('End primeNumber');
};


let primeNumber2=function(getal){

    console.log('Start primeNumber 2');
    console.log('getal:' +getal);

    let alleRest;
    let rest;
    

    let isPriem = true;
    let continueLoop = true;
    
    console.log('isPriem:' +isPriem);

    for(i=2; i<getal && continueLoop ; i++){
        rest=getal%i;
        console.log(' i : ' + i + ', rest:' + rest);
        if (rest == 0) {
            console.log('Geen priem, stop looping');
            isPriem = false;
            continueLoop = false;
        }
    }
    if(isPriem==true) {
        document.write('Dit is een priemgetal')
    }
    else{
        document.write('Dit is GEEN priemgetal') 
        
    }    
       
    console.log('End primeNumber 2');
};


primeNumber2(getal);
