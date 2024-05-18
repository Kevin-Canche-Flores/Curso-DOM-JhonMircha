export default function visibilityChangePage(){
  const $video = document.querySelector(".video-inteligente")

  document.addEventListener("visibilitychange", (event) =>{
    document.visibilityState === "visible" ? $video.play() : $video.pause()
  })
}