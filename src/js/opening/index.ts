// Data
import { fetchData } from '@js/data/async'

// Template
import  { cardFront } from '@js/opening/template'


// Animation card
let card: HTMLUnknownElement = document.getElementById('card-content')

card.addEventListener('click', () => {
  card.style.animation = '1.5s rotate cubic-bezier(.35,.96,1,.85) forwards'
})


// Call random character
const API:string = 'https://www.breakingbadapi.com/api/character/random'

const fetchDataAsync = async (url:string) => {
    try {
        let data:any = await fetchData(url);
        printTemplate(cardFront(data[0].name, data[0].img, data[0].nickname, data[0].occupation, data[0].category, data[0].status));
    } catch (err) {
        console.error(err);
    }
}

fetchDataAsync(API)

function printTemplate(content:string) {
  const card:Element = null || document.getElementById('card-front');
  card.innerHTML = content;
};