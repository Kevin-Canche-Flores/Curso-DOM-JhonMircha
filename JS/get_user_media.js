export default function detectCamera (id) {
  const video = document.getElementById(id)
  const constrains = {
    audio : false,
    video : true
  }

  window.navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
    video.srcObject = stream;
  }).catch((err) => {
    console.log(err)
  })
}