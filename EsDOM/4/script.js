const inputSecondi = document.getElementById('inputSecondi')
const btnStart = document.getElementById('CD');
const btnPausa = document.getElementById('Pausa');
const btnReset = document.getElementById('Reset');
const timerDisplay = document.getElementById('timerDisplay');

let intervalId = null;
let secondiRimasti = 0;

function aggiornaDisplay(valore) {
    timerDisplay.textContent = valore;
}

btnStart.addEventListener('click', () => {
    if(intervalId !== null) return;

    if(secondiRimasti <= 0){
        secondiRimasti = parseInt(inputSecondi.value);
    }
    if(isNaN(secondiRimasti) || secondiRimasti <= 0){
        alert("inserisci un numero valido di secondi superiore a 0")
        return;
    }
    aggiornaDisplay(secondiRimasti)

    intervalId = setInterval(() => {
        secondiRimasti--;
        aggiornaDisplay(secondiRimasti);
        
        if(secondiRimasti <= 0){
            clearInterval(intervalId)
            intervalId = null
            alert('Tempo scaduto')
        }
    }, 1000)
})

btnPausa.addEventListener('click', () => {
    if(intervalId !== null){
        clearInterval(intervalId)
        intervalId = null
    }
})

btnReset.addEventListener('click', () => {
    if(intervalId !== null){
        clearInterval(intervalId)
        intervalId = null
    }
    secondiRimasti = 0;
    inputSecondi.value = '';
    aggiornaDisplay(0);
})