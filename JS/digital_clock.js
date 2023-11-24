export default function digitalClock (relojOn, relojOff, alarmOn, alarmOff) {
  
  document.addEventListener("click", (event) => {

    if( event.target.matches(relojOn)){  
      document.querySelector(relojOn).classList.toggle('is-active')
      document.querySelector(relojOn).classList.toggle('display')     
    }

    if(event.target.matches(menuLinks)){
      document.querySelector(btnBurger).classList.remove('is-active')
      document.querySelector(navBurguer).classList.remove('display')
      console.log(event)
    }
  })
  
}