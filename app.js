console.log('funziona') ;

// recuperare i km dall’input dei km
const kmElement = document.getElementById ('Kilometri'); // object | null
console.dir(kmElement);
// trasformare kmElement in numero
const km = parseFloat(kmElement.value);


// recuperare l’eta dall’input dell’età
const etaElement = document.getElementById ('age');
console.dir(etaElement);
// trasformare etaElement in numero
const eta = parseFloat(etaElement.value);


// Collegare il bottone invio
const buttonElement = document.getElementById('submit'); //
console.dir(buttonElement);

// attivare ascolto sul submit del form
buttonElement.addEventListener("click", function (event));

function event() {
  document.getElementById("submit").innerHTML = "Hello World";
}

// calcolare il prezzo base
const prezzobase = 0.21 * km
console.log(prezzobase)

// calcolare lo sconto
