
async function getData (town) {
  const townid = town.toString()
  const resolve = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + townid + '&APPID=fc6b2859b88be03095315a3c4da2b5de')
  return resolve.json()
}

export { getData }
