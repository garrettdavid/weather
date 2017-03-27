var locData;
var city;
var weatherUrl = "http://api.aerisapi.com/observations/";
var weatherData;
var tempF;
var tempC;
var tempIsF;

//get location data and build URL for API
$.getJSON("http://ip-api.com/json", function(data) {
  locData = data;
  city = data.city + ", " + data.region;
  weatherUrl += city + "?client_id=2SvrQHFxcKgk9voYaw3VM&client_secret=N5YfLCpUo9m2vA6kJvhuUZysv36D8p6lH4x7MIij";

//get weather data from API
  $.ajax({
    url: weatherUrl,
    dataType: "jsonp",
    success: function(data) {
      weatherData = data.response.ob;
      tempF = weatherData.tempF + "&deg;F";
      tempC = weatherData.tempC + "&deg;C";
      $("#loc").text(city);
      $("#temp").html('Temperature: ' + weatherData.weather + ' & ' + tempF);
      $("#icon").attr("src", "Assets/Aeris_WxIcons_110x110/" + weatherData.icon);
      tempIsF = true;
    }
  });

  $("#tempBtn").click(changeTemp);
});

function changeTemp() {
  if (tempIsF) {
    $("#temp").html('Temperature: ' + weatherData.weather + ' & ' + tempC);
    tempIsF = false;
  } else {
    $("#temp").html('Temperature: ' + weatherData.weather + ' & ' + tempF);
      tempIsF = true;
  }
}
