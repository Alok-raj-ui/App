console.log('Hello World!');


let sbtn = document.querySelector('.fa-magnifying-glas')


let search = document.querySelector('#txtarea')





async function weather(city) {
let apiurl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4f9bc325e31de739b4ad23e939ce696&units=metric`)

let data = await apiurl.json()

let temp = document.querySelector('#temp')
temp.innerHTML = data.main.temp + '°C'

let text = document.querySelector('#text')
text.innerHTML = data.name

let wind = document.querySelector('#speed')
wind.innerHTML = data.wind.speed + ' km/hr'

let humidity = document.querySelector('#humidity')
humidity.innerHTML = data.main.humidity+' %'

let pressure = document.querySelector('#pressure')
pressure.innerHTML = data.main.pressure + ' pa'

console.log(data)

let text2 = document.querySelector('#text2')

if (
  data.main.temp > 25 &&
  data.main.humidity < 60 &&
  data.main.pressure > 1010 &&
  data.wind.speed < 20
) {
  text2.innerHTML = "sunny";
}

if (
  data.main.temp >= 15 &&
  data.main.temp <= 30 &&
  data.main.humidity > 70 &&
  data.main.pressure < 1005 &&
  data.wind.speed > 15
) {
  text2.innerHTML = "rainy";
} else if (
  data.main.temp >= 5 &&
  data.main.temp <= 20 &&
  data.main.humidity > 85 &&
  data.main.pressure >= 1005 &&
  data.main.pressure <= 1020 &&
  data.wind.speed < 10
) {
  text2.innerHTML = "mist";
} else if (
  data.main.temp < 10 &&
  data.main.humidity >= 30 &&
  data.main.humidity <= 75 &&
  data.main.pressure > 1000 &&
  data.wind.speed < 15
) {
  text2.innerHTML = "cold";
} else {
  text2.innerHTML = "it's a good weather";
}


}


sbtn.addEventListener('click',()=>{
  weather(search.value)
  console.log(search.value)
})