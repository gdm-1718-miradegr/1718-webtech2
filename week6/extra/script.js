let myDiv= document.getElementById('someDiv');
let allSpans = document.getElementsByClassName('aSpan');
console.log(myDiv);
console.log(allSpans);

// myDiv kan je gewoon aanspreken
// allSpans heb je een for lus nodig

myDiv.innerHTML = "Div text changed";
for (let i=0; i<allSpans.length; i++){
    allSpans[i].innerHTML = "span changed, span" + i;
    allSpans[i].className = "changedClassNameSpan";
}
