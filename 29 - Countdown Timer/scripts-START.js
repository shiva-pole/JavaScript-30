const timerButtons = document.querySelectorAll('.timer__button');
const customForm = document.getElementById('custom');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
let interval;

const setTimerViaButton = evt => {
    let time = parseInt(evt.target.dataset.time);
    setTimer(time);
}

const setTimer = time => {
    if (interval) {
        clearInterval(interval);
    }
    setTimeLeft(time);
    setEndTime(time);
    time -= 1;
    interval = setInterval(() => {
        setTimeLeft(time);
        if (time == 0) {
            clearInterval(interval);
        }
        time -= 1;
    }, 1000);
}

const setTimeLeft = (time) => {
    let formattedTime = formatTime(time)
    displayTimeLeft.textContent = formattedTime;
}

const setEndTime = (time) => {
    let now = Date.now();
    let end = new Date(now + time * 1000);
    let endHours = end.getHours();
    displayEndTime.textContent = `Be Back At ${endHours > 12 ? endHours - 12 : endHours}:${end.getMinutes()}`;
}

const formatTime = (time) => {
    let result = [];
    let mins = Math.round(time / 60);
    let secs = time % 60;
    result.push(mins < 10 ? '0' + mins : '' + mins);
    result.push(secs < 10 ? '0' + secs : '' + secs);
    return result.join(':');
}


function setTimerViaForm(evt) {
    evt.preventDefault();
    console.log(customForm);
    let time = parseInt(this.minutes.value) * 60;
    // let time = parseInt(customForm);
    setTimer(time);
}


timerButtons.forEach(t => t.addEventListener('click', setTimerViaButton));
customForm.addEventListener('submit', setTimerViaForm)