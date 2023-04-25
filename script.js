// This function gives the id 'cities' to autocomplete the search bar for easier use for user
$(function() {
    var availableCities = [
      "Atlanta",
      "Denver",
      "Chicago",
      "Tampa",
      "Dallas",
      "Seattle",
      "San Francisco",
      "New York"
    ];
    $("#cities").autocomplete({
      source: availableCities
    });
  });  


function renderWeather(weather) {

  var resultsContainer = document.querySelector('#weatherResults');
  // h2 for city name
  var city = document.createElement('h2');
  city.textContent = weather.name;
  resultsContainer.append('weatherResults');
  // h3 for date
  // <p> for temp, wind, humidity


  // Atlanta container
  var atlWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(atlWeather);
  console.log(weather);

  var denWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(denWeather);

  var chiWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(chiWeather);

  var tampaWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(tampaWeather);

  var dalWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(dalWeather);

  var seaWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(seaWeather);

  var sfWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(sfWeather);

  var nyWeather = document.createElement('p');
  details.append('Temp: ' + weather.main.temp + ' F');
  details.append('Wind: ' + wind + ' MPH');
  details.append('Humidity ' + main.humidity + ' %')
  resultsContainer.append(nyWeather);

}

//fetch weather data for 
function fetchWeather(query) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=e52a29666bfe7798641471ef3c524f6e'

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

}
fetchWeather();

  //fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)


  //Math.floor(data1.list[0].main.feels_like * 1.8 - 459.67)