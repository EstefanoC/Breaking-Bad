// Data
import { fetchData } from "@js/data/async";

// Component
import { templateCard, templateQuotes } from "./template";
import { errorPrint } from "@js/helpers/error";
import { messagePrint } from "@js/helpers/message";
import { visibility } from "./intersection";
import { callQuotes, cleanContent, filterEpisode, filterSeries } from ".";


// Fetch
const APICharacters:string = 'https://www.breakingbadapi.com/api/characters';
const APIQuote:string = 'https://www.breakingbadapi.com/api/quote';
const APIEpisode:string = 'https://www.breakingbadapi.com/api/episodes'

const fetchDataAsync = async (url:string, filter:string, type:string, img:string = '', quantity:boolean = false) => {
  try {
      let data:any = await fetchData(`${url}${filter}`);
      switch (type) {
        case 'characters':
          if (data.length <= 0) {
            messagePrint('characters-search', 'nothing was found')
            visibility('.spring-spinner', 0, true)
          } else {
            printData(data, type)
          }
          break;
        case 'quotes':
          printData(data, type, img)
          break;
        case 'onlyQuotes':
          printData(data, type)
          break;
        case 'onlyCharacters':
          printData(data, type)
          break;
        case 'Better+Call+Saul':
          printData(data, type)
          break;
      }
  } catch (err) {
    visibility('.spring-spinner', 0, true)
    if (type === 'characters') {
      errorPrint("characters-content", err)
    } else if (type === "quotes") {
      errorPrint("characters-quotes", err)
    }
  }
}


// Form
const formFilter:HTMLUnknownElement = document.getElementById('form-filter');
const formName:any = document.getElementById('form-name');
let content:HTMLUnknownElement = document.getElementById("characters-search")
let contentQuotes:HTMLUnknownElement = document.getElementById("characters-quotes-search")
let contentCharacters:HTMLUnknownElement = document.getElementById("characters-search")
let displayCharacters:any = document.getElementById("form-type-characters")
let displayQuotes:any = document.getElementById("form-type-quotes")
let categoryBb:any = document.getElementById("form-select-bb")
let categoryBcs:any = document.getElementById("form-select-bcs")
let searchActive:boolean = false
let episodeActive:boolean = false


formFilter.addEventListener("submit", (e) => {
  e.preventDefault();
  let val:string = formName.value.replace(/ /g, '+').toLocaleLowerCase();

  if (displayCharacters.checked && displayQuotes.checked) {
    if ( val === '' || val == null || val.length <= 0) {
      searchActive = false
      visibility('.separator', 1)
      visibility('.spring-spinner', 0, true)
      visibility('#characters-search', 0, true)
      visibility('#characters-quotes-search', 0, true)
      setTimeout(() => {
        visibility('#characters-quotes', 1, false, 'grid')
        visibility('#characters-content', 1, false, 'grid')
      }, 400);
    } else if ( val.length > 0 ) {
      searchActive = true
      content.innerHTML = ''
      contentQuotes.innerHTML = ''

      visibility('#characters-search', 1, false, 'grid')
      visibility('#characters-content', 0, true)
      visibility('#characters-quotes', 0, true)
      visibility('.separator', 0, true)
      visibility('#characters-quotes-search', 1)
      visibility('.spring-spinner', 0, true)
      fetchDataAsync(APICharacters, `?name=${val}`, 'characters')
    }
  } else if (displayQuotes.checked && !displayCharacters.checked) {
    searchActive = true
    content.innerHTML = ''
    contentQuotes.innerHTML = ''

    visibility('#characters-search', 1, false, 'grid')
    visibility('#characters-content', 0, true)
    visibility('#characters-quotes', 0, true)
    visibility('.separator', 0, true)
    visibility('#characters-quotes-search', 1, false, 'grid')
    visibility('.spring-spinner', 1)
    fetchDataAsync(APICharacters, `?name=${val}`, 'onlyQuotes')
  } else if (displayCharacters.checked && !displayQuotes.checked) {
    searchActive = true
    content.innerHTML = ''
    contentQuotes.innerHTML = ''

    visibility('#characters-content', 0, true)
    visibility('#characters-quotes', 0, true)
    visibility('.separator', 0, true)
    visibility('#characters-quotes-search', 0, true)
    visibility('#characters-search', 1, false, 'grid')
    visibility('.spring-spinner', 1)
    fetchDataAsync(APICharacters, `?name=${val}`, 'onlyCharacters')
  }
})

formFilter.addEventListener("change", (e:any) => {
  let { checked, value } = e.target

  if (parseInt(value)) {
    formEpisode(value)
  } else {
    formCategory(checked, value)
    formType(checked, value)
  }
})

// Type filter
function formType(checked:boolean, value:string) {
  if (checked) {
    if (value === 'characters') {
      (displayCharacters.checked) ? visibility('.separator', 1) : visibility('.separator', 0, true)
      if (searchActive) {
        visibility('#characters-content', 0, true)
        visibility('#characters-search', 1, false, 'grid')
      } else {
        visibility('#characters-content', 1, false, 'grid')
        visibility('#characters-search', 0, true)
      }
    } else if (value === 'quotes') {
      if (episodeActive) {
        return displayQuotes.checked = false
      }
      (displayCharacters.checked) ? visibility('.separator', 1) : visibility('.separator', 0, true)
      if (searchActive) {
        visibility('#characters-quotes', 0, true)
        visibility('#characters-quotes-search', 1, false, 'grid')
        visibility('.spring-spinner', 0, true)
      } else {
        callQuotes()
        visibility('#characters-quotes', 1, false, 'grid')
        visibility('#characters-quotes-search', 0, true)
      }
    }
  } else {
    if (value === 'characters') {
      if (!displayQuotes.checked) {
        displayCharacters.checked = true
        return;
      }
      (displayQuotes.checked) ? visibility('.separator', 0, true) : visibility('.separator', 1)
      callQuotes()
      visibility('#characters-content', 0, true)
      visibility('#characters-search', 0, true)
    } else if (value === 'quotes') {
      if (!displayCharacters.checked) {
        displayQuotes.checked = true
        return;
      }
      (displayCharacters.checked) ? visibility('.separator', 0, true) : visibility('.separator', 1)
      visibility('#characters-quotes', 0, true)
      visibility('#characters-quotes-search', 0, true)
    }
  }
}

