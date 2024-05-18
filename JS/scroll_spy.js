export default function observerIntersection(elements) {
  const $sectionElements = document.querySelectorAll(elements)
  const options = {
    rootMargin: "0px",
    threshold: 0.50
  };

  function scrollSpy(entries) {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id")
      if(entry.isIntersecting){
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active-anchor")
      } else {
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active-anchor")
      }
    })
}


  const observer = new IntersectionObserver(scrollSpy, options)
  $sectionElements.forEach((section) => {
    observer.observe(section)
  })
}