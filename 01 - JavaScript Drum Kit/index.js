const onkeypress = (evt) => {
    let keyCode = evt.keyCode;
    let divEl = document.querySelector("div[data-key='" + keyCode + "']");
    let audioEl = document.querySelector("audio[data-key='" + keyCode + "']");
    if (divEl && audioEl) {
        divEl.classList.add('playing');
        audioEl.play();
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
    })
});
document.addEventListener('keypress', onkeypress);