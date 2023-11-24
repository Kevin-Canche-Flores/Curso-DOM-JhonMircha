import  hamburgerMenu  from "./menu_hamburger.js";
import digitalClock from "./digital_clock.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //Eventhandler Menu hamburguesa
  hamburgerMenu(".hamburger", ".nav", "nav a");
 
  //Eventhandler Clock
  digitalClock(".btn-play-clock");
})

//'.btn-stop-clock', '.btn-alarm-play', '.btn-alarm-stop'