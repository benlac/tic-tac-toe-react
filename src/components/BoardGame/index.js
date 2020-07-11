/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import './boardGame.scss';
import Line from './Line';

const BoardGame = ({ boardState, onClickCase, player }) => {
  const nextPlayer = player === 'o' ? 'x' : 'o';
  return (
    <div className="board-game">
      <h2 className="board-game__title">C'est à <span className="board-game__player">{nextPlayer}</span> de jouer</h2>
      <div className="board">
        <table className="board__box">
          <tbody>
            <tr>
              {boardState.map((item, index) => {
                console.log(item);
                return <Line id={index} value={item} key={index} onClickCase={onClickCase} />;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

BoardGame.propTypes = {
  boardState: PropTypes.array.isRequired,
  onClickCase: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired,
};

export default BoardGame;
