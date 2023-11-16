const $btnBurguer = document.getElementById('btn-navigator')

$btnBurguer.addEventListener('click', (event) => {
  $btnBurguer.classList.toggle('is-active')
})