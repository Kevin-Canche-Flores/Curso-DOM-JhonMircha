export default function digitalClock (relojOn) {
  
  document.addEventListener("click", (event) => {

    if(event.target.matches(relojOn) || event.target.matches(`${relojOn} *`)){
      const time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      
      // Asegurarse de que los minutos y segundos tengan dos dígitos
      let horasConDosDigitos = hours.toString().padStart(2, '0');
      let minutosConDosDigitos = minutes.toString().padStart(2, '0');
      let segundosConDosDigitos = seconds.toString().padStart(2, '0');


      document.querySelector(relojOn).disabled = true;
    }
console.log(event) 
    // if(event.target.matches(menuLinks)){
    //   document.querySelector(btnBurger).classList.remove('is-active')
    //   document.querySelector(navBurguer).classList.remove('display')
    //   console.log(event)
    })
  
} 
//, relojOff, alarmOn, alarmOff