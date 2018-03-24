let removeOne= document.getElementsByClassName('remove-brick');
let addOne= document.getElementsByClassName('add-brick');
let brickOne=document.getElementsByClassName('brick-yellow')[0];
console.log(brickOne);

// eerst voor 1, nadien algemeen maken

let addBrick = function(add, bc, walll){
addOne[add].addEventListener('click', function(){   
    let brick = document.createElement('div');
    let brickClass = bc;
    brick.className = brickClass;
    let wall= document.getElementById(walll);
    wall.appendChild(brick);
    console.log(wall);
},false);
}; 

addBrick(0, 'brick brick-yellow', 'wall-1');


// addOne[1].addEventListener('click', function(){   
//     let brick = document.createElement('div');
//     let brickClass = 'brick brick-black';
//     brick.className = brickClass;
//     let wall= document.getElementById('wall-2');
//     wall.appendChild(brick);
// },false);

/*
//alle + knoppen
let addBrickButtons = document.getElementsByClassName('add-brick');
let colors = ['yellow', 'black', 'orange', 'blue']

for(let i=0; i<addBrickButtons.length; i++){
    addBrickButttons[i].addEventListener('click', function(event){
        console.log(addBrickButtons[i]);
        console.log(event);
        //addBrickToYellowWall();
        addBrickToWall(i+1, colors[i])
    })
}

let addBrickToYellowWall = function(wallNumber, color){
    //muur1
    let wallNumber ='1';
    let wall = document.getEleemntById('wall-'+wallNumber);
    // maak eeen nieuwe brick
    let brick = document.createElement('div');
    let brickClass = 'brick brick-' + color;
    brick.className = brickClass;
    //voeg brick toe aan muur
    wall.appendChild(brick);
}

*/

// removeOne[0].addEventListener('click', function(){   
//     let wall=document.getElementsByClassName('brick brick-yellow');
//     let brick= document.getElementsByClassName('brick brick-yellow')[0];
//     wall.removeChild(brick);
// },false);

let removeBrickButtons=document.getElementsByClassName("remove-brick");

for(let i=0; i<removeBrickButtons.length; i++){
    removeBrickButtons[i].addEventListener('click', function(event){
        console.log(removeBrickButtons[i]);
        console.log(event);
        //addBrickToYellowWall();
        romoveBrickFromWall(i+1)
    })
};

let romoveBrickFromWall = function(wallNumber){
    let wall = document.getElementById('wall-'+wallNumber);
    // eerste steen van de muur telkens verwijderen
    console.log(wall);
    // enkel als de muur stenen bevat, dan mag er een steen worden verwijderd
    if(wall.childElementCount >0){
    wall.removeChild(wall.firstElementChild ) // first child: ook spaties of attribuutknopen
    }   
} // = DOM manipulatie

let countBricksPerWall=function(){
    // let wall1 = document.getElementById('wall-1');
    // let countBricks = wall1.childElementCount;
    // let countBricksSpanElement = document.getElementById('wall-1-amountstones');
    // countBricksSpanElement.textContent = countBricks + 'stenen';
let numberOfWalls = document.getElementsByClassName('wall').length;
for(let i=0; i<numberOfWalls; i++){
    let wall = document.getElementById('wall-' + (i+1));
    let countBricks = wall.childElementCount;
    let countBricksSpanElement= document.getElementById('wall-' + (i+1)+'-amountstones');
    countBricksSpanElement.textContent = countBricks + ' stenen';
}
};

let calculateButton = document.getElementById('btnCalculate');

calculateButton.addEventListener('click', function(event){
    //1. aantal stenen per muur
    dountBricksPerWall();
    //2. grootste-kleinste muur

    //3. berekenen van kostprijs per muur
});