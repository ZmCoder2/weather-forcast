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

let citiesSearch = document.getElementById("citiesSearch")
const btnSearch = document.getElementById("btnSearch")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")
const hum = document.getElementById("hum")

function fetchAPI(city) {

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
    })
}

btnSearch.addEventListener("click", function () {
  const city = citiesSearch.value;
  fetchAPI(city)
});


function fetchAPI(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data);
      fiveDayWeather.innerHTML = ""; // clear previous content
      for (let i = 0; i < data.list.length; i += 8) { // get data for every 24 hours (8 * 3 hours)
        let forecastData = data.list[i];
        let forecastDiv = document.createElement("div");
        forecastDiv.innerHTML = `
          <h3>${forecastData.dt_txt}</h3>
          <p>Temp: ${Math.floor(forecastData.main.temp)}&#176F</p>
          <p>Wind: ${Math.floor(forecastData.wind.speed)}mph</p>
          <p>Humidity: ${Math.floor(forecastData.main.humidity)}%</p>
        `;
        fiveDayWeather.appendChild(forecastDiv);
      }
      cityName.innerHTML = data.city.name;
      temp.innerHTML = "Temp: " + Math.floor(data.list[0].main.temp) + "&#176F";
      wind.innerHTML = "Wind: " + Math.floor(data.list[0].wind.speed) + "mph";
      hum.innerHTML = "Humidity: " + Math.floor(data.list[0].main.humidity) + "%";
    })
    const forecastDiv2 = document.getElementById("forecastDiv2");
    
    for (let i = 8; i <= 15; i++) {
      let forecastData = data.list[i]; // THIS IS WHERE THE ERROR IS IN THE CONSOLE
      const date = new Date(forecastData.dt_txt);
      const day = daysOfWeek[date.getDay()];
      const iconUrl = `https://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
      const forecastHTML = `
        <div class="forecast-day">
          <div>${day}</div>
          <img src="${iconUrl}" alt="${forecastData.weather[0].description}">
          <div>${Math.floor(forecastData.main.temp)}&#176F</div>
        </div>
      `;
      forecastDiv2.insertAdjacentHTML("beforeend", forecastHTML);
    }
}

// extract the data for the first card





// ://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<YOUR_APP_ID>&units=imperial`)
//     .then((res) => res.json())
//     .then((data) => {
//       // Update the HTML for the main weather card
//       const cityName = document.getElementById("cityName");
//       const temp = document.getElementById("temp");
//       const wind = document.getElementById("wind");
//       const hum = document.getElementById("hum");

//       cityName.innerHTML = data.name;
//       temp.innerHTML = `Temperature: ${Math.round(data.main.temp)} &#176;F`;
//       wind.innerHTML = `Wind: ${Math.round(data.wind.speed)} mph`;
//       hum.innerHTML = `Humidity: ${data.main.humidity}%`;

//       // Fetch and display the five-day forecast
//       fetchFiveDayForecast(city);
//     })
//     .catch((error) => console.log(error));
// }




/* <h5 class="card-title">${new Date(item.dt * 1000).toLocaleDateString()}</h5>
            <p class="card-text">Temperature: ${Math.round(item.main.temp)} &#176;F</p>
            <p class="card-text">Humidity: ${item.main.humidity}%</p>
            <p class="card-text">Wind: ${item.wind.speed} mph</p> */






// let cityName = document.getElementById('inputCity');
// let searchBtn = document.getElementById('btnSearch');

// console.log('inputCity');

// searchBtn.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (event.target.id === 'btnSearch') {
//     cityName = document.getElementById("inputCity").value;
//     const cityForeCast = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e52a29666bfe7798641471ef3c524f6e"

//   fetch(cityForeCast).then(function (response){
//     return response.json()
//   }).then(function(data) {
//     console.log('list')
//   })
//   }
// })













// document.getElementById("searchBtn").addEventListener("click", function () {
//   var city = document.getElementById("cities").value;
//   var apiKey = "{e52a29666bfe7798641471ef3c524f6e}";
//   var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e52a29666bfe7798641471ef3c524f6e" + city + "&appid=" + apiKey;

//   $.ajax({
//     url: apiUrl,
//     method: "GET",
//     dataType: "json",
//     success: function (response) {
//       document.append()
//     }
//   });
// });
// var temp = response.main.temp;
// var desc = response.weather[0].description;

// document.querySelector("#chosenCity .card-title").textContent = city;
// document.querySelector("#chosenCity .card-text").textContent = "Temperature: " + temp + "°F, " + desc;