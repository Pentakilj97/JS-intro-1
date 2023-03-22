// INTRODUZIONE 2-1 A JAVASCRIPT

// Incrementi:

let index = 5;

// index = index + 5;
index += 5;

let counter = 0;

// counter = counter + 1;
// counter += 1;
counter++;

let paperino = 5;

console.log(paperino++); // Il console.log() prima stampa il valore, poi lo incrementa.
console.log(paperino++); // Quindi prima si vedrà 5, poi 6 e infine varrà 7.
console.log(paperino);

let pluto = 5;

console.log(++pluto);  // In questo caso avviene il contrario, perciò il valore viene 
console.log(++pluto);  // prima incrementato, poi verrà stampato. 
console.log(pluto);  // Quindi si vedrà prima 6, poi 7 ed infine di nuovo 7.

//IF, ELSE, ELSE IF:

let astro = true;

if (astro) {                    // IF fa quello che è vero, 
    console.log('var merda');   // ELSE fa quello che è falso.
} else {                        // Se astro fosse false, 
    console.log('viva var');    // IF eseguirebbe il falso ed ELSE il vero.
};

let chueke = 3;

if (chueke !== 3) {  // Se chueke fosse diverso da 3, allora verrebbe loggato...
    console.log('Viva JavaScript!');  // ...Viva JavaScript!
};

let trell = 5;

if (trell === 3) {
    console.log('Qui');
} else if (trell === 5) {
    console.log('Quo');
} else if (trell === 1) {
    console.log('Qua');
} else {
    console.log("'Sti cazzi!");
};

let bubuCrocco = 5;

if (bubuCrocco < 10) {  // In questo caso verrà stampato 'Che gnocca!',
    console.log('Che gnocca!');  // perché l'IF si ferma già alla prima condizione,
} else if (bubuCrocco < 6) {  // essendo già vera.
    console.log('Vorrei fosse seduta sul mio...');
} else {
    console.log('...maledetta....');
};

// Ciclo WHILE:

/* while (true) {
    console.log('Ciao.');
}*/ // Questo è un cilco infinito, perchè il WHILE lo esegue se è vero (true);

let checco = 0;

while (checco < 10) {  // Questo programma stamperà da 1 a 10,
    checco++;          // perchè prima incrementa, poi logga (di fatti si ferma
    console.log(checco);  // a 9 ma viene ulteriormente incrementato alla fine.
}; 

while (checco > -1) {
    checco--;
    console.log(checco);
};

// Ciclo FOR:

for (let ftchh = 0; ftchh < 10; ftchh++) {  // Col ciclo FOR si mette al suo interno
    console.log('...tua moglie!');  // la variabile, seguita dalla condizionale
};                                  // e infine dall'incremento.

for (let eliBubu = 5; eliBubu < 100; eliBubu += 5) {  // Questo programma stamperà
    console.log(eliBubu);                               // tutti i multipli di 5
};                                                       // da 5 a 100.

// ESERCIZI:

// Stampare tutti i numeri "dispari" minori di 300:

/*let poldo = 1;

while (poldo < 300) {
    console.log(poldo);
    poldo+=2;
}*/

// Stampare i numeri da 10 a 0 e viceversa:

/*let cipolle = 0;
let patate = 11;

while (cipolle <= 20) {

    if (cipolle <= 10) {
        patate--;
    } else {
        patate++;
    }
    
    cipolle++;
    console.log(patate);

}*/

let puffo = 10;
let step = -1;

while (puffo <= 10) {

    console.log(puffo);

    if (puffo === 0) {
        step = 1;
    };

    puffo += step;

};

// Cicli annidati:

for (let x = 1; x < 11; x++) {
    
    for (let y = 1; y < 11; y++) {
        console.log("X: ", x, "Y: ", y);
    };
    
};