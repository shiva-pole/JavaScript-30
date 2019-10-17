const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;

function onMoleClick(evt) {
    score++;
    scoreBoard.textContent = score;
}

function startGame() {
    setInterval(() => {
        let randomIdx = Math.floor(Math.random() * holes.length);
        holes[randomIdx].classList.add('up');
        setTimeout(() => holes[randomIdx].classList.remove('up'), 750)
    }, 750);
}


moles.forEach(mole => mole.addEventListener('click', onMoleClick));