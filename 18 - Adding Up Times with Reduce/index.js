const videos = document.querySelector('.videos');
let seconds = Array.from(videos.children).map(element => element.getAttribute("data-time")).reduce((total, curr) => {
    let min = parseFloat(curr.split(':')[0]);
    let sec = parseFloat(curr.split(':')[1]);
    return total + sec + min * 60;
}, 0);

let h = Math.floor(seconds / (60 * 60));
let m = Math.floor((seconds % 3600) / 60);
let s = Math.floor((seconds % 3600) % 60);

console.log(`${h} ${m} ${s}`);