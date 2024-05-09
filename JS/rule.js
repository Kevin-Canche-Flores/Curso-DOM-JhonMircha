export default function randomRoulette(input, list) {
 const $btn = document.getElementById(input)
 let $list = document.getElementById(list)

 $btn.addEventListener("click", () => {
  let randon = Math.floor(Math.random() * ($list.childElementCount + 1))
  alert(`El premio es para: "${$list.children[randon].textContent}"`)
 })
}
