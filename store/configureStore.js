import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


export default function configureStore(initialState) {
  const loggerMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware, loggerMiddleware), window.devToolsExtension
      ? window.devToolsExtension()
      : f => f)),
    runSaga: sagaMiddleware.run(rootSaga)
  }

}

// const configureStore = (initialState) => {
//   return createStore(rootReducer, initialState)
// }

// export default configureStore