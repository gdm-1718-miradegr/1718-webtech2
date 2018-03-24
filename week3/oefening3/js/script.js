let drawFlatArea = function(count) {
    let strResult =''
    for(i=1; i<=count; i++){
        // console.log(i);
        strResult += '_';
    }
    return strResult;
}

let drawMountain = function(count) {
    let strResult ='/'
    for(i=1; i<=count; i++){
        // console.log(i);
        strResult += "'";
    }
    strResult+= '\\';
    return strResult;
}

document.write(drawFlatArea(5), drawMountain(10),drawFlatArea(2), drawMountain(3),drawFlatArea(8), drawMountain(6), drawFlatArea(8), drawMountain(2), drawFlatArea(1), drawMountain(1),drawFlatArea(5), drawMountain(6));
