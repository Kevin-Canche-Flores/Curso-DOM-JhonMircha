export default function searchFilter (id, cards) {
  const $search = document.getElementById(id)
  const $cards = document.querySelectorAll(cards)

  $search.addEventListener('keyup', () => {

    const $searchText = document.getElementById(id).value.toLowerCase()
    
      $cards.forEach(card => { 
      let $figcaptionText = card.querySelector("figcaption").textContent.toLowerCase()
      $figcaptionText.includes($searchText) ? card.style.display = 'block' : card.style.display = 'none'
    })
  })
} 