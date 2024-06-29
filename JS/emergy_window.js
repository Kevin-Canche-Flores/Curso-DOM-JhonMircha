export default function emergyWindow(url, width, height) {
  const $form = document.getElementById("form")
  const windowUrl = document.getElementById(url)
  const windowWidth = document.getElementById(width)
  const windowHeight = document.getElementById(height)
  const $btnCloseWindow = document.querySelector(".close_window")
  let newWindow;  

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
      newWindow = window.open(
      `${windowUrl.value}`,
      "tester", 
      `width=${windowWidth.value},height=${windowHeight.value}`)
  })

  $form.addEventListener("click", event => {
    if(event.target === $form.close) newWindow.close()
  })
}