export default function textReader (select,  text) { 
  const $selectVoices = document.getElementById(select)
  const $text = document.getElementById(text)
  const utterrance = new SpeechSynthesisUtterance()
  let voices = []

  document.addEventListener("DOMContentLoaded", e => {

    window.speechSynthesis.addEventListener("voiceschanged", e => {
      voices = speechSynthesis.getVoices()
      
      voices.forEach( voice => {
        const $option = document.createElement("option")
        $option.textContent = `${voice.name} - ${voice.lang}`
        $option.value = voice.name
        $option.classList.add("option-voices")
        $selectVoices.appendChild($option)
      })
    })
  })

  document.addEventListener("change", event => {
    if(event.target === $selectVoices){
      utterrance.voice = voices.find(voice => voice.name === event.target.value)
    }
  })

  document.addEventListener("click", event => {
    if(event.target === document.getElementById("text-reader")){
      utterrance.text = $text.value;
      window.speechSynthesis.speak(utterrance)
    }    
  })
}
