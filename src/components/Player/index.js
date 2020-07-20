import React from 'react';
import PropTypes from 'prop-types';

import './player.scss';

const Player = ({ player }) => {
  const activeX = player === 'o' ? 'active' : '';
  const activeO = player === 'x' ? 'active' : '';

  return (
    <div className="player">
      <div className={`player__select ${activeO}`}>O <span className="score">-</span></div>
      <div className={`player__select ${activeX}`}>X <span className="score">-</span></div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.string.isRequired,
};

export default Player;
