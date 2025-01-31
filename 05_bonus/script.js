/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
// Function
//function greetingUser(string) {
//    let whatTimeIsIt = new Date().getHours();
//    let greeting;

//    (whatTimeIsIt <= 13) ? greeting = `Buongiorno ${string}` :
//    (whatTimeIsIt <= 17) ? greeting = `Buon pomeriggio ${string}` :
//    greeting = `Buonasera ${string}`

//    return greeting
//}

// Arrow function
let whatTimeIsIt = new Date().getHours();
let greeting;

greetingUser = (string) => (whatTimeIsIt <= 13 && whatTimeIsIt >= 5) ? greeting = `Buongiorno ${string}` : (whatTimeIsIt <= 17 && whatTimeIsIt > 13) ? greeting = `Buon pomeriggio ${string}` : greeting = `Buonasera ${string}`

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingUser(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.