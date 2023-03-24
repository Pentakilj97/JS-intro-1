// INTRODUZIONE 3 A JAVASCRIPT


// Scope:


const pippo = "Ciao";  // Le variabili create esternamente sono dette GLOBALI,
                        // "disponibili" per tutti.
console.log(pippo);

if (true) {                 //  Lo spazio contenuto dentro IF è lo SCOPE!!!
                            // Da riga 10 a riga 12
    console.log(pippo);

};

if (true) {                         // Quando una variabile viene "definita" all'interno
                                    // delle parentesi {} (IF, FOR, WHILE; ecc.)
    console.log(pippo);             // essa rimane esclusiva dentro lo SCOPE,
    const pluto = 'JavaScript';     // e non può esistere all'infuori di esso.
    console.log(pluto);

};

if(true) {                              // Ogni variabile viene letta da fuori verso
                                        // l'interno, MA MAI D'ALL'INTERNO
    console.log(pippo);                 // VERSO L'ESTERNO!!!
    const pluto = 'JavaScript';
    if (true) {
        console.log(pluto);
        const paperino = 'Pizza';
    };

    //console.log(paperino);              // La variabile (const) paperino non 
                                        // può essere letta!!! (non viene loggata)
};

for (let i = 0; i < 3; i++) {
                                        // Le variabili (in questo caso la "i") possono
    console.log('Pizza');               // essere utilizzate all'interno di due SCOPE diversi
                                        // purché essi siano separati nel GLOBALE
};

for (let i = 0; i < 3; i++) {
    
    console.log('Focaccia');
    
};

for (let i = 0; i < 3; i++) {                         // Le variabili non si devono ripetere
                                                    // all'interno dello stesso ciclo perché
    for (let i = 0; i < 3; i++) {                   // la variabile "shadow" va a sovrascrivere
                                                    // quella precedente, ed è per questo
        console.log(i); // Variabile "shadow"       // che è buona norma dare i nomi delle
                                                    // variabili nei FOR con nomi diversi
    };                                              // (es: i, j, k).
    
};

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        console.log(j);

    };

};


// FUNZIONI:


// 3 Modi di scrivere le funzioni:


// 1) Metodo delle parentesi graffe:

function elevaAlQuadrato(numb) {    // Anche le funzioni crenao uno {SCOPE}

    const result = numb * numb;
    return result;

};

const dueAlQuadrato = elevaAlQuadrato(2);
console.log(dueAlQuadrato);

const cinqueAlQuadrato = elevaAlQuadrato(5);
console.log(cinqueAlQuadrato);

// Oppure:
console.log(elevaAlQuadrato(4));


// 2) Funzioni anonime (modo diverso ma identico al primo):

const elevaAlQuadrato_2 = function (numb) {

    const result = numb * numb;
    return result;

};

console.log(elevaAlQuadrato_2(10));


// 3) Metodo "lambda" (equivalente al secondo metodo):

const elevatoAlQuadrato_3 = (numb) => numb * numb;  // Se il codice è fatto in una sola riga
                                                    // il RETURN è direttamente nella
console.log(elevatoAlQuadrato_3(6));                // sintassi della funzone senza
                                                    // specificarlo!!!

// const elevatoAlQuadrato_3 = (numb) => {       // Se la funzione LAMBDA viene espressa su
                                                 // più righe, allora il RETURN va
//     const risult = numb * numb;               // scritto!!!   
//     return result;

// };                      

// LE FUNZIONI POSSONO AVERE MOLTEPLICI INPUT MA UN SOLO OUTPUT!!!


function elevazioneAPotenza (base, esponente) {

    const result = base ** esponente;
    return result;

};

console.log(elevazioneAPotenza(3, 4));  // Il risultato, ovviamente, è solo uno!



// FUNZIONI PURE ED IMPURE:


// Impura (non ha input e output diretti):

function scriviNellaConsole(messaggio) {

    console.log(messaggio);

};

scriviNellaConsole('Scemo chi legge :-)');

// Se in una funzione non c'é il RETURN, se usata ritorna come "UNDEFINED"!

let poldo = scriviNellaConsole('Ho fame!');
console.log(poldo);  // In console apparirà, per l'appunto, UNDEFINED! 


// Pura (ha un ritorno del risultato RETURN):

function sommaUno (numb) {

    return numb + 1;

};


// MAI FARE FUNZIONI MISTE TRA PURE ED IMPURE!!

// function SommaDueELogga (numb) {  //  Funziona, ma è il male!!!

//     const result = numb + 2;
//     console.log(result);
//     return result;

// };

// ESEMPIO:

