let remainingTime = document.querySelector('#remainingTime')
let countdownInput = document.querySelector('#countdown-input')

let startBtn = document.querySelector('#startBtn')
let stopBtn = document.querySelector('#stopBtn')
let resetBtn = document.querySelector('#resetBtn')

let interval;
let counter;
let remainingSeconds = 0

startBtn.addEventListener('click', () =>{
    clearInterval(interval)
    counter = countdownInput.value

    if(remainingSeconds !== 0){
        counter = remainingSeconds
    }else{
        counter = parseInt(countdownInput.value) || 0;
    }

    interval = setInterval(() => {
        if(counter < 0){
            clearInterval(interval)
            remainingTime.innerHTML = 'Tempo scaduto'
            remainingSeconds = 0;
        }else{
            remainingTime.innerHTML = counter
            counter --
        }
    }, 1000)
})

stopBtn.addEventListener('click', () =>{
    clearInterval(interval)
    remainingSeconds = counter
})

resetBtn.addEventListener('click', () =>{
    countdownInput.value = ''
    clearInterval(interval)
    remainingSeconds = 0;
    remainingTime.innerHTML = ''
})