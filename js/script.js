"use strict";
console.clear();

/* API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
*/

// Recupero l'elemento pulsante dalla pagina html
const btnGenerator = document.getElementById('btnGenerator');
// Creo un ascoltatore di eventi per il pulsante
btnGenerator.addEventListener('click', getData);

// Recupero l'elemento loader dalla pagina html
const loader = document.getElementById('loader');



/* Funzione che restituirà i dati contenente le 10 email casuali in un array */
function getData() {
  // Rimuovo la classe d-none dal loader
  loader.classList.remove('d-none');
  
  // Array vuoto che conterra le 10 email generate casualmente
  const arrayEmail = [];
  // Ciclo per 10 volte così da generare le 10 email casuali e inserirle nell'array:
  for (let i = 0; i < 10; i++) {
    //promise: axios.get('https://flynn.boolean.careers/exercises/api/random/mail') inizio la richiesta di GET usando la libreria Axios
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
      // controllo se i dati vengono immagazzinati mostrando la risposta sul console.log
      console.log(result.data);
      console.log(result.data.response);
      console.log(result.data.success);
      
      
      // Inserisco le email nell'array: a noi serve la chiave response dell'oggetto, quindi è quella che assegnerò all'array contenente le email
      arrayEmail.push(result.data.response);
      // Verifico che siamo arrivati tutte i dati delle 10 email 
      // nell'array, se così invoco la funzione drawEmail() che stamperà
      // gli <li> contenenti le email sull'html
      if (arrayEmail.length === 10) {
        printEmail(arrayEmail);
        return arrayEmail;
      }
    }).catch((error) => {
      // Se si verifica un errore lo mostro in console.log
      console.log(error);
    });
  }
}

/* Funzione che stampa le 10 email in una lista <li> nell'html */
function printEmail(arrayEmail) {
  // Recupero l'elemento della pagina html
  const elementUl = document.querySelector('ul');
  // Lo svuoto per evitare che le mail si appendano ad altre email esistenti
  elementUl.innerHTML = '';
  // Creo il nodo elemento di tipo <li>
  let elementLi = document.createElement('li');
  elementLi.value = '';
  arrayEmail.forEach((element, index) => {
    // console.log(index);
    
    elementLi.innerHTML += `<li class="li-email my-3 p-3" id="email-${index + 1}"> <i class="fa-regular fa-envelope"></i> ${element} </li>`;
    elementUl.appendChild(elementLi);
    
    // Una volta aggiunti tutti gli elementi riaggiungo la classe d-none al div loader
    loader.classList.add('d-none');
  });
}