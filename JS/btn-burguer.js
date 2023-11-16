const $btnBurger = document.getElementById('btn-navigator');
const $navBurger = document.getElementById('nav-navigator');
const $navAnchors = document.querySelectorAll("nav a");

$btnBurger.addEventListener('click', (event) => {
    $btnBurger.classList.toggle('is-active');
    $navBurger.classList.toggle('display')
});

$navAnchors.forEach(navAnchor => {
  navAnchor.addEventListener('click', (event) => {
    $btnBurger.classList.toggle('is-active');
    $navBurger.classList.toggle('display');
    console.log(navAnchor)
  })
})

