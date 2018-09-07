import React from 'react';
import PropTypes from 'prop-types';
import Entity from './Entity';
import GridCell from './GridCell';
import { blueprintToGridSize } from '../utils/blueprint';

const Grid = ({ blueprint, mode, cellSize, newEntityName, newEntityDirection, onEntityClick, onCellClick }) => {
  const [cols, rows, dX, dY] = blueprintToGridSize(blueprint)
  const style = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    width: `${cellSize*cols}px`,
    height: `${cellSize*rows}px`,
  };

  return (
    <div className="grid-container">
      <div className={`grid`} style={style}>
        {Array(cols).fill().map( (_, x) => (
          Array(rows).fill().map( (_, y) => (
            <GridCell
              cellSize={cellSize}
              gridPosition={{x: x + 1, y: y + 1}}
              offset={{dX, dY}}
              newEntityName={newEntityName}
              newEntityDirection={newEntityDirection}
              onClick={onCellClick}
            />
          ))
        ))}
        {blueprint.entities.map(entity => (
          <Entity
            key={entity.entity_number}
            cellSize={cellSize}
            entity={entity}
            offset={{dX, dY}}
            mode={mode}
            onClick={onEntityClick}
          />
        ))}
      </div>
    </div>
  );
};

Grid.propTypes = {
  blueprint: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  cellSize: PropTypes.number.isRequired,
  newEntityName: PropTypes.string.isRequired,
  newEntityDirection: PropTypes.number.isRequired,
  onEntityClick: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default Grid;
