const $main = document.getElementById("main")
const $contentPage = document.getElementById("content-page");

const getPage = async (url) =>  {
  try {
    const res = await fetch(url)
    const html = await res.text()

    if(!res.ok) throw { status : response.status, statusText : response.statusText }
    
    
    $contentPage.innerHTML = html
    
    
  } catch (error) {
    let message = error.statusText || "Ocurrio un error inesperado"
    $main.insertAdjacentHTML("afterend", `<h2>${message} : ${error.status}<h2/>`)
  }
  
}

document.addEventListener("DOMContentLoaded", getPage("assets/home.html"))


document.addEventListener("click", (event) => {
  
  if(event.target.matches(".navigation-link")){
    event.preventDefault()
    const url = event.target.href
    getPage(url)
  }
})
