export default function countDown () {
  // Obtener la fecha actual
  const getDate = new Date()

  // Definir la fecha de conteo regresiva(En este caso de mi cumpleaños)
  const birthDay = new Date(getDate.getFullYear(), 4, 28);
  
  // Calcular la diferencia en milisegundos entre las dos fechas
  const difference = birthDay - getDate;

    // Calcular los días, horas, minutos y segundos restantes
    const segundosTotales = Math.floor(difference / 1000);
    const segundos = segundosTotales % 60;
    const minutosTotales = Math.floor(segundosTotales / 60);
    const minutos = minutosTotales % 60;
    const horasTotales = Math.floor(minutosTotales / 60);
    const horas = horasTotales % 24;
    const dias = Math.floor(horasTotales / 24);
  
    return {
      dias,
      horas,
      minutos,
      segundos,
    }
}

// Función para mostrar el contador detallado en la página
export function mostrarContadorDetallado (container, message) {
  const $contador = document.querySelector(container);
  
  const cuentaRegresiva = countDown();

  if (cuentaRegresiva.dias === 0) {
      $contador.textContent = `${message} 🥳🎂`
  } else {
     $contador.textContent = `${cuentaRegresiva.dias} Dias : ${cuentaRegresiva.horas} Horas :  ${cuentaRegresiva.minutos} Minutos :  ${cuentaRegresiva.segundos} Segundos`;
  }
  
  
}