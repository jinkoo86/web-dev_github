let productNameInputElement = document.getElementById('product-name')
let remainingCharsElement = document.getElementById('remaining-chars')

//console.dir(productNameInputElement)

let maxAllowedChars = productNameInputElement.maxLength

function updateRemainingCharacters(event) {
  let data = event.target.value
  let dataLength = data.length

  let remainingCharacters = maxAllowedChars - dataLength

  remainingCharsElement.textContent = remainingCharacters
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)
