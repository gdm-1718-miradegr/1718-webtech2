console.log('WHILE');
let i = 0;
while (i < 3) { // condition
    console.log(i);
    i ++ //... zonder i ++ kan het blokkeren omdat er geen einde aan komt
}

console.log('DO WHILE');
let j=0;
do{
    console.log(j);
    j++
} while (j<3); //condition

// while : eerst donditie gecontroleerd, daarna pas uitgevoerd
// do while : het wordt zowiezo minstends 1x uitgevoerd