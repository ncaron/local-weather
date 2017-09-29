import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ message }) => {
  return (
    <h1 className="loading">{message}</h1>
  );
};

Loading.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loading;