// Form Category
function formCategory(checked:boolean, value:string) {
  let bb = 'Breaking+Bad'
  let bcs = 'Better+Call+Saul'

  if (checked) {
    if (categoryBb.checked && categoryBcs.checked) {
      (!displayCharacters.checked) ? callQuotes() : null
      return (!displayQuotes.checked) ? cleanContent('characters', true, false) : cleanContent('characters', true)
    }
  } else {
    if (value === bcs) {
      if (!categoryBb.checked) {
        categoryBcs.checked = true
        return;
      }
      (!displayCharacters.checked) ? callQuotes(true, bb) : null
      return (!displayQuotes.checked) ? filterSeries(bb, 52, false) : filterSeries(bb, 52)
    } else if (value === bb) {
      if (!categoryBcs.checked) {
        categoryBb.checked = true
        return;
      }
      (!displayCharacters.checked) ? callQuotes(true, bcs) : null
      return (!displayQuotes.checked) ? filterSeries(bcs, 12, false) : filterSeries(bcs, 12)
    }
  }
}

// Form Episode
function formEpisode(value:string) {
  if (parseInt(value) === 0) {
    episodeActive = false
    categoryBb.checked = true
    categoryBcs.checked = true
    displayQuotes.checked = true
    visibility('#characters-quotes', 1, false, 'grid')
    return cleanContent('characters', true, true)
  } else if (parseInt(value)) {
    episodeActive = true
    displayCharacters.checked = true
    displayQuotes.checked = false
    visibility('#characters-search', 0, true)
    visibility('#characters-content', 1, false, 'grid')
    visibility('#characters-quotes', 0, true)
    visibility('.separator', 0, true)
    visibility('#characters-quotes-search', 0, true)
    visibility('.spring-spinner', 1)
    return filterEpisode('episodes', value)
  }
}

// Print data
async function printData(data:Array<{name:string, img:string, nickname:string, occupation:Array<string>, category:string, portrayed:string, status:string}> & Array<{ author:string, quote:string, quote_id:number, series:string }>, type:string, img:string = '') {
  if (type === 'characters') {
    let characterContainer:Array<string> = []
    let characterImg:Array<string> = []

    for (let i = 0; i < data.length; i++) {
      let elementNode:HTMLUnknownElement = document.createElement("article")

      elementNode.setAttribute("class", `card-characters off character${i}`)
      elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status)
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

      characterContainer.push(data[i].name)
      characterImg.push(data[i].img)
    }

    // Call Quotes
    if (characterContainer.length === data.length) {
      characterContainer.map( (val, i, all) => {
        fetchDataAsync(APIQuote, `?author=${data[i].name.replace(/ /g, '+').toLocaleLowerCase()}`, 'quotes', data[i].img)
      })
    }
  visibility('.spring-spinner', 0, true)
  } else if (type === "quotes") {
    let content:HTMLUnknownElement = document.getElementById('characters-quotes-search')
    let quotes: Array<string> = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].author === 'Jimmy McGill') {
      } else if (quotes.includes(data[i].author)) {
        let el:HTMLUnknownElement = document.createElement("q")
        let target:HTMLUnknownElement = document.querySelector(`.quotes-${data[i].author.slice(0, data[i].author.indexOf(' '))}`).querySelector('.card-content')

        el.innerHTML = data[i].quote
        target.appendChild(el)
      } else {
        let elementNode:HTMLUnknownElement = document.createElement("article");

        (displayCharacters.checked === false) ? (visibility('.separator', 0, true), visibility('.spring-spinner', 0)) : visibility('.separator', 1)

        elementNode.setAttribute("class", `card-quotes quotes-${data[i].author.slice(0, data[i].author.indexOf(' '))}`)
        elementNode.innerHTML = templateQuotes( data[i].author, img, data[i].quote, data[i].quote_id, data[i].series )
        content.appendChild(elementNode)

        quotes.push(data[i].author)
      }
    }

    (displayCharacters.checked === false && content.childElementCount <= 0) ? (messagePrint('characters-quotes-search', 'Nothing was found'), visibility('.spring-spinner', 0, true)) : null
} else if (type === 'onlyQuotes') {
    let characterContainer:Array<string> = []
    let characterImg:Array<string> = []

    for (let i = 0; i < data.length; i++) {
      characterContainer.push(data[i].name)
      characterImg.push(data[i].img)
    }

    // Call Quotes
    if (characterContainer.length === data.length) {
      characterContainer.map( (val, i, all) => {
        if (all.length === characterContainer.length) {
          fetchDataAsync(APIQuote, `?author=${data[i].name.replace(/ /g, '+').toLocaleLowerCase()}`, 'quotes', data[i].img, true)
        }
      })
    }
  } else if (type === 'onlyCharacters') {
    for (let i = 0; i < data.length; i++) {
      let elementNode:HTMLUnknownElement = document.createElement("article")

      elementNode.setAttribute("class", `card-characters off character${i}`)
      elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status)
      contentCharacters.appendChild(elementNode)

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
    }
  visibility('.spring-spinner', 0, true)
  }
}