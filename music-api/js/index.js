const urlArtist = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=";
const urlBaseLetterSong = "https://api.lyrics.ovh/v1";

const $btnSearch = document.getElementById("btn-search");
const $inputInterprete = document.querySelector(".search_interptete").value;
const $inputSong = document.querySelector(".search_song").value;
let $sectionArtists = document.querySelector(".artist");
let $sectionLyrics = document.querySelector(".lyrics");

const dataUrl = async function (urlArtist, urlLetterSong, nameMusic) { 
  try {
    const urlFetch = fetch(urlArtist)
    const urlFetchLetterSong = fetch(urlLetterSong)
    let artistTemplate = ""
    let letterSongTemplate = ""
    let $section = document.querySelector(".section_songs")
    const [resArtist, resLetterSong] = await Promise.all([urlFetch, urlFetchLetterSong])
    const artistData = await resArtist.json()
    const letterSongData = await resLetterSong.json()
    const $error = document.querySelector(".error")

    if($error.innerText != "") {
      $error.innerText = ""
    }

    if(artistData.artists == null) {
      artistTemplate = `<h2>No se encontró ningún artista con ese nombre.</h2>`
      $section.classList.add("active")
    } else {
      let artists = artistData.artists[0]
      
      artistTemplate = `
        <h2>${artists.strArtist}</h2>
        <img src="${artists.strArtistThumb || artists.strArtistWideThumb}" alt="${artists.strArtist}">
        <div>
          <p>Formed: ${artists.intFormedYear} - ${artists.diedArtist || "Present"}</p>
          <p>${artists.strCountry}</p>
          <p>Acoustic - ${artists.strStyle}</p>
          <p>${artists.strBiographyEN}</p>
          <a href="${artists.strWebsite || "#" }" target="_blank">Visitar sitio web</a>
        </div>
      `
    }

    if(letterSongData.error) {
        letterSongTemplate = `<h2>${letterSongData.error} "${nameMusic}"</h2>`
    } else {
      letterSongTemplate = `
        <h2>${nameMusic}</h2>
        <span>${letterSongData.lyrics}</span>
      `
    }

    $section.classList.add("active")
    $sectionArtists.innerHTML = artistTemplate
    $sectionLyrics.innerHTML = letterSongTemplate
    
  } catch (error) {
    console.log(error)
    const $error = document.querySelector(".error")
    $error.innerText = error || `Ha ocurrido un error con el servidor.`
  } finally {
    const $loader = document.querySelector(".loader")
    const $btnSearch = document.querySelector(".buttom_search")

    $btnSearch.disabled = false
    $loader.classList.remove("active")
  }
}

document.addEventListener("click", async function (event) {
  if (event.target.matches(".buttom_search")) {
     const $inputInterpreteValue = document.querySelector(".search_interptete").value.trim().toLowerCase();
     const $inputSongValue = document.querySelector(".search_song").value.trim().toLowerCase();
     const btnSearch = document.querySelector(".buttom_search")
    
    if($inputSongValue == "" || $inputInterpreteValue == "") {
      alert("You must enter a song name and an artist name.")
      return
    }

     const $loader = document.querySelector(".loader")
     $loader.classList.add("active")
     btnSearch.disabled = true
     
    await dataUrl(`${urlArtist}${$inputInterpreteValue}`, `${urlBaseLetterSong}/${$inputInterpreteValue}/${$inputSongValue}`, $inputSongValue)
  }
})