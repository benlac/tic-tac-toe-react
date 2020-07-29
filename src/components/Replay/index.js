/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './replay.scss';

const Replay = ({ handleClick }) => (
  <div className="replay" onClick={handleClick}>Rejouer</div>
);

React.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Replay;
