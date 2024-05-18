export default function responsiveSlider(boxSlider, slider, images, inputRight, inputLeft) {
  const $sliderWrapper = document.querySelector(boxSlider);
  const $slider = document.querySelector(slider)
  const $sliderImageCount = document.querySelectorAll(images).length
  let index = 0
  /*Optiones para el observador del slider */
  let intervalSLider;
  const options = {
    rootMargin: "0px",
    threshold: 0.50
  };
  
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

  /* APARTADO DEL INTERSECTION OBSERVER DEL ELEMENTO SLIDER */
   intervalSLider = () => {
    setInterval(sliderNext, 5000)
  } 

  const sliderInterval = (entries) => {
    entries.forEach(entry => {
     if(entry.isIntersecting) {
      intervalSLider() 
      console.log(entry.isIntersecting)
    }
    });
  }

  const observer = new IntersectionObserver(sliderInterval, options)
  observer.observe($sliderWrapper)
}