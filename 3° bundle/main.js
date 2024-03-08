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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    }
];

const gasolineCars = cars.filter( (auto) => auto.type === 'benzina'  ||  auto.type === 'Benzina');

const dieselCars = cars.filter( (auto) => auto.type === 'diesel'  ||  auto.type === 'Diesel');

const otherCars = cars.filter( (auto) => {
    return auto.type != 'benzina'  &&  auto.type != 'diesel'  &&  auto.type != 'Benzina' &&  auto.type != 'Diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);



    // 1- Che cosa fa questo codice?            -Dato un array di oggetti con le loro proprietà, ne ricaviamo solamente il tipo di alimentazione del veicolo in 3 array diversi uno per 'benzina',  
    //                                           uno per 'diesel  e  l'ultimo per tutti gli altri tipi di alimentazione. Questi array vengono creati dal metodo 'filter()', il quale, data una condizione, 
    //                                           se questa si rivela TRUE, filter() pusherà in automatico quell'oggetto nel nuovo array, se invece la condizione sarà FALSE, ignorerà l'oggetto. Una volta 
    //                                           creati gli array stampiamo in console il contenuto degli array.   
    // 2- Sono presenti errori di sintassi?     -SI  a riga 59 ','  ---  a riga 64 ','  ---  a riga 67 '>='  ---  a riga 72 '!==' '!==' '&&'.
    // 3- Sono presenti errori logici?          -SI  a riga 67 '||  auto.type === 'Benzina'' aggiunto una condizione per la lettera maiuscola,
    //                                               a riga 69 '||  auto.type === 'Diesel'' aggiunto una condizione per la lettera maiuscola,
    //                                               a riga 72  '&&  auto.type != 'Benzina' &&  auto.type != 'Diesel'' aggiunto una condizione per la lettera maiuscola.