// Numero random giocatore e computer
const userRandomNum = Math.floor(Math.random() * 6 + 1);
alert(`Il tuo numero è ${userRandomNum}`)
console.log("Il tuo numero è", userRandomNum);

const pcRandomNum = Math.floor(Math.random() * 6 + 1);
alert(`Il numero del computer è ${pcRandomNum}`)
console.log("Il numero del computer è", pcRandomNum);

// Stabilire il vincitore, cioè chi ha il punteggio più alto
let result;
if (userRandomNum > pcRandomNum) {
    result = "Hai vinto!"
} else if (userRandomNum < pcRandomNum) {
    result = "Mi dispiace, hai perso!"
} else if (userRandomNum == pcRandomNum) {
    result = "Avete pareggiato!";
}
alert(result);
console.log(result);