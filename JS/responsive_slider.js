export default function responsiveSlider(slider, images, inputRight, inputLeft) {
  const $slider = document.querySelector(slider)
  const $sliderImageCount = document.querySelectorAll(images).length
  let index = 0

  function sliderImage() {
    index >= ($sliderImageCount - 1) ? index = 0 : index++
    let percentage = index * -100;
    $slider.style.transform = `translateX(${percentage}%)`;
    
  }

  function sliderImageBack() {
    index <= 0 ? index = ($sliderImageCount - 1) : index--;
    let percentage = index * -100;
    $slider.style.transform = `translateX(${percentage}%)`; 
  }

  document.addEventListener("click", (e) => {
    if(e.target.matches(inputRight) || e.target.matches(`${inputRight} *`)) sliderImage()

    if(e.target.matches(inputLeft) || e.target.matches(`${inputLeft} *`)) sliderImageBack()   
  })

  setInterval(sliderImage, 7000)
}