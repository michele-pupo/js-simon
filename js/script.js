// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// - Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// - Da quante ore è composto un giorno?
// - Da quanti minuti è composta un'ora?
// - Da quanti secondi è composto un minuto?
// - Da quanti millisecondi è composto un secondo?
// - Quanti millisecondi mi separano da domani alle 9:30?
// - Esiste un oggetto JS in grado di gestire le date?
// - Esistono dei metodi per trasformare una data in millisecondi?

// creiamo una funzione che aggiorni il timer ogni secondo
function missingTime(){
    // creiamo una variabile che ci dia l'ora esatta in questo momento tramite una stringa
    const now = new Date();
    // console.log(now);

    // creiamo una variabile con l'ora ed il giorno scelto da noi
    const chosenDate = new Date('2024-02-12T09:30:00');
    // console.log(chosenDate);
    
    // creiamo una variabile che sottragga alla data scelta l'ora attuale
    let remainingTime = chosenDate.getTime() - now.getTime();
    // questo ci darà il tempo (in numero) che manca alla data indicata in "millisecondi"
    // console.log(remainingTime);


    // facciamo la conversione dai millisecondi ottenuti per trovare quanti giorni, ore, minuti e secondi mancano
    // conversione in secondi mancanti
    const seconds = Math.floor((remainingTime / 1000) % 60);
    console.log(seconds);

    // conversione in minuti mancanti
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    console.log(minutes);

    // conversione in ore mancanti
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    console.log(hours);

    // conversione in giorni mancanti
    const days = Math.floor((remainingTime / (1000 * 60 * 60 * 24)));
    console.log(days);

    // impostaiamo il metodo "setTimeout" che fa un conto alla rovescia ed impostandogli il valore 1000ms scalerà un secondo alla volta
    setTimeout(missingTime, 1000);
}

// richiamando la funzione si aggiornerà il timer
missingTime();