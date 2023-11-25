export default function digitalClock(relojOn, relojOff, alarmOn, alarmOff) {
  // Declarar la variable para almacenar la referencia del intervalo
  let intervalTime;
  let $spanClock = document.querySelector(".digital-clock");
  const $alarmAudio = document.getElementById("sound-alarm");

  document.addEventListener("click", (event) => {
    
    if (event.target.matches(relojOn)) {

      intervalTime = setInterval(() => {
        let clokHour = new Date().toLocaleTimeString();
        document.querySelector('.digital-clock').innerHTML = `<span>${clokHour}</span>`
      }, 1000)

      document.querySelector(relojOn).disabled = true;
    }

    if (event.target.matches(relojOff)) {
      //Limpiando y habilitando el botton de la hora.
      clearInterval(intervalTime);

      $spanClock.innerHTML = null;

      document.querySelector(relojOn).disabled = false;
    }

    if (event.target.matches(alarmOn)) {
      document.querySelector(alarmOn).disabled = true;
      $alarmAudio.play();
      $alarmAudio.loop = true;
    }

    if (event.target.matches(alarmOff)) {
      document.querySelector(alarmOn).disabled = false;
      $alarmAudio.pause();
      $alarmAudio.currentTime = 0;
    }
  });
}
