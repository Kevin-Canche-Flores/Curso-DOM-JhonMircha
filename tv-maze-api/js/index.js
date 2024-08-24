// Variables
// API url
const url = "https://api.tvmaze.com/search/shows?q=";
const $btnScroll = document.querySelector(".btn-scroll");
const $results = document.querySelector(".results");
const $movieTemplate = document.getElementById("movie-template").content;
const $searchMovie = document.getElementById("search-movie");
const $fragmentMovie = document.createDocumentFragment();
const $loader = document.querySelector(".loader");
let $error = document.querySelector(".error");

const searchMovie = async () => {
  try {
    const search = $searchMovie.value.trim().toLowerCase();
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    
    if (!response.ok) throw { status: response.status, statusText: response.statusText };

    // Logica para mostrar mensaje si no hay resultados
    const existingMessage = document.querySelector('.no-results');
    if (existingMessage) {
      existingMessage.remove();
    }

    if(data.length === 0){
      $results.insertAdjacentHTML("afterend", `<h3 class="no-results">No se encontraron resultados</h3>`);
      return;
    }
    // Render movies
    renderMovies(data);

    $results.appendChild($fragmentMovie);
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ha ocurrido un error";
    $error.textContent = `${message} ${error}`;
  } finally {
    $loader.classList.remove("loader-active");
  }
};

// Function to render movies
const renderMovies = (data) => {
  data.forEach((movie) => {
    const dataMovie = movie.show;
    const $movie = document.importNode($movieTemplate, true);

    if (dataMovie.image === null) {
      $movie.querySelector("img").src =
        "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
    } else if (dataMovie.image.original) { 
      $movie.querySelector("img").src = dataMovie.image.original;
    } else {
      $movie.querySelector("img").src = dataMovie.image.medium;
    }

    $movie.querySelector("img").alt = dataMovie.name;
    $movie.querySelector(".movie-title").innerHTML = dataMovie.name;
    $movie.querySelector(".movie-description").innerHTML = dataMovie.summary;

    // Genres
    if (dataMovie.genres.length == 0) {
      $movie.querySelector("h3").classList.add("no-genres");
      $movie.querySelector(".movie-genres").remove();
    } else {
      dataMovie.genres.forEach((genre) => {
        const $genre = document.createElement("span");
        $genre.innerHTML = genre;
        $movie.querySelector(".movie-genres").appendChild($genre);
      });
    }

    $fragmentMovie.appendChild($movie);
  })
}

document.addEventListener("DOMContentLoaded", () => {
  $searchMovie.focus();
  let typingTimer;
  let typingDelay = 1500;

  //Evento de teclado para buscar movies
  document.addEventListener("keyup", (event) => {
    
    if (event.target === $searchMovie) {
      if (
        event.key == "Enter" ||
        event.target.value.trim().length > 3 ||
        $searchMovie.value.trim() !== ""
      ) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
          $fragmentMovie.innerHTML = "";
          $results.innerHTML = "";
          $error.textContent = "";
          $loader.classList.add("loader-active");
          searchMovie();
        }, typingDelay);
      }
    }
    
    if (event.key === "Backspace" && event.target.value.trim() === "") {
        clearTimeout(typingTimer);
        $results.innerHTML = "";
        $fragmentMovie.innerHTML = "";
        $error.textContent = "";
    }
  });

  /*Evento para detectar el scroll cuando se desplaza en el documento y se activa el boton de scroll cuando se desplaza a partir de 400px y se desactiva cuando se desplaza por debajo de ese valor*/
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      $btnScroll.classList.add("btn-scroll-active");
    } else {
      $btnScroll.classList.remove("btn-scroll-active");
    }
  });

  /*Evento para dirigirse al principio del documento*/
  $btnScroll.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});