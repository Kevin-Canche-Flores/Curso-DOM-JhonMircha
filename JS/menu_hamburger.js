export default function hamburgerMenu (btnBurger, navBurguer, menuLinks) {
  
  document.addEventListener("click", (event) => {

    if( event.target.matches(btnBurger) || event.target.matches(`${btnBurger} *` )){  
      document.querySelector(btnBurger).classList.toggle('is-active')
      document.querySelector(navBurguer).classList.toggle('display')     
    }

    if(event.target.matches(menuLinks)){
      document.querySelector(btnBurger).classList.remove('is-active')
      document.querySelector(navBurguer).classList.remove('display')
    }
  })
  
}


