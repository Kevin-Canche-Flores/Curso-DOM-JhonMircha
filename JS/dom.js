import  hamburgerMenu  from "./menu_hamburger.js";
import digitalClock from "./digital_clock.js";
import { shorcuts } from "./shortcuts.js";
import countDown from "./dayCounter.js";
import arrowTop from "./arrowTop.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //Eventhandler Menu hamburguesa
  hamburgerMenu(".hamburger", ".nav", "nav a");
 
  //Eventhandler Clock
  digitalClock(".btn-play-clock", ".btn-stop-clock", ".btn-alarm-play", ".btn-alarm-stop");

  //Event keydown
  shorcuts()
  //el countdown requiere de 3 parametros para iniciar su funcion que consta de: contenedor en el DOM, fecha valida que abmita JavaScript y el mensaje que tendra cuando se cumpla la cuenta regresiva.
  countDown(".countDown", "May 28, 2024", '¡Feliz cumpleaños! 🤓🤓');

  arrowTop("arrowTopBtn")
})
