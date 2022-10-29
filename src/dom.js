import { getData } from './data'
import back from './assets/back.png'
const backButton = document.createElement('img')

function displayNodes (titleInfo, dayInfo, currentWeatherInfo, tempInfo, humidityInfo, pressureInfo) {
  const container = document.querySelector('.searchContainer')
  container.textContent = ''
  const title = document.createElement('h1')
  const day = document.createElement('p')
  const currentWeather = document.createElement('p')
  const temp = document.createElement('h1')
  const humidity = document.createElement('p')
  const pressure = document.createElement('p')
  const backButton = document.createElement('img')
  backButton.className = 'backButton'
  backButton.src = back
  title.textContent = titleInfo
  day.textContent = dayInfo
  temp.textContent = tempInfo
  currentWeather.textContent = currentWeatherInfo
  humidity.textContent = humidityInfo
  pressure.textContent = pressureInfo
  container.append(title, day, currentWeather, temp, humidity, pressure, backButton)
}

function returnBack () {
  backButton.addEventListener('click', () => {
    console.log(backButton)
  })
}

function displayInfomation () {
  const search = document.querySelector('.searchIcon')
  const textBox = document.getElementById('searchinput')
  search.addEventListener('click', () => {
    const info = getData(textBox.value)
    info.then(function (result) {
      const info = result
      displayNodes(info.name, info.sys.country, info.weather[0].main, info.main.temp, info.main.humidity, info.main.pressure)
      console.log(info)
    }
    )
    returnBack()
  })
}

export { displayInfomation }
