/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import combinedReducers from './ducks';
import { loadState } from './persist';
import sagas from './sagas';

const sagaMiddleware = createSaga();

// const dev =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  combinedReducers,
  loadState(),
  compose(
    applyMiddleware(sagaMiddleware),
    // dev,
  ),
);

sagaMiddleware.run(sagas);
