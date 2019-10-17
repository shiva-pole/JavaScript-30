const mainNav = document.getElementById('main');
const logo = mainNav.querySelector('.logo');
const header = document.querySelector('header');


document.addEventListener('scroll', (e) => {
    if (window.scrollY > header.clientHeight) {
        console.log('reached');
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
})