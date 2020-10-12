import { call, put } from 'redux-saga/effects';
import { types as exampleTypes } from '../ducks/example';

function* fetchExample(action) {
  yield put({ type: exampleTypes.SET_IS_LOADING, payload: true });
  let trackResult = {};
  try {
    trackResult = yield call(() => {}, action.payload);
  } catch (err) {
    trackResult = { errorMessage: err.message };
  }
  yield put({ type: exampleTypes.SET_EXAMPLE, payload: { trackResult } });
  yield put({ type: exampleTypes.SET_IS_LOADING, payload: false });
}

export { fetchExample };
