export default function arrowTop (btn) {
  const $arrowBtn = document.getElementById(btn)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      $arrowBtn.classList.add('active')
    } else {
      $arrowBtn.classList.remove('active')
    }
  })
  
  $arrowBtn.addEventListener("click", () => {
  window.scrollTo(0,0);
})
}

