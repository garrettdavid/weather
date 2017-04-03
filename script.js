var tempC;
var tempF;
var weather;
var tempIsF = true;

$(function() {
    $.getJSON("https://api.wunderground.com/api/40a2c598afbe8e7d/conditions/q/autoip.json", function(data) {
        var location = data.current_observation.display_location.full;
        weather = data.current_observation.weather;
        tempF = data.current_observation.temp_f + "&deg;F";
        tempC = data.current_observation.temp_c + "&deg;C";
        $("#loc").text(location);
        $("#temp").html('<h1 id="temp">Temperature: ' + weather + ' & ' + tempF + '</h1>');
    });

    $("#tempBtn").click(function() {
        if (tempIsF) {
            $("#temp").html('<h1 id="temp">Temperature: ' + weather + ' & ' + tempC + '</h1>');
            tempIsF = false;
        } else {
            $("#temp").html('<h1 id="temp">Temperature: ' + weather + ' & ' + tempF + '</h1>');
            tempIsF = true;
        }
    });
});
