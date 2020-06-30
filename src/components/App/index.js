// == Import npm
import React from 'react';

// == Import
import Level from '../Level';
import Player from '../Player';
import BoardGame from '../BoardGame';
import Replay from '../Replay';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Level />
    <Player />
    <BoardGame />
    <Replay />
  </div>
);

// == Export
export default App;
