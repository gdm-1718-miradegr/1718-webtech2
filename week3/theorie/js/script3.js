outer: for (let i = 0; i < 3; i++){ // je geeft de lus een label met outer
    for (let j=0; j < 3; j++){
        let input = window.prompt(`Value at coord (${i}, ${j})`, '' );

        if (!input) break outer; // werken met labels om uit (2) lussen te stappen

        console.log(`Value at coords (${i}, ${j}): ${input}`);
    }
    window.alert('Done!');
}