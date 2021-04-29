let xml = require('xmlhttprequest').XMLHttpRequest
const API = 'https://www.breakingbadapi.com/api/'
const characters = 'characters'
const episodes = 'episodes'
const quotes = 'quotes'

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const http = new xml();

        http.open('GET', urlApi, true)

        http.onreadystatechange = (e) => {
            if (http.readyState === 4) {
                (http.status === 200)
                    ? resolve(JSON.parse(http.responseText))
                    : reject(new Error('Error'))
            }
        }
        http.send()
    })
}

fetchData(`${API}${characters}`)
    .then(data => {
        console.log(data[0]);
        return fetchData(`${API}${episodes}`)
    })
    .then(data => {
        console.log(data[0]);
        return fetchData(`${API}${quotes}`)
    })
    .then(data => {
        console.log(data[0]);
    })
    .catch(err => {
        console.error(err);
    })