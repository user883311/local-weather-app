# local-weather-app
a freecodecamp project

User Story:
=========
User Story: I can see the weather in my current location.
User Story: I can see a different icon or background image (e.g. snowy 
mountain, hot desert) depending on the weather.
User Story: I can push a button to toggle between Fahrenheit and Celsius.

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
