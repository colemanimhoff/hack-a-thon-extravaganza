console.log('test')
const movieUrl = 'http://www.omdbapi.com/?t=Jaws&apikey=39ddfcee&'

getData(movieUrl)

function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
}
