let kedek = "#";

for (let lel = 1; lel <= 7; lel++) {
    console.log(kedek);
    kedek += "#";
};

let number = 1;

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

for (let result = 0; result < 100; result++) {

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

};


for (let loop = 1; loop <= 8; loop++) {

    if (loop % 2 !== 0) {
        console.log((" " + "#").repeat(4));
    } else if (loop % 2 === 0) {
        console.log(("#" + " ").repeat(4));
    };

};

let nome = prompt('Digita il tuo nome:');
let cognome = prompt('Digita il tuo cognome:');

if (nome === "" || cognome === "") {
    alert('Dati non validi!');
} else {
    alert('Il tuo nominativo è: ' + nome + " " + cognome);
};