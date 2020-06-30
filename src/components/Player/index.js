import React from 'react';

import './player.scss';

const Player = () => (
  <div className="player">
    <div className="player__select">O <span className="score">1</span></div>
    <div className="player__select">X <span className="score">2</span></div>
  </div>
);

export default Player;
