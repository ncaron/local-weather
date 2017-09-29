import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weatherReducer(state = initialState.weather, action) {
  switch (action.type) {
    case types.FETCH_WEATHER: {
      const weatherData = action.payload.data;

      return {
        city: weatherData.name,
        country: weatherData.sys.country,
        temp: Math.round(weatherData.main.temp),
        icon: weatherData.weather[0].icon,
        description: weatherData.weather[0].description,
        activeUnit: state.activeUnit,
        loaded: true
      };
    }

    case types.CONVERT_TO_FAHRENHEIT: {
      if (state.activeUnit === 'fahrenheit') {
        return state;
      }

      const newState = Object.assign({}, state);
      const celsius = newState.temp;

      newState.temp = Math.round(celsius * (1.8) + 32);
      newState.activeUnit = 'fahrenheit';
      return newState;
    }

    case types.CONVERT_TO_CELSIUS: {
      if (state.activeUnit === 'celsius') {
        return state;
      }

      const newState = Object.assign({}, state);
      const fahrenheit = newState.temp;

      newState.temp = Math.round((fahrenheit - 32) * (5 / 9));
      newState.activeUnit = 'celsius';
      return newState;
    }

    default:
      return state;
  }
}
