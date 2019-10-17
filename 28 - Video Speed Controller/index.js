const video = document.querySelector('.flex');

video.addEventListener('playing', function (evt) {
    console.log('video playing..');
});

const speedDiv = document.querySelector('.speed');
const speedBarDiv = document.querySelector('.speed-bar');


speedDiv.addEventListener('mousemove', function (e) {
    let percent = (e.pageY - speedDiv.offsetTop) / speedDiv.clientHeight;
    speedBarDiv.style.height = `${percent * 100}%`;
    let min = 0.4;
    let max = 4;
    let playbackRate = (max - min) * percent + min;
    speedBarDiv.textContent = parseFloat(playbackRate).toFixed(2) + 'x';
    video.playbackRate = playbackRate;
})