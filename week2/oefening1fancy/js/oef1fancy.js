//let number = prompt('Geef een nummer in');

//let rest= number % 2;



/* let checkEvenOrOdd = function (number){
    let number = document.getElementById('someNumber').value;
    let rest= number % 2;
    
    console.log(number);
    if(rest === 0){
    result = 'Een even getal';
    }
    else{
    result = 'Een oneven getal';
    }
}

let resultEvenOrOdd = function (){ */

    let result ;

function isEven() {
    let number = document.getElementById('someNumber').value;
    console.log('number : ' + number);
    let rest= number % 2;
    console.log('rest : ' + rest);

    if(rest === 0){
        console.log('Even');
        result = 'Een even getal';
    }
        else{
            console.log('OnEven');
        result = 'Een oneven getal';
        }
}

console.log('Executed on display');

document.getElementById('showResult').addEventListener('click', function() {
    console.log('Button clicked');
    isEven();
    console.log('result : ' + result);
    document.getElementById('evenOrOdd').innerHTML = result;
    // document.getElementById('result').innerHTML = evenOrOdd;
    //(document.getElementById('someNumber').value)
})


