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
    $("cities").autocomplete({
      source: availableCities
    });
  });  

  
  document.getElementById("searchBtn").addEventListener("click", function() {
    var city = document.getElementById("cities").value;
    var apiKey = "{e52a29666bfe7798641471ef3c524f6e}";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      success: function(response) {
        document.append()
      }
    });
  });
  var temp = response.main.temp;
  var desc = response.weather[0].description;
  
  document.querySelector("#chosenCity .card-title").textContent = city;
  document.querySelector("#chosenCity .card-text").textContent = "Temperature: " + temp + "°F, " + desc;
  
