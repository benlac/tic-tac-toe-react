import React from 'react';

import './boardGame.scss';

const BoardGame = () => (
  <div className="board-game">
    <h2 className="board-game__title">C'est à <span className="board-game__player">O</span> de jouer</h2>
    <div className="board">
      <table className="board__box">
        <tbody>
          <tr>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BoardGame;
