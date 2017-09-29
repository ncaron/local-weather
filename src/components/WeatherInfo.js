import React from 'react';
import PropTypes from 'prop-types';
import Degrees from '../containers/Degrees';

const WeatherInfo = ({ weather }) => {
  const { city, country, temp, icon, description, activeUnit } = weather;

  return (
    <div>
      <h1 className="location">{city}, {country}</h1>
      <Degrees temp={ temp } activeUnit={ activeUnit } />
      <img className="icon" src={ icon } />
      <p className="description">{description}</p>
    </div>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherInfo;
