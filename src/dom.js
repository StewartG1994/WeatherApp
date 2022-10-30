import { getData } from './data'
import back from './assets/back.png'
import css from './styles.css'

function kelvinCovert (kelvin) {
  const celsius = Math.round(kelvin - 273.15)
  return celsius
}

function returnBack () {
  location.reload()
}

function displayNodes (titleInfo, dayInfo, currentWeatherInfo, tempInfo, humidityInfo, pressureInfo) {
  const container = document.querySelector('.searchContainer')
  container.textContent = ''
  const titleDiv = document.createElement('div')
  titleDiv.className = 'titleDiv'
  const title = document.createElement('h1')
  const weatherDiv = document.createElement('div')
  weatherDiv.className = 'weatherDiv'
  const temp = document.createElement('p')
  const humidity = document.createElement('p')
  humidity.className = 'humidity'
  const pressure = document.createElement('p')
  pressure.className = 'pressure'
  const returnDiv = document.createElement('div')
  returnDiv.className = 'returnDiv'
  const backButton = document.createElement('img')
  const returnP = document.createElement('p')
  returnP.textContent = 'Return'
  backButton.className = 'backButton'
  backButton.src = back
  title.textContent = titleInfo + ' ' + dayInfo
  temp.textContent = 'Its currently ' + kelvinCovert(tempInfo) + 'C' + ' with ' + currentWeatherInfo
  humidity.textContent = 'Humidity ' + humidityInfo + '%'
  pressure.textContent = 'Pressure ' + pressureInfo + ' millibars'
  titleDiv.appendChild(title)
  weatherDiv.append(temp)
  returnDiv.append(returnP, backButton)
  container.append(titleDiv, weatherDiv, humidity, pressure, returnDiv)
  console.log(backButton)
  backButton.addEventListener('click', returnBack)
}

function displayInfomation () {
  const search = document.querySelector('.searchIcon')
  const textBox = document.getElementById('searchinput')
  search.addEventListener('click', () => {
    const info = getData(textBox.value)
    info.then(function (result) {
      const info = result
      displayNodes(info.name, info.sys.country, info.weather[0].description, info.main.temp, info.main.humidity, info.main.pressure)
      console.log(info)
    }
    )
  })
}

export { displayInfomation }
