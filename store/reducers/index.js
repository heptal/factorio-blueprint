import { combineReducers } from 'redux'
import * as types from '../actions/types'
import {decode, encode} from '../../utils/blueprint'

import {upgrades} from '../../constants/entities'
import { entity_info } from '../../constants/entities';

// const setInitialState = (state = Map()) => {
//   const initialState = {
//     blueprintString
//   };

//   return state.merge(initialState);
// }

const initialState = {
  blueprint: {
    "blueprint": {
      "icons": [],
      "entities": [],
      "tiles": [],
      "item": "blueprint",
      "version": 0
    }
  },
  mode: "select",
  selected: {},
  cellSize: 40,
  newEntityName: "transport-belt"
}

const mode = (state = initialState.mode, action) => {
  switch (action.type) {
    case types.SELECT_MODE:
      return action.mode
    default:
      return state;
  }
}


const newEntityName = (state = initialState.newEntityName, action) => {
  switch (action.type) {
    case types.NEW_ENTITY:
      return action.newEntityName
    default:
      return state;
  }
}

const cellSize = (state = initialState.cellSize, action) => {
  switch (action.type) {
    case types.INCREASE_SIZE:
      return state < 100 ? state + 2 : state
    case types.DECREASE_SIZE:
      return state > 10 ? state - 2 : state
    default:
      return state;
  }
}



const selected = (state = initialState.selected, action) => {
  switch (action.type) {
    case types.MODIFY_ENTITY:
      if (action.mode == "select") {
        return action.entity
      }
      else {
        return state
      }
    default:
      return state;
  }
}

const blueprint = (state = initialState.blueprint, action) => {
  switch (action.type) {
    case types.PROCESS_BLUEPRINT_STRING:
      if (action.blueprintString[0] != '0') {
        return state;
      }
      const blueprint = JSON.parse(decode(action.blueprintString));
      return blueprint;
    case types.PLACE_ENTITY:
      let entityNumber = 0;
      state.blueprint.entities.forEach( entity => {
        entityNumber = entityNumber < entity.entity_number ? entity.entity_number : entityNumber;
      })
      entityNumber += 1;
      const newEntity = {
        entity_number: entityNumber,
        name: action.newEntityName,
        position: action.position
      };
      state.blueprint.entities.push(newEntity);
      return { ...state };

    case types.MODIFY_ENTITY:
      // let entities = state.blueprint.entities
      let entity = action.entity
      let entities = state.blueprint.entities.filter(e => {
            return e != entity;
          });

      switch (action.mode) {
        case "remove":
          // entities = state.blueprint.entities.filter(e => {
          //   return e != entity;
          // });
          return { ...state, blueprint: {entities} };
          // return { ...state };
        case "rotate":
          // entities = state.blueprint.entities.filter(e => {
          //   return e != entity;
          // })
          const info = entity_info[entity.name]
          entity.direction = !!entity.direction ? (entity.direction + 2) % 8 : 2;
          if (info.width != info.height && info.width%2==0 || info.height%2==0) {
            if (entity.direction==2 || entity.direction==6) {
              entity.position.x -= 0.5
              entity.position.y += 0.5
            } else if (entity.direction==0 || entity.direction==4) {
              entity.position.x += 0.5
              entity.position.y -= 0.5

            }
          }
          // entity.position.x = (entity_meta.width%2==0 && entity.direction==2 || entity.direction==6) ? entity.position.x  : entity.position.x
          entities.push(entity);
          return { ...state, blueprint: {entities} };
          // return { ...state };
        default:
          return state;
      }
    case types.BATCH_UPGRADE:
      let upgradable = action.payload;
      let upgrade = upgrades[upgradable];
      let upgraded_entities = state.blueprint.entities.map(entity => {
        entity.name = (entity.name==upgradable ? upgrade : entity.name);
        return entity;
      })
      return { ...state, blueprint: {entities: upgraded_entities} };


    default:
      return state;
  }
}



const rootReducer = combineReducers({
  blueprint,
  mode,
  // hovered,
  selected,
  cellSize,
  newEntityName
})

export default rootReducer