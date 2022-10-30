import css from './styles.css'
import back from './assets/back.png'

function returnBack () {
  location.reload()
}

function displayError () {
  const container = document.querySelector('.searchContainer')
  container.textContent = ''
  const displayErrorP = document.createElement('p')
  displayErrorP.className = 'displayError'
  displayErrorP.textContent = 'Please enter a valid town or city name'
  container.appendChild(displayErrorP)

  const returnDiv = document.createElement('div')
  returnDiv.className = 'returnDiv'
  const backButton = document.createElement('img')
  const returnP = document.createElement('p')
  returnP.textContent = 'Return'
  backButton.className = 'backButton'
  backButton.src = back
  returnDiv.append(returnP, backButton)
  container.append(displayErrorP, returnDiv)
  backButton.addEventListener('click', returnBack)
}

async function getData (town) {
  try {
    const townid = town.toString()
    const resolve = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + townid + '&APPID=fc6b2859b88be03095315a3c4da2b5de', { mode: 'cors' })
    const result = resolve.json()
    if (resolve.ok) return result
    else throw new Error('test')
  } catch (error) {
    console.log(error)
    displayError()
  }
}

export { getData }
