import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocation } from '../actions/locationAction';
import Weather from './Weather';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchLocation();
  }

  render() {
    return (
      <div>
        {
          this.props.location.loaded ?
          <Weather
            hasLoaded={ this.props.hasLoaded }
            latitude={ this.props.location.lat }
            longitude={ this.props.location.lon } /> :
          <Loading message={ 'Fetching Location...' } />
        }
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  hasLoaded: PropTypes.func.isRequired,
  fetchLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps({ location }) {
  return { location };
}

export default connect(mapStateToProps, { fetchLocation })(App);
