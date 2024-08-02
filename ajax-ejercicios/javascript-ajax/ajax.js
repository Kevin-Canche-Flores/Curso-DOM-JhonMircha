const $header = document.getElementById("header")
const $main = document.getElementById("main")
const $footer = document.getElementById("footer")

//En esta función recibiremos la url a cargar y al elemento html en el cual añadiremos el contenido html.
const getPage = async (url, element) =>  {
  try {
    const res = await fetch(url)
    const html = await res.text()

    if(!res.ok) throw { status : response.status, statusText : response.statusText }
       
    element.innerHTML = html  
  } catch (error) {
    let message = error.statusText || "Ocurrio un error inesperado"
    $main.insertAdjacentHTML("afterend", `<h2>${message} : ${error.status}<h2/>`)
  } 
}

document.addEventListener("DOMContentLoaded", () => {
  getPage("assets/header.html", $header);
  getPage("assets/home.html", $main);
  getPage("assets/footer.html", $footer);
})


document.addEventListener("click", (event) => {
  
  if(event.target.matches(".navigation-link")){
    event.preventDefault()
    const url = event.target.href
    getPage(url, $main)
  }
})
