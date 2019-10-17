const panels = document.querySelectorAll('.panel');

panels.forEach(p => p.addEventListener('click', (evt) => {
    p.classList.toggle('open');
}))