import React from 'react';
import PropTypes from 'prop-types';
import { entityInfo, rotatable } from '../constants/entities';
import { itemInfo } from '../constants/items';
import { recipeInfo } from '../constants/recipes';
import { sizeToPositionOffset } from '../utils/blueprint';

const Modules = ({ items }) => {
  const modules = items.reduce((acc, mod) => acc.concat(Array(mod.count).fill(mod.item)), []);

  return (
    <div className="modules">
      {modules.map( (name, i) =>
        <div key={i} className="module-item"><img src={itemInfo[name].icon} /></div>
      )}
    </div>
  );
};

const Arrow = ({ item, direction }) => {
  const flipped = item.type == "inserter";
  const [width, height] = [2, 6].includes(direction) ? [item.height, item.width] : [item.width, item.height];

  const style = {
    width: `${100*(width > height ? height/width : 1)}%`,
    height: `100%`,
    transform: `rotate(${180 + 45 * (direction ? direction : 0) - 180 * (flipped ? -1: 0)}deg)`
  };

  return (
    <div className="arrow" style={style}>
      <img src="/graphics/arrows/indication-arrow-up-to-down.png"/>
    </div>
  );
};

const Recipe = ({ recipe }) => {
  let info = itemInfo[recipe];
  info = info ? info : recipeInfo[recipe];

  return (
    <div className="recipe">
      <img src={info.icon} />
    </div>
  );
};

const Entity = ({ cellSize, entity, mode, offset, onClick }) => {
  const entityMeta = entityInfo[entity.name];

  let [baseW, baseH] = [entityMeta.width, entityMeta.height];
  if (entity.direction == 2 || entity.direction == 6) {
    [baseW, baseH] = [baseH, baseW];
  }

  const gridX = Math.floor(entity.position.x + offset.dX + sizeToPositionOffset(baseW));
  const gridY = Math.floor(entity.position.y + offset.dY + sizeToPositionOffset(baseH));
  const gridW = baseW == 1 ? 0 : baseW;
  const gridH = baseH == 1 ? 0 : baseH;

  let rotation = 0;
  let arrowsOn = rotatable.includes(entityMeta.type) ? true : false;
  if (entityMeta.type == "transport-belt") {
    arrowsOn = false;
    rotation = 45 * (entity.direction ? entity.direction : 0);
  }

  const style = {
    backgroundImage: `url("${entityMeta.icon}")`,
    gridColumn: `${gridX} / ${gridX + gridW}`,
    gridRow: `${gridY} / ${gridY + gridH}`,
    transform: `rotate(${rotation}deg)`
  };

  return (
    <div
      className="entity"
      style={style}
      onClick={() => onClick(entity, mode)}
    >
      {entity.recipe && <Recipe recipe={entity.recipe} />}
      {entity.items && <Modules items={entity.items} />}
      {arrowsOn && <Arrow item={entityMeta} direction={entity.direction}/>}
    </div>
  );
};

Entity.propTypes = {
  cellSize: PropTypes.number.isRequired,
  entity: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  offset: PropTypes.shape({
    dX: PropTypes.number.isRequired,
    dY: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Entity;
