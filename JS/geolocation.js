export default function getGeolocation (id) {
 const $contenedorGeolocation = document.getElementById(id)

  const success = (position) => {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const presicion = position.coords.accuracy


    $contenedorGeolocation.innerHTML = `
    <h3>Su ubicación es:</h3>
    <ul>
      <li>latitud : ${latitud}</li>
      <li>Longitud : ${longitud}</li>
      <li>Precisión : ${presicion}</li>
    </ul>
    <a href="https://www.google.com.gt/maps/place/@${latitud},${longitud},15z" target="_blank">Ver en Google Maps</a>
    `
    /*⬆️⬆️⬆️⬆️Como poner en google maps coordenadas para poder abrir en el mapa 🤯😱⬆️⬆️⬆️⬆️ */
  }

  const error = (error) => {
    $contenedorGeolocation.innerHTML = `<p>Geolocation is not supported by your browser</p>`
    console.log(error)
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout:  15000,
  };

 if(navigator){
  $contenedorGeolocation.innerHTML = "<h3>Localizando…</h3>"
    window.navigator.geolocation.getCurrentPosition(success, error, options)
 } else { 
  console.log("geolocation IS NOT available.")
}
 
}