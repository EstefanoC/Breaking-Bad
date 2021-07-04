let xml = require('xmlhttprequest').XMLHttpRequest;


// Fetch Data
export const fetchData = async ( urlApi:string ) => {
    return new Promise((resolve, reject) => {
        const http = new xml();

        http.open('GET', urlApi, true)

        http.onreadystatechange = () => {
            if (http.readyState === 4) {
                (http.status === 200)
                    ? resolve(JSON.parse(http.responseText))
                    : reject(new Error('Error'))
            }
        }
        http.send()
    })
}