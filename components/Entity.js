import React from 'react';
import PropTypes from 'prop-types';
import { entity_info } from '../constants/entities';
import { item_info } from '../constants/items';
import { sizeToPositionOffset } from '../utils/blueprint'

const Module = (props) => {
  const {module} = props
  const module_meta = item_info.find(function(item) {
      // if (module && module.item) {
        // console.log(module.item)
        return item.name == module.item;
      // }

    })

  return (
    <div>
      {Array(module.count).fill().map( _ => (
        <div className="machine-module"><img src={module_meta.icon} /></div>
      ))}
    </div>
  )
}

const Recipe = (props) => {
  const {recipe, items} = props

  const item_meta = item_info.find(function(item) {
      return item.name == recipe;
    })

    //   const styles = {
    //   backgroundImage: `url("${item.icon}")`,
  return (
    <div>
    <div>{item_meta && item_meta.icon &&
      <img src={item_meta.icon} />
    }
     </div>
     <div>
      {items && items.map(item => (
       <Module key={item.item} module={item}/>
      ))}
     </div>
  </div>
  )
}

const Entity = (props) => {
    const { entity, mode, dX, dY, onClick } = props;

    let entity_meta = entity_info[entity.name];




    // const sizeToPositionOffset = (size) => {
    //   return -0.5 * (size - 1)
    // }
    // const positionTo

    let [baseW, baseH] = [entity_meta.width, entity_meta.height]
    if (entity.direction==2 || entity.direction==6) {
      [baseW, baseH] = [baseH, baseW]
    }
    console.log(dX, dY)

    let gridX = Math.floor(entity.position.x + dX + sizeToPositionOffset(baseW));
    let gridY = Math.floor(entity.position.y + dY + sizeToPositionOffset(baseH));

    let gridW = baseW==1 ? 0 : baseW
    let gridH = baseH==1 ? 0 : baseH


    const styles = {
      backgroundImage: `url("${entity_meta.icon}")`,
      gridColumn: `${gridX} / ${gridX + gridW}`,
      gridRow: `${gridY} / ${gridY + gridH}`,
    };
    const arrowStyles = {
      backgroundImage: `url("/graphics/arrows/indication-arrow-up-to-down.png")`,
      // gridColumn: `${gridX} / ${gridX + gridW}`,
      // gridRow: `${gridY} / ${gridY + gridH}`,
      transform: `rotate(${180+45*(entity.direction ? entity.direction : 0)}deg)`
    };

    const arrow = "↑↗→↘↓↙←↖"[entity.direction ? entity.direction : 0]

    return (
        <div
          className="entity"
          style={styles}
          onClick={() => onClick(entity, mode)}
        >
          <div className="recipe">
          {entity_meta.type=="assembling-machine" &&
          <Recipe recipe={entity.recipe} items={entity.items}/>
          }</div>
          <div className="arrow" style={arrowStyles}></div>{arrow}
        </div>
    );
}

Entity.propTypes = {
    entity: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    dX: PropTypes.number.isRequired,
    dY: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Entity
