import React from 'react';
import PropTypes from 'prop-types';
import { sizeToPositionOffset } from '../utils/blueprint'
import { entity_info } from '../constants/entities';


const GridCell = (props) => {
    const {x, y, dX, dY, newEntityName, onClick } = props;
    let entity_meta = entity_info[newEntityName];
    const position = {x: x - dX + (dX==Math.trunc(dX) ? 0 : 0.5), y: y - dY + (dY==Math.trunc(dY) ? 0 : 0.5)}

    // let [baseW, baseH] = [entity_meta.width, entity_meta.height]
    // if (entity.direction==2 || entity.direction==6) {
    //   [baseW, baseH] = [baseH, baseW]
    // }
    position.x = position.x + (entity_meta.width % 2 == 0 ? -0.5 : 0 )
    position.y = position.y + (entity_meta.height % 2 == 0 ? -0.5 : 0 )

    // const sizeToPositionOffset = (size) => {
    //   return -0.5 * (size - 1)
    // eq}

    const cellStyle = {
      gridColumn: `${x}`,
      gridRow: `${y}`,
    };

    return (
        <div className="grid-cell" style={cellStyle} onClick={e => onClick(newEntityName, position)}></div>
    )
}

GridCell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    dX: PropTypes.number.isRequired,
    dY: PropTypes.number.isRequired,
    newEntityName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default GridCell