
'use strict'

const loadContent = localStorage.getItem('content')
const input: HTMLPreElement = document.querySelector('#input') as HTMLPreElement
const output: HTMLDivElement = document.querySelector('#output') as HTMLDivElement

// initialise the input content
input.innerHTML = ''

// save input text into local storage
input.addEventListener('input', updateValue)

function updateValue(e: any) {
  localStorage.setItem('content', input.innerHTML)
  output.innerHTML = e.target.textContent
    .replaceAll('Matt', '<span style="color:orange">Matt</span>')
    .replaceAll('World', '<span style="color:limegreen">World</span>')
}

// copy input text into output
if (loadContent) {
  input.innerHTML = loadContent
    .replaceAll('Matt', '<span style="color:orange">Matt</span>')
    .replaceAll('World', '<span style="color:limegreen">World</span>')
}
 if (loadContent) {
  output.innerHTML = loadContent
    .replaceAll('Matt', '<span style="color:orange">Matt</span>')
    .replaceAll('World', '<span style="color:limegreen">World</span>')
}
