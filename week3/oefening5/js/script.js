const secretPassword = 'kellypfaff';
let password = prompt('password?');

do {
    document.write('Welkom, jij weet het wachtwoord! Je hebt' + ' x proberen raden.');
}
while(secretPassword === password);