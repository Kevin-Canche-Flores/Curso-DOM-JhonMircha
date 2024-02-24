import  hamburgerMenu  from "./menu_hamburger.js";
import digitalClock from "./digital_clock.js";
import { shorcuts } from "./shortcuts.js";
import countDown from "./dayCounter.js";
import arrowTop from "./arrowTop.js";
import btnDarkMode from "./btn_dark_mode.js";
import responsiveMedia from "./responsive_object.js";
import emergyWindow from "./emergy_window.js";

document.addEventListener("DOMContentLoaded", (event) => {
  //Eventhandler Menu hamburguesa
  hamburgerMenu(".hamburger", ".nav", "nav a");
 
  //Eventhandler Clock
  digitalClock(".btn-play-clock", ".btn-stop-clock", ".btn-alarm-play", ".btn-alarm-stop");

  //Event keydown
  shorcuts();
  //el countdown requiere de 3 parametros para iniciar su funcion que consta de: contenedor en el DOM, fecha valida que abmita JavaScript y el mensaje que tendra cuando se cumpla la cuenta regresiva.
  countDown(".countDown", "May 28, 2024", '¡Feliz cumpleaños! 🤓🤓');

  arrowTop("arrowTopBtn");

  responsiveMedia("youtube",
                  "(max-width: 767px)",
                  '<iframe width="500" height="250" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=Vdud28OIp-vQ61gT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                  '<a href="https://youtu.be/6IwUl-4pAzc?si=kBYafXgv_097qaeF" target="_blank" rel="noopener noreferrer">Youtube</>');
  
  responsiveMedia("google_maps",
                  "(max-width: 767px)",
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.773753037828!2d-88.57105182495371!3d20.678781630884394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5138b9a098f833%3A0xf70a67530750d45!2zOTc3NTEgQ2hpY2jDqW4gSXR6w6EsIFl1Yy4!5e0!3m2!1ses-419!2smx!4v1708388452300!5m2!1ses-419!2smx" width="500" height="370" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                  '<a href="https://maps.app.goo.gl/GEi82iixgyEjgijL7" target="_blank" rel="noopener noreferrer">ChiChén Itza - Google Maps</>');

  emergyWindow("url_window", "window_width", "window_heigh")
})

btnDarkMode(".btn-dark-mode", "sun-moon")