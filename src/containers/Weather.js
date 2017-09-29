import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';
import WeatherInfo from '../components/WeatherInfo';
import Loading from '../components/Loading';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  render() {
    return (
      <div>
        {
          this.props.weather.loaded ?
          <WeatherInfo weather={ this.props.weather } /> :
          <Loading message={ 'Fetching Weather...' } />
        }
      </div>
    );
  }
}

Weather.propTypes = {
  hasLoaded: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, { fetchWeather })(Weather);
