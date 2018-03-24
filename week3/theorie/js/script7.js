let toonIetsInResult = function(){
    document.getElementById('result').innerHTML+= 'Hallo';
    i++;
    if (i == 10){
        window.clearInterval(timer20);
    }
}
// toonIetsInResult();

let timer1 = window.setTimeout(toonIetsInResult, 5000); // 5000 miliseconden = 5 seconden -- setTimeout wordt 1x uitgevoerd
let timer2 = window.setInterval(toonIetsInResult, 1000); // setInterval blijft worden uitgevoerd
