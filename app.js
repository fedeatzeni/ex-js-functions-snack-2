// Snack 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(x, y) {
    return (x + y);
};

// console.log(somma(7, 3));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaAnonima = function (x, y) {
    return (x + y);
};

// console.log(sommaAnonima(12, 5));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions

const sommaArrow = (x, y) => {
    return (x + y);
};

// console.log(sommaArrow(6, 9));

// Snack 2

// Crea una arrow function che calcola il quadrato di un numero.

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (x) => x * x;

// console.log(quadrato(3));

// Snack 3

// Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.

const moltiplicazione = (x, y) => x * y;
const sottrazione = (x, y) => x - y;
const divisione = (x, y) => x / y;

const eseguiOperazione = (x, y, operazione) => operazione(x, y)

// console.log(eseguiOperazione(13, 5, sottrazione));
// console.log(eseguiOperazione(10, 5, divisione));

// Snack 4

// Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e 
// restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (tempo) => () => { setTimeout(() => console.log("Tempo scaduto!"), tempo); }

const timer = creaTimer(1000);
// timer();

// Snack 5

// Crea una funzione stampaOgniSecondo con setInterval.

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const stampaOgniSecondo = (text) => setInterval(() => console.log(text), 1000);

// stampaOgniSecondo("ciao");

// Snack 6

// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce
// una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const creaContatoreAutomatico = (tempo) => {

    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, tempo)
    }
}

// const conta = creaContatoreAutomatico(3000)
// conta()

// Snack 7

// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const eseguiEferma = (messaggio, tempoIntervalli, tempoStop) => {

    const timer = setInterval(() => console.log(messaggio), tempoIntervalli)
    setTimeout(() => clearInterval(timer), tempoStop);
}

// eseguiEferma("testo", 1000, 5000)

// Snack 8 (Bonus)

// Crea una funzione che simula un conto alla rovescia

// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

const contoAllaRovescia = (n) => {

    const counter = setInterval(() => {

        console.log(n--)

        if (n === 0) {
            clearInterval(counter);
            console.log("Tempo scaduto!")
        }
    }, 1000);

}

// contoAllaRovescia(3);

// Snack 9 (Bonus)

// Creare una funzione che esegue una sequenza di operazioni con ritardi

// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const sequenzaOperazioni = (lista, tempo) => {

    for (let i = 0; i < lista.length; i++) {
        setTimeout(() => lista[i](), tempo * i) //(tempo * i) per gestire i tempi tra le funzioni
    }

}

// sequenzaOperazioni([
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ], 2000);

// Snack 10 (Bonus)

// Creare un throttler per limitare l’esecuzione di una funzione

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente,
// esegue l'operazione originale al massimo una volta ogni n millisecondi.

// const creaThrottler = (funzione, tempo) => {
//     return () => { setTimeout(() => funzione(), tempo) }
// }

// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
// throttledLog();
// throttledLog();
// throttledLog();
// throttledLog();
// throttledLog();