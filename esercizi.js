// ESERCIZIO 1

// Soluzione mia:

/*let canc = "#";

for (let lel = 1; lel <= 7; lel++) {
    console.log(canc);
    canc += '#';
};*/

// Soluzione in classe:

/*let string = " ";

while (string.length < 7) {
    string += "#";
    console.log(string);
};*/



// ESERCIZIO 2:

//let number = 1;

/*for (let result = 0; result < 100; result++) {

    if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0 && number % 3 !== 0) {
        console.log('Buzz');
    } else {
        console.log(number);
    }

    number += 1;

};*/

// Soluzione mia:

/*for (let result = 0; result < 100; result++) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
    } else if (number % 5 === 0 && number % 3 !== 0) {
        console.log('Buzz');
    } else if (number % 3 === 0 && number % 5 !== 0){
        console.log('Fizz')
    } else {
        console.log(number);
    }

    number += 1;

};*/

// Soluzione mia ripulita in classe
// (senza variabile "numb" ma usando direttamente "loop", sostituito da "i")
// e le ulteriori condizioni tolte perché inutili:


/*for (let i = 1; i < 101; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else {
        console.log(i);
    }

};*/

// Soluzione alternativa in classe:

// for (let i = 0; i < 101; i++) {

//     let result = "";  // Le stringhe vuote sono convertite in "false" (è un booleano).

//     if (i % 3 === 0) {
//         result += 'Fizz';
//     };
//     if (i % 5 === 0) {
//         result += 'Buzz';
//     };
//     if (result) {  // Se la stringa è piena è "true", quindi esegue l'IF,
//         console.log(result);  //  viene stampata ricomincia da capo con "continue" (non stampando "i").
//         continue; // "else è la stessa cosa di continue".
//     };

//     console.log(i);

// };


// ESERCIZIO 3:

// Soluzione mia:

// for (let loop = 1; loop <= 8; loop++) {

//     if (loop % 2 !== 0) {
//         console.log((" " + "#").repeat(4));
//     } else if (loop % 2 === 0) {
//         console.log(("#" + " ").repeat(4));
//     };

// };

// Soluzione ripulita in classe:

// for (let riga = 1; riga <= 8; riga++) {

//     if (riga % 2 !== 0) {
//         console.log(" #".repeat(4));
//     } else {
//         console.log("# ".repeat(4));
//     };

// };


let box = "";
let k = 3;


for (let y = 0; y < k; y ++) {

    for (let x = 0; x < k; x++) {
        
        if (y % 2 === 0) {
        
            if (x % 2 === 0) {
                box += "#";
            } else {
                box += " ";
            };

        } else {

            if (x % 2 === 0) {
                box += " ";
            }else {
                box += "#";
            };

        };
        
    };

    box += '\n';

};

console.log(box);



// ESEMPI IN CLASSE:


// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// };



// for (let i = 0; i < 20; i++) {

//     if (i % 2 === 0) {
//         console.log(i/2);
//     } else if (i % 3 === 0) {
//         console.log(i**3);
//     } else {
//         console.log(i);
//     };

// };



// let misteryNumber = 1;
// let notFound = true;

// while (notFound) {
//     const multipleof2 = misteryNumber % 2 === 0;
//     const multipleof3 = misteryNumber % 3 === 0;
//     const multipleof5 = misteryNumber % 5 === 0;

//     if (multipleof2 && multipleof3 && multipleof5 ) {
//         console.log(misteryNumber);
//         notFound = false;
//     } else {
//         misteryNumber++;
//     };

// };