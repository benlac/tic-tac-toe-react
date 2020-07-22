/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/**
 * Check if a player has won
 * @param {Array} squares Array: board game
 * @return The winning player or null if no match
 */
export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== '' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

/**
 * Check if a match is null
 * @param {Array} squares Array: board game
 * @return true if array empty: all the boxes have been played
 */
export const matchNull = (squares) => {
  const result = squares.map((square) => square !== '');
  const sortArr = result.filter((value) => value === false);
  return sortArr.length === 0;
};
