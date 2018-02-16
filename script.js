/*
Note: Many internet browsers now require an HTTP Secure (https://) 
connection to obtain a user's locale via HTML5 Geolocation. For this 
reason, we recommend using HTML5 Geolocation to get user location and 
then use the freeCodeCamp Weather API https://fcc-weather-api.glitch.me 
which uses an HTTP Secure connection for the weather. Also, be sure to 
connect to CodePen.io via https://.

RESOURCE: https://fcc-weather-api.glitch.me/ 
USAGE:
Use the endpoint: https://fcc-weather-api.glitch.me/. Use this endpoint 
to get the weather at a location. To prevent abuses this server accepts 
GET requests only, and serves only the route 
/api/current?lon=:longitude&lat=:latitude. Images links are included in 
the JSON under weather[0].icon. This is enough to complete the challenge.

Example:
Request: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139
Response: { "coord":{ "lon":159, "lat":35 }, "weather":[ { "id":500, 
"main":"Rain", "description":"light rain", 
"icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], 
"base":"stations", "main":{ "temp":22.59, "pressure":1027.45, 
"humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, 
"grnd_level":1027.45 }, "wind":{ "speed":8.12, "deg":246.503 }, 
"rain":{ "3h":0.45 }, "clouds":{ "all":92 }, "dt":1499521932, 
"sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, 
"id":0, "name":"", "cod":200 }
*/

var lon, lat;
$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(function (location) {
        lon = location.coords.longitude;
        lat = location.coords.latitude;
        getWeather(lon, lat);
    });

})
function getWeather(lon, lat) {
    var weatherAPI = "https://fcc-weather-api.glitch.me/";
    weatherAPI += "/api/current?lon=" + lon;
    weatherAPI += "&lat=" + lat;
    var JSONcity, JSONcountryCode, JSONicon;
    var JSONdata, JSONweatherDescription, JSONtemperature, JSONhumidity, JSONwindspeed;
    $.ajax({
        type: "GET",
        url: weatherAPI,
        success: function (data) {
            //console.log(data);
            JSONdata = data;
            document.getElementById("location-box").innerHTML = data.name + ", " + data.sys.country;
            JSONicon = data.weather[0].icon;
            //window.open(weatherAPI);
            document.getElementById("icon-box").innerHTML = "<img src='" + JSONicon + "' alt='[an API weather image]'>";
            document.getElementById("weather-description-box").innerHTML = data.weather[0].description;
            document.getElementById("temperature-box").innerHTML = Math.round(data.main.temp);
            document.getElementById("humidity-box").innerHTML = data.main.humidity + " % humidity";
            document.getElementById("wind-speed-box").innerHTML = "Wind speed: " + data.wind.speed + " km/h";
        }
    });
};
$(document).ready(function () {
    $("#fahrenheit").click(function () {
        document.getElementById("temperature-box").innerHTML = Math.round(document.getElementById("temperature-box").innerHTML * 9 / 5 + 32);
    });
});
$(document).ready(function () {
    $("#celsius").click(function () {
        document.getElementById("temperature-box").innerHTML = Math.round((document.getElementById("temperature-box").innerHTML - 32) * 5 / 9);
    });
});