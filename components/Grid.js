import React from 'react';
import PropTypes from 'prop-types';
import Entity from './Entity';
import GridCell from './GridCell'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions';
import {blueprintToGridSize} from '../utils/blueprint'




const Grid = (props) => {
    const { blueprint, mode, cellSize, newEntityName, onEntityClick, onCellClick } = props;
    // const size = 20;

    // const modifyEntity = (entity, operation) => actions.modifyEntity({entity, operation});
    // const placeEntity = (newEntityName, position) => actions.placeEntity(newEntityName, position);
    // const selectEntity = (entity) => actions.selectEntity(entity);

    const [cols, rows, dX, dY] = blueprintToGridSize(blueprint)

    const style = {
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      width: `${cellSize*cols}px`,
      height: `${cellSize*rows}px`,
    };

    return (
      <div className={`grid`} style={style}>
        {Array(cols).fill().map( (_, x) => (
          Array(rows).fill().map( (_, y) => (
            <GridCell
              x={x + 1}
              y={y + 1}
              dX={dX}
              dY={dY}
              newEntityName={newEntityName}
              onClick={onCellClick}
            />
          ))
        ))}
        {blueprint.blueprint.entities.map(entity => (
          <Entity
            key={entity.entity_number}
            entity={entity}
            dX={dX}
            dY={dY}
            mode={mode}
            onClick={onEntityClick}
          />
        ))}
      </div>
    );
}



Grid.propTypes = {
  blueprint: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  cellSize: PropTypes.number.isRequired,
  newEntityName: PropTypes.string.isRequired,
  onEntityClick: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired,
}

export default Grid;
