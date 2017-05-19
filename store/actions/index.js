import * as types from './types'


export const selectMode = (mode) => ({type: types.SELECT_MODE, mode})

export const modifyEntity = (entity, mode) => ({type: types.MODIFY_ENTITY, entity, mode})
export const removeEntity = (entity) => ({type: types.REMOVE_ENTITY, entity})
export const rotateEntity = (entity) => ({type: types.ROTATE_ENTITY, entity})

export const placeEntity = (newEntityName, position) => ({type: types.PLACE_ENTITY, newEntityName, position})
export const newEntity = (newEntityName) => ({type: types.NEW_ENTITY, newEntityName})


export const increaseSize = () => ({type: types.INCREASE_SIZE})
export const decreaseSize = () => ({type: types.DECREASE_SIZE})


// export const hoverEntity = (payload) => ({type: types.HOVER_ENTITY, payload})
// export const selectEntity = (payload) => ({type: types.SELECT_ENTITY, payload})

export const processBlueprintString = (blueprintString) => ({type: types.PROCESS_BLUEPRINT_STRING, blueprintString})

export const batchUpgrade = (payload) => ({type: types.BATCH_UPGRADE, payload})


