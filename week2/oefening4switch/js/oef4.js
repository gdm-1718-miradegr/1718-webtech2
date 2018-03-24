// function diplomatitel() {
    let per = document.getElementById('cijfer').value;

//     if (per >= 90 ){
//         console.log('grootste onderscheiding en de gelukwensen van de examencommissie');
//         result = 'grootste onderscheiding en de gelukwensen van de examencommissie';
//     }
//     else if (per >= 85){
//         console.log('grootste onderscheiding');
//         result = 'grootste onderscheiding';
//     }
//     else if (per >= 77){
//         console.log('grote onderscheiding');
//         result ='grote onderscheiding';
//     }
//     else if (per >= 68){
//         console.log('onderscheiding');
//         result='onderscheiding';
//     }
//     else if (per > 50){
//         console.log('op voldoende wijze');
//         result='op voldoende wijze';
//     }

// }

document.getElementById('checkInput').addEventListener('click', function() {
    let per = document.getElementById('cijfer').value;
    console.log('Button clicked');
    switch(true){                           // !!!
        case (per>=90):
        console.log('grootste onderscheiding en de gelukwensen van de examencommissie');
        result = 'grootste onderscheiding en de gelukwensen van de examencommissie';
        break;

        case (per >= 85):
        console.log('grootste onderscheiding');
        result = 'grootste onderscheiding';
        break;

        case (per >= 77):
        console.log('grote onderscheiding');
        result ='grote onderscheiding';
        break;

        case (per >= 68):
        console.log('onderscheiding');
        result='onderscheiding';
        break;

        case (per > 50):
        console.log('op voldoende wijze');
        result='op voldoende wijze';
        break;
    }
    document.getElementById('diplomatitel').innerHTML = result;
})