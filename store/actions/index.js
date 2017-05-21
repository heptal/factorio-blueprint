import * as types from './types'

export const modifyEntity = (entity, mode) => ({type: types.MODIFY_ENTITY, entity, mode})
export const placeEntity = (name, position, offset, direction) => ({type: types.PLACE_ENTITY, name, position, offset, direction})

export const selectNewEntity = (newEntityName) => ({type: types.NEW_ENTITY, newEntityName})
export const selectMode = (mode) => ({type: types.SELECT_MODE, mode})
export const increaseSize = () => ({type: types.INCREASE_SIZE})
export const decreaseSize = () => ({type: types.DECREASE_SIZE})

export const processBlueprintString = (blueprintString) => ({type: types.PROCESS_BLUEPRINT_STRING, blueprintString})

export const batchUpgrade = (upgradable) => ({type: types.BATCH_UPGRADE, upgradable})


