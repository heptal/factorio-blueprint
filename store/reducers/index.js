import { combineReducers } from 'redux'
import undoable, { includeAction } from 'redux-undo'
import * as types from '../actions/types'
import { decode } from '../../utils/blueprint'
import {upgrades} from '../../constants/entities'
import { entityInfo, rotatable } from '../../constants/entities';

const initialState = {
  blueprint: {
      icons: [],
      entities: [],
      tiles: [],
      item: "blueprint",
      version: 0
  },
  mode: "inspect",
  selected: {},
  cellSize: 30,
  newEntityName: "transport-belt",
  newEntityDirection: 0
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

const newEntityDirection = (state = initialState.newEntityDirection, action) => {
  if (action.type==types.MODIFY_ENTITY && action.mode == "rotate") {
    let entity = action.entity
    if (!rotatable.includes(entityInfo[entity.name].type)) {
      return state;
    }
    return (entity.direction + 2) % 8;
  } else {
    return state
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
      if (action.mode == "inspect") {
        return action.entity
      }
      else {
        return state
      }
    default:
      return state;
  }
}

const rotateEntity = (e) => {
  const entity = Object.assign({}, e)
  const info = entityInfo[entity.name]
  entity.direction = !!entity.direction ? (entity.direction + 2) % 8 : 2;
  if (info.width != info.height && info.width % 2 == 0 || info.height % 2 == 0) {
    if (entity.direction==2 || entity.direction==6) {
      entity.position.x -= 0.5
      entity.position.y += 0.5
    } else if (entity.direction==0 || entity.direction==4) {
      entity.position.x += 0.5
      entity.position.y -= 0.5
    }
  }
  return entity
}

const blueprint = (state = initialState.blueprint, action) => {
  switch (action.type) {
    case types.PROCESS_BLUEPRINT_STRING:
      if (action.blueprintString[0] != '0') {
        return state;
      }
      return JSON.parse(decode(action.blueprintString)).blueprint;

    case types.PLACE_ENTITY:
      const entityNumber = state.entities.reduce((acc, entity) => Math.max(acc, entity.entity_number), 0) + 1;
      const { name, position: {x, y}, offset: {dX, dY}, direction } = action
      const position = {
        x: x - dX + (dX == Math.trunc(dX) ? 0 : 0.5),
        y: y - dY + (dY == Math.trunc(dY) ? 0 : 0.5)
      }
      const info = entityInfo[name];
      position.x = position.x + (info.width % 2 == 0 ? -0.5 : 0)
      position.y = position.y + (info.height % 2 == 0 ? -0.5 : 0)

      let newEntity = {
        entity_number: entityNumber,
        name: action.name,
        position: position,
        direction: 0,
      };

      if (rotatable.includes(info.type)) {
        while (newEntity.direction != direction) {
          newEntity = rotateEntity(newEntity)
        }
      }
      return Object.assign({}, state, {entities: [...state.entities, newEntity]});



    case types.MODIFY_ENTITY:
      const entity = action.entity
      const entities = state.entities.filter(e => e != entity);
      switch (action.mode) {
        case "remove":
          return Object.assign({}, state, {entities});
        case "rotate":
          if (!rotatable.includes(entityInfo[entity.name].type)) {
            return state;
          }
          return Object.assign({}, state, {entities: [...entities, rotateEntity(action.entity)]});
        default:
          return state;
      }
    case types.BATCH_UPGRADE:
      const { upgradable } = action;
      const ents = state.entities.map(e => {
        const entity = Object.assign({}, e);
        entity.name = (entity.name == upgradable ? upgrades[upgradable] : entity.name);
        return entity;
      })
      return Object.assign({}, state, {entities: ents});

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  blueprint: undoable(blueprint, {debug: true, filter: includeAction([
    types.MODIFY_ENTITY,
    types.PLACE_ENTITY,
    types.BATCH_UPGRADE,
    types.REMOVE_ENTITY
    ])}),
  mode,
  selected,
  cellSize,
  newEntityName,
  newEntityDirection
})

export default rootReducer