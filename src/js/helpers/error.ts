const templateError:Function = (m:string) => {
  return `
  <div class="error">
    <div class="error-content">
      <h2 class="big">Error</h2>
      <p class="medium">Data loading error, please check your connection.</p>
      <p>${m}</p>
    </div>
  </div>
  `
}

export const errorPrint:Function = (id:string, message:string) => {
  let element:HTMLUnknownElement = document.createElement("div")
  let target:HTMLUnknownElement = document.getElementById(id)

  element.setAttribute("class", `error`)
  element.innerHTML = templateError(message)
  target.appendChild(element)
}