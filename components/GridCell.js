import React from 'react';
import PropTypes from 'prop-types';

const GridCell = (props) => {
  const { gridPosition, offset, newEntityName, newEntityDirection, onClick } = props;

  const cellStyle = {
    gridColumn: `${gridPosition.x}`,
    gridRow: `${gridPosition.y}`,
  };
  // console.log(newEntityName, newEntityDirection)

  return (
    <div className="grid-cell" style={cellStyle} onClick={e => onClick(newEntityName, gridPosition, offset, newEntityDirection)}></div>
  )
}

GridCell.propTypes = {
  gridPosition: PropTypes.object.isRequired,
  offset: PropTypes.object.isRequired,
  newEntityName: PropTypes.string.isRequired,
  newEntityDirection: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default GridCell