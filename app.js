const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

// 'let' is used instead of 'const' because the score value will change during the game
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {

    // Removing all classes from our 'divs' to start the game
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // Assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

// Arrow function with 'forEach' & 'EventListener'
square.forEach( id => {
    id.addEventListener('mouseup', () => {
        // If the id of div equals the hit position then we get + 1 point
        if(id.id === hitPosition) {
            result = result + 1 
            // 'textContent' displays the result in the browser
            score.textContent = result
        }
    })
})


function moveMole() {
    let timerId = null
    // La grenouille change de place toutes les 1000 ms (1 sec)
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

// Le 'timer' est en secondes
let timerId = setInterval(countDown, 1000)