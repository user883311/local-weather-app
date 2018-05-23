// var lon, lat;
// $(document).ready(function () {
//     navigator.geolocation.getCurrentPosition(function (location) {
//         lon = location.coords.longitude;
//         lat = location.coords.latitude;
//         console.log(lon, lat);
//         getWeather(lon, lat);
//     });
// })

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



// function getWeather(lon, lat) {
//     var weatherAPI = "https://fcc-weather-api.glitch.me/";
//     weatherAPI += "/api/current?lon=" + lon;
//     weatherAPI += "&lat=" + lat;
//     var JSONcity, JSONcountryCode, JSONicon;
//     var JSONdata, JSONweatherDescription, JSONtemperature, JSONhumidity, JSONwindspeed;
//     $.ajax({
//         type: "GET",
//         url: weatherAPI,
//         success: function (data) {
//             //console.log(data);
//             JSONdata = data;
//             document.getElementById("location-box").innerHTML = data.name + ", " + data.sys.country;
//             JSONicon = data.weather[0].icon;
//             //window.open(weatherAPI);
//             document.getElementById("icon-box").innerHTML = "<img src='" + JSONicon + "' alt='[an API weather image]'>";
//             document.getElementById("weather-description-box").innerHTML = data.weather[0].description;
//             document.getElementById("temperature-box").innerHTML = Math.round(data.main.temp);
//             document.getElementById("humidity-box").innerHTML = data.main.humidity + " % humidity";
//             document.getElementById("wind-speed-box").innerHTML = "Wind speed: " + data.wind.speed + " km/h";
//         }
//     });
// };


// $(document).ready(function () {
//     $("#fahrenheit").click(function () {
//         document.getElementById("temperature-box").innerHTML = Math.round(document.getElementById("temperature-box").innerHTML * 9 / 5 + 32);
//     });
// });
// $(document).ready(function () {
//     $("#celsius").click(function () {
//         document.getElementById("temperature-box").innerHTML = Math.round((document.getElementById("temperature-box").innerHTML - 32) * 5 / 9);
//     });
// });