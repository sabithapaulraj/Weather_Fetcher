async function showWeather() {
  let city = document.getElementById('city')
  let output = document.getElementById('output')
  let cityinput = city.value.trim()
  if (cityinput === '') {
    output.textContent = 'Type a city name.'
    return
  }
  let api = 'https://wttr.in/' + cityinput + '?format=j1'
  try {
    let res = await fetch(api)
    let info = await res.json()
    let place = info.nearest_area[0].areaName[0].value
    let temp = info.current_condition[0].temp_C + '°C'
    let desc = info.current_condition[0].weatherDesc[0].value
    output.innerHTML =
      '<p><b>Place:</b> ' + place + '</p>' +
      '<p><b>Temperature:</b> ' + temp + '</p>' +
      '<p><b>Weather Description:</b> ' + desc + '</p>'
  } catch (err) {
    output.textContent = 'Weather not found.'
  }
}
let btn = document.getElementById('get')
btn.onclick = showWeather 