export default function randomRoulette(input, players) {
 const $btn = document.getElementById(input)
 let $list = document.getElementById(players)

 $btn.addEventListener("click", () => {
  let randon = Math.floor(Math.random() * ($list.childElementCount))
  alert(`El premio es para: "${$list.children[randon].textContent}"`)
 })
}
