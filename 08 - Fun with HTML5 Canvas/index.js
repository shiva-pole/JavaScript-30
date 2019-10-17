let canvas = document.getElementById("draw")
let cx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.hight = window.innerHeight;
let drawing = false;
let lineWidth = 1;
let prevX = 0;
let prevY = 0;
cx.lineJoin = "round";
cx.lineCap = 'round';
let hue = 0;
const startDrawing = (evt) => {
    console.log("started drawing");
    drawing = true;
    [prevX, prevY] = [evt.pageX, evt.pageY]
};

const continueDrawing = (evt) => {
    if (!drawing) {
        return false;
    }
    cx.beginPath();

    console.log(evt.pageX);
    console.log(evt.pageY);
    cx.moveTo(prevX, prevY);
    cx.lineTo(evt.pageX, evt.pageY);
    cx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    if (lineWidth == 100) {
        lineWidth = 1;
    } else {
        lineWidth += 1;
    }
    hue++;
    if (hue == 360) {
        hue = 0;
    }
    cx.lineWidth = lineWidth;
    cx.stroke();
    [prevX, prevY] = [evt.pageX, evt.pageY]
};

const stopDrawing = (evt) => {
    console.log("stopped drawing");
    drawing = false;
};

document.addEventListener('mousedown', startDrawing);

document.addEventListener('mousemove', continueDrawing);

document.addEventListener('mouseup', stopDrawing);