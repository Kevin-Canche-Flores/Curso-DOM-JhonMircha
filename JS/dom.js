import  hamburgerMenu  from "./menu_hamburger.js";
import digitalClock from "./digital_clock.js";
import { shorcuts } from "./shortcuts.js";
import countDown from "./dayCounter.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //Eventhandler Menu hamburguesa
  hamburgerMenu(".hamburger", ".nav", "nav a");
 
  //Eventhandler Clock
  digitalClock(".btn-play-clock", ".btn-stop-clock", ".btn-alarm-play", ".btn-alarm-stop");

  //Event keydown
  shorcuts()

  countDown(".countDown", "May 28, 2024", '¡Feliz cumpleaños! 🤓🤓');
})
