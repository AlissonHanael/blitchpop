let header = document.querySelector('.logo__img')
let headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= headerHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
#home .content, 
#about .container,
#contact .contato,
#footer .map,
footer .credito`,
  { interval: 100 }
)
