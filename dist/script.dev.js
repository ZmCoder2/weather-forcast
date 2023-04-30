"use strict";

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
var citiesSearch = document.getElementById("citiesSearch");
var btnSearch = document.getElementById("btnSearch");
var cityName = document.getElementById("cityName");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var hum = document.getElementById("hum");

function fetchAPI(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial")).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    cityName.innerHTML = data.name;
    temp.innerHTML = "Temp: " + Math.floor(data.main.temp) + "&#176F";
    wind.innerHTML = "Wind: " + Math.floor(data.wind.speed) + "mph";
    hum.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + "%";
  });
  btnSearch.addEventListener("click", function () {
    var city = citiesSearch.value;
    fetchAPI(city);
  });

  function fetchAPI(city) {
    (function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      fiveDayWeather.innerHTML = ""; // clear previous content

      for (var i = 0; i < data.list.length; i += 8) {
        // get data for every 24 hours (8 * 3 hours)
        var forecastData = data.list[i];
        var forecastDiv = document.createElement("div");
        forecastDiv.innerHTML = "\n          <h3>".concat(forecastData.dt_txt, "</h3>\n          <p>Temp: ").concat(Math.floor(forecastData.main.temp), "&#176F</p>\n          <p>Wind: ").concat(Math.floor(forecastData.wind.speed), "mph</p>\n          <p>Humidity: ").concat(Math.floor(forecastData.main.humidity), "%</p>\n        ");
        fiveDayWeather.appendChild(forecastDiv);
      }

      cityName.innerHTML = data.city.name;
      temp.innerHTML = "Temp: " + Math.floor(data.list[0].main.temp) + "&#176F";
      wind.innerHTML = "Wind: " + Math.floor(data.list[0].wind.speed) + "mph";
      hum.innerHTML = "Humidity: " + Math.floor(data.list[0].main.humidity) + "%";
    }); // extract the data for the second card
    // replace "forecastDiv" with the ID of your second card's container element

    var forecastDiv2 = document.getElementById("forecastDiv2");

    for (var i = 8; i <= 15; i++) {
      var forecastData = data.list[i];
      var date = new Date(forecastData.dt_txt);
      var day = daysOfWeek[date.getDay()];
      var iconUrl = "https://openweathermap.org/img/w/".concat(forecastData.weather[0].icon, ".png");
      var forecastHTML = "\n          <div class=\"forecast-day\">\n            <div>".concat(day, "</div>\n            <img src=\"").concat(iconUrl, "\" alt=\"").concat(forecastData.weather[0].description, "\">\n            <div>").concat(Math.floor(forecastData.main.temp), "&#176F</div>\n          </div>\n        ");
      forecastDiv2.insertAdjacentHTML("beforeend", forecastHTML);
    }

    var forecastDiv3 = document.getElementById("forecastDiv3");
    forecastDiv3.innerHTML = "dayThree";

    for (var _i = 16; _i <= 23; _i++) {
      var _forecastData = data.list[_i];

      var _date = new Date(_forecastData.dt_txt);

      var _day = daysOfWeek[_date.getDay()];

      var _iconUrl = "https://openweathermap.org/img/w/".concat(_forecastData.weather[0].icon, ".png");

      var _forecastHTML = "\n          <div class=\"forecast-day\">\n            <div>".concat(_day, "</div>\n            <img src=\"").concat(_iconUrl, "\" alt=\"").concat(_forecastData.weather[0].description, "\">\n            <div>").concat(Math.floor(_forecastData.main.temp), "&#176F</div>\n          </div>\n        ");

      forecastDiv3.insertAdjacentHTML("beforeend", _forecastHTML);
    }

    var forecastDiv4 = document.getElementById("forecastDiv4");
    forecastDiv4.innerHTML = "";

    for (var _i2 = 24; _i2 <= 31; _i2++) {
      var _forecastData2 = data.list[_i2];

      var _date2 = new Date(_forecastData2.dt_txt);

      var _day2 = daysOfWeek[_date2.getDay()];

      var _iconUrl2 = "https://openweathermap.org/img/w/".concat(_forecastData2.weather[0].icon, ".png");

      var _forecastHTML2 = "\n          <div class=\"forecast-day\">\n            <div>".concat(_day2, "</div>\n            <img src=\"").concat(_iconUrl2, "\" alt=\"").concat(_forecastData2.weather[0].description, "\">\n            <div>").concat(Math.floor(_forecastData2.main.temp), "&#176F</div>\n            </div>\n          ");

      forecastDiv3.insertAdjacentHTML("beforeend", _forecastHTML2);
    }

    btnSearch.addEventListener("click", function () {
      var city = citiesSearch.value;
      fetchAPI(city);
      fetchFiveDayForecast(city);
    });
  } // extract the data for the first card

} // ://api..org/data/2.5/weather?q=${city}&appid=<YOUR_APP_ID>&units=imperial`)
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
//     const cityForeCast = "api..org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e52a29666bfe7798641471ef3c524f6e"
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