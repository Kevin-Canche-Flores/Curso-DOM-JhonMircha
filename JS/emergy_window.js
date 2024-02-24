export default function emergyWindow(url, width, height) {
  const $form = document.getElementById("form")
  const windowUrl = document.getElementById(url)
  const windowWidth = document.getElementById(width)
  const windowHeight = document.getElementById(height)

  $form.addEventListener("submit", event => {
    event.preventDefault()
    window.open(
      `${windowUrl.value}`,
      "Tester",
      `width=${windowWidth.value},height=${windowHeight.value}`
    ) 
  }) 
}