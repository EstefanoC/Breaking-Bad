let xml = require('xmlhttprequest').XMLHttpRequest
const API = 'https://www.breakingbadapi.com/api/'
const characters = 'characters'
const episodes = 'episodes'
const quotes = 'quotes'
const random = 'character/random'

const fetchData = async (urlApi) => {
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

const fetchDataAsync = async (url) => {
    try {
        let data1 = await fetchData(`${url}${characters}`)
        let data2 = await fetchData(`${url}${episodes}`)
        let data3 = await fetchData(`${url}${quotes}`)
        let data4 = await fetchData(`${url}${random}`)

        console.log(data4[0]);
    } catch (err) {
        console.error(err);
    }

    // LLamada a varios await a la vez
    // try {
    //     const [character, episode, quote] = await Promise.all([
    //         data1 = await fetchData(`${url}${characters}`),
    //         data2 = await fetchData(`${url}${episodes}`),
    //         data3 = await fetchData(`${url}${quotes}`)
    //     ])

    //     console.log(character[0]);
    //     console.log(episode[0]);
    //     console.log(quote[0]);
    // } catch (err) {
    //     console.error(err);
    // }

}


fetchDataAsync(API)