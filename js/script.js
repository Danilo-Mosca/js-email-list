"use strict";
console.clear();

/* API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
*/

// Creo la variabile arrayEmail e la popolo delle 10 email casuali
const arrayEmail = getData();
console.log(arrayEmail);

/* Funzione che restituirà i dati contenente le 10 email casuali in un array */
function getData() {
  // Array vuoto che conterra le 10 email generate casualmente
  const arrayEmail = [];
  // Ciclo per 10 volte così da generare le 10 email casuali e inserirle nell'array:
  for (let i = 0; i < 10; i++) {
    //promise: axios.get('https://flynn.boolean.careers/exercises/api/random/mail') inizio la richiesta di GET usando la libreria Axios
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
      // controllo se i dati vengono immagazzinati mostrando la risposta sul console.log
      console.log(result.data);
      // Inserisco le email nell'array: a noi serve la chiave response dell'oggetto, quindi è quella che assegnerò all'array contenente le email
      arrayEmail.push(result.data.response);
      // Verifico che siamo arrivati tutte i dati delle 10 email 
      // nell'array, se così invoco la funzione drawEmail() che stamperà
      // gli <li> contenenti le email sull'html
      if (arrayEmail.length === 10) {
        drawEmail(arrayEmail);
      }
    }).catch((error) => {
      // Se si verifica un errore lo mostro in console.log
      console.log(error);
    });
  }
}

/* Funzione che stampa le 10 email in una lista <li> nell'html */
function drawEmail(arrayEmail) {
  // Recupero l'elemento della pagina html
  const elementUl = document.querySelector('ul');

  // Creo il nodo elemento di tipo <li>
  let elementLi = document.createElement('li');
  arrayEmail.forEach((element) => {
    elementLi.innerHTML += `<li> ${element} </li>`
    elementUl.appendChild(elementLi);
  });
}