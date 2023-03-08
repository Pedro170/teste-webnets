const btnHamburguer = document.querySelector('#menu-hamburger button')
const nav = document.querySelector('.header-navegacao ul')
const body = document.querySelector('body')

function handleActiveButton() {
  nav.classList.toggle('ativo')
  btnHamburguer.classList.toggle('ativo')
  body.classList.toggle('hidden-scroll-y')
}

btnHamburguer.addEventListener('click', handleActiveButton)