// function log(messaggio) {
//     console.log(messaggio);
// };

// function sommaDue(numb) {
//     return numb + 2;
// };

// log(sommaDue(5));  // Si fa così! Si separano le funzioni pure da quelle impure
//                    // e successivamente si richiamano insieme.


// ESERCIZI:

// Scrivere gli esercizi sia in normale che in lambda:

// 1) Scrivere una funzione che dato un numero se è positivo
//    lo moltiplica per due, altrimenti return number:


// function moltiplicaPer2(number){
//     if(number >=0){
//         let result=number*2;
//         return result;
//     }else {
//         return number;
//     }
// }

// console.log(moltiplicaPer2(2));




// 2) Scrivere una funzione che data una stringa restituisca la sua
//    version maiuscola:

// function Maiuscola(stringa){  

//     if (typeof stringa === 'string') {

//         let maiuscolo = stringa.toUpperCase();
//         return maiuscolo;

//     }  else {

//         return '';

//     }  

// };

// console.log(Maiuscola('poppp'));


// 3) Scrivere una funzione che data una stringa mi restituisca
//    vero se è più lunga di 10 caratteri, altrimenti falso:

// function Vero(veroFalso){
//     if (veroFalso.length>10) {

//         let Vero = true;
//         return Vero;
        
//     } else {

//         let falso = false;
//         return falso;
        
//     }
// }; console.log(Vero('qwertyuio'))



// 4) Scrivere una funzione pura che restituisca la scacchiera:









// 5) Scrivere una funzione che dato un numero restituisca una
//    stringa con la logica FizzBuzz:

// function fizz(numero){
//     if (numero % 3 === 0) {
//         let divisibilePerTre= 'Fizz';
//         return divisibilePerTre;
        
//     } else if (numero % 5===0){
//         let divisibilePerCinque='Buzz';
//         return divisibilePerCinque;
        
//     }else if(numero %3===0 && numero %5===0){
//         let divisibilePerEntrambi='FizzBuzz';
//         return divisibilePerEntrambi;
//     }else {
//         return numero;
//     }

// }; console.log(fizz(31));


// 6) Scrivere una funzione che data una stringa restituisca una stringa
//    composta solo dai caratteri dispari dell'originale:

// function selectOddCharsFrontText(text){
//     let result= '';
//     for (let i = 1; i < text.length; i+=2) {
//         result+= text[i];
        
//     }
//     return result;
// }

// console.log(selectOddCharsFrontText('ciao'));
// console.log(selectOddCharsFrontText('andrea'));
// console.log(selectOddCharsFrontText('andrea il malvagio'));


//7)esercizio libro

// function findMinNumber(number1, number2){
//     if(number1>number2){
//         return number2;
//     } else {
//         return number1;
//     }
// }

// console.log(findMinNumber(10, 5))
// console.log(findMinNumber(-10, 0))

// const findMinNumber=(number1,number2)=>number1>number2 ? number2 : number1;


//8) scrivere una funzione che sommi tutti i numeri in un range prestabilito

function sumRange(startNumber, endNumber){
    let sum=0;
    for (let i = startNumber; i <=endNumber; i++) {
        sum = sum+i;
    }
    return sum;

}

console.log(sumRange (0,3))//6
console.log(sumRange(1,3))//6
console.log(sumRange(1,5))//15
console.log(sumRange(2,6))//20
console.log(sumRange(6,6))//6
console.log(sumRange(-2,2))//7


// 0+1+2+3
// 1+2+3
// 1+2+3+4+5

//----------------------------------------
//LE FUNZIONI POSSONO USARE ALTRE FUNZIONI

// function doubleAndPow3(selectedNumber){
    // const double= selectedNumber *2;
    // const pow3= double **3;
    // return pow3;
    // // //----------------------------------------
    // const double=double(selectedNumber);
    // const pow3 = makePow3(double);
    // return pow3;
  
//     // return makePow3(makeDouble(selectedNumber));
//  }
// function makedouble(selectedNumber){
//     return selectedNumber*2;
// }

// function makePow3(selectedNumber){
//     return selectedNumber **3;
// }

// console.log(doubleAndPow3(2));//64
// console.log(doubleAndPow3(3));//216


// function ifMoreThan10CharUpperCase(text){
//     function isMoreThan10CharInside(TextToCheck){
//         return TextToCheck.length>10;
//     }
//     if (isMoreThan10CharInside(text)){
//         return text.toUpperCase();
//     } else{
//         return text;
//     }
// }

// console.log(ifMoreThan10CharUpperCase('il cane rosa è rosa'))

//---------------------------------------------
