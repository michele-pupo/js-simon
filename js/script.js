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

// creiamo una variabile che ci dia l'ora esatta in questo momento tramite una stringa
const now = new Date();
console.log(now);

// creiamo una variabile con l'ora ed il giorno scelto da noi
const chosenDate = new Date('2024-02-12T09:30:00');
console.log(chosenDate);
  
    