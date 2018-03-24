let anchor= document.querySelector('a'); // zelfde als: document.getElementsByTagName('a')[];
console.log(anchor);

let strongElements= document.getElementsByTagName('strong'); // = array, alle element moeten afgegaan worden (FOR), doet hetzelfde als querySelectorAll
let spanElements= document.getElementsByTagName('span');

anchor.addEventListener('mouseover',function(){
  //alle vetgedrukte woorden moeten oranje worden
  highlightElements(strongElements, 'orange');
  //alle span-elementen paars
  highlightElements(spanElements, 'purple');
  //a-element roze achtergrondkleur
  highlightAnchor(anchor, 'pink');
},false);

function highlightElements(elements, color){
  for(let i=0; i<elements.length; i++){
    elements[i].style.color = color;
  }
}

function highlightAnchor(element, color){ //slechts 1 element dus geen FOR
  element.style.backgroundColor = color;
}

anchor.addEventListener('mouseout',function(){
  highlightElements(strongElements, 'black');
  highlightElements(spanElements, 'black');
  highlightAnchor(anchor, 'beige');
},false);

// function unlightElements(elements){
//   for( let i=0; i<elemnt.length; i++){
//      tags[i].removeAttribute('style');
// }

// }

//manier 2

// function higlight(tags, color){
//   for (let i=0; i<tags.length ;i++){
//     tags[i].classList.add(color);
//   }
// }

// function unlight(tags, color){
//   for (let i=0; i<tags.length ;i++){
//     tags[i].classList.remove(color);
//   }
// }