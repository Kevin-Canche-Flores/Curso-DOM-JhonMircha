const $btnBurger = document.getElementById('btn-navigator');
const $navBurger = document.getElementById('nav-navigator');
const $navAnchors = document.querySelectorAll("nav a");

const addClassToggleForNavAndBotton = () => {
  $btnBurger.classList.toggle('is-active');
  $navBurger.classList.toggle('display')
}

$btnBurger.addEventListener('click', (event) => {
  addClassToggleForNavAndBotton()
});

$navAnchors.forEach(navAnchor => {
  navAnchor.addEventListener('click', (event) => {
    addClassToggleForNavAndBotton()
  })
})

