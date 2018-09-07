import React from 'react';
import PropTypes from 'prop-types';

const GridCell = ({ cellSize, gridPosition, offset, newEntityName, newEntityDirection, onClick }) => {
  const style = {
    // width: `${cellSize}px`,
    // height: `${cellSize}px`,
    gridColumn: `${gridPosition.x}`,
    gridRow: `${gridPosition.y}`,
  };

  return (
    <div
      className="grid-cell"
      style={style}
      onClick={e => onClick(newEntityName, gridPosition, offset, newEntityDirection)}
    />
  );
};

GridCell.propTypes = {
  cellSize: PropTypes.number.isRequired,
  gridPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  offset: PropTypes.shape({
    dX: PropTypes.number.isRequired,
    dY: PropTypes.number.isRequired,
  }).isRequired,
  newEntityName: PropTypes.string.isRequired,
  newEntityDirection: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridCell;
