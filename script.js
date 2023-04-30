// The jQuery would keep breaking :/
//This function gives the id 'cities' to autocomplete the search bar for easier use for user
//var availableCities = [
//  "Atlanta",
//  "Denver",
//  "Chicago",
//  "Tampa",
//  "Dallas",
//  "Seattle",
//  "San Francisco",
//  "New York"
//];

const citiesSearch = document.getElementById("citiesSearch")
const btnSearch = document.getElementById("btnSearch")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")
const hum = document.getElementById("hum")
const weatherIcon = document.getElementById("weatherIcon")

function fetchAPI(city) {
// this first fetch is for the main card
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      cityName.innerHTML = data.name;
      temp.innerHTML = "Temp: " + Math.floor(data.main.temp) + "&#176F"
      wind.innerHTML = "Wind: " + Math.floor(data.wind.speed) + "mph"
      hum.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + "%"
      weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    })

    // This is the first card below the main card that will display the second day Weather Forecast
  const secondDay = document.getElementById("secondDay")
  const secondDayTemp = document.getElementById("secondDayTemp")
  const secondDayWind = document.getElementById("secondDayWind")
  const secondDayHum = document.getElementById("secondDayHum")
  let futureWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial`

  fetch(futureWeather)
    .then((res) => {
      return res.json()
    })
    .then((data1) => {
      console.log(data1)
      secondDay.innerHTML = data1.list[0].dt_txt;
      secondDayTemp.innerHTML = "Temp: " + Math.floor(data1.list[0].main.temp) + "&#176F";
      secondDayWind.innerHTML = "Wind: " + Math.floor(data1.list[0].wind.speed) + "mph";
      secondDayHum.innerHTML = "Humidity: " + Math.floor(data1.list[0].main.humidity) + "%";
      secondDayWeatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data1.list[0].weather[0].icon}.png`);
    });

    // This is the second card below the main card that will display the third day Weather Forecast
    const thirdDay = document.getElementById("thirdDay")
    const thirdDayTemp = document.getElementById("thirdDayTemp")
  const thirdDayWind = document.getElementById("thirdDayWind")
  const thirdDayHum = document.getElementById("thirdDayHum")

  fetch(futureWeather)
  .then((res) => {
    return res.json()
  })
  .then((data2) => {
    console.log(data2)
    thirdDay.innerHTML = data2.list[8].dt_txt;
    thirdDayTemp.innerHTML = "Temp: " + Math.floor(data2.list[8].main.temp) + "&#176F";
    thirdDayWind.innerHTML = "Wind: " + Math.floor(data2.list[8].wind.speed) + "mph";
    thirdDayHum.innerHTML = "Humidity: " + Math.floor(data2.list[8].main.humidity) + "%";
    thirdDayWeatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data2.list[8].weather[0].icon}.png`);
  });
  
  // This is the third card below the main card that will display the fourth days Weather Forecast
  const fourthDay = document.getElementById("fourthDay")
    const fourthDayTemp = document.getElementById("fourthDayTemp")
  const fourthDayWind = document.getElementById("fourthDayWind")
  const fourthDayHum = document.getElementById("fourthDayHum")

  fetch(futureWeather)
  .then((res) => {
    return res.json()
  })
  .then((data3) => {
    console.log(data3)
    fourthDay.innerHTML = data3.list[16].dt_txt;
    fourthDayTemp.innerHTML = "Temp: " + Math.floor(data3.list[16].main.temp) + "&#176F";
    fourthDayWind.innerHTML = "Wind: " + Math.floor(data3.list[16].wind.speed) + "mph";
    fourthDayHum.innerHTML = "Humidity: " + Math.floor(data3.list[16].main.humidity) + "%";
    fourthDayWeatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data3.list[16].weather[0].icon}.png`);
  });

  // This is the fourth card below the main card that will display the fifth day Weather Forecast
  const fifthDay = document.getElementById("fifthDay")
    const fifthDayTemp = document.getElementById("fifthDayTemp")
  const fifthDayWind = document.getElementById("fifthDayWind")
  const fifthDayHum = document.getElementById("fifthDayHum")

  fetch(futureWeather)
  .then((res) => {
    return res.json()
  })
  .then((data4) => {
    console.log(data4)
    fifthDay.innerHTML = data4.list[24].dt_txt;
    fifthDayTemp.innerHTML = "Temp: " + Math.floor(data4.list[24].main.temp) + "&#176F";
    fifthDayWind.innerHTML = "Wind: " + Math.floor(data4.list[24].wind.speed) + "mph";
    fifthDayHum.innerHTML = "Humidity: " + Math.floor(data4.list[24].main.humidity) + "%";
    fifthDayWeatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data4.list[24].weather[0].icon}.png`);
  });

  // This is the fifth card below the main card that will display the sixth day Weather Forecast
  const sixthDay = document.getElementById("sixthDay")
    const sixthDayTemp = document.getElementById("sixthDayTemp")
  const sixthDayWind = document.getElementById("sixthDayWind")
  const sixthDayHum = document.getElementById("sixthDayHum")

  fetch(futureWeather)
  .then((res) => {
    return res.json()
  })
  .then((data5) => {
    console.log(data5)
    sixthDay.innerHTML = data5.list[32].dt_txt;
    sixthDayTemp.innerHTML = "Temp: " + Math.floor(data5.list[32].main.temp) + "&#176F";
    sixthDayWind.innerHTML = "Wind: " + Math.floor(data5.list[32].wind.speed) + "mph";
    sixthDayHum.innerHTML = "Humidity: " + Math.floor(data5.list[32].main.humidity) + "%";
    sixthDayWeatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data5.list[32].weather[0].icon}.png`);
  });
}

btnSearch.addEventListener("click", function () {
  const city = citiesSearch.value;
  fetchAPI(city)
});





// Below is where I was trying to get the city buttons on the side of the page to work

// const atlantaBtn = document.getElementById("atlantaBtn")
// const atlantaTemp = document.getElementsByClassName("list-group-item")
// const atlantaWind = document.getElementsByClassName("list-group-item")
// const atlantaHum = document.getElementsByClassName("list-group-item")
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial`)
// .then((res) => {
//   return res.json()
// })
// .then((data6) => {
//   console.log(data6)
//   cityName.innerHTML = data6.name;
//   atlantaTemp.innerHTML = "Temp: " + Math.floor(data6.main.temp) + "&#176F"
//   atlantaWind.innerHTML = "Wind: " + Math.floor(data6.wind.speed) + "mph"
//   atlantaHum.innerHTML = "Humidity: " + Math.floor(data6.main.humidity) + "%"
// })
// // fetch(Atlanta)
// // console.log(Atlanta)
// atlantaBtn.addEventListener("click", function () {
//   const atlantaBtn = citiesSearch.value;
//   fetchAPI(atlantaBtn)
// });