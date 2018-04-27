const movieUrl = 'http://www.omdbapi.com/'
const emojis = document.querySelectorAll('.dropdown-item')
const text = document.querySelector('#text')
const chillButton = document.querySelector('#chill')
let searchParam

let sadMovies = [
    'Schindler’s List', 
    'Atonement', 
    'The Land Before Time ', 
    'The House Of Small Cubes', 
    'Milk', 
    'Welcome to the Dollhouse', 
    'The Road', 
    'Fruitvale Station', 
    'Dead Poets Society', 
    'Extremis'
]

let dramaMovies = [
    'The Loft', 
    'J. Edgar ', 
    'The Negotiator', 
    'Michael Clayton', 
    'The Interview', 
    'Gangs of New York', 
    'Casino', 
    'Goodfellas', 
    'The Godfather ', 
    'The Revenant'
]

let romanticMovies = [
    'Adventureland', 
    'The Social Network', 
    'Eternal Sunshine of the Spotless Mind', 
    'Clueless', 
    'The Graduate', 
    'Drive', 
    'Lost in Translation', 
    'Brokeback Mountain', 
    'Jerry Maguire', 
    'The Wedding Singer'
]

let actionMovies = [
    'The Avengers', 
    'Mission Impossible 2', 
    'Mission Impossible: Ghost Protocol', 
    'Desperado', 
    'Braveheart', 
    'Resevoir Dogs', 
    'Butch Cassidy and the Sundance Kid', 
    'Terminator 2: Judgement Day', 
    'Ip Man', 
    'Black Hawk Down', 
    'Gladiator'
]

let chickFlickMovies = [
    'Legally Blonde', 
    'Grease', 
    'Love and Honor', 
    'Mean Girls', 
    'The Breakfast Club', 
    '10 Things I Hate About You', 
    'Moonrise Kingdom', 
    'Charlie St. Cloud', 
    'Can\'t Buy Me Love', 
    'She\'s All That']

let comedyMovies = [
    'Tommy Boy', 
    'Planes, Trains and Automobiles', 
    'The Trip', 'The Breakfast Club', 
    'Hot Rod',
    'Happy Gilmore', 
    'Zoolander', 
    'Clerks', 
    'Amelie']

let scaryMovies = [
    'The Babadook', 
    'Hellraiser', 
    'The Nightmare', 
    'It Follows', 
    'The Descent', 
    'The Wailing', 
    'Gerald’s Game', 
    'The Sixth Sense', 
    'Cube', 
    'Veronica'
]

chillButton.addEventListener('click', function(event) {
    parseEmoji(event)
    buildMovieUrl(searchParam)
})

function randomIndex(number) {
    return Math.floor(Math.random() * number)
}

function buildMovieUrl(searchParam) {
    console.log(searchParam)
    // const key = '39ddfcee'
    // let currentMovie = searchParam[randomIndex(searchParam.length)].replace(/[' ']/g, '+')
    // console.log(currentMovie)
    // return movieUrl.concat(`?t=${currentMovie}&apikey=${key}`)
}

function getData(url) {
    return fetch(url)
    .then(response => response.json())
}

function parseEmoji() {
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function (event) { 
            if (event.target.id === 'sad') {
               searchParam = sadMovies
            } else if (event.target.id === 'detective') {
            searchParam = dramaMovies
            } else if (event.target.id === 'laughing') {
                searchParam = comedyMovies
            } else if (event.target.id === 'bomb') {
                searchParam = actionMovies
            } else if (event.target.id === 'love') {
                searchParam = romanticMovies
            } else if (event.target.id === 'ghost') {
                searchParam = scaryMovies
            } else {
                alert('Get a roooooooooom!')
            }
        })
    })
}

function buildMovieCard(movie) {
    const movieContainer = document.querySelector('.movies')
    const movieCardContainer = createElement('div')
    addClass(movieCardContainer, 'card')
    addAttr(movieCardContainer, 'style', 'width: 33vw;')
    addAttr(movieCardContainer, 'style', 'height: 15vh;')
    appendElement(movieContainer, movieCardContainer)
    const moviePoster = createElement('img')
    addAttr(moviePoster, 'src', movie.Poster)
    addClass(moviePoster, 'card-img-top')
    appendElement(movieCardContainer, moviePoster)
    const cardBody = createElement('div')
    addClass(cardBody, 'card-body')
    appendElement(movieCardContainer, cardBody)
    const movieTitle = createElement('h5')
    addClass(movieTitle, 'card-title')
    addText(movieTitle, movie.Title)
    appendElement(cardBody, movieTitle)
    const movieCaption = createElement('span')
    addText(movieCaption, `Genre: ${movie.Genre}, Rated ${movie.Rated}`)
    appendElement(cardBody, movieCaption)
    const moviePlot = createElement('p')
    addText(moviePlot, movie.Plot)
    addClass(moviePlot, 'card-text')
    appendElement(cardBody, moviePlot)
    const movieButton = createElement('a')
    addClass(movieButton, 'btn')
    addClass(movieButton, 'btn-primary')
    addText(movieButton, 'Review')
    appendElement(cardBody, movieButton)
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

function addAttr (element, attr, value) {
    return element.setAttribute(attr, value)
}

function addText (element, string) {
    return element.textContent = string
}

function clearContainers(element) {
    return element.innerHTML = ''
}

function addClass(element, string) {
    return element.classList.add(string)
}
