"use strict";
console.clear();

/* API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
*/

// Recupero l'elemento della pagina html
const elementUl = document.querySelector('ul');


// Funzione che restituirà i dati contenente le 10 email casuali in un array
function getData() {
  // Array vuoto che conterra le 10 email generate casualmente
  const arrayEmail = [];
  // Ciclo per 10 volte così da generare le 10 email casuali e inserirle nell'array:
  for (let i = 0; i < 10; i++) {
    //promise: axios.get('https://flynn.boolean.careers/exercises/api/random/mail') inizio la richiesta di GET usando la libreria Axios
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
      // controllo se i dati vengono immagazzinati mostrando la risposta sul console.log
      console.log(result.data);
      // Inserisco le email nell'array
      arrayEmail.push(result.data.response);
    }).catch((error) => {
      // Se si verifica un errore lo mostro in console.log
      console.log(error);
    });

    // Verifico che siamo arrivati tutte i dati delle 10 email nell'array e restituisco l'array pieno
    if (arrayEmail.length === 10) {
      return arrayEmail;
    }
  }
}