/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// Function
//function namesInitial(arr, letter) {
//    let arrInitals = [];

//    for (i = 0; i < arr.length; i++) {
//        if (arr[i].charAt(0) == letter.toUpperCase()) {
//            arrInitals.push(arr[i])
//        }
//    }

//    return arrInitials
//}

// Arrow function
namesInitial = (arr, letter) => {
    let arrInitals = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) == letter.toUpperCase()) {
            arrInitals.push(arr[i])
        }
    }

    return arrInitals
}

// Invoca la funzione qui e stampa il risultato in console
console.log(namesInitial(names, "a"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]