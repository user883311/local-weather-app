// Check if browser supports W3C Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}

//Get latitude and longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    // console.log(lat, long);
    var url = `https://fcc-weather-api.glitch.me/api/current?lon=${long}&lat=${lat}`;
    makeCorsRequest(url, render);
}

function errorFunction(error) {
    console.log(error);
}

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
    // console.log(xhr);
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url, callback) {
    // This is a sample server that supports CORS.
    var xhr = createCORSRequest('GET', url);

    if (!xhr) {
        console.log('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () {
        var res = JSON.parse(xhr.responseText);
        // console.log(res)
        callback(res);
    };

    xhr.onerror = function () {
        console.log('Woops, there was an error making the request.');
    };
    xhr.setRequestHeader(
        "Accept", "application/json",
        "Content-Type", "application/x-www-form-urlencoded",
    )
    xhr.send();
}

function updateTextToHtmlId(idString, textString) {
    document.getElementById(idString).textContent = textString;
}

function render(jsonObj) {
    document.getElementById("location-box").textContent = jsonObj.name;
    document.getElementById("icon-box").src = jsonObj.weather[0].icon;
    document.getElementById("weather-description-box").src = jsonObj.weather[0].description;
    document.getElementById("temperature").textContent = Math.round(jsonObj.main.temp).toString();
    document.getElementById("humidity").textContent = jsonObj.main.humidity;
    document.getElementById("temperature-unit").classList.remove("not-active");
}

function switchTempUnit() {
    let initialTemp = document.getElementById("temperature").textContent;
    initialTemp = parseInt(initialTemp);
    let currentUnit = document.getElementById("temperature-unit").textContent;
    if (/°C/.test(currentUnit)) {
        document.getElementById("temperature-unit").textContent = "°F";
        document.getElementById("temperature").textContent = Math.round(initialTemp * 9 / 5 + 32);
    } else {
        document.getElementById("temperature-unit").textContent = "°C";
        document.getElementById("temperature").textContent = Math.round((initialTemp - 32) * 5 / 9);
    }
}