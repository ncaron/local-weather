$('document').ready(function() {
	var temperature;

	// Checks if geolocation is available and gets user's location
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var appid = '38edae5f250c030f006e2fb6f54103dc';
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;

			var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=' + appid;

			// Gets weather information from Open Weather API
			$.getJSON(url, function(response) {
				var location = response.name + ', ' + response.sys.country;
				temperature = response.main.temp;
				var tempDesc = response.weather[0].main;

				$('#location').html(location);
				$('#temp-desc').html(tempDesc);
				convertToCelsius(temperature);
			});
		});
	}

	$('#fahrenheit').on('click', function() {
		convertToFahrenheit(temperature);
	})

	$('#celsius').on('click', function() {
		convertToCelsius(temperature);
	})
});

var convertToCelsius = function(temperature) {
	$('#temp').html(Math.round(temperature - 273.15) + ' °C');
};

var convertToFahrenheit = function(temperature) {
	$('#temp').html(Math.round(Math.round(temperature * 9/5) - 459.67) + ' °F');
}