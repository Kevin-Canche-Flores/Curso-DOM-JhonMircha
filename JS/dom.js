import  hamburgerMenu  from "./menu_hamburger.js";
import digitalClock from "./digital_clock.js";
import { shorcuts } from "./shortcuts.js";
import {mostrarContadorDetallado} from "./dayCounter.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //Eventhandler Menu hamburguesa
  hamburgerMenu(".hamburger", ".nav", "nav a");
 
  //Eventhandler Clock
  digitalClock(".btn-play-clock", ".btn-stop-clock", ".btn-alarm-play", ".btn-alarm-stop");

  //Event keydown
  shorcuts()

  //Cuenta regresiva...
  //Invocamos al setInterval que es el que nos va estar actualizando la cuenta regresiva...
   setInterval(() => mostrarContadorDetallado(".countDown", '¡Hoy es tu cumpleaños!'), 1000);
  
})
