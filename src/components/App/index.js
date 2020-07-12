// == Import npm
import React from 'react';

// == Import
import Level from '../Level';
import Player from '../Player';
import BoardGame from '../BoardGame';
import Replay from '../Replay';

import './app.scss';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      lastMove: {
        char: 'o',
        position: null,
      },
    };
    this.onClickCase = this.onClickCase.bind(this);
  }

  onClickCase = (id) => {
    const { lastMove, boardState } = this.state;
    let player = lastMove.char;
    if (lastMove.char === 'o' && boardState[id] === '') {
      boardState.splice(id, 1, 'x');
      player = 'x';
    }
    else if (lastMove.char === 'x' && boardState[id] === '') {
      boardState.splice(id, 1, 'o');
      player = 'o';
    }

    this.setState({
      lastMove: {
        char: player,
        position: id,
      },
      boardState,
    });
  };

  render() {
    const { boardState, lastMove } = this.state;
    return (
      <div className="app">
        <Level />
        <Player />
        <BoardGame
          boardState={boardState}
          onClickCase={this.onClickCase}
          player={lastMove.char}
        />
        <Replay />
      </div>
    );
  }
}
// == Export
export default App;
