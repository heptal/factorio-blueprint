import { createStore } from 'redux'
import rootReducer from './reducers'

import { applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => Object.assign(
    {},
    createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware, loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    ),
    {runSaga: sagaMiddleware.run(rootSaga)}
);


// const configureStore = (initialState) => (
//   createStore(rootReducer, initialState)
// )

export default configureStore