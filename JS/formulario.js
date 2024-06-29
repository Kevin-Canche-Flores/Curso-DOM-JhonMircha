export default function formulario(form) {
  const formulario = document.getElementById(form)
  const inputs = document.querySelectorAll(`#${form} input`)
  const expresiones = {
    asunto: /^[a-zA-Z0-9\_\-\s]{4,50}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  let campos = {
    name : false,
    email : false,
    asunto : false,
    telefono : false
  }

  const validateForm = (e) => {
    switch (e.target.name) {
      case "name":
        validarCampo(expresiones.nombre, e.target, "name")
      break;
      case "email":
        validarCampo(expresiones.correo, e.target, "email")
      break;
      case "asunto":
        validarCampo(expresiones.asunto, e.target, "asunto")
      break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, "telefono")
      break;
    }
  }

  const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto")
      document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto")
      document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-check")
      document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-xmark")
      document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove("formulario_input-error-activo")
      campos[campo] = true
    } else {
      document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto")
      document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto")
      document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-xmark")
      document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-check")
      document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add("formulario_input-error-activo")
      campos[campo] = false
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
  })

  document.addEventListener("submit", (e) => {
    
    if(campos.name && campos.email && campos.asunto && campos.telefono){

      document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje-activo")
      
      document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-activo")
      setTimeout(() => {
        formulario.reset()
        document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exito-activo")
      }, 5000);

      document.querySelectorAll(".formulario_grupo-correcto").forEach( icono => {
        icono.classList.remove("formulario_grupo-correcto")

         campos = {
          name : false,
          email : false,
          asunto : false,
          telefono : false
        }
      })
    } else {
      document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo")
    }
  })
  
}