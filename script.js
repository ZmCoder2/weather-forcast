$(function() {
    var availableTags = [
      "Atlanta",
      "Denver",
      "Chicago",
      "Tampa",
      "Dallas",
      "Seattle",
      "San Francisco",
      "New York"
    ];
    $("#searchBar input").autocomplete({
      source: availableTags
    });
  });  
  console.log(searchBar)


// Atlanta
// {
//     "cloud_pct": 0,
//     "temp": 26,
//     "feels_like": 26,
//     "humidity": 32,
//     "min_temp": 24,
//     "max_temp": 28,
//     "wind_speed": 5.14,
//     "wind_degrees": 190,
//     "sunrise": 1681988456,
//     "sunset": 1682035899
//   }



// Denver
// {
//   "cloud_pct": 100,
//   "temp": 8,
//   "feels_like": 5,
//   "humidity": 23,
//   "min_temp": 5,
//   "max_temp": 10,
//   "wind_speed": 4.47,
//   "wind_degrees": 295,
//   "sunrise": 1681992911,
//   "sunset": 1682041329
// }




// Chicago
// {
//     "cloud_pct": 100,
//     "temp": 25,
//     "feels_like": 24,
//     "humidity": 41,
//     "min_temp": 17,
//     "max_temp": 26,
//     "wind_speed": 8.23,
//     "wind_degrees": 190,
//     "sunrise": 1681988563,
//     "sunset": 1682037358
//   }


// Tampa
// {
//     "cloud_pct": 75,
//     "temp": 28,
//     "feels_like": 28,
//     "humidity": 45,
//     "min_temp": 24,
//     "max_temp": 29,
//     "wind_speed": 5.66,
//     "wind_degrees": 80,
//     "sunrise": 1681988397,
//     "sunset": 1682035032
//   }




// Dallas
// {
//     "cloud_pct": 75,
//     "temp": 24,
//     "feels_like": 24,
//     "humidity": 66,
//     "min_temp": 22,
//     "max_temp": 26,
//     "wind_speed": 6.69,
//     "wind_degrees": 350,
//     "sunrise": 1681991501,
//     "sunset": 1682038803
//   }



// Seattle 
// {
//     "cloud_pct": 100,
//     "temp": 8,
//     "feels_like": 4,
//     "humidity": 84,
//     "min_temp": 6,
//     "max_temp": 10,
//     "wind_speed": 6.17,
//     "wind_degrees": 150,
//     "sunrise": 1681996274,
//     "sunset": 1682046292
//   }





// San Francisco
// {
//     "cloud_pct": 40,
//     "temp": 17,
//     "feels_like": 16,
//     "humidity": 52,
//     "min_temp": 13,
//     "max_temp": 23,
//     "wind_speed": 9.77,
//     "wind_degrees": 280,
//     "sunrise": 1681997260,
//     "sunset": 1682045348
//   }




// New York
// {
//     "cloud_pct": 0,
//     "temp": 13,
//     "feels_like": 12,
//     "humidity": 58,
//     "min_temp": 10,
//     "max_temp": 18,
//     "wind_speed": 5.36,
//     "wind_degrees": 155,
//     "sunrise": 1681985397,
//     "sunset": 1682033976
//   }