import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../actions/weatherAction';

class Degrees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="temp">
        <p>{this.props.temp}&deg;</p>

        <div className="units">
          <span
            onClick={ this.props.weatherActions.convertToCelsius }
            className={ this.props.activeUnit === 'celsius' && 'active' }>C</span>
          <span
            onClick={ this.props.weatherActions.convertToFahrenheit }
            className={ this.props.activeUnit === 'fahrenheit' && 'active' }>
            F
          </span>
        </div>
      </div>
    );
  }
}

Degrees.propTypes = {
  temp: PropTypes.number.isRequired,
  activeUnit: PropTypes.string.isRequired,
  weatherActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return { weatherActions: bindActionCreators(weatherActions, dispatch) };
}

export default connect(null, mapDispatchToProps)(Degrees);
