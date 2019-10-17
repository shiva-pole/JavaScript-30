let images = document.querySelectorAll('.slide-in');

document.addEventListener("scroll", (evt) => {

    images.forEach(img => {
        let bounds = img.getBoundingClientRect();
        let top = bounds.top;
        let bottom = bounds.bottom;
        if (top >= 0 && bottom <= window.innerHeight) {
            img.classList.add('active')
        } else {
            img.classList.remove('active')
        }
    });

});