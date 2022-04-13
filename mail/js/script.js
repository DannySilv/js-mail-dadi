// Lista email già utilizzate
const emailList = ["email1", "email2", "email3", "email4", "email5", "email6", "email7", "email8", "email9", "email10"]

// Chiedi all'utente la sua email
const userEmail = prompt("Inserisci la tua e-mail");
console.log("L'e-mail che vorresti utilizzare è", userEmail);

// Stampa un messaggio appropriato
let existingEmail = false;
for (let i = 0; i < emailList.length; i++) {
    const thisEmail = emailList[i];
    if (thisEmail === userEmail) {
        existingEmail = true;
    }
    console.log(thisEmail, "E' già presente?", existingEmail);
}

console.log("Risultato finale: ", existingEmail);

if ( existingEmail == false ) {
    console.log(`Benvenuto ${userEmail}!`);
    alert(`Benvenuto ${userEmail}!`)
} else {
    console.log("Ci dispiace, la tua email è già utilizzata");
    alert("Ci dispiace, la tua email è già utilizzata")
};