import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ value, onClickCase, id }) => {
  const handleClick = () => {
    onClickCase(id);
  };
  return (
    <td onClick={handleClick} data={id}>{value}</td>
  );
};

Line.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCase: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Line;
