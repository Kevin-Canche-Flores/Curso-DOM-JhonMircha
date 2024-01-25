export default function btnDarkMode (btn, icon) {
  const $btnDarkMode = document.getElementById(btn)
  const $icon = document.getElementById(icon)
  const $body = document.querySelector("body")
  
  $btnDarkMode.addEventListener("click", (event) => {
    $icon.classList.toggle("fa-moon")
    $body.classList.toggle("dark")
  })
}