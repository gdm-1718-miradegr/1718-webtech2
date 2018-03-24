let getal= parseInt(prompt('Geef een getal in'));


let primeNumber=function(getal){
    let alleRest;
    let rest;
    
    for(i=2; i=getal.length; i++){
        rest=getal%i;
        alleRest += rest;
    }
    if(getal>1 && rest==0){
        document.write('Dit is een priemgetal')
    }
    else{
        document.write('Dit is GEEN priemgetal')
    }    
       
};

primeNumber(getal);
