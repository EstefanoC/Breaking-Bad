let xml = require('xmlhttprequest').XMLHttpRequest
const API = 'https://www.breakingbadapi.com/api/'
const characters = 'characters'
const episodes = 'episodes'
const quotes = 'quotes'

let fetchData = (urlApi, callback) => {
    let http = new xml();

    http.open('GET', urlApi, true)

    http.onreadystatechange = (e) => {
        if (http.readyState === 4) {
            if (http.status === 200) {
                return callback(null, JSON.parse(http.responseText))
            } else {
                const error = new Error( 'Error '+ urlApi )
                return callback(error, null)
            }
        }
    }

    http.send()
}

fetchData(`${API}${characters}`, (error1, data1) => {
    if (error1) {
        return console.error(error1);
    } else {
        fetchData(`${API}${episodes}`, (error2, data2) => {
            if (error2) {
                return console.error(error2);
            } else {
                fetchData(`${API}${quotes}`, (error3, data3) => {
                    if (error3) {
                        return console.error(error3);
                    } else {
                        console.log(data1[0]);
                        console.log(data1.length);
                        console.log(data2[0]);
                        console.log(data2.length);
                        console.log(data3[0]);
                        console.log(data3.length);;
                    }
                })
            }
        })
    }
})