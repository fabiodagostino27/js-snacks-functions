/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
// Function
function vowels(string) {
    let arrVowels = [];

    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            arrVowels.push(string.charAt(i))
        } 
    }

    return arrVowels

}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowels(word).length, vowels(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)