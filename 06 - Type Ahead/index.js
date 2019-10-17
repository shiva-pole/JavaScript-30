const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
const suggestionsEl = document.querySelector('.suggestions');
searchInput.addEventListener('input', (evt) => {
    fetch(endpoint)
        .then((resp) => resp.json())
        .then(json => {
            console.log(JSON.stringify(json));
            suggestionsEl.innerHTML = generateHtml(searchInput.value.toLowerCase(), json)
        }).catch(err => {
            console.log(JSON.stringify(err))
        })
})

const generateHtml = (q, data) => {
    let html = '';
    data.filter(d => d.city.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)).forEach(element => {
        let city = element.city.replace(new RegExp(q, 'gi'), "<mark class='hl'>" + q + "</mark>");
        let state = element.state.replace(new RegExp(q, 'gi'), "<mark class='hl'>" + q + "</mark>");

        html += `<li><span>${city}, ${state} </span><span class="population">${Number(element.population).toLocaleString('en-us')}</span></li > `;
    });
    return html;
}