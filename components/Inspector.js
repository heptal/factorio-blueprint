import React from 'react';
import PropTypes from 'prop-types';
import {
  entityInfo
} from '../constants/entities'
import {
  recipeInfo
} from '../constants/recipes'
import {
  itemInfo
} from '../constants/items'

const Inspector = props => {
  const {
    entity
  } = props;

  const info = entityInfo[entity.name]
  let recipe = itemInfo[entity.recipe]
  recipe = recipe ? recipe : recipeInfo[entity.recipe]
  console.log(recipe)

  return (

    <div className="inspector">
            <div className="inspector-header">Inspector - Entity ID {entity.entity_number}</div>
            <div>Type: {info.type}</div>
            <div>Name: <br /><img src={info.icon} /> {entity.name}</div>
            {entity.recipe &&
                <div>Recipe: <br /><img src={recipe.icon} /> {entity.recipe}</div>
            }
            {entity.items &&
            <div>Modules:{entity.items.map(item =>
            <div><img src={itemInfo[item.item].icon} /> {item.count}x {item.item} </div>
            )
            }</div>}
            {entity.control_behavior &&
            <div>
                Control behavior:{entity.control_behavior.circuit_condition &&
                <div>
                    <img src={itemInfo[entity.control_behavior.circuit_condition.first_signal.name].icon} />
                    {entity.control_behavior.circuit_condition.comparator}
                    {entity.control_behavior.circuit_condition.constant}
                </div>
                }
                {entity.connections &&
                <div>Connections: {Object.entries(entity.connections).map(connection =>
                    <div>{Object.entries(connection[1]).map(color =>
                        <div>{color[0]}: {color[1].map(entity =>
                            <span>{entity.entity_id} </span>
                            )}
                        </div>
                        )}
                    </div>
                    )}
                </div>
                }
            </div>
            }
        </div>

  )
}

export default Inspector