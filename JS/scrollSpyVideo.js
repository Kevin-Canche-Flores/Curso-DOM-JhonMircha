export default function observerIntersectionVideo(element) {
  const $video = document.querySelector(element)
  const options = {
  /*  rootMargin
    margin */
    threshold: 0.75
  }

  /*Funciones que realizara el video */
  function intersectionVideo(entries) {
    entries.forEach(videoEntry => {
      if(videoEntry.isIntersecting){
        $video.play()
      } else {
        $video.pause()
      }
    });

  }

  const observerVideo = new IntersectionObserver(intersectionVideo, options)

  observerVideo.observe($video)
}