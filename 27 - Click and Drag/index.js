const slider = document.querySelector('.items');
let mouseDown = false;
let scrollXPos = 0;
let startX = 0;

slider.addEventListener('mousedown', function (evt) {
    console.log('mousedown');
    mouseDown = true;
    scrollXPos = slider.scrollLeft;
    startX = evt.pageX - slider.offsetLeft;
    this.classList.add('active');
})

slider.addEventListener('mouseup', function (evt) {
    console.log('mouseup');
    mouseDown = false;
    this.classList.remove('active');
})


slider.addEventListener('mouseleave', function (evt) {
    console.log('mouseleave');
    mouseDown = false;
    this.classList.remove('active');
})


slider.addEventListener('mousemove', function (evt) {
    console.log('mousemove started');
    if (!mouseDown) {
        return;
    }
    let x = evt.pageX - slider.offsetLeft;
    console.log(x);
    console.log(scrollXPos);
    slider.scrollLeft = scrollXPos - 3 * (x - startX);
    console.log(slider.scrollLeft)
})
