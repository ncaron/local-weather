import * as types from './actionTypes';

export function fetchLocation() {
  const location = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  });

  return {
    type: types.FETCH_LOCATION,
    payload: location
  };
}
