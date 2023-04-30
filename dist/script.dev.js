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
    temp.innerHTML = "Temp: " + Math.floor(data.main.temp) + "&#176F" + " Wind: " + Math.floor(data.wind.speed) + "mph" + " Humidity: " + Math.floor(data.main.humidity) + "%"; // wind.innerHTML = "Wind: " + Math.floor(data.wind.speed) + "mph"
    // hum.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + "%"
  });
  var secondDay = document.getElementById("secondDay");
  var secondDayTemp = document.getElementById("tempNextDay");
  var secondDayWind = document.getElementById("windNextDay");
  var secondDayHum = document.getElementById("humNextDay");
  var futureWeather = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(city, "&appid=e52a29666bfe7798641471ef3c524f6e&units=imperial");
  fetch(futureWeather).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    secondDay.innerHTML = data.list[2].dt_txt;
    secondDayTemp.innerHTML = " Temp: " + Math.floor(data.list[2].main.temp) + "&#176F";
    secondDayWind = " Wind: " + Math.floor(data.list[2].wind.speed) + "mph";
    secondDayHum = " Humidity: " + Math.floor(data.list[2].main.humidity) + "%";
  });
}

btnSearch.addEventListener("click", function () {
  var city = citiesSearch.value;
  fetchAPI(city);
}); // btnSearch.addEventListener("click", function () {
//   const city = citiesSearch.value;
//   fetchAPI(city)
// });