/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
};


    // 1- Che cosa fa questo codice?            -Stampa in console l'indice per 5 volte.
    // 2- Sono presenti errori di sintassi?     -Si è presente 1 errore a riga 14 '>'.
    // 3- Sono presenti errori logici?          -NO.






// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    };
    return num;
};


    // 1- Che cosa fa questo codice?           -E' una funzione che calcola se il 'num' dato è pari o dispari, se è pari gli somma 5.
    // 2- Sono presenti errori di sintassi?    -SI è presente 1 errore a riga 30 '='.
    // 3- Sono presenti errori logici?         -NO.







// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    };
};


    // 1- Che cosa fa questo codice?           -Quando viene invocata la funzione si attiva il ciclo, stampando 5 volte l'indice in console.
    // 2- Sono presenti errori di sintassi?    -SI sono presenti 2 errori a riga 49 ';'.
    // 3- Sono presenti errori logici?         -NO.







// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        };
    };
    return evenNumbers;
};
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


    // 1- Che cosa fa questo codice?           -Quando viene invocata la funzione parte il ciclo controllando dentro l'array 'numbers' quali numeri sono pari, se sono pari li pusha dentro l'array 'evenNumbers'.
    // 2- Sono presenti errori di sintassi?    -SI sono presenti 6 errori, a riga 67 e 68 'let'  ---  a riga 69 '-1' e ';'  ---  a riga 70 'numbers' , '=' , ';'  ---  a riga 71 'i'.
    // 3- Sono presenti errori logici?         -SI   a riga 73 'return evenNumbers;' non deve restituire l'array 'evenNumbers' dentro il ciclo, ma una volta terminato il ciclo.