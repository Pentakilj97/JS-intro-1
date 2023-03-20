// INTRODUZIONE 1 A JAVASCRIPT

// Javascript gestisce sostanzialmente 3 cose:

console.log('This is a string:', 'Hello World!');
console.log('This is a number:', 44);
console.log('This is a boolean:', false);

// Operazioni matematiche di base:

console.log('Somma: ', 10 + 5);
console.log('Sottrazione: ' , 10 - 5);
console.log('Moltiplicazione: ', 10 * 5);
console.log('Divisione: ', 10 / 5);
console.log('Modulo (resto): ', 10 % 5);
console.log('Potenza: ', 10 ** 2);

// Esempi:

console.log('Il numero 11 è pari ?: ', 11 % 2 === 0);
console.log('Senza parentesi: ', 10 + 5 * 2);
console.log('Con la parentesi: ', (10 + 5) * 2);

// Math. è la libreria che serve per aggiungere a Javascript
// (che di base non ha) delle funzioni matematiche:

console.log('Radice quadrata eseguita con Math.: ', Math.sqrt(16));

// L'operatore + permette di concatenare le stringhe:

console.log('I Depeche Mode sono ' + 'la mia band preferita.');

// Il backtik è come l'apice delle stringhe ma ha il potere in più
// di poter inserirvi internsmente del codice:

console.log(`La somma di 5 e 10 è ${5 + 10}`);

// Operatori di confronto == e === (uguale e uguale-uguale) :

console.log('Uguaglianza tra numeri: ', 10 == 10); // true
console.log('Uguaglianza senza conversione: ', 10 === 10); // true
console.log('Uguaglianza con conversione: ', '10' == 10); // true
console.log('Uguaglianza senza conversione: ', '10' === 10); // false
console.log('Uguaglianza tra stringhe: ', 'Ciao' === 'Ciao'); // true
console.log('Uguaglianza tra stringhe: ', 'Ciao' === 'CIAO') // false anche col ==
console.log('Uguaglianza tra booleani: ', false === true); // false

// Operatori di confronto != e !== (diverso e diverso-diverso) :

console.log('Disuguaglianza tra numeri: ', 10 !== 10); // false
console.log('Disuguaglianza tra stringhe: ', 'Pippo' !== 'Paperino'); // true
console.log('Disuguaglianza tra booleani: ', true !== false); // true

// Comparatori di maggiore e uguale:

console.log('Maggiore: ', 10 > 5); // true
console.log('Maggiore o uguale: ', 10 >= 10); // true
console.log('Minore: ', 10 < 10); // false
console.log('Minore o uguale: ', 10 <= 10); // true

// Operatori logici NOT, AND e OR:

console.log('Operatore NOT (true): ', !true); // false
console.log('Operatore NOT (false): ', !false); // true

console.log('Operatore AND (true true): ', true && true); // true
console.log('Operatore AND (false true): ', false && true); // false
console.log('Operatore AND (true false): ', true && false); // false
console.log('Operatore AND (false false): ', false && false); // false

console.log('Operatore OR (true true): ', true || true); // true
console.log('Operatore OR (false true): ', false || true); // true
console.log('Operatore OR (true false): ', true || false); // true
console.log('Operatore OR (false false): ', false || false); // false

// Operatore typeof (il tipo):

console.log('typeof 12: ', typeof 12); // number
console.log("typeof 'Hello World!': ", typeof 'Hello World!'); // string
console.log('typeof true: ', typeof true); // boolean

// Valori particolari che hanno a che fare coi numeri:

console.log('Infinito positivo: ', Infinity); // Infinity
console.log('Infinito negativo: ', -Infinity); // -Infinity
console.log('Divisione tra zeri (0 / 0): ', 0 / 0); // NaN
console.log('Not a Number: ', NaN); // NaN

// Valori particolari generici
// (undefined: valore vuoto dall'inizio e null: valore che diventa vuoto):

console.log('Undefined: ', undefined); // undefined
console.log('Null: ', null); // null