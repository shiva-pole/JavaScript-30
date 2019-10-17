const clock = document.querySelector('.clock');
const hand = clock.querySelectorAll('.hand');
const hourHand = clock.querySelector('.hour-hand');
const minHand = clock.querySelector('.min-hand');
const secondHand = clock.querySelector('.second-hand');

hand.forEach(h => h.style.transformOrigin = `100%`);

const updateTime = () => {
    let now = new Date();
    console.log(now);
    let hours = now.getHours();
    hours = hours > 12 ? hours - 12 : hours;
    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    let hDeg = (hours + mins / 60) * 30 + 90;
    let mDeg = (mins + seconds / 60) * 6 + 90;
    let sDeg = seconds * 6 + 90;
    hourHand.style.transform = `rotate(${hDeg}deg)`;
    minHand.style.transform = `rotate(${mDeg}deg)`;
    secondHand.style.transform = `rotate(${sDeg}deg)`;
}

setInterval(() => {
    updateTime();
}, 1000)
