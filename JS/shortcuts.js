export function shorcuts () {
  document.addEventListener('keydown', (evento) => {
    //Eventos de teclado para enviar alertas y confirmaciones.
    console.log(evento)
    if(evento.ctrlKey && evento.key.toLocaleLowerCase() === 'a') alert('Welcome Dom :D')

    if(evento.altKey && evento.key.toLocaleLowerCase() === 'a') confirm('¿Confirma que es mayor de edad para navegar en esta pagína?')
  })
}

//Pendiente añadir el juego de la pelota a continuación...