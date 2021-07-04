// Navbar height

addEventListener('scroll', () => {
  let el = document.querySelector('.opening-first')
  let target = document.getElementById('nav-main')
  let height = el.style.opacity * 3

  target.style.height = `${15+height}vh`
})