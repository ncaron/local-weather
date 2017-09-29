import axios from 'axios';
import * as types from './actionTypes';

export function fetchWeather(lat, lon) {
  const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
  const request = axios.get(URL);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}

export function convertToFahrenheit() {
  return {
    type: types.CONVERT_TO_FAHRENHEIT
  };
}

export function convertToCelsius() {
  return {
    type: types.CONVERT_TO_CELSIUS
  };
}
