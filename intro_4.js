//ARRAY

// let pippo =[15, 3, 23, 34, 21 ];

// let pluto= [1, 'ciao', false] //MALISSIMO

// pippo.push(100);// [15, 3, 23, 34, 21, 100]
// const pluto = pippo.pop() //[15, 3, 23, 34, 21 ]
// const paperino= pippo.pop() //[15, 3, 23, 34]


// // console.log(pippo);//[15,3,23,34]
// // console.log(pluto);//100
// // console.log(paperino);//21

// pippo.unshift(200);//[200, 15, 3, 23, 34, 21]

// const paperone= pippo.shift();//[15, 3, 23, 34, 21]
// const paperina= pippo.shift();//[3, 23, 34, 21]

// console.log(pippo);//
// console.log(paperina);//200
// console.log(paperone);//15

// console.log(pippo);
// pippo.pop()
// console.log(pippo); //a volte il log non è affidabile

// const arrayOfStrings=['andrea','jing','valentina','vlad'];
// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element)
// }

//1)scrivere una funzione che prende come paramentro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

// const pippo= [3,15,10,8,4]

// function Print(arryOfNumbers){
//     for (let i = 0; i < arrayOfNumbers; i++) {
//         const element=arrayOfNumbers[i];
//         if (element %3 === 0 && element %5 ===0){
//             console.log=('FizzBuzz')
//         }else if(element %3===0){
//             console.log('Fizz')
//        ////////finisci
      
//     }
// }


//2)scrivere una funzione che prende come paramentro un array di stringhe e logga quelle più piccole 5 caratteri

//3)scrivere una funzione che prende come parametro una stringa e restituisce una stringa composta dai primi 5 caratateri convertiti in maiuscolo

//4) scrivere una funzione che prende come parametro una stringa e ristitusce la lunghezza di una stringa senza spazi

//5)scrivere una funzione che prende come parametro una stringa e ristitusce il numero degli spazi



//------------------------------------------------------------------------------------------------------------------------

// const arrayOfStrings=['simone','jing','vlad'];

// const indexOfJing = arrayOfStrings.indexOf('jing');
// console.log(indexOfJing);
// const indexOfSimone =arrayOfStrings.indexOf('simone');
// console.log(indexOfSimone)



//-----------------------------------------------------------------------------------------
//oggetti

// const andrea = {
//     name:'Andrea',
//     surname:'Asioli',
//     yob:1978,
//     isMarried: false,
//     puplis: ['andrea','jing','valentina','vlad'],
//     dog:{
//         name:'ariel',
//         breed:'border-collie'
//     },
//     "cool car": "bmw"


// }
// console.log(andrea);

// console.log(andrea.surname);

// console.log(andrea['yob']);

// // console.log(andrea['cool car']);


// const info1={
//     name:'Vlad',
//     surname:'Pyatnytskyy',
//     yob:1997,
//     nickname:'Pentakilj',
//     email:'vladpyatny@gmail.com'
// }
// const info2={
//     name:'Valentina',
//     surname:'Cherubini',
//     yob:2001,
//     nickname:'Dalila',
//     email:'spam2001@gmail.com'
// }
// const info3={
//     name:'jinj',
//     surname:'Wamg',
//     yob:1993,
//     nickname:'Jingly',
//     email:'Jing@gmail.com'
// }
// const info4={
//     name:'Andrea',
//     surname:'Asioli',
//     yob:1978,
//     nickname:'labstraction',
//     email:'ilmionuovoaccount@gmail.com'
// }
// const info5={
//     name:'Simone',
//     surname:'Maccarone',
//     yob:2003,
//     nickname:'Simoquellofigo',
//     email:'simone@gmail.com'
// }
// const info6={
//     name:'Pietro',
//     surname:'Vagnino',
//     yob:1988,
//     nickname:'PietroVagni00',
//     email:'pietroilmagnifico@gmail.com'
// }
// const info7={
//     name:'Luis',
//     surname:'Castro',
//     yob:1993,
//     nickname:'Luciho',
//     email:'twicheerimpazzito@gmail.com'
// }
// const info8={
//     name:'Vlad',
//     surname:'Pyatnytskyy',
//     yob:1997,
//     nickname:'Pentakilj',
//     email:'vladpyatny@gmail.com'
// }
// const info9={
//     name:'Davide',
//     surname:'Cresta',
//     yob:1997,
//     nickname:'CrestaTorino',
//     email:'forzajuve97@gmail.com'
// }
// const info10={
//     name:'Francesco',
//     surname:'Banile',
//     yob:1997,
//     nickname:'Mocha',
//     email:'mochamocha@gmail.com'
// }
// const myClass=[info1,info2,info3,info4,info5,info6,info7,info8,info9,info10];

// for (let i = 0; i < myClass.length; i++) {
//     const element = myClass[i];
//     const eta=2023-element['yob'];
// //     console.log('NOME: '+ element['name']+';\n'+'ETA: '+eta+'anni'+';\n'+'email: '+element['email']+';\n')
    
    


    
// }

// // NOME:Vlad Pyatnytskyy;
// // ETA:25 Anni,
// // email:ASASASAS@ASDASDAS


//--------------------------------
//DA ARRAY A OGGETTI E VICEVERSA

// const arielloArrey= ['ariel', 'border-collie', 'maschio', 'bianco e nero'];

