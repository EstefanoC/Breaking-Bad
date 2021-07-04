// Data
import { fetchData } from "@js/data/async";

// Component
import { templateCard, templateQuotes } from "./template";
import { limitAndOffset, intersection, visibility, resetValueIntersection } from "./intersection";
import { errorPrint } from "@js/helpers/error";
import './form'


// Api
const APICharacters:string = 'https://www.breakingbadapi.com/api/characters';
const APIQuotes:string = 'https://www.breakingbadapi.com/api/quotes';
const APIEpisodes:string = 'https://www.breakingbadapi.com/api/episodes';

// data cache & count load
let countCharacters:number = 0
let imgQuotes:string
let separateStatus:boolean = true
let limitData:number = 62


const fetchDataAsync = async (url:string, type:string, search:string = '') => {
  try {
    let data:any   = await fetchData(`${url}${(type === 'characters' || type === 'Better+Call+Saul' || type === 'Breaking+Bad' || type === 'episodes' || type === 'episodesCharacters' || search === '' ) ? limitAndOffset(9, 0, type) : '' }${((type === 'episodesSearch' || type === 'search') && search) ? `?name=${search}` : '' }`);
    (search && type == 'search') ? imgQuotes = data[0].img : loopData(data, type)
  } catch (err) {
      visibility('.spring-spinner', 0, true)
      if (type === 'characters') {
      visibility('.spring-spinner', 0, true)
    } else if (type === "search") {
      errorPrint("characters-quotes", err)
    }
  }
}

// fetchDataAsync(APIEpisodes, 'characters')
fetchDataAsync(APICharacters, 'characters')


// Loop print Data
let content:HTMLUnknownElement = document.getElementById('characters-content')
let contentQuotes:HTMLUnknownElement = document.getElementById('characters-quotes')
let categoryBb:any = document.getElementById("form-select-bb")
let categoryBcs:any = document.getElementById("form-select-bcs")

async function loopData(data:Array<{name:string, img:string, nickname:string, occupation:Array<string>, category:string, portrayed:string, status:string}> & Array<{ author:string, quote:string, quote_id:number, series:string }> & Array<{characters:string}>, type:string) {
  if (type === 'characters' || type === 'Better+Call+Saul' || type === 'Breaking+Bad') {
    for (let i = 0; i < data.length; i++) {
      let elementNode:HTMLUnknownElement = document.createElement("article")
      elementNode.setAttribute("class", `card-characters off character${i}`)
      elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status)
      content.appendChild(elementNode)

      // Intersection
      if (i  === data.length - 1) {
        intersection(elementNode, type)
      }

      // Click Info
      elementNode.addEventListener("click", () => {
        if (elementNode.className.includes("on")) {
          elementNode.classList.remove("on")
          elementNode.classList.add("off")
        } else {
          elementNode.classList.remove("off")
          elementNode.classList.add("on")
        }
      })

      // Call Quotes
      countCharacters++
      if (countCharacters === limitData) {
        if (type === 'characters') {
          fetchDataAsync(APIQuotes, 'quotes')
        } else {
          fetchDataAsync(`${APIQuotes}?series=${type}`, 'quotes')
        }

        visibility('.spring-spinner', 0, true)
        if (separateStatus) {
          visibility('.separator', 1)
        }
      }
    }
  } else if (type === 'quotes') {
    let quotes: Array<string> = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].author === 'Jimmy McGill') {
      } else if (quotes.includes(data[i].author)) {
        let el:HTMLUnknownElement = document.createElement("q")
        let target:HTMLUnknownElement = document.querySelector(`.quotes-${data[i].author.slice(0, data[i].author.indexOf(' '))}`).querySelector('.card-content')

        el.innerHTML = data[i].quote
        target.appendChild(el)
      } else {
        let elementNode:HTMLUnknownElement = document.createElement("article")

        if (data[i].author === 'Skyler White') {
          await fetchDataAsync(APICharacters, 'search', data[i].author)
        } else {
          await fetchDataAsync(APICharacters, 'search', data[i].author.slice(data[i].author.indexOf(' '), data[i].author.length))
        }

        elementNode.setAttribute("class", `card-quotes quotes-${data[i].author.slice(0, data[i].author.indexOf(' '))}`)
        elementNode.innerHTML = templateQuotes( data[i].author, imgQuotes, data[i].quote, data[i].quote_id, data[i].series )
        contentQuotes.appendChild(elementNode)

        quotes.push(data[i].author)
      }
    }
  } else if (type === 'episodes') {
    countCharacters = 0
    limitData = data[0].characters.length

    if (data[0].series === "Better Call Saul") {
      categoryBcs.checked = true
      categoryBb.checked = false
    } else {
      categoryBcs.checked = false
      categoryBb.checked = true
    }

    for (let i = 0; i < data[0].characters.length; i++) {
      if (data[0].characters[i] === "" || data[0].characters[i] === "a fly" || data[0].characters[i] === "Don Eladio") {
        break
      }
      await fetchDataAsync(APICharacters, 'episodesSearch', (correctName(data[0].characters[i])) ? correctName(data[0].characters[i]) : data[0].characters[i])
    }
  } else if (type === 'episodesSearch') {
    let elementNode:HTMLUnknownElement = document.createElement("article")
    elementNode.setAttribute("class", `card-characters off character${data[0].name}`)
    elementNode.innerHTML = templateCard(data[0].name, data[0].img, data[0].nickname, data[0].occupation, data[0].category, data[0].portrayed, data[0].status)
    content.appendChild(elementNode)

    // Click Info
    elementNode.addEventListener("click", () => {
      if (elementNode.className.includes("on")) {
        elementNode.classList.remove("on")
        elementNode.classList.add("off")
      } else {
        elementNode.classList.remove("off")
        elementNode.classList.add("on")
      }
    })

    // Call Quotes
    countCharacters++
    if (countCharacters === limitData) {
      visibility('.spring-spinner', 0, true)
    }
  }
}

