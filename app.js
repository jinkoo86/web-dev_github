// // document.body.children[1].children[0].href = 'https://google.com'

// let anchorElement = document.getElementById('external-link')
// anchorElement.href = 'https://google.com'

// anchorElement = document.querySelector('#external-id')

// //ADD AN ELEMENT
// let newAnchorElement = document.createElement('a')
// newAnchorElement.href = 'http://google.com'
// newAnchorElement.textContent = 'This leads to Google'

// let firstParagraph = document.querySelector('p')

// firstParagraph.append(newAnchorElement)
// // Remove
// let firstH1Element = document.querySelector('h1')
// firstH1Element.remove()

// // Move
// firstParagraph.parentElement.append(firstParagraph)

// // innerHTML

// firstParagraph.innerHTML = 'Hi! This is <p><strong>important</strong></p>'

let paragraphElement = document.querySelector('p')

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked'
}

paragraphElement.addEventListener('click', changeParagraphText)

let inputElement = document.querySelector('input')

function changeInputElement(event) {
  // let enterText = inputElement.value
  let enteredText = event.target.value
  // let eneteredText = event.data
  console.log(enteredText)
  // console.log(event)
}

inputElement.addEventListener('input', changeInputElement)
