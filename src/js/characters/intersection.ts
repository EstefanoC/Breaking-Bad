// Component
import { call } from "./index"


let infoLimit:{ characters:{ name:string, loop:number, off:number }, seriesbcs:{ name:string, loop:number, off:number }, seriesbb:{ name:string, loop:number, off:number } } = {
  characters: {
    name: "characters",
    loop: 0,
    off: 0
  },
  seriesbcs: {
    name: "Better+Call+Saul",
    loop: 0,
    off: 0
  },
  seriesbb: {
    name: "Breaking+Bad",
    loop: 0,
    off: 0
  }
}

export const intersection:Function = (el:HTMLUnknownElement, type:string, margin:string = '0px', ) => {
  const options:{root:HTMLUnknownElement, rootMargin:string, threshold:number} =  {
    root: null,
    rootMargin: margin,
    threshold: 0.2
  }

  let observer:IntersectionObserver = new IntersectionObserver(function(entries) {
    const { isIntersecting } = entries[0]

    if (isIntersecting) {
      call(type)
      observer.disconnect()
    }
  }, options)
  observer.observe(el)
}

export function resetValueIntersection(type:any) {
  switch (type) {
    case 'characters':
      infoLimit.characters.loop = 0;
      infoLimit.characters.off = 0;
      break;
    case 'Better+Call+Saul':
      infoLimit.seriesbcs.loop = 0;
      infoLimit.seriesbcs.off = 0;
      break;
    case 'Breaking+Bad':
        infoLimit.seriesbb.loop = 0;
        infoLimit.seriesbb.off = 0;
      break;
  }
}

export const limitAndOffset:Function = (n:number, offset:number, type:string) => {
  if (type === infoLimit.characters.name) {
    if (infoLimit.characters.loop === 0) {
      infoLimit.characters.off = offset
      infoLimit.characters.loop++
      return `?limit=${n}&offset=${offset}`
    } else {
      infoLimit.characters.off = infoLimit.characters.off + n
      return `?limit=${n}&offset=${infoLimit.characters.off}`
    }
  } else if (type === infoLimit.seriesbcs.name) {
    if (infoLimit.seriesbcs.loop === 0) {
      infoLimit.seriesbcs.off = offset
      infoLimit.seriesbcs.loop++
      return `&limit=${n}&offset=${offset}`
    } else {
      infoLimit.seriesbcs.off = infoLimit.seriesbcs.off + n
      return `&limit=${n}&offset=${infoLimit.seriesbcs.off}`
    }
  }  else if (type === infoLimit.seriesbb.name) {
    if (infoLimit.seriesbb.loop === 0) {
      infoLimit.seriesbb.off = offset
      infoLimit.seriesbb.loop++
      return `&limit=${n}&offset=${offset}`
    } else {
      infoLimit.seriesbb.off = infoLimit.seriesbb.off + n
      return `&limit=${n}&offset=${infoLimit.seriesbb.off}`
    }
  } else {
    return ''
  }
}

export const  visibility:Function = (target:string, opacity:number, display:boolean = false, displayType:string = 'block') => {
  let elem:HTMLUnknownElement = document.querySelector(target);

  (display) ?
    (elem.style.opacity = opacity.toString(),
    setTimeout(() => {
      return elem.style.display = 'none'
    }, 400))
  :
    (elem.style.opacity = opacity.toString(), elem.style.display = displayType)
}