// Call Fetch
export function call(type:string) {
  (type === 'characters') ? fetchDataAsync(APICharacters, 'characters') : fetchDataAsync(`${APICharacters}?category=${type}`, type)
}

// Call Fetch Quotes
export function callQuotes(filter:boolean = false, type:string = '') {
  // contentQuotes.innerHTML = ''
  if (filter && type) {
    countCharacters = 0;
    (countCharacters < 12) ? (fetchDataAsync(`${APIQuotes}?series=${type}`, 'quotes'), separateStatus = false) : null
    countCharacters =  12
  } else {
    (countCharacters < limitData) ? (fetchDataAsync(APIQuotes, 'quotes'), separateStatus = false) : null
    countCharacters =  ++limitData
  }
  visibility('.spring-spinner', 0, true)
}

export function filterSeries(filter:string, quantity:number, separate:boolean = true) {
  cleanContent(filter);
  limitData = quantity;
  countCharacters = 0;
  separateStatus = separate;
  fetchDataAsync(`${APICharacters}?category=${filter}`, filter)
}

export function filterEpisode(type:string, episode:string) {
  content.innerHTML = '';
  contentQuotes.innerHTML = '';
  fetchDataAsync(`${APIEpisodes}/${episode}`, type)
}

export function cleanContent(type:string = '', resetAll:boolean = false, separate:boolean = true) {
  content.innerHTML = '';
  contentQuotes.innerHTML = '';
  limitData = 62;
  countCharacters = 0;
  separateStatus = separate
  if (type) {
    visibility('.spring-spinner', 1)
    visibility('.separator', 0)
    resetValueIntersection(type);
    if (resetAll) {
      fetchDataAsync(APICharacters, type)
    }
  }
}

function correctName(name:string) {
  switch (name) {
    case 'Hank Schrader':
      return "Henry Schrader"
    case "Krazy-8":
      return "Domingo Molina"
    case "Ken Wins":
      return "Ken"
    case "Elliott Schwartz":
      return "Elliot Schwartz"
    case "Gretchen Swartz":
      return "Gretchen Schwartz"
    case "Badger":
      return "Brandon Mayhew"
    case "Ted Beneke":
      return "Theodore Beneke"
    case "Combo":
      return "Christian Ortgea"
    case "The cousins":
      return "Marco & Leonel Salamanca"
    case "White White Jr.":
      return "Holly White"
    case "Steve Gomez":
      return "Steven Gomez"
    case "Jimmy McGill":
      return "Saul Goodman"
    case "Mike Erhmantraut":
      return "Mike Ehrmantraut"
    case "Kim Wexler":
      return "Kimberly Wexler"
    case "Chuck McGill":
      return "Charles McGill"
    case "Nacho Varga":
      return "Ignacio Varga"
  }
}