console.log('funziona') ;

// recuperare i km dall’input dei km

const kmElement = document.getElementById ('Kilometri'); // object | null
console.dir(parseInt(kmElement));

// recuperare l’eta dall’input dell’età

const etaElement = document.getElementById ('age');
console.dir(etaElement);

// Collegare il bottone invio

const buttonElement = document.getElementById('submit'); //
console.dir(buttonElement);


// trasformare i dati in numeri

// const etaElementNumber = parseInt(kmElement);
// console.log(etaElementNumber)
// const kmElementNumber = parseInt(kmElement);

// calcolare il prezzo

// let prezzobase = 0.21* kmElementNumber
// console.log(prezzobase)

// if (etaElementNumber > 18 && ) {

// }

// else () {

// }

// stampare il prezzo nella pagina html in un semplice div

buttonElement.addEventListener('click', function () {
    console.log('click sul button')

})