// console.log(arielloArrey);

// const arielloObj ={
//     name: arielloArrey[0],
//     breed: arielloArrey[1],
//     gender: arielloArrey[2],
//     color: arielloArrey[3]
// }

// console.log(arielloObj);


// const newArielloArray= Object.values(arielloObj);

// console.log(newArielloArray);

// const newKeysArray= Object.keys(arielloObj);

// console.log(newKeysArray);

//---------------------------------------------------
// //-VALUE TYPES AND REFERENCE TYPES

// let pippo=5;
// let pluto=pippo;
// pippo=7;

// console.log(pippo);
// console.log (pluto);

// let topolino= {yob:1930, name:'micky mouse'};//condividono entrambi le graffe
// let newTopolino=topolino;
// topolino.yob=1950;

// console.log(topolino.yob);
// console.log(newTopolino.yob);

// function sum2(selectedNumber){
//     selectedNumber=selectedNumber+2
// return selectedNumber;

// }
// let paperino=5;

// let basettoni=sum2(paperino);

// console.log(paperino);
// console.log(basettoni);
// //------------------------------------------------------------

// function make2YearsOlder(person){
//     person.yob=person.yob+2;
//     return person;
// }

// let andrea={name:'Andrea', yob:1978}

// let olderAndrea=make2YearsOlder(andrea);

// console.log(andrea);
// console.log(olderAndrea);
// //--------------------------------------------------------------------

// function make2YearsOlderWhithClone(person){
//     // let clone={name:person.name,yob:person.yob};
//     let clone={...person};
//     clone.yob=clone.yob+2;
//     return clone;
// }
// let simone={name:'simone',yob:2003};

// let olderSimone=make2YearsOlderWhithClone(simone);

// console.log(simone);
// console.log(olderSimone)

//------------------------------------------------
//DESTRUTTURARE

// const libro ={
//     titolo:'la divina commedia',
//     autore:'dante alighieri',
//     anno:2019,
//     paese:'italia',
//     casaEditrice:'einaudi',
// }

// // const titolo=libro.titolo;
// // const autore=libro.autore;
// const {titolo,autore}=libro;

// console.log(titolo,autore);

//-------------------------------------------------
//JSON


// const libro ={
//     titolo:'la divina commedia',
//     autore:'dante alighieri',
//     anno:2019,
//     paese:'italia',
//     casaEditrice:'einaudi',
// }

// const libroInStringa= JSON.stringify(libro);

// console.log(libro);
// console.log(libroInStringa);

// const libroInStringa2= '{"titolo":"iliade","autore":"Romeo","anno":2010,"paese":"italia","casaEditrice":"einaudi"}'
// const libro2=JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);

//-----------------------------------------------------
//FILTER
//SCRIVERE UNA FUNZIONE CHE DATO UN ARRAY DI NUMERI RESTITUISCE UN ARRAY CON I NUMERI MAGGIORI DI 0

// const numbers=[100,-23,0,-234,1001,1,34,-12]
// function filterNegative(array){
//     const tempArray=[];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element>=0){
//             tempArray.push(element);
//         }
//     }
//     return tempArray


// }console.log(filterNegative(numbers))//100,0,1001,1,34

// //MAPPING
// //Scrivere una funzione che dato un array di numeri li moltiplica tutti per due
// const numbers=[100,-23,0,-234,1001,1,34,-12]

// function multipleAllElementsBY2(array){
//     const tempArray=[]
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const result=element*2;
//         tempArray.push(result)
        
//     }
//     return tempArray

// }
// console.log(multipleAllElementsBY2(numbers))//200,-46,8,468,2002,2,68,-24


//REDUCE
// //CREARE UNA FUNZIONE CHE SOMMA TUTTI GLI ELEMENTI DI UN ARREY DI NUMERI

// const numbers=[100,-23,0,-234,1001,1,34,-12];

// function sumAllNumbers(array) {
//     let tempNumber=0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempNumber=tempNumber+element;
        
//     }
//     return tempNumber;
    
// }
// console.log(sumAllNumbers(numbers))


///ESERCIZI
//1 SCRIVERE UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE UN ARREY DEGLI ELEMENTI IN LOGICA FIZZBUZUZUZUZU
const numbers=[3,5,15,8,12,2]

function convertiInFizzBuzz(array){

}
console.log(convertiInFizzBuzz(numbers))
//2 SCRIVERE UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTRIBUISCE UN ARREI IN CUI I POSITIVI SI SONO TRASFORMATI IN NEGATIVI E VICEVERSA
//3 SCRIVERE UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI STRINGHE E RESTITUISCE UN ARRAY DI NUMERI CON LA LUNGHEZZA DELLE STRINGHE
//4 SCRIVERE UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI STRINGHE E RESTITUISCE SOLO QUELLE CHE CONTENGONO LA LETTERA Z
//5 SCRIVERE UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE TUTTI I NUMERI PARI 
//6 SCRIVERE UNA FUNZIONE CHE DATO UN ATTAY DI STRINGHE RESTITUSCE UNA STRINGA COMPOSTA DALLE INIZIALI 
//7 SCRIVERE UNA FUNZIONE CHE DATO UN ARRAY DI NUMERI RESTIUTSCE IL NUMERO MAGGIORE
