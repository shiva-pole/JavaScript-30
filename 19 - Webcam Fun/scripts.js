const videoEl = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(
    stream => {
        videoEl.srcObject = stream;
        videoEl.play();
    }
).catch(err => {
    console.log("error", err);
});

function takePhoto() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(videoEl, 0, 0, width, height);
}
