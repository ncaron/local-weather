$('document').ready(function() {
	var temperature;

	// URL to gather location via IP
	var locationUrl = 'http://ip-api.com/json';
	var latitude;
	var longitude;
	var city;
	var region;
	var country;

	// Use the URL to gather information on the user's location
	$.getJSON(locationUrl, function(response) {
		latitude = response.lat;
		longitude = response.lon;
		city = response.city;
		region = response.region;
		country = response.country;

		getWeatherData(latitude, longitude, city, region, country);
	});
});

// Gets weather data based on user's location
var getWeatherData = function(latitude, longitude, city, region, country) {
	var appid = '38edae5f250c030f006e2fb6f54103dc';
	var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=' + appid;

	$.getJSON(url, function(response) {
		var location = city + ', ' + region + ' - ' + country;
		temperature = response.main.temp;
		var tempDesc = response.weather[0].main;
		var icon = getIcon(response.weather[0].icon);

		$('#location').html(location);
		$('#temp-desc').html(tempDesc);
		$('#icon').addClass(icon);
		convertToCelsius(temperature);
	});
};

$('#fahrenheit').on('click', function() {
	convertToFahrenheit(temperature);
});

$('#celsius').on('click', function() {
	convertToCelsius(temperature);
});

var convertToCelsius = function(temperature) {
	$('#temp').html(Math.round(temperature - 273.15) + ' °C');
};

var convertToFahrenheit = function(temperature) {
	$('#temp').html(Math.round(Math.round(temperature * 9/5) - 459.67) + ' °F');
};

// Gets the class name of the icon to be used
var getIcon = function(icon) {
	if (icon === '01d') {
		return 'wi-day-sunny';
	}
	else if (icon === '01n') {
		return 'wi-night-clear';
	}
	else if (icon === '02d') {
		return 'wi-day-cloudy';
	}
	else if (icon === '02n') {
		return 'wi-night-alt-cloudy';
	}
	else if (icon === '03d') {
		return 'wi-cloud';
	}
	else if (icon === '03n') {
		return 'wi-cloud';
	}
	else if (icon === '04d') {
		return 'wi-cloudy';
	}
	else if (icon === '04n') {
		return 'wi-cloudy';
	}
	else if (icon === '09d') {
		return 'wi-day-showers';
	}
	else if (icon === '09n') {
		return 'wi-night-alt-showers';
	}
	else if (icon === '10d') {
		return 'wi-day-rain';
	}
	else if (icon === '10n') {
		return 'wi-night-alt-rain';
	}
	else if (icon === '11d') {
		return 'wi-day-lightning';
	}
	else if (icon === '11n') {
		return 'wi-night-alt-lightning';
	}
	else if (icon === '13d') {
		return 'wi-day-snow';
	}
	else if (icon === '13n') {
		return 'wi-night-alt-snow';
	}
	else if (icon === '50d') {
		return 'wi-day-fog';
	}
	else if (icon === '50n') {
		return 'wi-night-fog';
	}
};