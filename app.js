console.log('funziona') ;

// recuperare i km dall’input dei km
const kmElement = document.getElementById ('Kilometri'); // object | null
console.dir(kmElement);



// recuperare l’eta dall’input dell’età
const etaElement = document.getElementById ('age');
console.dir(etaElement);



// Collegare il bottone invio
const buttonElement = document.getElementById('submit'); //
console.dir(buttonElement);

// attivare ascolto sul submit del form
buttonElement.addEventListener("click", function () {

    // questo codice verrà eseguito quando l'utente preme bottone
    
    // prendere valore inserito dall'utente come value e restituirlo trasformandolo in numero
    const km = parseFloat(kmElement.value);

    // prendere valore inserito dall'utente come value e restituirlo trasformandolo in numero
    const eta = parseFloat(etaElement.value);

    // console.log(km , eta)

    const prezzobase = 0.21 * km
    let sconto = 0

    // console.log(prezzobase)

    if (eta <= 18 ) {

      sconto = prezzobase * 0.2

    }

    else if (eta >= 65 ) {

      sconto = prezzobase * 0.4

    }

    const prezzofinale = prezzobase - sconto

    console.log( km, eta , prezzofinale)

    document.getElementById("result").innerHTML = prezzofinale + ' €';


});

