/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// Function
//function namesInitals(arr) {
//    let arrInitials = [];

//    for (i = 0; i < arr.length; i++) {
//        arrInitials.push(arr[i].charAt(0))
//    }

//    return arrInitials
//}

// Arrow function
namesInitals = (arr) => {
    let arrInitials = [];

    for (i = 0; i < arr.length; i++) {
        arrInitials.push(arr[i].charAt(0))
    }

    return arrInitials
}

// Invoca la funzione qui e stampa il risultato in console
console.log(namesInitals(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]