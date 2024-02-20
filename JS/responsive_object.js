export default function responsiveMedia (id , mq, desktopContent, mobileContent) {
  const $id = document.getElementById(id);
  const mediaQuery = window.matchMedia(mq);  

  const responsive = (event) => {
    event.matches ? $id.innerHTML = mobileContent : $id.innerHTML = desktopContent;
  }

  mediaQuery.addEventListener("change", responsive);
  responsive(mediaQuery)
}