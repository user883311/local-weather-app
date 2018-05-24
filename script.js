// var lon, lat;
// $(document).ready(function () {
//     navigator.geolocation.getCurrentPosition(function (location) {
//         lon = location.coords.longitude;
//         lat = location.coords.latitude;
//         console.log(lon, lat);
//         getWeather(lon, lat);
//     });
// })

//Check if browser supports W3C Geolocation API
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// }
// //Get latitude and longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     console.log(lat, long);
//     getWeather(lat, long);
// }

// function errorFunction(error) {
//     console.log(error);
// }

// function getWeather(lon, lat) {
//     // https://openweathermap.org/current
//     let api = new XMLHttpRequest();
//     // let APIKEY = "f13e33dc5e96b1a4c9fc0948f9095d1a"
//     api.open("GET", `http://gd.geobytes.com/GetCityDetails`);
//     // api.setRequestHeader(
//     //     "Accept", "application/json",
//     //     "Content-Type", "application/x-www-form-urlencoded"
//     // )
//     api.send();
//     api.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this);
//             var data = JSON.parse(this.response);
//             console.log(data);
//         }
//     }
// }



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



// getWeather(1,130);

// function getWeather(lon, lat) {
//     // https://darksky.net/
//     let api = new XMLHttpRequest();
//     let APIKEY = "020ccb1cb7edea9f2d828997f73b49fd";
//     api.open("GET", `https://api.darksky.net/forecast/020ccb1cb7edea9f2d828997f73b49fd/1,130`);
//     api.setRequestHeader(
//         "Accept", "application/json",
//         "crossDomain", true
//     )
//     api.send();
//     api.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this);
//             var data = JSON.parse(this.response);
//             console.log(data);
//         }
//     }
// }



// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    console.log(xhr);
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var xhr = createCORSRequest('GET', url);

    if (!xhr) {
        console.log('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () {
        var text = xhr.responseText;
        console.log(text);
    };

    xhr.onerror = function () {
        console.log('Woops, there was an error making the request.');
    };
    xhr.setRequestHeader(
        "Accept", "application/json",
        "Content-Type", "application/x-www-form-urlencoded",
        // "X-Mashape-Key", "U4b3CaPdKOmsh1KhijHacuQlJlcpp13WPT0jsn4RERXGyE1PXv",
        // "X-Mashape-Host", "weatherbit-v1-mashape.p.mashape.com"
    )
    xhr.send();
}

var url = "https://api.darksky.net/forecast/020ccb1cb7edea9f2d828997f73b49fd/37.8267,-122.4233";
makeCorsRequest();

// document.getElementById("test").textContent = this;