// == Import npm
import React from 'react';

// == Import
import Level from '../Level';
import Player from '../Player';
import BoardGame from '../BoardGame';
import Replay from '../Replay';

import './app.scss';
import { calculateWinner, matchNull } from '../../utils/function';

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
    if (calculateWinner(boardState)) {
      return;
    }
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

  resetGame = () => {
    this.setState({
      boardState: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      lastMove: {
        char: 'o',
        position: null,
      },
    });
  }

  render() {
    const { boardState, lastMove } = this.state;
    const winner = calculateWinner(boardState);
    const gameNull = !winner && matchNull(boardState);
    return (
      <div className="app">
        <Level />
        <Player player={lastMove.char} />
        <BoardGame
          boardState={boardState}
          onClickCase={this.onClickCase}
          player={lastMove.char}
          winner={winner}
          gameNull={gameNull}
        />
        <Replay handleClick={this.resetGame} />
      </div>
    );
  }
}
// == Export
export default App;
