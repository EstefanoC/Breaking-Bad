const templateMessage:Function = (m:string) => {
  return `
    <div class="message-content">
      <h2 class="big">Sorry</h2>
      <p class="medium">${m}</p>
      <span style='font-size:100px;'>&#128531;</span>
    </div>
  `
}

export const messagePrint:Function = (id:string, message:string) => {
  let element:HTMLUnknownElement = document.createElement("div")
  let target:HTMLUnknownElement = document.getElementById(id)

  element.setAttribute("class", `message`)
  element.innerHTML = templateMessage(message)
  target.appendChild(element)
}