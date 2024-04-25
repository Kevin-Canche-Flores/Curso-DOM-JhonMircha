export default function detectConnection(id) {
  const $div = document.createElement("div")
 
  const isOnLine = () => {
    $div.classList.add("conection")
    if(navigator.onLine){
      $div.textContent = 'De nuevo en línea.'
      $div.classList.add("online")
      setTimeout(()=> document.body.removeChild($div), 2000)
    } else {
      $div.textContent = 'Sin conexión.'
      $div.classList.add("offline")
      $div.classList.remove("online")
    }
    
    document.body.insertBefore($div, document.body.firstChild)  
  }

  window.addEventListener("online", event => isOnLine())
  window.addEventListener("offline", event => isOnLine())
}