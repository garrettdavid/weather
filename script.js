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
        var iconUrl = "https://icons.wxug.com/i/c/k/" + data.current_observation.icon + ".gif";
        $("#icon").attr("src", iconUrl);
        $("#loc").text(location);
        $("#temp").html('Temperature: ' + weather + ' & ' + tempF);
    });

    $("#tempBtn").click(function() {
        if (tempIsF) {
            $("#temp").html('Temperature: ' + weather + ' & ' + tempC);
            $("#tempBtn").text('Fahrenheit');
            tempIsF = false;
        } else {
            $("#temp").html('Temperature: ' + weather + ' & ' + tempF);
            $("#tempBtn").text('Celcius');
            tempIsF = true;
        }
    });
});
