// INTRODUZIONE 2 A JAVASCRIPT

// Le variabili:

let pippo = 5; // Variabile che può cambiare il suo contenuto
console.log(pippo);

var paperino = 10; // Come Let ma vecchio ed è meglio non utilizzarla, perché
console.log(paperino); // permette di indirizzare una variabile 
                        // prima che ad essa sia stata assegnato un valore 

const topolino = 20; // La costante non può essere cambiata
console.log(topolino);

// Esempio di assegnazione di un valore in modo particolare:

const pluto = 12 + 80; // In questo caso l'operazione viene eseguita prima, 
console.log(pluto);   // poi il risultato viene assegnato alla variabile

const basettoni = 56;
const gambaDiLegno = basettoni;

console.log(gambaDiLegno); // In console esce 56

const macchiaNera = gambaDiLegno + basettoni;
console.log(macchiaNera); // In console esce 112 (56 + 56)

let qui, quo, qua = 12;
console.log(qui, quo, qua); // Il valore viene assegnato all'ultimo

let Qui = 12, Quo = 12, Qua =12;
console.log(Qui, Quo, Qua); // Questo è il modo corretto

let paperoga;           // La variabile let può essere mandata in console
console.log(paperoga);  // anche se ad essa non è stato assegnato un valore

//cont zioPaperone; // Non assegnare un valore ad un costante, a differenza di let,
                  // non può essere fatto

//let 44dave; // Le variabili non possono iniziare con un numero
//let dave-89; // Le variabili non possono contenere il trattino

let amelia = 12;
console.log(amelia);
amelia = 40;
console.log(amelia);
                       