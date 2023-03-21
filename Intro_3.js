// alert('Ciao');

// confirm('Sicuro ?');
// A differenza di "alert", confirm da un ritorno della conferma (true o false)

// prompt('Digita il tuo nome'); 
// prompt ti richiede, a differenza dei precedenti, di inserire un valore e poi dare una conferma

// let Nome = prompt('Digita il tuo nome:', 'Name'); All'interno della parentesi se metto un'altro valore seguito dalla virgola,
// alert('Il tuo nome è: ' + Nome);                  esso apparirà come valore di default (in questo caso "Name")

// let Nome = 'Nome';
// let nomeDigitato = prompt('Digita il tuo nome: ' + Nome, 'Name');


// let nan = isNaN('d');
// console.log(nan);

/*let nan = isNaN(prompt('Digita un numero:'));

if (nan === true) {
    alert('Non è un numero');
} else {
    alert('Numero valido')
}*/

/*let nome = prompt('Digita il tuo nome:');
let cognome = prompt('Digita il tuo cognome:');

if (typeof nome !== "string" || typeof cognome !== "string") {
    alert('Dati non validi!');
} else {
    alert('Il tuo nominativo è: ' + nome + " " + cognome);
};

/*let number = prompt('Digita un numero:');

if (number < 10) {

    alert('Il numero è minore di 10');

} else if (number < 50) {

    alert('Il numero è inferiore a 50');

} else {

    alert('Il numero è maggiore di 50');

};*/

/*let kek = 0

while (kek <= 10) {

    console.log(kek);
    kek += 2;
}

console.log('Fine ciclo!');*/

/*let counter = 0;
let res = 10;

while (counter <= 5 ) {
    console.log('Ciclo');
    counter += 1;
    res *= 3;
}

console.log('Fine Ciclo!');
console.log('Risultato: ' + res);*/


/*for (let i=0; i<=5; i++) {

    console.log('i = ' + i);

} console.log('Fine ciclo!');

let result = 10;

for (let counter=0; counter<=5; counter++) {

    console.log('Counter: ' + counter);
    result *=3;

}

console.log('Fine Ciclo!');
console.log('Risultato: ' + result);*/

/*let result = 10;

for (let counter=0; /*(spazio vuoto)*/ /*; counter++) {

    console.log('Counter: ' + counter);
    result *=3 ;

    if (counter === 5) {

        console.log('Break!');
        break;  // parola chiave per chiudere un ciclo
    }

}

console.log('Il risultato è: ' + result);*/

/*let counter = prompt('Digita un numer:');

if (counter <= 10) {

    alert('Minore o uguale a 10');

} else if (counter <= 20) {

    alert('Maggiore di 10 e minore o uguale a 20');

} else if (counter <= 30) {

    alert('Maggiore di 20 e minore o uguale a 30');

} else {

    alert('Maggiore di 30');

}*/

//let nome = prompt('Digita un nome');

//switch (nome) {  // Da usare nel caso ci fossero tanti else if

/*  case "Valerione":
        alert('Eilà, Valerione!');
        break;
    case "Davidone":
        alert("Davidone!!! 'Sta sera facciamo il seratone ?");
        break;
    case "Allan":
        alert("Spegni quel cazzo di LOL ed esci a vedere un po' di mussa!");
        break;
    case "Mr":
        alert("Ah, ma allora sei vivio ?! Ti credevo morto o roba simile...");
        break;
    case "Mattia":
        alert("Ah Matti! Occhio ai vecchi sugli autobus, mi raccomando!");
        break;
    default:
        alert('Chi cacchio sei?');
        break;        

}*/

/*let numeroSegreto = 81;

while (true) {

    let numeroDigitato = Number(prompt('Indovina il numero'));
    if (numeroDigitato == numeroSegreto) {

        break;

    }

}

alert('Numero indovinato!');*/

let numeroSegreto = 40;
let numeroDigitato = Number(prompt('Indovina il numero'));


while (true) {

    for (let counterAlert = 0; counterAlert<=3; counterAlert++) {



    }
}