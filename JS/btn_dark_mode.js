export default function btnDarkMode (btn, icon) {
  //const $btnDarkMode = document.querySelector(btn)
  const $icon = document.getElementById(icon)
  const $body = document.querySelector("body")

  const darkTheme = () => {
    $body.classList.add("dark")
    $icon.classList.remove("fa-moon")
    $icon.classList.add("fa-sun")
    localStorage.setItem("theme", "dark")
  }

  const lightTheme = () => {
    $body.classList.remove("dark")
    $icon.classList.remove("fa-sun")
    $icon.classList.add("fa-moon")
    localStorage.setItem("theme", "default")
  }

  document.addEventListener("click", (event) => {
    if(event.target.matches(btn) || event.target.matches(`${btn} *`)) $icon.className.includes("fa-moon") ? darkTheme() : lightTheme()
  })

  document.addEventListener("DOMContentLoaded", (event) => {
    if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "default");

    if(localStorage.getItem("theme") === "default") lightTheme();

    if(localStorage.getItem("theme") === "dark") darkTheme();
  })
}

