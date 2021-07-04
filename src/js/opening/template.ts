// media
// let cardLeft = require.resolve('@media/card-left.png');
// let cardRight = require.resolve('@media/card-right.png');


export const cardFront:Function = (name:string, img:string, nickname:string, occupation:Array<string>, category:string, status:string) => {
  return `<h3>${name}</h3>
  <div class="card-content-img">
    <img src="../assets/media/card-left.png" class="decoration-card-left" alt="card decoration Cartoon face Heisenberg">
    <img src="${img}" class="card-img" alt="portrait of ${name} in Breaking Bad">
    <img src="../assets/media/card-right.png" class="decoration-card-right" alt="card decoration Cartoon Heisenberg">
  </div>
  <ol class="card-content-info">
    <li><strong class="block">Nickname:</strong>${nickname}</li>
    <li><strong class="block">Occupation:</strong>${occupation[0]}</li>
    <li><strong class="block">Category:</strong>${category}</li>
    <li><strong class="block">Status:</strong>${status}</li>
  </ol>`
}