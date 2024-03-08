/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    };
};
checkAge();


    // 1- Che cosa fa questo codice?            -Controlla se il valore 'myAge' ha più o meno di 18 anni e stampa un messaggio diverso nei due casi. 
    // 2- Sono presenti errori di sintassi?     -SI è presente 1 errore a riga 16 'const'.
    // 3- Sono presenti errori logici?          -NO.






// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
};
printColorsNumber();


    // 1- Che cosa fa questo codice?            -Dato un array di colori, stampa un messaggio con la lunghezza dell'array.
    // 2- Sono presenti errori di sintassi?     -SI è presente 1 errore a riga 39 'lenght'.
    // 3- Sono presenti errori logici?          -NO.






// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
};
addNumbers();


    // 1- Che cosa fa questo codice?            -L'user deve inserire un numero tramite prompt e viene sommato 12 al suo numero, poi viene stampato un messaggio con il totale.
    // 2- Sono presenti errori di sintassi?     -NO.
    // 3- Sono presenti errori logici?          -SI è presente 1 errore a riga 55 'prompt('Inserisci un numero')' ---> non era presente il parseInt().






// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();








// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























