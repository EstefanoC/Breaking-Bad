export const templateCard:Function = (name:string, img:string, nickname:string, occupation:Array<string>, category:string, portrayed:string, status:string) => {
  return `
    <div class="card-img">
      <img src="${img}" alt="">
      <div class="card-tab">
        <div class="card-arrow"></div>
      </div>
      <ul class="card-info t-w">
          <li><strong>Nickname: </strong>${nickname}</li>
          <li><strong>Occupation: </strong>${occupation}</li>
          <li><strong>Category: </strong>${category}</li>
          <li><strong>portrayed: </strong>${portrayed}</li>
          <li><strong>Status: </strong>${status}</li>
      </ul>
    </div>
    <h2 class="card-title">${name}</h2>
  `
}

export const templateQuotes:Function = ( author:string, img:string, quote:string, quote_id:number, series:string ) => {
  return `
  <div class="card-img">
    <img src="${img}" alt="${author}">
  </div>
  <div class="card-content t-w">
    <h2>Quotes of ${author}</h2>
    <q>${quote}</q>
  </div>`
}