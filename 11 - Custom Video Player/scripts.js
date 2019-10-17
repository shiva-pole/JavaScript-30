const playerEl = document.querySelector('.player');
const videoEl = playerEl.querySelector('.player__video');
const togglePlayEl = playerEl.querySelector('.toggle');
const volumeEl = playerEl.querySelector('input[name="volume"]');
const playbackRateEl = playerEl.querySelector('input[name="playbackRate"]');
const skipButtons = playerEl.querySelectorAll('.skip');
let videoPlaying = false;

//toggle play
const togglePlay = (evt) => {
    if (videoPlaying) {
        videoEl.pause();
        evt.target.innerHTML = '►'
    } else {
        videoEl.play();
        evt.target.innerHTML = '❚ ❚'
    }
    videoPlaying = !videoPlaying;
};

//adjust volume
const adjustVolume = (evt) => {
    videoEl.volume = evt.target.value;
}

//adjust playback rate
const adjustRate = (evt) => {
    videoEl.playbackRate = Number(evt.target.value);
}

//skip forward & backward
const skip = (evt) => {
    videoEl.currentTime += Number(evt.target.getAttribute("data-skip"));
}

//on Progress
const onProgress = (evt) => {

};

//attach events
togglePlayEl.addEventListener('click', togglePlay);
volumeEl.addEventListener('change', adjustVolume);
playbackRateEl.addEventListener('change', adjustRate);
skipButtons.forEach(btn => btn.addEventListener('click', skip));
videoEl.addEventListener('progress', onProgress);