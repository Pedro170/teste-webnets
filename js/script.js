const btnHamburguer = document.querySelector("#menu-hamburger button");
const nav = document.querySelector(".header-navegacao ul");
const body = document.querySelector("body");

function handleActiveButton() {
  nav.classList.toggle("ativo");
  btnHamburguer.classList.toggle("ativo");
  body.classList.toggle("hidden-scroll-y");
}

btnHamburguer.addEventListener("click", handleActiveButton);

/* Contraste Plus */

const btnPlus = document.getElementById("plus-fonte");
const btnLess = document.getElementById("less-fonte");

btnPlus.addEventListener("click", () => {
  body.style.fontSize = "50px";
});

btnLess.addEventListener("click", () => {
  body.style.fontSize = "initial";
});


/* Data  */
const elementData = document.querySelector('.data')

if(elementData) {
  let data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  
  data = dia + '/' + mes + '/' + ano;
  
  function formatarData(str) {
    const partes = str.split('/').map(Number);
    const data = new Date(partes[2], partes[1] - 1, partes[0]);
    

    return data.toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  elementData.innerText = formatarData(data);
}

/* Pegando valor do input */

const input = document.querySelector('.header-search input')
const form = document.querySelector('.header-menu-search form')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if( input.value ) {
    window.location.href = `https://www2.tatui.sp.gov.br/?s=${input.value}`;
  }
})

