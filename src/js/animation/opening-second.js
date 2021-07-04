let h1 = {
  opacity: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3"],
    [ 0, 0, 1, 1],
  ],
  translateY: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"],
    [0, "-screenHeight", "screenHeight/1.7", "screenHeight*1.5", "-screenHeight"],
  ]
}

let h2 = {
  opacity: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3"],
    [ 0, 0, 1, 1],
  ],
  translateY: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"],
    [0, "screenHeight", "screenHeight/1.5", "screenHeight*1.5", "screenHeight*3"],
  ]
}

let card = {
  translateX: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*3.5"],
    {
      768: ['-screenWidth*2', '-screenWidth/2', 0, 0, '-screenWidth*2'],
      769: ['-screenWidth/2', '-screenWidth/2', 0, 0, '-screenWidth/2'],
    }
  ],
  translateY: [
    ["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"],
    [0, 0, "screenHeight/1.7", "screenHeight*1.5", "screenHeight*2"],
  ]
}

export {
  h1,
  h2,
  card
}