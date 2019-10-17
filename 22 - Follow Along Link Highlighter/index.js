// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const links = Array.from(document.links);
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);


const highlightLink = (e) => {
    let bounds = e.target.getBoundingClientRect();


    highlight.style.height = bounds.height + 'px';
    highlight.style.width = bounds.width + 'px';
    highlight.style.transform = `translate(${bounds.x + window.scrollX}px,${bounds.y + window.scrollY}px)`;
};

links.forEach(link => link.addEventListener('mouseenter', highlightLink));