export default function btnDarkMode (btn, icon) {
  const $btnDarkMode = document.querySelector(btn)
  const $icon = document.getElementById(icon)
  const $body = document.querySelector("body")

  const darkTheme = () => {
    $body.classList.toggle("dark")
    $icon.classList.remove("fa-moon")
    $icon.classList.add("fa-sun")
  }

  const lightTheme = () => {
    $body.classList.toggle("dark")
    $icon.classList.remove("fa-sun")
    $icon.classList.add("fa-moon")
  }

  document.addEventListener("click", (event) => {
    if(event.target.matches(btn) || event.target.matches(`${btn} *`)) $icon.className.includes("fa-moon") ? darkTheme() : lightTheme()
  })

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log(localStorage.getItem("theme"))
  })
}

