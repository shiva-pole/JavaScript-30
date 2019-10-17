const header = document.querySelector('.hero').children[0];

const onMouseMove = (evt) => {

    header.style.textShadow = `${evt.offsetX}px ${evt.offsetY}px 0 rgba(0, 0, 0, 1)`;
};

document.addEventListener('mousemove', onMouseMove);