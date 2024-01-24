export default function countDown(container, limitDate, finalMessage) {
  const $countDown = document.querySelector(container);
  // Definir la fecha de conteo regresiva(En este caso de mi cumpleaños)
  const countDownDate = new Date(limitDate);
  
  let countTemporizador = setInterval(() => {
    let now = new Date(); 
    // Calcular la diferencia en milisegundos entre las dos fechas
    let difference = countDownDate - now;
    
    // Calcular los días, horas, minutos y segundos restantes
    const segundosTotales = Math.floor(difference / 1000);
    const segundos = ('0' + segundosTotales % 60).toString().slice(-2);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const minutos = ('0' + minutosTotales % 60).toString().slice(-2);
    const horasTotales = Math.floor(minutosTotales / 60);
    const horas = ('0' + horasTotales % 24).toString().slice(-2);
    const dias = Math.floor(horasTotales / 24);

    $countDown.innerHTML = `<h3>Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos</h3>`

    if (difference < 0) {
      clearInterval(countTemporizador)
      $countDown.innerHTML = `<h3>${finalMessage}</h3>`
    }
  }, 1000);
}