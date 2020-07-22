import React from 'react';
import PropTypes from 'prop-types';

import './player.scss';

const Player = ({ player, handleClick }) => {
  const activeX = player === 'o' ? 'active' : '';
  const activeO = player === 'x' ? 'active' : '';

  return (
    <div className="player">
      <div className={`player__select ${activeO}`} onClick={handleClick}>O <span className="score">-</span></div>
      <div className={`player__select ${activeX}`}>X <span className="score">-</span></div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Player;
