const movieUrl = 'http://www.omdbapi.com/?t=Boogie Nights&apikey=39ddfcee'

getData(movieUrl)

function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
}

function buildMovieCard() {

}

function createElement(element) {
    return document.createElement(element)
}

function appendElement(parent, element) {
    return parent.appendChild(element)
}

function prependElement(parent, element) {
    return parent.prepend(element)
}

function addAttr(element, attr, string) {
    return element.setAttribute(attr, string)
}

function clearContainers(element) {
    return element.innerHTML = ''
}

function addClass(element, string) {
    return element.classList.add(string)
}
