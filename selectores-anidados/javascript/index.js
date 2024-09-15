// Selectores Anidados
const $states = document.getElementById("states")
const $municipalities = document.getElementById("municipalities")


document.addEventListener("DOMContentLoaded", async function () {
  try {
    const url = "https://api.copomex.com/query/get_estados?token=pruebas"
    const res = await fetch(url)
    const data = await res.json()
    
    if(!res.ok) throw ({status: res.status, message: res.statusText})
      
    let $options = `<option value="" selected>---Seleccione un Estado---</option>`
    data.response.estado.forEach(state => { $options += `<option value="${state}">${state}</option>` })
    
    $states.innerHTML = $options
  } catch (err) {
    let message = err.message
    $states.nextElementSibling.innerText = `Error: ${message}`
  }
})

$states.addEventListener("change", async function (event) {
  if(event.target.value === "") {
    $municipalities.innerHTML = "";
  } else {
    try {
    const url = `https://api.copomex.com/query/get_municipio_por_estado/${event.target.value}?token=pruebas`
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok) throw ({status: res.status, message: res.statusText})
    
    let $options = `<option value="" selected>---Seleccione un Municipio---</option>`
    data.response.municipios.forEach(municipio => { $options += `<option value="${municipio}">${municipio}</option>` })
    
    $municipalities.innerHTML = $options
  } catch (err) {
    let message = err.message
    $municipalities.nextElementSibling.innerText = `Error: ${message}`
  }
  }
})