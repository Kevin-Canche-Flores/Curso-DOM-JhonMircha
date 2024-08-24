const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";
const $pokemonList = document.querySelector(".pokemons-list");
const $pokemonTemplate = document.getElementById("pokemon-template").content;
const $fragment = document.createDocumentFragment();
let $btnNext = document.querySelector(".btn-next");
let $btnPrev = document.querySelector(".btn-prev");
const $loader = document.querySelector(".loader");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

// Función para activar o desactivar los botones de navegación (next y prev) cuando no hay más datos a cargar en el listado de pokemons 
const eventBtns = (btn_next, btn_prev) => {
  if (btn_prev.dataset.url === "null") {
       btn_prev.disabled = true;
        btn_prev.classList.add("disabled");
  } else {
       btn_prev.disabled = false;
        btn_prev.classList.remove("disabled");
  }

  if (btn_next.dataset.url === "null") {
        btn_next.disabled = true;
        btn_next.classList.add("disabled");
  } else {
        btn_next.disabled = false;
        btn_next.classList.remove("disabled");
  }
};

// Formato el id del pokemon para que quede de 4 digitos con 0 a la izquierda del numero (ejemplo: 0001)
const formmatedId = (id) => {
  return id.toString().padStart(4, "0");
};

// Función para cargar los datos del pokemon en el template de cada pokemon (.pokemon-template) y añadirlo al fragmento (.pokemons-list) 
const dataPokemon = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    if (!response.ok) throw ({ statusText: response.statusText, status: response.status });
    const $boxType = $pokemonTemplate.querySelector(".types-pokemon");
    $boxType.innerHTML = '';
    let typesPokemon = data.types
   
    typesPokemon.forEach(types => {
      let type = types.type.name;
      let $spanType = document.createElement("span");
      $spanType.textContent = type;

      switch (type) {
        case "bug":
            $spanType.classList.add("bug");
          break;
        case "dark":
            $spanType.classList.add("dark");
          break;
        case "dragon":
            $spanType.classList.add("dragon");
          break;
        case "electric":
            $spanType.classList.add("electric");
          break;
        case "fairy":
            $spanType.classList.add("fairy");
          break;
        case "fighting":
            $spanType.classList.add("fighting");
          break;
        case "fire":
            $spanType.classList.add("fire");
          break;
        case "flying":
            $spanType.classList.add("flying");
          break;
        case "ghost":
            $spanType.classList.add("ghost");
          break;
        case "grass":
            $spanType.classList.add("grass");
          break;
        case "ground":
            $spanType.classList.add("ground");
          break;
        case "ice":
            $spanType.classList.add("ice");
          break;
        case "normal":
            $spanType.classList.add("normal");
          break;
        case "poison":
            $spanType.classList.add("poison");
          break;
        case "psychic":
            $spanType.classList.add("psychic");
          break;
        case "rock":
            $spanType.classList.add("rock");
          break;
        case "steel":
            $spanType.classList.add("steel");
          break;
        case "water":
            $spanType.classList.add("water");
          break;
      }

      $boxType.appendChild($spanType);
    });
    
console.log(data);

    $pokemonTemplate.querySelector(".pokemon-name").textContent = data.name;

    /* Si el sprites.other.dream_world.front_default no es null, se carga el sprite de la imagen de la pokemon en el template de cada pokemon (.pokemon-template) y añadirlo al fragmento (.pokemons-list) */
    data.sprites.other.dream_world.front_default != null 
    ? $pokemonTemplate.querySelector(".pokemon-image").src = data.sprites.other.dream_world.front_default 
    : $pokemonTemplate.querySelector(".pokemon-image").src = data.sprites.other.home.front_default;

    $pokemonTemplate.querySelector(".pokemon-image").alt = data.name;

    $pokemonTemplate.querySelector(".pokemon-id").textContent = `N.° ${formmatedId(data.id)}`;

      // Clonar el template y añadirlo al fragmento
      let $clone = await document.importNode($pokemonTemplate, true);
      $fragment.appendChild($clone);
  } catch (error) {
    console.log(error);
    let message = `${error.statusText} || Error al cargar el contenido`;
    $pokemonList.innerHTML = `<h2>${message}</h2>`;
  }
};

// Función para cargar los pokemons en el listado de pokemons (.pokemons-list) al hacer click en los botones de navegación (next y prev) y en el botón de inicio del sitio web (btn-home)
const pokeApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    
    $loader.classList.remove("inactive");
    $loader.classList.add("active");

    if (!response.ok) throw ({ statusText: response.statusText, status: response.status });
    // Desplazarse al inicio del sitio web al cargar los pokemons
    scrollToTop();

    // ciclo for para iterar por cada pokemon en el array de pokemons y llamar a la función dataPokemon para cargar los datos del pokemon en el template de cada pokemon (.pokemon-template) y añadirlo al fragmento (.pokemons-list)
    for (const pokemon of pokemons) {
        await dataPokemon(pokemon);
    }

    $btnPrev.dataset.url = data.previous;
    $btnNext.dataset.url = data.next;

    eventBtns($btnNext, $btnPrev);
    // Añadir el fragmento al elemento padre del listado de pokemons (.pokemons-list)
    $pokemonList.appendChild($fragment);
  } catch (error) {
    let message = `${error.statusText} || Error al cargar el contenido`;
    $pokemonList.innerHTML = `<h2>${message}</h2>`;
    console.log(error);
  } finally {
    // Desactivar el loader de paginación de pokemons
    $loader.classList.remove("active");
    $loader.classList.add("inactive");
  }
};

// Cargar los pokemons en el listado de pokemons al inicio del sitio web
document.addEventListener("DOMContentLoaded", async () => {
  await pokeApi(baseUrl);
});

// Navegar por los pokemons (next y prev) y cargar los datos en el listado de pokemons
 document.addEventListener("click", (e) => {
   if (e.target.matches(".btn-next")) {
     if ($btnNext.dataset.url === "null") {
       console.log("No hay mas datos");

       $btnNext.disabled = true;
       $btnNext.classList.add("disabled");
       return;
     } else {
       $pokemonList.innerHTML = "";
       $btnNext.disabled = false;
       $btnNext.classList.remove("disabled");

       pokeApi($btnNext.dataset.url);
     }
   }

   if (e.target.matches(".btn-prev")) {
     if ($btnPrev.dataset.url === "null") {
          $btnPrev.disabled = true;
          $btnPrev.classList.add("disabled");
     } else {
         $pokemonList.innerHTML = "";
         $btnPrev.disabled = false;
         $btnPrev.classList.remove("disabled");

       pokeApi($btnPrev.dataset.url);
     }
   }
 });
