export default function responsiveSlider(slider, images, inputRight, inputLeft) {
  const $slider = document.querySelector(slider)
  const $sliderImageCount = document.querySelectorAll(images).length
  let index = 0

  function sliderNext() {
    index >= ($sliderImageCount - 1) ? index = 0 : index++
    let percentage = index * -100;
    $slider.style.transform = `translateX(${percentage}%)`;
    
  }

  function sliderPrev() {
    index <= 0 ? index = ($sliderImageCount - 1) : index--;
    let percentage = index * -100;
    $slider.style.transform = `translateX(${percentage}%)`; 
  }

  document.addEventListener("click", (e) => {
    if(e.target.matches(inputRight) || e.target.matches(`${inputRight} *`)) sliderNext()

    if(e.target.matches(inputLeft) || e.target.matches(`${inputLeft} *`)) sliderPrev()   
  })

  setInterval(sliderNext, 7000)
}