export default function digitalClock (relojOn, relojOff, alarmOn, alarmOff) {
  // Declarar la variable para almacenar la referencia del intervalo
  let intervalTime
  let spanClock = document.querySelector('.digital-clock')
  
  document.addEventListener("click", (event) => {

    if(event.target.matches(relojOn)){
      
      //OBTENEMOS LA HORA PARA PODER PASARLO A LA VISUALIZACIÓN DEL USUARIO.
      const updateClock = () => {
      const time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      
      // Asegurarse de que los minutos y segundos tengan dos dígitos
      let hoursWithTwoDigits = hours.toString().padStart(2, '0');
      let minutesWithTwoDigits = minutes.toString().padStart(2, '0');
      let secondsWithTwoDigits = seconds.toString().padStart(2, '0');

      let formatedTime = `<span>${hoursWithTwoDigits}:${minutesWithTwoDigits}:${secondsWithTwoDigits}</span>`
      spanClock.innerHTML = formatedTime; 
    };

    document.querySelector(relojOn).disabled = true;

    intervalTime = setInterval(updateClock, 1000)

    updateClock()
    }

    if(event.target.matches(relojOff)){
      //Limpiando y habilitando el botton de la hora.
      clearInterval(intervalTime);

      spanClock.innerHTML = '';

      document.querySelector(relojOn).disabled = false;
    }


  })
}